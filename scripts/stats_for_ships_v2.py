"""
Some copy-paste from `parse_ship_data_for_animation.py`
but the way we count "journeys" is different because the animation cares
about each individual leg of a journey, but we don't here.
"""
import csv
from dataclasses import dataclass
from enum import Enum
import json
from typing import Callable, List, Optional, Tuple

raw_data = json.load(open("./raw_data/ship_data.json"))


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


class Ocean(Enum):
    ATLANTIC = "Atlantic"
    INDIAN_OCEAN = "Indian Ocean"


class Region(Enum):
    NEW_FRANCE = "New France"
    BOURBON = "Isle Bourbon & Isle of France"
    CARIBBEAN = "Caribbean"
    LOUISIANA = "Louisiana"
    SENEGAL = "Senegal"
    INDIA = "India"
    GUYANA = "Guyana"
    MADAGASCAR = "Madagascar"
    FRANCE = "France"

    def ocean(self) -> Ocean:
        if self.value in (
            "Caribbean",
            "Louisiana",
            "New France",
            "Guyana",
            "France",
            "Senegal",
        ):
            return Ocean.ATLANTIC
        if self.value in (
            "India",
            "Isle Bourbon & Isle of France",
            "Madagascar",
        ):
            return Ocean.INDIAN_OCEAN
        raise Exception(f"Unsupported enum value: {self.value}")


@dataclass
class Journey:
    start_year: int
    end_year: int
    ship_name: str
    stops: List[str]
    normalized_stops: List[Region]


ALL_REGIONS: List[Region] = [Region(reg) for reg in LOCATIONS]
JOURNEYS: List[Journey] = []
FRENCH_AMERICAS: List[Region] = [
    Region.CARIBBEAN,
    Region.LOUISIANA,
    Region.NEW_FRANCE,
    Region.GUYANA,
]


def contains_in_order(haystack: List[Region], needles: List[Region]) -> bool:
    i = 0
    j = 0

    while i < len(haystack) and j < len(needles):
        if haystack[i] == needles[j]:
            j += 1
        i += 1

    return j == len(needles)


def normalize_location(location: str) -> List[Region]:
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
    return [Region(m[0]) for m in sorted(matches, key=lambda m: location.index(m[1]))]


def normalize_itinerary(itinerary: List[str]) -> List[Region]:
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

n_avg = len(JOURNEYS) / (max_year - min_year)
print(f"Avg journeys per 8 years: {n_avg * 8}")
print(f"Avg journeys per 10 years: {n_avg * 10}")

for region in ALL_REGIONS:
    print(region.value)
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
        if Region.BOURBON in j.normalized_stops
        and j.start_year >= 1763
        and j.end_year <= 1791
    }
)
n1_journeys = len(
    [
        j
        for j in JOURNEYS
        if Region.BOURBON in j.normalized_stops
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
        if Region.CARIBBEAN in j.normalized_stops
        and j.start_year >= 1763
        and j.end_year <= 1791
    }
)
n2_journeys = len(
    [
        j
        for j in JOURNEYS
        if Region.CARIBBEAN in j.normalized_stops
        and j.start_year >= 1763
        and j.end_year <= 1791
    ]
)
print(
    f"{n2} ships ({n2_journeys} journeys) transited through the Caribbean for the period 1763-1791"
)

print("================== Dec 2023 stats ===================")
n = len(
    [
        j
        for j in JOURNEYS
        if Region.SENEGAL in j.normalized_stops
        and j.start_year >= 1713
        and j.end_year <= 1731
        and (
            Region.CARIBBEAN in j.normalized_stops
            or Region.LOUISIANA in j.normalized_stops
        )
    ]
)
print(
    f"{n} ships went through (the Caribbean or Louisiana) and Senegal between 1713 and 1731, in any order"
)

n = len(
    [
        j
        for j in JOURNEYS
        if Region.SENEGAL in j.normalized_stops
        and j.start_year >= 1713
        and j.end_year <= 1731
        and any(s.ocean() == Ocean.INDIAN_OCEAN for s in j.normalized_stops)
    ]
)
print(
    f"{n} journeys went through Senegal and the Indian Ocean between 1713 and 1731, in any order"
)

n = len(
    [
        j
        for j in JOURNEYS
        if Region.BOURBON in j.normalized_stops
        and Region.SENEGAL in j.normalized_stops
        and j.start_year >= 1713
        and j.end_year <= 1731
    ]
)
print(
    f"{n} journeys went through Bourbon and Senegal between 1713 and 1731, in any order"
)

n = len(
    [
        j
        for j in JOURNEYS
        if Region.BOURBON in j.normalized_stops
        and any(r in j.normalized_stops for r in FRENCH_AMERICAS)
        and j.start_year >= 1713
        and j.end_year <= 1731
    ]
)
print(
    f"{n} journeys went through Bourbon and (Carribean or Louisiana or New France or Guyana) between 1713 and 1731, in any order"
)

