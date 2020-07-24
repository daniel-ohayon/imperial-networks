const OFFICIALS_LINKS = [
    {
        bio: 'Lépinay, Jean Michel de, né vers 1665, départ pour le Canada en enseigne en 1687, promu lieutenant en 1687, puis capitaine en 1691 au Canada. Rrtour en France en 1695, pui gouverneur de la Louisiane à partir de 1716, puis de la Grenade aux Antilles en 1717. Mort en Martinique en 1721. ',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: null,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Lépinay, Jean Michel de, né vers 1665, départ pour le Canada en enseigne en 1687, promu lieutenant en 1687, puis capitaine en 1691 au Canada. Rrtour en France en 1695, pui gouverneur de la Louisiane à partir de 1716, puis de la Grenade aux Antilles en 1717. Mort en Martinique en 1721. ',
        from: 'New France',
        to: 'Louisiana',
        through_metropole: null,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Charanville, voyage dans les colonies françaises de l\'Amérique en 1699, sous brigadier des gardes des la marine, arrive à Pondicheéry en 1704, fait major de la place et des troupes en 1708, gouverneur à l\'Île Bourbon à partir de 1709, repasse en France en 1710, nommé pour servir à Cayenne en 1711, y arrive en 1713, y devient capitaine, puis major en 1727 et lieutenant en 1729. Mort en 1730 ',
        from: 'Isle Bourbon & Isle of France',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Forcade, Pierre de, commissaire de la Marine, travaille à la greffe et notariat de la juridiction de Saint Domingue à partir de 1713, ses intérêts à Saint-Domingue et à Cayenne 1719/1742',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Jousselin de Marigny, capitaine des troupes entretenues au Canada, puis à Saint-Domingue en 1716',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Beauvoillier de Courchant, gouverneur de l\'île Bourbon à partir de 1718, puis de Pondichéry à partir de 1723',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Escairac, d\', entre au service en 1718, capitaine des troupes du Canada, puis major du Port-de-Paix à Saint-Domingue 1725/1748',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'L\'Isle, sous-lieutenant des troupes de la Louisiane, passé à Saint-Domingue vers 1718/1726',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Régis, en service dans les colonies à partir de 1719, lieuntenant de Dragons en Louisiane à partir de 1724 ou il conduit les négotiations avec les Choctaws en 1729, puis capitaine en pied à Cayenne. Demande à se retirer en 1747. ',
        from: 'Louisiana',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'La Longueville, de, chevalier, lieutenant des troupes du Canada, puis capitaine des troupes de la Louisiane 1720, demande une lieutenance aux Îles du Vent des Antilles, potentiel poste pour lui en Martinique',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'La Longueville, de, chevalier, lieutenant des troupes du Canada, puis capitaine des troupes de la Louisiane 1720, demande une lieutenance aux Îles du Vent des Antilles, potentiel poste pour lui en Martinique',
        from: 'New France',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Le Gardeur de Repentigny, Louis, comte, né en 1721 à Montréal, second enseigne des troupes puis lieutenant en 1751 et capitaine en 1759  en Nouvelle France, colonel des régiments de l\'Amérique en 1773 , de la Guadeloupe quatre ans plus tard puis de la Martinique, gouverneur du Sénégal à partir de 1783',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Le Gardeur de Repentigny, Louis, comte, né en 1721 à Montréal, second enseigne des troupes puis lieutenant en 1751 et capitaine en 1759  en Nouvelle France, colonel des régiments de l\'Amérique en 1773 , de la Guadeloupe quatre ans plus tard puis de la Martinique, gouverneur du Sénégal à partir de 1783',
        from: 'New France',
        to: 'Senegal',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Sanguin de Gassonville, Thomas, né vers 1697, entre au service de la compagnie en 1723, aide major de Bourbon jusqu\'en 1725, passe à Pondichery et y travail comme aide major jusqu\'en 1726, fait capitaine en 1726 et le reste au moins jusqu\'en 1740, puis capitaine a Chandernagor en 1740',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Hochereau de Gassonville, aide-major à l\'île de Bourbon et à Pondichéry en 1724',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'other'
    },
    {
        bio: 'Durand, ci-devant garde-magasin de la Compagnie des Indes, à la Louisiane, prévaricateur passé à Saint-Domingue après 1725',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Cresnay, de, baron, commandant des troupes à la Louisiane en 1730, Lieutenant à la Mobile en 1731, puis à Cayenne en 1734, mort à Cayenne en 1736',
        from: 'Louisiana',
        to: 'Guyana',
        through_metropole: null,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'La Rouvillière de Villebois, Honoré Michel de, commisaire ordinaire de la Marine au Canada de 1730 à 1747 puis à la Louisiane de 1748 à 1752',
        from: 'New France',
        to: 'Louisiana',
        through_metropole: null,
        tag: 'before_1763',
        category: 'other'
    },
    {
        bio: 'Pelevilain de La Houssaye, Jean Richard, cadet, enseigne puis lieutenant  en Louisiane , depart de France en 1730, et capitaine  à Louisbourg à partir de 1750',
        from: 'New France',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Potier de Pommeroy, René Gédéon, né au fort Frontenac au Canada le 7 septembre 1730, cadet dans les troupe de fort royal à partir de 1742, officier en 1749, sous aide major en 1750, capitaine en 1754 puis lieutenant en 1755, capitaine des troupes nationales de Cayenne, retiré en 1768',
        from: 'New France',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'David, Pierre Félix Barthélemy, entre au service de la compagnie des Indes en 1729, envoyé sous inspecteur au Sénégal en 1732, Inspecteur en second du directeur général en 1733,  repasse en France en 1737, nommé gouverneur général du Sénégal à partir de 1742, en 1746, nommé à la gouvernance des l\'Îles Bourbon et de France, passe en France en 1753',
        from: 'Isle Bourbon & Isle of France',
        to: 'Senegal',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Destanchau, capitaine des troupes de Saint-Domingue à partir de 1732, et capitaine réformé des troupes au Canada ',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Membrède, de, lieutenant à la Louisiane en 1732, puis capitaine en 1733, puis major à la Nouvelle-Orléans, à la Louisiane 1746-1747, puis lieutenant de roi à Saint-Domingue 1770, mort à Saint Domingue en 1770',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Paradis, entre au service de la Compagnie des Indes en 1732, d\'abord en qualité d\'ingénieur aux îles de France et de Bourbon, puis ingénieur en chef à Mahé, Karikal et Pondichéry, puis commandant à Karikal 1à partir de 1744',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: null,
        tag: 'before_1763',
        category: 'other'
    },
    {
        bio: 'Ponssy, Joseph de, rentre au service de la compagnie des Indes avec un brevet d\'infantrie à l\'Île Bourbon en 1732, commission de capitaine en 1740, passe du temps à l\'Île de France puis à Pondichery en 1741 et 1742, major général des ville et fort de Pondichéry  en 1743, reconnu la même année major générak des troupes de l\'Île de France',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Villotte, Pierre, navigateur en provenance de Louisbourg, arrive au Cap-Français, à Saint-Domingue en 1732, il y demeure habituellement',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'other'
    },
    {
        bio: 'Eyma, Joseph Aima d\', en service à partir de 1734. Capitaine dans les troupes du Canada, puis dans la légion de Saint-Domingue ',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Gamon de La Rochette, Joseph, en service à partir de 1734. Major au Port-de-Paix à Saint-Domingue,capitaine des troupes de la Louisiane à partir de 1753 ',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Noyelles, Charles Joseph de, comte, en service en tant que cadet en 1734. Campagne contre le Chickasaw en Louisiane en 1739, enseigne en second au Canada en 1744, commandant du fort à Michilimackinac, puis gouverneur de Montréal en 1748, Ensigne en pied en 1749, puis lieutenant en 1756, fait de muliples campagnes au Canada, à Cayenne en 1765, capitaine des volontaires d\'Afrique, mort en 1768 à Gorée ',
        from: 'New France',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Noyelles, Charles Joseph de, comte, en service en tant que cadet en 1734. Campagne contre le Chickasaw en Louisiane en 1739, enseigne en second au Canada en 1744, commandant du fort à Michilimackinac, puis gouverneur de Montréal en 1748, Ensigne en pied en 1749, puis lieutenant en 1756, fait de muliples campagnes au Canada, à Cayenne en 1765, capitaine des volontaires d\'Afrique, mort en 1768 à Gorée ',
        from: 'Louisiana',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Noyelles, Charles Joseph de, comte, en service en tant que cadet en 1734. Campagne contre le Chickasaw en Louisiane en 1739, enseigne en second au Canada en 1744, commandant du fort à Michilimackinac, puis gouverneur de Montréal en 1748, Ensigne en pied en 1749, puis lieutenant en 1756, fait de muliples campagnes au Canada, à Cayenne en 1765, capitaine des volontaires d\'Afrique, mort en 1768 à Gorée ',
        from: 'Guyana',
        to: 'Senegal',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Sabrevois de Bleury, Charles de, né en 1734 au Canada, cadet des troupes au Canada, enseigne en second à l\'Île Royale en 1750, Lieutenant en 1759, et Capitaine en 1766, puis capitaine réformé du régiment de l\'ïle Bourbon à partir de 1775',
        from: 'Isle Bourbon & Isle of France',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Catalogne, Charles Gédéon de, né à Louisbourg le 14 février 1735, entré au service à Louisbourg en 1749, passe au canada en 1757, en 1764 passe à Cayenne, puis lieutenant au régiment du Port-au-Prince, capitaine aide-major aux Cayes (Saint-Domingue) ',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: null,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Catalogne, Charles Gédéon de, né à Louisbourg le 14 février 1735, entré au service à Louisbourg en 1749, passe au canada en 1757, en 1764 passe à Cayenne, puis lieutenant au régiment du Port-au-Prince, capitaine aide-major aux Cayes (Saint-Domingue) ',
        from: 'New France',
        to: 'Guyana',
        through_metropole: null,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Du Plessis, Jean Baptiste Vigoureux, né à Chandernagor le 6 mai 1735, lieutenant-colonel d\'infanterie, commandant à Mahé, 1778, gouverneur de l\'île Saint-Vincent aux Antilles, 1780, brigadier des armées du Roi, 1784, gouverneur de l\'île de Bourbon 1771/1814',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Hertel de Cournoyer, Michel, né à l\'île Royale en 1735, mort à Cayenne, en 1780, cadet à l\'île Royale, enseigne au Canada, aide-major des troupes nationales de la Guyane 1716/1782',
        from: 'New France',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Sabran-Beaudinar, Pierre Bruno de, chevalier, enseigne en second à la Louisiane en 1735, major à la Mobile en Louisiane en 1736,  puis à Saint-Domingue 1735/1741',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'other'
    },
    {
        bio: 'Dagneaux-Douville, Alexandre René, né au Canada en 1736, ayant servi dans cette colonie, ensuite capitaine au régiment de la Guadeloupe, commandant en second les îles Saint-Martin et Saint-Barthélemy, retiré lieutenant-colonel d\'infanterie',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Boullot, Pierre, capitaine de navires marchands en voyage entre la Martinique, Louisbourg, Quebec et la France entre 1737 et 1753. Habitant à Louisbourg entre 1753 et 1758, puis reste en France jusqu\'en 1763, quand il part pour Saint Pierre et Miquelon ',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Guyon, Jean Baptiste Régis de, né en 1737 à Québec au Canada, à servit à Saint Domingue, pui en tant que capitaine d\'Infanterie à l\'île de France 1752/an VI',
        from: 'Isle Bourbon & Isle of France',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Decous, Henry,  navigateur. Il fait des campagnes à la Martinique en 1738 et 1740 en tant que volontaire sur un navire. En 1742, Il fait une autre campagne à la Martinique en qualité de lieutenant en second sur un navire. En 1747, il fait campagne au Canada sur un bateau en qualité de capitaine en second. En 1749, il fait campagne à Saint Domingue sur un navire en qualité de second capitaine. EN 1750, il fait un voyage à la Louisiane. Il reste en Louisiane et y occuppe la position de major des milices pendant 8 ans. Il devient ensuite lieutenant de port à Saint-Pierre, à la Martinique.',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Decous, Henry,  navigateur. Il fait des campagnes à la Martinique en 1738 et 1740 en tant que volontaire sur un navire. En 1742, Il fait une autre campagne à la Martinique en qualité de lieutenant en second sur un navire. En 1747, il fait campagne au Canada sur un bateau en qualité de capitaine en second. En 1749, il fait campagne à Saint Domingue sur un navire en qualité de second capitaine. EN 1750, il fait un voyage à la Louisiane. Il reste en Louisiane et y occuppe la position de major des milices pendant 8 ans. Il devient ensuite lieutenant de port à Saint-Pierre, à la Martinique.',
        from: 'New France',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Ailleboust de Céry, Philippe Antoine d\',  né à Quebec en 1739, entré au service vers 1748, bléssé en 1759, enseigne dans les troupes du Canada, lieutenant à Montréal, puis capitaine dans la légion de Saint-Domingue 1766',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Marchant Des Ligneris, Constant François Xavier Daniel, né au Canada en 1739, cadet dans les troupes de cette colonie en 1750, enseigne en second au Canada à partir de 1757, puis à partir de 1760 enseigne en Canada, lieutenant dans la légion de Saint-Domingue à partir de 1766, capitaine en 1769 puis second capitaine commandant en 1785 ',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Du Breuil-Villars, Alexandre, né à la Nouvelle Orléans en 1742, enseigne des troupes entretenues à la Louisiane, capitaine au régiment de la Guadeloupe ',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Le Moyne, Antoine Philippe, contrôleur à la Martinique à partir de 1742, ordonnateur à Cayenne et commissaire général de la marine à Rochefort ',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Du Roullin, Pierre Claude, en service à partir de 1742. Lieutenant dans les troupes de la Louisiane, capitaine au régiment de la Guadeloupe, major en 1779 ',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Foucault, Denis Nicolas, écrivain principal de la Marine à partir de 1742, ordonnateur à la Louisiane et à Pondichéry, commissaire général ordonnateur faisant fonctions d\'intendant à l\'île de France ',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: null,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Foucault, Denis Nicolas, écrivain principal de la Marine à partir de 1742, ordonnateur à la Louisiane et à Pondichéry, commissaire général ordonnateur faisant fonctions d\'intendant à l\'île de France ',
        from: 'Isle Bourbon & Isle of France',
        to: 'Louisiana',
        through_metropole: null,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Espinette, Charles François d\', entre en service en 1743. Major de la légion de l\'île de France, puis du régiment de Pondichéry, avec brevet de lieutenant-colonel 1770/1776',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Gosse, Mathias Claude, ancien consul à Bassorah, conseiller à Pondichéry en 1743 et à l\'Île de France en 1750',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Marchant Des Ligneris, Pierre Marie, chevalier, né au Canada, en 1743, entre au service en qualité de cadet en 1753, fait enseigne en Louisiane en 1762, incorporé aux troupe de Cayenne en 1764, fait lieutenant en 1769, incorporé dans la légion de Saint Domingue en 1772, fait capitaine au l au régiment de Port-au-Prince en 1773',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Marchant Des Ligneris, Pierre Marie, chevalier, né au Canada, en 1743, entre au service en qualité de cadet en 1753, fait enseigne en Louisiane en 1762, incorporé aux troupe de Cayenne en 1764, fait lieutenant en 1769, incorporé dans la légion de Saint Domingue en 1772, fait capitaine au l au régiment de Port-au-Prince en 1773',
        from: 'New France',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Marchant Des Ligneris, Pierre Marie, chevalier, né au Canada, en 1743, entre au service en qualité de cadet en 1753, fait enseigne en Louisiane en 1762, incorporé aux troupe de Cayenne en 1764, fait lieutenant en 1769, incorporé dans la légion de Saint Domingue en 1772, fait capitaine au l au régiment de Port-au-Prince en 1773',
        from: 'Louisiana',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Charly, de, cadet au Québec à partir de 1744, enseigne à Louisbourg à partir de 1749, puis major des troupes en 1750, brevet d\'aide-major den 1759, continue ses service jusqu\'à la prise du Canada, puis major de l\'île de Gorée',
        from: 'New France',
        to: 'Senegal',
        through_metropole: null,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Dupont Du Chambon, Charles François Ferdinand, entre au service en 1744. Lieutenant des troupes détachées de la Marine au Canada et à l\'île Royale, capitaine au régiment de Foix, à Saint-Domingue 1777',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Fontaine, Jean Baptiste, capitaine d\'artillerie à l\'île de France, entre au service en 1744. Commandant l\'artillerie de Pondichéry, major des troupes des colonies 1727/1791',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Desvaulx, Nicolas Jacques, né à Chandernagor en 1745, passe en France, renvoyé aux indes avec commission de capitaine en 1771, capitaine commandant d\'une compagnie d\'artillerie à Pondichéry en 1777, à l\'Île de France entre 1781 à 1786, où il est capitaine d\'artillerie,   fait lieutenant colonel en 1787',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Lecodé, Yves, natif de Louisbourg, devient mousse de bateaux en 1745, voyages en France, puis au Port Louis de l\'Île de France en 1746 et à l\'Orient en 1747, devient maitre d\'équipage en 1749,  cammandant en 1750, pilote cotier en 1757, envoyé au Fort Dauphine en 1758 pour y piloter les vaisseaux du roi, puis au Quebec la même année. Il arrive à Cayenne en 1764 avec sa famille et y devient maître de port en 1767. ',
        from: 'Isle Bourbon & Isle of France',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'other'
    },
    {
        bio: 'Lecodé, Yves, natif de Louisbourg, devient mousse de bateaux en 1745, voyages en France, puis au Port Louis de l\'Île de France en 1746 et à l\'Orient en 1747, devient maitre d\'équipage en 1749,  cammandant en 1750, pilote cotier en 1757, envoyé au Fort Dauphine en 1758 pour y piloter les vaisseaux du roi, puis au Quebec la même année. Il arrive à Cayenne en 1764 avec sa famille et y devient maître de port en 1767. ',
        from: 'New France',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'other'
    },
    {
        bio: 'Hazeur de Lorme, Louis, né à la Louisiane en 1746, capitaine au régiment de la Guadeloupe puis commandant particulier par intérim à Tabago en 1785 1754/1792',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Ailleboust de Saint-Vilmé, Jean Baptiste d\', cadet et enseigne dans les compagnie de la Marine à l\'Île Royale en 1747 et 1749, puis Lieutenant en 1757, employé pendant le siege de Louisbourg en 1758, nommé à une compagnie des troupes nationales à Cayenne en 1764, authorisé à passer à Gorée en 1768,  lieutenant de roi à Saint-Louis ',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Ailleboust de Saint-Vilmé, Jean Baptiste d\', cadet et enseigne dans les compagnie de la Marine à l\'Île Royale en 1747 et 1749, puis Lieutenant en 1757, employé pendant le siege de Louisbourg en 1758, nommé à une compagnie des troupes nationales à Cayenne en 1764, authorisé à passer à Gorée en 1768,  lieutenant de roi à Saint-Louis ',
        from: 'New France',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Ailleboust de Saint-Vilmé, Jean Baptiste d\', cadet et enseigne dans les compagnie de la Marine à l\'Île Royale en 1747 et 1749, puis Lieutenant en 1757, employé pendant le siege de Louisbourg en 1758, nommé à une compagnie des troupes nationales à Cayenne en 1764, authorisé à passer à Gorée en 1768,  lieutenant de roi à Saint-Louis ',
        from: 'Guyana',
        to: 'Senegal',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Hertel de Saint-Francois, Antoine, né en Canada, entre au service cadet en 1747, fait officier à Louisbourg en 1751, nommé à une lieutenance dans la légion de l\'Île de France en 1767 et devient capitain en 1770.',
        from: 'Isle Bourbon & Isle of France',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Treyvoux, Georges, armurier au Canada en 1747, puis à la Martinique ',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: null,
        tag: 'before_1763',
        category: 'other'
    },
    {
        bio: 'Rastel de Rocheblave, Pierre Louis, passe au Canada en 1749 ou il travail en tant que cadet, envoyé aux Illinois en 1759, nommé  gouverneur de Gorée en 1769, lieutenant de roi à Saint-Domingue à partir de 1775, mort en 1780',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Rastel de Rocheblave, Pierre Louis, passe au Canada en 1749 ou il travail en tant que cadet, envoyé aux Illinois en 1759, nommé  gouverneur de Gorée en 1769, lieutenant de roi à Saint-Domingue à partir de 1775, mort en 1780',
        from: 'New France',
        to: 'Senegal',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Legros de La Grancours, Honoré Michel, commence le service dans la gendarmerie en 1742, passe au Canada en 1750 pour servir dans la guerre, enseigne à la Louisiane à partir de 1758, repasse en France en 1769, puis capitaine au régiment de l\'île de France , voyage en Inde à Pondicherry',
        from: 'Isle Bourbon & Isle of France',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Legros de La Grancours, Honoré Michel, commence le service dans la gendarmerie en 1742, passe au Canada en 1750 pour servir dans la guerre, enseigne à la Louisiane à partir de 1758, repasse en France en 1769, puis capitaine au régiment de l\'île de France , voyage en Inde à Pondicherry',
        from: 'New France',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Meyracq, Laurent Domenger de, nommé bailli au bailliage royal de Louisbourg à l\'île Royale en 1750, puis nommé juge de l\'amirauté à la Guadeloupe en 1767',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Neyon de Villiers, Pierre Joseph, arrive en Louisiane en 1750, major commandant au pays des Illinois à partir de 1755, retourne en France en 1764, fait colonel au régiment de la Guadeloupe en 1772, gouverneur de Marie-Galante à partir de 1775, mort pendant la traversée de son retour en France en 1780 ',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Romain, créole de la Guadeloupe, appliqué au commerce Maritime, ayant résidé à Cayenne pendant 12 ans à partir des années 1750 ',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'other'
    },
    {
        bio: 'Sornay, Pierre Basile de, né en 1727, au service de la Marine à partir de 1746, passe à Pondichéry en 1750, prend service dans les troupes de la Compagnie des Indes en qualité d\'ingénieur et d\'officier d\'infantrie, capitaine à partir de 1759, commandant à la suite des milices de l\'Île de france à partir de 1769, puis major à l\'Île de France à partir de 1772 ',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Courville, Jean Benoist de, né à Montréal le 8 décembre 1751, lieutenant au régiment de la Martinique, puis capitaine au régiment de la Guadeloupe ',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Duparquier, Alexandre Claude, arrive en Louisiane en 1751.  Garde-magasin général du Roi à la Louisiane, puis chargé du bureau des classes à Saint-Domingue 1754/1775',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Olivier, Joseph, commis aux ecritures à Québec à partir de 1751, puischargé du détail de l\'artillerie dans la même colonie à partir de 1752, retour en France en 1760 nommé garde-magasin principal à Port-au-Prince à Saint-Domingue à partir de 1786',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Albergati-Vezza, François Marie, marquis, cadet au Canada à partir de 1752, enseigne en 1756, lieutenant en 1767 puis capitaine de légion à l\'île de France 1760/1773',
        from: 'Isle Bourbon & Isle of France',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Billouard Dessalles de Kervaségan, René Antoine Agathe, né en 1736, campagne volontaire et enseigne au service des la compagnie dans les Indes Orientales de 1752 à 1755, puis enseigne des troupes de la Louisiane en 1760, passe à Saint Domingue en 1766, puis officier puis capitaine au régiment de la Guadeloupe à partir de 1775',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Guyon, Jean Baptiste de, né en 1739, aide major au Canada en 1752, puis cadet d\'artillerie en 1757 et sous major d\'artillerie en 1758 toujours au Canada, renvoyé en France en 1760, puis sous aide major des compagnie d\'artillerie à Saint Domingue en 1762, passe en France en 1764,  puis lieutenant en second d\'artillerie à l\'Île de France en 1771 et passe comme sous lieutenant dans la même île en 1777',
        from: 'Isle Bourbon & Isle of France',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Orte, Jean François Denis d\', capitaine d\'une compagnie d\'ouvriers et ingénieur en chef à l\'île de Bourbonà partir de 1752  jusqu\'en 1767, inventeur d\'un moulin à coton, demande à être employé à Saint-Domingue en 1786',
        from: 'Caribbean',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Rustan, Pascal Fabre, lieutenant et capitaine en Canada de 1752 à 1760, passage en France, puis garde-magasin à Pointe-à-Pitre à la Guadeloupe à partir de 1781',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Briard, Jean, prêtre du diocèse de Coutances, nommé missionnaire au Sénégal en 1753, devient prêtre à Saint-Domingue vers 1763',
        from: 'Caribbean',
        to: 'Senegal',
        through_metropole: null,
        tag: 'before_1763',
        category: 'other'
    },
    {
        bio: 'Tizoneaux, employé dans les Bureaux de la Marine en Louisiane à partir de 1753, notaire en Louisiane à partir de 1758, chargé des comptes des gardes magasins de la Louisiane à partir de 1764, commis à la comptabilité de la Louisiane, nommé écrivain de la Marine, à Saint-Domingue à partir de 1774',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Champfort de Longueval, Nicolas, lieutenant et enseigne des troupes de la Louisiane à partir de c. 1754  jusqu\'en 1763, réfugié à Saint-Domingue en 1773',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Cadet de Fontenay, Pierre François, né à Paris, arrive au Canada en 1755 en qualité de cadet, puis aide major en 1755, officier en 1757, puis enseigne en 1758, passe à Cayenne en 1764 en qualité de Lieutenant sous aide major, lieutenant d\'une compagnie d\'ouvrier à l\'Île de France en 1769, puis lieutenant avec commission de capitaine au régiment de Port Louis en 1772 et capitaine en 1775, voyage dans l\'Inde evers 1785',
        from: 'Isle Bourbon & Isle of France',
        to: 'New France',
        through_metropole: null,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Cadet de Fontenay, Pierre François, né à Paris, arrive au Canada en 1755 en qualité de cadet, puis aide major en 1755, officier en 1757, puis enseigne en 1758, passe à Cayenne en 1764 en qualité de Lieutenant sous aide major, lieutenant d\'une compagnie d\'ouvrier à l\'Île de France en 1769, puis lieutenant avec commission de capitaine au régiment de Port Louis en 1772 et capitaine en 1775, voyage dans l\'Inde evers 1785',
        from: 'New France',
        to: 'Guyana',
        through_metropole: null,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Donnadieu de Pélissier Dugrès, Louis Joseph, chevalier, départ pour Louisbourg avec un bataillon en 1755, il obtient en 1764 un commission de capitaine à la suite des troupes nationales de la Guyane, à Cayenne, il fait les fonction d\'aide major des troupes. En 1769, fait aide major à Saint Domingue',
        from: 'New France',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Gohin, Pierre André de, chevalier de Montreuil, major général à Montréal au Canada en 1755, puis gouverneur général, par intérim de Saint-Domingue à partir de 1763',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Lépervanche, Eustache de, commence à servir au Canada en 1755 en tant que cadet, fait enseigne des troupes du Canada en 1759,fait lieutenant dans la légion de l\'Île de France en 1766 puis lieutenant dans la même legion en 1766, passe en la même qualité au régiment de l\'Île Bourbon capitaine au régiment de Bourbon, passe capitaine au régimen de l\'Île Bourbon en 1785, obtient sa retraite en 1786.',
        from: 'Isle Bourbon & Isle of France',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Magon de La Villebague, René,  gouverneur des îles de France et de Bourbon de 1755 à 1759, intendant de Saint-Domingue de 1763 à 1766. Plusieurs membres de sa famille ont fait carrière dans les colonies. ',
        from: 'Caribbean',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Morin, Jean Antoine Charles, cadet dans les troupes de Louisbourg à partir de 1755, nommé cadet dans les troupes nationales de Guyane en 1764, sous lieutenant au régiment de la Guadeloupe depart en 1775, demande une place dans les bureaux de l\'île de France, passage en 1784',
        from: 'Caribbean',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Morin, Jean Antoine Charles, cadet dans les troupes de Louisbourg à partir de 1755, nommé cadet dans les troupes nationales de Guyane en 1764, sous lieutenant au régiment de la Guadeloupe depart en 1775, demande une place dans les bureaux de l\'île de France, passage en 1784',
        from: 'Isle Bourbon & Isle of France',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Perrault, Paul, major des milices du Canada à partir de 1756 jusqu\'à la capitulation, passé ensuite à Cayenne ou il meurt ',
        from: 'New France',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'other'
    },
    {
        bio: 'Vincelotte de Sainte-Hélène, originaire du Canada, née à la Martinique, a perdu sa fortune au Canada pendant la guerre de 1756 et les évènements qui ont suivis',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: null,
        tag: 'before_1763',
        category: 'other'
    },
    {
        bio: 'Allemagne de Varage, Louis d\', chevalier, né en 1740, capitaine au régiment d\'Angoumois, ayant fait campagne à la Louisiane vers 1757, passe à Saint-Domingue vers 1786, demande une compagnie dans un régiment des colonies ou un emploi dans un état-major des Iles ',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Durseau, Jean,  habitant du Canada à partir d\'avant 1757 demande de secours et de passage à Saint-Domingue ou à la Martinique en 1763',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: null,
        tag: 'before_1763',
        category: 'other'
    },
    {
        bio: 'Godefroy de Linetot, Maurice Régis, né à Montréal, entre au service au Canada en 1757, puis capitaine aux régiments de l\'île de France, bléssé à Madagascar, mission aux Indies Orientales, 1757/1785',
        from: 'Isle Bourbon & Isle of France',
        to: 'New France',
        through_metropole: null,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Neyon de Soizy, Alexandre Joseph, cadet en Louisiane en 1757, puis lieutenant/sous aide major en Guadeloupe en 1772 et capitaine dans la même colonie à partir de 1774',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Dazille, Jean Barthélemy, chirurgien, voyages au Canada à partir de 1758, en 1763, il obtient un brevet de chirurgien major des troupes et des habitans de Cayenne, puis en 1766, il obtient un brevet de chirurgien major des hopiteaux de l\'Île de France, puis chirurgien du roi à Saint Domingue',
        from: 'Isle Bourbon & Isle of France',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Dazille, Jean Barthélemy, chirurgien, voyages au Canada à partir de 1758, en 1763, il obtient un brevet de chirurgien major des troupes et des habitans de Cayenne, puis en 1766, il obtient un brevet de chirurgien major des hopiteaux de l\'Île de France, puis chirurgien du roi à Saint Domingue',
        from: 'New France',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Foubert, enseigne dans les troupes du Canada, demande à passer à la Louisiane en 1758',
        from: 'New France',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Normand, écrivain des colonies à la Louisiane à partir de 1758 puis à Cayenne à partir de 1763, commissaire des classes à Bayonne en 1779 ',
        from: 'Louisiana',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Bertaud, Jacques, de la Rochelle, colon de la Louisiane à partir de 1759, puis à Saint-Domingue en conséquence de la guerre de Sept ans, et sa femme Gabrielle Gabion, demande de secours dans les années 1770',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'other'
    },
    {
        bio: 'Gannes, Georges de, né au Canada en 1759, cadet gentilhomme, sous-lieutenant au régiment du Cap, à Saint-Domingue, puis au régiment de la Martinique 1779/1790',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Macarty de Macteigne, de, chevalier, entre au service en 1759. Enseigne des troupes de la Louisiane à partir de 1762, passe à Saint Domingue en 1779, puis lieutenant des grenadiers volontaires au Cap-Français à Saint-Domingue. Fils du Lieutenant au roi à la Louisiane',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Fontette-Sommery, Charles Marie de, comte, entre au service en 1760. Capitaine de dragons au régiment d\'Artois, employé à Saint-Domingue puis comme aide-de camp de M. de Boufflers au Sénégal 1779/1785',
        from: 'Caribbean',
        to: 'Senegal',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Dantier, Maximin Joseph Félix, engagé dans les troupes de la compagnie des indes en 1759, depart pour l\'Île de France en 1761, en guerre sur la côte Malabare en Inde en 1775, nommé sous lieutenant de la Milice bourgeoise de Mahé en 1778, officier en 1778, sous lieutenant au régiment de Pondichéry en 1784, puis à L\'Île de France en 1785, lieutenant en second en 1787',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Petit, François, à l\'Île de France en 1761, incorporé au régiment de l\'Île de France en 1775,  adjudant au régiment de l\'Île Bourbon à partir de 1785, puis capitaine de la garde nationale à Pondichéry à partir de 1793',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Carné de Trécesson, René Camille de, comte, époux de Françoise Louise Henriette de Rostaing, aide-major général à Cayenne (1762), commandant en second aux îles Saint-Martin et Saint-Barthélemy (1763), lieutenant-colonel d\'infanterie (1772), chef de bataillon du régiment de la Guadeloupe (1775), assassiné par son domestique, en 1784, à Avignon 1769/1785',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'officials'
    },
    {
        bio: 'Clermont-Brethe, François Marie René de, arrive à Cayenne vers 1762, y devient exempt de la compagnie de maréchaussée en 1764, repasse en France en 1765, nommé capitaine au régiment de Port-Louis, à l\'île de France ',
        from: 'Isle Bourbon & Isle of France',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'military'
    },
    {
        bio: 'Herbourg, Marie Marthe, du Canada, passée à la Martinique en 1763',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763',
        category: 'other'
    },
    {
        bio: 'Mars, Joseph de, passé à Cayenne en 1763, commandant particulier à Cayenne, passé à la Guadeloupe en 1768, où il a servi dans les états-majors ',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763',
        category: 'other'
    },
    {
        bio: 'Lartigue, Jacques, originaire de Louisbourg à l\'île Royale, nommé pour Cayenne en 1764, puis procureur du Roi de la juridiction de Cayenne, mort à Cayenne vers 1775, son père était juge à Louisbourg',
        from: 'New France',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'officials'
    },
    {
        bio: 'Boucault, Charles, prisonnier d\'Etat pour la Désirade, venant de Cayenne, mort à la Martinique 1764',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'other'
    },
    {
        bio: 'L\'Ostende, de, chevalier, ancien capitaine au régiment de l\'île de France, demande à passer à Cayenne en 1764',
        from: 'Isle Bourbon & Isle of France',
        to: 'Guyana',
        through_metropole: null,
        tag: 'before_1763_maybe',
        category: 'military'
    },
    {
        bio: 'Poillevé, officier des troupes de Louisiane et lieutenant dans la légion de Saint-Domingue, demande de congé pour retourner en France en 1765',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'officials'
    },
    {
        bio: 'Berthelot de Crosse, ancien officier au Canada, commission de capitaine dans la légion de Saint-Domingue en 1766, lieutenant aux îles Saint-Pierre et Miquelon ',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'officials'
    },
    {
        bio: 'Giraud, habitant de Cayenne condamné pour sévices envers ses nègres en 1766, passé à Saint-Domingue ',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: null,
        tag: 'before_1763_maybe',
        category: 'other'
    },
    {
        bio: 'Hardy, Jean Claude, natif de l\'île de France, soldat à la légion de Saint-Domingue, départ en 1766',
        from: 'Caribbean',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'military'
    },
    {
        bio: 'Philippe, Claude Guy, né en 1734 à Paris, enseigne en Louisiane, puis lieutenant à Saint-Domingue après 1766',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'officials'
    },
    {
        bio: 'Huaud, Gilles, ancien habitant de Louisbourg, passé à Cayenne en 1763 et employé au magasin de Sinnamary ',
        from: 'New France',
        to: 'Guyana',
        through_metropole: null,
        tag: 'before_1763_maybe',
        category: 'other'
    },
    {
        bio: 'Barrère, Jean Baptiste, négociant au Cap-Français (Saint-Domingue), escale en martinique, guadeloupe, procédure de confiscation pour fait de commerce étranger du bateau le Bayonnais, capitaine Amiaud, par le tribunal de l\'amirauté de Cayenne en 1768',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'military'
    },
    {
        bio: 'Geoffrion de Boisy, resident de l\'Île Bourbon avant 1768, employé dans les bureaux de l\'île de Bourbon, passé à Pondichéry, puis à l\'armée anglaise 1772',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'other'
    },
    {
        bio: 'Dufay, lieutenant au régiment de la Reine, qui a  servi au Canada pendant plusieurs campagnes, demande une compagnie dans la légion de l\'île de France en 1769',
        from: 'Isle Bourbon & Isle of France',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'officials'
    },
    {
        bio: 'Delisle, ancien habitant du Canada, conseiller au Conseil supérieur de l\'île de Bourbon, mort vers 1770',
        from: 'Isle Bourbon & Isle of France',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'officials'
    },
    {
        bio: 'Jacquin-Philibert, Nicolas, ancien habitant du Canada, désire passer à l\'île de Bourbon, auprès de son frère, sous-commissaire de la Marine en 1770',
        from: 'Isle Bourbon & Isle of France',
        to: 'New France',
        through_metropole: null,
        tag: 'before_1763_maybe',
        category: 'officials'
    },
    {
        bio: 'La Barthe, Jean Baptiste, négociant et habitant de Port-au-Prince à Saint-Domingue, demande une concession à Cayenne en 1770',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: null,
        tag: 'before_1763_maybe',
        category: 'other'
    },
    {
        bio: 'Patrault, commis aux écritures à Cayenne, emmené à l\'Île de France après 1771',
        from: 'Isle Bourbon & Isle of France',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'other'
    },
    {
        bio: ' Thorame, commis aux écritures à Cayenne, emmené à l\'Île de France après 1771',
        from: 'Isle Bourbon & Isle of France',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'other'
    },
    {
        bio: 'Fusée-aublet, Laurent, médecin et botaniste à l\'île de France, Cayenne et Saint Domingue. Obtient une pension en 1773. ',
        from: 'Isle Bourbon & Isle of France',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'other'
    },
    {
        bio: 'Deschiens de Villefeu, employé en qualité de lieutenant sur la corvette du Roi le Nécessaire, puis commandant du navire l\'Indienne, de Bordeaux allant aux îles de France, passe du temps a Cayenne, incident survenu pendant sa relâche à Gorée  en 1774',
        from: 'Guyana',
        to: 'Senegal',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'officials'
    },
    {
        bio: 'Caro, François, invalide des troupes de la Compagnie des Indes, à l\'île de France, venu en France, demande à repasser à Pondichéry où est toujours sa famille en 1775',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'military'
    },
    {
        bio: 'Olivier, Jacques, exempt de maréchaussée à Saint-Domingue, puis canonnier à l\'île de France, demande à passer à Pondichéry en 1775',
        from: 'Caribbean',
        to: 'India',
        through_metropole: null,
        tag: 'before_1763_maybe',
        category: 'other'
    },
    {
        bio: 'Olivier, Jacques, exempt de maréchaussée à Saint-Domingue, puis canonnier à l\'île de France, demande à passer à Pondichéry en 1775',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: null,
        tag: 'before_1763_maybe',
        category: 'other'
    },
    {
        bio: 'Anne Elisabeth Gadobert aux Illinois, à la Louisiane, morte à Saint-Domingue en 1776',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: null,
        tag: 'before_1763_maybe',
        category: 'other'
    },
    {
        bio: 'Le Cler, Pierre, de Québec, matelot mort à Pondichéry en 1776',
        from: 'India',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'other'
    },
    {
        bio: 'Lépine, de, employé aux écritures à la Guadeloupe, demande à passer à Pondichéry en 1776',
        from: 'Caribbean',
        to: 'India',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'other'
    },
    {
        bio: 'Pascaud, Joseph, natif du Bas-Poitou, ci-devant négociant à Québec, demande le brevet d\'interprète du Roi pour la langue anglaise, au Cap-Français à Saint-Domingue en 1776, il y a passé du temps, il reçoit un commission d\'interprete pour la langue anglaise au Cap en 1777 puis une commission d\'interprete du roi au pres du gouvernemente et des tribunaux de Saint Domingue en 1779',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: null,
        tag: 'before_1763_maybe',
        category: 'other'
    },
    {
        bio: 'Harné, Jean, natif de l\'île de Bourbon, élève-pilote, mort à Chandernagor 1777',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'other'
    },
    {
        bio: 'Proby, Claude François de, ancien lieutenant de milices à Saint-Domingue, demande ce grade à Cayenne ou il a dirigé une habitation à partir d\'Octobre 1777',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'officials'
    },
    {
        bio: 'Duhart, capitaine de l\'Économe, venu de Saint-Domingue à Gorée en 1778, envoyé à Cayenne on ne sait pas si il est arrivé à cette destination',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'military'
    },
    {
        bio: 'Duhart, capitaine de l\'Économe, venu de Saint-Domingue à Gorée en 1778, envoyé à Cayenne on ne sait pas si il est arrivé à cette destination',
        from: 'Guyana',
        to: 'Senegal',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'military'
    },
    {
        bio: 'Estèbe, ancien conseiller au Conseil supérieur de Québec, secrétaire du Roi en la chancellerie près la cour des aides de Bordeaux, demande que les lettres d\'honneur de cet emploi qui lui ont été accordées soient enregistrées au Conseil supérieur de Saint-Domingue ou il a une partie de sa famille en 1779',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'officials'
    },
    {
        bio: 'Gauvain, Jérôme, natif de la Louisiane, en service à partir de 1779. Capitaine de port aux Cayes-Saint-Louis, à Saint-Domingue, service sur vaisseaux, destinations: Saint Domingue, Guinée, Martinique.',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'military'
    },
    {
        bio: 'Breteuil, Louis Auguste de, baron, concessionnaire à Cayenne, affaires engagées par lui à Saint-Domingue dans les années 1780',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'other'
    },
    {
        bio: 'Coutoy, Jean Baptiste, natif de Québec, matelot à bord du vaisseau du Roi le Souverain. mort à la Martinique en 1782',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'before_1763_maybe',
        category: 'other'
    },
    {
        bio: 'Auvray-Dufresne, Jean Louis, capitaine dans les troupes nationales de Cayenne à partir de 1764, puis dans la légion de Saint-Domingue',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Rambaud, Benoît Thérèse, en Martinique de 1764 à 1767 avec son frère, retour en France en 1770, 1780 employé à l\'ïle de France sous les ordres de l\'Ingenieur en chef, 1781 débarque en Inde,  avec les troupes travail comme officier d\'infantrie et ingénieur, capitaine au régiment de Pondichéry en 1783, officier au corps des volontaires étrangers de la Marine, commandant particulier au Sénégal à partir de 1787',
        from: 'Caribbean',
        to: 'India',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Rambaud, Benoît Thérèse, en Martinique de 1764 à 1767 avec son frère, retour en France en 1770, 1780 employé à l\'ïle de France sous les ordres de l\'Ingenieur en chef, 1781 débarque en Inde,  avec les troupes travail comme officier d\'infantrie et ingénieur, capitaine au régiment de Pondichéry en 1783, officier au corps des volontaires étrangers de la Marine, commandant particulier au Sénégal à partir de 1787',
        from: 'India',
        to: 'Senegal',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Bordes, entre au bureau des colonies en 1765, sous-commissaire de la Marine à Cayenne en 1775, greffier de la juridiction et de l\'amirauté de la Pointe-à-Pitre, à la Guadeloupe avec un brevet obtenu en 1776',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Drouet de La Coulonnerie, enseigne des troupes du Canada en 1765, puis sous-lieutenant dans la légion de l\'île de France en 1769',
        from: 'Isle Bourbon & Isle of France',
        to: 'New France',
        through_metropole: null,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Villeray, ancien officier au Canada, sous-lieutenant à Saint-Domingue à partir de 1765',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Barbier de blignières, Nicolas Joseph, lieutenant d\'infanterie, et ingénieur ordinaire du Roi à Cayenne en 1766, capitaine de dragons à Saint-Domingue vers  1776',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Dubois, en activité à partir e 1766. Sénéchal et lieutenant-général d\'amirauté à la Guadeloupe, administration et magistrature à Saint Domingue, il sollicite un emploi de son grade dans la Louisiane vers 1780',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: null,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Dufaur, César Antoine, lieutenant dans la légion de l\'île de France à partir de 1766, capitaine au régiment de Pondichéry à partir de 1772, retiré avec le brevet de major mort en 1786',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Millon, François, nommé procureur général au Conseil supérieur de l\'île Bourbon en 1766, sénéchal et juge d\'amirauté à Saint-Marc à Saint-Domingue en 1778',
        from: 'Caribbean',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Martinon Du Verdereau, depart pour l\'Île de France en 1768 ou il devient procureur général au roi en 1772, puis nommé procureur général au Conseil supérieur de Pondichéry en de 1776, retour en France',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Sonnerat, dessinateur, voyageur, naturaliste, à l\'Île de France entre 1768 et 1772, voyage aux Indes et à la Chine de 1774 à 1781, commissaire de la Marine à Pondichéry de 1786 à 1789, Commandant à Yanam de 1789 à 1793, administrateur du jardin des Plantes ',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: null,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Bance, Etienne Joseph, avocat au parlement de Paris, conseiller au Conseil supérieur de l\'île de France à partir de 1769, ensuite habitant de Saint-Domingue, enfin juge au tribunal civil de l\'Eure ',
        from: 'Caribbean',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Bardies Du Rouet, Etienne, abbé, missionnaire à Cayenne à partir de 1769 et à Saint-Domingue ',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: true,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Biemeré, Louis Joseph, natif de Givet, sergent dans les troupes nationales de Cayenne à partir de 1769, puis soldat au régiment de Port-au-Prince à Saint-Domingue',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Collet, Jean Maurice, chirurgien à la Nouvelle-Orléans, (Louisiane) en 1769, puis à Saint-Domingue',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Estoupan de Laval, Louis François, passe à l\'Île de France en 1769. Employé de la compagnie des Indes sur cette Île jusqu\'en 1774. Entre dabs les bureaux de l\'administrtaion de Pondichéry en 1774. Passe à Mahé en 1777. Fait prisonier par les Anglais en 1778 pendant 4 ans. En 1782, il est employé dans le bureau de la comptabilité des Îles de France et de Bourbon.  Son Pere est mort Chef des Ventes de la COmpagnie des Indes. Mr David son oncle est mort Directeur de la Compagnie des Indes et Mr David son fils a été gouverneur des Îles de Bourbon et de France. Son oncle Mr Estoupan de Villeneuve était capitaine des vaisseaux des la Compagnie des Indes. Tous les trois oncles on été successivement gouverneurs du Sénégal',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Estoupan de Laval, Louis François, passe à l\'Île de France en 1769. Employé de la compagnie des Indes sur cette Île jusqu\'en 1774. Entre dabs les bureaux de l\'administrtaion de Pondichéry en 1774. Passe à Mahé en 1777. Fait prisonier par les Anglais en 1778 pendant 4 ans. En 1782, il est employé dans le bureau de la comptabilité des Îles de France et de Bourbon.  Son Pere est mort Chef des Ventes de la COmpagnie des Indes. Mr David son oncle est mort Directeur de la Compagnie des Indes et Mr David son fils a été gouverneur des Îles de Bourbon et de France. Son oncle Mr Estoupan de Villeneuve était capitaine des vaisseaux des la Compagnie des Indes. Tous les trois oncles on été successivement gouverneurs du Sénégal',
        from: 'Isle Bourbon & Isle of France',
        to: 'Senegal',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Gilbert, esclave créole né à la Grenade vers 1769, habitant Cayenne, affranchi par son maître Lescalier (Balthazar) 1787',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: null,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Desmahis, ancien commerçant de Saint-Domingue, allant s\'établir à l\'île de France en 1770',
        from: 'Caribbean',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Faveris, Jean Baptiste, originaire de l\'île de Bourbon, chirurgien-major à Gorée en 1770, rentre à l\'Île Bourbon dans les années 1780 ',
        from: 'Isle Bourbon & Isle of France',
        to: 'Senegal',
        through_metropole: true,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Arnaud-Etienne Périchon de Vaudeuil, né à paris en 1746, en Inde en 1770, conseiller au Conseil supérieur de Pondichéry à partir de 1775, puis à celui de l\'île Bourbon.',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Desgarcins, Joseph Antoine, dessinateur, passe dans l\'Inde en 1771, employé pour les fortifications de Pondichéry, puis exempt de la maréchaussée à Saint-Domingue, mort à Saint Domingue en 1782 ',
        from: 'Caribbean',
        to: 'India',
        through_metropole: true,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Du Myrat de Vertpré, Charles François, major général à l\'Île de France en 1771, rang de colonel en 1771, employé en qualité de colonel à Saint Domingue et à la Martinique en 1780',
        from: 'Caribbean',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Jolibert, aumônier à Gorée à partir de c. 1771, mort à la Guadeloupe en 1778',
        from: 'Caribbean',
        to: 'Senegal',
        through_metropole: null,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Auger, Nicolas, créole du Sénégal né vers 1735, ouvrier tonnelier, engagé pour l\'île de France en 1772',
        from: 'Isle Bourbon & Isle of France',
        to: 'Senegal',
        through_metropole: true,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Arrot, d\', chevalier, puis vicomte, lieutenant grenadier à Pondichery en 1772, 1773 et 1774, expédition au Sénégal en 1778, aide-maréchal général des logis à Saint-Domingue, commandant au second à la Guadeloupe, gouverneur de Tabago dans les années 1780',
        from: 'Caribbean',
        to: 'Senegal',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Brunel, Ignace, procureur de roi en 1772 et substitut du procureur général du Conseil supérieur de l\'île de France, lieutenant de juge de la juridiction royale de l\'île de France en 1774, premier conseiller au Conseil supérieur de Pondichéry en 1776, juge de la sénéchaussée de l\'île de France',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Cambefort de La Motte-Bézat, Joseph Paul Augustin de, lieutenant commissionné de Capitaine au régiment de l\'Île de France en 1772, rang de major en 1776 , premier aide major en 1778, rang de lieutenant coloniel en 1781, puis major au régiment de la Guadeloupe en 1782, et lieutenant au régiment de la Guadeloupe en 1785et lieutenant au régiment du Cap de Saint Domingue en 1786',
        from: 'Caribbean',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Jouanne de Saint-Martin, négociant à la Rochelle, demande à partir à Cayenne et à Saint-Domingue en 1772',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: null,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Lefebvre, Jean Baptiste Nicolas Claude, sous-marchand puis procureur général au Conseil supérieur de Pondichéry à partir de c. 1772, puis procureur du Roi de la juridiction de l\'île de Bourbon à partir de 1784',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Bremeuil, Pierre, sergent au bataillon de l\'Inde, embarqué à l\'île de France pour Pondichéry enn 1773',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Curt, Louis de,  aide-de-camp de M. d\'Estaing et capitaine en Guadeloupe en 1773, commissaire du Roi pour la vérification et la suppression du papier monnaie aux îles de France et de Bourbon à partir de 1784, député de la Guadeloupe à l\'Assemblée constituante ',
        from: 'Caribbean',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Carles, Joseph André François, originaire de Castres, volontaire au régiment d\'Auvergne, sergent aux gardes françaises, chargé comme tel de la garde de Damiens, capitaine dans le régiment des recrues de Perpignan, capitaine aide-major de la légion de l\'île de France en 1770, capitaine aide-major au régiment de Pondichéry en 1773, lieutenant-colonel en 1778, maréchal de camp en 1791 ',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Desrivierre-Gers, Henri Louis Jérôme, nommé lieutenant au régiment de la Martinique en 1773, sous-lieutenance dans les volontaires d\'afrique à Gorée avec le grade de lieutenant en 1776, repasse en qualité de sous lieutenant au régiment de la Guadeloupe en 1776, nommé aide major de place à Cayenne en 1777',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Desrivierre-Gers, Henri Louis Jérôme, nommé lieutenant au régiment de la Martinique en 1773, sous-lieutenance dans les volontaires d\'afrique à Gorée avec le grade de lieutenant en 1776, repasse en qualité de sous lieutenant au régiment de la Guadeloupe en 1776, nommé aide major de place à Cayenne en 1777',
        from: 'Guyana',
        to: 'Senegal',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Palerne, Jean de, entre en service en qualité de lieutenant en second au régiment de l\'île de France en 1773, fait sous aide major dans la même île en 1775, puis capitaine aussi dans la même île en 1777, arrivé en Inde vers 1782, capitaine au régiment de Pondichéry  ',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Borel Du Bourg, Claude Isaac de, né à Grenoble nommé lieutenant en second au régiment de Bourbon en 1774, puis au régiment de Pondichéry, aide-major à Saint-Marc, à Saint-Domingue',
        from: 'Caribbean',
        to: 'India',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Borel Du Bourg, Claude Isaac de, né à Grenoble nommé lieutenant en second au régiment de Bourbon en 1774, puis au régiment de Pondichéry, aide-major à Saint-Marc, à Saint-Domingue',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Le Brasseur, Joseph Alexandre, 1762 entre en service en qualité de commis au bureau des colonies, commissaire ordonnateur à Gorée à partir de 1774 et à Saint-Domingue à partir de 1779 ou  il rempli ensuite des fonction  d\'Intendant te Président des Conseils Supérieurs , devient commissaire ordonateur à l\'Île de France en 1784',
        from: 'Caribbean',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Le Brasseur, Joseph Alexandre, 1762 entre en service en qualité de commis au bureau des colonies, commissaire ordonnateur à Gorée à partir de 1774 et à Saint-Domingue à partir de 1779 ou  il rempli ensuite des fonction  d\'Intendant te Président des Conseils Supérieurs , devient commissaire ordonateur à l\'Île de France en 1784',
        from: 'Isle Bourbon & Isle of France',
        to: 'Senegal',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Le Voyer, Louis, sous-lieutenant au régiment de Pondichéry à partir de 1776, integre le régiment de l\'île de France à partir de 1785, devient lieutenant en 1788 ',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Descorches de Sainte-Croix, Jacques, sous-commissaire de la Marine à Brest et à Rochefort, passe à Pondichéry en 1775, nommé ordonnateur à Chandernagor en 1777, passe à l\'Île de France en 1779',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Du Montet, Aimé Guillin, lieutenant du roi en Guadeloupe en 1775, rang de colonel en 1778, Gouverneur de Saint Vincent en 1780, Gouverneur du Sénégal en 1781',
        from: 'Caribbean',
        to: 'Senegal',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Barry de Richeville, conseiller au Conseil supérieur de Pondichéry à partir de c. 1776, et lieutenant, puis au Conseil supérieur de l\'île de France à partir de 1788 mort en 1792',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: null,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Baudin, chargé d\'une mission à l\'île de France, débarqué à Pondichéry en 1776',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Champagne, de, chevalier, sous-lieutenant au régiment d\'Artois, demeuré à l\'île de France après le départ de ce régiment pour France, passé à Pondichéry en 1776',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Clause, négociant alsacien établi à la Nouvelle-Angleterre, passé à la Martinique, puis à Gorée vers 1777',
        from: 'Caribbean',
        to: 'Senegal',
        through_metropole: true,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Lacroix de Villeneuve, Thomas, conseiller au Conseil supérieur de Pondichéry en 1777, puis nommé conseiller au Conseil supérieur de Port-au-Prince à Saint-Domingue en 1782.',
        from: 'Caribbean',
        to: 'India',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Garnier d\'Aiglancay, Nicolas Gérard, arrive à l\'Île de France en 1779. Lieutenant d\'infanterie à l\'île de France, à Pondichéry et à Saint-Domingue ',
        from: 'Caribbean',
        to: 'India',
        through_metropole: null,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Garnier d\'Aiglancay, Nicolas Gérard, arrive à l\'Île de France en 1779. Lieutenant d\'infanterie à l\'île de France, à Pondichéry et à Saint-Domingue ',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: null,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Chenot, François, s\'embarque pour l\'Île de France en 1780, fait caporal et s\'embarque pour l\'Inde en 1781, fait aide major à Pondichéry en 1792',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Le Clerc de Fresne, Camille Charles, chevalier, s\'embraque pour les Îles du Vent des Antilles en 1780,  Major Génégal de l\'Île de la Grenade , commandant en second à a St. Christophe, colonel du régiment de l\'île de Bourbon à partir de 1784,  puis gouverneur à Pondichéry, retourne en France en 1793',
        from: 'Caribbean',
        to: 'India',
        through_metropole: null,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Le Clerc de Fresne, Camille Charles, chevalier, s\'embraque pour les Îles du Vent des Antilles en 1780,  Major Génégal de l\'Île de la Grenade , commandant en second à a St. Christophe, colonel du régiment de l\'île de Bourbon à partir de 1784,  puis gouverneur à Pondichéry, retourne en France en 1793',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: null,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Dubreuil, Simon Etienne, passe à l\'Île de France en 1781: il y est employé au bureau des armements et ensuite à celui de magasin général. Il quitte l\'Île de France en 1782 pour aller dans l\'Inde ou il travail en qualité de secretaire de brigade. Employé au magasin de Trinquemalé, puis aux travaux des fortifications à Pondichéry avant d\'être envoyé à Mahé où il travaille comme notaire, procureur du roi et commisssaire national',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: null,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Dufaure de La Curatrie, Jean Baptiste, passe à l\'Île de France en 1781: il y est employé au bureau des armements et ensuite à celui du magasin général. Il quitte l\'Île de France en 1782 pour passer en Inde en qualité de secretaire de Brigade. Employé à la comtabilité du génie pour les travaux à  Pondichéry, puis notaire à Mahé. sous-lieutenant dans les troupes nationales de Cayenne, lieutenant au régiment de Port-au-Prince à Saint-Domingue 1772/1773',
        from: 'Caribbean',
        to: 'India',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Dufaure de La Curatrie, Jean Baptiste, passe à l\'Île de France en 1781: il y est employé au bureau des armements et ensuite à celui du magasin général. Il quitte l\'Île de France en 1782 pour passer en Inde en qualité de secretaire de Brigade. Employé à la comtabilité du génie pour les travaux à  Pondichéry, puis notaire à Mahé. sous-lieutenant dans les troupes nationales de Cayenne, lieutenant au régiment de Port-au-Prince à Saint-Domingue 1772/1773',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Dufaure de La Curatrie, Jean Baptiste, passe à l\'Île de France en 1781: il y est employé au bureau des armements et ensuite à celui du magasin général. Il quitte l\'Île de France en 1782 pour passer en Inde en qualité de secretaire de Brigade. Employé à la comtabilité du génie pour les travaux à  Pondichéry, puis notaire à Mahé. sous-lieutenant dans les troupes nationales de Cayenne, lieutenant au régiment de Port-au-Prince à Saint-Domingue 1772/1773',
        from: 'Isle Bourbon & Isle of France',
        to: 'Guyana',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Hauguet, Thomas, employé dans les bureaux à Saint-Domingue, puis contrôleur des colonies au Sénégal. Obtient une pension en 1781',
        from: 'Caribbean',
        to: 'Senegal',
        through_metropole: null,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'La Carrière, sous-lieutenant à la suite de l\'artillerie des îles de France et de Bourbon puis à Pondichéry à partir de 1781 ',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Richard, Louis, naturaliste du Roi passe à Cayenne en 1781,  puis passe du temps dans les Île du vent de Antilles, voyage à la Martinique en 1788, pour conduire des études botaniques. ',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: true,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Verret, Joseph, habitant de la Louisiane, puis entrepreneur de moulins à sucre à Saint-Domingue, correspondance de 1781/1782',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Foin, Guillaume François, soldat au régiment de Pondichéry, mort à l\'île de France en 1782 ',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Luneau de Villeson, greffier au Sénégal, mort à la Martinique en 1782',
        from: 'Caribbean',
        to: 'Senegal',
        through_metropole: true,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Bertry, Irénée, ancien missionnaire à la Louisiane, et à Saint-Domingue avant 1783',
        from: 'Caribbean',
        to: 'Louisiana',
        through_metropole: true,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Delosmes-Desdodins, Jean Pierre, ancien conseiller au Conseil supérieur de Pondichéry, ex-procureur général au Conseil supérieur de l\'île de France, adjoint au contrôleur de la Marine avant 1783',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Doyon, Thomas, de Québec, pauvre bourgeois mort à la Martinique en 1783',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Espinassy, Antoine Marie Joseph d\', arrive à l\'Île de France en 1783. Lieutenant en second d\'artillerie à l\'île de France en 1783, puis lieutenant en premier du régiment de corps royale d\'artillerie, employé à Saint-Domingue en 1788, commission de capitaine, devenu général en 1797 ',
        from: 'Caribbean',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'officials'
    },
    {
        bio: 'Beillion, François Joseph, natif de Franche-Comté, soldat du régiment de l\'île de France, à Pondichéry, déserteur procès en 1785',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Cuvilier, Jean Mathieu, natif de la province de Liège, soldat au régiment de l\'île de France, déserteur jugé à Pondichéry en 1785',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Du Coudray, Jean François, natif de Rennes, soldat au régiment de l\'île de France, déserteur jugé à Pondichéry 1785',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: null,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Maloeuvre, Jean, natif de Bretagne, soldat au régiment de l\'île de France, condamné comme déserteur à Pondichéry en 1785',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Pichon, Paul, fusilier au régiment de Pondichéry en 1785, mort à l\'hôpital de l\'île de France le 22 octobre 1791 ',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Simonnet de Maisonneuve, Louis, capitaine au régiment de Pondichéry à l\'île de France en 1785',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Briffaud, Louis, natif d\'Auxerre, déserteur du régiment de l\'île de Bourbon , jugé à Pondichéry en 1786',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Ailleboust de Mantet, d\', capitaine au régiment de Pondichéry à fait un mariage à l\'Île Bourbon, demissionne en 1787',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: null,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Dubé, Gabriel, natif du Canada, pauvre sans secours, mort à l\'hôpital de la Pointe-à-Pitre, à la Guadeloupe en 1787',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Ferrand, Jean, natif de Castres, fusilier au régiment de l\'île de France, mort à Pondichéry en 1787',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Garrus de La Roque, Pierre Louis, natif de Paris, commis de l\'administration de Cayenne, mort à la Martinique en 1787',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: true,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Golbéry, Sylvain François Xavier Meinrade, capitaine au corps royal du Génie, employé à Gorée et à Cayenne. Départ pour Cayenne en 1787',
        from: 'Guyana',
        to: 'Senegal',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Golbéry de Tirion, de, capitaine au corps royal du Génie, employé à Gorée et à Cayenne, ingénieur au Sénégal. Départ pour Cayenne en 1787.',
        from: 'Guyana',
        to: 'Senegal',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Auger, Jean Baptiste, caporal au régiment de Pondichéry, mort à l\'île de France en 1788',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Bergeron, Antoine, natif du Limousin, sergent au régiment de Pondichéry, mort à l\'île de France en 1788',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Berth, Jean Baptiste, natif de Paris, soldat du régiment de Pondichéry, mort à l\'île de France en 1788',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Boudon, Paul, natif de Nîmes, soldat au régiment de Pondichéry, mort à l\'île de France en 1788',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: null,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Chrétien, Louis, natif d\'Anjou, grenadier au régiment de Pondichéry, mort à l\'île de France en 1788',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Dugas, Pierre, natif d\'Anjou, tonnelier de la Cayenne de mer, à Port-Louis, île de France, mort à l\'hôpital en 1788',
        from: 'Isle Bourbon & Isle of France',
        to: 'Guyana',
        through_metropole: null,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Enserman, Jean Michel, natif d\'Alsace, soldat au régiment de Pondichéry, mort à l\'île de France en 1788',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Forget, Olivier, natif de Vannes, matelot de la Cayenne de mer à l\'île de France, mort à l\'hôpital en 1788',
        from: 'Isle Bourbon & Isle of France',
        to: 'Guyana',
        through_metropole: true,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Fournier, Claude, natif de Paris, soldat au régiment de Pondichéry, mort à l\'île de France en 1788',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Fyard de Gévigney, ancien capitaine dans le Corps de Montréal, demande une place dans la maréchaussée de Saint-Domingue. Réception de demande de position en 1788.',
        from: 'Caribbean',
        to: 'New France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Gonnet, Philippe, natif de Metz, soldat au régiment de Pondichéry, mort à l\'île de France en 1788.',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: null,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Ménard, Jean Louis, natif d\'Avranches, soldat au régiment de Pondichéry, mort à l\'île de France en 1788',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: null,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Plausot, Hubert, soldat au régiment de Pondichéry, mort à l\'hôpital de l\'île de France le 12 avril 1788 .',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Salz, Bernard, soldat au régiment de Pondichéry, mort à l\'hôpital royal de l\'île de France le 16 novembre 1788 ',
        from: 'India',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Vlieghe, ancien capitaine de milices, armateur et négociant à Cayenne et à Saint-Domingue en 1788',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    },
    {
        bio: 'Blondy, ouvrier du Roi, embarqué pour Cayenne, autorisé à partir pour Saint-Domingue en 1789',
        from: 'Caribbean',
        to: 'Guyana',
        through_metropole: true,
        tag: 'after_1763',
        category: 'other'
    },
    {
        bio: 'Béthisy, Louis de, ancien sergent au régiment de l\'île de France vers 1790, demande une place de commis aux écritures à Saint-Domingue 1784/1790',
        from: 'Caribbean',
        to: 'Isle Bourbon & Isle of France',
        through_metropole: true,
        tag: 'after_1763',
        category: 'military'
    }
];
