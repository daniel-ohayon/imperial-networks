-- csvsql --query queries/blood_keyword_use.sql raw_data/race-quotes.csv | csvlook
SELECT
    count(1) as n_occurences,
    min("Date") as min_date,
    max("Date") as max_date
from
    "race-quotes"
where
    keyword = 'Sang'