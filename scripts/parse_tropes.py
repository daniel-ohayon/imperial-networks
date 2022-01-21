import csv
import json

f = open('./raw_data/tropes-in-travel-narratives.csv')
reader = csv.DictReader(f)
rows = [row for row in reader if row['Trope'].strip() != '']

with open('../data/tropes/tropes.js', 'w') as out_js_file:
    json_str = json.dumps(rows, indent=2, ensure_ascii=False)
    out_js_file.write(f"const TROPES = {json_str};\n")
