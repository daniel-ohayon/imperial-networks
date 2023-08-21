"""
Feb 2023 - data for the book.
Shares some code with parse_ship_data_for_animation.py
"""

# TODO verify list of unique locations

from contextlib import contextmanager
import random
import pandas
import seaborn
from collections import Counter
from dataclasses import dataclass
import json
from typing import Callable, List, Optional, Sequence
import sys
import matplotlib.pyplot as plt

raw_data = json.load(open('./raw_data/ship_data.json'))

_DEBUG = "--debug" in sys.argv


@dataclass
class Journey:
    start_year: int
    end_year: int
    stops: List[str]
    ship_name: str
    raw_stops: List[str]


LOCATIONS = {
    'Isle Bourbon & Isle of France': ['Mascareignes', 'îles de France et de Bourbon', 'île Bourbon', 'Port-Louis, île de France', 'île de France', 'Île de France'],
    'Senegal': ['Sénégal', 'Sénégal et Gorée', 'Gorée', 'Cap-Vert', 'Juda et côtes de Guinée', 'Juda'],
    'Caribbean': ['Saint-Domingue', 'Martinique', 'Antilles', 'Cap-Français', 'Saint-Louis, St-Domingue', 'Léogane', 'Port-au-Prince', 'La Grenade (île de)', 'Petit-Goâve, St-Domingue', 'Guadeloupe'],
    'Louisiana': ['Louisiane', 'Ascension', 'Nouvelle-Orléans', 'Biloxy, Louisiane'],
    'France': ['Le Havre', 'Nantes', 'Bordeaux', 'Saint-Malo', 'Brest', 'La Rochelle', 'Marseille', 'Rochefort', 'Sète', 'Bayonne', 'Honfleur', 'Dunkerque', 'Rouen', 'Groix', 'Lorient', 'Toulon', 'Paimboeuf', 'Belle-île-en-Mer'],
    'Madagascar': ['Madagascar', 'Port-Louis', 'Anjouan', 'Fort-Dauphin, Madagascar', 'Sainte-Marie, Madagascar', 'baie de St-Augustin, Madagsascar'],  # TODO
    'India': ['Inde', 'Karaikal', 'Karikal', 'Pondichéry', 'Bengale', 'Calicut', 'Goa', 'Chandernagor', 'Négapatam', 'Madras', 'sur le Gange'],
    'New France': ['Louisbourg (île Royale), Canada', 'Saint-Pierre et Miquelon', 'Terre-Neuve'],
    'Guyana': ['Guyane', 'Cayenne'],
}

ATLANTIC_LOCATIONS = {'Senegal', 'Caribbean',
                      'Louisiana', 'France', 'Guyana', 'New France'}
INDIAN_OCEAN_LOCATIONS = {
    'Isle Bourbon & Isle of France', 'India', 'Madagascar'}


def get_ocean(place: str) -> str:
    if place in INDIAN_OCEAN_LOCATIONS:
        return 'INDIAN_OCEAN'
    else:
        return 'ATLANTIC'


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
        if len(result) == 0 or len(result) > 0 and all(s != result[-1] for s in next_stops):
            result += next_stops
    return result if len(result) > 1 else []


JOURNEYS: List[Journey] = []

for journeys_for_one_ship in raw_data.values():
    if len(journeys_for_one_ship) == 0:
        continue
    ship_name = journeys_for_one_ship[0]['ship_name']
    for journey in journeys_for_one_ship:
        stops_v1 = normalize_itinerary(journey['stops'])
        stops_v2 = normalize_itinerary(
            [e['location'] for e in journey['ship_log']])

        # use the itinerary with the most detail out of the two
        stops = stops_v1 if len(stops_v1) > len(stops_v2) else stops_v2

        if len(stops) == 0:
            if _DEBUG:
                print(
                    f"WARNING Skipping entry for {ship_name} because no stops")
                print(journey['stops'])
                print([e['location'] for e in journey['ship_log']])
            continue

        if journey['start_date'] is None or journey['end_date'] is None:
            print(
                f"WARNING Skipping entry for {ship_name} because we're missing start/end date")
            continue

        # if _DEBUG and random.random() < 0.05:
        #     print(ship_name)
        #     print("stops v1: " + ', '.join(journey['stops']))
        #     print("stops v2: " + ', '.join([e['location']
        #           for e in journey['ship_log']]))
        #     print("Normalized stops: " + ', '.join(stops))
        #     print("===========================")

        JOURNEYS.append(Journey(
            start_year=int(journey['start_date']),
            end_year=int(journey['end_date']),
            stops=stops,
            ship_name=ship_name,
            raw_stops=journey['stops']
        ))


