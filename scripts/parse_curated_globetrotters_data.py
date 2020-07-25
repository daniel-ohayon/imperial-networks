# To add a new cell, type '# %%'
# To add a new markdown cell, type '# %% [markdown]'

import sys
import io
import json
from collections import defaultdict
import pandas
import numpy as np
import subprocess

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


def find_index(needle, haystack):
    try:
        return haystack.lower().index(needle.lower())
    except ValueError:
        return -1


def get_regions(sentence: str) -> Tuple[Optional[List[str]], Optional[List[str]]]:
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
        return matching_regions, matching_keywords
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


def to_edges(row, regions, keywords):
    edges = []
    for i in range(len(regions)-1):
        edges.append({
            'bio': row.bio,
            'from': regions[i],
            'to': regions[i+1],
            'via_metropole': row.went_through_metropole,
            'tag': row.time_period,
            'category': get_category(row.bio) or 'other'
        })
    return edges


output = []
for _, row in df.iterrows():
    regions, keywords = get_regions(row.bio)
    if regions is None:
        continue
    output += to_edges(row, regions, keywords)


with open('globetrotters-data.json', 'w') as out1:
    json.dump(output, out1, ensure_ascii=False, allow_nan=False)

# Afterwards, run:
# cat globetrotters-data.json | json-to-js > globetrotters-data.js
# (not running in subprocess here because output gets truncated for some reason)

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
