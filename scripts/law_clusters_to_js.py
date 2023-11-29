import csv
import json

with open('raw_data/law_clusters_edited_v4.csv', encoding='utf8') as f:
    with open('../data/laws/law-clusters.js', 'w') as out_file:
        all_rows = list(csv.DictReader(f))
        out_file.write(f"const LAWS_IN_CLUSTERS = {json.dumps(all_rows, indent=2, ensure_ascii=False)};")



    