def pct(label: str, filter_fun: Callable[[Journey], bool], universe: Optional[List[Journey]] = None) -> None:
    universe = universe or JOURNEYS
    matching = [j for j in universe if filter_fun(j)]
    n = len(matching)
    total = len(universe)
    pct = int(round(n/total * 100))
    print(f"{label}: {n}/{total} ({pct} %)")


def stopped_in_any(journey: Journey, places: Sequence[str]) -> bool:
    return any(stop in places for stop in journey.stops)


def stopped_in_every(journey: Journey, places: Sequence[str]) -> bool:
    return all(place in journey.stops for place in places)


def went_from_to(journey: Journey, from_places: Sequence[str], to_places: Sequence[str]) -> bool:
    for i in range(len(journey.stops)):
        if journey.stops[i] in from_places:
            for j in range(i+1, len(journey.stops)):
                if journey.stops[j] in to_places:
                    return True
            return False
    return False


@contextmanager
def only_include_journeys_between(from_year: int, to_year: int):
    global JOURNEYS
    _old_journeys = JOURNEYS
    JOURNEYS = [j for j in JOURNEYS if j.start_year >=
                from_year and j.end_year <= to_year]
    yield
    JOURNEYS = _old_journeys


print(f"Max year for journey: {max([j.end_year for j in JOURNEYS])}")

pct("Journeys before 1720", lambda j: j.end_year < 1720)
pct("Journeys before 1763", lambda j: j.end_year < 1763)
pct("Journeys after 1763", lambda j: j.end_year >= 1763)

pct("Journeys through Madagascar/Mascarennes between 1756-1791",
    lambda j: stopped_in_any(
        j, ["Madagascar", 'Isle Bourbon & Isle of France'])
    and j.start_year >= 1756
    )

pct("Journeys from NorAm to Bourbon, 1756-1785",
    lambda j: went_from_to(j, ["New France", "Louisiana"], [
                           'Isle Bourbon & Isle of France'])
    )

pct("Journeys in Atlantic", lambda j: all(
    get_ocean(p) == "ATLANTIC" for p in j.stops))

pct("Journeys between NorAm and Caribbean", lambda j:
    stopped_in_any(j, {"New France", "Louisiana"})
    and stopped_in_any(j, "Caribbean")
    )

pct("Journeys between Guyana and NorAm/Caribbean", lambda j:
    stopped_in_any(j, {"Guyana"})
    and stopped_in_any(j, {"New France", "Caribbean", "Louisiana"})
    )

pct("Journeys between Noram/Caribbean and West Africa", lambda j:
    stopped_in_any(j, {"New France", "Caribbean", "Louisiana"})
    and stopped_in_any(j, {"Senegal"})
    )

pct("Journeys FROM Atlantic TO Indian Ocean", lambda j:
    went_from_to(j, ATLANTIC_LOCATIONS, INDIAN_OCEAN_LOCATIONS)
    )

pct("Journeys FROM Bourbon/IdF TO India", lambda j:
    went_from_to(j, {'Isle Bourbon & Isle of France'}, {'India'})
    )

pct("Journeys FROM Bourbon/IdF to Atlantic", lambda j:
    went_from_to(j, {'Isle Bourbon & Isle of France'}, ATLANTIC_LOCATIONS)
    )

# ==========================
print("===========================")

