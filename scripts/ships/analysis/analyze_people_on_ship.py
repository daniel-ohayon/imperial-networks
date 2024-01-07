"""
Should be run from the `scripts` folder
"""

from dataclasses import dataclass
import dataclasses
from enum import Enum
import random
import sys
from typing import Dict, List, Optional, Tuple, TypeVar
import json
from collections import Counter, defaultdict


ShipName = str
DateRange = str

IS_VERBOSE = len(sys.argv) > 1 and sys.argv[1] == "-v"

LOCATIONS_MAPPING = {
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


@dataclass
class Region:
    places: List[str]
    label: str

    @staticmethod
    def single(name: str):
        return Region(places=[name], label=name)


# These are common sets of places used in the data analysis
CARIBBEAN = Region(
    places=["Saint Domingue", "Martinique", "Guadeloupe", "Grenada"], label="Caribbean"
)
MASCARENNES = Region(["Isle Bourbon", "Île de France"], "Mascarennes")
WEST_AFRICA = Region(["Gorée", "Saint-Louis", "Ouidah"], "West Africa")
INDIA = Region(["Pondicherry", "Chandernagore", "Karaikal", "Mahe"], "India")
INDIAN_OCEAN = Region(
    INDIA.places + MASCARENNES.places + ["Madagascar"], "Indian Ocean"
)
NORTH_AMERICA = Region(CARIBBEAN.places + ["Louisiana", "New France"], "North America")
LOUISIANA = Region.single("Louisiana")
FRANCE = Region(["France"], "the metropole")


@dataclass
class ShipJourney:
    ship_name: str
    normalized_stops: List[str]
    raw_stops: List[str]
    start_year: int
    end_year: int


class Job(str, Enum):  # inherit from str to support dataclasses.asdict
    SHIP_CREW = "SHIP_CREW"
    MILITARY = "MILITARY"
    RELIGIOUS = "RELIGIOUS"
    ARTISAN = "ARTISAN"
    OTHER = "OTHER"
    OFFICIAL = "OFFICIAL"


@dataclass
class JobInfo:
    job: Job
    keyword_matched: Optional[str]
    job_raw: str


def normalize_job(raw_job: str) -> JobInfo:
    for normalized_name, keywords in JOB_MAPPING.items():
        for kw in keywords:
            if kw in raw_job:
                return JobInfo(
                    job=Job(normalized_name), keyword_matched=kw, job_raw=raw_job
                )
    return JobInfo(job=Job.OTHER, keyword_matched=None, job_raw=raw_job)


@dataclass
class Person:
    name: str
    journey: List[str]
    bio: str
    job: Job
    job_raw: str
    job_keyword: Optional[str]
    start_year: int
    end_year: int
    ship_name: str
    ship_stops: List[str]


class Ethnicity(Enum):
    NOIR = "NOIR"
    MULATRE = "MULATRE"
    SAUVAGE = "SAUVAGE"
    MALABAR = "MALABAR"
    LASCAR = "LASCAR"
    COOLIE = "COOLIE"
    INDIEN = "INDIEN"
    METIS = "METIS"
    QUARTERON = "QUARTERON"
    LIBRE = "LIBRE"
    ESCLAVE = "ESCLAVE"
    AFFRANCHI = "AFFRANCHI"
    OTHER = "OTHER"

    @staticmethod
    def normalize(raw_job: str):
        raw_job = raw_job.lower()
        for normalized_name, keywords in ETH_MAPPING.items():
            if any(kw in raw_job for kw in keywords):
                return normalized_name
        return Ethnicity.OTHER


ETH_MAPPING = {
    Ethnicity.NOIR: ["noir", "nègre", "noire", "négresse"],
    Ethnicity.MULATRE: ["mulâtre", "mulâtresse"],
    Ethnicity.SAUVAGE: ["sauvage", "sauvagesse"],
    Ethnicity.MALABAR: ["malabar"],
    Ethnicity.LASCAR: ["lascar"],
    Ethnicity.COOLIE: ["coolie"],
    Ethnicity.INDIEN: ["indien"],
    Ethnicity.METIS: ["métis", "metis"],
    Ethnicity.QUARTERON: ["quarteron"],
    Ethnicity.LIBRE: ["libre"],
    Ethnicity.ESCLAVE: ["esclave"],
    Ethnicity.AFFRANCHI: ["affranchi"],
}

JOB_MAPPING = {
    Job.MILITARY: [
        "soldat",
        "capitaine",
        "lieutenant",
        "volontaire",
        "caporal",
        "officier",
        "cadet",
        "anspessade",  # grade militaire
        "sergent",
        "canonnier",
        "maréchal",
        "quartier-maitre",
        "quartier-maître",
        "enseigne",
        "grenadier",
        "colonel",
        "commandant",
        "sous-brigadier",
        "chirurgien major",  # army surgeon
        "fusilier",  # Marin appartenant à un corps spécial destiné au combat sur terre
        "fusillier",  # likely misspelling of "fusilier"
    ],
    Job.SHIP_CREW: [
        "matelot",
        "mousse",
        "patron de canot",
        "patron de chaloupe",
        "pilote",  # Celui qui manoeuvre, guide un navire
        "pilotin",  # apprenti pilote
        "contremaître",
        "voilier",  # Artisan ou marin dont la profession est de tailler ou coudre ensemble les laizes des voiles
        "novice",  # apprenti matelot
        "marinier",
        "subrécargue",  # Personne choisie par un armateur ou un affréteur et embarquée sur un navire pour assurer la gestion de la cargaison, sa vente et le réapprovisionnement du navire pour le retour
        "bosseman",  # maître d'équipage
        "maître",  # Marin qualifié chargé de diriger l'équipage du pont
        "timonier",  # Marin spécialisé qui s'occupe de la direction d'un navire
        "fourrier",  # Matelot chargé des appels, des écritures administratives et de la comptabilité à bord.
    ],
    Job.RELIGIOUS: [
        "missionnaire",
        "religieux",
        "aumônier",
        "prêtre",
        "religieuse",
        "évêque",
        "frater",  # Frère lai; moine, religieux.
    ],
    Job.OFFICIAL: [
        "procureur",
        "gouverneur",
    ],
    Job.ARTISAN: [
        "forgeron",
        "ouvrier",
        "cordonnier",
        "couvreur",
        "calfat",  # réparateur de voiles de navires
        "tailleur",
        "maçon",
        "serrurier",
        "menuisier",
        "ingénieur",
        "sculpteur",
        "meunier",
        "tanneur",
        "boulanger",
        "tonnelier",  # reparateur de tonneaux
        "cuisinier",
        "charpentier",
        "armurier",
        "boucher",
        "perruquier",
        "jardinier",
        "scieur",
        "taillandier",  # ouvrier qui fabrique les outils et instruments tranchants en fer
    ],
}


def print_breakdown(label: str, counter: Counter, n_max: Optional[int] = None) -> None:
    print(f"Breakdown of {label} (total: {counter.total():,}):")
    for item, count in counter.most_common(n_max):
        percentage = (count / counter.total()) * 100
        item = item.value if hasattr(item, "value") else item  # for enums
        print(f"  {item}: {count:,} ({percentage:.2f}%)")
    print()


##################### SHIP DATA PROCESSING #####################
@dataclass
class KeywordMatch:
    index: int
    location: str


def normalize_location(raw_location_str: str) -> List[str]:
    matches: List[KeywordMatch] = []
    # in cases like "Mascareignes et Madagascar", we want to
    # retain both 'Mascareignes' (Bourbon) and 'Madagascar' as separate stops
    # That's why we return a list as opposed to a single name.
    for key, synonyms in LOCATIONS_MAPPING.items():
        for synonym in synonyms:
            if synonym in raw_location_str:
                matches.append(
                    KeywordMatch(
                        index=raw_location_str.index(synonym),
                        location=key,
                    )
                )
                break
    sorted_matches = sorted(matches, key=lambda match: match.index)
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


def process_ships_data() -> Dict[ShipName, List[ShipJourney]]:
    ships_raw = json.load(open("raw_data/ship_data.json"))
    result = defaultdict(list)
    for journeys_for_one_ship in ships_raw.values():
        for journey in journeys_for_one_ship:
            raw_stops_v1 = journey["stops"]
            raw_stops_v2 = [e["location"] for e in journey["ship_log"]]
            stops_v1 = normalize_itinerary(raw_stops_v1)
            stops_v2 = normalize_itinerary(raw_stops_v2)
            stops = stops_v1 if len(stops_v1) > len(stops_v2) else stops_v2
            start_date = journey["start_date"]
            end_date = journey["end_date"]

            # Sometimes the ship has an alias included in the name, eg
            # "TIENNETTE ou TIENETTE" - but in practice it seems the people data only
            # refers to the main name (the first one of the two), so we only keep that one
            ship_name = journey["ship_name"].split(" ou ")[0]

            if start_date is None or end_date is None:
                if IS_VERBOSE:
                    print(f"skipping {ship_name} because missing start/end date")
                continue
            result[ship_name].append(
                ShipJourney(
                    ship_name=ship_name,
                    normalized_stops=stops,
                    raw_stops=raw_stops_v1,
                    start_year=int(start_date),
                    end_year=int(end_date),
                )
            )
    return result


def maybe_index(lst: List[TypeVar("T")], item: TypeVar("T")) -> Optional[int]:
    try:
        return lst.index(item)
    except ValueError:
        return None


########################## People biography processing ##########################

START_PHRASES = [
    "embarqué à ",
    "embarqué au",
    "remplacement à",
    "remplacement au",
    "complément à",
    "complément au",
]
END_PHRASES = [
    "débarqué à",
    "débarqué au",
    "débarqué malade à",
    "déserté à",
    "resté malade à",
]

# These phrases indicate that we don't know where the person stopped
BIO_KEYWORDS_TO_EXCLUDE_PEOPLE = {
    "resté à terre",
    "débarqué à ?",
    "naufrage",
    "mort à bord",
    "mort en mer",
    "mort le ",
}


def parse_person_journey(bio: str, ship_stops: List[str]) -> List[str]:
    """
    Here we combine the freeform text about the person with the ship's log
    to figure out all the places this person has been.

    The biography typically contains the start and end ports of the person,
    with a line like "embarqué à Lorient" and then another line like
    "débarqué à l'île Bourbon".
    """
    if not ship_stops:
        return []

    if "a fait la campagne" in bio:
        # means they did the whole ship journey
        return ship_stops

    lines = bio.split("\n")
    start_loc = None
    end_loc = None
    for line in lines:
        if "embarqué à l'armement" in line:
            start_loc = ship_stops[0]
        elif "débarqué au désarmement" in line:
            end_loc = ship_stops[-1]
        elif any(phrase in line for phrase in START_PHRASES):
            matches = normalize_location(line)
            if matches:
                start_loc = matches[0]
        elif any(phrase in line for phrase in END_PHRASES):
            matches = normalize_location(line)
            if matches:
                end_loc = matches[0]

    if start_loc and end_loc:
        i_start = maybe_index(ship_stops, start_loc)
        i_end = maybe_index(ship_stops, end_loc)
        if i_start is not None and i_end is not None:
            # if both start and end locations are part of the ship's log,
            # then we can get the intermediary stops from the ship log
            return ship_stops[i_start : (i_end + 1)]
        # otherwise we just know that this person has been to the start and end location,
        # so we can still return that
        return [start_loc, end_loc]
    return []


def find_journey_for_person(
    ship_journeys: List[ShipJourney], person_start_year: int, person_end_year: int
) -> Optional[ShipJourney]:
    """
    In the data for each person, we are given a ship name and a start/end year.
    The start/end year don't always match the start/end year of ship journeys in the ships dataset,
    so in that case we try to find a journey like: JOURNEY_START ... PERSON_START ... PERSON_END ... JOURNEY_END
    """
    for journey in ship_journeys:
        if (
            journey.start_year == person_start_year
            and journey.end_year == person_end_year
        ):
            return journey
        if (
            journey.start_year <= person_start_year
            and journey.end_year >= person_end_year
        ):
            return journey
    return None


def process_people_data() -> List[Person]:
    n_skipped = 0
    n_missing_ship = 0
    n_no_stops = 0

    people_raw = json.load(open("raw_data/all_ship_crew_parsed.json"))
    ship_journeys = process_ships_data()

    result = []
    for person in people_raw:
        # some unnamed people are grouped under a single entry; skip those
        if person["name"] == "ANONYMES":
            n_skipped += 1
            continue

        if any(phrase in person["remark"] for phrase in BIO_KEYWORDS_TO_EXCLUDE_PEOPLE):
            n_skipped += 1
            continue

        parsed_job = normalize_job(person["occupation"])
        # eth_counter[Ethnicity.normalize(person["remark"])] += 1
        # norm_job_counter[norm_job] += 1
        # if norm_job == Job.OTHER:
        # other_job_counter[person["occupation"]] += 1
        ship_name = person["ship"].upper()
        # ship_dates can be either of format "1756" or "1756-1758"
        ship_dates = person["ship_dates"].split("-")
        start_year, end_year = int(ship_dates[0]), int(ship_dates[-1])

        # find matching ship journey
        ship_journey = find_journey_for_person(
            ship_journeys.get(ship_name, []), start_year, end_year
        )

        if ship_journey is None:
            if IS_VERBOSE and random.random() <= 0.001:  # sample examples for debugging
                print(f"No ship found for {person['name']}, {ship_name}, {ship_dates}")
            n_missing_ship += 1
            continue

        person_stops = parse_person_journey(
            person["remark"], ship_journey.normalized_stops
        )
        if not person_stops:
            n_no_stops += 1
            continue
        result.append(
            Person(
                name=person["name"],
                journey=person_stops,
                job=parsed_job.job,
                job_raw=parsed_job.job_raw,
                job_keyword=parsed_job.keyword_matched,
                start_year=start_year,
                end_year=end_year,
                bio=person["remark"],
                ship_name=ship_name,
                ship_stops=ship_journey.normalized_stops,
            )
        )

    print(f"Kept {len(result):,}/{len(people_raw):,} people after filtering")
    print(
        f"  {n_skipped:,} skipped based on keywords in their bio ('mort', 'débqraué à ?', etc)"
    )
    print(f"  {n_missing_ship:,} skipped because no matching ship record found")
    print(
        f"  {n_no_stops:,} skipped because no known regions could be extraced from their bio"
    )
    print("=======================")
    return result


################# TOP-LEVEL SUMMARY #####################
PEOPLE = process_people_data()
print_breakdown("jobs across all people", Counter([p.job for p in PEOPLE]))
print()

print_breakdown(
    "jobs among artisans",
    Counter([p.job_keyword for p in PEOPLE if p.job == Job.ARTISAN]),
)

with open("people_processed.json", "w") as out_file:
    out_dict = [dataclasses.asdict(person) for person in PEOPLE]
    json.dump(out_dict, out_file, ensure_ascii=False, indent=2)

################ DATA ANALYSIS FUNCTIONS ################


def filter_ppl_by_date(start_yr: int, end_yr: int) -> List[Person]:
    return [p for p in PEOPLE if start_yr <= p.start_year and p.end_year <= end_yr]


def contains_in_order(haystack: List[str], needles: List[str]) -> bool:
    i = 0
    j = 0

    while i < len(haystack) and j < len(needles):
        if haystack[i] == needles[j]:
            j += 1
        i += 1

    return j == len(needles)


def filter_ppl_directed(
    date_range: Tuple[int, int], from_reg: Region, to_reg: Region
) -> List[Person]:
    start_yr, end_yr = date_range
    matches = []
    for p in filter_ppl_by_date(start_yr, end_yr):
        norm_regions = []
        for place in p.journey:
            if place in from_reg.places:
                norm_regions.append("FROM")
            elif place in to_reg.places:
                norm_regions.append("TO")
        if contains_in_order(norm_regions, ["FROM", "TO"]):
            matches.append(p)

    return matches


def filter_ppl(date_range: Tuple[int, int], reg1: Region, reg2: Region) -> List[Person]:
    start_yr, end_yr = date_range
    return [
        p
        for p in filter_ppl_by_date(start_yr, end_yr)
        if any(pl in p.journey for pl in reg1.places)
        and any(pl in p.journey for pl in reg2.places)
    ]


def count_ppl(date_range: Tuple[int, int], reg1: Region, reg2: Region) -> None:
    start_yr, end_yr = date_range
    matches = filter_ppl(date_range, reg1, reg2)
    print(
        f"[{start_yr}-{end_yr}] {len(matches)} people spent time in {reg1.label} and {reg2.label}"
    )


def count_ppl_directed(
    date_range: Tuple[int, int],
    reg1: Region,
    reg2: Region,
    job: Job,
) -> None:
    start_yr, end_yr = date_range
    matches = [p for p in filter_ppl(date_range, reg1, reg2) if p.job == job]
    print(
        f"\n[{start_yr}-{end_yr}] {len(matches):,} {job.name} people went from {reg1.label} to {reg2.label} "
    )


def show_job_breakdown_directed_j(
    date_range: Tuple[int, int], from_reg: Region, to_reg: Region
) -> None:
    (
        start_yr,
        end_yr,
    ) = date_range
    ppl = filter_ppl_directed(date_range, from_reg, to_reg)
    domains_counter = Counter([p.job for p in ppl])
    others_counter = Counter([p.job_raw for p in ppl if p.job == Job.OTHER])
    artisans_counter = Counter([p.job_raw for p in ppl if p.job == Job.ARTISAN])
    n_sailors = domains_counter.pop(Job.SHIP_CREW, 0)
    print("==============================")
    print(
        f"[{start_yr}-{end_yr}] {len(ppl):,} people went from {from_reg.label} to {to_reg.label} including {n_sailors} sailors"
    )
    print_breakdown("jobs among them, excluding the sailors", domains_counter)
    print_breakdown("raw job in the 'OTHER' category (top 10 only)", others_counter, 10)
    print_breakdown(
        "raw job in the 'ARTISAN' category (top 10 only)", artisans_counter, 10
    )


################ ADHOC DEBUGGING ################ 
# Only 7% of ships went through NorAm
# ships = process_ships_data()
# ship_journeys: List[ShipJourney] = []
# for journeys in ships.values():
#     ship_journeys += journeys
# print(len(ship_journeys))
# print(len([j for j in ship_journeys if "Louisiana" in j.normalized_stops or "New France" in j.normalized_stops]))


################ DATA ANALYSIS QUERIES ################

count_ppl((1713, 1731), CARIBBEAN, LOUISIANA)
count_ppl((1713, 1731), CARIBBEAN, MASCARENNES)
count_ppl((1713, 1731), WEST_AFRICA, MASCARENNES)
count_ppl((1713, 1731), MASCARENNES, INDIA)
count_ppl((1713, 1731), Region.single("Isle Bourbon"), Region.single("Île de France"))

# From where did the people whose journeys ended in the Mascarenes come from?
ppl_end_mascarennes = [
    p for p in filter_ppl_by_date(1713, 1731) if p.journey[-1] in MASCARENNES.places
]
print_breakdown(
    "starting location for people whose journeys ended in the Mascarennes",
    Counter([p.journey[0] for p in ppl_end_mascarennes]),
)


# How many officials left France for the colonies in 1713-31? Could you give me 3 EXAMPLES?
ppl_result = [
    p
    for p in filter_ppl_by_date(1713, 1731)
    if p.job == Job.OFFICIAL and p.journey[0] == "France" and len(p.journey) > 1
]
print(
    f"{len(ppl_result)} officials left France for the colonies in 1713-1731. Examples: {', '.join([p.name for p in ppl_result[:3]])}"
)

# Vice-versa
ppl_cols_to_fr = [
    p
    for p in filter_ppl_by_date(1713, 1731)
    if p.job == Job.OFFICIAL and p.journey[0] != "France" and "France" in p.journey[1:]
]
print(f"{len(ppl_result)} officials left the colonies to go to France in 1713-1731.")

# What were the 15 most common professions among people who left France for the Caribbean in 1713-1731?
show_job_breakdown_directed_j((1713, 1731), FRANCE, CARIBBEAN)

# What were the 15 most common professions among people who travelled from the Caribbean to the metropole?
show_job_breakdown_directed_j((1713, 1731), CARIBBEAN, FRANCE)

# What were the 15 most common professions among people who travelled from Louisiana to the Caribbean?
show_job_breakdown_directed_j((1713, 1731), LOUISIANA, CARIBBEAN)

# What were the 15 most common professions among people who travelled from the Caribbean to Louisiana
show_job_breakdown_directed_j(
    (1713, 1731),
    CARIBBEAN,
    LOUISIANA,
)

# What were the 15 most common professions among people who travelled from the Mascarenes to the Caribbean?
show_job_breakdown_directed_j(
    (1713, 1731),
    MASCARENNES,
    CARIBBEAN,
)

# What were the 15 most common professions among people who travelled from the Caribbean to the Mascarenes?
show_job_breakdown_directed_j(
    (1713, 1731),
    CARIBBEAN,
    MASCARENNES,
)

# What were the 15 most common professions among people who travelled from the metropole to the Mascarenes?
show_job_breakdown_directed_j(
    (1713, 1731),
    FRANCE,
    MASCARENNES,
)

# What were the 15 most common professions among people who travelled from the Mascarenes to India?
show_job_breakdown_directed_j(
    (1713, 1731),
    MASCARENNES,
    INDIA,
)

# What were the 15 most common professions among people who travelled from India to the Mascarenes?
show_job_breakdown_directed_j(
    (1713, 1731),
    INDIA,
    MASCARENNES,
)

print("================ PERIOD 1731-1756 ====================")

# How many people moved from France to Isle of France/Isle Bourbon and what were the 15 most common professions among them?
show_job_breakdown_directed_j(
    (1731, 1756),
    FRANCE,
    MASCARENNES,
)

# How many people moved from Louisiana to the Indian Ocean between 1730 and 1740, and what were the 15 most common professions among them?
show_job_breakdown_directed_j(
    (1730, 1740),
    LOUISIANA,
    INDIAN_OCEAN,
)

# How many people moved from Senegambia to the Mascarenes between 1731-1756 and what were the most common professions among them?
show_job_breakdown_directed_j(
    (1731, 1756),
    WEST_AFRICA,
    MASCARENNES,
)

# Of all the people who travelled in both Senegambia and the Mascarenes, how many then stayed in the Mascarenes in 1731-1756?
base = filter_ppl((1731, 1756), WEST_AFRICA, MASCARENNES)
n1 = len(base)
n2 = len([p for p in base if p.journey[-1] in MASCARENNES.places])
print(
    f"Of {n1} people who travelled in both Senegambia and the Mascarenes (1731-1756), {n2} then stayed in the Mascarennes"
)

# How many people moved from Senegambia to India between 1731-1756 and what were the most common professions among them?
show_job_breakdown_directed_j(
    (1731, 1756),
    WEST_AFRICA,
    INDIA,
)

# Of all the people who travelled in both Senegambia and India, how many then stayed in India in 1731-1756?
base = filter_ppl((1731, 1756), WEST_AFRICA, INDIA)
n1 = len(base)
n2 = len([p for p in base if p.journey[-1] in INDIA.places])
print(
    f"Of {n1} people who travelled in both Senegambia and India (1731-1756), {n2} then stayed in India"
)


# How many military men arrived in the Mascarenes per year in 1713-31/1731-56, 1744-8 and 1744-63?
def cnt_avg_military(date_range):
    start_yr, end_yr = date_range
    ppl = filter_ppl_by_date(start_yr, end_yr)
    ppl = [
        p
        for p in ppl
        if any(place in p.journey for place in MASCARENNES.places)
        and p.job == Job.MILITARY
    ]
    avg_num = len(ppl) / (end_yr - start_yr)
    print(
        f"Average number of military people who went through the Mascarennes ({start_yr}-{end_yr}): {avg_num:.2f} ppl/year"
    )


print()
cnt_avg_military((1713, 1731))
cnt_avg_military((1731, 1756))
cnt_avg_military((1744, 1748))
cnt_avg_military((1744, 1763))

print()

print("========= Period 1756-1777 =========")
# what were the 15 most common profession among people who travelled from the metropole to the Mascarenes in 1756-63
show_job_breakdown_directed_j((1756, 1763), FRANCE, MASCARENNES)

# what were the 15 most common profession among people who travelled from the metropole to India in 1756-63
show_job_breakdown_directed_j((1756, 1763), FRANCE, INDIA)

# How many military men were sent from the metropole to the Mascarenes in 1756-63?
count_ppl_directed(
    (1756, 1763),
    FRANCE,
    MASCARENNES,
    Job.MILITARY,
)

# How many military men were sent from the metropole to India in 1756-63
count_ppl_directed((1756, 1763), FRANCE, INDIA, Job.MILITARY)

# How many people moved from North America to the Mascarenes between 1756-63? What were the 15 most common profession among them?
show_job_breakdown_directed_j((1756, 1763), NORTH_AMERICA, MASCARENNES)

# How many people moved from North America to India between 1756-63? What were the 15 most common profession among them?
show_job_breakdown_directed_j((1756, 1763), NORTH_AMERICA, INDIA)

# How many people moved from the Caribbean to Mascarenes in 1756-63, and what were the 15 most common professions among them?
show_job_breakdown_directed_j((1756, 1763), CARIBBEAN, MASCARENNES)

# How many military men moved from North America to the Mascarenes in 1756-1763?
count_ppl_directed(
    (1756, 1763),
    NORTH_AMERICA,
    MASCARENNES,
    Job.MILITARY,
)

# How many military men moved from the Caribbean to the Mascarenes in 1756-63?
count_ppl_directed(
    (1756, 1763),
    CARIBBEAN,
    MASCARENNES,
    Job.MILITARY,
)

# How many military men moved from the Caribbean to India in 1756-63?
count_ppl_directed((1756, 1763), CARIBBEAN, INDIA, Job.MILITARY)

# How many military men moved from North America to the Mascarenes in 1763-1777
count_ppl_directed(
    (1763, 1777),
    NORTH_AMERICA,
    MASCARENNES,
    Job.MILITARY,
)
