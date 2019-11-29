const OFFICIALS_TAGS_TO_COLORS = {
    officials: {
        label: 'Officials',
        color: '#d95f02'
    },
    military: {
        label: 'Military',
        color: '#1b9e77'
    },
    other: {
        label: 'Other',
        color: '#7570b3'
    },
};

let OFFICIALS_LINKS = [{
        "bio": "Ailleboust de Céry, Marie Madeleine d', fille de Philippe Marie d'Ailleboust de Céry, capitaine de port au Canada, retraité en 1773, réfugiée de Saint-Domingue 1787",
        "from": "Caribbean",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Ailleboust de Céry, Philippe Antoine d', né à Québec, le 7 juin 1739, enseigne dans les troupes du Canada, lieutenant, puis capitaine dans la légion de Saint-Domingue 1766",
        "from": "Caribbean",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Ailleboust de Mantet, d', capitaine au régiment de Pondichéry, marié à mademoiselle de La Hogue, créole de l'île Bourbon 1787",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Ailleboust de Saint-Vilmé, Jean Baptiste d', lieutenant des troupes de la Marine à l'île Royale, capitaine dans les troupes nationales à Cayenne, capitaine aux volontaires d'Afrique, major au Cap Tiburon à Saint-Domingue, commandant particulier au Môle Saint-Nicolas, lieutenant de roi à Saint-Louis 1733/1788",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Albergati-Vezza, François Marie, marquis, lieutenant puis capitaine dans les troupes du Canada et de l'île de France 1760/1773",
        "from": "Isle Bourbon & Isle of France",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Allard de Sainte-Marie, Philippe Antoine d', lieutenant, puis capitaine d'artillerie à Cayenne, puis capitaine au régiment de la Guadeloupe 1767/1786",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Allemagne de Varage, Louis d', chevalier, capitaine au régiment d'Angoumois, ayant fait campagne à la Louisiane et à Saint-Domingue, demande une compagnie dans un régiment des colonies ou un emploi dans un état-major des Iles 1740/1787",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "military"
    },
    {
        "bio": "Amat, Jean Joseph, agent de la marine à Pondichéry, au Cap de Bonne-Espérance et à l'île de France 1766/1786",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "Arrot, d', chevalier, puis vicomte, sous-lieutenant dans la légion de l'île de France, lieutenant puis capitaine au régiment de Pondichéry, colonel d'infanterie, aide-maréchal général des logis à Saint-Domingue, commandant au second à la Guadeloupe, gouverneur de Tabago 1772/1785",
        "from": "Caribbean",
        "to": "India",
        "tag": "officials"
    },
    {
        "bio": "Arrot, d', chevalier, puis vicomte, sous-lieutenant dans la légion de l'île de France, lieutenant puis capitaine au régiment de Pondichéry, colonel d'infanterie, aide-maréchal général des logis à Saint-Domingue, commandant au second à la Guadeloupe, gouverneur de Tabago 1772/1785",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Auger, Jean Baptiste, caporal au régiment de Pondichéry, mort à l'île de France 1788",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Auger, Nicolas, créole du Sénégal, ouvrier tonnelier, engagé pour l'île de France 1772",
        "from": "Isle Bourbon & Isle of France",
        "to": "Senegal",
        "tag": "other"
    },
    {
        "bio": "Auvray-Dufresne, Jean Louis, capitaine dans les troupes nationales de Cayenne et dans la légion de Saint-Domingue 1766/1779",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "military"
    },
    {
        "bio": "Bachelier, Jean Baptiste, natif de la province d'île de France, boulanger, mort pendant la traversée de Saint-Domingue 1766",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "Bance, Etienne Joseph, conseiller aux Conseils supérieurs de l'île Bourbon et de l'île de France, ensuite habitant de Saint-Domingue, enfin juge au tribunal civil de l'Eure 1766/an IX",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Barbé de Marbois, Nicolas François, lieutenant de juge, de la juridiction de l'île de France, frère de François Barbé de Marbois, intendant de Saint-Domingue (lettres de ce dernier) 1777/1810",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Barbier de blignières, Nicolas Joseph, lieutenant d'infanterie, et ingénieur ordinaire du Roi à Cayenne, capitaine de dragons à Saint-Domingue 1766/1776",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Barbier de Villejuif, Charles, engagé pour les troupes des colonies et embarqué pour Cayenne, André Ange Rousseau de La Gorre, fils de l'ancien gouverneur de la Désirade, sous-lieutenant dans les troupes de Cayenne, puis au régiment de Port-au-Prince, et François Dupont Du Chambon de Mésilliac, capitaine des troupes entretenues à l'île Royale, capitaine au régiment de Foix, à Saint-Domingue, puis à la légion de Saint-Domingue 1779",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Bardies Du Rouet, Etienne, abbé, missionnaire à Cayenne et à Saint-Domingue 1775/1778",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Barrère, Jean Baptiste, négociant au Cap-Français (Saint-Domingue), procédure de confiscation pour fait de commerce étranger du bateau le Bayonnais, capitaine Amiaud, par le tribunal de l'amirauté de Cayenne 1768",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "military"
    },
    {
        "bio": "Barry de Richeville, Charles Henri, sous-lieutenant au régiment de Pondichéry, fils de Barry de Richeville conseiller aux Conseils supérieurs de Pondichéry et de l'île de France, et Pierre Marie Des Savoyes, lieutenant au régiment de Pondichéry 1780/1783",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Barry de Richeville, conseiller au Conseil supérieur de Pondichéry, puis au Conseil supérieur de l'île de France et Louis Rezet son créancier 1774/1788",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Baudin, chargé d'une mission à l'île de France, débarqué à Pondichéry 1776",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "Baudry de Lamarche, Jacques, natif du Canada, acquéreur des terres de M. de la Mothe-Cadillac, ci-devant gouverneur de la Louisiane et auparavant commandant au détroit du lac Erié, sises près du fort des Hurons, difficultés avec Henri de Tonty, commandant au détroit du lac Erié 1722/1729",
        "from": "New France",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "Beaunay, Abraham Charles Laurent de, comte, petit-fils de Laurent Corneille de Graff, le célèbre flibustier, lieutenant de roi à Saint-Domingue, demande le gouvernement de l'île de la Tortue ou de la Louisiane [XVIIIe]",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "Beauvoillier de Courchant, gouverneur de l'île Bourbon, puis de Pondichéry 1718/1722",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Beillion, François Joseph, natif de Franche-Comté, soldat du régiment de l'île de France, à Pondichéry, déserteur 1785",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Belairmont, de, commissaire des guerres, demande une sous-lieutenance pour son fils au Sénégal ou à Cayenne 1786",
        "from": "Guyana",
        "to": "Senegal",
        "tag": "officials"
    },
    {
        "bio": "Bergeron, Antoine, natif du Limousin, sergent au régiment de Pondichéry, mort à l'île de France 1788",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Bertaud, Jacques, de la Rochelle, ancien colon de la Louisiane et à Saint-Domingue et sa femme Gabrielle Gabion, demande de secours 1775",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "other"
    },
    {
        "bio": "Berth, Jean Baptiste, natif de Paris, soldat du régiment de Pondichéry, mort à l'île de France 1788",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Berthelot de Crosse, ancien officier au Canada, à Saint-Domingue, aux îles Saint-Pierre et Miquelon 1764/1766",
        "from": "Caribbean",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Bertry, Irénée, ancien missionnaire à la Louisiane, et Jean Damascène de Pully, capucin, désigné pour Saint-Domingue 1783",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "other"
    },
    {
        "bio": "Béthisy, Louis de, ancien sergent au régiment de l'île de France, demande une place de commis aux écritures à Saint-Domingue 1784/1790",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Biemeré, Louis Joseph, natif de Givet, soldat au régiment de Port-au-Prince à Saint-Domingue, précédemment sergent dans les troupes nationales de Cayenne 1773/1779",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "military"
    },
    {
        "bio": "Billouard Dessalles de Kervaségan, René Antoine Agathe, ancien officier des troupes de la Louisiane, capitaine au régiment de la Guadeloupe, major honoraire d'infanterie 1736/1783",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "military"
    },
    {
        "bio": "Blandin, Jean Baptiste, chirurgien-major à Pondichéry, aux îles de France et de Bourbon et sa veuve Marie Anne Françoise Pajot 1784/1810",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "Blondy, ouvrier du Roi, embarqué pour Cayenne, puis pour Saint-Domingue 1789",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Blot, Claude Louis, dit Saint-Louis, natif de Franche-Comté, soldat mort à l'île de Gorée 1763",
        "from": "Caribbean",
        "to": "Senegal",
        "tag": "military"
    },
    {
        "bio": "Bonnefoy de Brétigneul, lieutenant général du bailliage de Vermandois, et siège présidial de Laon, demande la place du procureur général du Conseil supérieur du Cap, à Saint-Domingue, et Antoine de Bonnefoy, secrétaire de M. Guiran de la Brillane, gouverneur général des îles de France et de Bourbon 1779/1780",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Bonnegrâce, Jean, ancien capitaine de vaisseau marchand, faisant la traite des noirs, négociant au Cap-Français, à Saint-Domingue, procès au sujet d'une affaire de traite avec François La Fitte, habitant de l'île Bourbon, Marie Toinette Sabbatier, femme du dit La Fitte, procès dans lequel sont compromis Nicolas-Guy Du Rousseau de La Combe, procureur du Roi, Le Sueur de Petitville, juge, et Antoine Besmazières, greffier de la juridiction royale de l'île 1775/1788",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Bordes, ancien commis du bureau des colonies, sous-commissaire de la Marine à Cayenne, greffier de la juridiction et de l'amirauté de la Pointe-à-Pitre, à la Guadeloupe 1772/1776",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Borel Du Bourg, Claude Isaac de, né à Grenoble, officier au régiment de Bourbon, puis au régiment de Pondichéry, aide-major à Saint-Marc, à Saint-Domingue 1774/1820",
        "from": "Caribbean",
        "to": "India",
        "tag": "military"
    },
    {
        "bio": "Borel Du Bourg, Claude Isaac de, né à Grenoble, officier au régiment de Bourbon, puis au régiment de Pondichéry, aide-major à Saint-Marc, à Saint-Domingue 1774/1820",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Boucault, Charles, prisonnier d'Etat pour la Désirade, venant de Cayenne, mort à la Martinique 1764",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Boudon, Paul, natif de Nîmes, soldat au régiment de Pondichéry, mort à l'île de France 1788",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Boudon de Méranville, Etienne Pierre, lieutenant de grenadiers au service du Portugal, demande une lieutenance dans la légion de l'île de France ou celle de Saint-Domingue 1766/1772",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Boullot, Pierre, capitaine de navires marchands à Louisbourg et à la Martinique, mort aux îles Saint-Pierre et Miquelon 1758/1774",
        "from": "Caribbean",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Bourbevelle, de, ancien garde du corps du Roi, demande à être employé aux Indes orientales, au Sénégal ou à Cayenne 1785",
        "from": "Guyana",
        "to": "Senegal",
        "tag": "other"
    },
    {
        "bio": "Bourbonnois, Simon, garde extraordinaire de la brigade du domaine du Roi au bureau de Québec 1749",
        "from": "Isle Bourbon & Isle of France",
        "to": "New France",
        "tag": "other"
    },
    {
        "bio": "Bouynot, Henri, commandant de vaisseau de la Compagnie des Indes le Saint-Louis, sa succession à Pondichéry et Chandernagor 1714/1747",
        "from": "Caribbean",
        "to": "India",
        "tag": "other"
    },
    {
        "bio": "Boyé, Pierre, employé dans l'administration à l'île de France et à Bourbon, puis à Pondichéry, écrivain des colonies 1774/1787",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Bremeuil, Pierre, sergent au bataillon de l'Inde, embarqué à l'île de France pour Pondichéry 1773",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Breteuil, Louis Auguste de, baron, concessionnaire à Cayenne, affaires engagées par lui à Saint-Domingue 1772/1787",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Briard, Jean, prêtre du diocèse de Coutances, missionnaire au Sénégal et à Saint-Domingue 1753/1772",
        "from": "Caribbean",
        "to": "Senegal",
        "tag": "other"
    },
    {
        "bio": "Briffaud, Louis, natif d'Auxerre, déserteur du régiment de l'île de Bourbon, jugé à Pondichéry 1785",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Bruguières, Jean Guillaume, médecin désigné comme botaniste pour Saint-Domingue, en même temps que le sieur Richard à Cayenne 1787",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Brunel, Ignace, substitut du procureur général du Conseil supérieur de l'île de France, lieutenant de juge de la juridiction royale de l'île de France, premier conseiller au Conseil supérieur de Pondichéry, juge de la sénéchaussée de l'île de France 1772/1789",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Bruslé, Antoine, commandant de la paroisse de la Grande-Rivière, à Saint-Domingue, fils de Bruslé Antoine, en son vivant premier conseiller au Conseil supérieur de la Nouvelle-Orléans 1776/1791",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "Buchepot, fils d'Armand Charles marquis de Buchepot, on demande pour lui une place dans les régiments du Sénégal ou de Cayenne 1788",
        "from": "Guyana",
        "to": "Senegal",
        "tag": "military"
    },
    {
        "bio": "Cabanac, Joseph de, né au Canada, capitaine commandant au régiment de l'île de France 1779/1785",
        "from": "Isle Bourbon & Isle of France",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Cadet de Fontenay, Pierre François , capitaine dans les troupes de Cayenne puis au régiment de l'île de France 1766/1786",
        "from": "Isle Bourbon & Isle of France",
        "to": "Guyana",
        "tag": "military"
    },
    {
        "bio": "Caillou de Précourt, Augustin Anne, natif de l'île de Bourbon, demande une sous-lieutenance au régiment de Pondichéry, nommé sous-lieutenant au régiment de l'île de France 1778/1813",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Caire, François de, lieutenant-colonel et sous-brigadier au Génie, ingénieur en chef à Pondichéry et sa femme Marie Elisabeth Lebe, née au Canada 1775/1784",
        "from": "India",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Cambefort de La Motte-Bézat, Joseph Paul Augustin de, lieutenant aux régiments de l'île de Bourbon et de l'île de France, aide-major aux volontaires étrangers de la Marine, major puis lieutenant-colonel au régiment de la Guadeloupe, colonel du régiment du Cap, à Saint-Domingue, fils de Cambefort de La Motte-Bezat (Jean-Paul de), lieutenant-colonel du régiment de Cavalerie-Berry, et de Fiennes (Agnès-Gabrielle de) 1772/1793",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Capelly, Antoine, déserteur de la légion de l'île de France, embarqué pour Saint-Domingue 1767",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Carles, Joseph André François, originaire de Castres, volontaire au régiment d'Auvergne, sergent aux gardes françaises, chargé comme tel de la garde de Damiens, capitaine dans le régiment des recrues de Perpignan, capitaine aide-major aux recrues de la légion de l'île de France, capitaine aide-major au régiment de Pondichéry, lieutenant-colonel en 1779, maréchal de camp en 1791 1770/an VIII",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Carné de Trécesson, René Camille de, comte, époux de Françoise Louise Henriette de Rostaing, aide-major général à Cayenne (1762), commandant en second aux îles Saint-Martin et Saint-Barthélemy (1763), lieutenant-colonel d'infanterie (1772), chef de bataillon du régiment de la Guadeloupe (1775), assassiné par son domestique, en 1784, à Avignon 1769/1785",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Caro, François, invalide des troupes de la Compagnie des Indes, à l'île de France, venu en France, demande à passer à Pondichéry 1775",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Carré, Benoît, cuisinier sur le vaisseau l'Île de France, de la Compagnie des Indes, mort à Chandernagor 1776",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "Castelconnell, de, ancien enseigne des troupes de la Louisiane, demande une place d'enseigne réformé à Saint-Domingue 1742",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "military"
    },
    {
        "bio": "Catalogne, Charles Gédéon de, lieutenant au régiment du Port-au-Prince, capitaine aide-major aux Cayes (Saint-Domingue) né à Louisbourg, le 14 février 1735, mort aux Cayes en 1781 1763/an V",
        "from": "Caribbean",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Cava, Jean, caporal commis à la garde des forçats au Fort Royal de la Martinique, et sa femme Geneviève Bourbonne, qui demande son passage pour le rejoindre 1775",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Chalus, Paul Marie Jean François de, cadet-gentilhomme des troupes des colonies, nommé successivement sous-lieutenant aux régiments de la Martinique, de la Guadeloupe et de l'île de France, et François Alexis Rahier et Jacques Aimé Armand Guériff de Kernozay, proposé pour cadets-gentilshommes des troupes des colonies 1766/1785",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Chambeau, Canadiens servant comme officiers au régiment de la Couronne, réclament les bontés du Roi et une place à la légion de Saint-Domingue pour leur troisième frère. Leur soeur est Mme de Longueil, dont le mari a été tué les armes à la main pendant la dernière guerre du Canada 1770",
        "from": "Caribbean",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Champagne, de, chevalier, sous-lieutenant au régiment d'Artois, demeuré à l'île de France après le départ de ce régiment pour France, passé à Pondichéry 1776/1777",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Champeaux, Michel, capitaine au corps royal du Génie désigné pour la Martinique, ensuite pour l'île de France 1778/1789",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Champfort de Longueval, Nicolas, ancien enseigne des troupes de la Louisiane, réfugié à Saint-Domingue 1773/1776",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "military"
    },
    {
        "bio": "Charanville, major à Pondichéry, gouverneur de l'île de Bourbon, major à Cayenne 1705/1720",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Charanville, major à Pondichéry, gouverneur de l'île de Bourbon, major à Cayenne 1705/1720",
        "from": "Isle Bourbon & Isle of France",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Charly, de, aide-major des troupes détachées de la Marine au Canada, major de l'île de Gorée 1765/1775",
        "from": "New France",
        "to": "Senegal",
        "tag": "military"
    },
    {
        "bio": "Chauvigny, Jean Baptiste de, capitaine à la suite des troupes nationales de Cayenne, capitaine de la légion de l'île de France, commandant d'un bataillon de Cipayes, et François Fontenelle-Dessalles, capitaine aide-major d'un bataillon de Cipayes 1758/1793",
        "from": "Isle Bourbon & Isle of France",
        "to": "Guyana",
        "tag": "military"
    },
    {
        "bio": "Chaux, Louis Georges de, de Bourbon, tué en duel par Salavy (neveu de Cailleau, garde-magasin général de l'île de France) à bord du vaisseau le Pondichéry 1777/1779",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Cheboeuf, fils du concierge de Saint-Maur, volontaire dans les troupes de la Marine au Canada, demande une sous-lieutenance à Saint-Domingue 1724",
        "from": "Caribbean",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Chenot, François, capitaine adjudant-major au régiment de l'île de Bourbon, détaché au bataillon servant à Pondichéry 1755/1808",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Chermont, Jean Gabriel de, chevalier, capitaine d'infanterie, ingénieur ordinaire du Roi à la Louisiane, puis à Rochefort, sa femme Marie Charlotte Fabre Pontfrac de Mazan, leur fils Balthazar Catherine Marie Pierre Louis, élève des écoles royales militaires et résidant à Brienne, leur fille Sophie Marie Françoise, son beau-père Balthazar Fabre Pontfrac de Mazan, ancien officier des troupes détachées à la Louisiane, mort major du Fort-Dauphin à Saint Domingue en 1775 et François Fabre Pontfrac de Mazan, capitaine au régiment de la Martinique, major du Fort-Dauphin à Saint Domingue 1743/an VIII",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "military"
    },
    {
        "bio": "Chesnel, François, fils de Chesnel (Claude), conseiller du Roi, professeur en droit à Poitiers, demande qu'il lui soit accordé de l'emploi dans la légion de Saint-Domingue ou dans les troupes destinées pour l'île de France 1765",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Chevreuil de La Maudinière, ancien enseigne adjudant des troupes des Indes occidentales de Hollande, à Curaçao, demande un emploi dans le bataillon du Sénégal ou dans les troupes de Cayenne 1788",
        "from": "Guyana",
        "to": "Senegal",
        "tag": "military"
    },
    {
        "bio": "Chrétien, Louis, natif d'Anjou, grenadier au régiment de Pondichéry, mort à l'île de France 1788",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Clause, négociant alsacien établi à la Nouvelle-Angleterre, passé à la Martinique, puis à Gorée 1777",
        "from": "Caribbean",
        "to": "Senegal",
        "tag": "other"
    },
    {
        "bio": "Clermont-Brethe, François Marie René de, exempt de la compagnie de maréchaussée établie à Cayenne, capitaine au régiment provincial de Sens, capitaine au régiment de Port-Louis, à l'île de France 1764/1774",
        "from": "Isle Bourbon & Isle of France",
        "to": "Guyana",
        "tag": "military"
    },
    {
        "bio": "Cocheret de Jarlierre, Charles Louis, ancien employé au service de la Compagnie des Indes à Pondichéry, et ailleurs comme caissier, chef de nation, etc.., demande une place de garde-magasin à l'Ile de Bourbon, puis de greffier de la juridiction de Saint-Marc, à Saint-Domingue 1779/1783",
        "from": "Caribbean",
        "to": "India",
        "tag": "officials"
    },
    {
        "bio": "Cocheret de Jarlierre, Charles Louis, ancien employé au service de la Compagnie des Indes à Pondichéry, et ailleurs comme caissier, chef de nation, etc.., demande une place de garde-magasin à l'Ile de Bourbon, puis de greffier de la juridiction de Saint-Marc, à Saint-Domingue 1779/1783",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Collet, Jean Maurice, chirurgien à la Nouvelle-Orléans, (Louisiane), puis à Saint-Domingue, demande un brevet de chirurgien-major du Roi 1770/1785",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "other"
    },
    {
        "bio": "Cosse, Jean Pierre, natif de Lorient, matelot de la Cayenne de mer à l'île de France, mort dans cette colonie 1788",
        "from": "Isle Bourbon & Isle of France",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Coudrai, François, natif de l'île de France, mort à l'hôpital militaire de la Guadeloupe 1773",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "Courville, Jean Benoist de, né à Montréal le 8 décembre 1751, lieutenant au régiment de la Martinique, puis capitaine au régiment de la Guadeloupe 1778/an II",
        "from": "Caribbean",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Coutoy, Jean Baptiste, natif de Québec, matelot à bord du vaisseau du Roi le Souverain. mort à la Martinique 1782",
        "from": "Caribbean",
        "to": "New France",
        "tag": "other"
    },
    {
        "bio": "Cresnay, de, baron, lieutenant de roi à la Louisiane, puis à Cayenne 1730/1736",
        "from": "Louisiana",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Croizil de Courtemanche, capitaine et chevalier de Saint-Louis au Canada 1768",
        "from": "Caribbean",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Curt, Louis de, capitaine dans les troupes coloniales de la Guadeloupe, aide-de-camp de M. d'Estaing, commandant en chef les forces de terre et de mer du Roi en Amérique, commissaire du Roi pour la vérification et la suppression du papier monnaie aux îles de France et de Bourbon, député de la Guadeloupe à l'Assemblée constituante 1779/1792",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Cusson, Jean Pierre de, né à Carcassonne, capitaine réformé au régiment de Béarn, ayant servi au Canada, demande l'aide-majorité de Léogane, à Saint-Domingue 1770/1782",
        "from": "Caribbean",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Cuvilier, Jean Mathieu, natif de la province de Liège, soldat au régiment de l'île de France, déserteur jugé à Pondichéry 1785",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Dagneaux-Douville, Alexandre René, né au Canada en 1736, ayant servi dans cette colonie, ensuite capitaine au régiment de la Guadeloupe, commandant en second les îles Saint-Martin et Saint-Barthélemy, retiré lieutenant-colonel d'infanterie, fils de Dagneaux-Douville (Alexandre), capitaine des troupes détachées de la Marine au Canada et de Marie Coulon de Villiers 1736/1789",
        "from": "Caribbean",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Dagobert, capucin de la province de Champagne, grand vicaire particulier de l'évêque de Québec pour la Nouvelle-Orléans 1765",
        "from": "New France",
        "to": "Louisiana",
        "tag": "other"
    },
    {
        "bio": "Dallemand, Joseph, écrivain de la Marine aux îles de France, de Bourbon, de Madagascar, commissaire de la Marine à Cayenne, proposé pour capitaine des dragons de la milice 1773/1790",
        "from": "Isle Bourbon & Isle of France",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Dantier, Maximin Joseph Félix, lieutenant au régiment de l'île de France, adjudant de place à Pondichéry 1783/1792",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "David, Pierre Félix Barthélemy, gouverneur du Sénégal, gouverneur des îles de France et de Bourbon, et sa veuve Anne Jeanne Perrine Duchauffour 1742/1816",
        "from": "Isle Bourbon & Isle of France",
        "to": "Senegal",
        "tag": "officials"
    },
    {
        "bio": "Dazille, Jean Barthélemy, chirurgien-major à Cayenne, à l'île de France puis médecin du Roi à Saint-Domingue 1776/1784",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "Dazille, Jean Barthélemy, chirurgien-major à Cayenne, à l'île de France puis médecin du Roi à Saint-Domingue 1776/1784",
        "from": "Isle Bourbon & Isle of France",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Decous, Henry, ancien capitaine de navire et aide-major des milices garde-côtes à la Louisiane, lieutenant de port à Saint-Pierre, à la Martinique 1757/1792",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "Dedons, commis dans les bureaux de l'adminstration à Cayenne, Thorame, commis aux écritures à Cayenne, et Patrault, commis aux écritures à Cayenne, puis à l'île de France 1771",
        "from": "Isle Bourbon & Isle of France",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Déglicourt, Dominique, prêtre missionnaire à Cayenne et au Sénégal, directeur du séminaire du Saint-Esprit à Paris 1781/1782",
        "from": "Guyana",
        "to": "Senegal",
        "tag": "other"
    },
    {
        "bio": "Delisle, ancien habitant du Canada, conseiller au Conseil supérieur de l'île de Bourbon, et sa sœur Marie Thérèse 1770",
        "from": "Isle Bourbon & Isle of France",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Delosmes-Desdodins, Jean Pierre, ancien conseiller au Conseil supérieur de Pondichéry, ex-procureur général au Conseil supérieur de l'île de France, adjoint au contrôleur de la Marine 1783",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Demars, nommé conseiller au Conseil supérieur de Pondichéry, puis greffier de la juridiction de l'île de Bourbon 1778/1779",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Denis de La Ronde, Pierre, lieutenant à la Louisiane, fils de Louis Denis de La Ronde, capitaine au Canada 1763/1768",
        "from": "New France",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "Denois, Joseph Boucher, né au Canada, enseigne dans les troupes entretenues à la Louisiane, capitaine au régiment de l'île de France 1762/1785",
        "from": "Isle Bourbon & Isle of France",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Denois, Joseph Boucher, né au Canada, enseigne dans les troupes entretenues à la Louisiane, capitaine au régiment de l'île de France 1762/1785",
        "from": "New France",
        "to": "Louisiana",
        "tag": "military"
    },
    {
        "bio": "Deschiens de Villefeu, employé en qualité de lieutenant sur la corvette du Roi le Nécessaire, puis commandant du navire l'Indienne, de Bordeaux allant aux îles de France et de Bourbon, incident survenu pendant sa relâche à Gorée 1774/1775",
        "from": "Isle Bourbon & Isle of France",
        "to": "Senegal",
        "tag": "officials"
    },
    {
        "bio": "Descorches de Sainte-Croix, Jacques, sous-commissaire de la Marine à Brest et à Rochefort, puis à Pondichéry, ordonnateur à Chandernagor, commissaire des colonies, mort à l'île de France 1768/1788",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Desgarcins, Joseph Antoine, dessinateur employé pour les fortifications de Pondichéry, puis exempt de la maréchaussée à Saint-Domingue, pièces relatives à sa carrière administrative et à un meurtre commis par lui en état de légitime défense à Pondichéry, et son fils Desgarcins, nommé exempt de la maréchaussée à Saint-Domingue 1770/1784",
        "from": "Caribbean",
        "to": "India",
        "tag": "other"
    },
    {
        "bio": "Desjardins, Guillaume, fils de Guillaume Antoine Desjardins, nommé capitaine au régiment du Cap, à Saint-Domingue, a préféré servir au régiment de l'île de Bourbon 1785/1787",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Desmahis, ancien commerçant de Saint-Domingue, allant s'établir à l'île de France 1770",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "Desrivierre-Gers, Henri Louis Jérôme, sous-lieutenant au régiment de la Martinique, aux volontaires d'Afrique, au régiment de la Guadeloupe, capitaine dans les troupes de Cayenne, aide-major de place à Cayenne, chargé du commandement de Cayenne en l'absence du gouverneur et du major commandant le bataillon de la Guyane, et sa veuve Audat (Anne-Marie), et leurs enfants 1776/1807",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Destanchau, capitaine des troupes de Saint-Domingue, et du Canada 1732/1755",
        "from": "Caribbean",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Desvaulx, Nicolas Jacques, né à Chandernagor, capitaine d'artillerie à Pondichéry et à l'île de France, retiré comme lieutenant-colonel d'infanterie 1777/1814",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Desvaux, Etienne Michel, natif de Paris, habitant l'Angleterre, marchand mort en mer allant au Cap-Français, à Saint-Domingue, à Louisbourg, île Royale 1740/1741",
        "from": "Caribbean",
        "to": "New France",
        "tag": "other"
    },
    {
        "bio": "Detcheverry, Jean Baptiste, lieutenant général au bailliage de Mixe, en Basse-Navarre, nommé substitut du procureur général au Conseil supérieur de Cayenne, puis juge civil, criminel et de police de la juridiction royale de l'île de Bourbon 1777/1790",
        "from": "Isle Bourbon & Isle of France",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Deville, Jean Baptiste, successivement soldat, comédien, commis dans les magasins du Roi, officier des troupes nationales à l'île de France, habitant au Port-Bourbon, et Guillaume François Marcotte, habitant de l'île de France, acquéreurs des biens de La Roche Du Ronzet (Claude de), chevalier de Saint-Louis, commandant de quartier, difficultés survenues à ce sujet entre l'administration, les sieurs Deville, Marcotte et Ricard de Bignicourt (Louis Joseph Chrysotome), ancien directeur du Domaine, à l'île de France 1781/1785",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Didier, Antoine, dit Saint-Louis, natif de Remiremont, soldat au 2e bataillon du régiment d'Artois, en garnison à Louisbourg, à l'île Royale 1756",
        "from": "Caribbean",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Dolnet de Palmaroux, capitaine d'infanterie des volontaires à l'île de Bourbon, capitaine des troupes de la Compagnie des Indes, à Pondichéry 1738/1759",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Donnadieu de Pélissier Dugrès, Louis Joseph, chevalier, lieutenant dans les troupes de l'île Royale, capitaine dans les troupes nationales de Cayenne, major du Fort-Dauphin, à Saint-Domingue, en remplacement de Mazan (Balthazar Fabre Pontfrac de), lieutenant de roi et commandant particulier au Cap-Français, remplissant par intérim les fonctions de commandant en second de la partie du Nord, colonel d'infanterie, et sa femme Louise Marguerite Vallée 1765/1786",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Douin de La Motte, lieutenant à la Louisiane, puis capitaine dans les troupes de Saint-Domingue, enfin capitaine au régiment provincial de Mantes 1762/1776",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "Doumet de Siblas, Jacques, lieutenant, ingénieur à l'île Royale, major à Gorée, major au Petit-Goave, lieutenant de roi à Saint-Louis, commandant particulier de Port-au-Prince à Saint-Domingue, colonel d'infanterie 1757/an IX",
        "from": "Caribbean",
        "to": "Senegal",
        "tag": "officials"
    },
    {
        "bio": "Doyon, Thomas, de Québec, pauvre bourgeois mort à la Martinique 1783",
        "from": "Caribbean",
        "to": "New France",
        "tag": "other"
    },
    {
        "bio": "Drouet de La Coulonnerie, enseigne des troupes du Canada, puis sous-lieutenant dans la légion de l'île de France 1765/1769",
        "from": "Isle Bourbon & Isle of France",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Du Breuil-Villars, Alexandre, ci-devant enseigne des troupes entretenues à la Louisiane, capitaine au régiment de la Guadeloupe 1763/1785",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "military"
    },
    {
        "bio": "Du Coudray, Jean François, natif de Rennes, soldat au régiment de l'île de France, déserteur jugé à Pondichéry 1785",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Du gast, Charles Joseph Gohier, François Désiré de Brueys et Alexandre de Séguin de Piégon, cadet-gentilhommes au bataillon auxiliaire des colonies, on les propose comme sous-lieutenants aux régiments du Cap, de Port-au-Prince et de l'île de France 1788",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Du Montet, Aimé Guillin, officier des vaisseaux de la Compagnie des Indes, officier à Saint-Domingue, à la Martinique, à la Guadeloupe, colonel d'infanterie, gouverneur de Saint-Vincent, gouverneur du Sénégal, son remplacement par Le Gardeur de Repentigny (Louis) 1748/1785",
        "from": "Caribbean",
        "to": "Senegal",
        "tag": "officials"
    },
    {
        "bio": "Du Myrat de Vertpré, Charles François, major-général de l'île de France, colonel dans les troupes des colonies, employé à Saint-Domingue et à la Martinique 1771/1780",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Du Plessis, Jean Baptiste Vigoureux, né à Chandernagor le 6 mai 1735, lieutenant-colonel d'infanterie, commandant à Mahé, 1778, gouverneur de l'île Saint-Vincent, 1780, brigadier des armées du Roi, 1784, gouverneur de l'île de Bourbon 1771/1814",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Du Roullin, Pierre Claude, lieutenant dans les troupes de la Louisiane, capitaine au régiment de la Guadeloupe, major en 1779 1770/1788",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "Dubé, Gabriel, natif du Canada, pauvre sans secours, mort à l'hôpital de la Pointe-à-Pitre, à la Guadeloupe 1787",
        "from": "Caribbean",
        "to": "New France",
        "tag": "other"
    },
    {
        "bio": "Duboe, Jean Baptiste, et Pierre Rodrigue, négociants à Louisbourg (île Royale) et Gaspard Lebeau, négociant à Saint-Domingue 1754",
        "from": "Caribbean",
        "to": "New France",
        "tag": "other"
    },
    {
        "bio": "Dubois, ancien sénéchal et lieutenant-général d'amirauté à la Guadeloupe, il sollicite un emploi de son grade dans la Louisiane vers 1780",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "Dubreuil, Simon Etienne, employé au bureau des armements et des magasins à l'île de France, puis secrétaire de brigade à la suite de l'armée de M. de Bussy, ensuite employé au magasin de Trinquemalé, puis aux travaux des fortifications à Pondichéry 1779/an X",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "Duchêne, Jacques, appointé de l'artillerie de l'île de France, à Pondichéry 1788",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Dufaur, César Antoine, lieutenant dans la légion de l'île de France, capitaine au régiment de Pondichéry, retiré avec le brevet de major mort en 1786 et sa veuve Defarcy Céleste 1740/1786",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Dufaure de La Curatrie, Jean Baptiste, sous-lieutenant dans les troupes nationales de Cayenne, lieutenant au régiment de Port-au-Prince à Saint-Domingue 1772/1773",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Dufay, lieutenant au régiment de la Reine, qui a bien servi au au Canada, pendant plusieurs campagnes, demande une compagnie dans la légion de l'île de France 1769",
        "from": "Isle Bourbon & Isle of France",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Dugas, Pierre, natif d'Anjou, tonnelier de la Cayenne de mer, à Port-Louis, île de France, mort à l'hôpital 1788",
        "from": "Isle Bourbon & Isle of France",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Duhart, capitaine de l'Économe, venu de Saint-Domingue à Gorée 1778",
        "from": "Caribbean",
        "to": "Senegal",
        "tag": "military"
    },
    {
        "bio": "Dumas de Saint-Marcel, chevalier, capitaine en second au régiment d'Aquitaine, demande une majorité dans les régiments de Pondichéry ou de l'île de France 1788",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Dumont, Jean, natif de Libourne, quartier-maître de la Cayenne de Mer à l'île de France 1788",
        "from": "Isle Bourbon & Isle of France",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Duparquier, Alexandre Claude, ancien garde-magasin général du Roi, à la Louisiane, chargé du bureau des classes à Saint-Domingue 1754/1775",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "Dupont Du Chambon, Charles François Ferdinand , lieutenant des troupes détachées de la Marine au Canada et à l'île Royale, capitaine au régiment de Foix, à Saint-Domingue 1777",
        "from": "Caribbean",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Dupuy, Charles, capitaine du bateau le Lançon, du Cap-Français, à Saint-Domingue, en charge pour Louisbourg, île Royale, pris et confisqué pour commerce prohibé 1753",
        "from": "Caribbean",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Durand, ci-devant garde-magasin de la Compagnie des Indes, à la Louisiane, prévaricateur passé à Saint-Domingue après 1725",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "Durseau, Jean, ci-devant habitant du Canada, demande de secours et de passage à Saint-Domingue 1763",
        "from": "Caribbean",
        "to": "New France",
        "tag": "other"
    },
    {
        "bio": "Dussamin, Philibert, récollet de la province d'Artois, curé de Saint-Louis, en l'île de Gorée 1766",
        "from": "Caribbean",
        "to": "Senegal",
        "tag": "other"
    },
    {
        "bio": "Duvigier-Plançon, nommé sous-lieutenant au régiment de l'île de France, n'a pas rejoint ayant passé au régiment de la Guadeloupe comme volontaire 1773",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Enserman, Jean Michel, natif d'Alsace, soldat au régiment de Pondichéry, mort à l'île de France 1788",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Erneville, Pierre Henri d', ancien capitaine des troupes de la Louisiane, sa femme Pélagie Fleuriau, et leur fils Charles Jean Baptiste d'Erneville, capitaine d'artillerie au régiment de Grenoble, puis au Sénégal 1725/1789",
        "from": "Louisiana",
        "to": "Senegal",
        "tag": "military"
    },
    {
        "bio": "Escairac, d', capitaine des troupes du Canada, puis major du Port-de-Paix à Saint-Domingue 1725/1748",
        "from": "Caribbean",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Espinassy, Antoine Marie Joseph d', capitaine en premier d'artillerie à l'île de France, puis à Saint-Domingue, devenu général en 1797 1757/1829",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Espinette, Charles François d', major de la légion de l'île de France, puis du régiment de Pondichéry, avec brevet de lieutenant-colonel 1770/1776",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Estèbe, ancien conseiller au Conseil supérieur de Québec, secrétaire du Roi en la chancellerie près la cour des aides de Bordeaux, demande que les lettres d'honneur de cet emploi qui lui ont été accordées soient enregistrées au Conseil supérieur de Saint-Domingue 1779",
        "from": "Caribbean",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Estoupan de Laval, Louis François, commis aux écritures à l'île de France, à Pondichéry, puis au Bureau des Colonies 1775/1809",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "Eyma, Joseph Aima d', capitaine dans les troupes du Canada, puis dans la légion de Saint-Domingue 1734/1777",
        "from": "Caribbean",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Faveris, Jean Baptiste, originaire de l'île de Bourbon, chirurgien-major à Gorée, ses démêlés avec Boniface (Charles-Hippolyte de) 1770/1779",
        "from": "Isle Bourbon & Isle of France",
        "to": "Senegal",
        "tag": "other"
    },
    {
        "bio": "Fayolle de Saint-Félix, Gabriel Jacques, écrivain de la Marine à la Guadeloupe, sous-commissaire à l'île de France, commissaire puis inspecteur de la Marine 1775/1826",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Ferrand, Jean, natif de Castres, fusilier au régiment de l'île de France, mort à Pondichéry 1787",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Foin, Guillaume François, soldat au régiment de Pondichéry, mort à l'île de France en 1782 1778/1782",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Fontaine, Jean Baptiste, capitaine d'artillerie à l'île de France, commandant l'artillerie de Pondichéry, major des troupes des colonies 1727/1791",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Fontette-Sommery, Charles Marie de, comte, capitaine de dragons au régiment d'Artois, employé à Saint-Domingue puis comme aide-de camp de M. de Boufflers au Sénégal 1779/1785",
        "from": "Caribbean",
        "to": "Senegal",
        "tag": "military"
    },
    {
        "bio": "Forcade, Pierre de, commissaire de la Marine et premier commis du bureau des Colonies au Ministère, frère de Forcade, caissier au Trésor de la Marine à Rochefort, et sa femme Catherine de La Borde, leurs intérêts à Saint-Domingue et à Cayenne 1719/1742",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Forget, Olivier, natif de Vannes, matelot de la Cayenne de mer à l'île de France, mort à l'hôpital 1788",
        "from": "Isle Bourbon & Isle of France",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Foubert, enseigne dans les troupes du Canada, demande à passer à la Louisiane 1758",
        "from": "New France",
        "to": "Louisiana",
        "tag": "military"
    },
    {
        "bio": "Foucault, Denis Nicolas, écrivain principal de la Marine, ordonnateur à la Louisiane et à Pondichéry, commissaire général ordonnateur faisant fonctions d'intendant à l'île de France 1743/1807",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Foucault, Denis Nicolas, écrivain principal de la Marine, ordonnateur à la Louisiane et à Pondichéry, commissaire général ordonnateur faisant fonctions d'intendant à l'île de France 1743/1807",
        "from": "Isle Bourbon & Isle of France",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "Fournier, Claude, natif de Paris, soldat au régiment de Pondichéry, mort à l'île de France 1788/1789",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Francisque, noir indien, esclave de Saint-Rémy (François), commis aux écritures chargé de la Cayenne du Roi à l'île de France : affranchissement 1778",
        "from": "Isle Bourbon & Isle of France",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "François, Antoine, soldat au régiment de l'île de France, à Pondichéry, mort en mer 1785",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Francy de La Tour, Claude, chevalier de Saint-Louis, décédé à l'île de France, sa succession 1783",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "Frondad, de, capitaine au régiment d'Angoumois à la Louisiane, demande un commandement à Saint-Domingue 1766",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "military"
    },
    {
        "bio": "Fusée-aublet, Laurent, médecin et botaniste à l'île de France et à Cayenne, et Pierre Milleret, chirurgien de l'hôpital militaire de l'île d'Oléron 1773/1779",
        "from": "Isle Bourbon & Isle of France",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Fyard de Gévigney, ancien capitaine dans le Corps de Montréal, demande une place dans la maréchaussée de Saint-Domingue 1788",
        "from": "Caribbean",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Gabard, ancien sous-officier, commandant le quartier de Plaisance à Saint-Domingue en 1791 et sa veuve originaire de Louisbourg 1768/ an XIII",
        "from": "Caribbean",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Gadobert, Pierre, négociant aux Illinois, son mariage avec Nermand (Anne Elisabeth), veuve de Laubinois (Louis), écrivain principal de la Marine à la Nouvelle-Orléans, acte de naissance de Gadobert (Benjamin Jacques Sébastien), né avant le mariage, acte de décès de la veuve Gadobert à Saint-Domingue en 1776 1763/1770",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "Gallois, Nicolas, directeur d'un comptoir à Gorée, chargé d'introduire des nègres à Saint-Domingue 1764/1766",
        "from": "Caribbean",
        "to": "Senegal",
        "tag": "other"
    },
    {
        "bio": "Gamon de La Rochette, Joseph, major au Port-de-Paix à Saint-Domingue, ancien capitaine des troupes de la Louisiane 1753/1777",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "military"
    },
    {
        "bio": "Gannes, Georges de, né au Canada en 1759, cadet gentilhomme, sous-lieutenant au régiment du Cap, à Saint-Domingue, puis au régiment de la Martinique 1779/1790",
        "from": "Caribbean",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Garnier d'Aiglancay, Nicolas Gérard, lieutenant d'infanterie à l'île de France, à Pondichéry et à Saint-Domingue 1771/an VI",
        "from": "Caribbean",
        "to": "India",
        "tag": "officials"
    },
    {
        "bio": "Garnier d'Aiglancay, Nicolas Gérard, lieutenant d'infanterie à l'île de France, à Pondichéry et à Saint-Domingue 1771/an VI",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Garrus de La Roque, Pierre Louis, natif de Paris, commis de l'administration de Cayenne, mort à la Martinique 1778/1787",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Gauvain, Jérôme, natif de la Louisiane, capitaine de port aux Cayes-Saint-Louis, à Saint-Domingue 1782/1791",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "military"
    },
    {
        "bio": "Geoffrion de Boisy, employé dans les bureaux de l'île de Bourbon, passé à Pondichéry, puis à l'armée anglaise 1772",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "Geofroy Du Bourguet, Antoine, directeur général des fortifications des îles du Vent, ingénieur en chef, lieutenant du roi au Fort-Bourbon à la Martinique 1769/1787",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Gerbier, Jacques, soldat de Marine sur la frégate le Montréal, mort à la Martinique 1784",
        "from": "Caribbean",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Giblot, Charles François, commandant en second à l'île de France, sa veuve Anne de Laval, et leur fils Joseph Benoît Giblot Du Villeret, ancien sous-lieutenant d'infanterie, résidant au Cap-Français, à Saint-Domingue 1747/1786",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Gilbert, esclave créole de la Grenade, habitant Cayenne, affranchi par son maître Lescalier (Balthazar) 1787",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Giraud, habitant de Cayenne condamné pour sévices envers ses nègres, passé à Saint-Domingue 1766/1774",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Godefroy de Linetot, Maurice Régis, né à Montréal, capitaine aux régiments de l'Île Bourbon et de l'île de France 1757/1785",
        "from": "Isle Bourbon & Isle of France",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Gohin, Pierre André de, chevalier de Montreuil, major général au Canada, puis gouverneur général, par intérim de Saint-Domingue 1755/1764",
        "from": "Caribbean",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Golbéry, Sylvain François Xavier Meinrade, capitaine au corps royal du Génie, employé à Gorée et à Cayenne 1785/1792",
        "from": "Guyana",
        "to": "Senegal",
        "tag": "military"
    },
    {
        "bio": "Golbéry de Tirion, de, capitaine au corps royal du Génie, employé à Gorée et à Cayenne, ingénieur au Sénégal 1787",
        "from": "Guyana",
        "to": "Senegal",
        "tag": "military"
    },
    {
        "bio": "Gonnet, Philippe, natif de Metz, soldat au régiment de Pondichéry, mort à l'île de France 1788",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Gosse, Mathias Claude, ancien consul à Bassorah, conseiller au Conseil supérieur de Pondichéry, puis de l'île de France 1743/1775",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Guetz, François, natif de Marseille, cocq de la Cayenne de mer, mort à l'hôpital de l'île de France le 28 octobre 1788 1788",
        "from": "Isle Bourbon & Isle of France",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Guillemin, Jean, fusilier né à Auteuil en île de France, mort le 2 octobre 1788 à la Guadeloupe 1788",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "Guillot, Joseph, soldat à Pondichéry, mort le 28 juin 1777 à Saint-Louis 1777",
        "from": "Caribbean",
        "to": "India",
        "tag": "military"
    },
    {
        "bio": "Guillouet d'Orvilliers de La Troncais, Claude, lieutenant dans les troupes de Cayenne, puis à Saint-Domingue 1737/1751",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Guyon, Jean Baptiste de, né en 1739, officier d'artillerie au Canada, à l'île de France 1752/an VI",
        "from": "Isle Bourbon & Isle of France",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Guyon, Jean Baptiste Régis de, né en 1737 à Québec au Canada, capitaine d'Infanterie à l'île de France 1752/an VI",
        "from": "Isle Bourbon & Isle of France",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Hardy, Jean Claude, natif de l'île de France, soldat à la légion de Saint-Domingue 1769",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Harné, Jean, natif de l'île de Bourbon, élève-pilote, mort à Chandernagor 1777",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "Hauguet, Thomas, employé dans les bureaux à Saint-Domingue, puis contrôleur des colonies au Sénégal 1773/1781",
        "from": "Caribbean",
        "to": "Senegal",
        "tag": "officials"
    },
    {
        "bio": "Hazeur de Lorme, Louis, né à la Louisiane en 1746, capitaine au régiment de la Guadeloupe puis commandant particulier par intérim à Tabago en 1785 1754/1792",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "military"
    },
    {
        "bio": "Herbourg, Marie Marthe, du Canada, passée à la Martinique 1763",
        "from": "Caribbean",
        "to": "New France",
        "tag": "other"
    },
    {
        "bio": "Hertel de Cournoyer, Michel, né à l'île Royale en 1735, mort à Cayenne, en 1780, cadet à l'île Royale, enseigne au Canada, aide-major des troupes nationales de la Guyane 1716/1782",
        "from": "New France",
        "to": "Guyana",
        "tag": "military"
    },
    {
        "bio": "Hertel de Saint-Francois, Antoine, officier des troupes du Canada, capitaine au régiment de l'île de France 1764/1779",
        "from": "Isle Bourbon & Isle of France",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Heuzet, Pierre, natif de la province de l'île de France, fusilier au régiment de la Guadeloupe 1789",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Hochereau de Gassonville, aide-major à l'île de Bourbon et à Pondichéry 1724",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "Huaud, Gilles, ancien habitant de Louisbourg, passé à Cayenne et employé au magasin de Sinnamary 1767",
        "from": "New France",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Jacob, Jean Marie, natif de la province de l'île de France, fusilier au régiment de la Guadeloupe 1784",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Jacquin-Philibert, Nicolas, ancien habitant du Canada, désire passer à l'île de Bourbon, auprès de son frère, sous-commissaire de la Marine 1770",
        "from": "Isle Bourbon & Isle of France",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Jarret de Verchères, capitaine d'une compagnie des troupes de la Marine à la Louisiane, chevalier de Saint-Louis le 20 août 1745 1745",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "military"
    },
    {
        "bio": "Joantho, de, secrétaire du Roi, ses intérêts à l'île de France et à la Grenade 1774/1780",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "Jolibert, aumônier à Gorée, mort à la Guadeloupe 1773/1778",
        "from": "Caribbean",
        "to": "Senegal",
        "tag": "other"
    },
    {
        "bio": "Jouanne de Saint-Martin, négociant à la Rochelle, armant pour Cayenne et Saint-Domingue 1772",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Jousselin de Marigny, capitaine des troupes entretenues au Canada, puis à Saint-Domingue 1716/1746",
        "from": "Caribbean",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Juchereau de Saint-Denis, Louis Barbe, lieutenant aux gardes françaises, arrière-petit-fils de Juchereau de Saint-Denis Nicolas anobli en 1692 pour services militaires au Canada, petit-fils de Juchereau de Saint-Denis Charles lieutenant général de l'île de Montréal ; fils de Juchereau de Saint-Denis Joseph Charles conseiller au Conseil supérieur du Cap à Saint-Domingue 1781/1787",
        "from": "Caribbean",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Juneau, Nicolas, dit la Grenade, soldat des troupes du Canada, mort à Québec 1760",
        "from": "Caribbean",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "La Barthe, Jean Baptiste, négociant et habitant de Port-au-Prince à Saint-Domingue, demande une concession à Cayenne 1770",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "La Carrière, sous-lieutenant à la suite de l'artillerie des îles de France et de Bourbon et à Pondichéry 1781/1789",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "La Glaine d'Auzon, Jean René, lieutenant d'artillerie à Pondichéry, capitaine d'artillerie aux volontaires étrangers de la Marine, major commandant l'artillerie au Sénégal 1762/1783",
        "from": "India",
        "to": "Senegal",
        "tag": "officials"
    },
    {
        "bio": "La Longueville, de, chevalier, lieutenant des troupes du Canada, puis capitaine des troupes de la Louisiane 1720",
        "from": "New France",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "La Martelliere, de, ancien officier de Marine, demande un emploi dans les troupes, à Pondichéry ou Saint-Domingue, nommé capitaine au régiment de Pondichéry 1776",
        "from": "Caribbean",
        "to": "India",
        "tag": "military"
    },
    {
        "bio": "La Rouvillière de Villebois, Honoré Michel de, commissaire des colonies au Canada, en Louisiane et sa femme Marie Catherine Elisabeth Bégou 1730/1753",
        "from": "New France",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "La Salle, de, ancien lieutenant des troupes du Canada, capitaine réformé à Saint-Domingue 1716",
        "from": "Caribbean",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Lacroix de Villeneuve, Thomas, conseiller au Conseil supérieur de Pondichéry, puis au Conseil supérieur de Port-au-Prince à Saint-Domingue 1749/1782",
        "from": "Caribbean",
        "to": "India",
        "tag": "officials"
    },
    {
        "bio": "Lanton, chirurgien-major au Fort-Bourbon, à la Martinique 1786",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "Lartigue, Jacques, originaire de Louisbourg à l'île Royale, greffier, puis procureur du Roi de la juridiction de Cayenne 1763/1776",
        "from": "New France",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Le Brasseur, Joseph Alexandre, commissaire général de la Marine puis des Colonies, commissaire ordonnateur à Gorée à Saint-Domingue, intendant général des fonds de la Marine et des Colonies 1768/1788",
        "from": "Caribbean",
        "to": "Senegal",
        "tag": "officials"
    },
    {
        "bio": "Le Cler, Pierre, de Québec, matelot mort à Pondichéry 1777",
        "from": "India",
        "to": "New France",
        "tag": "other"
    },
    {
        "bio": "Le Clerc de Fresne, Camille Charles, chevalier, colonel du régiment de l'île de Bourbon, gouverneur de Pondichéry 1784/1817",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Le Deist de Botidoux, Jean François, ci-devant capitaine dans le régiment de Matha, demande une sous-lieutenance à Cayenne ou au Sénégal 1788/1789",
        "from": "Guyana",
        "to": "Senegal",
        "tag": "officials"
    },
    {
        "bio": "Le Gardeur de Repentigny, Louis, comte, colonel des régiments de l'Amérique, de la Guadeloupe puis de la Martinique, gouverneur du Sénégal 1721/1786",
        "from": "Caribbean",
        "to": "Senegal",
        "tag": "officials"
    },
    {
        "bio": "Le Moyne, Antoine Philippe, contrôleur à la Martinique, ordonnateur à Cayenne et commissaire général de la marine à Rochefort 1734/1777",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Le Voyer, Louis, sous-lieutenant au régiment de Pondichéry, lieutenant au régiment de l'île de France 1776/an XIII",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Lecodé, Yves, natif de Louisbourg, maître de port à Cayenne 1767/1792",
        "from": "New France",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Lefebvre, Jean Baptiste Nicolas Claude, procureur général au Conseil supérieur de Pondichéry, puis procureur du Roi de la juridiction de l'île de Bourbon 1776/1784",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Legros de La Grancours, Honoré Michel, enseigne à la Louisiane, puis capitaine au régiment de l'île de France 1762/1787",
        "from": "Isle Bourbon & Isle of France",
        "to": "Louisiana",
        "tag": "military"
    },
    {
        "bio": "Lemire, Louis, dit Chenevard, natif de Québec au Canada, chef de caserne à Saint-Jean-d'Angely, accusé de concussions dans la distribution des secours accordés aux colons passant à Cayenne 1764",
        "from": "New France",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Lépervanche, Eustache de, enseigne des troupes du Canada, capitaine au régiment de Bourbon 1755/1788",
        "from": "Isle Bourbon & Isle of France",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Lépinay, Jean Michel de, gouverneur de la Louisiane, puis de la Grenade 1716/1718",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "Lépine, de, employé aux écritures à la Guadeloupe, demande à passer à Pondichéry 1776",
        "from": "Caribbean",
        "to": "India",
        "tag": "other"
    },
    {
        "bio": "L'Isle, sous-lieutenant des troupes de la Louisiane, passé à Saint-Domingue 1718/1726",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "Lolooz, de, colonel en Suède, chevalier de Saint-Louis, habitant de l'île de France 1788",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "L'Ostende, de, chevalier, ancien capitaine au régiment de l'île de France, demande à passer à Cayenne, et sa femme Du Roure 1764",
        "from": "Isle Bourbon & Isle of France",
        "to": "Guyana",
        "tag": "military"
    },
    {
        "bio": "Luneau de Villeson, greffier au Sénégal, mort à la Martinique 1781/1784",
        "from": "Caribbean",
        "to": "Senegal",
        "tag": "other"
    },
    {
        "bio": "Macarty de Macteigne, de, chevalier, enseigne des troupes de la Louisiane, lieutenant des grenadiers volontaires au Cap-Français à Saint-Domingue 1763/1781",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "Magon de La Villebague, René, ancien gouverneur des îles de France et de Bourbon, intendant de Saint-Domingue, et sa veuve 1757/an V",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Maissin, Jacques de, ancien major général des troupes de la Compagnie des Indes, aux Indes, colonel d'infanterie, commandant les milices de la Rivière-Noire, à l'île de France. Chevalier de Saint-Louis en 1759 1738/1770",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Maloeuvre, Jean, natif de Bretagne, soldat au régiment de l'île de France, condamné comme déserteur à Pondichéry 1785",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Manent, Jean Baptiste, capitaine au régiment de l'île de Bourbon, puis au régiment de Pondichéry 1772/1805",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Marchant Des Ligneris, Constant François Xavier Daniel, né au Canada en 1739, lieutenant dans la légion de Saint-Domingue, capitaine commandant au régiment du Cap-Français 1750/1792",
        "from": "Caribbean",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Marchant Des Ligneris, Pierre Marie, chevalier, né au Canada, en 1743, sous-lieutenant aux troupes nationales de Cayenne, lieutenant à la légion de Saint-Domingue, capitaine au régiment de Port-au-Prince 1770/1786",
        "from": "Caribbean",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Marchant Des Ligneris, Pierre Marie, chevalier, né au Canada, en 1743, sous-lieutenant aux troupes nationales de Cayenne, lieutenant à la légion de Saint-Domingue, capitaine au régiment de Port-au-Prince 1770/1786",
        "from": "New France",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Mars, Joseph de, commandant particulier à Cayenne, passé à la Guadeloupe en 1768, où il a servi dans les états-majors 1770/1773",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Martinon Du Verdereau, procureur général au Conseil supérieur de Pondichéry, puis à celui de l'île de France 1776/1777",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Mauduit de Montréal, demande la place de sénéchal de la Basse-Terre à la Guadeloupe 1786/1789",
        "from": "Caribbean",
        "to": "New France",
        "tag": "other"
    },
    {
        "bio": "Membrède, de, major à la Nouvelle-Orléans, à la Louisiane, puis lieutenant de roi à Saint-Domingue 1746/1770",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "Ménard, Jean Louis, natif d'Avranches, soldat au régiment de Pondichéry, mort à l'île de France 1788",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Mercier, habitant de Cayenne, émigré de la Guadeloupe 1775",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Meyracq, Laurent Domenger de, bailli au bailliage royal de Louisbourg à l'île Royale, puis juge de l'amirauté à la Guadeloupe 1740/1778",
        "from": "Caribbean",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Michel, Claude, soldat aux volontaires d'Afrique, mort à Saint-Louis à Gorée en Afrique le 7 septembre 1765 1765",
        "from": "Caribbean",
        "to": "Senegal",
        "tag": "military"
    },
    {
        "bio": "Millon, François, procureur général au Conseil supérieur de l'île Bourbon, sénéchal et juge d'amirauté à Saint-Marc à Saint-Domingue 1768/1780",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Mora de La Bourdonnaye, ancien gendarme, demande un emploi dans les troupes de Cayenne ou du Sénégal 1788",
        "from": "Guyana",
        "to": "Senegal",
        "tag": "military"
    },
    {
        "bio": "Morin, Jean Antoine Charles, fils de Jean-Baptiste Morin, lieutenant au régiment de la Guadeloupe, demande une place dans les bureaux de l'île de France 1771/1784",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Morthot de Saint-Frémont, Jean François, ancien officier au régiment Royal-Marine, lieutenant d'infanterie, nommé aide-major au Fort-Bourbon à la Martinique, commission provisoire en 1779, lieutenant colonel en 1794, mort à Paris le 19 octobre 1794 1779/1794",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Myot, Jean François, employé à la Cayenne du Port-Louis, à l'île de France 1783/1791",
        "from": "Isle Bourbon & Isle of France",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Nanteuil de Pré, Louis de, chevalier, ingénieur, capitaine d'artillerie à Saint-Domingue, puis à Cayenne 1739/1764",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "military"
    },
    {
        "bio": "Neyon de Soizy, Alexandre Joseph, enseigne en pied des troupes entretenues à la Louisiane, puis capitaine à la Guadeloupe 1764/1779",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "military"
    },
    {
        "bio": "Neyon de Villiers, Pierre Joseph, capitaine en Louisiane, colonel au régiment de la Guadeloupe, gouverneur de Marie-Galante, mort pendant la traversée de son retour en France en 1780 1764/1788",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "Normand, écrivain des colonies à la Louisiane puis à Cayenne, commissaire des classes à Bayonne en 1779 1758/1779",
        "from": "Louisiana",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Noyelles, Charles Joseph de, comte, capitaine au Canada, capitaine des volontaires d'Afrique, mort en 1768 à Gorée 1773/1776",
        "from": "New France",
        "to": "Senegal",
        "tag": "military"
    },
    {
        "bio": "Nyon, Denis de, chevalier de Saint-Louis, gouverneur et ingénieur en chef à l'île de France 1700/1726",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Olivier, Jacques, exempt de maréchaussée à Saint-Domingue, puis canonnier à l'île de France 1778",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "Olivier, Joseph, chargé ci-devant du détail de l'artillerie au Canada, nommé garde-magasin principal à Port-au-Prince à Saint-Domingue 1781/1783",
        "from": "Caribbean",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Orte, Jean François Denis d', capitaine d'une compagnie d'ouvriers, et ingénieur en chef à l'île de Bourbon, inventeur d'un moulin à coton, demande à être employé à Saint-Domingue 1756/1787",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Palerne, Jean de, lieutenant de chasseurs au régiment de l'île de France, capitaine au régiment de Pondichéry 1772/1791",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Paradis, ingénieur aux îles de France et de Bourbon, ingénieur en chef à Mahé, Karikal et Pondichéry, commandant à Karikal 1740/1747",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "Pascaud, Joseph, natif du Bas-Poitou, ci-devant négociant à Québec, demande le brevet d'interprète du Roi pour la langue anglaise, au Cap-Français à Saint-Domingue 1782",
        "from": "Caribbean",
        "to": "New France",
        "tag": "other"
    },
    {
        "bio": "Patoulet de Mazy, Jean Baptiste, commissaire général de la Marine à Cayenne, intendant aux îles du Vent 1678/1680",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Peire, Philippe, marchand à Québec, et son frère Pierre Peire, marchand au Cap-Français, à Saint-Domingue 1719/1721",
        "from": "Caribbean",
        "to": "New France",
        "tag": "other"
    },
    {
        "bio": "Pelevilain de La Houssaye, Jean Richard, capitaine en Louisiane et à Louisbourg 1730/1775",
        "from": "New France",
        "to": "Louisiana",
        "tag": "military"
    },
    {
        "bio": "Périchon, chef de la loge de Mazulipatam, et ses frères, Périchon de Sainte-Marie, employé en second au même service, Périchon de Vaudeuil, conseiller au Conseil supérieur de Pondichéry, puis à celui de l'île de France, Périchon de Beauplan, lieutenant au régiment de l'île de France 1779/1786",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Perrault, Paul, major des milices du Canada, passé ensuite à Cayenne, Marie Josèphe de Lanouet, sa veuve, et Perrault (Paul Hyacinthe), leur fils 1761/1779",
        "from": "New France",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Petit, François, adjudant au régiment de l'Île Bourbon puis capitaine de la garde nationale à Pondichéry 1761/an X",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Philippe, Claude Guy, enseigne en Louisiane, puis lieutenant à Saint-Domingue 1766",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "Pichon, Paul, fusilier au régiment de Pondichéry en 1785, mort à l'hôpital de l'île de France le 22 octobre 1791 1791",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Pigeot de Louisbourg, Jean, procureur au Conseil supérieur de Port-au-Prince, procureur de la juridiction du Cap-Français à Saint-Domingue 1765/1775",
        "from": "Caribbean",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Plausot, Hubert, soldat au régiment de Pondichéry, mort à l'hôpital de l'île de France le 12 avril 1788 1788",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Poillevé, lieutenant des troupes de Louisiane et à Saint-Domingue 1765",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "Ponssy, Joseph de, officier des troupes de la Compagnie des Indes, à l'île Bourbon, major général des ville et fort de Pondichéry 1697/1743",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Potier de Pommeroy, René Gédéon, né au fort Frontenac au Canada le 7 septembre 1730, lieutenant des troupes du Canada, capitaine des troupes nationales de Cayenne, retiré en 1768 1730/1787",
        "from": "New France",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Proby, Claude François de, ancien lieutenant de milices à Saint-Domingue, demande ce grade à Cayenne 1778/1779",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Rambaud, Benoît Thérèse, lieutenant aux volontaires étrangers de la Marine, capitaine au régiment de Pondichéry, commandant particulier au Sénégal 1764/1787",
        "from": "India",
        "to": "Senegal",
        "tag": "officials"
    },
    {
        "bio": "Rambault de Barallon, Antoine Claude, capitaine des troupes du Canada, chevalier de Saint-Louis et sa veuve Marie Catherine Dusable 1762/1784",
        "from": "Caribbean",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Rastel de Rocheblave, Pierre Louis, gouverneur de Gorée (1769-1773), lieutenant de roi à Saint-Domingue, mort en 1780 1769/1780",
        "from": "Caribbean",
        "to": "Senegal",
        "tag": "officials"
    },
    {
        "bio": "Régis, capitaine en Louisiane et à Cayenne 1734/1750",
        "from": "Louisiana",
        "to": "Guyana",
        "tag": "military"
    },
    {
        "bio": "Ribet, Jacques Antoine, demande une place de médecin à la Martinique ou à l'île de Bourbon 1780",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "Richard, Louis, naturaliste du Roi à la Martinique et à Cayenne 1781/1792",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Rittier, Barthélemy, maître en chirurgie à Léogane, à Saint-Domingue, et Taillard de Pizoé (Marie-Hélène Pétronille) sa femme, veuve en premières noces de Grémauld (François Adrien) écrivain de la Marine à l'île de France 1784",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Romain, créole de la Guadeloupe, ayant résidé à Cayenne 1763/1777",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "other"
    },
    {
        "bio": "Rossignol de Combier, Dominique de, lieutenant au régiment de l'île de France, et Charles Joseph de Brousse, ancien capitaine aide-major au régiment d'Aunis, ayant fait la guerre à Pondichéry, avec le régiment de Lorraine, et qui demande à être employé avec son grade aux colonies 1759/1785",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Rousseau, capitaine d'un navire de commerce parti de Saint-Domingue pour la Louisiane 1754",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "military"
    },
    {
        "bio": "Rustan, Pascal Fabre, ancien officier des troupes du Canada, garde-magasin à Pointe-à-Pitre à la Guadeloupe 1752/1788",
        "from": "Caribbean",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Sabran-Beaudinar, Pierre Bruno de, chevalier, major à la Mobile en Louisiane puis à Saint-Domingue 1735/1741",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "other"
    },
    {
        "bio": "Sabrevois, Charles de, capitaine au Canada, puis à l'île Bourbon 1734/1783",
        "from": "Isle Bourbon & Isle of France",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Salles de Neuilly, de, ancien gendarme de la compagnie des chevau-légers de la Reine, auteur d'un ouvrage sur la Floride, Cayenne et le Sénégal 1787",
        "from": "Guyana",
        "to": "Senegal",
        "tag": "other"
    },
    {
        "bio": "Salz, Bernard, soldat au régiment de Pondichéry, mort à l'hôpital royal de l'île de France le 16 novembre 1788 1788",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Sanguin de Gassonville, Thomas, capitaine des troupes de la Compagnie des Indes à Bourbon, Pondichéry, Chandernagor 1738/1740",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Sénégal, Louis, dit Lebrun, commissaire du Roi pour la Compagnie des Indes, mort à l'île de France à Port-Louis le 22 décembre 1773 1773/1782",
        "from": "Isle Bourbon & Isle of France",
        "to": "Senegal",
        "tag": "officials"
    },
    {
        "bio": "Simonnet de Maisonneuve, Louis, capitaine au régiment de Pondichéry à l'île de France 1785",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Sonnerat, sous-commissaire des colonies, employé à Pondichéry et à l'île de France, administrateur du jardin des Plantes après 1778",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Sornay, Pierre Basile de, major de milices à l'île de France puis ingénieur à Pondichéry 1727/an VII",
        "from": "India",
        "to": "Isle Bourbon & Isle of France",
        "tag": "other"
    },
    {
        "bio": "Testard de Montigny, Jean Baptiste Philippe, né le 15 juin 1724 à Montréal, fils de Jacques, capitaine dans les troupes du Canada, 1er avril 1753, chevalier de Saint-Louis, 4 fils : Jérémie, Jean-Baptiste, Étienne et François-Marie 1761/1788",
        "from": "Caribbean",
        "to": "New France",
        "tag": "military"
    },
    {
        "bio": "Thomas de Périndorge, Paul, conseiller-assesseur au Conseil supérieur de l'île de Bourbon, ordonnateur aux îles de Saint-Pierre et Miquelon, employé des Domaines nationaux, à Saint-Domingue 1787/an XI",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "officials"
    },
    {
        "bio": "Tizoneaux, commis à la comptabilité de la Louisiane, puis écrivain de la Marine, à Saint-Domingue 1774/1778",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "officials"
    },
    {
        "bio": "Tourton de Clairefontaine, commis au Canada et à Saint-Domingue 1743/1765",
        "from": "Caribbean",
        "to": "New France",
        "tag": "other"
    },
    {
        "bio": "Treyvoux, Georges, armurier au Canada et à la Martinique 1747/1792",
        "from": "Caribbean",
        "to": "New France",
        "tag": "other"
    },
    {
        "bio": "Trottier Des Ruisseaux, Joseph, seigneur, demeurant à la Chine, en l'île de Montréal, au Canada, vente à lui faite par enfant et héritier de Lemoyne Charles, écuyer, vivant seigneur de Longueuil et de Catherine Primot, de la terre, fief et seigneurie de l'île Perrot, située au haut du lac Saint-Louis, qui leur est échue par la succession de leurs père et mère, lesquels l'avaient acquise en 1684 de Perrot (François Marie) gouverneur de Montréal, mort en 1687, lequel l'avait reçue en concession de Talon Jean ci-devant intendant au Canada 1703",
        "from": "Caribbean",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Vassal, Charles Louis, avocat au Parlement, demande un emploi de judicature à Saint-Domingue, devient écrivain ordinaire des colonies, à Cayenne 1778/1785",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "officials"
    },
    {
        "bio": "Verdière, Philippe Joseph Xavier de, capitaine au régiment de Port-au-Prince à Saint-Domingue, puis à celui de l'île de France 1777/1785",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Vernier, Claude Louis, natif de Romilly-sur-Seine, ancien canonnier au régiment de l'île de France, et André Benard, habitant de la Martinique 1788",
        "from": "Caribbean",
        "to": "Isle Bourbon & Isle of France",
        "tag": "military"
    },
    {
        "bio": "Verret, Joseph, ancien habitant de la Louisiane, entrepreneur de moulins à sucre à Saint-Domingue 1781/1782",
        "from": "Caribbean",
        "to": "Louisiana",
        "tag": "other"
    },
    {
        "bio": "Villeray, ancien officier au Canada, sous-lieutenant à Saint-Domingue 1765",
        "from": "Caribbean",
        "to": "New France",
        "tag": "officials"
    },
    {
        "bio": "Villotte, Pierre, navigateur de Louisbourg, établi au Cap-Français, à Saint-Domingue 1732",
        "from": "Caribbean",
        "to": "New France",
        "tag": "other"
    },
    {
        "bio": "Vincelotte de Sainte-Hélène, originaire du Canada, habitante de la Martinique 1781/1783",
        "from": "Caribbean",
        "to": "New France",
        "tag": "other"
    },
    {
        "bio": "Vlieghe, ancien capitaine de milices, armateur et négociant à Cayenne et à Saint-Domingue 1788",
        "from": "Caribbean",
        "to": "Guyana",
        "tag": "military"
    }
];

// add connections to metropole
const moreEdges = [];
const seen = new Set();
OFFICIALS_LINKS.forEach(e => {
    if (seen.has(e.bio)) {
        return;
    }
    seen.add(e.bio);
    moreEdges.push({
        ...e,
        from: "France",
        to: e.from
    });
});
OFFICIALS_LINKS = OFFICIALS_LINKS.concat(moreEdges);

const OFFICIALS_SIMPLIFIED_EDGES = (() => {
    const output = [];
    const counts = {};
    OFFICIALS_LINKS.forEach(e => {
        const key = `${e.tag}:${e.from}:${e.to}`;
        if (!counts.hasOwnProperty(key)) {
            counts[key] = 0;
        }
        counts[key]++;
    });

    Object.keys(counts).forEach((key, index) => {
        const keyParts = key.split(':');
        output.push({
            id: `e${index}`,
            source: keyParts[1],
            target: keyParts[2],
            tag: keyParts[0],
            color: OFFICIALS_TAGS_TO_COLORS[keyParts[0]].color,
            size: counts[key] / 3,
        });
    });

    return output;
})();