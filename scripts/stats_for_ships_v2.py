"""
Some copy-paste from `parse_ship_data_for_animation.py`
but the way we count "journeys" is different because the animation cares
about each individual leg of a journey, but we don't here.

WARNING [15 Jan 2024]: the data used by this script is not the most recent;
(missing ships with >10 journeys, and missing info about slaves)
Use the file repos/mdh-journeys/raw_data/all_ships_parsed_v2.json instead
"""

from collections import Counter
import csv
from dataclasses import dataclass
from enum import Enum
import json
import random
from typing import Callable, List, Optional, Tuple, TypeVar

T = TypeVar("T")
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


def contains_in_order(haystack: List[T], needles: List[T]) -> bool:
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


def filter_by_date(start_yr: int, end_yr: int) -> List[Journey]:
    return [j for j in JOURNEYS if j.start_year >= start_yr and j.end_year <= end_yr]


def filter_by_regions(
    journeys: List[Journey], unordered_and_regions: List[Region]
) -> List[Journey]:
    return [
        j
        for j in journeys
        if all(region in j.normalized_stops for region in unordered_and_regions)
    ]


def pct_str(num: int, denom: int) -> str:
    pct = num / denom * 100
    return f"{num}/{denom} ({pct:.1f}%)"


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

print("\n======= Stats Jan 7 2023 ===========\n")


# What percentages of voyages were between the metropole and its colonies,
# and what percentage were from colony to colony for the period 1713-77
def calc1():
    journeys = filter_by_date(1713, 1777)
    met_col = [
        j
        for j in journeys
        if Region.FRANCE in j.normalized_stops and len(set(j.normalized_stops)) > 1
    ]
    col_col = [j for j in journeys if Region.FRANCE not in j.normalized_stops]
    pct1 = len(met_col) / len(journeys) * 100
    pct2 = len(col_col) / len(journeys) * 100
    print(
        f"\n[1713-1777] {pct1:.1f}% of journeys between metropole and colonies, {pct2:.1f}% amongst colonies"
    )


calc1()


# Period 1713-77: % of the voyages that crossed the boundary
# between the Atlantic and the Indian Ocean/ versus % of voyages that
# were just within the Atlantic/versus % of voyages that were just within
# the Indian Ocean.
def calc2():
    journeys = filter_by_date(1713, 1777)
    ocean_ctr = Counter()
    atlantic_only = [
        j
        for j in journeys
        if {st.ocean() for st in j.normalized_stops} == {Ocean.ATLANTIC}
    ]
    ocean_ctr["Atlantic only"] = len(atlantic_only)
    indian_only = [
        j
        for j in journeys
        if {st.ocean() for st in j.normalized_stops} == {Ocean.INDIAN_OCEAN}
    ]
    ocean_ctr["Indian ocean only"] = len(indian_only)
    both = [
        j
        for j in journeys
        if {st.ocean() for st in j.normalized_stops}
        == {Ocean.INDIAN_OCEAN, Ocean.ATLANTIC}
    ]
    ocean_ctr["Both oceans"] = len(both)
    print("\n[1713-1777] Breakdown of voyages by ocean")
    for key, cnt in ocean_ctr.most_common():
        pct = cnt / ocean_ctr.total() * 100
        print(f"  {key}: {cnt} voyages ({pct:.1f}%)")


calc2()


# % of voyages that were performed between 1713 and 1777, that transited through both the Mascarenes and West Africa
def calc3():
    total = filter_by_date(1713, 1777)
    matched = filter_by_regions(total, [Region.BOURBON, Region.SENEGAL])
    print(
        f"\n[1713-1777] {pct_str(len(matched), len(total))} of all voyages went through both Mascarennes & West Africa"
    )


calc3()


# Of all journeys that went through West Africa, give a breakdown by the specific location in West Africa they stopped at
def calc4():
    def find_senegal_keyword(stops: List[str]) -> Optional[str]:
        for stop in j.stops:
            for keyword in LOCATIONS["Senegal"]:
                if keyword in stop:
                    return keyword
        return "Other"

    journeys = filter_by_regions(JOURNEYS, [Region.SENEGAL])
    stop_ctr = Counter()
    for j in journeys:
        kw = find_senegal_keyword(j.stops)
        stop_ctr[kw] += 1

    print(
        f"\nBreakdown of stop in West Africa for the {len(journeys)} that stopped there:"
    )
    for name, cnt in stop_ctr.most_common():
        pct = cnt / stop_ctr.total() * 100
        print(f"  {name}: {cnt} ({pct:.1f}%)")


