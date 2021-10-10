from typing import Dict, Set, List, Optional
from dataclasses import dataclass
import re
import pyperclip

REGIONS: Dict[str, Set[str]] = {
    'Caribbean': {
        'guadeloupe', 'martinique', 'saint-domingue', 'saint domingue',
        'cap-français', 'port-au-prince', 'îles du vent',
        'grenada', 'saint-louis', 'saint-vincent', 'caribbean'
    },
    'India': {'chandannagar', 'surat', 'india', 'pondicherry'},
    'Bourbon': {'bourbon', 'isle of france', 'isle bourbon', 'mauritius'},
    'New France': {'quebec', 'québec', 'canada', 'louisbourg', 'montreal', 'new france', 'île royale'},
    'Louisiana': {'louisiana', 'new orleans'},
    'Guyana': {'cayenne', 'Guyana'},
    'Senegal': {'senegal', 'gorée'},
}

CATEGORIES = {
    'Military': ['régiment', 'capitaine', 'soldat', 'officier', 'armurier', 'major',
                 'maréchal', 'brigadier', 'bataillon', 'infanterie', 'enseigne',
                 'canonnier', 'colonel',
                 'troupes', 'caporal', 'déserteur', 'artillerie', 'aide-major'],
    'Official': ['lieutenant', 'lieutenant', 'contrôleur', 'inspecteur',
                 'ordonnateur', 'sous-lieutenance', 'commissaire',
                 'gouverneur', 'écrivain', 'conseil', 'juge',
                 'garde-magasin', 'intendant', 'commandant'],
}
BY_PRECEDENCE = ['Official', 'Military']


def get_index(haystack: str, needle: str) -> int:
    match = re.search(fr"\b{needle}\b", haystack, re.IGNORECASE)
    if match is None:
        return -1
    return match.start()


@dataclass
class Match:
    keyword: str
    region: str
    index: int


def get_regions_from_biography(sentence: str):
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

    if len(matching_regions) == 0:
        print("No matches!")
    res = ";".join(matching_regions)
    print(res)
    pyperclip.copy(res)


def get_category_from_bio(name: str) -> Optional[str]:
    for categ in BY_PRECEDENCE:
        for kw in CATEGORIES[categ]:
            if kw in name.lower():
                print(categ)
                return
    print("Other")


while True:
    bio = input("Bio: ")
    print()
    get_regions_from_biography(bio)
    print()
