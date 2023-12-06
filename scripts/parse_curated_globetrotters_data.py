from __future__ import annotations
import matplotlib.pyplot as plt
from contextlib import contextmanager

import json
import csv
import re
import sys

from typing import Callable, List, Dict, Optional, Set, Any, Tuple
import dataclasses
from enum import Enum

parse_authors_data = len(sys.argv) > 1 and sys.argv[1] == "--authors"

if parse_authors_data:
    INPUT_FILE = 'raw_data/travel-narrative-authors-journeys.csv'
    OUTPUT_FILE = '../data/officials/travel-narrative-authors-links.js'
    JS_CONST_NAME = 'TRAVEL_NARRATIVE_AUTHORS_LINKS'
else:
    INPUT_FILE = 'raw_data/curated_globetrotters_data.csv'
    OUTPUT_FILE = '../data/officials/links.js'
    JS_CONST_NAME = 'OFFICIALS_LINKS'


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
        # TODO should Senegal be moved to ATLANTIC?
        if self.value in ('India', 'Isle Bourbon & Isle of France', 'Senegal', 'Madagascar'):
            return Ocean.INDIAN_OCEAN
        raise Exception(f"Unsupported enum value: {self.value}")

    @staticmethod
    def from_str(string: str) -> 'Region':
        if string in ('Bourbon', 'Isle Bourbon'):
            return Region.BOURBON
        if string in ('Dominica', 'Guadeloupe', "Martinique", "Saint-Domingue", "Saint-Christophe", "Saint Christopher"):
            return Region.CARIBBEAN
        return Region(string)


class Occupation(Enum):
    OFFICIAL = 'Official'
    MILITARY = 'Military'
    OTHER = 'Other'

    @staticmethod
    def from_str(string: str) -> Occupation:
        if string == 'Missionary':
            return Occupation.OTHER
        return Occupation(string)


@dataclasses.dataclass
class Person:
    regions: List[Region]
    departure_date: int
    via_metropole: Optional[bool]
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
    via_metropole: Optional[bool]
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


def str_to_bool(string: str) -> Optional[bool]:
    clean_str = string.strip().lower()
    if clean_str == "yes":
        return True
    if clean_str == "no":
        return False
    return None


def get_regions(regions_str: str) -> List[Region]:
    result = []
    for reg in regions_str.split(';'):
        result.append(Region.from_str(reg.strip()))
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
    except Exception as e:
        print(
            f"Failed to parse regions string for {name}: '{row['Regions']}' -- {str(e)}")
        sys.exit(1)

    annotated_bio = annotate_bio(row['Biography'], name)
    dep_date = int(row['Date of departure'])
    via_metropole = str_to_bool(row['Time in metropolitan France'])
    occupation = Occupation.from_str(row['Occupation'].strip())
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


ALL_EDGES: List[Edge] = []
ALL_PEOPLE: List[Person] = []

with open(INPUT_FILE, encoding='utf-8-sig') as input_csv:
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
        ALL_EDGES += edges
        ALL_PEOPLE.append(person)


with open(OUTPUT_FILE, 'w') as out_js_file:
    json_str = json.dumps([edge.to_dict()
                          for edge in ALL_EDGES], indent=2, ensure_ascii=False)
    out_js_file.write(f"const {JS_CONST_NAME} = {json_str};\n")

print(f"Results written to {OUTPUT_FILE}")
print("==================================")

# --------------------  DATA ANALYSIS -----------------------------


@contextmanager
def restrict_time_period(from_year: int, to_year: int):
    global ALL_PEOPLE, ALL_EDGES
    _all_people_old = ALL_PEOPLE
    _all_edges_old = ALL_EDGES
    ALL_PEOPLE = [p for p in ALL_PEOPLE if p.departure_date >=
                  from_year and p.departure_date <= to_year]
    ALL_EDGES = [e for e in ALL_EDGES if e.departure_date >=
                 from_year and e.departure_date <= to_year]
    yield
    ALL_PEOPLE = _all_people_old
    ALL_EDGES = _all_edges_old


def from_to(journey: Edge, places1: List[Region], places2: List[Region]) -> bool:
    return (journey.from_ in places1 and journey.to in places2) or (
        journey.from_ in places2 and journey.to in places1
    )

