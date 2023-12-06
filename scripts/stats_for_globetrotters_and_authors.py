"""
October 2023
Using data combined from curated_globetrotters_data.csv
and travel-narrative-authors-journeys.csv
See queries/combine_globetrotters_data.sql
"""
from __future__ import annotations
import matplotlib.pyplot as plt
from contextlib import contextmanager

import json
import csv
import re
import sys

from typing import Callable, List, Dict, Optional, Set, Any, Tuple
import dataclasses
from enum import Enum

parse_authors_data = len(sys.argv) > 1 and sys.argv[1] == "--authors"

if parse_authors_data:
    INPUT_FILE = "raw_data/travel-narrative-authors-journeys.csv"
    OUTPUT_FILE = "../data/officials/travel-narrative-authors-links.js"
    JS_CONST_NAME = "TRAVEL_NARRATIVE_AUTHORS_LINKS"
else:
    INPUT_FILE = "raw_data/curated_globetrotters_data.csv"
    OUTPUT_FILE = "../data/officials/links.js"
    JS_CONST_NAME = "OFFICIALS_LINKS"


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

    def ocean(self) -> Ocean:
        if self.value in ("Caribbean", "Louisiana", "New France", "Guyana"):
            return Ocean.ATLANTIC
        if self.value in (
            "India",
            "Isle Bourbon & Isle of France",
            # TODO should this be moved to ATLANTIC?
            "Senegal",
            "Madagascar",
        ):
            return Ocean.INDIAN_OCEAN
        raise Exception(f"Unsupported enum value: {self.value}")

    @staticmethod
    def from_str(string: str) -> "Region":
        if string in ("Bourbon", "Isle Bourbon"):
            return Region.BOURBON
        if string in (
            "Dominica",
            "Guadeloupe",
            "Martinique",
            "Saint-Domingue",
            "Saint-Christophe",
            "Saint Christopher",
        ):
            return Region.CARIBBEAN
        return Region(string)


class Occupation(Enum):
    OFFICIAL = "Official"
    MILITARY = "Military"
    OTHER = "Other"

    @staticmethod
    def from_str(string: str) -> Occupation:
        if string == "Missionary":
            return Occupation.OTHER
        return Occupation(string)


@dataclasses.dataclass
class Person:
    regions: List[Region]
    departure_date: int
    via_metropole: Optional[bool]
    occupation: Occupation
    saw_both_oceans: bool


@dataclasses.dataclass
class Edge:
    bio: str
    annotated_bio: str
    name: str
    from_: Region  # 'from' is a python keyword
    to: Region
    departure_date: int
    via_metropole: Optional[bool]
    occupation: Occupation

    def to_dict(self) -> Dict[str, Any]:
        return {
            "bio": self.bio,
            "annotated_bio": self.annotated_bio,
            "name": self.name,
            "from": self.from_.value,
            "to": self.to.value,
            "to_date": self.departure_date,
            "via_metropole": self.via_metropole,
            "tag": self.occupation.value,
        }


########### BIOGRAPHY ANALYSIS FUNCTIONS ###################


KEYWORDS: Set[str] = {
    "cap-français",
    "saint-vincent",
    "martinique",
    "saint-louis",
    "îles du vent",
    "caribbean",
    "saint-domingue",
    "grenada",
    "guadeloupe",
    "saint domingue",
    "port-au-prince",
    "chandannagar",
    "surat",
    "pondicherry",
    "isle bourbon",
    "bourbon",
    "isle of france",
    "québec",
    "new france",
    "canada",
    "île royale",
    "montreal",
    "quebec",
    "louisbourg",
    "louisiana",
    "new orleans",
    "Guyana",
    "cayenne",
    "gorée",
    "senegal",
}


def get_index(haystack: str, needle: str) -> int:
    match = re.search(rf"\b{needle}\b", haystack, re.IGNORECASE)
    if match is None:
        return -1
    return match.start()


def str_to_bool(string: str) -> Optional[bool]:
    clean_str = string.strip().lower()
    if clean_str == "yes":
        return True
    if clean_str == "no":
        return False
    return None


def get_regions(regions_str: str) -> List[Region]:
    result = []
    for reg in regions_str.split(";"):
        result.append(Region.from_str(reg.strip()))
    return result


# ------------------- GRAPH DATA EXPORT -----------------------------


def process_row(row: Dict[str, str]) -> Tuple[Person, List[Edge]]:
    name = row["Name"]
    try:
        regions = get_regions(row["Regions"])
    except Exception as e:
        print(
            f"Failed to parse regions string for {name}: '{row['Regions']}' -- {str(e)}"
        )
        sys.exit(1)

    annotated_bio = row["Biography"]
    dep_date = int(row["Date of departure"])
    via_metropole = str_to_bool(row["Time in metropolitan France"])
    occupation = Occupation.from_str(row["Occupation"].strip())
    saw_both_oceans = len({reg.ocean() for reg in regions}) > 1

    person = Person(
        regions=regions,
        departure_date=dep_date,
        via_metropole=via_metropole,
        occupation=occupation,
        saw_both_oceans=saw_both_oceans,
    )

    edges = []
    for i in range(len(regions) - 1):
        edges.append(
            Edge(
                bio=row["Biography"],
                annotated_bio=annotated_bio,
                name=name,
                from_=regions[i],
                to=regions[i + 1],
                departure_date=dep_date,
                via_metropole=via_metropole,
                occupation=occupation,
            )
        )
    return person, edges


########################### DATA PROCESSING #######################################


ALL_EDGES: List[Edge] = []
ALL_PEOPLE: List[Person] = []

with open(INPUT_FILE, encoding="utf-8-sig") as input_csv:
    input_data = list(csv.DictReader(input_csv))
    for row in input_data:
        name = row["Name"]
        dep_date = row["Date of departure"].strip()
        if dep_date == "":
            print(f"[WARNING] Skipping {name} who doesn't have a departure date")
            continue
        if int(dep_date) > 1785:
            print(f"[WARNING] Skipping {name} who travelled after 1785")
            continue
        if row["Regions"].strip() == "":
            print(f"[WARNING] Skipping {name} who doesn't have regions")
            continue

        person, edges = process_row(row)
        ALL_EDGES += edges
        ALL_PEOPLE.append(person)


# --------------------  DATA ANALYSIS -----------------------------


def print_header(title: str):
    print(f"\n{title}\n=================")


for range in [
    "1598-1785",
    "1713-1731",
    "1731-1756",
    "1756-1785",
    "1740-1748",
    "1756-1791",
    "1763-1785",
]:
    start, end = range.split("-")
    start, end = int(start), int(end)

    ppl = [p for p in ALL_PEOPLE if p.departure_date >= start and p.departure_date <= end]
    print(f"People who travelled during {range}: {len(ppl)} people")
    for occup in Occupation:
        n_match = len([p for p in ppl if p.occupation == occup])
        print(
            f" * {n_match} {occup.value}"
        )

print_header("Data for the whole dataset")
for region in Region:
    matching_people = [p for p in ALL_PEOPLE if region in p.regions]
    print(f"People who went through {region.value}: {len(matching_people)}")
    for occup in Occupation:
        print(
            f"  * {len([p for p in matching_people if p.occupation == occup])} {occup.value}"
        )

print_header("Data for after 1763")
for region in [Region.CARIBBEAN, Region.BOURBON, Region.MADAGASCAR]:
    ppl = [p for p in ALL_PEOPLE if region in p.regions and p.departure_date >= 1763]
    print(f"{len(ppl)} people transited through {region.value} after 1763")