n = len(
    [
        j
        for j in JOURNEYS
        if Region.BOURBON in j.normalized_stops
        and Region.FRANCE in j.normalized_stops
        and j.start_year >= 1713
        and j.end_year <= 1731
    ]
)
print(
    f"{n} journeys went through Bourbon and metropole between 1713 and 1731, in any order"
)

n = len(
    [
        j
        for j in JOURNEYS
        if Region.BOURBON in j.normalized_stops
        and any(
            r.ocean() == Ocean.INDIAN_OCEAN and r != Region.BOURBON
            for r in j.normalized_stops
        )
        and j.start_year >= 1713
        and j.end_year <= 1731
    ]
)
print(
    f"{n} journeys went through Bourbon and another Indian Ocean location between 1713 and 1731, in any order"
)

n = len(
    [
        j
        for j in JOURNEYS
        if Region.BOURBON in j.normalized_stops
        and Region.MADAGASCAR in j.normalized_stops
        and j.start_year >= 1713
        and j.end_year <= 1731
    ]
)
print(
    f"{n} journeys went through Bourbon and Madagascar between 1713 and 1731, in any order"
)

for start_date, end_date in [(1713, 1731), (1731, 1756)]:
    n = len(
        [
            j
            for j in JOURNEYS
            if contains_in_order(j.normalized_stops, [Region.FRANCE, Region.LOUISIANA])
            and j.start_year >= start_date
            and j.end_year <= end_date
        ]
    )
    print(
        f"{n} journeys went from France to Louisiana (in that order) between {start_date} and {end_date}"
    )

for start_date, end_date in [(1713, 1731), (1731, 1756)]:
    trans_oceanic = [
        j
        for j in JOURNEYS
        if {s.ocean() for s in j.normalized_stops}
        == {Ocean.INDIAN_OCEAN, Ocean.ATLANTIC}
        and j.start_year >= start_date
        and j.end_year <= end_date
    ]
    print(
        f"{len(trans_oceanic)} journeys crossed oceanic boundaries between {start_date} and {end_date}"
    )
    n1 = len([j for j in trans_oceanic if j.normalized_stops[0] == Region.FRANCE])
    print(f"   of those, {n1} started in France")
    n2 = len([j for j in trans_oceanic if j.normalized_stops[0] in FRENCH_AMERICAS])
    print(f"   of those, {n2} started in the French Americas")


for start_date, end_date in [(1713, 1731), (1731, 1756)]:
    for next_stop in [Region.BOURBON, Region.INDIA]:
        n = len(
            [
                j
                for j in JOURNEYS
                if contains_in_order(j.normalized_stops, [Region.SENEGAL, next_stop])
                and j.start_year >= start_date
                and j.end_year <= end_date
            ]
        )
        print(
            f"{n} journeys went through Senegal and then {next_stop.value} (in that order) between {start_date} and {end_date}"
        )


def avg_journeys_per_year_custom(
    date_range: Tuple[int, int], filter_fun: Callable[[Journey], bool]
) -> float:
    start_date, end_date = date_range
    n = len(
        [
            j
            for j in JOURNEYS
            if j.start_year >= start_date and j.end_year <= end_date and filter_fun(j)
        ]
    ) / (end_date - start_date)
    return round(n, 2)


def avg_journeys_per_year(
    date_range: Tuple[int, int],
    places: List[Region],
) -> None:
    start_date, end_date = date_range
    n = len(
        [
            j
            for j in JOURNEYS
            if j.start_year >= start_date
            and j.end_year <= end_date
            and all(place in j.normalized_stops for place in places)
        ]
    ) / (end_date - start_date)
    res = round(n, 2)
    locations_str = " and ".join([p.value for p in places]) if places else "anywhere"
    print(
        f"Avg num journeys going through {locations_str} in any order ({start_date}-{end_date}): {res} journeys/year"
    )


print("=========== Stats Dec 2023 part 2 ==============")
for reg in ALL_REGIONS:
    for date_range in [(1713, 1731), (1731, 1756), (1756, 1769)]:
        avg_journeys_per_year(date_range, [reg])
    print()

print("============ Stats Dec 2023 part 3 ===============")


for date_range in [(1713, 1731), (1731, 1756), (1756, 1769)]:
    avg_journeys_per_year(date_range, [])
    avg_journeys_per_year(date_range, [Region.CARIBBEAN, Region.LOUISIANA])
    print()

for date_range in [(1713, 1769), (1756, 1763), (1763, 1773)]:
    start_date, end_date = date_range
    avg_journeys_per_year(date_range, [Region.BOURBON])

    n = avg_journeys_per_year_custom(
        date_range,
        lambda j: any(p in j.normalized_stops for p in FRENCH_AMERICAS)
        and Region.BOURBON in j.normalized_stops,
    )
    print(
        f"Avg num journeys goign through French Americas and Bourbon in any order ({start_date}-{end_date}): {round(n, 2)} journeys/year"
    )

    avg_journeys_per_year(date_range, [Region.BOURBON, Region.INDIA])
    print()

