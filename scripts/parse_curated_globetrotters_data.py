# To add a new cell, type '# %%'
# To add a new markdown cell, type '# %% [markdown]'

import io
import json
from collections import defaultdict
import pandas
import numpy as np
import subprocess

df = pandas.read_csv(
    'curated_globetrotters_data.csv',
    true_values=['Yes'],
    false_values=['No', 'No '],
    usecols=list(range(0, 4))
)
# NaN is not allowed in JSON
df = df.replace({np.nan: None})

REGIONS = {
    'Caribbean': {
        'guadeloupe', 'martinique', 'saint-domingue',
        'cap-français', 'port-au-prince', 'îles du vent',
        'la grenade', 'saint-louis'
    },
    'India': {'pondichéry', 'chandernagor', 'surate'},
    'Isle Bourbon & Isle of France': {'bourbon', 'île de france'},
    'New France': {'québec', 'canada', 'louisbourg', 'Montréal'},
    'Louisiana': {'louisiane', 'nouvelle-orléans'},
    'Guyana': {'cayenne'},
    'Senegal': {'sénégal', 'gorée'},
}

BLOCKLIST = [
    # because Saint-Louis can be also Saint-Louis du Senegal
    {'saint-louis', 'sénégal', 'goreé'}
]


def find_index(needle, haystack):
    try:
        return haystack.lower().index(needle.lower())
    except ValueError:
        return -1


def get_regions(sentence: str):
    matching_regions = []
    matching_keywords = set()

    if "bourbonnais" in sentence.lower():
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
    'military': ['régiment', 'capitaine', 'soldat', 'officier',
                 'maréchal', 'brigadier', 'bataillon', 'infanterie',
                 'troupes', 'caporal', 'déserteur', 'artillerie'],
    'officials': ['lieutenant', 'lieutenant', 'contrôleur', 'inspecteur',
                  'ordonnateur', 'sous-lieutenance', 'commissaire',
                  'gouverneur', 'écrivain', 'conseil', 'juge',
                  'garde-magasin'],
}
BY_PRECEDENCE = ['officials', 'military']


def get_category(name):
    for categ in BY_PRECEDENCE:
        for kw in CATEGORIES[categ]:
            if kw in name.lower():
                return categ
    return None


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
