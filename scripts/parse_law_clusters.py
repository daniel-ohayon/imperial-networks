from typing import Dict, List, Set
from collections import Counter, defaultdict
import csv
from dataclasses import dataclass, fields, asdict


# 'Isle Bourbon & Isle of France', 'Caribbean', 'Senegal', 'India', 'Guyana', 'Louisiana', 'Madagascar', 'New France', 'Senegal ', 'Madagascar '

@dataclass(frozen=True)
class Law:
    id: str
    location: str
    name: str
    author: str
    date: int
    quote: str
    theme: str
    source: str
    ocean: str


def get_ocean(place: str) -> str:
    if place in {'Isle Bourbon & Isle of France', 'India', 'Madagascar'}:
        return 'INDIAN_OCEAN'
    else:
        return 'ATLANTIC'


id_to_law: Dict[str, Law] = {}
parent_to_children: Dict[str, List[str]] = defaultdict(list)
roots: List[str] = []
with open('raw_data/laws_influences.csv', encoding='utf-8-sig') as f:
    for row in csv.DictReader(f):
        child_id = row['Law ID']
        child_loc = row['Location'].strip()
        parent_id = row['Origin ID']
        id_to_law[child_id] = Law(
            id=child_id,
            location=child_loc,
            name=row['Name of the Law'],
            author=row['Author'],
            date=int(row['Date']),
            quote=row['Quotation'],
            theme=row['Theme'],
            source=row['Source'],
            ocean=get_ocean(child_loc)
        )
        if parent_id and len(parent_id) > 0:
            parent_to_children[parent_id].append(child_id)
        else:
            roots.append(child_id)

# print({n.location for n in id_to_law.values()})

print(f"Found {len(id_to_law)} laws, {len(roots)} roots")

clusters: List[Set[str]] = []

for law_id in roots:
    this_cluster = {law_id}

    def _traverse(node):
        for child in parent_to_children[node]:
            this_cluster.add(child)
            _traverse(child)

    _traverse(law_id)
    clusters.append(this_cluster)

by_ocean = Counter()
for cluster in clusters:
    all_oceans = ','.join(sorted({id_to_law[n].ocean for n in cluster}))
    by_ocean[all_oceans] += 1

for key, cnt in by_ocean.items():
    print(key, cnt)

with open('raw_data/law_clusters.csv', 'w', encoding='utf8') as out_file:
    field_names = [f.name for f in fields(Law)] + ['cluster_id'] 
    print(field_names)
    writer = csv.DictWriter(out_file, fieldnames=field_names)
    writer.writeheader()
    for i, cluster in enumerate(clusters, 1):
        for law_id in cluster:
            law = id_to_law[law_id]
            entry = asdict(law)
            entry['cluster_id'] = f"cluster_{i}"
            writer.writerow(entry)

print("Wrote to raw_data/law_clusters.csv")