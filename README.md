This is a collection of visualizations for the early modern French
colonial empire.

# Visualizations

## LAWS
`viz/laws.html` shows influences between laws passed in the colonies.
The data is based on Melanie's book chapter 5 (`scripts/laws-influences.xslsx`)
The data is parsed and transformed to JS using `scripts/parse-laws-influences.py`.

We only show links directly between colonies, and not links with the metropole for readability. We use color coding to differentiate (a) laws that went directly from one colony to another, from (b) laws that were processed through the metropole in-between (by the King or Colbert, etc).

We use dotted arrows to represent laws that had the same intent or similar wording, and solid arrows for laws that had the exact same text.

## OFFICIALS
`viz/officials.html` shows travels of French officials. It is based on online archive records, extracted in `scripts/parse-officials/travel.ipynb`.

For this visualization, there is no animation available because
we do not have a travel date available for each employee.

Because this visualization has many edges, there is a "simplified edges" mode where we only have one edge per pair of colonies,
and the size of the edge is proportional to the number of officials
who made the journey.

## SHIPS
`viz/ships.html` shows ship journeys.
It is based on online marine records, extracted in `scripts/parse_ship_data.ipynb`.

On the [marine website](https://www.memoiredeshommes.sga.defense.gouv.fr/fr/arkotheque/client/mdh/compagnie_des_indes/), each ship has a dedicated page with a list of its journeys.

For each journey, there are two sources of information: a one-line summary with arrows (like `Le Havre → Lorient → Madagascar et Mascareignes → Nantes`) and a spreadsheet. These two are sometimes contradictory, for example with the ship COURRIER DE BOURBON, 1718-1719. In those cases, we use the itinerary with the highest number of stops between the two.

To translate these itineraries into links in our map, we use a mapping of port names to colony. We ignore ports that are not relevant to our study (eg in Brasil, Spain, China, etc).


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