def from_to_person(person: Person, places1: List[Region], places2: List[Region]) -> bool:
    regions = person.regions
    for from_place in places1:
        for to_place in places2:
            if from_place in regions and to_place in regions:
                i1 = regions.index(from_place)
                i2 = regions.index(to_place)
                if i1 < i2:
                    return True
    return False


def count_if(people: List[Person], filter_func: Callable[[Person], bool], show_pct: bool = True) -> str:
    n = len(people)
    n_filtered = len([p for p in people if filter_func(p)])
    res = f"{n_filtered}/{n}"
    if show_pct:
        res += f" ({round(n_filtered/n*100)} %)"
    return res


def cnt_j(label: str, filter_func: Callable[[Edge], bool]):
    n = len(ALL_EDGES)
    n_filtered = len([e for e in ALL_EDGES if filter_func(e)])
    pct = int(round(n_filtered / n * 100))
    print(f"{label}: {n_filtered}/{n} ({pct} %)")


def cnt_p(label: str, filter_func: Callable[[Person], bool], universe: Optional[List[Person]] = None):
    universe = universe or ALL_PEOPLE
    n = len(universe)
    n_filtered = len([p for p in universe if filter_func(p)])
    pct = int(round(n_filtered / n * 100))
    print(f"{label}: {n_filtered}/{n} ({pct} %)")


def was_in_mascarennes(p: Person) -> bool:
    return any(reg in p.regions for reg in [Region.BOURBON, Region.MADAGASCAR])


def print_header(title: str):
    print(f"\n{title}\n=================")


print(f"Kept {len(ALL_PEOPLE)}/{len(input_data)} biographies")
print(f"(We will draw {len(ALL_EDGES)} edges)")

print_header("Dates")
departure_dates = [p.departure_date for p in ALL_PEOPLE]
print("Year of first journey:", min(departure_dates))
print("Year of last journey:", max(departure_dates))

print(
    "#ppl who travelled before 1710:",
    count_if(ALL_PEOPLE, lambda p: p.departure_date <= 1710)
)
print(
    "#ppl who travelled after 1763:",
    count_if(ALL_PEOPLE, lambda p: p.departure_date > 1763)
)

print_header("Occupations")
print("Breakdown of people by occupation:")
for occup in Occupation:
    print(
        f"  * {occup.value}: {count_if(ALL_PEOPLE, lambda p: p.occupation == occup)}")

print_header("Oceans")
print("People who travelled within a single ocean ONLY:")
for ocean in Ocean:
    print(f"  * {ocean.value}: {count_if(ALL_PEOPLE, lambda p: {reg.ocean() for reg in p.regions} == {ocean})}")

print(
    "#ppl who went through both oceans:",
    count_if(ALL_PEOPLE, lambda p: p.saw_both_oceans)
)

print("People who went through both oceans, by occupation:")
for occup in Occupation:
    print(
        f"  * {occup.value}: {count_if(ALL_PEOPLE, lambda p: p.saw_both_oceans and p.occupation == occup)}")

print_header("Specific locations")
print("People who went through:")
print("  * continental North America and Caribbean:",
      count_if(ALL_PEOPLE, lambda p: Region.CARIBBEAN in p.regions and (
          Region.LOUISIANA in p.regions or Region.NEW_FRANCE in p.regions
      ))
      )

print(
    "  * Bourbon/Isle of France:",
    count_if(ALL_PEOPLE, lambda p: Region.BOURBON in p.regions)
)
print("  * West Africa + Mascarennes:",
      count_if(
          ALL_PEOPLE, lambda p: Region.BOURBON in p.regions and Region.SENEGAL in p.regions)
      )
print("  * Caribbean + Mascarennes:",
      count_if(
          ALL_PEOPLE, lambda p: Region.CARIBBEAN in p.regions and Region.BOURBON in p.regions)
      )
print("  * continental North America (New France/Louisiana) + Mascarennes:",
      count_if(
          ALL_PEOPLE, lambda p: Region.BOURBON in p.regions and (
              Region.NEW_FRANCE in p.regions or Region.LOUISIANA in p.regions
          ))
      )

print_header("Metropole")
print("Ppl who passed through the metropole:")
for val in (True, False, None):
    str_val = {True: "Yes", False: "No", None: "Unknown"}[val]
    print(f"  * {str_val}:", count_if(ALL_PEOPLE,
          lambda p: p.via_metropole == val))

