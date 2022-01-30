-- csvsql --query queries/tropes_prevalence.sql raw_data/tropes-in-travel-narratives.csv | csvlook
WITH agg1 as (
	SELECT
		Trope,
		COUNT(DISTINCT Place) = 2 AS in_both_oceans
	FROM
		"tropes-in-travel-narratives"
	WHERE
		LENGTH(TRIM(Trope)) > 0
	GROUP BY
		1
)
SELECT
	IIF(in_both_oceans, 'Yes', 'No') AS in_both_oceans,
	count(1) AS "count"
FROM
	agg1
GROUP BY
	1