calc4()


# Out of the 478 journeys which took place between 1713 and 1731,
# how many departed from, or transited through, the metropole.
def calc5():
    total = filter_by_date(1713, 1731)
    matched = filter_by_regions(total, [Region.FRANCE])
    res = pct_str(len(matched), len(total))
    print(f"\n[1713-1731] {res} journeys included the metropole")


calc5()


def calc6():
    total = filter_by_regions(filter_by_date(1713, 1731), [Region.CARIBBEAN])
    matched = [j for j in total if "Martinique" in j.stops]
    res = pct_str(len(matched), len(total))
    print(f"\n[1713-1731] {res} journeys via Caribbean passed through Martinique")


calc6()


def calc7():
    res = len(
        filter_by_regions(
            filter_by_date(1713, 1731), [Region.CARIBBEAN, Region.LOUISIANA]
        )
    )
    print(f"\n[1713-1731] {res} journeys went through both Caribbean and Louisiana")


calc7()


# How many ship voyages stopped first in the Mascarenes, then in the Caribbean, then in France in the period 1713-31? Could you give me 3 names of ships who did this?
def calc8():
    base = filter_by_date(1713, 1731)
    matched = [
        j
        for j in base
        if contains_in_order(
            j.normalized_stops, [Region.BOURBON, Region.CARIBBEAN, Region.FRANCE]
        )
    ]
    examples_str = ", ".join([j.ship_name for j in matched])
    print(
        f"\n[1713-1731] {len(matched)} ships went through Mascarennes then Caribbean then France. They are: {examples_str}"
    )


calc8()


# Of all the ships that transited through the Mascarenes between 1731-1756,
# how much % transited through Isle de France compared to between 1713-1731? Same question for Isle Bourbon
def calc9():
    def find_mascarennes_kw(stops: List[str]) -> Optional[str]:
        for stop in stops:
            for keyword in LOCATIONS["Isle Bourbon & Isle of France"]:
                if keyword in stop:
                    return keyword
        return "Other"

    for start_yr, end_yr in [(1713, 1731), (1731, 1756)]:
        journeys = filter_by_regions(filter_by_date(1713, 1731), [Region.BOURBON])
        kw_ctr = Counter()
        for j in journeys:
            kw_ctr[find_mascarennes_kw(j.stops)] += 1
        print(f"\n[{start_yr}-{end_yr}] Breakdown of journeys through Mascarennes:")
        for name, cnt in kw_ctr.most_common():
            print(f"  {name}: {cnt}")


calc9()


# Could you give me examples names of SHIPS ON THEIR WAY TO the Indian Ocean THAT STOPPED AT OUIDAH in 1713-31?
def calc10():
    matching = [
        j
        for j in filter_by_date(1713, 1731)
        if any("Juda" in st for st in j.stops)
        and any(s.ocean() == Ocean.INDIAN_OCEAN for s in j.normalized_stops)
    ]
    print("SHIPS ON THEIR WAY TO the Indian Ocean THAT STOPPED AT OUIDAH in 1713-31?")
    for match in matching:
        print(f"{match.ship_name} ({match.start_year}-{match.start_year})")


calc10()


# I need a few names of ships who travelled from the Mascarenes to Madagascar before leaving for India in 1713-31.
def calc11():
    matching = [
        j
        for j in filter_by_date(1713, 1731)
        if contains_in_order(
            j.normalized_stops, [Region.BOURBON, Region.MADAGASCAR, Region.INDIA]
        )
    ]
    print(
        "ships who travelled from the Mascarenes to Madagascar before leaving for India in 1713-31."
    )
    for match in matching:
        print(f"{match.ship_name} ({match.start_year}-{match.start_year})")


calc11()


# How many ship voyages were performed between 1731-56?
def calc12():
    n = len(filter_by_date(1731, 1756))
    print(f"How many ship voyages were performed between 1731-56? {n}")


calc12()