################ DATA ANALYSIS V2 (Feb 2023) ############################

print_header("Data analysis Feb 2023 ; 1588-1785")

with restrict_time_period(1588, 1785):
    cnt_j("All journeys", lambda j: True)
    cnt_p("People traveling between 1588-1785: ", lambda p: True)
    cnt_p("OFFICIALS traveling between 1588-1785: ",
          lambda p: p.occupation == Occupation.OFFICIAL)
    cnt_p("MILITARY ppl traveling between 1588-1785: ",
          lambda p: p.occupation == Occupation.MILITARY)
    cnt_j("Journeys after 1763", lambda j: j.departure_date >= 1763)
    cnt_j("Journeys of military men, 1756-1785", lambda j:
          j.occupation == Occupation.MILITARY and j.departure_date >= 1756
          and j.departure_date <= 1785)
    cnt_p("Military men who moved from New France/Louisiana/Caribbean to Mascarennes, 1756-1785",
          lambda p: p.occupation == Occupation.MILITARY 
          and p.departure_date >= 1756 and p.departure_date <= 1785
          and from_to_person(p, [Region.LOUISIANA, Region.NEW_FRANCE, Region.CARIBBEAN], [Region.BOURBON])
    )
    cnt_j("Journeys of officials, after 1766", 
        lambda j: j.occupation == Occupation.OFFICIAL
        and j.departure_date >= 1766)

print_header("Data analysis Feb 2023 ; 1588-1763")
with restrict_time_period(1588, 1763):
    cnt_p("People traveling between 1588-1763: ", lambda p: True)
    cnt_p("OFFICIALS traveling between 1588-1763: ",
          lambda p: p.occupation == Occupation.OFFICIAL)
    cnt_p("MILITARY ppl traveling between 1588-1763: ",
          lambda p: p.occupation == Occupation.MILITARY)
    cnt_j("Journeys (not people) after 1720 (but still until 1763",
          lambda j: j.departure_date >= 1720)
    cnt_p("People who spent time in metropole", lambda p: p.via_metropole)
    cnt_j("Journeys within the atlantic", lambda j: {
          j.from_.ocean(), j.to.ocean()} == {Ocean.ATLANTIC})
    cnt_j("Journeys between NorAm and Caribbean", lambda j: from_to(
        j, [Region.LOUISIANA, Region.NEW_FRANCE], [Region.CARIBBEAN]))
    cnt_p("People who spent time in Atlantic + IO", lambda p: p.saw_both_oceans)
    cnt_p("OFFICIALS who spent time in Atlantic + IO",
          lambda p: p.saw_both_oceans and p.occupation == Occupation.OFFICIAL)
    cnt_p("Military men who spent time in Atlantic + IO",
          lambda p: p.saw_both_oceans and p.occupation == Occupation.MILITARY)
    cnt_p("People who spent time in Bourbon/IdF/Madagascar",
          was_in_mascarennes)
    cnt_p("People who spent time in West Africa AND Bourbon/IdF/Madagascar",
          lambda p: was_in_mascarennes(p) and Region.SENEGAL in p.regions
          )
    cnt_p("Among people who spent time in the Caribbean, people who also spent time in Mascarennes",
          was_in_mascarennes,
          universe=[p for p in ALL_PEOPLE if Region.CARIBBEAN in p.regions]
          )
    cnt_p("Among people who spent time in NorAm, people who also spent time in Mascarennes",
          was_in_mascarennes,
          universe=[p for p in ALL_PEOPLE if Region.LOUISIANA in p.regions or Region.NEW_FRANCE in p.regions])
    cnt_j("Journeys within the Indian Ocean", lambda j: {
          j.from_.ocean(), j.to.ocean()} == {Ocean.INDIAN_OCEAN})
    cnt_j("Journeys via Caribbean", lambda j: j.from_ ==
          Region.CARIBBEAN or j.to == Region.CARIBBEAN)


############## HISTOGRAMS ######################

points = [e.departure_date for e in ALL_EDGES if e.departure_date < 1763]
# points = [
#     e.departure_date
#     for e in all_edges
#     if len({e.from_.ocean(), e.to.ocean()}) == 2  # went to both oceans
#     and e.departure_date < 1763
# ]

plt.hist(points)
plt.ylabel('Number of people departures')
plt.xlabel('Year group')
# plt.show()
