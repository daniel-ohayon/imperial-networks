import json
import subprocess

import numpy
from openpyxl import load_workbook
from pandas import DataFrame

MISSING_VALUE = "NA"


def is_from_metropole(row):
    return row['Author'] in ('Richelieu', 'The King', 'Colbert')


def merge_themes(theme):
    if theme == 'Culture':
        return 'Religion'
    if theme == 'Naturalization':
        return "Free People of Color"
    return theme


data = load_workbook('raw_data/laws-influences.xlsx').active.values
header = next(data)
df = DataFrame(data, columns=header)
df.fillna(value=MISSING_VALUE, inplace=True)
df = df.applymap(lambda v: v.strip() if type(v) is str else v)
df['Theme'] = df['Theme'].apply(merge_themes)
df.set_index('Law ID', inplace=True, verify_integrity=True)

print(f"Themes: {', '.join(set(df['Theme']))}")
print(f"Locations: {', '.join(set(df['Location']))}")

graph_edges = []


def get_law_of_origin(laws, key):
    if key is MISSING_VALUE:
        return None

    law_of_origin = laws.loc[key]
    if law_of_origin.ndim == 0:
        print(f"[WARNING] No entry for: {law['Law of Origin']}")
        return None
    if law_of_origin.ndim > 1:
        print(f"[WARNING] Duplicate entries for {law['Law of Origin']}")
        return law_of_origin.iloc[0]
    return law_of_origin


for _, law in df.iterrows():
    law_of_origin = get_law_of_origin(df, law['Origin ID'])
    if law_of_origin is None:
        continue
    graph_edges.append({
        'from': law_of_origin['Location'],
        'to': law['Location'],
        'from_date': law_of_origin['Date'],
        'to_date': law['Date'],
        'preview': law['Quotation'],
        'through_metropole': law['Goes Through Metrople'] == "Yes",
        'partial_match': law['Connection with Previous Law'] == 'Similar Content'
    })
    # else:
    #     if law_of_origin is None:
    #         graph_edges.append({
    #             'from': 'France',
    #             'to': law['Location'],
    #             'from_date': law['Date'],
    #             'to_date': law['Date'],
    #             'preview': law['Quotation'],
    #             'tag': law['Theme'],
    #             'partial_match': law['Connection with Previous Law'] == 'Similar Content'
    #         })
    # else:
    #     # Does not happen for now
    #     graph_edges.append({
    #         'from': law_of_origin['Location'],
    #         'to': 'France',
    #         'from_date': law_of_origin['Date'],
    #         'to_date': law['Date'],
    #         'preview': law_of_origin['Quotation'],
    #         'tag': law['Theme'],
    #         'partial_match': law['Connection with Previous Law'] == 'Similar Content'
    #     })
    #     graph_edges.append({
    #         'from': 'France',
    #         'to': law['Location'],
    #         'from_date': law['Date'],
    #         'to_date': law['Date'],
    #         'preview': law['Quotation'],
    #         'tag': law['Theme'],
    #         'partial_match': law['Connection with Previous Law'] == 'Similar Content'
    #     })

# numpy.int64 can't be serialized to JSON :/
for i, entry in enumerate(graph_edges):
    for key in entry:
        if type(entry[key]) is numpy.int64:
            graph_edges[i][key] = int(graph_edges[i][key])


with open('laws-data.js', 'w') as output:
    json_str = json.dumps(graph_edges)
    js_out = subprocess.check_output(
        ['json-to-js'], universal_newlines=True, input=json_str
    )
    output.write(f"const LINKS = {js_out};")
