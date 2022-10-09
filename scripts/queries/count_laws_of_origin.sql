-- csvsql -d ',' raw_data/laws_influences.csv --query queries/count_laws_of_origin.sql | csvlook
SELECT 
	count() AS n_repeats,
	count(IIF("Author" IN ('The King', 'Richelieu'), 1, NULL)) AS n_king,
	count(IIF("Date" >= 1670, 1, NULL)) AS n_after_1670
FROM laws_influences
WHERE COALESCE("Law of Origin", '') <> '';
