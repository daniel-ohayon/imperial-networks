import json
import csv
import re
from dataclasses import dataclass

from typing import List, Tuple, Optional, Dict, Set


########### BIOGRAPHY ANALYSIS FUNCTIONS ###################
def flip_and_explode_dict(dic: Dict[str, Set[str]]) -> Dict[str, str]:
    out = {}
    for key, vals in dic.items():
        for val in vals:
            out[val] = key
    return out


REGIONS: Dict[str, Set[str]] = {
    'Caribbean': {
        'guadeloupe', 'martinique', 'saint-domingue', 'saint domingue',
        'cap-français', 'port-au-prince', 'îles du vent',
        'grenada', 'saint-louis', 'saint-vincent', 'caribbean'
    },
    'India': {'chandannagar', 'surat', 'india', 'pondicherry'},
    'Isle Bourbon & Isle of France': {'bourbon', 'isle of france', 'isle bourbon'},
    'New France': {'quebec', 'québec', 'canada', 'louisbourg', 'montreal', 'new france', 'île royale'},
    'Louisiana': {'louisiana', 'new orleans'},
    'Guyana': {'cayenne', 'Guyana'},
    'Senegal': {'senegal', 'gorée'},
}

REGION_TO_OCEAN = flip_and_explode_dict({
    'Atlantic Ocean': {'Caribbean', 'Louisiana', 'New France', 'Guyana'},
    'Indian Ocean': {'India', 'Isle Bourbon & Isle of France', 'Senegal'}
})

BLOCKLIST = [
    # because Saint-Louis can be also Saint-Louis du Senegal
    {'saint-louis', 'sénégal', 'goreé'}
]


@dataclass
class Match:
    keyword: str
    region: str
    index: int


def get_index(haystack: str, needle: str) -> int:
    match = re.search(fr"\b{needle}\b", haystack, re.IGNORECASE)
    if match is None:
        return -1
    return match.start()


def get_regions_from_biography(sentence: str) -> Tuple[Optional[List[str]], Optional[List[str]]]:
    sentence = sentence.lower()
    matches: List[Match] = []

    for region, keywords in REGIONS.items():
        for keyword in keywords:
            idx = get_index(sentence, keyword)
            if idx > -1:
                matches.append(Match(keyword, region, idx))

    matches.sort(key=lambda m: m.index)

    matching_regions = []
    # return regions in order of visit
    for match in matches:
        if match.region not in matching_regions:
            matching_regions.append(match.region)

    for _set in BLOCKLIST:
        if set(matching_regions).issubset(_set):
            return None, None

    if len(matching_regions) > 1:
        return matching_regions, [m.keyword for m in matches]
    return None, None


CATEGORIES = {
    'military': ['régiment', 'capitaine', 'soldat', 'officier', 'armurier', 'major',
                 'maréchal', 'brigadier', 'bataillon', 'infanterie', 'enseigne',
                 'canonnier', 'colonel',
                 'troupes', 'caporal', 'déserteur', 'artillerie', 'aide-major'],
    'officials': ['lieutenant', 'lieutenant', 'contrôleur', 'inspecteur',
                  'ordonnateur', 'sous-lieutenance', 'commissaire',
                  'gouverneur', 'écrivain', 'conseil', 'juge',
                  'garde-magasin', 'intendant', 'commandant'],
}
BY_PRECEDENCE = ['officials', 'military']


def get_category_from_bio(name: str) -> Optional[str]:
    for categ in BY_PRECEDENCE:
        for kw in CATEGORIES[categ]:
            if kw in name.lower():
                return categ
    return None


def str_to_bool(string: str) -> bool:
    clean_str = string.strip().lower()
    if clean_str == "yes":
        return True
    if clean_str == "no":
        return False
    print(
        f'[WARNING] Unrecognized boolean value: "{clean_str}" - defaulting to False')
    return False


# ------------------- GRAPH DATA EXPORT -----------------------------

# Decorate the name with a <strong> tag and the keywords with a <mark> tag
# for pretty rendering in the network modal


def annotate_bio(bio: str, keywords: Set[str], name: str) -> str:
    for keyword in keywords:
        bio = re.sub(keyword, r"<mark>\g<0></mark>",
                     bio, flags=re.IGNORECASE)
    return re.sub(name, r"<strong>\g<0></strong>", bio)


def to_edges(row, regions, keywords):
    edges = []
    name = row['Name']
    annotated_bio = annotate_bio(row['Biography'], keywords, name)
    dep_date = int(row['Date of departure'])
    for i in range(len(regions)-1):
        edges.append({
            'bio': row['Biography'],
            'annotated_bio': annotated_bio,
            'name': name,
            'from': regions[i],
            'to': regions[i+1],
            'to_date': dep_date,
            'via_metropole': str_to_bool(row['Time in metropolitan France']),
            'category': get_category_from_bio(row['Biography']) or 'other'
        })
    return edges

########################### DATA PROCESSING #######################################


# Check that all words from the regions mapping table are used
with open('curated_globetrotters_data.csv', encoding='utf-8-sig') as input_csv:
    raw_text = input_csv.read().lower()
    for keywords in REGIONS.values():
        for keyword in keywords:
            if keyword not in raw_text:
                print(
                    f"[WARNING] The keyword '{keyword}' does not appear in the data")


output_data = []
with open('curated_globetrotters_data.csv', encoding='utf-8-sig') as input_csv:
    input_data = list(csv.DictReader(input_csv))
    for row in input_data:
        regions, keywords = get_regions_from_biography(row['Biography'])
        if regions is None:
            print(f"[WARNING] Less than 2 regions found for: {row['Name']}")
            continue
        if int(row['Date of departure']) > 1785:
            print(f"[WARNING] Skipping {row['Name']} who travelled after 1785")
            continue
        output_data += to_edges(row, regions, keywords)

with open('../data/officials/links.js', 'w') as out_js_file:
    json_str = json.dumps(output_data, indent=2, ensure_ascii=False)
    out_js_file.write(f"const OFFICIALS_LINKS = {json_str};\n")

print("Results written to ../data/officials/links.js")
print("==================================")

# --------------------  DATA ANALYSIS -----------------------------


def both_oceans(bio: str) -> bool:
    regions, _ = get_regions_from_biography(bio)
    if regions is None:
        return False
    return len({REGION_TO_OCEAN[reg] for reg in regions}) == 2


def count_if(people: List[Dict], filter_func) -> str:
    n = len(people)
    n_filtered = len([p for p in people if filter_func(p)])
    return f"{n_filtered}/{n}"


print(f"Parsed {len(input_data)} biographies")
# -----------------------------------------------------------

print(
    f"#ppl who went through France: {count_if(output_data, lambda p: p['via_metropole'])}")
print(
    f"#ppl who went through both oceans: {count_if(output_data, lambda p: both_oceans(p['bio']))}")
print(
    f"    ... before 1763: {count_if(output_data, lambda p: both_oceans(p['bio']) and p['to_date'] < 1763)}")

print(
    f"    ... after 1763: {count_if(output_data, lambda p: both_oceans(p['bio']) and p['to_date'] >= 1763)}")
print(
    f"# officials: {count_if(output_data, lambda p: get_category_from_bio(p['bio']) == 'officials')}")
print(
    f"# officials who went through both oceans: {count_if(output_data, lambda p: get_category_from_bio(p['bio']) == 'officials' and both_oceans(p['bio']))}")
