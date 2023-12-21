"""
Script to generate the data for the ships animation V1
(the one that is static), under `viz/ships.html`
"""
from collections import Counter
from dataclasses import dataclass
import json
from typing import Any, Dict, List
import sys
from itertools import groupby

is_verbose = len(sys.argv) > 1 and sys.argv[1] in ("-v", "--verbose")

raw_data = json.load(open("./raw_data/ship_data.json"))


def remove_contiguous_duplicates(lst: List[str]) -> List[str]:
    return [key for key, _ in groupby(lst)]


def sort_dict_by_value_desc(some_dict: Dict[str, int]) -> Dict[str, int]:
    return dict(sorted(some_dict.items(), key=lambda item: item[1], reverse=True))


def print_header(msg: str) -> None:
    print("\n" + msg + "\n" + ("=" * 20) + "\n")


LOCATIONS = {
    "Isle Bourbon": [
        "Mascareignes",
        "îles de France et de Bourbon",
        "île Bourbon",
    ],
    "Île de France": [
        "Mascareignes",
        "îles de France et de Bourbon",
        "Port-Louis, île de France",
        "île de France",
        "Île de France",
        "Port-Louis",
    ],
    "Gorée": ["Sénégal et Gorée", "Gorée"],
    "Saint-Louis": ["Sénégal", "Sénégal et Gorée", "Gorée"],
    "Ouidah": ["Juda et côtes de Guinée", "Juda"],
    "Saint Domingue": [
        "Saint-Domingue",
        "Cap-Français",
        "Saint-Louis, St-Domingue",
        "Léogane",
        "Port-au-Prince",
        "Petit-Goâve, St-Domingue",
    ],
    "Martinique": ["Martinique"],
    "Guadeloupe": ["Guadeloupe"],
    "Grenada": ["La Grenade (île de)"],
    "Louisiana": ["Louisiane", "Nouvelle-Orléans", "Biloxy"],
    "France": [
        "Le Havre",
        "Nantes",
        "Bordeaux",
        "Saint-Malo",
        "Brest",
        "La Rochelle",
        "Marseille",
        "Rochefort",
        "Sète",
        "Bayonne",
        "Honfleur",
        "Dunkerque",
        "Rouen",
        "Groix",
        "Lorient",
        "Toulon",
        "Paimboeuf",
        "Belle-île-en-Mer",
    ],
    "Madagascar": [
        "Madagascar",
        "Anjouan",
        "Fort-Dauphin",
        "Sainte-Marie, Madagascar",
        "baie de St-Augustin, Madagsascar",
    ],
    "Pondicherry": ["Pondichéry"],
    "Chandernagore": ["Chandernagor"],
    "Karaikal": ["Karikal"],
    "Mahe": ["Mahé, Inde", "Mahé et côte ouest de l’Inde"],
    "New France": [
        "Louisbourg (île Royale), Canada",
        "Saint-Pierre et Miquelon",
        "Terre-Neuve",
    ],
    "Guyana": ["Guyane", "Cayenne"],
}


LINKS = []


@dataclass
class KeywordMatch:
    index: int
    location: str


# data structures for logging/data analysis
MATCH_COUNTER = {keyword: 0 for kws in LOCATIONS.values() for keyword in kws}
NO_MATCH_COUNTER = Counter()
##########


def normalize_location(raw_location_str: str) -> List[str]:
    matches: List[KeywordMatch] = []
    # in cases like "Mascareignes et Madagascar", we want to
    # retain both 'Mascareignes' (Bourbon) and 'Madagascar' as separate stops
    # That's why we return a list as opposed to a single name.
    for key, synonyms in LOCATIONS.items():
        for synonym in synonyms:
            if synonym in raw_location_str:
                matches.append(
                    KeywordMatch(
                        index=raw_location_str.index(synonym),
                        location=key,
                    )
                )
                MATCH_COUNTER[synonym] += 1
                break
    sorted_matches = sorted(matches, key=lambda match: match.index)
    if len(sorted_matches) == 0:
        NO_MATCH_COUNTER[raw_location_str] += 1
    return [m.location for m in sorted_matches]


def normalize_itinerary(itinerary: List[str]) -> List[str]:
    # normalize locations, skip unknown locations, no contiguous duplicates
    result = []
    for stop in itinerary:
        next_stops = normalize_location(stop)
        if (
            len(result) == 0
            or len(result) > 0
            and all(s != result[-1] for s in next_stops)
        ):
            result += next_stops
    return result if len(result) > 1 else []


def make_preview_str(entry, clean_stops: List[str], raw_stops: List[str]) -> str:
    raw_stops_str = " → ".join(remove_contiguous_duplicates(raw_stops))
    # clean_stops_str = " → ".join(clean_stops)
    return f"{entry['ship_name']} ({entry['start_date']}-{entry['end_date']}): {raw_stops_str}"


def ship_entry_to_links(
    entry, clean_stops: List[str], raw_stops: List[str]
) -> List[Dict[str, Any]]:
    links = []
    for i in range(1, len(clean_stops)):
        links.append(
            {
                "from": clean_stops[i - 1],
                "to": clean_stops[i],
                # we only have the start/end years for the full journey
                # not the intermediary stops, so we use the end_date for
                # all stops after departure
                "from_date": entry["start_date"] if i == 1 else entry["end_date"],
                "to_date": entry["end_date"],
                "preview": make_preview_str(entry, clean_stops, raw_stops),
                "tag": "with_metropole"
                if clean_stops[i] == "France" or clean_stops[i - 1] == "France"
                else "between_colonies",
            }
        )
    return links


for journeys_for_one_ship in raw_data.values():
    for journey in journeys_for_one_ship:
        raw_stops_v1 = journey["stops"]
        raw_stops_v2 = [e["location"] for e in journey["ship_log"]]
        stops_v1 = normalize_itinerary(raw_stops_v1)
        stops_v2 = normalize_itinerary(raw_stops_v2)

        # use the itinerary with the most detail out of the two
        use_stops_v1 = len(stops_v1) > len(stops_v2)
        raw_stops_used = raw_stops_v1 if use_stops_v1 else raw_stops_v2
        clean_stops = stops_v1 if use_stops_v1 else stops_v2
        LINKS += ship_entry_to_links(journey, clean_stops, raw_stops_used)

with open("../data/ships/links.js", "w") as out_js_file:
    json_str = json.dumps(LINKS, indent=2, ensure_ascii=False)
    out_js_file.write("// Generated by:  scripts/parse_ship_data_v1.py\n")
    out_js_file.write(f"const SHIPS_LINKS = {json_str};\n")

print("Wrote output to data/ships/links.js")

if is_verbose:
    print_header("Matches by keyword:")
    for key, cnt in sort_dict_by_value_desc(MATCH_COUNTER).items():
        print(f"{key}: {cnt}")

    print_header("Most commonly unmatched words")
    for key, cnt in sort_dict_by_value_desc(NO_MATCH_COUNTER).items():
        print(f"{key}: {cnt}")
