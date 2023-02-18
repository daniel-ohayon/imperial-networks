"""
Feb 2023 - data for the book.
Shares some code with parse_ship_data_for_animation.py
"""

# TODO verify list of unique locations

from collections import Counter
from dataclasses import dataclass
import itertools
import json
from typing import Callable, List, Sequence

import matplotlib.pyplot as plt

raw_data = json.load(open('./raw_data/ship_data.json'))


@dataclass
class Journey:
    start_year: int
    end_year: int
    stops: List[str]
    ship_name: str


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

        if journey['start_date'] is None or journey['end_date'] is None:
            print(
                f"WARNING Skipping entry for {ship_name} because we're missing start/end date")
            continue

        JOURNEYS.append(Journey(
            start_year=int(journey['start_date']),
            end_year=int(journey['end_date']),
            stops=stops,
            ship_name=ship_name
        ))


def pct(label: str, filter_fun: Callable[[Journey], bool]) -> None:
    n = len([j for j in JOURNEYS if filter_fun(j)])
    total = len(JOURNEYS)
    pct = int(round(n/total * 100))
    print(f"{label}: {n}/{total} ({pct} %)")


def stopped_in(journey: Journey, places: Sequence[str]) -> bool:
    return any(stop in places for stop in journey.stops)


def went_from_to(journey: Journey, from_places: Sequence[str], to_places: Sequence[str]) -> bool:
    for i in range(len(journey.stops)):
        if journey.stops[i] in from_places:
            for j in range(i+1, len(journey.stops)):
                if journey.stops[j] in to_places:
                    return True
            return False
    return False


pct("Journeys before 1720", lambda j: j.end_year < 1720)
pct("Journeys before 1763", lambda j: j.end_year < 1763)
pct("Journeys after 1763", lambda j: j.end_year >= 1763)

pct("Journeys in Atlantic", lambda j: all(
    get_ocean(p) == "ATLANTIC" for p in j.stops))

pct("Journeys between NorAm and Caribbean", lambda j:
    stopped_in(j, {"New France", "Louisiana"})
    and stopped_in(j, "Caribbean")
    )

pct("Journeys between Guyana and NorAm/Caribbean", lambda j:
    stopped_in(j, {"Guyana"})
    and stopped_in(j, {"New France", "Caribbean", "Louisiana"})
    )

pct("Journeys between Noram/Caribbean and West Africa", lambda j:
    stopped_in(j, {"New France", "Caribbean", "Louisiana"})
    and stopped_in(j, {"Senegal"})
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

import seaborn
import pandas
by_year = Counter(points)
series = [(k, v) for k, v in by_year.items()]
df = pandas.DataFrame({'Year': [tpl[0] for tpl in series], 'Number of journeys': [tpl[1] for tpl in series]})
seaborn.lmplot(data=df, x='Year', y='Number of journeys', order=4, truncate=True)
plt.show()