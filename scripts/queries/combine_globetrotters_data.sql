-- duckdb
create table authors as from read_csv_auto('travel-narrative-authors-journeys.csv');
create table travelers as from read_csv_auto('curated_globetrotters_data.csv');
create table all_people as 
	with t1 as (select * exclude (column6) from authors),
	t2 as (select * exclude ("Currated dataset", column7) from travelers)
	select * from t1 union select * from t2;

create table all_people_deduped as select distinct on(name) * from all_people;

COPY all_people_deduped TO 'globetrotters_and_travelers_oct_23.csv' (HEADER, DELIMITER ',');