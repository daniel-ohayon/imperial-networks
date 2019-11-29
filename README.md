This is a collection of visualizations for the early modern French
colonial empire.

# Visualizations

## LAWS
`viz/laws.html` shows influences between laws passed in the colonies.
The data is based on Melanie's book chapter 5 (`scripts/laws-influences.xslsx`)
The data is parsed and transformed to JS using `scripts/parse-laws-influences.py`.

## OFFICIALS
`viz/officials.html` shows travels of French officials. It is based on online archive records, extracted in `scripts/parse-officials/travel.ipynb`.

For this visualization, there is no animation available because
we do not have a travel date available for each employee.

Because this visualization has many edges, there is a "simplified edges" mode where we only have one edge per pair of colonies,
and the size of the edge is proportional to the number of officials
who made the journey.

## SHIPS
`viz/ships.html` shows ship journeys.
It is based on online records, extracted in `scripts/ships.ipynb`.

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
