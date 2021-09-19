const OFFICIALS_LINKS = [
  {
    bio: 'Patoulet de Mazy, Jean Baptiste, secretaire de Jean Talon en Nouvelle France de 1665 à 1692, puis intendant aux îles du Vent établit en Martinique à partir de 1679',
    annotated_bio: '<strong>Patoulet de Mazy, Jean Baptiste</strong>, secretaire de Jean Talon en <mark>Nouvelle France</mark> de 1665 à 1692, puis intendant aux <mark>îles du Vent</mark> établit en Martinique à partir de 1679',
    name: 'Patoulet de Mazy, Jean Baptiste',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Lépinay, Jean Michel de, né vers 1665, départ pour le Canada en enseigne en 1687, promu lieutenant en 1687, puis capitaine en 1691 au Canada. Rrtour en France en 1695, pui gouverneur de la Louisiane à partir de 1716, puis de la Grenade aux Antilles en 1717. Mort en Martinique en 1721. ',
    annotated_bio: '<strong>Lépinay, Jean Michel de</strong>, né vers 1665, départ pour le <mark>Canada</mark> en enseigne en 1687, promu lieutenant en 1687, puis capitaine en 1691 au <mark>Canada</mark>. Rrtour en France en 1695, pui gouverneur de la <mark>Louisiane</mark> à partir de 1716, puis de <mark>la Grenade</mark> aux Antilles en 1717. Mort en Martinique en 1721. ',
    name: 'Lépinay, Jean Michel de',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: null,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Lépinay, Jean Michel de, né vers 1665, départ pour le Canada en enseigne en 1687, promu lieutenant en 1687, puis capitaine en 1691 au Canada. Rrtour en France en 1695, pui gouverneur de la Louisiane à partir de 1716, puis de la Grenade aux Antilles en 1717. Mort en Martinique en 1721. ',
    annotated_bio: '<strong>Lépinay, Jean Michel de</strong>, né vers 1665, départ pour le <mark>Canada</mark> en enseigne en 1687, promu lieutenant en 1687, puis capitaine en 1691 au <mark>Canada</mark>. Rrtour en France en 1695, pui gouverneur de la <mark>Louisiane</mark> à partir de 1716, puis de <mark>la Grenade</mark> aux Antilles en 1717. Mort en Martinique en 1721. ',
    name: 'Lépinay, Jean Michel de',
    from: 'New France',
    to: 'Louisiana',
    via_metropole: null,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Charanville, voyage dans les colonies françaises de l\'Amérique en 1699, sous brigadier des gardes des la marine, arrive à Pondicheéry en 1704, fait major de la place et des troupes en 1708, gouverneur à l\'Île Bourbon à partir de 1709, repasse en France en 1710, nommé pour servir à Cayenne en 1711, y arrive en 1713, y devient capitaine, puis major en 1727 et lieutenant en 1729. Mort en 1730 ',
    annotated_bio: '<strong>Charanville</strong>, voyage dans les colonies françaises de l\'Amérique en 1699, sous brigadier des gardes des la marine, arrive à Pondicheéry en 1704, fait major de la place et des troupes en 1708, gouverneur à l\'Île <mark>Bourbon</mark> à partir de 1709, repasse en France en 1710, nommé pour servir à <mark>Cayenne</mark> en 1711, y arrive en 1713, y devient capitaine, puis major en 1727 et lieutenant en 1729. Mort en 1730 ',
    name: 'Charanville',
    from: 'Isle Bourbon & Isle of France',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Forcade, Pierre de, commissaire de la Marine, travaille à la greffe et notariat de la juridiction de Saint Domingue à partir de 1713, ses intérêts à Saint-Domingue et à Cayenne 1719/1742',
    annotated_bio: '<strong>Forcade, Pierre de</strong>, commissaire de la Marine, travaille à la greffe et notariat de la juridiction de Saint Domingue à partir de 1713, ses intérêts à <mark>Saint-Domingue</mark> et à <mark>Cayenne</mark> 1719/1742',
    name: 'Forcade, Pierre de',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Jousselin de Marigny, capitaine des troupes entretenues au Canada, puis à Saint-Domingue en 1716',
    annotated_bio: '<strong>Jousselin de Marigny</strong>, capitaine des troupes entretenues au <mark>Canada</mark>, puis à <mark>Saint-Domingue</mark> en 1716',
    name: 'Jousselin de Marigny',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Beauvoillier de Courchant, gouverneur de l\'île Bourbon à partir de 1718, puis de Pondichéry à partir de 1723',
    annotated_bio: '<strong>Beauvoillier de Courchant</strong>, gouverneur de l\'île <mark>Bourbon</mark> à partir de 1718, puis de <mark>Pondichéry</mark> à partir de 1723',
    name: 'Beauvoillier de Courchant',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Escairac, d\', entre au service en 1718, capitaine des troupes du Canada, puis major du Port-de-Paix à Saint-Domingue 1725/1748',
    annotated_bio: '<strong>Escairac</strong>, d\', entre au service en 1718, capitaine des troupes du <mark>Canada</mark>, puis major du Port-de-Paix à <mark>Saint-Domingue</mark> 1725/1748',
    name: 'Escairac',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'L\'Isle, sous-lieutenant des troupes de la Louisiane, passé à Saint-Domingue vers 1718/1726',
    annotated_bio: '<strong>L\'Isle</strong>, sous-lieutenant des troupes de la <mark>Louisiane</mark>, passé à <mark>Saint-Domingue</mark> vers 1718/1726',
    name: 'L\'Isle',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Régis, en service dans les colonies à partir de 1719, lieuntenant de Dragons en Louisiane à partir de 1724 ou il conduit les négotiations avec les Choctaws en 1729, puis capitaine en pied à Cayenne. Demande à se retirer en 1747. ',
    annotated_bio: '<strong>Régis</strong>, en service dans les colonies à partir de 1719, lieuntenant de Dragons en <mark>Louisiane</mark> à partir de 1724 ou il conduit les négotiations avec les Choctaws en 1729, puis capitaine en pied à <mark>Cayenne</mark>. Demande à se retirer en 1747. ',
    name: 'Régis',
    from: 'Louisiana',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'La Longueville, de, chevalier, lieutenant des troupes du Canada, puis capitaine des troupes de la Louisiane 1720, demande une lieutenance aux Îles du Vent des Antilles, potentiel poste pour lui en Martinique',
    annotated_bio: '<strong>La Longueville, de,</strong> chevalier, lieutenant des troupes du <mark>Canada</mark>, puis capitaine des troupes de la <mark>Louisiane</mark> 1720, demande une lieutenance aux <mark>Îles du Vent</mark> des Antilles, potentiel poste pour lui en Martinique',
    name: 'La Longueville, de,',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'La Longueville, de, chevalier, lieutenant des troupes du Canada, puis capitaine des troupes de la Louisiane 1720, demande une lieutenance aux Îles du Vent des Antilles, potentiel poste pour lui en Martinique',
    annotated_bio: '<strong>La Longueville, de,</strong> chevalier, lieutenant des troupes du <mark>Canada</mark>, puis capitaine des troupes de la <mark>Louisiane</mark> 1720, demande une lieutenance aux <mark>Îles du Vent</mark> des Antilles, potentiel poste pour lui en Martinique',
    name: 'La Longueville, de,',
    from: 'New France',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Le Gardeur de Repentigny, Louis, comte, né en 1721 à Montréal, second enseigne des troupes puis lieutenant en 1751 et capitaine en 1759  en Nouvelle France, colonel des régiments de l\'Amérique en 1773 , de la Guadeloupe quatre ans plus tard puis de la Martinique, gouverneur du Sénégal à partir de 1783',
    annotated_bio: '<strong>Le Gardeur de Repentigny, Louis</strong>, comte, né en 1721 à <mark>Montréal</mark>, second enseigne des troupes puis lieutenant en 1751 et capitaine en 1759  en Nouvelle France, colonel des régiments de l\'Amérique en 1773 , de la Guadeloupe quatre ans plus tard puis de la <mark>Martinique</mark>, gouverneur du <mark>Sénégal</mark> à partir de 1783',
    name: 'Le Gardeur de Repentigny, Louis',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Le Gardeur de Repentigny, Louis, comte, né en 1721 à Montréal, second enseigne des troupes puis lieutenant en 1751 et capitaine en 1759  en Nouvelle France, colonel des régiments de l\'Amérique en 1773 , de la Guadeloupe quatre ans plus tard puis de la Martinique, gouverneur du Sénégal à partir de 1783',
    annotated_bio: '<strong>Le Gardeur de Repentigny, Louis</strong>, comte, né en 1721 à <mark>Montréal</mark>, second enseigne des troupes puis lieutenant en 1751 et capitaine en 1759  en Nouvelle France, colonel des régiments de l\'Amérique en 1773 , de la Guadeloupe quatre ans plus tard puis de la <mark>Martinique</mark>, gouverneur du <mark>Sénégal</mark> à partir de 1783',
    name: 'Le Gardeur de Repentigny, Louis',
    from: 'New France',
    to: 'Senegal',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Sanguin de Gassonville, Thomas, né vers 1697, entre au service de la compagnie en 1723, aide major de Bourbon jusqu\'en 1725, passe à Pondichery et y travail comme aide major jusqu\'en 1726, fait capitaine en 1726 et le reste au moins jusqu\'en 1740, puis capitaine a Chandernagor en 1740',
    annotated_bio: '<strong>Sanguin de Gassonville, Thomas</strong>, né vers 1697, entre au service de la compagnie en 1723, aide major de <mark>Bourbon</mark> jusqu\'en 1725, passe à <mark>Pondichery</mark> et y travail comme aide major jusqu\'en 1726, fait capitaine en 1726 et le reste au moins jusqu\'en 1740, puis capitaine a Chandernagor en 1740',
    name: 'Sanguin de Gassonville, Thomas',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Hochereau de Gassonville, aide-major à l\'île de Bourbon et à Pondichéry en 1724',
    annotated_bio: '<strong>Hochereau de Gassonville</strong>, aide-major à l\'île de <mark>Bourbon</mark> et à <mark>Pondichéry</mark> en 1724',
    name: 'Hochereau de Gassonville',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Durand, ci-devant garde-magasin de la Compagnie des Indes, à la Louisiane, prévaricateur passé à Saint-Domingue après 1725',
    annotated_bio: '<strong>Durand</strong>, ci-devant garde-magasin de la Compagnie des Indes, à la <mark>Louisiane</mark>, prévaricateur passé à <mark>Saint-Domingue</mark> après 1725',
    name: 'Durand',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Dolnet de Palmaroux, en 1726 lieutenant à l\'Île de Bourbon, repasse en France en 1743 et retourne à Bourbon en 1744, s\'embarque pour l\'Inde en 1757',
    annotated_bio: '<strong>Dolnet de Palmaroux</strong>, en 1726 lieutenant à l\'Île de <mark>Bourbon</mark>, repasse en France en 1743 et retourne à <mark>Bourbon</mark> en 1744, s\'embarque pour l\'<mark>Inde</mark> en 1757',
    name: 'Dolnet de Palmaroux',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Guillouet d\'Orvilliers de La Troncais, Claude, nommé enseigne d\'infantrie à Cayenne en 1728, puis capitaine à Saint Domingue à partir de 1744',
    annotated_bio: '<strong>Guillouet d\'Orvilliers de La Troncais, Claude</strong>, nommé enseigne d\'infantrie à <mark>Cayenne</mark> en 1728, puis capitaine à <mark>Saint Domingue</mark> à partir de 1744',
    name: 'Guillouet d\'Orvilliers de La Troncais, Claude',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: null,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Cresnay, de, baron, commandant des troupes à la Louisiane en 1730, Lieutenant à la Mobile en 1731, puis à Cayenne en 1734, mort à Cayenne en 1736',
    annotated_bio: '<strong>Cresnay, de,</strong> baron, commandant des troupes à la <mark>Louisiane</mark> en 1730, Lieutenant à la Mobile en 1731, puis à <mark>Cayenne</mark> en 1734, mort à <mark>Cayenne</mark> en 1736',
    name: 'Cresnay, de,',
    from: 'Louisiana',
    to: 'Guyana',
    via_metropole: null,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Hertel de Cournoyer, Jacques Ange, né le 8 décembre 1730, à l\'île Royale, lieutenant dans les troupes détachées de la Marine, à l\'île Royale, capitaine au régiment du Cap, à Saint-Domingue, lieutenant-colonel du régiment de Port-au-Prince, dans la même colonie 1766/1792',
    annotated_bio: '<strong>Hertel de Cournoyer, Jacques Ange</strong>, né le 8 décembre 1730, à l\'<mark>île Royale</mark>, lieutenant dans les troupes détachées de la Marine, à l\'<mark>île Royale</mark>, capitaine au régiment du Cap, à Saint-Domingue, lieutenant-colonel du régiment de <mark>Port-au-Prince</mark>, dans la même colonie 1766/1792',
    name: 'Hertel de Cournoyer, Jacques Ange',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'La Rouvillière de Villebois, Honoré Michel de, commisaire ordinaire de la Marine au Canada de 1730 à 1747 puis à la Louisiane de 1748 à 1752',
    annotated_bio: '<strong>La Rouvillière de Villebois, Honoré Michel de</strong>, commisaire ordinaire de la Marine au <mark>Canada</mark> de 1730 à 1747 puis à la <mark>Louisiane</mark> de 1748 à 1752',
    name: 'La Rouvillière de Villebois, Honoré Michel de',
    from: 'New France',
    to: 'Louisiana',
    via_metropole: null,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Pelevilain de La Houssaye, Jean Richard, cadet, enseigne puis lieutenant  en Louisiane , depart de France en 1730, et capitaine  à Louisbourg à partir de 1750',
    annotated_bio: '<strong>Pelevilain de La Houssaye, Jean Richard</strong>, cadet, enseigne puis lieutenant  en <mark>Louisiane</mark> , depart de France en 1730, et capitaine  à <mark>Louisbourg</mark> à partir de 1750',
    name: 'Pelevilain de La Houssaye, Jean Richard',
    from: 'New France',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Potier de Pommeroy, René Gédéon, né au fort Frontenac au Canada le 7 septembre 1730, cadet dans les troupe de fort royal à partir de 1742, officier en 1749, sous aide major en 1750, capitaine en 1754 puis lieutenant en 1755, capitaine des troupes nationales de Cayenne, retiré en 1768',
    annotated_bio: '<strong>Potier de Pommeroy, René Gédéon</strong>, né au fort Frontenac au <mark>Canada</mark> le 7 septembre 1730, cadet dans les troupe de fort royal à partir de 1742, officier en 1749, sous aide major en 1750, capitaine en 1754 puis lieutenant en 1755, capitaine des troupes nationales de <mark>Cayenne</mark>, retiré en 1768',
    name: 'Potier de Pommeroy, René Gédéon',
    from: 'New France',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'David, Pierre Félix Barthélemy, entre au service de la compagnie des Indes en 1729, envoyé sous inspecteur au Sénégal en 1732, Inspecteur en second du directeur général en 1733,  repasse en France en 1737, nommé gouverneur général du Sénégal à partir de 1742, en 1746, nommé à la gouvernance des l\'Îles Bourbon et de France, passe en France en 1753',
    annotated_bio: '<strong>David, Pierre Félix Barthélemy</strong>, entre au service de la compagnie des Indes en 1729, envoyé sous inspecteur au <mark>Sénégal</mark> en 1732, Inspecteur en second du directeur général en 1733,  repasse en France en 1737, nommé gouverneur général du <mark>Sénégal</mark> à partir de 1742, en 1746, nommé à la gouvernance des l\'Îles <mark>Bourbon</mark> et de France, passe en France en 1753',
    name: 'David, Pierre Félix Barthélemy',
    from: 'Isle Bourbon & Isle of France',
    to: 'Senegal',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Destanchau, capitaine des troupes de Saint-Domingue à partir de 1732, et capitaine réformé des troupes au Canada ',
    annotated_bio: '<strong>Destanchau</strong>, capitaine des troupes de <mark>Saint-Domingue</mark> à partir de 1732, et capitaine réformé des troupes au <mark>Canada</mark> ',
    name: 'Destanchau',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Membrède, de, lieutenant à la Louisiane en 1732, puis capitaine en 1733, puis major à la Nouvelle-Orléans, à la Louisiane 1746-1747, puis lieutenant de roi à Saint-Domingue 1770, mort à Saint Domingue en 1770',
    annotated_bio: '<strong>Membrède, de,</strong> lieutenant à la Louisiane en 1732, puis capitaine en 1733, puis major à la <mark>Nouvelle-Orléans</mark>, à la Louisiane 1746-1747, puis lieutenant de roi à <mark>Saint-Domingue</mark> 1770, mort à Saint Domingue en 1770',
    name: 'Membrède, de,',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Paradis, entre au service de la Compagnie des Indes en 1732, d\'abord en qualité d\'ingénieur aux îles de France et de Bourbon, puis ingénieur en chef à Mahé, Karikal et Pondichéry, puis commandant à Karikal 1à partir de 1744',
    annotated_bio: '<strong>Paradis</strong>, entre au service de la Compagnie des Indes en 1732, d\'abord en qualité d\'ingénieur aux îles de France et de <mark>Bourbon</mark>, puis ingénieur en chef à Mahé, Karikal et <mark>Pondichéry</mark>, puis commandant à Karikal 1à partir de 1744',
    name: 'Paradis',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: null,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Ponssy, Joseph de, rentre au service de la compagnie des Indes avec un brevet d\'infantrie à l\'Île Bourbon en 1732, commission de capitaine en 1740, passe du temps à l\'Île de France puis à Pondichery en 1741 et 1742, major général des ville et fort de Pondichéry  en 1743, reconnu la même année major générak des troupes de l\'Île de France',
    annotated_bio: '<strong>Ponssy, Joseph de</strong>, rentre au service de la compagnie des Indes avec un brevet d\'infantrie à l\'Île Bourbon en 1732, commission de capitaine en 1740, passe du temps à l\'<mark>Île de France</mark> puis à Pondichery en 1741 et 1742, major général des ville et fort de <mark>Pondichéry</mark>  en 1743, reconnu la même année major générak des troupes de l\'<mark>Île de France</mark>',
    name: 'Ponssy, Joseph de',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Villotte, Pierre, navigateur en provenance de Louisbourg, arrive au Cap-Français, à Saint-Domingue en 1732, il y demeure habituellement',
    annotated_bio: '<strong>Villotte, Pierre</strong>, navigateur en provenance de <mark>Louisbourg</mark>, arrive au <mark>Cap-Français</mark>, à Saint-Domingue en 1732, il y demeure habituellement',
    name: 'Villotte, Pierre',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Eyma, Joseph Aima d\', en service à partir de 1734. Capitaine dans les troupes du Canada, puis dans la légion de Saint-Domingue ',
    annotated_bio: '<strong>Eyma, Joseph Aima d\'</strong>, en service à partir de 1734. Capitaine dans les troupes du <mark>Canada</mark>, puis dans la légion de <mark>Saint-Domingue</mark> ',
    name: 'Eyma, Joseph Aima d\'',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Gamon de La Rochette, Joseph, en service à partir de 1734. Major au Port-de-Paix à Saint-Domingue,capitaine des troupes de la Louisiane à partir de 1753 ',
    annotated_bio: '<strong>Gamon de La Rochette, Joseph</strong>, en service à partir de 1734. Major au Port-de-Paix à <mark>Saint-Domingue</mark>,capitaine des troupes de la <mark>Louisiane</mark> à partir de 1753 ',
    name: 'Gamon de La Rochette, Joseph',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Noyelles, Charles Joseph de, comte, en service en tant que cadet en 1734. Campagne contre le Chickasaw en Louisiane en 1739, enseigne en second au Canada en 1744, commandant du fort à Michilimackinac, puis gouverneur de Montréal en 1748, Ensigne en pied en 1749, puis lieutenant en 1756, fait de muliples campagnes au Canada, à Cayenne en 1765, capitaine des volontaires d\'Afrique, mort en 1768 à Gorée ',
    annotated_bio: '<strong>Noyelles, Charles Joseph de</strong>, comte, en service en tant que cadet en 1734. Campagne contre le Chickasaw en <mark>Louisiane</mark> en 1739, enseigne en second au <mark>Canada</mark> en 1744, commandant du fort à Michilimackinac, puis gouverneur de Montréal en 1748, Ensigne en pied en 1749, puis lieutenant en 1756, fait de muliples campagnes au <mark>Canada</mark>, à <mark>Cayenne</mark> en 1765, capitaine des volontaires d\'Afrique, mort en 1768 à <mark>Gorée</mark> ',
    name: 'Noyelles, Charles Joseph de',
    from: 'New France',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Noyelles, Charles Joseph de, comte, en service en tant que cadet en 1734. Campagne contre le Chickasaw en Louisiane en 1739, enseigne en second au Canada en 1744, commandant du fort à Michilimackinac, puis gouverneur de Montréal en 1748, Ensigne en pied en 1749, puis lieutenant en 1756, fait de muliples campagnes au Canada, à Cayenne en 1765, capitaine des volontaires d\'Afrique, mort en 1768 à Gorée ',
    annotated_bio: '<strong>Noyelles, Charles Joseph de</strong>, comte, en service en tant que cadet en 1734. Campagne contre le Chickasaw en <mark>Louisiane</mark> en 1739, enseigne en second au <mark>Canada</mark> en 1744, commandant du fort à Michilimackinac, puis gouverneur de Montréal en 1748, Ensigne en pied en 1749, puis lieutenant en 1756, fait de muliples campagnes au <mark>Canada</mark>, à <mark>Cayenne</mark> en 1765, capitaine des volontaires d\'Afrique, mort en 1768 à <mark>Gorée</mark> ',
    name: 'Noyelles, Charles Joseph de',
    from: 'Louisiana',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Noyelles, Charles Joseph de, comte, en service en tant que cadet en 1734. Campagne contre le Chickasaw en Louisiane en 1739, enseigne en second au Canada en 1744, commandant du fort à Michilimackinac, puis gouverneur de Montréal en 1748, Ensigne en pied en 1749, puis lieutenant en 1756, fait de muliples campagnes au Canada, à Cayenne en 1765, capitaine des volontaires d\'Afrique, mort en 1768 à Gorée ',
    annotated_bio: '<strong>Noyelles, Charles Joseph de</strong>, comte, en service en tant que cadet en 1734. Campagne contre le Chickasaw en <mark>Louisiane</mark> en 1739, enseigne en second au <mark>Canada</mark> en 1744, commandant du fort à Michilimackinac, puis gouverneur de Montréal en 1748, Ensigne en pied en 1749, puis lieutenant en 1756, fait de muliples campagnes au <mark>Canada</mark>, à <mark>Cayenne</mark> en 1765, capitaine des volontaires d\'Afrique, mort en 1768 à <mark>Gorée</mark> ',
    name: 'Noyelles, Charles Joseph de',
    from: 'Guyana',
    to: 'Senegal',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Sabrevois de Bleury, Charles de, né en 1734 au Canada, cadet des troupes au Canada, enseigne en second à l\'Île Royale en 1750, Lieutenant en 1759, et Capitaine en 1766, puis capitaine réformé du régiment de l\'ïle Bourbon à partir de 1775',
    annotated_bio: '<strong>Sabrevois de Bleury, Charles de</strong>, né en 1734 au <mark>Canada</mark>, cadet des troupes au <mark>Canada</mark>, enseigne en second à l\'Île Royale en 1750, Lieutenant en 1759, et Capitaine en 1766, puis capitaine réformé du régiment de l\'<mark>ïle Bourbon</mark> à partir de 1775',
    name: 'Sabrevois de Bleury, Charles de',
    from: 'Isle Bourbon & Isle of France',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Catalogne, Charles Gédéon de, né à Louisbourg le 14 février 1735, entré au service à Louisbourg en 1749, passe au canada en 1757, en 1764 passe à Cayenne, puis lieutenant au régiment du Port-au-Prince, capitaine aide-major aux Cayes (Saint-Domingue) ',
    annotated_bio: '<strong>Catalogne, Charles Gédéon de</strong>, né à Louisbourg le 14 février 1735, entré au service à Louisbourg en 1749, passe au <mark>canada</mark> en 1757, en 1764 passe à <mark>Cayenne</mark>, puis lieutenant au régiment du <mark>Port-au-Prince</mark>, capitaine aide-major aux Cayes (Saint-Domingue) ',
    name: 'Catalogne, Charles Gédéon de',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: null,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Catalogne, Charles Gédéon de, né à Louisbourg le 14 février 1735, entré au service à Louisbourg en 1749, passe au canada en 1757, en 1764 passe à Cayenne, puis lieutenant au régiment du Port-au-Prince, capitaine aide-major aux Cayes (Saint-Domingue) ',
    annotated_bio: '<strong>Catalogne, Charles Gédéon de</strong>, né à Louisbourg le 14 février 1735, entré au service à Louisbourg en 1749, passe au <mark>canada</mark> en 1757, en 1764 passe à <mark>Cayenne</mark>, puis lieutenant au régiment du <mark>Port-au-Prince</mark>, capitaine aide-major aux Cayes (Saint-Domingue) ',
    name: 'Catalogne, Charles Gédéon de',
    from: 'New France',
    to: 'Guyana',
    via_metropole: null,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Du Plessis, Jean Baptiste Vigoureux, né à Chandernagor le 6 mai 1735, lieutenant-colonel d\'infanterie, commandant à Mahé, 1778, gouverneur de l\'île Saint-Vincent aux Antilles, 1780, brigadier des armées du Roi, 1784, gouverneur de l\'île de Bourbon 1771/1814',
    annotated_bio: '<strong>Du Plessis, Jean Baptiste Vigoureux</strong>, né à <mark>Chandernagor</mark> le 6 mai 1735, lieutenant-colonel d\'infanterie, commandant à Mahé, 1778, gouverneur de l\'île Saint-Vincent aux Antilles, 1780, brigadier des armées du Roi, 1784, gouverneur de l\'île de <mark>Bourbon</mark> 1771/1814',
    name: 'Du Plessis, Jean Baptiste Vigoureux',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Hertel de Cournoyer, Michel, né à l\'île Royale en 1735, mort à Cayenne, en 1780, cadet à l\'île Royale, enseigne au Canada, aide-major des troupes nationales de la Guyane 1716/1782',
    annotated_bio: '<strong>Hertel de Cournoyer, Michel</strong>, né à l\'île Royale en 1735, mort à <mark>Cayenne</mark>, en 1780, cadet à l\'île Royale, enseigne au <mark>Canada</mark>, aide-major des troupes nationales de la Guyane 1716/1782',
    name: 'Hertel de Cournoyer, Michel',
    from: 'New France',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Sabran-Beaudinar, Pierre Bruno de, chevalier, enseigne en second à la Louisiane en 1735, major à la Mobile en Louisiane en 1736,  puis à Saint-Domingue 1735/1741',
    annotated_bio: '<strong>Sabran-Beaudinar, Pierre Bruno de</strong>, chevalier, enseigne en second à la <mark>Louisiane</mark> en 1735, major à la Mobile en <mark>Louisiane</mark> en 1736,  puis à <mark>Saint-Domingue</mark> 1735/1741',
    name: 'Sabran-Beaudinar, Pierre Bruno de',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Dagneaux-Douville, Alexandre René, né au Canada en 1736, ayant servi dans cette colonie, ensuite capitaine au régiment de la Guadeloupe, commandant en second les îles Saint-Martin et Saint-Barthélemy, retiré lieutenant-colonel d\'infanterie',
    annotated_bio: '<strong>Dagneaux-Douville, Alexandre René</strong>, né au <mark>Canada</mark> en 1736, ayant servi dans cette colonie, ensuite capitaine au régiment de la <mark>Guadeloupe</mark>, commandant en second les îles Saint-Martin et Saint-Barthélemy, retiré lieutenant-colonel d\'infanterie',
    name: 'Dagneaux-Douville, Alexandre René',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Boullot, Pierre, capitaine de navires marchands en voyage entre la Martinique, Louisbourg, Quebec et la France entre 1737 et 1753. Habitant à Louisbourg entre 1753 et 1758, puis reste en France jusqu\'en 1763, quand il part pour Saint Pierre et Miquelon ',
    annotated_bio: '<strong>Boullot, Pierre</strong>, capitaine de navires marchands en voyage entre la <mark>Martinique</mark>, <mark>Louisbourg</mark>, Quebec et la France entre 1737 et 1753. Habitant à <mark>Louisbourg</mark> entre 1753 et 1758, puis reste en France jusqu\'en 1763, quand il part pour Saint Pierre et Miquelon ',
    name: 'Boullot, Pierre',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Guyon, Jean Baptiste Régis de, né en 1737 à Québec au Canada, à servit à Saint Domingue, pui en tant que capitaine d\'Infanterie à l\'île de France 1752/an VI',
    annotated_bio: '<strong>Guyon, Jean Baptiste Régis de</strong>, né en 1737 à Québec au <mark>Canada</mark>, à servit à <mark>Saint Domingue</mark>, pui en tant que capitaine d\'Infanterie à l\'<mark>île de France</mark> 1752/an VI',
    name: 'Guyon, Jean Baptiste Régis de',
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Guyon, Jean Baptiste Régis de, né en 1737 à Québec au Canada, à servit à Saint Domingue, pui en tant que capitaine d\'Infanterie à l\'île de France 1752/an VI',
    annotated_bio: '<strong>Guyon, Jean Baptiste Régis de</strong>, né en 1737 à Québec au <mark>Canada</mark>, à servit à <mark>Saint Domingue</mark>, pui en tant que capitaine d\'Infanterie à l\'<mark>île de France</mark> 1752/an VI',
    name: 'Guyon, Jean Baptiste Régis de',
    from: 'Isle Bourbon & Isle of France',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Decous, Henry,  navigateur. Il fait des campagnes à la Martinique en 1738 et 1740 en tant que volontaire sur un navire. En 1742, Il fait une autre campagne à la Martinique en qualité de lieutenant en second sur un navire. En 1747, il fait campagne au Canada sur un bateau en qualité de capitaine en second. En 1749, il fait campagne à Saint Domingue sur un navire en qualité de second capitaine. EN 1750, il fait un voyage à la Louisiane. Il reste en Louisiane et y occuppe la position de major des milices pendant 8 ans. Il devient ensuite lieutenant de port à Saint-Pierre, à la Martinique.',
    annotated_bio: '<strong>Decous, Henry</strong>,  navigateur. Il fait des campagnes à la Martinique en 1738 et 1740 en tant que volontaire sur un navire. En 1742, Il fait une autre campagne à la Martinique en qualité de lieutenant en second sur un navire. En 1747, il fait campagne au <mark>Canada</mark> sur un bateau en qualité de capitaine en second. En 1749, il fait campagne à <mark>Saint Domingue</mark> sur un navire en qualité de second capitaine. EN 1750, il fait un voyage à la <mark>Louisiane</mark>. Il reste en <mark>Louisiane</mark> et y occuppe la position de major des milices pendant 8 ans. Il devient ensuite lieutenant de port à Saint-Pierre, à la Martinique.',
    name: 'Decous, Henry',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Decous, Henry,  navigateur. Il fait des campagnes à la Martinique en 1738 et 1740 en tant que volontaire sur un navire. En 1742, Il fait une autre campagne à la Martinique en qualité de lieutenant en second sur un navire. En 1747, il fait campagne au Canada sur un bateau en qualité de capitaine en second. En 1749, il fait campagne à Saint Domingue sur un navire en qualité de second capitaine. EN 1750, il fait un voyage à la Louisiane. Il reste en Louisiane et y occuppe la position de major des milices pendant 8 ans. Il devient ensuite lieutenant de port à Saint-Pierre, à la Martinique.',
    annotated_bio: '<strong>Decous, Henry</strong>,  navigateur. Il fait des campagnes à la Martinique en 1738 et 1740 en tant que volontaire sur un navire. En 1742, Il fait une autre campagne à la Martinique en qualité de lieutenant en second sur un navire. En 1747, il fait campagne au <mark>Canada</mark> sur un bateau en qualité de capitaine en second. En 1749, il fait campagne à <mark>Saint Domingue</mark> sur un navire en qualité de second capitaine. EN 1750, il fait un voyage à la <mark>Louisiane</mark>. Il reste en <mark>Louisiane</mark> et y occuppe la position de major des milices pendant 8 ans. Il devient ensuite lieutenant de port à Saint-Pierre, à la Martinique.',
    name: 'Decous, Henry',
    from: 'New France',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Ailleboust de Céry, Philippe Antoine d\',  né à Quebec en 1739, entré au service vers 1748, bléssé en 1759, enseigne dans les troupes du Canada, lieutenant à Montréal, puis capitaine dans la légion de Saint-Domingue 1766',
    annotated_bio: '<strong>Ailleboust de Céry, Philippe Antoine d\'</strong>,  né à Quebec en 1739, entré au service vers 1748, bléssé en 1759, enseigne dans les troupes du <mark>Canada</mark>, lieutenant à Montréal, puis capitaine dans la légion de <mark>Saint-Domingue</mark> 1766',
    name: 'Ailleboust de Céry, Philippe Antoine d\'',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Cabanac, Joseph de, né au Canada en 1739, devient cadet en 1746, et ensigne en second en 1759, devient sous lieutenant de la légion de l\'ïle de France en 1766, puis lieutenant en 1769 et capitaine en 1777',
    annotated_bio: '<strong>Cabanac, Joseph de</strong>, né au <mark>Canada</mark> en 1739, devient cadet en 1746, et ensigne en second en 1759, devient sous lieutenant de la légion de l\'<mark>ïle de France</mark> en 1766, puis lieutenant en 1769 et capitaine en 1777',
    name: 'Cabanac, Joseph de',
    from: 'Isle Bourbon & Isle of France',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Marchant Des Ligneris, Constant François Xavier Daniel, né au Canada en 1739, cadet dans les troupes de cette colonie en 1750, enseigne en second au Canada à partir de 1757, puis à partir de 1760 enseigne en Canada, lieutenant dans la légion de Saint-Domingue à partir de 1766, capitaine en 1769 puis second capitaine commandant en 1785 ',
    annotated_bio: '<strong>Marchant Des Ligneris, Constant François Xavier Daniel</strong>, né au <mark>Canada</mark> en 1739, cadet dans les troupes de cette colonie en 1750, enseigne en second au <mark>Canada</mark> à partir de 1757, puis à partir de 1760 enseigne en <mark>Canada</mark>, lieutenant dans la légion de <mark>Saint-Domingue</mark> à partir de 1766, capitaine en 1769 puis second capitaine commandant en 1785 ',
    name: 'Marchant Des Ligneris, Constant François Xavier Daniel',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Nanteuil de Pré, Louis de, chevalier, ingénieur à Saint Domingue à partir de 1739, en 1745, devient garçon major d\'artillerie dans cette colonie, puis enseigne et lieutenants canoniers toujours dans la même colony, pui capitaine d\'artillerie et commandant en chef d\'une compagnie à Cayenne en 1764',
    annotated_bio: '<strong>Nanteuil de Pré, Louis de</strong>, chevalier, ingénieur à <mark>Saint Domingue</mark> à partir de 1739, en 1745, devient garçon major d\'artillerie dans cette colonie, puis enseigne et lieutenants canoniers toujours dans la même colony, pui capitaine d\'artillerie et commandant en chef d\'une compagnie à <mark>Cayenne</mark> en 1764',
    name: 'Nanteuil de Pré, Louis de',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Denois, Joseph Boucher, né au Canada en 1740, cadet en 1753, lieutenant en 1761 toujours au Canada, puis sous lieutenant dans la légion de l\'ïle de France en 1766, lieutenant au régioment de Port Louis en 1772, commission de capitaine au dit régiment en 1777',
    annotated_bio: '<strong>Denois, Joseph Boucher</strong>, né au <mark>Canada</mark> en 1740, cadet en 1753, lieutenant en 1761 toujours au <mark>Canada</mark>, puis sous lieutenant dans la légion de l\'<mark>ïle de France</mark> en 1766, lieutenant au régioment de Port Louis en 1772, commission de capitaine au dit régiment en 1777',
    name: 'Denois, Joseph Boucher',
    from: 'Isle Bourbon & Isle of France',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Du Breuil-Villars, Alexandre, né à la Nouvelle Orléans en 1742, enseigne des troupes entretenues à la Louisiane, capitaine au régiment de la Guadeloupe ',
    annotated_bio: '<strong>Du Breuil-Villars, Alexandre</strong>, né à la Nouvelle Orléans en 1742, enseigne des troupes entretenues à la <mark>Louisiane</mark>, capitaine au régiment de la <mark>Guadeloupe</mark> ',
    name: 'Du Breuil-Villars, Alexandre',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Le Moyne, Antoine Philippe, contrôleur à la Martinique à partir de 1742, ordonnateur à Cayenne et commissaire général de la marine à Rochefort ',
    annotated_bio: '<strong>Le Moyne, Antoine Philippe</strong>, contrôleur à la <mark>Martinique</mark> à partir de 1742, ordonnateur à <mark>Cayenne</mark> et commissaire général de la marine à Rochefort ',
    name: 'Le Moyne, Antoine Philippe',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Du Roullin, Pierre Claude, en service à partir de 1742. Lieutenant dans les troupes de la Louisiane, capitaine au régiment de la Guadeloupe, major en 1779 ',
    annotated_bio: '<strong>Du Roullin, Pierre Claude</strong>, en service à partir de 1742. Lieutenant dans les troupes de la <mark>Louisiane</mark>, capitaine au régiment de la <mark>Guadeloupe</mark>, major en 1779 ',
    name: 'Du Roullin, Pierre Claude',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Foucault, Denis Nicolas, écrivain principal de la Marine à partir de 1742, ordonnateur à la Louisiane et à Pondichéry, commissaire général ordonnateur faisant fonctions d\'intendant à l\'île de France ',
    annotated_bio: '<strong>Foucault, Denis Nicolas</strong>, écrivain principal de la Marine à partir de 1742, ordonnateur à la <mark>Louisiane</mark> et à <mark>Pondichéry</mark>, commissaire général ordonnateur faisant fonctions d\'intendant à l\'<mark>île de France</mark> ',
    name: 'Foucault, Denis Nicolas',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: null,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Foucault, Denis Nicolas, écrivain principal de la Marine à partir de 1742, ordonnateur à la Louisiane et à Pondichéry, commissaire général ordonnateur faisant fonctions d\'intendant à l\'île de France ',
    annotated_bio: '<strong>Foucault, Denis Nicolas</strong>, écrivain principal de la Marine à partir de 1742, ordonnateur à la <mark>Louisiane</mark> et à <mark>Pondichéry</mark>, commissaire général ordonnateur faisant fonctions d\'intendant à l\'<mark>île de France</mark> ',
    name: 'Foucault, Denis Nicolas',
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    via_metropole: null,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Espinette, Charles François d\', entre en service en 1743. Major de la légion de l\'île de France, puis du régiment de Pondichéry, avec brevet de lieutenant-colonel 1770/1776',
    annotated_bio: '<strong>Espinette, Charles François d\'</strong>, entre en service en 1743. Major de la légion de l\'<mark>île de France</mark>, puis du régiment de <mark>Pondichéry</mark>, avec brevet de lieutenant-colonel 1770/1776',
    name: 'Espinette, Charles François d\'',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Gosse, Mathias Claude, ancien consul à Bassorah, conseiller à Pondichéry en 1743 et à l\'Île de France en 1750',
    annotated_bio: '<strong>Gosse, Mathias Claude</strong>, ancien consul à Bassorah, conseiller à <mark>Pondichéry</mark> en 1743 et à l\'<mark>Île de France</mark> en 1750',
    name: 'Gosse, Mathias Claude',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Marchant Des Ligneris, Pierre Marie, chevalier, né au Canada, en 1743, entre au service en qualité de cadet en 1753, fait enseigne en Louisiane en 1762, incorporé aux troupe de Cayenne en 1764, fait lieutenant en 1769, incorporé dans la légion de Saint Domingue en 1772, fait capitaine au l au régiment de Port-au-Prince en 1773',
    annotated_bio: '<strong>Marchant Des Ligneris, Pierre Marie</strong>, chevalier, né au <mark>Canada</mark>, en 1743, entre au service en qualité de cadet en 1753, fait enseigne en <mark>Louisiane</mark> en 1762, incorporé aux troupe de <mark>Cayenne</mark> en 1764, fait lieutenant en 1769, incorporé dans la légion de Saint Domingue en 1772, fait capitaine au l au régiment de <mark>Port-au-Prince</mark> en 1773',
    name: 'Marchant Des Ligneris, Pierre Marie',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Marchant Des Ligneris, Pierre Marie, chevalier, né au Canada, en 1743, entre au service en qualité de cadet en 1753, fait enseigne en Louisiane en 1762, incorporé aux troupe de Cayenne en 1764, fait lieutenant en 1769, incorporé dans la légion de Saint Domingue en 1772, fait capitaine au l au régiment de Port-au-Prince en 1773',
    annotated_bio: '<strong>Marchant Des Ligneris, Pierre Marie</strong>, chevalier, né au <mark>Canada</mark>, en 1743, entre au service en qualité de cadet en 1753, fait enseigne en <mark>Louisiane</mark> en 1762, incorporé aux troupe de <mark>Cayenne</mark> en 1764, fait lieutenant en 1769, incorporé dans la légion de Saint Domingue en 1772, fait capitaine au l au régiment de <mark>Port-au-Prince</mark> en 1773',
    name: 'Marchant Des Ligneris, Pierre Marie',
    from: 'New France',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Marchant Des Ligneris, Pierre Marie, chevalier, né au Canada, en 1743, entre au service en qualité de cadet en 1753, fait enseigne en Louisiane en 1762, incorporé aux troupe de Cayenne en 1764, fait lieutenant en 1769, incorporé dans la légion de Saint Domingue en 1772, fait capitaine au l au régiment de Port-au-Prince en 1773',
    annotated_bio: '<strong>Marchant Des Ligneris, Pierre Marie</strong>, chevalier, né au <mark>Canada</mark>, en 1743, entre au service en qualité de cadet en 1753, fait enseigne en <mark>Louisiane</mark> en 1762, incorporé aux troupe de <mark>Cayenne</mark> en 1764, fait lieutenant en 1769, incorporé dans la légion de Saint Domingue en 1772, fait capitaine au l au régiment de <mark>Port-au-Prince</mark> en 1773',
    name: 'Marchant Des Ligneris, Pierre Marie',
    from: 'Louisiana',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Tourton de Clairefontaine, en service au Canada à partir de 1743, commis et écrivain ordinaire de la Marine au Canada, puis depart pour Saint Domingue vers 1763, où il devient garde magasin à partir de 1765',
    annotated_bio: '<strong>Tourton de Clairefontaine</strong>, en service au <mark>Canada</mark> à partir de 1743, commis et écrivain ordinaire de la Marine au <mark>Canada</mark>, puis depart pour <mark>Saint Domingue</mark> vers 1763, où il devient garde magasin à partir de 1765',
    name: 'Tourton de Clairefontaine',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Charly, de, cadet au Québec à partir de 1744, enseigne à Louisbourg à partir de 1749, puis major des troupes en 1750, brevet d\'aide-major den 1759, continue ses service jusqu\'à la prise du Canada, puis major de l\'île de Gorée',
    annotated_bio: '<strong>Charly, de,</strong> cadet au Québec à partir de 1744, enseigne à Louisbourg à partir de 1749, puis major des troupes en 1750, brevet d\'aide-major den 1759, continue ses service jusqu\'à la prise du <mark>Canada</mark>, puis major de l\'île de <mark>Gorée</mark>',
    name: 'Charly, de,',
    from: 'New France',
    to: 'Senegal',
    via_metropole: null,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Dupont Du Chambon, Charles François Ferdinand, entre au service en 1744. Lieutenant des troupes détachées de la Marine au Canada et à l\'île Royale, capitaine au régiment de Foix, à Saint-Domingue 1777',
    annotated_bio: '<strong>Dupont Du Chambon, Charles François Ferdinand</strong>, entre au service en 1744. Lieutenant des troupes détachées de la Marine au <mark>Canada</mark> et à l\'île Royale, capitaine au régiment de Foix, à <mark>Saint-Domingue</mark> 1777',
    name: 'Dupont Du Chambon, Charles François Ferdinand',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Fontaine, Jean Baptiste, capitaine d\'artillerie à l\'île de France, entre au service en 1744. Commandant l\'artillerie de Pondichéry, major des troupes des colonies 1727/1791',
    annotated_bio: '<strong>Fontaine, Jean Baptiste</strong>, capitaine d\'artillerie à l\'<mark>île de France</mark>, entre au service en 1744. Commandant l\'artillerie de <mark>Pondichéry</mark>, major des troupes des colonies 1727/1791',
    name: 'Fontaine, Jean Baptiste',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Desvaulx, Nicolas Jacques, né à Chandernagor en 1745, passe en France, renvoyé aux indes avec commission de capitaine en 1771, capitaine commandant d\'une compagnie d\'artillerie à Pondichéry en 1777, à l\'Île de France entre 1781 à 1786, où il est capitaine d\'artillerie,   fait lieutenant colonel en 1787',
    annotated_bio: '<strong>Desvaulx, Nicolas Jacques</strong>, né à Chandernagor en 1745, passe en France, renvoyé aux indes avec commission de capitaine en 1771, capitaine commandant d\'une compagnie d\'artillerie à <mark>Pondichéry</mark> en 1777, à l\'<mark>Île de France</mark> entre 1781 à 1786, où il est capitaine d\'artillerie,   fait lieutenant colonel en 1787',
    name: 'Desvaulx, Nicolas Jacques',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'La Glaine d\'Auzon, Jean René, soldat dans les troupes de l\'inde à partir de 1745,devient lieutenant à Pondichery à partir de 1761, major commandant d\'artillerie au Sénegal en 1783',
    annotated_bio: '<strong>La Glaine d\'Auzon, Jean René</strong>, soldat dans les troupes de l\'inde à partir de 1745,devient lieutenant à <mark>Pondichery</mark> à partir de 1761, major commandant d\'artillerie au <mark>Sénegal</mark> en 1783',
    name: 'La Glaine d\'Auzon, Jean René',
    from: 'India',
    to: 'Senegal',
    via_metropole: null,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Lecodé, Yves, natif de Louisbourg, devient mousse de bateaux en 1745, voyages en France, puis au Port Louis de l\'Île de France en 1746 et à l\'Orient en 1747, devient maitre d\'équipage en 1749,  cammandant en 1750, pilote cotier en 1757, envoyé au Fort Dauphine en 1758 pour y piloter les vaisseaux du roi, puis au Quebec la même année. Il arrive à Cayenne en 1764 avec sa famille et y devient maître de port en 1767. ',
    annotated_bio: '<strong>Lecodé, Yves</strong>, natif de <mark>Louisbourg</mark>, devient mousse de bateaux en 1745, voyages en France, puis au Port Louis de l\'<mark>Île de France</mark> en 1746 et à l\'Orient en 1747, devient maitre d\'équipage en 1749,  cammandant en 1750, pilote cotier en 1757, envoyé au Fort Dauphine en 1758 pour y piloter les vaisseaux du roi, puis au Quebec la même année. Il arrive à <mark>Cayenne</mark> en 1764 avec sa famille et y devient maître de port en 1767. ',
    name: 'Lecodé, Yves',
    from: 'Isle Bourbon & Isle of France',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Lecodé, Yves, natif de Louisbourg, devient mousse de bateaux en 1745, voyages en France, puis au Port Louis de l\'Île de France en 1746 et à l\'Orient en 1747, devient maitre d\'équipage en 1749,  cammandant en 1750, pilote cotier en 1757, envoyé au Fort Dauphine en 1758 pour y piloter les vaisseaux du roi, puis au Quebec la même année. Il arrive à Cayenne en 1764 avec sa famille et y devient maître de port en 1767. ',
    annotated_bio: '<strong>Lecodé, Yves</strong>, natif de <mark>Louisbourg</mark>, devient mousse de bateaux en 1745, voyages en France, puis au Port Louis de l\'<mark>Île de France</mark> en 1746 et à l\'Orient en 1747, devient maitre d\'équipage en 1749,  cammandant en 1750, pilote cotier en 1757, envoyé au Fort Dauphine en 1758 pour y piloter les vaisseaux du roi, puis au Quebec la même année. Il arrive à <mark>Cayenne</mark> en 1764 avec sa famille et y devient maître de port en 1767. ',
    name: 'Lecodé, Yves',
    from: 'New France',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Hazeur de Lorme, Louis, né à la Louisiane en 1746, capitaine au régiment de la Guadeloupe puis commandant particulier par intérim à Tabago en 1785 1754/1792',
    annotated_bio: '<strong>Hazeur de Lorme, Louis</strong>, né à la <mark>Louisiane</mark> en 1746, capitaine au régiment de la <mark>Guadeloupe</mark> puis commandant particulier par intérim à Tabago en 1785 1754/1792',
    name: 'Hazeur de Lorme, Louis',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Ailleboust de Saint-Vilmé, Jean Baptiste d\', cadet et enseigne dans les compagnie de la Marine à l\'Île Royale en 1747 et 1749, puis Lieutenant en 1757, employé pendant le siege de Louisbourg en 1758, nommé à une compagnie des troupes nationales à Cayenne en 1764, authorisé à passer à Gorée en 1768,  lieutenant de roi à Saint-Louis ',
    annotated_bio: '<strong>Ailleboust de Saint-Vilmé, Jean Baptiste d\'</strong>, cadet et enseigne dans les compagnie de la Marine à l\'<mark>Île Royale</mark> en 1747 et 1749, puis Lieutenant en 1757, employé pendant le siege de Louisbourg en 1758, nommé à une compagnie des troupes nationales à <mark>Cayenne</mark> en 1764, authorisé à passer à <mark>Gorée</mark> en 1768,  lieutenant de roi à <mark>Saint-Louis</mark> ',
    name: 'Ailleboust de Saint-Vilmé, Jean Baptiste d\'',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Ailleboust de Saint-Vilmé, Jean Baptiste d\', cadet et enseigne dans les compagnie de la Marine à l\'Île Royale en 1747 et 1749, puis Lieutenant en 1757, employé pendant le siege de Louisbourg en 1758, nommé à une compagnie des troupes nationales à Cayenne en 1764, authorisé à passer à Gorée en 1768,  lieutenant de roi à Saint-Louis ',
    annotated_bio: '<strong>Ailleboust de Saint-Vilmé, Jean Baptiste d\'</strong>, cadet et enseigne dans les compagnie de la Marine à l\'<mark>Île Royale</mark> en 1747 et 1749, puis Lieutenant en 1757, employé pendant le siege de Louisbourg en 1758, nommé à une compagnie des troupes nationales à <mark>Cayenne</mark> en 1764, authorisé à passer à <mark>Gorée</mark> en 1768,  lieutenant de roi à <mark>Saint-Louis</mark> ',
    name: 'Ailleboust de Saint-Vilmé, Jean Baptiste d\'',
    from: 'New France',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Ailleboust de Saint-Vilmé, Jean Baptiste d\', cadet et enseigne dans les compagnie de la Marine à l\'Île Royale en 1747 et 1749, puis Lieutenant en 1757, employé pendant le siege de Louisbourg en 1758, nommé à une compagnie des troupes nationales à Cayenne en 1764, authorisé à passer à Gorée en 1768,  lieutenant de roi à Saint-Louis ',
    annotated_bio: '<strong>Ailleboust de Saint-Vilmé, Jean Baptiste d\'</strong>, cadet et enseigne dans les compagnie de la Marine à l\'<mark>Île Royale</mark> en 1747 et 1749, puis Lieutenant en 1757, employé pendant le siege de Louisbourg en 1758, nommé à une compagnie des troupes nationales à <mark>Cayenne</mark> en 1764, authorisé à passer à <mark>Gorée</mark> en 1768,  lieutenant de roi à <mark>Saint-Louis</mark> ',
    name: 'Ailleboust de Saint-Vilmé, Jean Baptiste d\'',
    from: 'Guyana',
    to: 'Senegal',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Hertel de Saint-Francois, Antoine, né en Canada, entre au service cadet en 1747, fait officier à Louisbourg en 1751, nommé à une lieutenance dans la légion de l\'Île de France en 1767 et devient capitain en 1770.',
    annotated_bio: '<strong>Hertel de Saint-Francois, Antoine</strong>, né en <mark>Canada</mark>, entre au service cadet en 1747, fait officier à Louisbourg en 1751, nommé à une lieutenance dans la légion de l\'<mark>Île de France</mark> en 1767 et devient capitain en 1770.',
    name: 'Hertel de Saint-Francois, Antoine',
    from: 'Isle Bourbon & Isle of France',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Treyvoux, Georges, armurier au Canada en 1747, puis à la Martinique ',
    annotated_bio: '<strong>Treyvoux, Georges</strong>, armurier au <mark>Canada</mark> en 1747, puis à la <mark>Martinique</mark> ',
    name: 'Treyvoux, Georges',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: null,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Rastel de Rocheblave, Pierre Louis, passe au Canada en 1749 ou il travail en tant que cadet, envoyé aux Illinois en 1759, nommé  gouverneur de Gorée en 1769, lieutenant de roi à Saint-Domingue à partir de 1775, mort en 1780',
    annotated_bio: '<strong>Rastel de Rocheblave, Pierre Louis</strong>, passe au <mark>Canada</mark> en 1749 ou il travail en tant que cadet, envoyé aux Illinois en 1759, nommé  gouverneur de <mark>Gorée</mark> en 1769, lieutenant de roi à <mark>Saint-Domingue</mark> à partir de 1775, mort en 1780',
    name: 'Rastel de Rocheblave, Pierre Louis',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Rastel de Rocheblave, Pierre Louis, passe au Canada en 1749 ou il travail en tant que cadet, envoyé aux Illinois en 1759, nommé  gouverneur de Gorée en 1769, lieutenant de roi à Saint-Domingue à partir de 1775, mort en 1780',
    annotated_bio: '<strong>Rastel de Rocheblave, Pierre Louis</strong>, passe au <mark>Canada</mark> en 1749 ou il travail en tant que cadet, envoyé aux Illinois en 1759, nommé  gouverneur de <mark>Gorée</mark> en 1769, lieutenant de roi à <mark>Saint-Domingue</mark> à partir de 1775, mort en 1780',
    name: 'Rastel de Rocheblave, Pierre Louis',
    from: 'New France',
    to: 'Senegal',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Legros de La Grancours, Honoré Michel, commence le service dans la gendarmerie en 1742, passe au Canada en 1750 pour servir dans la guerre, enseigne à la Louisiane à partir de 1758, repasse en France en 1769, puis capitaine au régiment de l\'île de France , voyage en Inde à Pondicherry',
    annotated_bio: '<strong>Legros de La Grancours, Honoré Michel</strong>, commence le service dans la gendarmerie en 1742, passe au <mark>Canada</mark> en 1750 pour servir dans la guerre, enseigne à la <mark>Louisiane</mark> à partir de 1758, repasse en France en 1769, puis capitaine au régiment de l\'<mark>île de France</mark> , voyage en <mark>Inde</mark> à Pondicherry',
    name: 'Legros de La Grancours, Honoré Michel',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Legros de La Grancours, Honoré Michel, commence le service dans la gendarmerie en 1742, passe au Canada en 1750 pour servir dans la guerre, enseigne à la Louisiane à partir de 1758, repasse en France en 1769, puis capitaine au régiment de l\'île de France , voyage en Inde à Pondicherry',
    annotated_bio: '<strong>Legros de La Grancours, Honoré Michel</strong>, commence le service dans la gendarmerie en 1742, passe au <mark>Canada</mark> en 1750 pour servir dans la guerre, enseigne à la <mark>Louisiane</mark> à partir de 1758, repasse en France en 1769, puis capitaine au régiment de l\'<mark>île de France</mark> , voyage en <mark>Inde</mark> à Pondicherry',
    name: 'Legros de La Grancours, Honoré Michel',
    from: 'Isle Bourbon & Isle of France',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Legros de La Grancours, Honoré Michel, commence le service dans la gendarmerie en 1742, passe au Canada en 1750 pour servir dans la guerre, enseigne à la Louisiane à partir de 1758, repasse en France en 1769, puis capitaine au régiment de l\'île de France , voyage en Inde à Pondicherry',
    annotated_bio: '<strong>Legros de La Grancours, Honoré Michel</strong>, commence le service dans la gendarmerie en 1742, passe au <mark>Canada</mark> en 1750 pour servir dans la guerre, enseigne à la <mark>Louisiane</mark> à partir de 1758, repasse en France en 1769, puis capitaine au régiment de l\'<mark>île de France</mark> , voyage en <mark>Inde</mark> à Pondicherry',
    name: 'Legros de La Grancours, Honoré Michel',
    from: 'New France',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Meyracq, Laurent Domenger de, nommé bailli au bailliage royal de Louisbourg à l\'île Royale en 1750, puis nommé juge de l\'amirauté à la Guadeloupe en 1767',
    annotated_bio: '<strong>Meyracq, Laurent Domenger de</strong>, nommé bailli au bailliage royal de Louisbourg à l\'<mark>île Royale</mark> en 1750, puis nommé juge de l\'amirauté à la <mark>Guadeloupe</mark> en 1767',
    name: 'Meyracq, Laurent Domenger de',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Neyon de Villiers, Pierre Joseph, arrive en Louisiane en 1750, major commandant au pays des Illinois à partir de 1755, retourne en France en 1764, fait colonel au régiment de la Guadeloupe en 1772, gouverneur de Marie-Galante à partir de 1775, mort pendant la traversée de son retour en France en 1780 ',
    annotated_bio: '<strong>Neyon de Villiers, Pierre Joseph</strong>, arrive en <mark>Louisiane</mark> en 1750, major commandant au pays des Illinois à partir de 1755, retourne en France en 1764, fait colonel au régiment de la <mark>Guadeloupe</mark> en 1772, gouverneur de Marie-Galante à partir de 1775, mort pendant la traversée de son retour en France en 1780 ',
    name: 'Neyon de Villiers, Pierre Joseph',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Romain, créole de la Guadeloupe, appliqué au commerce Maritime, ayant résidé à Cayenne pendant 12 ans à partir des années 1750 ',
    annotated_bio: '<strong>Romain</strong>, créole de la <mark>Guadeloupe</mark>, appliqué au commerce Maritime, ayant résidé à <mark>Cayenne</mark> pendant 12 ans à partir des années 1750 ',
    name: 'Romain',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Sornay, Pierre Basile de, né en 1727, au service de la Marine à partir de 1746, passe à Pondichéry en 1750, prend service dans les troupes de la Compagnie des Indes en qualité d\'ingénieur et d\'officier d\'infantrie, capitaine à partir de 1759, commandant à la suite des milices de l\'Île de france à partir de 1769, puis major à l\'Île de France à partir de 1772 ',
    annotated_bio: '<strong>Sornay, Pierre Basile de</strong>, né en 1727, au service de la Marine à partir de 1746, passe à <mark>Pondichéry</mark> en 1750, prend service dans les troupes de la Compagnie des Indes en qualité d\'ingénieur et d\'officier d\'infantrie, capitaine à partir de 1759, commandant à la suite des milices de l\'<mark>Île de france</mark> à partir de 1769, puis major à l\'<mark>Île de France</mark> à partir de 1772 ',
    name: 'Sornay, Pierre Basile de',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Courville, Jean Benoist de, né à Montréal le 8 décembre 1751, lieutenant au régiment de la Martinique, puis capitaine au régiment de la Guadeloupe ',
    annotated_bio: '<strong>Courville, Jean Benoist de</strong>, né à <mark>Montréal</mark> le 8 décembre 1751, lieutenant au régiment de la <mark>Martinique</mark>, puis capitaine au régiment de la Guadeloupe ',
    name: 'Courville, Jean Benoist de',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Duparquier, Alexandre Claude, arrive en Louisiane en 1751.  Garde-magasin général du Roi à la Louisiane, puis chargé du bureau des classes à Saint-Domingue 1754/1775',
    annotated_bio: '<strong>Duparquier, Alexandre Claude</strong>, arrive en <mark>Louisiane</mark> en 1751.  Garde-magasin général du Roi à la <mark>Louisiane</mark>, puis chargé du bureau des classes à <mark>Saint-Domingue</mark> 1754/1775',
    name: 'Duparquier, Alexandre Claude',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Olivier, Joseph, commis aux ecritures à Québec à partir de 1751, puischargé du détail de l\'artillerie dans la même colonie à partir de 1752, retour en France en 1760 nommé garde-magasin principal à Port-au-Prince à Saint-Domingue à partir de 1786',
    annotated_bio: '<strong>Olivier, Joseph</strong>, commis aux ecritures à <mark>Québec</mark> à partir de 1751, puischargé du détail de l\'artillerie dans la même colonie à partir de 1752, retour en France en 1760 nommé garde-magasin principal à <mark>Port-au-Prince</mark> à Saint-Domingue à partir de 1786',
    name: 'Olivier, Joseph',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Albergati-Vezza, François Marie, marquis, cadet au Canada à partir de 1752, enseigne en 1756, lieutenant en 1767 puis capitaine de légion à l\'île de France 1760/1773',
    annotated_bio: '<strong>Albergati-Vezza, François Marie</strong>, marquis, cadet au <mark>Canada</mark> à partir de 1752, enseigne en 1756, lieutenant en 1767 puis capitaine de légion à l\'<mark>île de France</mark> 1760/1773',
    name: 'Albergati-Vezza, François Marie',
    from: 'Isle Bourbon & Isle of France',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Billouard Dessalles de Kervaségan, René Antoine Agathe, né en 1736, campagne volontaire et enseigne au service des la compagnie dans les Indes Orientales de 1752 à 1755, puis enseigne des troupes de la Louisiane en 1760, passe à Saint Domingue en 1766, puis officier puis capitaine au régiment de la Guadeloupe à partir de 1775',
    annotated_bio: '<strong>Billouard Dessalles de Kervaségan, René Antoine Agathe</strong>, né en 1736, campagne volontaire et enseigne au service des la compagnie dans les Indes Orientales de 1752 à 1755, puis enseigne des troupes de la <mark>Louisiane</mark> en 1760, passe à <mark>Saint Domingue</mark> en 1766, puis officier puis capitaine au régiment de la Guadeloupe à partir de 1775',
    name: 'Billouard Dessalles de Kervaségan, René Antoine Agathe',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Guyon, Jean Baptiste de, né en 1739, aide major au Canada en 1752, puis cadet d\'artillerie en 1757 et sous major d\'artillerie en 1758 toujours au Canada, renvoyé en France en 1760, puis sous aide major des compagnie d\'artillerie à Saint Domingue en 1762, passe en France en 1764,  puis lieutenant en second d\'artillerie à l\'Île de France en 1771 et passe comme sous lieutenant dans la même île en 1777',
    annotated_bio: '<strong>Guyon, Jean Baptiste de</strong>, né en 1739, aide major au <mark>Canada</mark> en 1752, puis cadet d\'artillerie en 1757 et sous major d\'artillerie en 1758 toujours au <mark>Canada</mark>, renvoyé en France en 1760, puis sous aide major des compagnie d\'artillerie à <mark>Saint Domingue</mark> en 1762, passe en France en 1764,  puis lieutenant en second d\'artillerie à l\'<mark>Île de France</mark> en 1771 et passe comme sous lieutenant dans la même île en 1777',
    name: 'Guyon, Jean Baptiste de',
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Guyon, Jean Baptiste de, né en 1739, aide major au Canada en 1752, puis cadet d\'artillerie en 1757 et sous major d\'artillerie en 1758 toujours au Canada, renvoyé en France en 1760, puis sous aide major des compagnie d\'artillerie à Saint Domingue en 1762, passe en France en 1764,  puis lieutenant en second d\'artillerie à l\'Île de France en 1771 et passe comme sous lieutenant dans la même île en 1777',
    annotated_bio: '<strong>Guyon, Jean Baptiste de</strong>, né en 1739, aide major au <mark>Canada</mark> en 1752, puis cadet d\'artillerie en 1757 et sous major d\'artillerie en 1758 toujours au <mark>Canada</mark>, renvoyé en France en 1760, puis sous aide major des compagnie d\'artillerie à <mark>Saint Domingue</mark> en 1762, passe en France en 1764,  puis lieutenant en second d\'artillerie à l\'<mark>Île de France</mark> en 1771 et passe comme sous lieutenant dans la même île en 1777',
    name: 'Guyon, Jean Baptiste de',
    from: 'Isle Bourbon & Isle of France',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Maissin, Jacques de, capitaine au service de la compagnie des Indes à partir de 1751, passe en Inde en 1752 et y reste jusqu\'en 1755, repasse en France, 1760 fait major de l\'ïle de France',
    annotated_bio: '<strong>Maissin, Jacques de</strong>, capitaine au service de la compagnie des <mark>Inde</mark>s à partir de 1751, passe en <mark>Inde</mark> en 1752 et y reste jusqu\'en 1755, repasse en France, 1760 fait major de l\'<mark>ïle de France</mark>',
    name: 'Maissin, Jacques de',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Orte, Jean François Denis d\', capitaine d\'une compagnie d\'ouvriers et ingénieur en chef à l\'île de Bourbon à partir de 1752  jusqu\'en 1767, inventeur d\'un moulin à coton, demande à être employé à Saint-Domingue en 1786',
    annotated_bio: '<strong>Orte, Jean François Denis d\'</strong>, capitaine d\'une compagnie d\'ouvriers et ingénieur en chef à l\'île de <mark>Bourbon</mark> à partir de 1752  jusqu\'en 1767, inventeur d\'un moulin à coton, demande à être employé à <mark>Saint-Domingue</mark> en 1786',
    name: 'Orte, Jean François Denis d\'',
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Rustan, Pascal Fabre, lieutenant et capitaine en Canada de 1752 à 1760, passage en France, puis garde-magasin à Pointe-à-Pitre à la Guadeloupe à partir de 1781',
    annotated_bio: '<strong>Rustan, Pascal Fabre</strong>, lieutenant et capitaine en <mark>Canada</mark> de 1752 à 1760, passage en France, puis garde-magasin à Pointe-à-Pitre à la <mark>Guadeloupe</mark> à partir de 1781',
    name: 'Rustan, Pascal Fabre',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Briard, Jean, prêtre du diocèse de Coutances, nommé missionnaire au Sénégal en 1753, devient prêtre à Saint-Domingue vers 1763',
    annotated_bio: '<strong>Briard, Jean</strong>, prêtre du diocèse de Coutances, nommé missionnaire au <mark>Sénégal</mark> en 1753, devient prêtre à <mark>Saint-Domingue</mark> vers 1763',
    name: 'Briard, Jean',
    from: 'Caribbean',
    to: 'Senegal',
    via_metropole: null,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Tizoneaux, employé dans les Bureaux de la Marine en Louisiane à partir de 1753, notaire en Louisiane à partir de 1758, chargé des comptes des gardes magasins de la Louisiane à partir de 1764, commis à la comptabilité de la Louisiane, nommé écrivain de la Marine, à Saint-Domingue à partir de 1774',
    annotated_bio: '<strong>Tizoneaux</strong>, employé dans les Bureaux de la Marine en <mark>Louisiane</mark> à partir de 1753, notaire en <mark>Louisiane</mark> à partir de 1758, chargé des comptes des gardes magasins de la <mark>Louisiane</mark> à partir de 1764, commis à la comptabilité de la <mark>Louisiane</mark>, nommé écrivain de la Marine, à <mark>Saint-Domingue</mark> à partir de 1774',
    name: 'Tizoneaux',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Champfort de Longueval, Nicolas, lieutenant et enseigne des troupes de la Louisiane à partir de c. 1754  jusqu\'en 1763, réfugié à Saint-Domingue en 1773',
    annotated_bio: '<strong>Champfort de Longueval, Nicolas</strong>, lieutenant et enseigne des troupes de la <mark>Louisiane</mark> à partir de c. 1754  jusqu\'en 1763, réfugié à <mark>Saint-Domingue</mark> en 1773',
    name: 'Champfort de Longueval, Nicolas',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Cadet de Fontenay, Pierre François, né à Paris, arrive au Canada en 1755 en qualité de cadet, puis aide major en 1755, officier en 1757, puis enseigne en 1758, passe à Cayenne en 1764 en qualité de Lieutenant sous aide major, lieutenant d\'une compagnie d\'ouvrier à l\'Île de France en 1769, puis lieutenant avec commission de capitaine au régiment de Port Louis en 1772 et capitaine en 1775, voyage dans l\'Inde evers 1785',
    annotated_bio: '<strong>Cadet de Fontenay, Pierre François</strong>, né à Paris, arrive au <mark>Canada</mark> en 1755 en qualité de cadet, puis aide major en 1755, officier en 1757, puis enseigne en 1758, passe à <mark>Cayenne</mark> en 1764 en qualité de Lieutenant sous aide major, lieutenant d\'une compagnie d\'ouvrier à l\'<mark>Île de France</mark> en 1769, puis lieutenant avec commission de capitaine au régiment de Port Louis en 1772 et capitaine en 1775, voyage dans l\'<mark>Inde</mark> evers 1785',
    name: 'Cadet de Fontenay, Pierre François',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: null,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Cadet de Fontenay, Pierre François, né à Paris, arrive au Canada en 1755 en qualité de cadet, puis aide major en 1755, officier en 1757, puis enseigne en 1758, passe à Cayenne en 1764 en qualité de Lieutenant sous aide major, lieutenant d\'une compagnie d\'ouvrier à l\'Île de France en 1769, puis lieutenant avec commission de capitaine au régiment de Port Louis en 1772 et capitaine en 1775, voyage dans l\'Inde evers 1785',
    annotated_bio: '<strong>Cadet de Fontenay, Pierre François</strong>, né à Paris, arrive au <mark>Canada</mark> en 1755 en qualité de cadet, puis aide major en 1755, officier en 1757, puis enseigne en 1758, passe à <mark>Cayenne</mark> en 1764 en qualité de Lieutenant sous aide major, lieutenant d\'une compagnie d\'ouvrier à l\'<mark>Île de France</mark> en 1769, puis lieutenant avec commission de capitaine au régiment de Port Louis en 1772 et capitaine en 1775, voyage dans l\'<mark>Inde</mark> evers 1785',
    name: 'Cadet de Fontenay, Pierre François',
    from: 'Isle Bourbon & Isle of France',
    to: 'New France',
    via_metropole: null,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Cadet de Fontenay, Pierre François, né à Paris, arrive au Canada en 1755 en qualité de cadet, puis aide major en 1755, officier en 1757, puis enseigne en 1758, passe à Cayenne en 1764 en qualité de Lieutenant sous aide major, lieutenant d\'une compagnie d\'ouvrier à l\'Île de France en 1769, puis lieutenant avec commission de capitaine au régiment de Port Louis en 1772 et capitaine en 1775, voyage dans l\'Inde evers 1785',
    annotated_bio: '<strong>Cadet de Fontenay, Pierre François</strong>, né à Paris, arrive au <mark>Canada</mark> en 1755 en qualité de cadet, puis aide major en 1755, officier en 1757, puis enseigne en 1758, passe à <mark>Cayenne</mark> en 1764 en qualité de Lieutenant sous aide major, lieutenant d\'une compagnie d\'ouvrier à l\'<mark>Île de France</mark> en 1769, puis lieutenant avec commission de capitaine au régiment de Port Louis en 1772 et capitaine en 1775, voyage dans l\'<mark>Inde</mark> evers 1785',
    name: 'Cadet de Fontenay, Pierre François',
    from: 'New France',
    to: 'Guyana',
    via_metropole: null,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Donnadieu de Pélissier Dugrès, Louis Joseph, chevalier, départ pour Louisbourg avec un bataillon en 1755, il obtient en 1764 un commission de capitaine à la suite des troupes nationales de la Guyane, à Cayenne, il fait les fonction d\'aide major des troupes. En 1769, fait aide major à Saint Domingue',
    annotated_bio: '<strong>Donnadieu de Pélissier Dugrès, Louis Joseph</strong>, chevalier, départ pour <mark>Louisbourg</mark> avec un bataillon en 1755, il obtient en 1764 un commission de capitaine à la suite des troupes nationales de la Guyane, à <mark>Cayenne</mark>, il fait les fonction d\'aide major des troupes. En 1769, fait aide major à <mark>Saint Domingue</mark>',
    name: 'Donnadieu de Pélissier Dugrès, Louis Joseph',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Donnadieu de Pélissier Dugrès, Louis Joseph, chevalier, départ pour Louisbourg avec un bataillon en 1755, il obtient en 1764 un commission de capitaine à la suite des troupes nationales de la Guyane, à Cayenne, il fait les fonction d\'aide major des troupes. En 1769, fait aide major à Saint Domingue',
    annotated_bio: '<strong>Donnadieu de Pélissier Dugrès, Louis Joseph</strong>, chevalier, départ pour <mark>Louisbourg</mark> avec un bataillon en 1755, il obtient en 1764 un commission de capitaine à la suite des troupes nationales de la Guyane, à <mark>Cayenne</mark>, il fait les fonction d\'aide major des troupes. En 1769, fait aide major à <mark>Saint Domingue</mark>',
    name: 'Donnadieu de Pélissier Dugrès, Louis Joseph',
    from: 'New France',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Gohin, Pierre André de, chevalier de Montreuil, major général à Montréal au Canada en 1755, puis gouverneur général, par intérim de Saint-Domingue à partir de 1763',
    annotated_bio: '<strong>Gohin, Pierre André de</strong>, chevalier de Montreuil, major général à Montréal au <mark>Canada</mark> en 1755, puis gouverneur général, par intérim de <mark>Saint-Domingue</mark> à partir de 1763',
    name: 'Gohin, Pierre André de',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Lépervanche, Eustache de, commence à servir au Canada en 1755 en tant que cadet, fait enseigne des troupes du Canada en 1759,fait lieutenant dans la légion de l\'Île de France en 1766 puis lieutenant dans la même legion en 1766, passe en la même qualité au régiment de l\'Île Bourbon capitaine au régiment de Bourbon, passe capitaine au régimen de l\'Île Bourbon en 1785, obtient sa retraite en 1786.',
    annotated_bio: '<strong>Lépervanche, Eustache de</strong>, commence à servir au <mark>Canada</mark> en 1755 en tant que cadet, fait enseigne des troupes du <mark>Canada</mark> en 1759,fait lieutenant dans la légion de l\'<mark>Île de France</mark> en 1766 puis lieutenant dans la même legion en 1766, passe en la même qualité au régiment de l\'Île Bourbon capitaine au régiment de Bourbon, passe capitaine au régimen de l\'Île Bourbon en 1785, obtient sa retraite en 1786.',
    name: 'Lépervanche, Eustache de',
    from: 'Isle Bourbon & Isle of France',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Magon de La Villebague, René,  gouverneur des îles de France et de Bourbon de 1755 à 1759, intendant de Saint-Domingue de 1763 à 1766. Plusieurs membres de sa famille ont fait carrière dans les colonies. ',
    annotated_bio: '<strong>Magon de La Villebague, René</strong>,  gouverneur des îles de France et de <mark>Bourbon</mark> de 1755 à 1759, intendant de <mark>Saint-Domingue</mark> de 1763 à 1766. Plusieurs membres de sa famille ont fait carrière dans les colonies. ',
    name: 'Magon de La Villebague, René',
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Morin, Jean Antoine Charles, cadet dans les troupes de Louisbourg à partir de 1755, nommé cadet dans les troupes nationales de Guyane en 1764, sous lieutenant au régiment de la Guadeloupe depart en 1775, demande une place dans les bureaux de l\'île de France, passage en 1784',
    annotated_bio: '<strong>Morin, Jean Antoine Charles</strong>, cadet dans les troupes de <mark>Louisbourg</mark> à partir de 1755, nommé cadet dans les troupes nationales de Guyane en 1764, sous lieutenant au régiment de la <mark>Guadeloupe</mark> depart en 1775, demande une place dans les bureaux de l\'<mark>île de France</mark>, passage en 1784',
    name: 'Morin, Jean Antoine Charles',
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Morin, Jean Antoine Charles, cadet dans les troupes de Louisbourg à partir de 1755, nommé cadet dans les troupes nationales de Guyane en 1764, sous lieutenant au régiment de la Guadeloupe depart en 1775, demande une place dans les bureaux de l\'île de France, passage en 1784',
    annotated_bio: '<strong>Morin, Jean Antoine Charles</strong>, cadet dans les troupes de <mark>Louisbourg</mark> à partir de 1755, nommé cadet dans les troupes nationales de Guyane en 1764, sous lieutenant au régiment de la <mark>Guadeloupe</mark> depart en 1775, demande une place dans les bureaux de l\'<mark>île de France</mark>, passage en 1784',
    name: 'Morin, Jean Antoine Charles',
    from: 'Isle Bourbon & Isle of France',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Doumet de Siblas, Jacques, sous ingénieur à l\'Île Royale en 1756, puis ingénieur et capitaine. Major à l\'Île de Gorée en 1763, puis rang de lieutenant colonel. Major du Petit Goyave en 1775, puis rang de lieutenant du roi en 1780. Lieutenant du roi des Cayes en 1780 puis commandant du quartier de Port au Prince de Saint Domingue en 1783. Rang de colonel en 1785. ',
    annotated_bio: '<strong>Doumet de Siblas, Jacques</strong>, sous ingénieur à l\'<mark>Île Royale</mark> en 1756, puis ingénieur et capitaine. Major à l\'Île de <mark>Gorée</mark> en 1763, puis rang de lieutenant colonel. Major du Petit Goyave en 1775, puis rang de lieutenant du roi en 1780. Lieutenant du roi des Cayes en 1780 puis commandant du quartier de Port au Prince de <mark>Saint Domingue</mark> en 1783. Rang de colonel en 1785. ',
    name: 'Doumet de Siblas, Jacques',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Doumet de Siblas, Jacques, sous ingénieur à l\'Île Royale en 1756, puis ingénieur et capitaine. Major à l\'Île de Gorée en 1763, puis rang de lieutenant colonel. Major du Petit Goyave en 1775, puis rang de lieutenant du roi en 1780. Lieutenant du roi des Cayes en 1780 puis commandant du quartier de Port au Prince de Saint Domingue en 1783. Rang de colonel en 1785. ',
    annotated_bio: '<strong>Doumet de Siblas, Jacques</strong>, sous ingénieur à l\'<mark>Île Royale</mark> en 1756, puis ingénieur et capitaine. Major à l\'Île de <mark>Gorée</mark> en 1763, puis rang de lieutenant colonel. Major du Petit Goyave en 1775, puis rang de lieutenant du roi en 1780. Lieutenant du roi des Cayes en 1780 puis commandant du quartier de Port au Prince de <mark>Saint Domingue</mark> en 1783. Rang de colonel en 1785. ',
    name: 'Doumet de Siblas, Jacques',
    from: 'New France',
    to: 'Senegal',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Perrault, Paul, major des milices du Canada à partir de 1756 jusqu\'à la capitulation, passé ensuite à Cayenne ou il meurt ',
    annotated_bio: '<strong>Perrault, Paul</strong>, major des milices du <mark>Canada</mark> à partir de 1756 jusqu\'à la capitulation, passé ensuite à <mark>Cayenne</mark> ou il meurt ',
    name: 'Perrault, Paul',
    from: 'New France',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Vincelotte de Sainte-Hélène, originaire du Canada, née à la Martinique, a perdu sa fortune au Canada pendant la guerre de 1756 et les évènements qui ont suivis',
    annotated_bio: '<strong>Vincelotte de Sainte-Hélène</strong>, originaire du <mark>Canada</mark>, née à la <mark>Martinique</mark>, a perdu sa fortune au <mark>Canada</mark> pendant la guerre de 1756 et les évènements qui ont suivis',
    name: 'Vincelotte de Sainte-Hélène',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: null,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Allemagne de Varage, Louis d\', chevalier, né en 1740, capitaine au régiment d\'Angoumois, ayant fait campagne à la Louisiane vers 1757, passe à Saint-Domingue vers 1786, demande une compagnie dans un régiment des colonies ou un emploi dans un état-major des Iles ',
    annotated_bio: '<strong>Allemagne de Varage, Louis d\'</strong>, chevalier, né en 1740, capitaine au régiment d\'Angoumois, ayant fait campagne à la <mark>Louisiane</mark> vers 1757, passe à <mark>Saint-Domingue</mark> vers 1786, demande une compagnie dans un régiment des colonies ou un emploi dans un état-major des Iles ',
    name: 'Allemagne de Varage, Louis d\'',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Durseau, Jean,  habitant du Canada à partir d\'avant 1757 demande de secours et de passage à Saint-Domingue ou à la Martinique en 1763',
    annotated_bio: '<strong>Durseau, Jean</strong>,  habitant du <mark>Canada</mark> à partir d\'avant 1757 demande de secours et de passage à <mark>Saint-Domingue</mark> ou à la Martinique en 1763',
    name: 'Durseau, Jean',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: null,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Godefroy de Linetot, Maurice Régis, né à Montréal, entre au service au Canada en 1757, puis capitaine aux régiments de l\'île de France, bléssé à Madagascar, mission aux Indies Orientales, 1757/1785',
    annotated_bio: '<strong>Godefroy de Linetot, Maurice Régis</strong>, né à Montréal, entre au service au <mark>Canada</mark> en 1757, puis capitaine aux régiments de l\'<mark>île de France</mark>, bléssé à Madagascar, mission aux Indies Orientales, 1757/1785',
    name: 'Godefroy de Linetot, Maurice Régis',
    from: 'Isle Bourbon & Isle of France',
    to: 'New France',
    via_metropole: null,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Neyon de Soizy, Alexandre Joseph, cadet en Louisiane en 1757, puis lieutenant/sous aide major en Guadeloupe en 1772 et capitaine dans la même colonie à partir de 1774',
    annotated_bio: '<strong>Neyon de Soizy, Alexandre Joseph</strong>, cadet en <mark>Louisiane</mark> en 1757, puis lieutenant/sous aide major en <mark>Guadeloupe</mark> en 1772 et capitaine dans la même colonie à partir de 1774',
    name: 'Neyon de Soizy, Alexandre Joseph',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Dazille, Jean Barthélemy, chirurgien, voyages au Canada à partir de 1758, en 1763, il obtient un brevet de chirurgien major des troupes et des habitans de Cayenne, puis en 1766, il obtient un brevet de chirurgien major des hopiteaux de l\'Île de France, puis chirurgien du roi à Saint Domingue',
    annotated_bio: '<strong>Dazille, Jean Barthélemy</strong>, chirurgien, voyages au <mark>Canada</mark> à partir de 1758, en 1763, il obtient un brevet de chirurgien major des troupes et des habitans de <mark>Cayenne</mark>, puis en 1766, il obtient un brevet de chirurgien major des hopiteaux de l\'<mark>Île de France</mark>, puis chirurgien du roi à <mark>Saint Domingue</mark>',
    name: 'Dazille, Jean Barthélemy',
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Dazille, Jean Barthélemy, chirurgien, voyages au Canada à partir de 1758, en 1763, il obtient un brevet de chirurgien major des troupes et des habitans de Cayenne, puis en 1766, il obtient un brevet de chirurgien major des hopiteaux de l\'Île de France, puis chirurgien du roi à Saint Domingue',
    annotated_bio: '<strong>Dazille, Jean Barthélemy</strong>, chirurgien, voyages au <mark>Canada</mark> à partir de 1758, en 1763, il obtient un brevet de chirurgien major des troupes et des habitans de <mark>Cayenne</mark>, puis en 1766, il obtient un brevet de chirurgien major des hopiteaux de l\'<mark>Île de France</mark>, puis chirurgien du roi à <mark>Saint Domingue</mark>',
    name: 'Dazille, Jean Barthélemy',
    from: 'Isle Bourbon & Isle of France',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Dazille, Jean Barthélemy, chirurgien, voyages au Canada à partir de 1758, en 1763, il obtient un brevet de chirurgien major des troupes et des habitans de Cayenne, puis en 1766, il obtient un brevet de chirurgien major des hopiteaux de l\'Île de France, puis chirurgien du roi à Saint Domingue',
    annotated_bio: '<strong>Dazille, Jean Barthélemy</strong>, chirurgien, voyages au <mark>Canada</mark> à partir de 1758, en 1763, il obtient un brevet de chirurgien major des troupes et des habitans de <mark>Cayenne</mark>, puis en 1766, il obtient un brevet de chirurgien major des hopiteaux de l\'<mark>Île de France</mark>, puis chirurgien du roi à <mark>Saint Domingue</mark>',
    name: 'Dazille, Jean Barthélemy',
    from: 'New France',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Douin de La Motte, lieutenant à la Louisiane en 1758, puis capitaine à Saint Domingue en 1762',
    annotated_bio: '<strong>Douin de La Motte</strong>, lieutenant à la <mark>Louisiane</mark> en 1758, puis capitaine à <mark>Saint Domingue</mark> en 1762',
    name: 'Douin de La Motte',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Foubert, enseigne dans les troupes du Canada, demande à passer à la Louisiane en 1758',
    annotated_bio: '<strong>Foubert</strong>, enseigne dans les troupes du <mark>Canada</mark>, demande à passer à la <mark>Louisiane</mark> en 1758',
    name: 'Foubert',
    from: 'New France',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Normand, écrivain des colonies à la Louisiane à partir de 1758 puis à Cayenne à partir de 1763, commissaire des classes à Bayonne en 1779 ',
    annotated_bio: '<strong>Normand</strong>, écrivain des colonies à la <mark>Louisiane</mark> à partir de 1758 puis à <mark>Cayenne</mark> à partir de 1763, commissaire des classes à Bayonne en 1779 ',
    name: 'Normand',
    from: 'Louisiana',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Bertaud, Jacques, de la Rochelle, colon de la Louisiane à partir de 1759, puis à Saint-Domingue en conséquence de la guerre de Sept ans, et sa femme Gabrielle Gabion, demande de secours dans les années 1770',
    annotated_bio: '<strong>Bertaud, Jacques</strong>, de la Rochelle, colon de la <mark>Louisiane</mark> à partir de 1759, puis à <mark>Saint-Domingue</mark> en conséquence de la guerre de Sept ans, et sa femme Gabrielle Gabion, demande de secours dans les années 1770',
    name: 'Bertaud, Jacques',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Gannes, Georges de, né au Canada en 1759, cadet gentilhomme, sous-lieutenant au régiment du Cap, à Saint-Domingue, puis au régiment de la Martinique 1779/1790',
    annotated_bio: '<strong>Gannes, Georges de</strong>, né au <mark>Canada</mark> en 1759, cadet gentilhomme, sous-lieutenant au régiment du Cap, à <mark>Saint-Domingue</mark>, puis au régiment de la Martinique 1779/1790',
    name: 'Gannes, Georges de',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Macarty de Macteigne, de, chevalier, entre au service en 1759. Enseigne des troupes de la Louisiane à partir de 1762, passe à Saint Domingue en 1779, puis lieutenant des grenadiers volontaires au Cap-Français à Saint-Domingue. Fils du Lieutenant au roi à la Louisiane',
    annotated_bio: '<strong>Macarty de Macteigne, de,</strong> chevalier, entre au service en 1759. Enseigne des troupes de la <mark>Louisiane</mark> à partir de 1762, passe à Saint Domingue en 1779, puis lieutenant des grenadiers volontaires au <mark>Cap-Français</mark> à Saint-Domingue. Fils du Lieutenant au roi à la <mark>Louisiane</mark>',
    name: 'Macarty de Macteigne, de,',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Fontette-Sommery, Charles Marie de, comte, entre au service en 1760. Capitaine de dragons au régiment d\'Artois, employé à Saint-Domingue puis comme aide-de camp de M. de Boufflers au Sénégal 1779/1785',
    annotated_bio: '<strong>Fontette-Sommery, Charles Marie de</strong>, comte, entre au service en 1760. Capitaine de dragons au régiment d\'Artois, employé à <mark>Saint-Domingue</mark> puis comme aide-de camp de M. de Boufflers au <mark>Sénégal</mark> 1779/1785',
    name: 'Fontette-Sommery, Charles Marie de',
    from: 'Caribbean',
    to: 'Senegal',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Dantier, Maximin Joseph Félix, engagé dans les troupes de la compagnie des indes en 1759, depart pour l\'Île de France en 1761, en guerre sur la côte Malabare en Inde en 1775, nommé sous lieutenant de la Milice bourgeoise de Mahé en 1778, officier en 1778, sous lieutenant au régiment de Pondichéry en 1784, puis à L\'Île de France en 1785, lieutenant en second en 1787',
    annotated_bio: '<strong>Dantier, Maximin Joseph Félix</strong>, engagé dans les troupes de la compagnie des indes en 1759, depart pour l\'<mark>Île de France</mark> en 1761, en guerre sur la côte Malabare en Inde en 1775, nommé sous lieutenant de la Milice bourgeoise de Mahé en 1778, officier en 1778, sous lieutenant au régiment de <mark>Pondichéry</mark> en 1784, puis à L\'<mark>Île de France</mark> en 1785, lieutenant en second en 1787',
    name: 'Dantier, Maximin Joseph Félix',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Petit, François, à l\'Île de France en 1761, incorporé au régiment de l\'Île de France en 1775,  adjudant au régiment de l\'Île Bourbon à partir de 1785, puis capitaine de la garde nationale à Pondichéry à partir de 1793',
    annotated_bio: '<strong>Petit, François</strong>, à l\'<mark>Île de France</mark> en 1761, incorporé au régiment de l\'<mark>Île de France</mark> en 1775,  adjudant au régiment de l\'Île Bourbon à partir de 1785, puis capitaine de la garde nationale à <mark>Pondichéry</mark> à partir de 1793',
    name: 'Petit, François',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Carné de Trécesson, René Camille de, comte, époux de Françoise Louise Henriette de Rostaing, aide-major général à Cayenne (1762), commandant en second aux îles Saint-Martin et Saint-Barthélemy (1763), lieutenant-colonel d\'infanterie (1772), chef de bataillon du régiment de la Guadeloupe (1775), assassiné par son domestique, en 1784, à Avignon 1769/1785',
    annotated_bio: '<strong>Carné de Trécesson, René Camille de</strong>, comte, époux de Françoise Louise Henriette de Rostaing, aide-major général à <mark>Cayenne</mark> (1762), commandant en second aux îles Saint-Martin et Saint-Barthélemy (1763), lieutenant-colonel d\'infanterie (1772), chef de bataillon du régiment de la <mark>Guadeloupe</mark> (1775), assassiné par son domestique, en 1784, à Avignon 1769/1785',
    name: 'Carné de Trécesson, René Camille de',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Clermont-Brethe, François Marie René de, arrive à Cayenne vers 1762, y devient exempt de la compagnie de maréchaussée en 1764, repasse en France en 1765, nommé capitaine au régiment de Port-Louis, à l\'île de France ',
    annotated_bio: '<strong>Clermont-Brethe, François Marie René de</strong>, arrive à <mark>Cayenne</mark> vers 1762, y devient exempt de la compagnie de maréchaussée en 1764, repasse en France en 1765, nommé capitaine au régiment de Port-Louis, à l\'<mark>île de France</mark> ',
    name: 'Clermont-Brethe, François Marie René de',
    from: 'Isle Bourbon & Isle of France',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Herbourg, Marie Marthe, du Canada, passée à la Martinique en 1763',
    annotated_bio: '<strong>Herbourg, Marie Marthe</strong>, du <mark>Canada</mark>, passée à la <mark>Martinique</mark> en 1763',
    name: 'Herbourg, Marie Marthe',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Mars, Joseph de, passé à Cayenne en 1763, commandant particulier à Cayenne, passé à la Guadeloupe en 1768, où il a servi dans les états-majors ',
    annotated_bio: '<strong>Mars, Joseph de</strong>, passé à <mark>Cayenne</mark> en 1763, commandant particulier à <mark>Cayenne</mark>, passé à la <mark>Guadeloupe</mark> en 1768, où il a servi dans les états-majors ',
    name: 'Mars, Joseph de',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Lartigue, Jacques, originaire de Louisbourg à l\'île Royale, nommé pour Cayenne en 1764, puis procureur du Roi de la juridiction de Cayenne, mort à Cayenne vers 1775, son père était juge à Louisbourg',
    annotated_bio: '<strong>Lartigue, Jacques</strong>, originaire de Louisbourg à l\'<mark>île Royale</mark>, nommé pour <mark>Cayenne</mark> en 1764, puis procureur du Roi de la juridiction de <mark>Cayenne</mark>, mort à <mark>Cayenne</mark> vers 1775, son père était juge à Louisbourg',
    name: 'Lartigue, Jacques',
    from: 'New France',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Boucault, Charles, prisonnier d\'Etat pour la Désirade, venant de Cayenne, mort à la Martinique 1764',
    annotated_bio: '<strong>Boucault, Charles</strong>, prisonnier d\'Etat pour la Désirade, venant de <mark>Cayenne</mark>, mort à la <mark>Martinique</mark> 1764',
    name: 'Boucault, Charles',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'L\'Ostende, de, chevalier, ancien capitaine au régiment de l\'île de France, demande à passer à Cayenne en 1764',
    annotated_bio: '<strong>L\'Ostende, de,</strong> chevalier, ancien capitaine au régiment de l\'<mark>île de France</mark>, demande à passer à <mark>Cayenne</mark> en 1764',
    name: 'L\'Ostende, de,',
    from: 'Isle Bourbon & Isle of France',
    to: 'Guyana',
    via_metropole: null,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Poillevé, officier des troupes de Louisiane et lieutenant dans la légion de Saint-Domingue, demande de congé pour retourner en France en 1765',
    annotated_bio: '<strong>Poillevé</strong>, officier des troupes de <mark>Louisiane</mark> et lieutenant dans la légion de <mark>Saint-Domingue</mark>, demande de congé pour retourner en France en 1765',
    name: 'Poillevé',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Berthelot de Crosse, ancien officier au Canada, commission de capitaine dans la légion de Saint-Domingue en 1766, lieutenant aux îles Saint-Pierre et Miquelon ',
    annotated_bio: '<strong>Berthelot de Crosse</strong>, ancien officier au <mark>Canada</mark>, commission de capitaine dans la légion de <mark>Saint-Domingue</mark> en 1766, lieutenant aux îles Saint-Pierre et Miquelon ',
    name: 'Berthelot de Crosse',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Frondad, de, capitaine au régiment d\'Angoumois à la Louisiane, résidant à Saint Domingue en 1766. En service depuis 23 ans. ',
    annotated_bio: '<strong>Frondad, de,</strong> capitaine au régiment d\'Angoumois à la <mark>Louisiane</mark>, résidant à <mark>Saint Domingue</mark> en 1766. En service depuis 23 ans. ',
    name: 'Frondad, de,',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Giraud, habitant de Cayenne condamné pour sévices envers ses nègres en 1766, passé à Saint-Domingue ',
    annotated_bio: '<strong>Giraud</strong>, habitant de <mark>Cayenne</mark> condamné pour sévices envers ses nègres en 1766, passé à <mark>Saint-Domingue</mark> ',
    name: 'Giraud',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: null,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Hardy, Jean Claude, natif de l\'île de France, soldat à la légion de Saint-Domingue, départ en 1766',
    annotated_bio: '<strong>Hardy, Jean Claude</strong>, natif de l\'<mark>île de France</mark>, soldat à la légion de <mark>Saint-Domingue</mark>, départ en 1766',
    name: 'Hardy, Jean Claude',
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Philippe, Claude Guy, né en 1734 à Paris, enseigne en Louisiane, puis lieutenant à Saint-Domingue après 1766',
    annotated_bio: '<strong>Philippe, Claude Guy</strong>, né en 1734 à Paris, enseigne en <mark>Louisiane</mark>, puis lieutenant à <mark>Saint-Domingue</mark> après 1766',
    name: 'Philippe, Claude Guy',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Huaud, Gilles, ancien habitant de Louisbourg, passé à Cayenne en 1763 et employé au magasin de Sinnamary ',
    annotated_bio: '<strong>Huaud, Gilles</strong>, ancien habitant de <mark>Louisbourg</mark>, passé à <mark>Cayenne</mark> en 1763 et employé au magasin de Sinnamary ',
    name: 'Huaud, Gilles',
    from: 'New France',
    to: 'Guyana',
    via_metropole: null,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Barrère, Jean Baptiste, négociant au Cap-Français (Saint-Domingue), escale en martinique, guadeloupe, procédure de confiscation pour fait de commerce étranger du bateau le Bayonnais, capitaine Amiaud, par le tribunal de l\'amirauté de Cayenne en 1768',
    annotated_bio: '<strong>Barrère, Jean Baptiste</strong>, négociant au <mark>Cap-Français</mark> (Saint-Domingue), escale en martinique, guadeloupe, procédure de confiscation pour fait de commerce étranger du bateau le Bayonnais, capitaine Amiaud, par le tribunal de l\'amirauté de <mark>Cayenne</mark> en 1768',
    name: 'Barrère, Jean Baptiste',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Geoffrion de Boisy, resident de l\'Île Bourbon avant 1768, employé dans les bureaux de l\'île de Bourbon, passé à Pondichéry, puis à l\'armée anglaise 1772',
    annotated_bio: '<strong>Geoffrion de Boisy</strong>, resident de l\'Île <mark>Bourbon</mark> avant 1768, employé dans les bureaux de l\'île de <mark>Bourbon</mark>, passé à <mark>Pondichéry</mark>, puis à l\'armée anglaise 1772',
    name: 'Geoffrion de Boisy',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Dufay, lieutenant au régiment de la Reine, qui a  servi au Canada pendant plusieurs campagnes, demande une compagnie dans la légion de l\'île de France en 1769',
    annotated_bio: '<strong>Dufay</strong>, lieutenant au régiment de la Reine, qui a  servi au <mark>Canada</mark> pendant plusieurs campagnes, demande une compagnie dans la légion de l\'<mark>île de France</mark> en 1769',
    name: 'Dufay',
    from: 'Isle Bourbon & Isle of France',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Delisle, ancien habitant du Canada, conseiller au Conseil supérieur de l\'île de Bourbon, mort vers 1770',
    annotated_bio: '<strong>Delisle</strong>, ancien habitant du <mark>Canada</mark>, conseiller au Conseil supérieur de l\'île de <mark>Bourbon</mark>, mort vers 1770',
    name: 'Delisle',
    from: 'Isle Bourbon & Isle of France',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Jacquin-Philibert, Nicolas, ancien habitant du Canada, désire passer à l\'île de Bourbon, auprès de son frère, sous-commissaire de la Marine en 1770',
    annotated_bio: '<strong>Jacquin-Philibert, Nicolas</strong>, ancien habitant du <mark>Canada</mark>, désire passer à l\'île de <mark>Bourbon</mark>, auprès de son frère, sous-commissaire de la Marine en 1770',
    name: 'Jacquin-Philibert, Nicolas',
    from: 'Isle Bourbon & Isle of France',
    to: 'New France',
    via_metropole: null,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'La Barthe, Jean Baptiste, négociant et habitant de Port-au-Prince à Saint-Domingue, demande une concession à Cayenne en 1770',
    annotated_bio: '<strong>La Barthe, Jean Baptiste</strong>, négociant et habitant de <mark>Port-au-Prince</mark> à Saint-Domingue, demande une concession à <mark>Cayenne</mark> en 1770',
    name: 'La Barthe, Jean Baptiste',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: null,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Patrault, commis aux écritures à Cayenne, emmené à l\'Île de France après 1771',
    annotated_bio: '<strong>Patrault</strong>, commis aux écritures à <mark>Cayenne</mark>, emmené à l\'<mark>Île de France</mark> après 1771',
    name: 'Patrault',
    from: 'Isle Bourbon & Isle of France',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: ' Thorame, commis aux écritures à Cayenne, emmené à l\'Île de France après 1771',
    annotated_bio: '<strong> Thorame</strong>, commis aux écritures à <mark>Cayenne</mark>, emmené à l\'<mark>Île de France</mark> après 1771',
    name: ' Thorame',
    from: 'Isle Bourbon & Isle of France',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Fusée-aublet, Laurent, médecin et botaniste à l\'île de France, Cayenne et Saint Domingue. Obtient une pension en 1773. ',
    annotated_bio: '<strong>Fusée-aublet, Laurent</strong>, médecin et botaniste à l\'<mark>île de France</mark>, <mark>Cayenne</mark> et <mark>Saint Domingue</mark>. Obtient une pension en 1773. ',
    name: 'Fusée-aublet, Laurent',
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Fusée-aublet, Laurent, médecin et botaniste à l\'île de France, Cayenne et Saint Domingue. Obtient une pension en 1773. ',
    annotated_bio: '<strong>Fusée-aublet, Laurent</strong>, médecin et botaniste à l\'<mark>île de France</mark>, <mark>Cayenne</mark> et <mark>Saint Domingue</mark>. Obtient une pension en 1773. ',
    name: 'Fusée-aublet, Laurent',
    from: 'Isle Bourbon & Isle of France',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Deschiens de Villefeu, employé en qualité de lieutenant sur la corvette du Roi le Nécessaire, puis commandant du navire l\'Indienne, de Bordeaux allant aux îles de France, passe du temps a Cayenne, incident survenu pendant sa relâche à Gorée  en 1774',
    annotated_bio: '<strong>Deschiens de Villefeu</strong>, employé en qualité de lieutenant sur la corvette du Roi le Nécessaire, puis commandant du navire l\'Indienne, de Bordeaux allant aux îles de France, passe du temps a <mark>Cayenne</mark>, incident survenu pendant sa relâche à <mark>Gorée</mark>  en 1774',
    name: 'Deschiens de Villefeu',
    from: 'Guyana',
    to: 'Senegal',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Caro, François, invalide des troupes de la Compagnie des Indes, à l\'île de France, venu en France, demande à repasser à Pondichéry où est toujours sa famille en 1775',
    annotated_bio: '<strong>Caro, François</strong>, invalide des troupes de la Compagnie des Indes, à l\'<mark>île de France</mark>, venu en France, demande à repasser à <mark>Pondichéry</mark> où est toujours sa famille en 1775',
    name: 'Caro, François',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Balthazar Fabre Pontfrac de Mazan, ancien officier des troupes détachées à la Louisiane, mort major du Fort-Dauphin à Saint Domingue en 1775 ',
    annotated_bio: '<strong>Balthazar Fabre Pontfrac de Mazan</strong>, ancien officier des troupes détachées à la <mark>Louisiane</mark>, mort major du Fort-Dauphin à <mark>Saint Domingue</mark> en 1775 ',
    name: 'Balthazar Fabre Pontfrac de Mazan',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Olivier, Jacques, exempt de maréchaussée à Saint-Domingue, puis canonnier à l\'île de France, demande à passer à Pondichéry en 1775',
    annotated_bio: '<strong>Olivier, Jacques</strong>, exempt de maréchaussée à <mark>Saint-Domingue</mark>, puis canonnier à l\'<mark>île de France</mark>, demande à passer à <mark>Pondichéry</mark> en 1775',
    name: 'Olivier, Jacques',
    from: 'Caribbean',
    to: 'India',
    via_metropole: null,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Olivier, Jacques, exempt de maréchaussée à Saint-Domingue, puis canonnier à l\'île de France, demande à passer à Pondichéry en 1775',
    annotated_bio: '<strong>Olivier, Jacques</strong>, exempt de maréchaussée à <mark>Saint-Domingue</mark>, puis canonnier à l\'<mark>île de France</mark>, demande à passer à <mark>Pondichéry</mark> en 1775',
    name: 'Olivier, Jacques',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: null,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Anne Elisabeth Gadobert aux Illinois, à la Louisiane, morte à Saint-Domingue en 1776',
    annotated_bio: '<strong>Anne Elisabeth Gadobert aux Illinois</strong>, à la <mark>Louisiane</mark>, morte à <mark>Saint-Domingue</mark> en 1776',
    name: 'Anne Elisabeth Gadobert aux Illinois',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: null,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Le Cler, Pierre, de Québec, matelot mort à Pondichéry en 1776',
    annotated_bio: '<strong>Le Cler, Pierre</strong>, de <mark>Québec</mark>, matelot mort à <mark>Pondichéry</mark> en 1776',
    name: 'Le Cler, Pierre',
    from: 'India',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Lépine, de, employé aux écritures à la Guadeloupe, demande à passer à Pondichéry en 1776',
    annotated_bio: '<strong>Lépine, de,</strong> employé aux écritures à la <mark>Guadeloupe</mark>, demande à passer à <mark>Pondichéry</mark> en 1776',
    name: 'Lépine, de,',
    from: 'Caribbean',
    to: 'India',
    via_metropole: true,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Pascaud, Joseph, natif du Bas-Poitou, ci-devant négociant à Québec, demande le brevet d\'interprète du Roi pour la langue anglaise, au Cap-Français à Saint-Domingue en 1776, il y a passé du temps, il reçoit un commission d\'interprete pour la langue anglaise au Cap en 1777 puis une commission d\'interprete du roi au pres du gouvernemente et des tribunaux de Saint Domingue en 1779',
    annotated_bio: '<strong>Pascaud, Joseph</strong>, natif du Bas-Poitou, ci-devant négociant à <mark>Québec</mark>, demande le brevet d\'interprète du Roi pour la langue anglaise, au <mark>Cap-Français</mark> à Saint-Domingue en 1776, il y a passé du temps, il reçoit un commission d\'interprete pour la langue anglaise au Cap en 1777 puis une commission d\'interprete du roi au pres du gouvernemente et des tribunaux de Saint Domingue en 1779',
    name: 'Pascaud, Joseph',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: null,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Harné, Jean, natif de l\'île de Bourbon, élève-pilote, mort à Chandernagor 1777',
    annotated_bio: '<strong>Harné, Jean</strong>, natif de l\'île de <mark>Bourbon</mark>, élève-pilote, mort à <mark>Chandernagor</mark> 1777',
    name: 'Harné, Jean',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Proby, Claude François de, ancien lieutenant de milices à Saint-Domingue, demande ce grade à Cayenne ou il a dirigé une habitation à partir d\'Octobre 1777',
    annotated_bio: '<strong>Proby, Claude François de</strong>, ancien lieutenant de milices à <mark>Saint-Domingue</mark>, demande ce grade à <mark>Cayenne</mark> ou il a dirigé une habitation à partir d\'Octobre 1777',
    name: 'Proby, Claude François de',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Duhart, capitaine de l\'Économe, venu de Saint-Domingue à Gorée en 1778, envoyé à Cayenne on ne sait pas si il est arrivé à cette destination',
    annotated_bio: '<strong>Duhart</strong>, capitaine de l\'Économe, venu de <mark>Saint-Domingue</mark> à <mark>Gorée</mark> en 1778, envoyé à <mark>Cayenne</mark> on ne sait pas si il est arrivé à cette destination',
    name: 'Duhart',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Duhart, capitaine de l\'Économe, venu de Saint-Domingue à Gorée en 1778, envoyé à Cayenne on ne sait pas si il est arrivé à cette destination',
    annotated_bio: '<strong>Duhart</strong>, capitaine de l\'Économe, venu de <mark>Saint-Domingue</mark> à <mark>Gorée</mark> en 1778, envoyé à <mark>Cayenne</mark> on ne sait pas si il est arrivé à cette destination',
    name: 'Duhart',
    from: 'Guyana',
    to: 'Senegal',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Estèbe, ancien conseiller au Conseil supérieur de Québec, secrétaire du Roi en la chancellerie près la cour des aides de Bordeaux, demande que les lettres d\'honneur de cet emploi qui lui ont été accordées soient enregistrées au Conseil supérieur de Saint-Domingue ou il a une partie de sa famille en 1779',
    annotated_bio: '<strong>Estèbe</strong>, ancien conseiller au Conseil supérieur de <mark>Québec</mark>, secrétaire du Roi en la chancellerie près la cour des aides de Bordeaux, demande que les lettres d\'honneur de cet emploi qui lui ont été accordées soient enregistrées au Conseil supérieur de <mark>Saint-Domingue</mark> ou il a une partie de sa famille en 1779',
    name: 'Estèbe',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'officials'
  },
  {
    bio: 'Gauvain, Jérôme, natif de la Louisiane, en service à partir de 1779. Capitaine de port aux Cayes-Saint-Louis, à Saint-Domingue, service sur vaisseaux, destinations: Saint Domingue, Guinée, Martinique.',
    annotated_bio: '<strong>Gauvain, Jérôme</strong>, natif de la <mark>Louisiane</mark>, en service à partir de 1779. Capitaine de port aux Cayes-Saint-Louis, à <mark>Saint-Domingue</mark>, service sur vaisseaux, destinations: Saint Domingue, Guinée, Martinique.',
    name: 'Gauvain, Jérôme',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'military'
  },
  {
    bio: 'Breteuil, Louis Auguste de, baron, concessionnaire à Cayenne, affaires engagées par lui à Saint-Domingue dans les années 1780',
    annotated_bio: '<strong>Breteuil, Louis Auguste de</strong>, baron, concessionnaire à <mark>Cayenne</mark>, affaires engagées par lui à <mark>Saint-Domingue</mark> dans les années 1780',
    name: 'Breteuil, Louis Auguste de',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: true,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Coutoy, Jean Baptiste, natif de Québec, matelot à bord du vaisseau du Roi le Souverain. mort à la Martinique en 1782',
    annotated_bio: '<strong>Coutoy, Jean Baptiste</strong>, natif de <mark>Québec</mark>, matelot à bord du vaisseau du Roi le Souverain. mort à la <mark>Martinique</mark> en 1782',
    name: 'Coutoy, Jean Baptiste',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'before_1763',
    category: 'other'
  },
  {
    bio: 'Auvray-Dufresne, Jean Louis, capitaine dans les troupes nationales de Cayenne à partir de 1764, puis dans la légion de Saint-Domingue',
    annotated_bio: '<strong>Auvray-Dufresne, Jean Louis</strong>, capitaine dans les troupes nationales de <mark>Cayenne</mark> à partir de 1764, puis dans la légion de <mark>Saint-Domingue</mark>',
    name: 'Auvray-Dufresne, Jean Louis',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Chauvigny, Jean Baptiste de, nommé capitaine à la suite des troupes nationales de Cayenne en 1764, puis capitaine en pied dans la légion de l\'ïle de France en 1766 ou il a servi jusqu\'en 1773,  puis capitaine dans l\'armée de l\'Inde en 1781',
    annotated_bio: '<strong>Chauvigny, Jean Baptiste de</strong>, nommé capitaine à la suite des troupes nationales de <mark>Cayenne</mark> en 1764, puis capitaine en pied dans la légion de l\'<mark>ïle de France</mark> en 1766 ou il a servi jusqu\'en 1773,  puis capitaine dans l\'armée de l\'<mark>Inde</mark> en 1781',
    name: 'Chauvigny, Jean Baptiste de',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Chauvigny, Jean Baptiste de, nommé capitaine à la suite des troupes nationales de Cayenne en 1764, puis capitaine en pied dans la légion de l\'ïle de France en 1766 ou il a servi jusqu\'en 1773,  puis capitaine dans l\'armée de l\'Inde en 1781',
    annotated_bio: '<strong>Chauvigny, Jean Baptiste de</strong>, nommé capitaine à la suite des troupes nationales de <mark>Cayenne</mark> en 1764, puis capitaine en pied dans la légion de l\'<mark>ïle de France</mark> en 1766 ou il a servi jusqu\'en 1773,  puis capitaine dans l\'armée de l\'<mark>Inde</mark> en 1781',
    name: 'Chauvigny, Jean Baptiste de',
    from: 'Isle Bourbon & Isle of France',
    to: 'Guyana',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Rambaud, Benoît Thérèse, en Martinique de 1764 à 1767 avec son frère, retour en France en 1770, 1780 employé à l\'ïle de France sous les ordres de l\'Ingenieur en chef, 1781 débarque en Inde,  avec les troupes travail comme officier d\'infantrie et ingénieur, capitaine au régiment de Pondichéry en 1783, officier au corps des volontaires étrangers de la Marine, commandant particulier au Sénégal à partir de 1787',
    annotated_bio: '<strong>Rambaud, Benoît Thérèse</strong>, en <mark>Martinique</mark> de 1764 à 1767 avec son frère, retour en France en 1770, 1780 employé à l\'<mark>ïle de France</mark> sous les ordres de l\'Ingenieur en chef, 1781 débarque en Inde,  avec les troupes travail comme officier d\'infantrie et ingénieur, capitaine au régiment de <mark>Pondichéry</mark> en 1783, officier au corps des volontaires étrangers de la Marine, commandant particulier au <mark>Sénégal</mark> à partir de 1787',
    name: 'Rambaud, Benoît Thérèse',
    from: 'Caribbean',
    to: 'India',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Rambaud, Benoît Thérèse, en Martinique de 1764 à 1767 avec son frère, retour en France en 1770, 1780 employé à l\'ïle de France sous les ordres de l\'Ingenieur en chef, 1781 débarque en Inde,  avec les troupes travail comme officier d\'infantrie et ingénieur, capitaine au régiment de Pondichéry en 1783, officier au corps des volontaires étrangers de la Marine, commandant particulier au Sénégal à partir de 1787',
    annotated_bio: '<strong>Rambaud, Benoît Thérèse</strong>, en <mark>Martinique</mark> de 1764 à 1767 avec son frère, retour en France en 1770, 1780 employé à l\'<mark>ïle de France</mark> sous les ordres de l\'Ingenieur en chef, 1781 débarque en Inde,  avec les troupes travail comme officier d\'infantrie et ingénieur, capitaine au régiment de <mark>Pondichéry</mark> en 1783, officier au corps des volontaires étrangers de la Marine, commandant particulier au <mark>Sénégal</mark> à partir de 1787',
    name: 'Rambaud, Benoît Thérèse',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Rambaud, Benoît Thérèse, en Martinique de 1764 à 1767 avec son frère, retour en France en 1770, 1780 employé à l\'ïle de France sous les ordres de l\'Ingenieur en chef, 1781 débarque en Inde,  avec les troupes travail comme officier d\'infantrie et ingénieur, capitaine au régiment de Pondichéry en 1783, officier au corps des volontaires étrangers de la Marine, commandant particulier au Sénégal à partir de 1787',
    annotated_bio: '<strong>Rambaud, Benoît Thérèse</strong>, en <mark>Martinique</mark> de 1764 à 1767 avec son frère, retour en France en 1770, 1780 employé à l\'<mark>ïle de France</mark> sous les ordres de l\'Ingenieur en chef, 1781 débarque en Inde,  avec les troupes travail comme officier d\'infantrie et ingénieur, capitaine au régiment de <mark>Pondichéry</mark> en 1783, officier au corps des volontaires étrangers de la Marine, commandant particulier au <mark>Sénégal</mark> à partir de 1787',
    name: 'Rambaud, Benoît Thérèse',
    from: 'Isle Bourbon & Isle of France',
    to: 'Senegal',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Verdière, Philippe Joseph Xavier de, né en 1740, en 1764, commission de capitaine d\'infanterie, passe en cette qualité à Saint Domingue, 1765 premier aide major dans cette colonie, repasse en France en 1766, 1768 capitaine d\'ouvrier à Saint Domingue, repasse en France en 1770, puis capitaine au régiment de l\'Île de France à partir de 1773',
    annotated_bio: '<strong>Verdière, Philippe Joseph Xavier de</strong>, né en 1740, en 1764, commission de capitaine d\'infanterie, passe en cette qualité à <mark>Saint Domingue</mark>, 1765 premier aide major dans cette colonie, repasse en France en 1766, 1768 capitaine d\'ouvrier à <mark>Saint Domingue</mark>, repasse en France en 1770, puis capitaine au régiment de l\'<mark>Île de France</mark> à partir de 1773',
    name: 'Verdière, Philippe Joseph Xavier de',
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: null,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Bordes, entre au bureau des colonies en 1765, sous-commissaire de la Marine à Cayenne en 1775, greffier de la juridiction et de l\'amirauté de la Pointe-à-Pitre, à la Guadeloupe avec un brevet obtenu en 1776',
    annotated_bio: '<strong>Bordes</strong>, entre au bureau des colonies en 1765, sous-commissaire de la Marine à <mark>Cayenne</mark> en 1775, greffier de la juridiction et de l\'amirauté de la Pointe-à-Pitre, à la <mark>Guadeloupe</mark> avec un brevet obtenu en 1776',
    name: 'Bordes',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Drouet de La Coulonnerie, enseigne des troupes du Canada en 1765, puis sous-lieutenant dans la légion de l\'île de France en 1769',
    annotated_bio: '<strong>Drouet de La Coulonnerie</strong>, enseigne des troupes du <mark>Canada</mark> en 1765, puis sous-lieutenant dans la légion de l\'<mark>île de France</mark> en 1769',
    name: 'Drouet de La Coulonnerie',
    from: 'Isle Bourbon & Isle of France',
    to: 'New France',
    via_metropole: null,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Villeray, ancien officier au Canada, sous-lieutenant à Saint-Domingue à partir de 1765',
    annotated_bio: '<strong>Villeray</strong>, ancien officier au <mark>Canada</mark>, sous-lieutenant à <mark>Saint-Domingue</mark> à partir de 1765',
    name: 'Villeray',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Barbier de blignières, Nicolas Joseph, lieutenant d\'infanterie, et ingénieur ordinaire du Roi à Cayenne en 1766, capitaine de dragons à Saint-Domingue vers  1776',
    annotated_bio: '<strong>Barbier de blignières, Nicolas Joseph</strong>, lieutenant d\'infanterie, et ingénieur ordinaire du Roi à <mark>Cayenne</mark> en 1766, capitaine de dragons à <mark>Saint-Domingue</mark> vers  1776',
    name: 'Barbier de blignières, Nicolas Joseph',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Dubois, en activité à partir e 1766. Sénéchal et lieutenant-général d\'amirauté à la Guadeloupe, administration et magistrature à Saint Domingue, il sollicite un emploi de son grade dans la Louisiane vers 1780',
    annotated_bio: '<strong>Dubois</strong>, en activité à partir e 1766. Sénéchal et lieutenant-général d\'amirauté à la Guadeloupe, administration et magistrature à <mark>Saint Domingue</mark>, il sollicite un emploi de son grade dans la <mark>Louisiane</mark> vers 1780',
    name: 'Dubois',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: null,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Dufaur, César Antoine, lieutenant dans la légion de l\'île de France à partir de 1766, capitaine au régiment de Pondichéry à partir de 1772, retiré avec le brevet de major mort en 1786',
    annotated_bio: '<strong>Dufaur, César Antoine</strong>, lieutenant dans la légion de l\'<mark>île de France</mark> à partir de 1766, capitaine au régiment de <mark>Pondichéry</mark> à partir de 1772, retiré avec le brevet de major mort en 1786',
    name: 'Dufaur, César Antoine',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Manent, Jean Baptiste, service dans la legion de l\'Île de France en qualité de soldat à partir de 1766 puis lieutenant à partir de 1772, 1785 nommé capitaine commandant au régiment de l\'ïle Bourbon, puis capitaine à partir de 1785, incorporé au régiment de Pondichery en 1789 ',
    annotated_bio: '<strong>Manent, Jean Baptiste</strong>, service dans la legion de l\'<mark>Île de France</mark> en qualité de soldat à partir de 1766 puis lieutenant à partir de 1772, 1785 nommé capitaine commandant au régiment de l\'ïle Bourbon, puis capitaine à partir de 1785, incorporé au régiment de <mark>Pondichery</mark> en 1789 ',
    name: 'Manent, Jean Baptiste',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Millon, François, nommé procureur général au Conseil supérieur de l\'île Bourbon en 1766, sénéchal et juge d\'amirauté à Saint-Marc à Saint-Domingue en 1778',
    annotated_bio: '<strong>Millon, François</strong>, nommé procureur général au Conseil supérieur de l\'île <mark>Bourbon</mark> en 1766, sénéchal et juge d\'amirauté à Saint-Marc à <mark>Saint-Domingue</mark> en 1778',
    name: 'Millon, François',
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Boyé, Pierre, passe à l\'Île de France en 1768 ou il est sergent, passe à l\'Île Bourbon en 1778 ou il est commis aux écritures, retrourne à l\'Île de France en 1780  pour être employé comme commis aux écritures, commission de garde d\'artillerie de l\'Equipage de l\'armée dans l\'Inde en 1781',
    annotated_bio: '<strong>Boyé, Pierre</strong>, passe à l\'<mark>Île de France</mark> en 1768 ou il est sergent, passe à l\'Île Bourbon en 1778 ou il est commis aux écritures, retrourne à l\'<mark>Île de France</mark> en 1780  pour être employé comme commis aux écritures, commission de garde d\'artillerie de l\'Equipage de l\'armée dans l\'<mark>Inde</mark> en 1781',
    name: 'Boyé, Pierre',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Dallemand, Joseph, pourvu à l\'ïle de France en 1768, contrôleur à Madagascar en 1770, commissaire de la Marine à Cayenne vers 1774',
    annotated_bio: '<strong>Dallemand, Joseph</strong>, pourvu à l\'<mark>ïle de France</mark> en 1768, contrôleur à Madagascar en 1770, commissaire de la Marine à <mark>Cayenne</mark> vers 1774',
    name: 'Dallemand, Joseph',
    from: 'Isle Bourbon & Isle of France',
    to: 'Guyana',
    via_metropole: null,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Martinon Du Verdereau, depart pour l\'Île de France en 1768 ou il devient procureur général au roi en 1772, puis nommé procureur général au Conseil supérieur de Pondichéry en de 1776, retour en France',
    annotated_bio: '<strong>Martinon Du Verdereau</strong>, depart pour l\'<mark>Île de France</mark> en 1768 ou il devient procureur général au roi en 1772, puis nommé procureur général au Conseil supérieur de <mark>Pondichéry</mark> en de 1776, retour en France',
    name: 'Martinon Du Verdereau',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Sonnerat, dessinateur, voyageur, naturaliste, à l\'Île de France entre 1768 et 1772, voyage aux Indes et à la Chine de 1774 à 1781, commissaire de la Marine à Pondichéry de 1786 à 1789, Commandant à Yanam de 1789 à 1793, administrateur du jardin des Plantes ',
    annotated_bio: '<strong>Sonnerat</strong>, dessinateur, voyageur, naturaliste, à l\'<mark>Île de France</mark> entre 1768 et 1772, voyage aux Indes et à la Chine de 1774 à 1781, commissaire de la Marine à <mark>Pondichéry</mark> de 1786 à 1789, Commandant à Yanam de 1789 à 1793, administrateur du jardin des Plantes ',
    name: 'Sonnerat',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: null,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Bance, Etienne Joseph, avocat au parlement de Paris, conseiller au Conseil supérieur de l\'île de France à partir de 1769, ensuite habitant de Saint-Domingue, enfin juge au tribunal civil de l\'Eure ',
    annotated_bio: '<strong>Bance, Etienne Joseph</strong>, avocat au parlement de Paris, conseiller au Conseil supérieur de l\'<mark>île de France</mark> à partir de 1769, ensuite habitant de <mark>Saint-Domingue</mark>, enfin juge au tribunal civil de l\'Eure ',
    name: 'Bance, Etienne Joseph',
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Bardies Du Rouet, Etienne, abbé, missionnaire à Cayenne à partir de 1769 et à Saint-Domingue ',
    annotated_bio: '<strong>Bardies Du Rouet, Etienne</strong>, abbé, missionnaire à <mark>Cayenne</mark> à partir de 1769 et à <mark>Saint-Domingue</mark> ',
    name: 'Bardies Du Rouet, Etienne',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: true,
    tag: 'after_1763',
    category: 'other'
  },
  {
    bio: 'Biemeré, Louis Joseph, natif de Givet, sergent dans les troupes nationales de Cayenne à partir de 1769, puis soldat au régiment de Port-au-Prince à Saint-Domingue',
    annotated_bio: '<strong>Biemeré, Louis Joseph</strong>, natif de Givet, sergent dans les troupes nationales de <mark>Cayenne</mark> à partir de 1769, puis soldat au régiment de <mark>Port-au-Prince</mark> à Saint-Domingue',
    name: 'Biemeré, Louis Joseph',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Blandin, Jean Baptiste, aide chirurgien à l\'Île de France de 1769 à 1776, puis chirurgien-major dans les Indes Orientales à partir de 1779, à Pondichery,  puis à l\'Île de Bourbon à partir de 1786',
    annotated_bio: '<strong>Blandin, Jean Baptiste</strong>, aide chirurgien à l\'<mark>Île de France</mark> de 1769 à 1776, puis chirurgien-major dans les Indes Orientales à partir de 1779, à <mark>Pondichery</mark>,  puis à l\'Île de Bourbon à partir de 1786',
    name: 'Blandin, Jean Baptiste',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Collet, Jean Maurice, chirurgien à la Nouvelle-Orléans, (Louisiane) en 1769, puis à Saint-Domingue',
    annotated_bio: '<strong>Collet, Jean Maurice</strong>, chirurgien à la <mark>Nouvelle-Orléans</mark>, (Louisiane) en 1769, puis à <mark>Saint-Domingue</mark>',
    name: 'Collet, Jean Maurice',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'after_1763',
    category: 'other'
  },
  {
    bio: 'Estoupan de Laval, Louis François, passe à l\'Île de France en 1769. Employé de la compagnie des Indes sur cette Île jusqu\'en 1774. Entre dabs les bureaux de l\'administrtaion de Pondichéry en 1774. Passe à Mahé en 1777. Fait prisonier par les Anglais en 1778 pendant 4 ans. En 1782, il est employé dans le bureau de la comptabilité des Îles de France et de Bourbon.  Son Pere est mort Chef des Ventes de la COmpagnie des Indes. Mr David son oncle est mort Directeur de la Compagnie des Indes et Mr David son fils a été gouverneur des Îles de Bourbon et de France. Son oncle Mr Estoupan de Villeneuve était capitaine des vaisseaux des la Compagnie des Indes. Tous les trois oncles on été successivement gouverneurs du Sénégal',
    annotated_bio: '<strong>Estoupan de Laval, Louis François</strong>, passe à l\'<mark>Île de France</mark> en 1769. Employé de la compagnie des Indes sur cette Île jusqu\'en 1774. Entre dabs les bureaux de l\'administrtaion de <mark>Pondichéry</mark> en 1774. Passe à Mahé en 1777. Fait prisonier par les Anglais en 1778 pendant 4 ans. En 1782, il est employé dans le bureau de la comptabilité des Îles de France et de Bourbon.  Son Pere est mort Chef des Ventes de la COmpagnie des Indes. Mr David son oncle est mort Directeur de la Compagnie des Indes et Mr David son fils a été gouverneur des Îles de Bourbon et de France. Son oncle Mr Estoupan de Villeneuve était capitaine des vaisseaux des la Compagnie des Indes. Tous les trois oncles on été successivement gouverneurs du <mark>Sénégal</mark>',
    name: 'Estoupan de Laval, Louis François',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Estoupan de Laval, Louis François, passe à l\'Île de France en 1769. Employé de la compagnie des Indes sur cette Île jusqu\'en 1774. Entre dabs les bureaux de l\'administrtaion de Pondichéry en 1774. Passe à Mahé en 1777. Fait prisonier par les Anglais en 1778 pendant 4 ans. En 1782, il est employé dans le bureau de la comptabilité des Îles de France et de Bourbon.  Son Pere est mort Chef des Ventes de la COmpagnie des Indes. Mr David son oncle est mort Directeur de la Compagnie des Indes et Mr David son fils a été gouverneur des Îles de Bourbon et de France. Son oncle Mr Estoupan de Villeneuve était capitaine des vaisseaux des la Compagnie des Indes. Tous les trois oncles on été successivement gouverneurs du Sénégal',
    annotated_bio: '<strong>Estoupan de Laval, Louis François</strong>, passe à l\'<mark>Île de France</mark> en 1769. Employé de la compagnie des Indes sur cette Île jusqu\'en 1774. Entre dabs les bureaux de l\'administrtaion de <mark>Pondichéry</mark> en 1774. Passe à Mahé en 1777. Fait prisonier par les Anglais en 1778 pendant 4 ans. En 1782, il est employé dans le bureau de la comptabilité des Îles de France et de Bourbon.  Son Pere est mort Chef des Ventes de la COmpagnie des Indes. Mr David son oncle est mort Directeur de la Compagnie des Indes et Mr David son fils a été gouverneur des Îles de Bourbon et de France. Son oncle Mr Estoupan de Villeneuve était capitaine des vaisseaux des la Compagnie des Indes. Tous les trois oncles on été successivement gouverneurs du <mark>Sénégal</mark>',
    name: 'Estoupan de Laval, Louis François',
    from: 'Isle Bourbon & Isle of France',
    to: 'Senegal',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Gilbert, esclave créole né à la Grenade vers 1769, habitant Cayenne, affranchi par son maître Lescalier (Balthazar) 1787',
    annotated_bio: '<strong>Gilbert</strong>, esclave créole né à <mark>la Grenade</mark> vers 1769, habitant <mark>Cayenne</mark>, affranchi par son maître Lescalier (Balthazar) 1787',
    name: 'Gilbert',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: null,
    tag: 'after_1763',
    category: 'other'
  },
  {
    bio: 'Carles, Joseph André François, en 1770, capitaine aide major dans la légion de l\'ïle de France, passe dans l\'inde en tant que aide major du régiment de Pondichéry en 1773, brevet de major en 1774, brevet de colonel en 1778, repasse en France en 1779, lieutenant colonel à Pondichery en 1780, au cap de bonne esperance entre 1780 et 1783',
    annotated_bio: '<strong>Carles, Joseph André François</strong>, en 1770, capitaine aide major dans la légion de l\'<mark>ïle de France</mark>, passe dans l\'inde en tant que aide major du régiment de <mark>Pondichéry</mark> en 1773, brevet de major en 1774, brevet de colonel en 1778, repasse en France en 1779, lieutenant colonel à Pondichery en 1780, au cap de bonne esperance entre 1780 et 1783',
    name: 'Carles, Joseph André François',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Desmahis, ancien commerçant de Saint-Domingue, allant s\'établir à l\'île de France en 1770',
    annotated_bio: '<strong>Desmahis</strong>, ancien commerçant de <mark>Saint-Domingue</mark>, allant s\'établir à l\'<mark>île de France</mark> en 1770',
    name: 'Desmahis',
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'other'
  },
  {
    bio: 'Faveris, Jean Baptiste, originaire de l\'île de Bourbon, chirurgien-major à Gorée en 1770, rentre à l\'Île Bourbon dans les années 1780 ',
    annotated_bio: '<strong>Faveris, Jean Baptiste</strong>, originaire de l\'île de <mark>Bourbon</mark>, chirurgien-major à <mark>Gorée</mark> en 1770, rentre à l\'Île <mark>Bourbon</mark> dans les années 1780 ',
    name: 'Faveris, Jean Baptiste',
    from: 'Isle Bourbon & Isle of France',
    to: 'Senegal',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Arnaud-Etienne Périchon de Vaudeuil, né à paris en 1746, en Inde en 1770, conseiller au Conseil supérieur de Pondichéry à partir de 1775, puis à celui de l\'île Bourbon.',
    annotated_bio: '<strong>Arnaud-Etienne Périchon de Vaudeuil</strong>, né à paris en 1746, en Inde en 1770, conseiller au Conseil supérieur de <mark>Pondichéry</mark> à partir de 1775, puis à celui de l\'île <mark>Bourbon</mark>.',
    name: 'Arnaud-Etienne Périchon de Vaudeuil',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Desgarcins, Joseph Antoine, dessinateur, passe dans l\'Inde en 1771, employé pour les fortifications de Pondichéry, puis exempt de la maréchaussée à Saint-Domingue, mort à Saint Domingue en 1782 ',
    annotated_bio: '<strong>Desgarcins, Joseph Antoine</strong>, dessinateur, passe dans l\'Inde en 1771, employé pour les fortifications de <mark>Pondichéry</mark>, puis exempt de la maréchaussée à <mark>Saint-Domingue</mark>, mort à Saint Domingue en 1782 ',
    name: 'Desgarcins, Joseph Antoine',
    from: 'Caribbean',
    to: 'India',
    via_metropole: true,
    tag: 'after_1763',
    category: 'other'
  },
  {
    bio: 'Du Myrat de Vertpré, Charles François, major général à l\'Île de France en 1771, rang de colonel en 1771, employé en qualité de colonel à Saint Domingue et à la Martinique en 1780',
    annotated_bio: '<strong>Du Myrat de Vertpré, Charles François</strong>, major général à l\'<mark>Île de France</mark> en 1771, rang de colonel en 1771, employé en qualité de colonel à <mark>Saint Domingue</mark> et à la Martinique en 1780',
    name: 'Du Myrat de Vertpré, Charles François',
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Jolibert, aumônier à Gorée à partir de c. 1771, mort à la Guadeloupe en 1778',
    annotated_bio: '<strong>Jolibert</strong>, aumônier à <mark>Gorée</mark> à partir de c. 1771, mort à la <mark>Guadeloupe</mark> en 1778',
    name: 'Jolibert',
    from: 'Caribbean',
    to: 'Senegal',
    via_metropole: null,
    tag: 'after_1763',
    category: 'other'
  },
  {
    bio: 'Auger, Nicolas, créole du Sénégal né vers 1735, ouvrier tonnelier, engagé pour l\'île de France en 1772',
    annotated_bio: '<strong>Auger, Nicolas</strong>, créole du <mark>Sénégal</mark> né vers 1735, ouvrier tonnelier, engagé pour l\'<mark>île de France</mark> en 1772',
    name: 'Auger, Nicolas',
    from: 'Isle Bourbon & Isle of France',
    to: 'Senegal',
    via_metropole: true,
    tag: 'after_1763',
    category: 'other'
  },
  {
    bio: 'Arrot, d\', chevalier, puis vicomte, lieutenant grenadier à Pondichery en 1772, 1773 et 1774, expédition au Sénégal en 1778, aide-maréchal général des logis à Saint-Domingue, commandant au second à la Guadeloupe, gouverneur de Tabago dans les années 1780',
    annotated_bio: '<strong>Arrot</strong>, d\', chevalier, puis vicomte, lieutenant grenadier à <mark>Pondichery</mark> en 1772, 1773 et 1774, expédition au <mark>Sénégal</mark> en 1778, aide-maréchal général des logis à <mark>Saint-Domingue</mark>, commandant au second à la Guadeloupe, gouverneur de Tabago dans les années 1780',
    name: 'Arrot',
    from: 'Caribbean',
    to: 'India',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Arrot, d\', chevalier, puis vicomte, lieutenant grenadier à Pondichery en 1772, 1773 et 1774, expédition au Sénégal en 1778, aide-maréchal général des logis à Saint-Domingue, commandant au second à la Guadeloupe, gouverneur de Tabago dans les années 1780',
    annotated_bio: '<strong>Arrot</strong>, d\', chevalier, puis vicomte, lieutenant grenadier à <mark>Pondichery</mark> en 1772, 1773 et 1774, expédition au <mark>Sénégal</mark> en 1778, aide-maréchal général des logis à <mark>Saint-Domingue</mark>, commandant au second à la Guadeloupe, gouverneur de Tabago dans les années 1780',
    name: 'Arrot',
    from: 'India',
    to: 'Senegal',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Brunel, Ignace, procureur de roi en 1772 et substitut du procureur général du Conseil supérieur de l\'île de France, lieutenant de juge de la juridiction royale de l\'île de France en 1774, premier conseiller au Conseil supérieur de Pondichéry en 1776, juge de la sénéchaussée de l\'île de France',
    annotated_bio: '<strong>Brunel, Ignace</strong>, procureur de roi en 1772 et substitut du procureur général du Conseil supérieur de l\'<mark>île de France</mark>, lieutenant de juge de la juridiction royale de l\'<mark>île de France</mark> en 1774, premier conseiller au Conseil supérieur de <mark>Pondichéry</mark> en 1776, juge de la sénéchaussée de l\'<mark>île de France</mark>',
    name: 'Brunel, Ignace',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Cambefort de La Motte-Bézat, Joseph Paul Augustin de, lieutenant commissionné de Capitaine au régiment de l\'Île de France en 1772, rang de major en 1776 , premier aide major en 1778, rang de lieutenant coloniel en 1781, puis major au régiment de la Guadeloupe en 1782, et lieutenant au régiment de la Guadeloupe en 1785et lieutenant au régiment du Cap de Saint Domingue en 1786',
    annotated_bio: '<strong>Cambefort de La Motte-Bézat, Joseph Paul Augustin de</strong>, lieutenant commissionné de Capitaine au régiment de l\'<mark>Île de France</mark> en 1772, rang de major en 1776 , premier aide major en 1778, rang de lieutenant coloniel en 1781, puis major au régiment de la Guadeloupe en 1782, et lieutenant au régiment de la Guadeloupe en 1785et lieutenant au régiment du Cap de <mark>Saint Domingue</mark> en 1786',
    name: 'Cambefort de La Motte-Bézat, Joseph Paul Augustin de',
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Jouanne de Saint-Martin, négociant à la Rochelle, demande à partir à Cayenne et à Saint-Domingue en 1772',
    annotated_bio: '<strong>Jouanne de Saint-Martin</strong>, négociant à la Rochelle, demande à partir à <mark>Cayenne</mark> et à <mark>Saint-Domingue</mark> en 1772',
    name: 'Jouanne de Saint-Martin',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: null,
    tag: 'after_1763',
    category: 'other'
  },
  {
    bio: 'Lefebvre, Jean Baptiste Nicolas Claude, sous-marchand puis procureur général au Conseil supérieur de Pondichéry à partir de c. 1772, puis procureur du Roi de la juridiction de l\'île de Bourbon à partir de 1784',
    annotated_bio: '<strong>Lefebvre, Jean Baptiste Nicolas Claude</strong>, sous-marchand puis procureur général au Conseil supérieur de <mark>Pondichéry</mark> à partir de c. 1772, puis procureur du Roi de la juridiction de l\'île de <mark>Bourbon</mark> à partir de 1784',
    name: 'Lefebvre, Jean Baptiste Nicolas Claude',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Bremeuil, Pierre, sergent au bataillon de l\'Inde, embarqué à l\'île de France pour Pondichéry enn 1773',
    annotated_bio: '<strong>Bremeuil, Pierre</strong>, sergent au bataillon de l\'Inde, embarqué à l\'<mark>île de France</mark> pour <mark>Pondichéry</mark> enn 1773',
    name: 'Bremeuil, Pierre',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Curt, Louis de,  aide-de-camp de M. d\'Estaing et capitaine en Guadeloupe en 1773, commissaire du Roi pour la vérification et la suppression du papier monnaie aux îles de France et de Bourbon à partir de 1784, député de la Guadeloupe à l\'Assemblée constituante ',
    annotated_bio: '<strong>Curt, Louis de</strong>,  aide-de-camp de M. d\'Estaing et capitaine en <mark>Guadeloupe</mark> en 1773, commissaire du Roi pour la vérification et la suppression du papier monnaie aux îles de France et de <mark>Bourbon</mark> à partir de 1784, député de la <mark>Guadeloupe</mark> à l\'Assemblée constituante ',
    name: 'Curt, Louis de',
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Carles, Joseph André François, originaire de Castres, volontaire au régiment d\'Auvergne, sergent aux gardes françaises, chargé comme tel de la garde de Damiens, capitaine dans le régiment des recrues de Perpignan, capitaine aide-major de la légion de l\'île de France en 1770, capitaine aide-major au régiment de Pondichéry en 1773, lieutenant-colonel en 1778, maréchal de camp en 1791 ',
    annotated_bio: '<strong>Carles, Joseph André François</strong>, originaire de Castres, volontaire au régiment d\'Auvergne, sergent aux gardes françaises, chargé comme tel de la garde de Damiens, capitaine dans le régiment des recrues de Perpignan, capitaine aide-major de la légion de l\'<mark>île de France</mark> en 1770, capitaine aide-major au régiment de <mark>Pondichéry</mark> en 1773, lieutenant-colonel en 1778, maréchal de camp en 1791 ',
    name: 'Carles, Joseph André François',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Desrivierre-Gers, Henri Louis Jérôme, nommé lieutenant au régiment de la Martinique en 1773, sous-lieutenance dans les volontaires d\'afrique à Gorée avec le grade de lieutenant en 1776, repasse en qualité de sous lieutenant au régiment de la Guadeloupe en 1776, nommé aide major de place à Cayenne en 1777',
    annotated_bio: '<strong>Desrivierre-Gers, Henri Louis Jérôme</strong>, nommé lieutenant au régiment de la <mark>Martinique</mark> en 1773, sous-lieutenance dans les volontaires d\'afrique à <mark>Gorée</mark> avec le grade de lieutenant en 1776, repasse en qualité de sous lieutenant au régiment de la Guadeloupe en 1776, nommé aide major de place à <mark>Cayenne</mark> en 1777',
    name: 'Desrivierre-Gers, Henri Louis Jérôme',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Desrivierre-Gers, Henri Louis Jérôme, nommé lieutenant au régiment de la Martinique en 1773, sous-lieutenance dans les volontaires d\'afrique à Gorée avec le grade de lieutenant en 1776, repasse en qualité de sous lieutenant au régiment de la Guadeloupe en 1776, nommé aide major de place à Cayenne en 1777',
    annotated_bio: '<strong>Desrivierre-Gers, Henri Louis Jérôme</strong>, nommé lieutenant au régiment de la <mark>Martinique</mark> en 1773, sous-lieutenance dans les volontaires d\'afrique à <mark>Gorée</mark> avec le grade de lieutenant en 1776, repasse en qualité de sous lieutenant au régiment de la Guadeloupe en 1776, nommé aide major de place à <mark>Cayenne</mark> en 1777',
    name: 'Desrivierre-Gers, Henri Louis Jérôme',
    from: 'Guyana',
    to: 'Senegal',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Palerne, Jean de, entre en service en qualité de lieutenant en second au régiment de l\'île de France en 1773, fait sous aide major dans la même île en 1775, puis capitaine aussi dans la même île en 1777, arrivé en Inde vers 1782, capitaine au régiment de Pondichéry  ',
    annotated_bio: '<strong>Palerne, Jean de</strong>, entre en service en qualité de lieutenant en second au régiment de l\'<mark>île de France</mark> en 1773, fait sous aide major dans la même île en 1775, puis capitaine aussi dans la même île en 1777, arrivé en Inde vers 1782, capitaine au régiment de <mark>Pondichéry</mark>  ',
    name: 'Palerne, Jean de',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Borel Du Bourg, Claude Isaac de, né à Grenoble nommé lieutenant en second au régiment de Bourbon en 1774, puis au régiment de Pondichéry, aide-major à Saint-Marc, à Saint-Domingue',
    annotated_bio: '<strong>Borel Du Bourg, Claude Isaac de</strong>, né à Grenoble nommé lieutenant en second au régiment de <mark>Bourbon</mark> en 1774, puis au régiment de <mark>Pondichéry</mark>, aide-major à Saint-Marc, à <mark>Saint-Domingue</mark>',
    name: 'Borel Du Bourg, Claude Isaac de',
    from: 'Caribbean',
    to: 'India',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Borel Du Bourg, Claude Isaac de, né à Grenoble nommé lieutenant en second au régiment de Bourbon en 1774, puis au régiment de Pondichéry, aide-major à Saint-Marc, à Saint-Domingue',
    annotated_bio: '<strong>Borel Du Bourg, Claude Isaac de</strong>, né à Grenoble nommé lieutenant en second au régiment de <mark>Bourbon</mark> en 1774, puis au régiment de <mark>Pondichéry</mark>, aide-major à Saint-Marc, à <mark>Saint-Domingue</mark>',
    name: 'Borel Du Bourg, Claude Isaac de',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Le Brasseur, Joseph Alexandre, 1762 entre en service en qualité de commis au bureau des colonies, commissaire ordonnateur à Gorée à partir de 1774 et à Saint-Domingue à partir de 1779 ou  il rempli ensuite des fonction  d\'Intendant te Président des Conseils Supérieurs , devient commissaire ordonateur à l\'Île de France en 1784',
    annotated_bio: '<strong>Le Brasseur, Joseph Alexandre</strong>, 1762 entre en service en qualité de commis au bureau des colonies, commissaire ordonnateur à <mark>Gorée</mark> à partir de 1774 et à <mark>Saint-Domingue</mark> à partir de 1779 ou  il rempli ensuite des fonction  d\'Intendant te Président des Conseils Supérieurs , devient commissaire ordonateur à l\'<mark>Île de France</mark> en 1784',
    name: 'Le Brasseur, Joseph Alexandre',
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Le Brasseur, Joseph Alexandre, 1762 entre en service en qualité de commis au bureau des colonies, commissaire ordonnateur à Gorée à partir de 1774 et à Saint-Domingue à partir de 1779 ou  il rempli ensuite des fonction  d\'Intendant te Président des Conseils Supérieurs , devient commissaire ordonateur à l\'Île de France en 1784',
    annotated_bio: '<strong>Le Brasseur, Joseph Alexandre</strong>, 1762 entre en service en qualité de commis au bureau des colonies, commissaire ordonnateur à <mark>Gorée</mark> à partir de 1774 et à <mark>Saint-Domingue</mark> à partir de 1779 ou  il rempli ensuite des fonction  d\'Intendant te Président des Conseils Supérieurs , devient commissaire ordonateur à l\'<mark>Île de France</mark> en 1784',
    name: 'Le Brasseur, Joseph Alexandre',
    from: 'Isle Bourbon & Isle of France',
    to: 'Senegal',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Le Voyer, Louis, sous-lieutenant au régiment de Pondichéry à partir de 1776, integre le régiment de l\'île de France à partir de 1785, devient lieutenant en 1788 ',
    annotated_bio: '<strong>Le Voyer, Louis</strong>, sous-lieutenant au régiment de <mark>Pondichéry</mark> à partir de 1776, integre le régiment de l\'<mark>île de France</mark> à partir de 1785, devient lieutenant en 1788 ',
    name: 'Le Voyer, Louis',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Descorches de Sainte-Croix, Jacques, sous-commissaire de la Marine à Brest et à Rochefort, passe à Pondichéry en 1775, nommé ordonnateur à Chandernagor en 1777, passe à l\'Île de France en 1779',
    annotated_bio: '<strong>Descorches de Sainte-Croix, Jacques</strong>, sous-commissaire de la Marine à Brest et à Rochefort, passe à <mark>Pondichéry</mark> en 1775, nommé ordonnateur à Chandernagor en 1777, passe à l\'<mark>Île de France</mark> en 1779',
    name: 'Descorches de Sainte-Croix, Jacques',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Du Montet, Aimé Guillin, lieutenant du roi en Guadeloupe en 1775, rang de colonel en 1778, Gouverneur de Saint Vincent en 1780, Gouverneur du Sénégal en 1781',
    annotated_bio: '<strong>Du Montet, Aimé Guillin</strong>, lieutenant du roi en <mark>Guadeloupe</mark> en 1775, rang de colonel en 1778, Gouverneur de Saint Vincent en 1780, Gouverneur du <mark>Sénégal</mark> en 1781',
    name: 'Du Montet, Aimé Guillin',
    from: 'Caribbean',
    to: 'Senegal',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Barry de Richeville, conseiller au Conseil supérieur de Pondichéry à partir de c. 1776, et lieutenant, puis au Conseil supérieur de l\'île de France à partir de 1788 mort en 1792',
    annotated_bio: '<strong>Barry de Richeville</strong>, conseiller au Conseil supérieur de <mark>Pondichéry</mark> à partir de c. 1776, et lieutenant, puis au Conseil supérieur de l\'<mark>île de France</mark> à partir de 1788 mort en 1792',
    name: 'Barry de Richeville',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: null,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Baudin, chargé d\'une mission à l\'île de France, débarqué à Pondichéry en 1776',
    annotated_bio: '<strong>Baudin</strong>, chargé d\'une mission à l\'<mark>île de France</mark>, débarqué à <mark>Pondichéry</mark> en 1776',
    name: 'Baudin',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'other'
  },
  {
    bio: 'Champagne, de, chevalier, sous-lieutenant au régiment d\'Artois, demeuré à l\'île de France après le départ de ce régiment pour France, passé à Pondichéry en 1776',
    annotated_bio: '<strong>Champagne, de,</strong> chevalier, sous-lieutenant au régiment d\'Artois, demeuré à l\'<mark>île de France</mark> après le départ de ce régiment pour France, passé à <mark>Pondichéry</mark> en 1776',
    name: 'Champagne, de,',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Clause, négociant alsacien établi à la Nouvelle-Angleterre, passé à la Martinique, puis à Gorée vers 1777',
    annotated_bio: '<strong>Clause</strong>, négociant alsacien établi à la Nouvelle-Angleterre, passé à la <mark>Martinique</mark>, puis à <mark>Gorée</mark> vers 1777',
    name: 'Clause',
    from: 'Caribbean',
    to: 'Senegal',
    via_metropole: true,
    tag: 'after_1763',
    category: 'other'
  },
  {
    bio: 'Lacroix de Villeneuve, Thomas, conseiller au Conseil supérieur de Pondichéry en 1777, puis nommé conseiller au Conseil supérieur de Port-au-Prince à Saint-Domingue en 1782.',
    annotated_bio: '<strong>Lacroix de Villeneuve, Thomas</strong>, conseiller au Conseil supérieur de <mark>Pondichéry</mark> en 1777, puis nommé conseiller au Conseil supérieur de <mark>Port-au-Prince</mark> à Saint-Domingue en 1782.',
    name: 'Lacroix de Villeneuve, Thomas',
    from: 'Caribbean',
    to: 'India',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Garnier d\'Aiglancay, Nicolas Gérard, arrive à l\'Île de France en 1779. Lieutenant d\'infanterie à l\'île de France, à Pondichéry et à Saint-Domingue ',
    annotated_bio: '<strong>Garnier d\'Aiglancay, Nicolas Gérard</strong>, arrive à l\'<mark>Île de France</mark> en 1779. Lieutenant d\'infanterie à l\'<mark>île de France</mark>, à <mark>Pondichéry</mark> et à <mark>Saint-Domingue</mark> ',
    name: 'Garnier d\'Aiglancay, Nicolas Gérard',
    from: 'Caribbean',
    to: 'India',
    via_metropole: null,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Garnier d\'Aiglancay, Nicolas Gérard, arrive à l\'Île de France en 1779. Lieutenant d\'infanterie à l\'île de France, à Pondichéry et à Saint-Domingue ',
    annotated_bio: '<strong>Garnier d\'Aiglancay, Nicolas Gérard</strong>, arrive à l\'<mark>Île de France</mark> en 1779. Lieutenant d\'infanterie à l\'<mark>île de France</mark>, à <mark>Pondichéry</mark> et à <mark>Saint-Domingue</mark> ',
    name: 'Garnier d\'Aiglancay, Nicolas Gérard',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: null,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Chenot, François, s\'embarque pour l\'Île de France en 1780, fait caporal et s\'embarque pour l\'Inde en 1781, fait aide major à Pondichéry en 1792',
    annotated_bio: '<strong>Chenot, François</strong>, s\'embarque pour l\'<mark>Île de France</mark> en 1780, fait caporal et s\'embarque pour l\'Inde en 1781, fait aide major à <mark>Pondichéry</mark> en 1792',
    name: 'Chenot, François',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Le Clerc de Fresne, Camille Charles, chevalier, s\'embraque pour les Îles du Vent des Antilles en 1780,  Major Génégal de l\'Île de la Grenade , commandant en second à a St. Christophe, colonel du régiment de l\'île de Bourbon à partir de 1784,  puis gouverneur à Pondichéry, retourne en France en 1793',
    annotated_bio: '<strong>Le Clerc de Fresne, Camille Charles</strong>, chevalier, s\'embraque pour les Îles du Vent des Antilles en 1780,  Major Génégal de l\'Île de <mark>la Grenade</mark> , commandant en second à a St. Christophe, colonel du régiment de l\'île de <mark>Bourbon</mark> à partir de 1784,  puis gouverneur à <mark>Pondichéry</mark>, retourne en France en 1793',
    name: 'Le Clerc de Fresne, Camille Charles',
    from: 'Caribbean',
    to: 'India',
    via_metropole: null,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Le Clerc de Fresne, Camille Charles, chevalier, s\'embraque pour les Îles du Vent des Antilles en 1780,  Major Génégal de l\'Île de la Grenade , commandant en second à a St. Christophe, colonel du régiment de l\'île de Bourbon à partir de 1784,  puis gouverneur à Pondichéry, retourne en France en 1793',
    annotated_bio: '<strong>Le Clerc de Fresne, Camille Charles</strong>, chevalier, s\'embraque pour les Îles du Vent des Antilles en 1780,  Major Génégal de l\'Île de <mark>la Grenade</mark> , commandant en second à a St. Christophe, colonel du régiment de l\'île de <mark>Bourbon</mark> à partir de 1784,  puis gouverneur à <mark>Pondichéry</mark>, retourne en France en 1793',
    name: 'Le Clerc de Fresne, Camille Charles',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: null,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Dubreuil, Simon Etienne, passe à l\'Île de France en 1781: il y est employé au bureau des armements et ensuite à celui de magasin général. Il quitte l\'Île de France en 1782 pour aller dans l\'Inde ou il travail en qualité de secretaire de brigade. Employé au magasin de Trinquemalé, puis aux travaux des fortifications à Pondichéry avant d\'être envoyé à Mahé où il travaille comme notaire, procureur du roi et commisssaire national',
    annotated_bio: '<strong>Dubreuil, Simon Etienne</strong>, passe à l\'<mark>Île de France</mark> en 1781: il y est employé au bureau des armements et ensuite à celui de magasin général. Il quitte l\'<mark>Île de France</mark> en 1782 pour aller dans l\'Inde ou il travail en qualité de secretaire de brigade. Employé au magasin de Trinquemalé, puis aux travaux des fortifications à <mark>Pondichéry</mark> avant d\'être envoyé à Mahé où il travaille comme notaire, procureur du roi et commisssaire national',
    name: 'Dubreuil, Simon Etienne',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: null,
    tag: 'after_1763',
    category: 'other'
  },
  {
    bio: 'Dufaure de La Curatrie, Jean Baptiste, passe à l\'Île de France en 1781: il y est employé au bureau des armements et ensuite à celui du magasin général. Il quitte l\'Île de France en 1782 pour passer en Inde en qualité de secretaire de Brigade. Employé à la comtabilité du génie pour les travaux à  Pondichéry, puis notaire à Mahé. sous-lieutenant dans les troupes nationales de Cayenne, lieutenant au régiment de Port-au-Prince à Saint-Domingue 1772/1773',
    annotated_bio: '<strong>Dufaure de La Curatrie, Jean Baptiste</strong>, passe à l\'<mark>Île de France</mark> en 1781: il y est employé au bureau des armements et ensuite à celui du magasin général. Il quitte l\'<mark>Île de France</mark> en 1782 pour passer en Inde en qualité de secretaire de Brigade. Employé à la comtabilité du génie pour les travaux à  <mark>Pondichéry</mark>, puis notaire à Mahé. sous-lieutenant dans les troupes nationales de <mark>Cayenne</mark>, lieutenant au régiment de <mark>Port-au-Prince</mark> à Saint-Domingue 1772/1773',
    name: 'Dufaure de La Curatrie, Jean Baptiste',
    from: 'Caribbean',
    to: 'India',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Dufaure de La Curatrie, Jean Baptiste, passe à l\'Île de France en 1781: il y est employé au bureau des armements et ensuite à celui du magasin général. Il quitte l\'Île de France en 1782 pour passer en Inde en qualité de secretaire de Brigade. Employé à la comtabilité du génie pour les travaux à  Pondichéry, puis notaire à Mahé. sous-lieutenant dans les troupes nationales de Cayenne, lieutenant au régiment de Port-au-Prince à Saint-Domingue 1772/1773',
    annotated_bio: '<strong>Dufaure de La Curatrie, Jean Baptiste</strong>, passe à l\'<mark>Île de France</mark> en 1781: il y est employé au bureau des armements et ensuite à celui du magasin général. Il quitte l\'<mark>Île de France</mark> en 1782 pour passer en Inde en qualité de secretaire de Brigade. Employé à la comtabilité du génie pour les travaux à  <mark>Pondichéry</mark>, puis notaire à Mahé. sous-lieutenant dans les troupes nationales de <mark>Cayenne</mark>, lieutenant au régiment de <mark>Port-au-Prince</mark> à Saint-Domingue 1772/1773',
    name: 'Dufaure de La Curatrie, Jean Baptiste',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Dufaure de La Curatrie, Jean Baptiste, passe à l\'Île de France en 1781: il y est employé au bureau des armements et ensuite à celui du magasin général. Il quitte l\'Île de France en 1782 pour passer en Inde en qualité de secretaire de Brigade. Employé à la comtabilité du génie pour les travaux à  Pondichéry, puis notaire à Mahé. sous-lieutenant dans les troupes nationales de Cayenne, lieutenant au régiment de Port-au-Prince à Saint-Domingue 1772/1773',
    annotated_bio: '<strong>Dufaure de La Curatrie, Jean Baptiste</strong>, passe à l\'<mark>Île de France</mark> en 1781: il y est employé au bureau des armements et ensuite à celui du magasin général. Il quitte l\'<mark>Île de France</mark> en 1782 pour passer en Inde en qualité de secretaire de Brigade. Employé à la comtabilité du génie pour les travaux à  <mark>Pondichéry</mark>, puis notaire à Mahé. sous-lieutenant dans les troupes nationales de <mark>Cayenne</mark>, lieutenant au régiment de <mark>Port-au-Prince</mark> à Saint-Domingue 1772/1773',
    name: 'Dufaure de La Curatrie, Jean Baptiste',
    from: 'Isle Bourbon & Isle of France',
    to: 'Guyana',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Hauguet, Thomas, employé dans les bureaux à Saint-Domingue, puis contrôleur des colonies au Sénégal. Obtient une pension en 1781',
    annotated_bio: '<strong>Hauguet, Thomas</strong>, employé dans les bureaux à <mark>Saint-Domingue</mark>, puis contrôleur des colonies au <mark>Sénégal</mark>. Obtient une pension en 1781',
    name: 'Hauguet, Thomas',
    from: 'Caribbean',
    to: 'Senegal',
    via_metropole: null,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'La Carrière, sous-lieutenant à la suite de l\'artillerie des îles de France et de Bourbon puis à Pondichéry à partir de 1781 ',
    annotated_bio: '<strong>La Carrière</strong>, sous-lieutenant à la suite de l\'artillerie des îles de France et de <mark>Bourbon</mark> puis à <mark>Pondichéry</mark> à partir de 1781 ',
    name: 'La Carrière',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Richard, Louis, naturaliste du Roi passe à Cayenne en 1781,  puis passe du temps dans les Île du vent de Antilles, voyage à la Martinique en 1788, pour conduire des études botaniques. ',
    annotated_bio: '<strong>Richard, Louis</strong>, naturaliste du Roi passe à <mark>Cayenne</mark> en 1781,  puis passe du temps dans les Île du vent de Antilles, voyage à la <mark>Martinique</mark> en 1788, pour conduire des études botaniques. ',
    name: 'Richard, Louis',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: true,
    tag: 'after_1763',
    category: 'other'
  },
  {
    bio: 'Verret, Joseph, habitant de la Louisiane, puis entrepreneur de moulins à sucre à Saint-Domingue, correspondance de 1781/1782',
    annotated_bio: '<strong>Verret, Joseph</strong>, habitant de la <mark>Louisiane</mark>, puis entrepreneur de moulins à sucre à <mark>Saint-Domingue</mark>, correspondance de 1781/1782',
    name: 'Verret, Joseph',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'after_1763',
    category: 'other'
  },
  {
    bio: 'Foin, Guillaume François, soldat au régiment de Pondichéry, mort à l\'île de France en 1782 ',
    annotated_bio: '<strong>Foin, Guillaume François</strong>, soldat au régiment de <mark>Pondichéry</mark>, mort à l\'<mark>île de France</mark> en 1782 ',
    name: 'Foin, Guillaume François',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Luneau de Villeson, greffier au Sénégal, mort à la Martinique en 1782',
    annotated_bio: '<strong>Luneau de Villeson</strong>, greffier au <mark>Sénégal</mark>, mort à la <mark>Martinique</mark> en 1782',
    name: 'Luneau de Villeson',
    from: 'Caribbean',
    to: 'Senegal',
    via_metropole: true,
    tag: 'after_1763',
    category: 'other'
  },
  {
    bio: 'Bertry, Irénée, ancien missionnaire à la Louisiane, et à Saint-Domingue avant 1783',
    annotated_bio: '<strong>Bertry, Irénée</strong>, ancien missionnaire à la <mark>Louisiane</mark>, et à <mark>Saint-Domingue</mark> avant 1783',
    name: 'Bertry, Irénée',
    from: 'Caribbean',
    to: 'Louisiana',
    via_metropole: true,
    tag: 'after_1763',
    category: 'other'
  },
  {
    bio: 'Delosmes-Desdodins, Jean Pierre, ancien conseiller au Conseil supérieur de Pondichéry, ex-procureur général au Conseil supérieur de l\'île de France, adjoint au contrôleur de la Marine avant 1783',
    annotated_bio: '<strong>Delosmes-Desdodins, Jean Pierre</strong>, ancien conseiller au Conseil supérieur de <mark>Pondichéry</mark>, ex-procureur général au Conseil supérieur de l\'<mark>île de France</mark>, adjoint au contrôleur de la Marine avant 1783',
    name: 'Delosmes-Desdodins, Jean Pierre',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Doyon, Thomas, de Québec, pauvre bourgeois mort à la Martinique en 1783',
    annotated_bio: '<strong>Doyon, Thomas</strong>, de <mark>Québec</mark>, pauvre bourgeois mort à la <mark>Martinique</mark> en 1783',
    name: 'Doyon, Thomas',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'other'
  },
  {
    bio: 'Espinassy, Antoine Marie Joseph d\', arrive à l\'Île de France en 1783. Lieutenant en second d\'artillerie à l\'île de France en 1783, puis lieutenant en premier du régiment de corps royale d\'artillerie, employé à Saint-Domingue en 1788, commission de capitaine, devenu général en 1797 ',
    annotated_bio: '<strong>Espinassy, Antoine Marie Joseph d\'</strong>, arrive à l\'<mark>Île de France</mark> en 1783. Lieutenant en second d\'artillerie à l\'<mark>île de France</mark> en 1783, puis lieutenant en premier du régiment de corps royale d\'artillerie, employé à <mark>Saint-Domingue</mark> en 1788, commission de capitaine, devenu général en 1797 ',
    name: 'Espinassy, Antoine Marie Joseph d\'',
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Beillion, François Joseph, natif de Franche-Comté, soldat du régiment de l\'île de France, à Pondichéry, déserteur procès en 1785',
    annotated_bio: '<strong>Beillion, François Joseph</strong>, natif de Franche-Comté, soldat du régiment de l\'<mark>île de France</mark>, à <mark>Pondichéry</mark>, déserteur procès en 1785',
    name: 'Beillion, François Joseph',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Cuvilier, Jean Mathieu, natif de la province de Liège, soldat au régiment de l\'île de France, déserteur jugé à Pondichéry en 1785',
    annotated_bio: '<strong>Cuvilier, Jean Mathieu</strong>, natif de la province de Liège, soldat au régiment de l\'<mark>île de France</mark>, déserteur jugé à <mark>Pondichéry</mark> en 1785',
    name: 'Cuvilier, Jean Mathieu',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Du Coudray, Jean François, natif de Rennes, soldat au régiment de l\'île de France, déserteur jugé à Pondichéry 1785',
    annotated_bio: '<strong>Du Coudray, Jean François</strong>, natif de Rennes, soldat au régiment de l\'<mark>île de France</mark>, déserteur jugé à <mark>Pondichéry</mark> 1785',
    name: 'Du Coudray, Jean François',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: null,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Maloeuvre, Jean, natif de Bretagne, soldat au régiment de l\'île de France, condamné comme déserteur à Pondichéry en 1785',
    annotated_bio: '<strong>Maloeuvre, Jean</strong>, natif de Bretagne, soldat au régiment de l\'<mark>île de France</mark>, condamné comme déserteur à <mark>Pondichéry</mark> en 1785',
    name: 'Maloeuvre, Jean',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Pichon, Paul, fusilier au régiment de Pondichéry en 1785, mort à l\'hôpital de l\'île de France le 22 octobre 1791 ',
    annotated_bio: '<strong>Pichon, Paul</strong>, fusilier au régiment de <mark>Pondichéry</mark> en 1785, mort à l\'hôpital de l\'<mark>île de France</mark> le 22 octobre 1791 ',
    name: 'Pichon, Paul',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Simonnet de Maisonneuve, Louis, capitaine au régiment de Pondichéry à l\'île de France en 1785',
    annotated_bio: '<strong>Simonnet de Maisonneuve, Louis</strong>, capitaine au régiment de <mark>Pondichéry</mark> à l\'<mark>île de France</mark> en 1785',
    name: 'Simonnet de Maisonneuve, Louis',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Briffaud, Louis, natif d\'Auxerre, déserteur du régiment de l\'île de Bourbon , jugé à Pondichéry en 1786',
    annotated_bio: '<strong>Briffaud, Louis</strong>, natif d\'Auxerre, déserteur du régiment de l\'île de <mark>Bourbon</mark> , jugé à <mark>Pondichéry</mark> en 1786',
    name: 'Briffaud, Louis',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Ailleboust de Mantet, d\', capitaine au régiment de Pondichéry à fait un mariage à l\'Île Bourbon, demissionne en 1787',
    annotated_bio: '<strong>Ailleboust de Mantet</strong>, d\', capitaine au régiment de <mark>Pondichéry</mark> à fait un mariage à l\'Île <mark>Bourbon</mark>, demissionne en 1787',
    name: 'Ailleboust de Mantet',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: null,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Dubé, Gabriel, natif du Canada, pauvre sans secours, mort à l\'hôpital de la Pointe-à-Pitre, à la Guadeloupe en 1787',
    annotated_bio: '<strong>Dubé, Gabriel</strong>, natif du <mark>Canada</mark>, pauvre sans secours, mort à l\'hôpital de la Pointe-à-Pitre, à la <mark>Guadeloupe</mark> en 1787',
    name: 'Dubé, Gabriel',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'other'
  },
  {
    bio: 'Ferrand, Jean, natif de Castres, fusilier au régiment de l\'île de France, mort à Pondichéry en 1787',
    annotated_bio: '<strong>Ferrand, Jean</strong>, natif de Castres, fusilier au régiment de l\'<mark>île de France</mark>, mort à <mark>Pondichéry</mark> en 1787',
    name: 'Ferrand, Jean',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Garrus de La Roque, Pierre Louis, natif de Paris, commis de l\'administration de Cayenne, mort à la Martinique en 1787',
    annotated_bio: '<strong>Garrus de La Roque, Pierre Louis</strong>, natif de Paris, commis de l\'administration de <mark>Cayenne</mark>, mort à la <mark>Martinique</mark> en 1787',
    name: 'Garrus de La Roque, Pierre Louis',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: true,
    tag: 'after_1763',
    category: 'other'
  },
  {
    bio: 'Golbéry, Sylvain François Xavier Meinrade, capitaine au corps royal du Génie, employé à Gorée et à Cayenne. Départ pour Cayenne en 1787',
    annotated_bio: '<strong>Golbéry, Sylvain François Xavier Meinrade</strong>, capitaine au corps royal du Génie, employé à <mark>Gorée</mark> et à <mark>Cayenne</mark>. Départ pour <mark>Cayenne</mark> en 1787',
    name: 'Golbéry, Sylvain François Xavier Meinrade',
    from: 'Guyana',
    to: 'Senegal',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Golbéry de Tirion, de, capitaine au corps royal du Génie, employé à Gorée et à Cayenne, ingénieur au Sénégal. Départ pour Cayenne en 1787.',
    annotated_bio: '<strong>Golbéry de Tirion, de,</strong> capitaine au corps royal du Génie, employé à <mark>Gorée</mark> et à <mark>Cayenne</mark>, ingénieur au Sénégal. Départ pour <mark>Cayenne</mark> en 1787.',
    name: 'Golbéry de Tirion, de,',
    from: 'Guyana',
    to: 'Senegal',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Thomas de Périndorge, Paul, conseiller-assesseur au Conseil supérieur de l\'île de Bourbon à partir de 1787, ordonnateur aux îles de Saint-Pierre et Miquelon vers 1793, consul à Baltimore en 1794, arrive à Saint Domingue en l\'an VII, où il est chef de régiment',
    annotated_bio: '<strong>Thomas de Périndorge, Paul</strong>, conseiller-assesseur au Conseil supérieur de l\'île de <mark>Bourbon</mark> à partir de 1787, ordonnateur aux îles de Saint-Pierre et Miquelon vers 1793, consul à Baltimore en 1794, arrive à <mark>Saint Domingue</mark> en l\'an VII, où il est chef de régiment',
    name: 'Thomas de Périndorge, Paul',
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'officials'
  },
  {
    bio: 'Auger, Jean Baptiste, caporal au régiment de Pondichéry, mort à l\'île de France en 1788',
    annotated_bio: '<strong>Auger, Jean Baptiste</strong>, caporal au régiment de <mark>Pondichéry</mark>, mort à l\'<mark>île de France</mark> en 1788',
    name: 'Auger, Jean Baptiste',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Bergeron, Antoine, natif du Limousin, sergent au régiment de Pondichéry, mort à l\'île de France en 1788',
    annotated_bio: '<strong>Bergeron, Antoine</strong>, natif du Limousin, sergent au régiment de <mark>Pondichéry</mark>, mort à l\'<mark>île de France</mark> en 1788',
    name: 'Bergeron, Antoine',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Berth, Jean Baptiste, natif de Paris, soldat du régiment de Pondichéry, mort à l\'île de France en 1788',
    annotated_bio: '<strong>Berth, Jean Baptiste</strong>, natif de Paris, soldat du régiment de <mark>Pondichéry</mark>, mort à l\'<mark>île de France</mark> en 1788',
    name: 'Berth, Jean Baptiste',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Boudon, Paul, natif de Nîmes, soldat au régiment de Pondichéry, mort à l\'île de France en 1788',
    annotated_bio: '<strong>Boudon, Paul</strong>, natif de Nîmes, soldat au régiment de <mark>Pondichéry</mark>, mort à l\'<mark>île de France</mark> en 1788',
    name: 'Boudon, Paul',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: null,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Chrétien, Louis, natif d\'Anjou, grenadier au régiment de Pondichéry, mort à l\'île de France en 1788',
    annotated_bio: '<strong>Chrétien, Louis</strong>, natif d\'Anjou, grenadier au régiment de <mark>Pondichéry</mark>, mort à l\'<mark>île de France</mark> en 1788',
    name: 'Chrétien, Louis',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Dugas, Pierre, natif d\'Anjou, tonnelier de la Cayenne de mer, à Port-Louis, île de France, mort à l\'hôpital en 1788',
    annotated_bio: '<strong>Dugas, Pierre</strong>, natif d\'Anjou, tonnelier de la <mark>Cayenne</mark> de mer, à Port-Louis, <mark>île de France</mark>, mort à l\'hôpital en 1788',
    name: 'Dugas, Pierre',
    from: 'Isle Bourbon & Isle of France',
    to: 'Guyana',
    via_metropole: null,
    tag: 'after_1763',
    category: 'other'
  },
  {
    bio: 'Enserman, Jean Michel, natif d\'Alsace, soldat au régiment de Pondichéry, mort à l\'île de France en 1788',
    annotated_bio: '<strong>Enserman, Jean Michel</strong>, natif d\'Alsace, soldat au régiment de <mark>Pondichéry</mark>, mort à l\'<mark>île de France</mark> en 1788',
    name: 'Enserman, Jean Michel',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Forget, Olivier, natif de Vannes, matelot de la Cayenne de mer à l\'île de France, mort à l\'hôpital en 1788',
    annotated_bio: '<strong>Forget, Olivier</strong>, natif de Vannes, matelot de la <mark>Cayenne</mark> de mer à l\'<mark>île de France</mark>, mort à l\'hôpital en 1788',
    name: 'Forget, Olivier',
    from: 'Isle Bourbon & Isle of France',
    to: 'Guyana',
    via_metropole: true,
    tag: 'after_1763',
    category: 'other'
  },
  {
    bio: 'Fournier, Claude, natif de Paris, soldat au régiment de Pondichéry, mort à l\'île de France en 1788',
    annotated_bio: '<strong>Fournier, Claude</strong>, natif de Paris, soldat au régiment de <mark>Pondichéry</mark>, mort à l\'<mark>île de France</mark> en 1788',
    name: 'Fournier, Claude',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Fyard de Gévigney, ancien capitaine dans le Corps de Montréal, demande une place dans la maréchaussée de Saint-Domingue. Réception de demande de position en 1788.',
    annotated_bio: '<strong>Fyard de Gévigney</strong>, ancien capitaine dans le Corps de <mark>Montréal</mark>, demande une place dans la maréchaussée de <mark>Saint-Domingue</mark>. Réception de demande de position en 1788.',
    name: 'Fyard de Gévigney',
    from: 'Caribbean',
    to: 'New France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Gonnet, Philippe, natif de Metz, soldat au régiment de Pondichéry, mort à l\'île de France en 1788.',
    annotated_bio: '<strong>Gonnet, Philippe</strong>, natif de Metz, soldat au régiment de <mark>Pondichéry</mark>, mort à l\'<mark>île de France</mark> en 1788.',
    name: 'Gonnet, Philippe',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: null,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Ménard, Jean Louis, natif d\'Avranches, soldat au régiment de Pondichéry, mort à l\'île de France en 1788',
    annotated_bio: '<strong>Ménard, Jean Louis</strong>, natif d\'Avranches, soldat au régiment de <mark>Pondichéry</mark>, mort à l\'<mark>île de France</mark> en 1788',
    name: 'Ménard, Jean Louis',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: null,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Plausot, Hubert, soldat au régiment de Pondichéry, mort à l\'hôpital de l\'île de France le 12 avril 1788 .',
    annotated_bio: '<strong>Plausot, Hubert</strong>, soldat au régiment de <mark>Pondichéry</mark>, mort à l\'hôpital de l\'<mark>île de France</mark> le 12 avril 1788 .',
    name: 'Plausot, Hubert',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Salz, Bernard, soldat au régiment de Pondichéry, mort à l\'hôpital royal de l\'île de France le 16 novembre 1788 ',
    annotated_bio: '<strong>Salz, Bernard</strong>, soldat au régiment de <mark>Pondichéry</mark>, mort à l\'hôpital royal de l\'<mark>île de France</mark> le 16 novembre 1788 ',
    name: 'Salz, Bernard',
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Vlieghe, ancien capitaine de milices, armateur et négociant à Cayenne et à Saint-Domingue en 1788',
    annotated_bio: '<strong>Vlieghe</strong>, ancien capitaine de milices, armateur et négociant à <mark>Cayenne</mark> et à <mark>Saint-Domingue</mark> en 1788',
    name: 'Vlieghe',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  },
  {
    bio: 'Blondy, ouvrier du Roi, embarqué pour Cayenne, autorisé à partir pour Saint-Domingue en 1789',
    annotated_bio: '<strong>Blondy</strong>, ouvrier du Roi, embarqué pour <mark>Cayenne</mark>, autorisé à partir pour <mark>Saint-Domingue</mark> en 1789',
    name: 'Blondy',
    from: 'Caribbean',
    to: 'Guyana',
    via_metropole: true,
    tag: 'after_1763',
    category: 'other'
  },
  {
    bio: 'Béthisy, Louis de, ancien sergent au régiment de l\'île de France vers 1790, demande une place de commis aux écritures à Saint-Domingue 1784/1790',
    annotated_bio: '<strong>Béthisy, Louis de</strong>, ancien sergent au régiment de l\'<mark>île de France</mark> vers 1790, demande une place de commis aux écritures à <mark>Saint-Domingue</mark> 1784/1790',
    name: 'Béthisy, Louis de',
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    via_metropole: true,
    tag: 'after_1763',
    category: 'military'
  }
]
  ;