print("============= Stats Dec 2023 part 4 ===============")
avg_journeys_per_year((1713, 1769), [])
avg_journeys_per_year((1756, 1763), [])
# journeys = [
#     j for j in JOURNEYS
#     if j.start_year >= 1756
#     and j.end_year <= 1769
#     and Region.SENEGAL in j.normalized_stops
# ]

print("============ Stats Dec 2023 part 5 =============")
for date_range in [(1713, 1731), (1731, 1756), (1756, 1769)]:
    start_d, end_d = date_range
    n = avg_journeys_per_year_custom(
        date_range,
        lambda j: all(p.ocean() == Ocean.ATLANTIC for p in j.normalized_stops),
    )
    print(
        f"Avg travels per year in the Atlantic ({start_d}-{end_d}): {n} journeys/year"
    )
    n = avg_journeys_per_year_custom(
        date_range,
        lambda j: all(p.ocean() == Ocean.INDIAN_OCEAN for p in j.normalized_stops),
    )
    print(
        f"Avg travels per year in the Indian Ocean ({start_d}-{end_d}): {n} journeys/year"
    )
    print()

print("======= Data Dec 18 2023 ===========")
for time_period in [(1713, 1756), (1756, 1763), (1756, 1773)]:
    avg_journeys_per_year(time_period, [])

for time_period in [(1713, 1756), (1756, 1763)]:
    n = avg_journeys_per_year_custom(
        time_period,
        lambda j: all(p.ocean() == Ocean.INDIAN_OCEAN for p in j.normalized_stops),
    )
    start, end = time_period
    print(f"Avg num journeys per year in the Indian ocean ({start}-{end}): {n}")


avg_journeys_per_year((1756, 1763), [Region.CARIBBEAN])
avg_journeys_per_year((1756, 1763), [Region.LOUISIANA])
avg_journeys_per_year((1756, 1763), [Region.CARIBBEAN, Region.LOUISIANA])

for time_period in [(1713, 1731), (1731, 1756), (1756, 1763), (1763, 1773)]:
    start, end = time_period
    n = avg_journeys_per_year_custom(
        time_period, lambda j: len({p.ocean() for p in j.normalized_stops}) == 2
    )
    print(f"Avg num journeys per year through both oceans ({start}-{end}): {n}")

for time_period in [(1713, 1731), (1731, 1756), (1713, 1756), (1756, 1763)]:
    avg_journeys_per_year(time_period, [Region.BOURBON])

for time_period in [(1713, 1731), (1731, 1756), (1713, 1756), (1756, 1763)]:
    avg_journeys_per_year(time_period, [Region.INDIA, Region.BOURBON])

for time_period in [(1713, 1763), (1763, 1773)]:
    n = avg_journeys_per_year_custom(
        time_period,
        lambda j: any(p.ocean() == Ocean.INDIAN_OCEAN for p in j.normalized_stops)
        and any(
            p
            in [
                Region.LOUISIANA,
                Region.NEW_FRANCE,
            ]
            for p in j.normalized_stops
        ),
    )
    start, end = time_period
    print(
        f"Avg num journeys per year going through Indian Ocean and (Louisiana or New France) ({start}-{end}): {n}"
    )

for time_period in [
    (1713, 1756),
    (1713, 1731),
    (1731, 1756),
    (1756, 1763),
    (1763, 1773),
]:
    start, end = time_period
    avg_journeys_per_year(time_period, [Region.BOURBON])

n = avg_journeys_per_year_custom(
    (1756, 1763), lambda j: all(p.ocean() == Ocean.ATLANTIC for p in j.normalized_stops)
)
print(f"Avg num journeys per year within the Atlantic (1756-1763): {n}")

for time_period in [(1713, 1731), (1731, 1756), (1756, 1763)]:
    n = avg_journeys_per_year_custom(
        time_period,
        lambda j: any(p.ocean() == Ocean.INDIAN_OCEAN for p in j.normalized_stops)
        and any(
            p
            in [
                Region.LOUISIANA,
                Region.NEW_FRANCE,
            ]
            for p in j.normalized_stops
        ),
    )
    start, end = time_period
    print(
        f"Avg num journeys per year between North America and Indian Ocean ({start}-{end}): {n}"
    )

n = len([j for j in JOURNEYS if j.start_year >= 1713 and j.end_year <= 1777])
n2 = len({j.ship_name for j in JOURNEYS if j.start_year >= 1713 and j.end_year <= 1777})
print(f"There are {n} journeys overall taking place between 1713-1777, for {n2} ships")

# print("============ Combinations =============")
# with open('ship_journeys_matrix.csv', 'w') as out_file:
#     writer = csv.writer(out_file)
#     headers = ["_"] + ALL_REGIONS
#     writer.writerow(headers)
#     for reg1 in ALL_REGIONS:
#         current_row = [reg1]
#         for reg2 in ALL_REGIONS:
#             if reg1 == reg2:
#                 continue
#             n = len(
#                 [
#                     j
#                     for j in JOURNEYS
#                     if contains_in_order(j.normalized_stops, [reg1, reg2])
#                     and j.start_year >= start_date
#                     and j.end_year <= end_date
#                 ]
#             )
#             current_row += [n]
