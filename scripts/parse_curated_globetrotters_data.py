import json
import csv
import re
import sys

from typing import Callable, List, Dict, Set, Any, Tuple
import dataclasses
from enum import Enum


class Ocean(Enum):
    ATLANTIC = 'Atlantic'
    INDIAN_OCEAN = 'Indian Ocean'


class Region(Enum):
    NEW_FRANCE = 'New France'
    BOURBON = 'Isle Bourbon & Isle of France'
    CARIBBEAN = 'Caribbean'
    LOUISIANA = 'Louisiana'
    SENEGAL = 'Senegal'
    INDIA = 'India'
    GUYANA = 'Guyana'
    MADAGASCAR = 'Madagascar'

    def ocean(self) -> Ocean:
        if self.value in ('Caribbean', 'Louisiana', 'New France', 'Guyana'):
            return Ocean.ATLANTIC
        if self.value in ('India', 'Isle Bourbon & Isle of France', 'Senegal', 'Madagascar'):
            return Ocean.INDIAN_OCEAN
        raise Exception(f"Unsupported enum value: {self.value}")

    @staticmethod
    def from_str(string: str) -> 'Region':
        if string == 'Bourbon':
            return Region.BOURBON
        return Region(string)


class Occupation(Enum):
    OFFICIAL = 'Official'
    MILITARY = 'Military'
    OTHER = 'Other'

    @staticmethod
    def from_str(string: str) -> 'Occupation':
        if string == 'Missionary':
            return Occupation.OTHER
        return Occupation(string)


@dataclasses.dataclass
class Person:
    regions: List[Region]
    departure_date: int
    via_metropole: bool
    occupation: Occupation
    saw_both_oceans: bool


@dataclasses.dataclass
class Edge:
    bio: str
    annotated_bio: str
    name: str
    from_: Region  # 'from' is a python keyword
    to: Region
    departure_date: int
    via_metropole: bool
    occupation: Occupation

    def to_dict(self) -> Dict[str, Any]:
        return {
            'bio': self.bio,
            'annotated_bio': self.annotated_bio,
            'name': self.name,
            'from': self.from_.value,
            'to': self.to.value,
            'to_date': self.departure_date,
            'via_metropole': self.via_metropole,
            'tag': self.occupation.value
        }

########### BIOGRAPHY ANALYSIS FUNCTIONS ###################


KEYWORDS: Set[str] = {
    'cap-français',
    'saint-vincent',
    'martinique',
    'saint-louis',
    'îles du vent',
    'caribbean',
    'saint-domingue',
    'grenada',
    'guadeloupe',
    'saint domingue',
    'port-au-prince',
    'chandannagar',
    'surat',
    'pondicherry',
    'isle bourbon',
    'bourbon',
    'isle of france',
    'québec',
    'new france',
    'canada',
    'île royale',
    'montreal',
    'quebec',
    'louisbourg',
    'louisiana',
    'new orleans',
    'Guyana',
    'cayenne',
    'gorée',
    'senegal'
}


def get_index(haystack: str, needle: str) -> int:
    match = re.search(fr"\b{needle}\b", haystack, re.IGNORECASE)
    if match is None:
        return -1
    return match.start()


def str_to_bool(string: str) -> bool:
    clean_str = string.strip().lower()
    if clean_str == "yes":
        return True
    if clean_str == "no":
        return False
    print(
        f'[WARNING] Unrecognized boolean value: "{clean_str}" - defaulting to False')
    return False


def get_regions(regions_str: str) -> List[Region]:
    result = []
    for reg in regions_str.split(';'):
        result.append(Region.from_str(reg))
    return result

# ------------------- GRAPH DATA EXPORT -----------------------------

# Decorate the name with a <strong> tag and the keywords with a <mark> tag
# for pretty rendering in the network modal


def annotate_bio(bio: str, name: str) -> str:
    keywords = [kw for kw in KEYWORDS if get_index(bio, kw) > -1]
    for keyword in keywords:
        bio = re.sub(keyword, r"<mark>\g<0></mark>",
                     bio, flags=re.IGNORECASE)
    return re.sub(name, r"<strong>\g<0></strong>", bio)


