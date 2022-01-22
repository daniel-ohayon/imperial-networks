import csv
import json

f = open('./raw_data/race-quotes.csv')
reader = csv.DictReader(f)
rows = [row for row in reader]

distinct = {row['Region'] for row in rows}
print("Distinct regions: " + ', '.join(distinct))

with open('../data/race-quotes.js', 'w') as out_js_file:
    json_str = json.dumps(rows, indent=2, ensure_ascii=False)
    out_js_file.write(f"const RACE_QUOTES = {json_str};\n")
