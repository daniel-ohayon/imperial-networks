[Click here for the website](https://daniel-ohayon.github.io/imperial-networks/).

This is a collection of visualizations for the early modern French colonial empire.

* [Law clusters](viz/law-clusters.html): clusters of related racial laws issued across the empire
* [Laws](viz/laws.html): laws that influenced or repeated each other across the empire
* [Globetrotters](viz/globetrotters.html): people who travelled across the empire
* [Globetrotters V2 – including travel narrative authors](viz/globetrotters-v2.html): same as above, but including travel narrative authors (data updated Jan 2022)
* [Ships](viz/ships.html): patterns of ship journeys across the empire
* [Ships – ANIMATED](viz/ships-v2.html): animated journeys of individual ships across the empire 
* [Tropes](viz/tropes.html): racial stereotypes in travel narratives and writings, and the people who used them
* [Racial lexicon](viz/racial-lexicon.html): uses of specific racial words across the empire

# Config
Config parameters of the maps can be overriden via the URL query parameters. Useful parameters:
* `title`: title of the map
* `use_animation`: whether to show the animation controls
* `use_tags`: whether arrows should be color-coded
* `start_year` and `end_year`: to filter the arrows based on a range of dates (when `use_animation=false`)

# Visualizations

## LAWS
`viz/laws.html` shows influences between laws passed in the colonies.
The data is based on Melanie's book chapter 5 (`scripts/raw_data/laws-influences.xslsx`)
The data is parsed and transformed to JS using `scripts/parse-laws-influences.py`.

We only show links directly between colonies, and not links with the metropole for readability. We use color coding to differentiate (a) laws that went directly from one colony to another, from (b) laws that were processed through the metropole in-between (by the King or Colbert, etc).

We use dotted arrows to represent laws that had the same intent or similar wording, and solid arrows for laws that had the exact same text.

## LAW CLUSTERS
This is an evolution of the laws visualization. It moves away from the idea of trying to show that "law X led to law Y", and instead highlights the existence of a global conversation around racial policymaking. This is why we look at **clusters** of similar/identical laws, and we give up on the arrows that evoked a causal link.

The data is derived from the same raw data as the laws map, but annotated using a graph traversal algorithm to identify clusters. `scripts/raw_data/law_clusters_annotated.csv` is the key source spreadsheet, and it is translated to a JS file via `scripts/law_clusters_to_js.py`.

## OFFICIALS
`viz/officials.html` shows travels of French officials and other individuals. It is based on online archive records, extracted in `scripts/parse-officials/travel.ipynb`.

The website of the French national overseas archive (http://anom.archivesnationales.culture.gouv.fr/) lists the information for over 19,000 Marine employees.

For each of them, we have access to a short biographical sentence, such as: "Foucault, Denis Nicolas, chief registar of the Marine, official in Louisiana and Pondichery, chief commissioner acting as intendant on Isle of France".

Through a word frequency analysis, we determined groups of commonly occuring keywords suggesting that a person had been to a particular region or colony. For example, the words "Guadeloupe", "Martinique" or "Port-au-prince" all suggest a presence in the Carribean, while the words "New Orleans" and "Louisiane" suggest a presence in Louisiana.

We then programmatically screened the 19,252 biographies against these groups of keywords, and only kept the ones that contained keywords mapping to two ore more regions. For example, the sentence given above for Foucault contains keywords mapping to Louisiana, India ("Pondichery") and Isle Bourbon ("Isle of France"). Through this process, we were able to identify 335 such biographies of Marine personnel who had likely lived in multiple colonies.

The raw biographies from the archives website is in `scripts/raw_anom_biographies.json`.

We then manually inspected each sentence to remove false positives such as "Bachelier, Jean Baptiste, native of Isle of France, died during the crossing to Saint-Domingue, 1766".We also adjusted the biographies for factual inaccuracies based on inspection of the original archival records. 

We also merged that data with a second dataset manually collected from primary and secondary sources. The merged dataset  is in `scripts/curated_globetrotters_data.csv`.

Each of these biographies was then represented by an edge or a sequence of edges between regions on the map, matching the order of appearance of the corresponding keywords in the sentence. For example, with Foucault's description, we add two edges to the map: one going from Louisiana to India, and another one going from India to Isle Bourbon.

The `links.js` file can be regenerated from the CVS file by running `scripts/parse_curated_globetrotters_data.py`, which also provides some summary stats.


## SHIPS
`viz/ships.html` shows ship journeys.
It is based on online marine records, extracted in `scripts/parse_ship_data.ipynb`.

On the [marine website](https://www.memoiredeshommes.sga.defense.gouv.fr/fr/arkotheque/client/mdh/compagnie_des_indes/), each ship has a dedicated page with a list of its journeys.

For each journey, there are two sources of information: a one-line summary with arrows (like `Le Havre → Lorient → Madagascar et Mascareignes → Nantes`) and a spreadsheet. These two are sometimes contradictory, for example with the ship COURRIER DE BOURBON, 1718-1719. In those cases, we use the itinerary with the highest number of stops between the two.

To translate these itineraries into links in our map, we use a mapping of port names to colony. We ignore ports that are not relevant to our study (eg in Brasil, Spain, China, etc).

### Ships V2 Implementation
The V2 (animated) map shows the animated journeys of individual ships in the ocean.
I did the following:
- find all the distinct pairs of (starting point, end point) that exist in the data
- draw "control points" along the corresponding path in the ocean on the map (using some JS + canvas)
- copy the points' coordinates into a file (`CONTROL_POINTS`)
- animate the journeys as consecutive line segments between these points

Each "leg" of a journey is recorded and plotted seprately. We use a stateless rendering logic: at every refresh event, we go through all the existing journeys, find the ones that are active, and call `drawShipAlongPath` for each of them – that function  takes in the set of control points and the current "% progress" where you want to draw the ship.

We have a start and end date for each overall journey, but we don't have dates for the individual legs, so we extrapolate them in the python script using the relative distances between colonies (calculated by using the points I drew on the map).
This could have been done differently by moving more of the route computations in Javascript, but it's maybe better for perf to have pre-computed the legs that way.

# Implementation
Data extraction/processing is done in Python (under `scripts`).
For web-based archives, we use the `requests` library to make
HTTP requests, and the `BeautifulSoup` parsing library to parse
the HTML responses and extract the data we want.

The visualizations are built with 100% client-side HTML/CSS/Javascript.
Network viz is done using the `sigma` Javascript library, which we've modified slightly to allow rendering curved edges with random
curvature (so that we can have multiple edges with the same
start and end point that do not overlap).

The data and config specific to each viz lives under `data/<vizname>`.
There, we customize the edges (`links.js`), map styling and config (`config.js`) and modal contents (`modal-config.js`).

# Sigma.js

This code uses sigma.js v1 – the new release (v2) is pretty different. Check out 
* [code examples from v1 over here](https://github.com/jacomyal/sigma.js/blob/v1/examples/basic.html)
* [custom shapes plugin for nodes](https://github.com/jacomyal/sigma.js/tree/v1/plugins/sigma.renderers.customShapes)

The docs for v1 have disappeared from Github but they are still available [on the Internet Archive](https://web.archive.org/web/20210916202145/https://github.com/jacomyal/sigma.js/wiki).

## Node layout
```
o------------> x
|
|     
|    (0,0)
|     
|
v y
```
`(0,0)` is the middle of the canvas when `autoRescale=false`