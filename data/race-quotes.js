const RACE_QUOTES = [{
        "Quote": "\"hommes venus d’une race innocente\"",
        "Source": "Cauche, Relations veritables et curieuses de l’isle de Madagascar et du Bresil, p. 122.",
        "Region": "Madagascar",
        "Keyword": "Race",
        "Date": "1651"
    },
    {
        "Quote": "\"mauvais naturel\"",
        "Source": "Mémoires de François Martin, p. 138;",
        "Region": "Madagascar",
        "Keyword": "Nature",
        "Date": "1665"
    },
    {
        "Quote": "\"un mesme peuple et un mesme sang\"",
        "Source": "Spear, Race, sex, race and social order in early New Orleans, p. 26; and Marcel Trudel, L’esclavage au Canada francais: histoire et condition de l’esclavage (Québec, 1960), p. 278.",
        "Region": "New France",
        "Keyword": "Sang",
        "Date": "1667"
    },
    {
        "Quote": "\"les habitans de cette Isle sont presque tous noirs & se frottent le corps d’une graisse puante qui jointe à la laideur naturelle les rend vilain & defectueux\"",
        "Source": "Charles Dellon, Relation d’un voyage des Indes Orientales dedié à Monseigneur l’evêque de Meaux (2 vols., Paris, 1685), I, 35, 39",
        "Region": "Madagascar",
        "Keyword": "Nature",
        "Date": "1685"
    },
    {
        "Quote": "Il n'est pas permis [aux Nègres] qui sont nez de race d'esclaves de porter des cheveux",
        "Source": "Charles Dellon, Relation d’un voyage des Indes Orientales dedié à Monseigneur l’evêque de Meaux, directeur géneral de la Compagnie royale d'Afrique. Collombat.",
        "Region": "Senegal",
        "Keyword": "Race",
        "Date": "1695"
    },
    {
        "Quote": "\"on peut dire Sans façon que tous Les Sauvages ont naturelement de L’esprit\"",
        "Source": "LOC, ‘Memoranda on French colonies in America, including Canada, Louisiana, and the Caribbean’, ‘Relation du Sieur de La Mothe Cadillac’, pp. 382-383.",
        "Region": "Louisiana",
        "Keyword": "Nature",
        "Date": "1700"
    },
    {
        "Quote": "\"naturally whiter\"",
        "Source": "Spear, Race, sex, and social order in early New Orleans, p. 34",
        "Region": "Louisiana",
        "Keyword": "Nature",
        "Date": "1706"
    },
    {
        "Quote": "\"we do not see that the blood of the sauvages will have any prejudicial effect on the blood of the French. As we see, the whiteness of the children of French men married with the sauvagesses is equal to that of the French themselves\"",
        "Source": "Spear, Race, sex, and social order in early New Orleans, p. 33.",
        "Region": "Louisiana",
        "Keyword": "Sang",
        "Date": "1708"
    },
    {
        "Quote": "\"il ne fault jamais mêsler un mauvais sang avec un bon\"",
        "Source": "Trudel, L’esclavage au Canada Francais, p. 279",
        "Region": "New France",
        "Keyword": "Sang",
        "Date": "1709"
    },
    {
        "Quote": "\"inclination naturelle que la pluspart des femmes de l’Isle ont au mal\"",
        "Source": "Boucher, ‘Le mémoire pour servir à la connaissance particulière de chacun des habitans de l’isle Bourbon, Antoine Boucher (1679-1725)’, p. 27",
        "Region": "Isle Bourbon",
        "Keyword": "Nature",
        "Date": "1709"
    },
    {
        "Quote": "\"il ne fault jamais mêsler un mauvais sang avec un bon\"",
        "Source": "Trudel, L’esclavage au Canada Francais, p. 279",
        "Region": "Louisiana",
        "Keyword": "Mélange",
        "Date": "1709"
    },
    {
        "Quote": "\"le Sang n’est point alteré\"",
        "Source": "ANOM C13 A2, p. 565, ‘Memoire sur l’Etat present de la colonie de la Louisiane Suivant ce que j’en ay appris par M. De la Vente Superieur des missions qui en est party le 21 Juin 1710’.",
        "Region": "Louisiana",
        "Keyword": "Sang",
        "Date": "1710"
    },
    {
        "Quote": "\"un grand changement au Sang\"",
        "Source": "ANOM C13 A2, p. 545, ‘Le S Dartaguiette, 20 Juin 1710’.",
        "Region": "Louisiana",
        "Keyword": "Sang",
        "Date": "1710"
    },
    {
        "Quote": "\"ils tirent leurs Origines de Leurs peres quy Sont François ils doivent Entrer dans Les mesmes privileges\"",
        "Source": "ANOM C3 3, f. 9, ‘Memoire Dobservation Sur Celuy de Lisle de Bourbon, adressé à Monsieur De Foucherolle’.",
        "Region": "Isle Bourbon",
        "Keyword": "Origine",
        "Date": "1711"
    },
    {
        "Quote": "\"portées par leur naturel à toute Sorte de dereglement\"",
        "Source": "ANOM C13 A3, p. 390, ‘Memoire Sur la Conduite des François dans la Louisiane’.",
        "Region": "Louisiana",
        "Keyword": "Nature",
        "Date": "1713"
    },
    {
        "Quote": "\"portées par leur naturel à toute Sorte de dereglement\"",
        "Source": "ANOM C13 A3, p. 390, ‘Memoire Sur la Conduite des François dans la Louisiane’.",
        "Region": "Louisiana",
        "Keyword": "Nature",
        "Date": "1713"
    },
    {
        "Quote": "\"la Colonie deviendroit une colonie de mulâtres qui sont naturellement faineants, libertins, et encor plus fripons\"",
        "Source": "ANOM C13 A3, pp. 820-821, ‘La Louisianne. Le S. du Clos, 25 Decembre 1715’.",
        "Region": "Louisiana",
        "Keyword": "Nature",
        "Date": "1715"
    },
    {
        "Quote": "\"il y auroit lieu de craindre de mesler par ces mariages du bon Sang avec du mauvais\"",
        "Source": "ANOM C13 A3, p. 820, ‘La Louisianne. Le S. du Clos, 25 Decembre 1715’.",
        "Region": "France",
        "Keyword": "Mélange",
        "Date": "1715"
    },
    {
        "Quote": "\"il y auroit lieu de craindre de mesler par ces mariages du bon Sang avec du mauvais\"",
        "Source": "ANOM C13 A4, p. 977, ‘1716, Projet ou Mémoire du Roy au Srs de l’Espinay gouverneur et Hubert commissaire ordonnateur a la Loüisiane’.",
        "Region": "Louisiana",
        "Keyword": "Sang",
        "Date": "1716"
    },
    {
        "Quote": "\"a la Verité Les Enfans Sont metifs, et paroissent dun Sang mele\"",
        "Source": "ANOM C13 A4, p. 530, ‘La Mothe Cadillac a La Louisianne, le 2 Janvier 1716’.",
        "Region": "Louisiana",
        "Keyword": "Sang",
        "Date": "1716"
    },
    {
        "Quote": "\"d’un naturel dur et faineant\"",
        "Source": "ANOM C13 A4, pp. 977-978, ‘1716, Projet ou Mémoire du Roy au Srs de l’Espinay gouverneur et Hubert commissaire ordonnateur a la Loüisiane’.",
        "Region": "Louisiana",
        "Keyword": "Nature",
        "Date": "1716"
    },
    {
        "Quote": "\"il y auroit lieu de craindre de mesler par ces mariages du bon Sang avec du mauvais\"",
        "Source": "ANOM C13 A4, p. 977, ‘1716, Projet ou Mémoire du Roy au Srs de l’Espinay gouverneur et Hubert commissaire ordonnateur a la Loüisiane’.",
        "Region": "Louisiana",
        "Keyword": "Mélange",
        "Date": "1716"
    },
    {
        "Quote": "[...] les natifs de l'Ile, enfans de Portugais & de Noires [...], ne demandaient point à boire ni à manger, leur orgueil naturel ne le permet pas",
        "Source": "Robert Challes (1721). Journal d'un voyage fait aux Indes Orientales, par une escadre de six vaisseaux commandez par Mr. Du Quesne, depuis le 24 février 1690 jusqu'au 20 août 1691, par ordre de la Compagnie des Indes Orientales. Jean Batiste (sic) Machuel le Jeune.",
        "Region": "India",
        "Keyword": "Nature",
        "Date": "1721"
    },
    {
        "Quote": "\"les Madagascarinois sont naturellement robustes\"",
        "Source": "Carpeau de Saussay, Voyage de Madagascar, pp. 275-276.",
        "Region": "Madagascar",
        "Keyword": "Nature",
        "Date": "1722"
    },
    {
        "Quote": "\"ils sont naturellement fort superbes\"",
        "Source": "Labat, Nouveau voyage, II, p. 49.",
        "Region": "Caribbean",
        "Keyword": "Nature",
        "Date": "1722"
    },
    {
        "Quote": "Il ne faut cependant acheter [les Indiens esclaves] qu'avec de grandes précautions, car c'est toujours le même génie, le même naturel, les mêmes inclinations.",
        "Source": "Jean Baptiste Labat (1724). Nouveau voyage aux isles de l'Amerique. Husson",
        "Region": "Caribbean",
        "Keyword": "Nature",
        "Date": "1724"
    },
    {
        "Quote": "\"une creole de Sang purement blanc\"",
        "Source": "ANOM C3 5, f. 130, ‘Classes M. desforges Boucher, 30 Novembre 1725’.",
        "Region": "Isle Bourbon",
        "Keyword": "Sang",
        "Date": "1725"
    },
    {
        "Quote": "On trouve dans les Indes des femmes mistis, c'est à dire, sorties d'un sang Européen & d'un sang Indien",
        "Source": "Luillier; Clos (1726). Voyage du sieur Luillier aux Grandes Indes: avec une instruction pour le commerce des Indes Orientales. Chez Jean Clos.",
        "Region": "India",
        "Keyword": "Sang",
        "Date": "1726"
    },
    {
        "Quote": "\"il ne manque n’y homme ny de filles de meme Sang\"",
        "Source": "ANOM F3 224, pp. 223-224, ‘Du Jeudy Sixieme Du mois de mars mil Sept Cent Vingt Sept...’.",
        "Region": "Caribbean",
        "Keyword": "Sang",
        "Date": "1727"
    },
    {
        "Quote": "\"Moderer les Passions d’empecher le Meslange du Sang français qui S’affoiblit, et se Corompt en se Livrant à la Molesse, et qui S’avilit\"",
        "Source": "ANOM F3 205, p. 41, ‘Des Mariages de leur convenance, et de la Discipline qui S’y doit observer’.",
        "Region": "Isle Bourbon",
        "Keyword": "Sang",
        "Date": "1728"
    },
    {
        "Quote": "\"le sang se purifie, & leurs teints deviennent blancs peu à peu\"",
        "Source": "La Barbinais, Nouveau voyage autour du monde, III, 91.",
        "Region": "Isle Bourbon",
        "Keyword": "Sang",
        "Date": "1728"
    },
    {
        "Quote": "\"certaine odeur qui denote leur origine\"",
        "Source": "La Barbinais, Nouveau voyage autour du monde, III, 91.",
        "Region": "Isle Bourbon",
        "Keyword": "Origine",
        "Date": "1728"
    },
    {
        "Quote": "\"il n’y a que Six familles, dont le sang Soit sans mélange\"",
        "Source": "La Barbinais, Nouveau voyage autour du monde, III, 90.",
        "Region": "Isle Bourbon",
        "Keyword": "Mélange",
        "Date": "1728"
    },
    {
        "Quote": "\"Moderer les Passions d’empecher le Meslange du Sang français qui S’affoiblit, et se Corompt en se Livrant à la Molesse, et qui S’avilit\"",
        "Source": "ANOM F3 205, p. 41, ‘Des Mariages de leur convenance, et de la Discipline qui S’y doit observer’.",
        "Region": "Isle Bourbon",
        "Keyword": "Mélange",
        "Date": "1728"
    },
    {
        "Quote": "\"parmi les personnes libres, il n’y a que Six familles, dont le sang Soit sans mélange, parce qu’elles ont eu soin de ne point s’allier avec les familles de Mulates [sic] & de Mestices\"",
        "Source": "La Barbinais, Nouveau voyage autour du monde, III, 90.",
        "Region": "Isle Bourbon",
        "Keyword": "Sang",
        "Date": "1728"
    },
    {
        "Quote": "D'ailleurs, comme ils ont extrêmement mêlé leur sang, d'abord avec les Insulaires, ensuite avec les Nègres, ils sont aujourd'hui de toutes les couleurs",
        "Source": "Pierre-François-Xavier de Charlevoix, Histoire de l’isle espagnole ou de S. Domingue. Volue II (Paris, 1730–31)",
        "Region": "Caribbean",
        "Keyword": "Sang",
        "Date": "1730"
    },
    {
        "Quote": "Ceux qui viennent de ce mélange sont mulatres ou bazannez, qui ayant continué de prendre des femmes noires, ont à la fin produit une race toute noire",
        "Source": "Jean Baptiste LABAT (Dominican Missionary.) (1731). Voyage du chevalier Des Marchais en Guinée. Tome I",
        "Region": "Senegal",
        "Keyword": "Race",
        "Date": "1731"
    },
    {
        "Quote": "\"a facilité qu’ont les missionnaires de faire ces Mariages mélangés\"",
        "Source": "ANOM F3 95, p. 26, ‘Extrait de la lettre du Ministre à M de Bienville et Salmon. A Versailles le 4 Octobre 1735’",
        "Region": "Louisiana",
        "Keyword": "Mélange",
        "Date": "1735"
    },
    {
        "Quote": "La Cour de France , voyant qu'il n'y avoit aucun bon changement à esperer de cette Race infidele [des Outagamis], envoya ses ordres en Canada , pour qu'on la détruiût entièrement.",
        "Source": "Le Beau, Aventures du Sieur C. Le Beau, avocat au Partlement, ou voyage curieux ou nouveau parmi les sauvages de l’Amérique septentrionale, 1738.",
        "Region": "New France",
        "Keyword": "Race",
        "Date": "1738"
    },
    {
        "Quote": "Comme j'ai déjà parlé du Naturel des Sauvages & de leur caractère il est tems que je dise ici quelque chose de leurs Femmes & de leurs Filles.",
        "Source": "Le Beau, Aventures du Sieur C. Le Beau, avocat au Partlement, ou voyage curieux ou nouveau parmi les sauvages de l’Amérique septentrionale, 1738.",
        "Region": "New France",
        "Keyword": "Nature",
        "Date": "1738"
    },
    {
        "Quote": "\"le Sang Sauvage domine\"",
        "Source": "ANOM C13 A23, f. 242, ‘M Salmon, 25 Novembre 1738’.",
        "Region": "Louisiana",
        "Keyword": "Sang",
        "Date": "1738"
    },
    {
        "Quote": "Les enfans nés du comerce illegitime des Francois avec ces concubines, tenant plus de la couleur blanche de leur pere que de la couleur noire de leur mere, ont formé une race d’homes mitoiene, inconue jusk’alors, que l’on apela Mulatre, ou mixtive ou Métisse.",
        "Source": "Michel Adanson (1750). Mémoires d'Adanson sur le Sénégal et L'Ile de Gorée. C. Becker et V. Martin, C.N.R.S.",
        "Region": "Senegal",
        "Keyword": "Race",
        "Date": "1750"
    },
    {
        "Quote": "\"cette alliance est honteuse et d’une dangereuse consequence par la familiarité qu’elle occasionne des Sauvages avec les François et la Mauvaise race qu’elle produit\"",
        "Source": "HL, ‘Vaudreuil Papers’, LO 325, ‘Ordre de commandement pour Mr de Macarty major du païs des Illinois Du 8 mars 1751’.",
        "Region": "Louisiana",
        "Keyword": "Race",
        "Date": "1751"
    },
    {
        "Quote": "\"à mesure que chaque generation S'eloigne des Souches d'Européens dont elle est Sortie elle Se raproche des Mœurs Vicieuses des Noirs\"",
        "Source": "ANOM C3 10, ff. 90v-91, ‘28 fevrier 1752, Lettre du Sr Bouvet’.",
        "Region": "Isle Bourbon",
        "Keyword": "Generation",
        "Date": "1752"
    },
    {
        "Quote": "\"la Compagnie Entend par Creolle, tout Enfant né d’un Sang Meslé. Quant aux Enfans des Isles nés de Pere et mere Européens, Sans Melange de Sang, ils ne Sont point Censés\" Creols, et ne Sont point Exclus, comme les autres",
        "Source": "ANOM F3 205, p. 44, ‘Lettre. 25 mars 1754’.",
        "Region": "Isle Bourbon",
        "Keyword": "Sang",
        "Date": "1754"
    },
    {
        "Quote": "\"Quant aux Enfans des Isles nés de Pere et mere Européens, Sans Melange de Sang, ils ne Sont point Censés Creols, et ne Sont point Exclus, comme les autres\"",
        "Source": "ANOM F3 205, pp. 44-45, ‘Lettre. 25 mars 1754’.",
        "Region": "Isle Bourbon",
        "Keyword": "Mélange",
        "Date": "1754"
    },
    {
        "Quote": "\"la Compagnie Entend par Creolle, tout Enfant né d’un Sang Meslé. Quant aux Enfans des Isles nés de Pere et mere Européens, Sans Melange de Sang, ils ne Sont point Censés Creols, et ne Sont point Exclus, comme les autres\"",
        "Source": "ANOM F3 205, pp. 44-45, ‘Lettre. 25 mars 1754’.",
        "Region": "Isle Bourbon",
        "Keyword": "Mélange",
        "Date": "1754"
    },
    {
        "Quote": "\"la confusion que dans L’origine vous paroissiés faire du Sang Blanc avec Le Sang mêlé\"",
        "Source": "ANOM C7 11 ff. 15-15v., ‘Mrs Les Sindics et directeurs de la Compagnie des indes A St Denis Isle de Bourbon Le 2 janvier 1755’.",
        "Region": "Isle Bourbon",
        "Keyword": "Sang",
        "Date": "1755"
    },
    {
        "Quote": "\"le Sang François fortiffent [sic]\"",
        "Source": "Antoine Le Page du Pratz, Histoire de Louisiane, contenant la découverte de ce vaste pays (3 vols., Paris, 1758), II, 397, 401.",
        "Region": "Louisiana",
        "Keyword": "Sang",
        "Date": "1758"
    },
    {
        "Quote": "\"hommes nés d’une basse extraction & Sans éducation\"",
        "Source": "Le Page Du Pratz, Histoire de la Louisiane, I, 348.",
        "Region": "Louisiana",
        "Keyword": "Extraction",
        "Date": "1758"
    },
    {
        "Quote": "\"le Sang le plus pur\"",
        "Source": "Le Page Du Pratz, Histoire de la Louisiane, I, 344",
        "Region": "Louisiana",
        "Keyword": "Sang",
        "Date": "1758"
    },
    {
        "Quote": "\"une Etrangere de cette espèce\"",
        "Source": "Antoine Simon Le Page Du Pratz, Histoire de la Louisiane (3 vols., Paris, 1758), I, 343.",
        "Region": "Louisiana",
        "Keyword": "Espèce",
        "Date": "1758"
    },
    {
        "Quote": "\"naturellement menteur\"",
        "Source": "HTML, ‘The Favrot Family Papers’, Mss 550, M-1, ‘Nouvelle Orleans Le 8e aout 1758’.",
        "Region": "Louisiana",
        "Keyword": "Nature",
        "Date": "1758"
    },
    {
        "Quote": "Elles préparent l'assimilation des races indigènes à la race française",
        "Source": "Marie-Madeleine Hachard; mère St. Agustin de Tranchepain (1872). Relation du voyage des dames religieuses Ursulines de Rouen a la Nouvelle-Orleans. Maisonneuve.",
        "Region": "Louisiana",
        "Keyword": "Race",
        "Date": "1760"
    },
    {
        "Quote": "S'étant mêlés dans la fuite avec la race de leurs colonies de Guinée, ils n'ont conservé qu'une ressemblance imparfaite de figure & de langage avec les Portugais de l'Europe",
        "Source": "Jacques-Philibert Russelot de Surgy, Mélanges intéressans et curieux, ou Abrégé d’histoire naturelle, moral, civile et politique (1763)",
        "Region": "Senegal",
        "Keyword": "Race",
        "Date": "1763"
    },
    {
        "Quote": "\"faire cesser le désordre qu’ils [les Noirs] ont introduit dans le Royaume par leur communication avec les Blancs, dont il est résulté un sang mêlé qui augmente tous les jours\"",
        "Source": "Boulle, Race et esclavage, p.26.",
        "Region": "France",
        "Keyword": "Sang",
        "Date": "1763"
    },
    {
        "Quote": "\"elles les livrent à une Esclave noir, bazanée, ou rouge, sans penser qu’elle peut avoir le Sang corrompu\"",
        "Source": "Jean-Bernard Bossu, Nouveau voyage aux Indes occidentales (Paris, 1768), pp. 201-202.",
        "Region": "Louisiana",
        "Keyword": "Sang",
        "Date": "1768"
    },
    {
        "Quote": "elles les livrent, au sortir de leur sein, à une esclave noire, basanée, ou rouge, sans penser qu'elle peut avoir le sang corrompu",
        "Source": "Jean-Bernard Bossu (1769). Nouveaux voyages aux Indes occidentales. Changuion.",
        "Region": "Louisiana",
        "Keyword": "Sang",
        "Date": "1769"
    },
    {
        "Quote": "Comme ces Brigands ne purent s'allier qu'aux femmes du pays [de Madagascar], leur race s'abâtardit peu à peu",
        "Source": "Guillaume-Josepg-Hyacinthe Jean Baptiste Le Gentil de la Galaisière, Voyage dans les mers de l’inde (1779-1781)",
        "Region": "Madagascar",
        "Keyword": "Race",
        "Date": "1779"
    },
    {
        "Quote": "peuple [de Madagascar] porté de son naturel à la vengeance",
        "Source": "Guillaume-Josepg-Hyacinthe Jean Baptiste Le Gentil de la Galaisière, Voyage dans les mers de l’inde (1779-1781)",
        "Region": "Madagascar",
        "Keyword": "Nature",
        "Date": "1779"
    },
    {
        "Quote": "les caractères prononcés que l'on attribue à la race nègre.",
        "Source": "Sylvain-Meinrad-Xavier de Golbery (1802). Fragmens d'un voyage en Afrique, fait pendant les annees 1785, 1786 et 1787 (etc.). Treuttel et Würtz.",
        "Region": "Senegal",
        "Keyword": "Race",
        "Date": "1785"
    },
    {
        "Quote": "La race de Sandren est donc une race postérieure au Déluge",
        "Source": "Anquetil-Duperron, Recherches historiques et géographique sur l’Inde, 1787.",
        "Region": "India",
        "Keyword": "Race",
        "Date": "1787"
    },
    {
        "Quote": "Pourquoi done le Nègre est-il lui- même si féroce envers son semblable? Ne pourròit-on pas présumer que c'est qu'il connoit mieux lui-même le physique & le moral de sa race",
        "Source": "Dominique Harcourt Lamiral (1789). L'Afrique et le peuple afriquain (sic), considérés sous tous leurs rapports avec notre commerce et nos colonies.",
        "Region": "Senegal",
        "Keyword": "Race",
        "Date": "1789"
    },
    {
        "Quote": "Les enfans provenant du mélange de sang, & qu'on nomme Mulâtres",
        "Source": "Dominique Harcourt Lamiral (1789). L'Afrique et le peuple afriquain (sic), considérés sous tous leurs rapports avec notre commerce et nos colonies.",
        "Region": "Senegal",
        "Keyword": "Sang",
        "Date": "1789"
    },
    {
        "Quote": "on ne peut pas attribuer la cause de la noirceur des négres à la chaleur, ni à la nourriture ; que c'eft un secret de la nature",
        "Source": "Antoine Edme Pruneau de Pommegorge (1789). Description de la Nigritie. Chez Maradan.",
        "Region": "Senegal",
        "Keyword": "Nature",
        "Date": "1789"
    },
    {
        "Quote": "il se trouva parmi ces esclaves seize femmes de la race des Lohaviths",
        "Source": "Alexis Marie de Rochon, Voyage à Madagascar et aux Indes orientales (1791).",
        "Region": "Madagascar",
        "Keyword": "Race",
        "Date": "1791"
    },
    {
        "Quote": "Comme cette nation est naturellement esclave , elle n'a point de mœurs parti culières.",
        "Source": "Saugnier (1792). Relations de plusieurs voyages a la cote d'Afrique",
        "Region": "Senegal",
        "Keyword": "Nature",
        "Date": "1792"
    },
    {
        "Quote": "De tous ces croisements de race c'est [le Mulâtre] qui retire la plus forte constitution",
        "Source": "Moreau de Saint-Méry, Description topographique, physique, civile, politique, et historique de la partie française de l’isle de Saint Domingue (1797)",
        "Region": "Caribbean",
        "Keyword": "Race",
        "Date": "1797"
    },
    {
        "Quote": "On compte pour huitième nuance celle du Sang-mêlé, [...] qui n'a qu'un soixante-quatrième du nègre",
        "Source": "Moreau de Saint-Méry, Description topographique, physique, civile, politique, et historique de la partie française de l’isle de Saint Domingue (1797)",
        "Region": "Caribbean",
        "Keyword": "Sang",
        "Date": "1797"
    },
    {
        "Quote": "\"l’opinion qui, n’admettant pas la possibilité de la disparition totale du mélange, veut par consequent qu’une ligne prolongée jusqu’à l’infini, sépare toujours la descendance\" blanche de l’autre",
        "Source": "Moreau De Saint-Méry, Description topographique, physique, civile, politique et historique de la partie française de l’isle Saint-Domingue (2 vols., Philadelphie, 1797-1798), I, 89.",
        "Region": "Caribbean",
        "Keyword": "Mélange",
        "Date": "1797"
    },
    {
        "Quote": "Race plus perfide et plus cruelle que celle des Maures",
        "Source": "Jean-Baptiste-Léonard Durand (1802). Voyage au Sénégal. Henri Agasse Imprimeur-Libraire.",
        "Region": "Senegal",
        "Keyword": "Race",
        "Date": "1802"
    },
    {
        "Quote": "Naturel changeant et perfide des nègres serracolets",
        "Source": "Jean-Baptiste-Léonard Durand (1802). Voyage au Sénégal. Henri Agasse Imprimeur-Libraire.",
        "Region": "Senegal",
        "Keyword": "Nature",
        "Date": "1802"
    },
    {
        "Quote": "Il y a trois races d’hommes très-diſtinctes à Madagaſcar; la première eſt très-noire, & a les cheveux courts & crépus : elle paroît être la ſeule qui ſoit originaire de cette île",
        "Source": "Pierre Sonnerat (1806). Voyage aux Indes orientales et à la Chine... Dentu.",
        "Region": "Madagascar",
        "Keyword": "Race",
        "Date": "1806"
    },
    {
        "Quote": "Mais entre les Métis [sur l'île de Goa], ceux qui sont de race Bramine du côté de leur père ou de leur mère, jouissent d'une considération particulière",
        "Source": "Jean François de La Harpe (1825). Abrégé de l ́histoire générale des voyages. Ledentu.",
        "Region": "India",
        "Keyword": "Race",
        "Date": "1825"
    }
];