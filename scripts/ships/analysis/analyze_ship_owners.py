from collections import Counter
from dataclasses import dataclass
from enum import Enum
import json
from typing import List, Optional


class Owner(Enum):
    KING = "KING"
    COMPAGNIE_DES_INDES = "COMPAGNIE_DES_INDES"
    OTHER_COMPANY = "OTHER_COMPANY"
    PIRAVTE_OWNER = "PRIVATE_OWNER"
    UNKNOWN = "UNKNOWN"


def parse_owner(raw_owner: str) -> Owner:
    if raw_owner == "":
        return Owner.UNKNOWN
    raw_owner = raw_owner.lower()
    if raw_owner in {
        "fermes du tabac",
        "fermes du roi",
        "fermiers généraux",
        "marine royale",
    }:
        return Owner.KING
    if raw_owner == "compagnie des indes":
        return Owner.COMPAGNIE_DES_INDES
    if raw_owner.startswith("compagnie d"):
        return Owner.OTHER_COMPANY
    return Owner.PIRAVTE_OWNER


@dataclass
class JourneyInfo:
    start_year: int
    end_year: int
    owner_raw: str
    owner: Owner


def print_breakdown(label: str, counter: Counter, n_max: Optional[int] = None) -> None:
    print(f"Breakdown of {label} (total: {counter.total():,}):")
    for item, count in counter.most_common(n_max):
        percentage = (count / counter.total()) * 100
        item = item.value if hasattr(item, "value") else item  # for enums
        print(f"  {item}: {count:,} ({percentage:.2f}%)")
    print()


def cleanup_ship_journeys() -> List[JourneyInfo]:
    raw_journeys = json.load(open("raw_data/all_ships_parsed_v2.json"))
    result = []
    for journey in raw_journeys:
        if journey["start_year"] is not None and journey["end_year"] is not None:
            owner_raw = journey["owner"]
            result.append(
                JourneyInfo(
                    start_year=journey["start_year"],
                    end_year=journey["end_year"],
                    owner_raw=owner_raw,
                    owner=parse_owner(owner_raw),
                )
            )
    return result


JOURNEYS = cleanup_ship_journeys()
# Of the journey that were performed between 1713 and 1777,
# how many were operated by the Compagnie des Indes,
# how many by other compagnies (noms des compagnies),
# how many by private merchants, and how many by the French crown?
journeys1 = [j for j in JOURNEYS if j.start_year >= 1713 and j.end_year <= 1777]
print_breakdown("ship owners (1713-1777)", Counter([j.owner for j in journeys1]))

# Could we determine what other compagnies performed the voyages between 1713 and 1777, exactly?
print_breakdown(
    "ship owners – other companies (1713-1777)",
    Counter([j.owner_raw for j in journeys1 if j.owner == Owner.OTHER_COMPANY]),
)


# What was the % of voyages per year operated by private merchants in 1713-1767,
# compared to 1767-77?
def pct_private_per_year(start_yr: int, end_yr: int) -> None:
    journeys = [
        j for j in JOURNEYS if j.start_year >= start_yr and j.end_year <= end_yr
    ]
    by_private = [j for j in journeys if j.owner == Owner.PIRAVTE_OWNER]
    n1, n2 = len(by_private), len(journeys)
    print(
        f"[{start_yr}-{end_yr}] {n1}/{n2} journeys were operated by private owners ({n1/n2*100:.2f}%)"
    )
    return


pct_private_per_year(1713, 1767)
pct_private_per_year(1767, 1777)