with only_include_journeys_between(1713, 1763):
    n_ships = len({j.ship_name for j in JOURNEYS})
    print(f"{len(JOURNEYS)} journeys took place between 1713-1763, conducted by {n_ships} ships")
    pct("Journeys after 1720", lambda j: j.start_year >= 1720)
    pct("Journeys via metropole", lambda j: stopped_in_every(j, ["France"]))
    pct("Journeys via metropole + NorAm",
        lambda j: stopped_in_any(j, ["France"]) and stopped_in_any(j, ["Louisiana", "New France"]))
    pct("Journeys via metropole + Caribbean",
        lambda j: stopped_in_every(j, ["France", "Caribbean"]))
    pct("Journeys via metropole + Senegal",
        lambda j: stopped_in_every(j, ["France", "Senegal"]))
    pct("Journeys via metropole + (Madagascar or Mascarennes)",
        lambda j: stopped_in_any(j, ["France"]) and stopped_in_any(j, ['Isle Bourbon & Isle of France', "Madagascar"]))
    pct("Journeys via metropole + India",
        lambda j: stopped_in_every(j, ["France", "India"]))
    pct("Journeys via both oceans",
        lambda j: len({get_ocean(stop) for stop in j.stops}) == 2)
    pct("Journeys via Senegal AND (Madagascar OR Mascarennes)",
        lambda j: stopped_in_any(j, ["Senegal"]) and stopped_in_any(
            j, ["Madagascar", 'Isle Bourbon & Isle of France']))
    pct("Journeys via Caribbean AND (Madagascar OR Mascarennes)",
        lambda j: stopped_in_any(j, ["Caribbean"]) and stopped_in_any(
            j, ["Madagascar", 'Isle Bourbon & Isle of France']))
    pct("Journeys via NorAm AND (Madagascar OR Mascarennes)",
        lambda j: stopped_in_any(j, ["Louisiana", "New France"]) and stopped_in_any(
            j, ["Madagascar", 'Isle Bourbon & Isle of France']))
    pct("Journeys within Indian Ocean only",
        lambda j: {get_ocean(stop) for stop in j.stops} == {"INDIAN_OCEAN"})
    pct("Journeys within Atlantic only",
        lambda j: {get_ocean(stop) for stop in j.stops} == {"ATLANTIC"})
    pct("Journeys linking Senegal to NorAm colonies (including Guyana)",
        lambda j: stopped_in_any(j, ["Senegal"]) and stopped_in_any(
            j, ["Louisiana", "New France", "Guyana"])
        )
    pct("Journeys that included the Caribbean",
        lambda j: stopped_in_any(j, ["Caribbean"]))

    for place in ["Louisiana", "New France", "Guyana"]:
        pct(f"Among Caribbean journeys, those that went through {place}",
            lambda j: stopped_in_any(j, [place]),
            universe=[j for j in JOURNEYS if stopped_in_any(j, ["Caribbean"])]
            )

    pct("Among Caribbean journeys, those that went through the Indian Ocean",
        lambda j: any(get_ocean(stop) == "INDIAN_OCEAN" for stop in j.stops),
        universe=[j for j in JOURNEYS if stopped_in_any(j, ["Caribbean"])]
        )

    pct("Journeys through New France",
        lambda j: stopped_in_any(j, ["New France"]))

    pct("Journeys including Indian Ocean and Senegal", lambda j: stopped_in_any(
        j, ["Senegal"]) and any(get_ocean(stop) == "INDIAN_OCEAN" for stop in j.stops))

    pct(
        "Journeys including Indian Ocean and Caribbean",
        lambda j: stopped_in_any(j, ["Caribbean"]) and any(get_ocean(stop) == "INDIAN_OCEAN" for stop in j.stops))

    for place in ["Senegal", "Guyana", "Louisiana", "Caribbean"]:
        pct(
            f"Among transoceanic journeys, those that went through {place}",
            lambda j: stopped_in_any(j, [place]),
            universe=[j for j in JOURNEYS if len({get_ocean(stop) for stop in j.stops}) == 2])

    pct("Journeys including Mascarennes", lambda j: stopped_in_any(
        j, ['Isle Bourbon & Isle of France', "Madagascar"]))

    pct("Among IO journeys, those that included Mascarennes and India",
        lambda j: stopped_in_any(
            j, ['Isle Bourbon & Isle of France', "Madagascar"])
        and stopped_in_any(j, ["India"]),
        universe=[j for j in JOURNEYS if any(
            get_ocean(reg) == "INDIAN_OCEAN" for reg in j.stops)]
        )
    # print("Average number of IO regions covered by journeys that included the IO: " +
    #     avg([len(reg for reg in j.stops if get_ocean(reg) == "INDIAN_OCEAN")])
    # )

# Count and plot number of active ships each year
points = [
    j.start_year
    for j in JOURNEYS
    if j.end_year <= 1760
]
# plt.hist(points)
# plt.ylabel('Number of journeys')
# plt.xlabel('Year group')
# plt.show()

by_year = Counter(points)
series = [(k, v) for k, v in by_year.items()]
df = pandas.DataFrame({'Year': [tpl[0] for tpl in series], 'Number of journeys': [
                      tpl[1] for tpl in series]})
seaborn.lmplot(data=df, x='Year', y='Number of journeys',
               order=4, truncate=True)
# plt.show()
