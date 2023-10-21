import json
raw_data = json.load(open('./raw_data/ship_data.json'))

LOCATIONS = {
    'Isle Bourbon & Isle of France': ['Mascareignes', 'îles de France et de Bourbon', 'île Bourbon', 'Port-Louis, île de France', 'île de France', 'Île de France'],
    'Senegal': ['Sénégal', 'Sénégal et Gorée', 'Gorée', 'Cap-Vert', 'Juda et côtes de Guinée', 'Juda'],
    'Caribbean': ['Saint-Domingue', 'Martinique', 'Antilles', 'Cap-Français', 'Saint-Louis, St-Domingue', 'Léogane', 'Port-au-Prince', 'La Grenade (île de)', 'Petit-Goâve, St-Domingue', 'Guadeloupe'],
    'Louisiana': ['Louisiane', 'Ascension', 'Nouvelle-Orléans', 'Biloxy, Louisiane'],
    'France': ['Le Havre', 'Nantes', 'Bordeaux', 'Saint-Malo', 'Brest', 'La Rochelle', 'Marseille', 'Rochefort', 'Sète', 'Bayonne', 'Honfleur', 'Dunkerque', 'Rouen', 'Groix', 'Lorient', 'Toulon', 'Paimboeuf', 'Belle-île-en-Mer'],
    'Madagascar': ['Madagascar', 'Port-Louis', 'Anjouan', 'Fort-Dauphin, Madagascar', 'Sainte-Marie, Madagascar', 'baie de St-Augustin, Madagsascar'],  # TODO
    'India': ['Inde', 'Karaikal', 'Karikal', 'Pondichéry', 'Bengale', 'Calicut', 'Goa', 'Chandernagor', 'Négapatam', 'Madras', 'sur le Gange'],
    'New France': ['Louisbourg (île Royale), Canada', 'Saint-Pierre et Miquelon', 'Terre-Neuve'],
    'Guyana': ['Guyane', 'Cayenne'],
}
DISTANCES = {"Caribbean:France": 345, "Caribbean:Guyana": 110, "Caribbean:India": 866, "Caribbean:Isle Bourbon & Isle of France": 668, "Caribbean:Louisiana": 90, "Caribbean:Madagascar": 643, "Caribbean:New France": 139, "Caribbean:Senegal": 249, "France:Guyana": 331, "France:India": 968, "France:Isle Bourbon & Isle of France": 710, "France:Louisiana": 349, "France:Madagascar": 702, "France:New France": 297, "France:Senegal": 269, "Guyana:Senegal": 170, "India:Isle Bourbon & Isle of France": 210, "India:Louisiana": 946, "India:Madagascar": 182, "India:Senegal": 694, "Isle Bourbon & Isle of France:Louisiana": 732, "Isle Bourbon & Isle of France:Madagascar": 29, "Isle Bourbon & Isle of France:New France": 746, "Isle Bourbon & Isle of France:Senegal": 479, "Louisiana:Madagascar": 1061, "Louisiana:New France": 76, "Louisiana:Senegal": 297, "Madagascar:New France": 702, "Madagascar:Senegal": 434,
             "France:Caribbean": 345, "Guyana:Caribbean": 110, "India:Caribbean": 866, "Isle Bourbon & Isle of France:Caribbean": 668, "Louisiana:Caribbean": 90, "Madagascar:Caribbean": 643, "New France:Caribbean": 139, "Senegal:Caribbean": 249, "Guyana:France": 331, "India:France": 968, "Isle Bourbon & Isle of France:France": 710, "Louisiana:France": 349, "Madagascar:France": 702, "New France:France": 297, "Senegal:France": 269, "Senegal:Guyana": 170, "Isle Bourbon & Isle of France:India": 210, "Louisiana:India": 946, "Madagascar:India": 182, "Senegal:India": 694, "Louisiana:Isle Bourbon & Isle of France": 732, "Madagascar:Isle Bourbon & Isle of France": 29, "New France:Isle Bourbon & Isle of France": 746, "Senegal:Isle Bourbon & Isle of France": 479, "Madagascar:Louisiana": 1061, "New France:Louisiana": 76, "Senegal:Louisiana": 297, "New France:Madagascar": 702, "Senegal:Madagascar": 434}
SHIP_JOURNEYS = []


def normalize_location(location):
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
    res = [m[0] for m in sorted(matches, key=lambda m: location.index(m[1]))]
    return res


def normalize_itinerary(itinerary):
    # normalize locations, skip unknown locations, no contiguous duplicates
    result = []
    for stop in itinerary:
        next_stops = normalize_location(stop)
        if len(result) == 0 or len(result) > 0 and all(s != result[-1] for s in next_stops):
            result += next_stops
    return result if len(result) > 1 else []


def stops_to_legs(stops, start_year, end_year, ship_name):
    legs = []
    n_stops = len(stops)
    total_distance = sum(
        DISTANCES[f"{stops[i-1]}:{stops[i]}"] for i in range(1, n_stops))
    progress = 0  # stays in [0,1]
    for i in range(1, n_stops):
        # In most cases we don't know the exact dates of each stop
        # So we use a computation of the relative distance between each pair of locations (hardcoded, derived from drawing on the map in JS)
        # and we extrapolate the dates of each stop based on the proportion of the total journey's distance covered
        delta_p = DISTANCES[f"{stops[i-1]}:{stops[i]}"] / total_distance
        legs.append({
            'from': stops[i-1],
            'to': stops[i],
            'from_date': start_year + progress * (end_year - start_year),
            'to_date': start_year + (progress + delta_p) * (end_year - start_year),
            'ship_name': ship_name,
        })
        progress += delta_p
    assert progress - 1 < 0.001, f"Invalid progress: {progress}"
    return legs


for journeys_for_one_ship in raw_data.values():
    if len(journeys_for_one_ship) == 0:
        continue
    ship_name = journeys_for_one_ship[0]['ship_name']
    for journey in journeys_for_one_ship:
        stops_v1 = normalize_itinerary(journey['stops'])
        stops_v2 = normalize_itinerary(
            [e['location'] for e in journey['ship_log']])

        # use the itinerary with the most detail out of the two
        stops = stops_v1 if len(stops_v1) > len(stops_v2) else stops_v2

        if journey['start_date'] is None or journey['end_date'] is None:
            print(
                f"WARNING Skipping entry for {ship_name} because we're missing start/end date")
        else:
            res = stops_to_legs(stops, float(journey['start_date']), float(
                journey['end_date']), ship_name)
            SHIP_JOURNEYS += res

all_journeys = set()
for val in SHIP_JOURNEYS:
    key = ":".join(sorted([val['from'], val['to']]))
    all_journeys.add(key)
print(f"Found {len(all_journeys)} distinct edges:")
entries = sorted(list(all_journeys))
for e in entries:
    print(e)

print()
print("Min date: ", min([j['from_date'] for j in SHIP_JOURNEYS]))
print("Max date: ", max([j['to_date'] for j in SHIP_JOURNEYS]))

############################################
with open('../data/ships-v2.js', 'w') as out_js_file:
    json_str = json.dumps(SHIP_JOURNEYS, indent=2, ensure_ascii=False)
    out_js_file.write(f"const SHIP_JOURNEYS = {json_str};\n")

# TODO DQ (invariants) on the generated data
# Problem: breaks in generated itineraries, need to recheck the logic for edges