def process_row(row: Dict[str, str]) -> Tuple[Person, List[Edge]]:
    name = row['Name']
    try:
        regions = get_regions(row['Regions'])
    except Exception:
        print(f"Failed to parse regions string for {name}: '{row['Regions']}'")
        sys.exit(1)

    annotated_bio = annotate_bio(row['Biography'], name)
    dep_date = int(row['Date of departure'])
    via_metropole = str_to_bool(row['Time in metropolitan France'])
    occupation = Occupation.from_str(row['Occupation'])
    saw_both_oceans = len({reg.ocean() for reg in regions}) > 1

    person = Person(regions=regions, departure_date=dep_date,
                    via_metropole=via_metropole, occupation=occupation,
                    saw_both_oceans=saw_both_oceans)

    edges = []
    for i in range(len(regions)-1):
        edges.append(Edge(
            bio=row['Biography'],
            annotated_bio=annotated_bio,
            name=name,
            from_=regions[i],
            to=regions[i+1],
            departure_date=dep_date,
            via_metropole=via_metropole,
            occupation=occupation,
        ))
    return person, edges

########################### DATA PROCESSING #######################################


all_edges: List[Edge] = []
all_people: List[Person] = []

with open('curated_globetrotters_data.csv', encoding='utf-8-sig') as input_csv:
    input_data = list(csv.DictReader(input_csv))
    for row in input_data:
        name = row['Name']
        dep_date = row['Date of departure'].strip()
        if dep_date == '':
            print(
                f"[WARNING] Skipping {name} who doesn't have a departure date")
            continue
        if int(dep_date) > 1785:
            print(f"[WARNING] Skipping {name} who travelled after 1785")
            continue
        if row['Regions'].strip() == '':
            print(f"[WARNING] Skipping {name} who doesn't have regions")
            continue

        person, edges = process_row(row)
        all_edges += edges
        all_people.append(person)


with open('../data/officials/links.js', 'w') as out_js_file:
    json_str = json.dumps([edge.to_dict()
                          for edge in all_edges], indent=2, ensure_ascii=False)
    out_js_file.write(f"const OFFICIALS_LINKS = {json_str};\n")

print("Results written to ../data/officials/links.js")
print("==================================")

# --------------------  DATA ANALYSIS -----------------------------


def count_if(people: List[Person], filter_func: Callable[[Person], bool], show_pct: bool = True) -> str:
    n = len(people)
    n_filtered = len([p for p in people if filter_func(p)])
    res = f"{n_filtered}/{n}"
    if show_pct:
        res += f" ({round(n_filtered/n*100)} %)"
    return res


def print_header(title: str):
    print(f"\n{title}\n=================")


print(f"Kept {len(all_people)}/{len(input_data)} biographies")
print(f"(We will draw {len(all_edges)} edges)")

print_header("Dates")
departure_dates = [p.departure_date for p in all_people]
print("Year of first journey:", min(departure_dates))
print("Year of last journey:", max(departure_dates))

print(
    "#ppl who travelled before 1720:",
    count_if(all_people, lambda p: p.departure_date <= 1720)
)
print(
    "#ppl who travelled after 1763:",
    count_if(all_people, lambda p: p.departure_date > 1763)
)

print_header("Occupations")
print("Breakdown of people by occupation:")
for occup in Occupation:
    print(
        f"  * {occup.value}: {count_if(all_people, lambda p: p.occupation == occup)}")

print_header("Oceans")
print("People who travelled within a single ocean ONLY:")
for ocean in Ocean:
    print(f"  * {ocean.value}: {count_if(all_people, lambda p: {reg.ocean() for reg in p.regions} == {ocean})}")

print(
    "#ppl who went through both oceans:",
    count_if(all_people, lambda p: p.saw_both_oceans)
)

print("People who went through both oceans, by occupation:")
for occup in Occupation:
    print(
        f"  * {occup.value}: {count_if(all_people, lambda p: p.saw_both_oceans and p.occupation == occup)}")

print_header("Specific locations")
print("People who went through:")
print("  * continental North America and Caribbean:",
      count_if(all_people, lambda p: Region.CARIBBEAN in p.regions and (
          Region.LOUISIANA in p.regions or Region.NEW_FRANCE in p.regions
      ))
      )

print(
    "  * Bourbon/Isle of France:",
    count_if(all_people, lambda p: Region.BOURBON in p.regions)
)
print("  * West Africa + Mascarennes:",
      count_if(
          all_people, lambda p: Region.BOURBON in p.regions and Region.SENEGAL in p.regions)
      )
print("  * Caribbean + Mascarennes:",
      count_if(
          all_people, lambda p: Region.CARIBBEAN in p.regions and Region.BOURBON in p.regions)
      )
print("  * continental North America (New France/Louisiana) + Mascarennes:",
      count_if(
          all_people, lambda p: Region.BOURBON in p.regions and (
              Region.NEW_FRANCE in p.regions or Region.LOUISIANA in p.regions
          ))
      )
