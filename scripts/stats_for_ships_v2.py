"""
Some copy-paste from `parse_ship_data_for_animation.py`
but the way we count "journeys" is different because the animation cares
about each individual leg of a journey, but we don't here.
"""
from dataclasses import dataclass
import json
from typing import List

raw_data = json.load(open("./raw_data/ship_data.json"))


@dataclass
class Journey:
    start_year: int
    end_year: int
    ship_name: str
    stops: List[str]
    normalized_stops: List[str]


LOCATIONS = {
    "Isle Bourbon & Isle of France": [
        "Mascareignes",
        "îles de France et de Bourbon",
        "île Bourbon",
        "Port-Louis, île de France",
        "île de France",
        "Île de France",
    ],
    "Senegal": [
        "Sénégal",
        "Sénégal et Gorée",
        "Gorée",
        "Cap-Vert",
        "Juda et côtes de Guinée",
        "Juda",
    ],
    "Caribbean": [
        "Saint-Domingue",
        "Martinique",
        "Antilles",
        "Cap-Français",
        "Saint-Louis, St-Domingue",
        "Léogane",
        "Port-au-Prince",
        "La Grenade (île de)",
        "Petit-Goâve, St-Domingue",
        "Guadeloupe",
    ],
    "Louisiana": ["Louisiane", "Ascension", "Nouvelle-Orléans", "Biloxy, Louisiane"],
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
        "Port-Louis",
        "Anjouan",
        "Fort-Dauphin, Madagascar",
        "Sainte-Marie, Madagascar",
        "baie de St-Augustin, Madagsascar",
    ],  # TODO
    "India": [
        "Inde",
        "Karaikal",
        "Karikal",
        "Pondichéry",
        "Bengale",
        "Calicut",
        "Goa",
        "Chandernagor",
        "Négapatam",
        "Madras",
        "sur le Gange",
    ],
    "New France": [
        "Louisbourg (île Royale), Canada",
        "Saint-Pierre et Miquelon",
        "Terre-Neuve",
    ],
    "Guyana": ["Guyane", "Cayenne"],
}
JOURNEYS: List[Journey] = []


def normalize_location(location):
    matches = []
    # in cases like "Mascareignes et Madagascar", we want to
    # retain both 'Mascareignes' (Bourbon) and 'Madagascar' as separate stops
    # That's why we return a list as opposed to a single name.
    for key, synonyms in LOCATIONS.items():
        for synonym in synonyms:
            if synonym in location:
                matches.append((key, synonym))
                break
    # If >1 stop, return stops in their order of appearance in the input
    # eg "Inde et Mascareignes" => ['India', 'Bourbon']
    # but "Mascareignes et Madagascar" => ['Bourbon', 'Madagascar']
    res = [m[0] for m in sorted(matches, key=lambda m: location.index(m[1]))]
    return res


def normalize_itinerary(itinerary):
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


for journeys_for_one_ship in raw_data.values():
    if len(journeys_for_one_ship) == 0:
        continue
    ship_name = journeys_for_one_ship[0]["ship_name"]
    for journey in journeys_for_one_ship:
        stops_v1 = normalize_itinerary(journey["stops"])
        stops_v2 = normalize_itinerary([e["location"] for e in journey["ship_log"]])

        # use the itinerary with the most detail out of the two
        stops = stops_v1 if len(stops_v1) > len(stops_v2) else stops_v2

        if journey["start_date"] is None or journey["end_date"] is None:
            # skip journeys with missing start/end date
            continue
        JOURNEYS.append(
            Journey(
                start_year=int(journey["start_date"]),
                end_year=int(journey["end_date"]),
                normalized_stops=stops,
                stops=journey["stops"],
                ship_name=ship_name,
            )
        )

##### STATS ######
print(
    f"Found {len(JOURNEYS)} journeys for {len({j.ship_name for j in JOURNEYS})} ships"
)
min_year = min(j.start_year for j in JOURNEYS)
max_year = max(j.end_year for j in JOURNEYS)
print(f"Min start year: {min_year}, Max end year: {max_year}")
PERIODS = [
    "1713-1731",
    "1731-1756",
    "1756-1791",
    "1713-1740",
    "1748-1756",
    "1740-1748",
    "1756-1791",
    "1748-1756",
    "1763-1773",
]
for period in PERIODS:
    start, end = period.split("-")
    start, end = int(start), int(end)
    n_journeys = len(
        [j for j in JOURNEYS if j.start_year >= start and j.end_year <= end]
    )
    print(f"{period}: {n_journeys} journeys")

avg_journeys_per_year = len(JOURNEYS) / (max_year - min_year)
print(f"Avg journeys per 8 years: {avg_journeys_per_year * 8}")
print(f"Avg journeys per 10 years: {avg_journeys_per_year * 10}")

for region in LOCATIONS:
    print(region)
    n_journeys = len([j for j in JOURNEYS if region in j.normalized_stops])
    print(f"  * {n_journeys} journeys overall")
    for period in ["1713-1731", "1731-1756", "1756-1791", "1740-1748", "1756-1791"]:
        start, end = period.split("-")
        start, end = int(start), int(end)
        n_journeys = len(
            [
                j
                for j in JOURNEYS
                if j.start_year >= start
                and j.end_year <= end
                and region in j.normalized_stops
            ]
        )
        print(f"  * {n_journeys} during {period}")

n1 = len(
    {
        j.ship_name
        for j in JOURNEYS
        if "Isle Bourbon & Isle of France" in j.normalized_stops
        and j.start_year >= 1763
        and j.end_year <= 1791
    }
)
n1_journeys = len(
    [
        j
        for j in JOURNEYS
        if "Isle Bourbon & Isle of France" in j.normalized_stops
        and j.start_year >= 1763
        and j.end_year <= 1791
    ]
)
print(
    f"{n1} ships ({n1_journeys} journeys) transited through Isle Bourbon and Isle of France for the period 1763-1791"
)

n2 = len(
    {
        j.ship_name
        for j in JOURNEYS
        if "Caribbean" in j.normalized_stops
        and j.start_year >= 1763
        and j.end_year <= 1791
    }
)
n2_journeys = len(
    [
        j
        for j in JOURNEYS
        if "Caribbean" in j.normalized_stops
        and j.start_year >= 1763
        and j.end_year <= 1791
    ]
)
print(
    f"{n2} ships ({n2_journeys} journeys) transited through the Caribbean for the period 1763-1791"
)
