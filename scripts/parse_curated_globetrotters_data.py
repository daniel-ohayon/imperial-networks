# This script requires pandas and json-to-js
import json
import pandas
import numpy as np
import re
import os

from typing import List, Tuple, Optional, Dict, Set

df = pandas.read_csv(
    'curated_globetrotters_data.csv',
    true_values=['Yes'],
    false_values=['No', 'No '],
    usecols=list(range(0, 4))
)
# NaN is not allowed in JSON
df = df.replace({np.nan: None})


def flip_and_explode_dict(dic: Dict[str, Set[str]]) -> Dict[str, str]:
    out = {}
    for key, vals in dic.items():
        for val in vals:
            out[val] = key
    return out


REGIONS = {
    'Caribbean': {
        'guadeloupe', 'martinique', 'saint-domingue', 'saint domingue',
        'cap-français', 'port-au-prince', 'îles du vent',
        'la grenade', 'saint-louis',
    },
    'India': {'pondichéry', 'chandernagor', 'surate', 'inde', 'pondichery'},
    'Isle Bourbon & Isle of France': {'bourbon', 'île de france', 'ïle de France', 'ïle bourbon'},
    'New France': {'québec', 'canada', 'louisbourg', 'Montréal', 'nouvelle france', 'île royale'},
    'Louisiana': {'louisiane', 'nouvelle-orléans'},
    'Guyana': {'cayenne'},
    'Senegal': {'sénégal', 'gorée', 'Sénegal'},
}

REGION_TO_OCEAN = flip_and_explode_dict({
    'Atlantic Ocean': {'Caribbean', 'Louisiana', 'New France', 'Guyana'},
    'Indian Ocean': {'India', 'Isle Bourbon & Isle of France', 'Senegal'}
})

BLOCKLIST = [
    # because Saint-Louis can be also Saint-Louis du Senegal
    {'saint-louis', 'sénégal', 'goreé'}
]


def find_index(needle: str, haystack: str) -> int:
    match = re.search(fr"\b{needle}\b", haystack, re.IGNORECASE)
    if match is None:
        return -1
    return match.start()


def get_regions(sentence: str) -> Tuple[Optional[List[str]], Optional[Set[str]]]:
    matching_regions = []
    matching_keywords = set()
    sentence = sentence.lower()

    if "bourbonnais" in sentence:
        # Ile Bourbon != Bourbonnais (village en France)
        return None, None

    for region, keywords in REGIONS.items():
        for kw in keywords:
            i_start = find_index(kw, sentence)
            if i_start > -1:
                matching_keywords.add(kw)
                matching_regions.append(region)
                break

    for _set in BLOCKLIST:
        if matching_keywords.issubset(_set):
            return None, None

    if len(matching_regions) > 1:
        return matching_regions, set(matching_keywords)
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


def get_category(name: str) -> Optional[str]:
    for categ in BY_PRECEDENCE:
        for kw in CATEGORIES[categ]:
            if kw in name.lower():
                return categ
    return None

# ------------------- GRAPH DATA EXPORT -----------------------------


# Heuristic to extract the name from the bio while we don't have a
# dedicated name colusmn
def name_from_bio(bio: str) -> str:
    state = "BEGIN"
    candidate_end_idx = -1
    for i, char in enumerate(bio):
        if char == " ":
            continue
        if char == ",":
            if state == "BEGIN":
                state = "JUST_AFTER_FIRST_COMMA"
                candidate_end_idx = i
                continue
            elif state == "EXPECTING_SECOND_COMMA":
                # second comma: return
                return bio[:i]
        if state == "JUST_AFTER_FIRST_COMMA":
            if not char.isupper():
                # no uppercase char right after comma => end of name
                if bio[i:].startswith("de,"):
                    return bio[:(i+3)]
                return bio[:candidate_end_idx]
            else:
                state = "EXPECTING_SECOND_COMMA"

    raise Exception(f"Failed to extract name from bio: {bio}")


# Decorate the name with a <strong> tag and the keywords with a <mark> tag
# for pretty rendering in the network modal
def annotate_bio(bio: str, keywords: Set[str], name: str) -> str:
    for keyword in keywords:
        bio = re.sub(keyword, r"<mark>\g<0></mark>",
                     bio, flags=re.IGNORECASE)
    return re.sub(name, r"<strong>\g<0></strong>", bio)


def to_edges(row, regions, keywords):
    edges = []
    name = name_from_bio(row.bio)
    annotated_bio = annotate_bio(row.bio, keywords, name)
    for i in range(len(regions)-1):
        edges.append({
            'bio': row.bio,
            'annotated_bio': annotated_bio,
            'name': name,
            'from': regions[i],
            'to': regions[i+1],
            'via_metropole': row.went_through_metropole,
            'tag': row.time_period if row.time_period != 'before_1763_maybe' else 'before_1763',
            'category': get_category(row.bio) or 'other'
        })
    return edges


output = []
for _, row in df.iterrows():
    regions, keywords = get_regions(row.bio)
    if regions is None:
        continue
    output += to_edges(row, regions, keywords)


with open('/tmp/globetrotters-data.json', 'w') as out1:
    json.dump(output, out1, ensure_ascii=False, allow_nan=False)

os.system(
    "cat /tmp/globetrotters-data.json | json-to-js > /tmp/globetrotters-data.js")

with open('/tmp/globetrotters-data.js') as temp_js_file:
    with open('../data/officials/links.js', 'w') as out_js_file:
        js_code = temp_js_file.read()
        out_js_file.write(f"const OFFICIALS_LINKS = {js_code};\n")

print("Results written to ../data/officials/links.js")
print("==================================")
# --------------------  DATA ANALYSIS -----------------------------


def both_oceans(bio: str) -> bool:
    regions, _ = get_regions(bio)
    if regions is None:
        return False
    return len({REGION_TO_OCEAN[reg] for reg in regions}) == 2


def count_if(people: List[Dict], filter_func) -> str:
    n = len(people)
    n_filtered = len([p for p in people if filter_func(p)])
    return f"{n_filtered}/{n}"


ppl = df.to_dict('records')

# --------------- Data Quality check ------------------------
for p in ppl:
    assert get_regions(p['bio'])[
        0] is not None, f"Cannot parse regions: {p['bio']}"

# -----------------------------------------------------------

print(
    f"#ppl who went through France: {count_if(ppl, lambda p: p['went_through_metropole'] or False)}")
print(
    f"#ppl who went through both oceans: {count_if(ppl, lambda p: both_oceans(p['bio']))}")
print(
    f"    ... before 1763: {count_if(ppl, lambda p: both_oceans(p['bio']) and p['time_period'].startswith('before_1763'))}")

print(
    f"    ... after 1763: {count_if(ppl, lambda p: both_oceans(p['bio']) and p['time_period'] == 'after_1763')}")
print(
    f"# officials: {count_if(ppl, lambda p: get_category(p['bio']) == 'officials')}")
print(
    f"# officials who went through both oceans: {count_if(ppl, lambda p: get_category(p['bio']) == 'officials' and both_oceans(p['bio']))}")
