const LAWS_LINKS = [
  {
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    from_date: 1685,
    to_date: 1723,
    preview: 'All slaves shall be baptized and instructed in the Roman, Catholic, and Apostolic Faith',
    through_metropole: true,
    partial_match: false
  },
  {
    from: 'Caribbean',
    to: 'Guyana',
    from_date: 1626,
    to_date: 1651,
    preview: 'The king […] would not have conceeded […] the American mainland if it were not under the condition of sending ecclesiatics , as it was done in New France, & on the Islands of Saint Christopher, Guadeloupe, Martinique and others where […] the Catholic, Apostolic, and Roman faith which was unknown before is now well established.',
    through_metropole: true,
    partial_match: false
  },
  {
    from: 'New France',
    to: 'Guyana',
    from_date: 1627,
    to_date: 1651,
    preview: 'The king […] would not have conceeded […] the American mainland if it were not under the condition of sending ecclesiatics , as it was done in New France, & on the Islands of Saint Christopher, Guadeloupe, Martinique and others where […] the Catholic, Apostolic, and Roman faith which was unknown before is now well established.',
    through_metropole: true,
    partial_match: false
  },
  {
    from: 'Louisiana',
    to: 'India',
    from_date: 1724,
    to_date: 1747,
    preview: 'The Council […] commands that all people keeping slaves to have them instructed in the Catholic apostolic and Roman religion to have them Baptized […] under the penalties of the edict of the king of March, Seventeenth Hundred and Twenty Four',
    through_metropole: false,
    partial_match: false
  },
  {
    from: 'Caribbean',
    to: 'New France',
    from_date: 1626,
    to_date: 1627,
    preview: 'In each habitation […] to convert the savages and assist the French of New France, there will be at least three ecclesiastics',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'Caribbean',
    to: 'New France',
    from_date: 1626,
    to_date: 1627,
    preview: 'To populate said land with French Catholic subjects so that, through their example, those nations would be inclined to embrace Christian religion',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'Caribbean',
    to: 'Guyana',
    from_date: 1626,
    to_date: 1664,
    preview: 'We consider that the primary goal of these said colonies is the Glory of God through the conversion of the Indians and Savages',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'Caribbean',
    to: 'Senegal',
    from_date: 1626,
    to_date: 1664,
    preview: 'We consider that the primary goal of these said colonies is the Glory of God through the conversion of the Indians and Savages',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'Caribbean',
    to: 'Senegal',
    from_date: 1626,
    to_date: 1688,
    preview: 'We order the Directors & Commandants to impose the practice of the Roman Catholic and Apostolic religion',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'Caribbean',
    to: 'Madagascar',
    from_date: 1626,
    to_date: 1664,
    preview: 'Said company will establish ecclestictics on said islands of Madagascar & other territories it will conquer to instruct the people to the Catholic, Apostolic & Roman Religion"',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'Caribbean',
    to: 'India',
    from_date: 1626,
    to_date: 1664,
    preview: 'Said company will establish ecclestictics on said islands of Madagascar & other territories it will conquer to instruct the people to the Catholic, Apostolic & Roman Religion"',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    from_date: 1626,
    to_date: 1664,
    preview: 'Said company will establish ecclestictics on said islands of Madagascar & other territories it will conquer to instruct the people to the Catholic, Apostolic & Roman Religion"',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'Caribbean',
    to: 'Senegal',
    from_date: 1642,
    to_date: 1688,
    preview: 'To our Directors & Commandants to promote the practice of the [Catholic faith] in all our concessions, without allowing the practice of any other',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'Caribbean',
    to: 'India',
    from_date: 1642,
    to_date: 1701,
    preview: 'Prohibition of non-Christian religious ceremonies',
    through_metropole: false,
    partial_match: true
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: 1723,
    to_date: 1724,
    preview: 'All slaves shall be baptized and instructed in the Roman, Catholic, and Apostolic Faith',
    through_metropole: true,
    partial_match: false
  },
  {
    from: 'New France',
    to: 'Madagascar',
    from_date: 1603,
    to_date: 1664,
    preview: 'It is necessary to make [Madagascar] entirely French, in terms of customs & language.',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'New France',
    to: 'Caribbean',
    from_date: 1627,
    to_date: 1635,
    preview: 'His Majesty will allow that […] the Savages who will convert to the faith and will practice it will be considered and known as natural-born French.',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'Caribbean',
    to: 'Madagascar',
    from_date: 1664,
    to_date: 1664,
    preview: 'Those born Catholic will be considered and known as French-born',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'Caribbean',
    to: 'India',
    from_date: 1664,
    to_date: 1664,
    preview: 'Those born Catholic will be considered and known as French-born',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    from_date: 1664,
    to_date: 1664,
    preview: 'Those born Catholic will be considered and known as French-born',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'New France',
    to: 'Madagascar',
    from_date: 1603,
    to_date: 1642,
    preview: 'A Frenchman married to a girl or woman from the island, will not leave or abandon his wife, under no circumstances.',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'New France',
    to: 'India',
    from_date: 1603,
    to_date: 1669,
    preview: 'To seek the means to find women there, to establish families.',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'New France',
    to: 'Louisiana',
    from_date: 1603,
    to_date: 1699,
    preview: 'To allow the French who will settle in this country to marry with the daughters of the savages.',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Senegal',
    from_date: 1674,
    to_date: 1688,
    preview: 'Prohibition to support any Negress, go to their cabins, or let them ente their own, under no circumstances',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: 1674,
    to_date: 1693,
    preview: 'The resolution I took to prevent [such marriages] from now on',
    through_metropole: false,
    partial_match: true
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: 1723,
    to_date: 1724,
    preview: 'We forbid our white subjects, of both sexes, to marry blacks under penalty of punishment and arbitrary fine and to all clerics, priests, or secular or regular missionaries and even to chaplains of the vessels of the Marine, to marry them.',
    through_metropole: true,
    partial_match: false
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Isle Bourbon & Isle of France',
    from_date: 1674,
    to_date: 1723,
    preview: 'We forbid our white subjects, of both sexes, to marry blacks under penalty of punishment and arbitrary fine and to all clerics, priests, or secular or regular missionaries and even to chaplains of the vessels of the Marine, to marry them.',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    from_date: 1685,
    to_date: 1723,
    preview: 'we declare that manumitted slaves do not need our naturalization papers to enjoy the advantages of our natural subjects in our kingdom',
    through_metropole: true,
    partial_match: false
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: 1723,
    to_date: 1724,
    preview: 'we declare that manumitted slaves do not need our naturalization papers to enjoy the advantages of our natural subjects in our kingdom',
    through_metropole: true,
    partial_match: false
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: 1723,
    to_date: 1724,
    preview: 'we declare […] manumitted slaves as well as free negroes incapable of receiving any donations from whites, neither inter vivos, nor after death or for any other reason',
    through_metropole: true,
    partial_match: false
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: 1723,
    to_date: 1724,
    preview: 'Manumitted or free negroes who will give asylum in their homes to fugitive slaves will pay a fine of thirty livres for each day of retention [..] if the said manumitted of free Negroes are unable to pay the fine, they will be reduced to the condition of slaves and sold',
    through_metropole: true,
    partial_match: false
  },
  {
    from: 'Caribbean',
    to: 'Isle Bourbon & Isle of France',
    from_date: 1678,
    to_date: 1723,
    preview: 'Manumitted or free negroes who will give asylum in their homes to fugitive slaves will pay a fine of thirty livres for each day of retention [..] if the said manumitted of free Negroes are unable to pay the fine, they will be reduced to the condition of slaves and sold',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'Louisiana',
    to: 'New France',
    from_date: 1728,
    to_date: 1749,
    preview: 'On the question of marriages of Frenchmen to native women […] it would be easy to obtain a prohibition from the Court similar to the one it issued for the Government of Louisiana',
    through_metropole: false,
    partial_match: false
  },
  {
    from: 'New France',
    to: 'Louisiana',
    from_date: 1709,
    to_date: 1728,
    preview: 'We forbid all Frenchmen and any other white subjects of the king to marry savage women',
    through_metropole: false,
    partial_match: true
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: 1724,
    to_date: 1758,
    preview: 'It is necessary to always keep manumitted slaves in an inferior position and to prevent them from forming alliances with whites; His Majesty has prohibited the inhabitants of Louisiana of both sexes to marry Blacks"',
    through_metropole: false,
    partial_match: false
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: 1724,
    to_date: 1726,
    preview: 'In conformity with article LII of our edict of March 1724, all manumitted slaves as well as free negroes will be incapable of receiving any donations from whites in the future, neither inter vivos, nor after death or for any other reason',
    through_metropole: true,
    partial_match: false
  },
  {
    from: 'Louisiana',
    to: 'Guyana',
    from_date: 1724,
    to_date: 1726,
    preview: 'In conformity with article LII of our edict of March 1724, all manumitted slaves as well as free negroes will be incapable of receiving any donations from whites in the future, neither inter vivos, nor after death or for any other reason',
    through_metropole: true,
    partial_match: false
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: 1724,
    to_date: 1726,
    preview: 'We order that in accordance with the edict of March 1724 which serves of law for the enslaved in our province of Louisiana, should manumitted negroes or freemen who have offered shelter to said slaves be unable to pay the fine of 300 livres of sugar for each retention day of fugitive slaves, they will be reduced to slavery',
    through_metropole: true,
    partial_match: false
  },
  {
    from: 'Louisiana',
    to: 'Guyana',
    from_date: 1724,
    to_date: 1726,
    preview: 'We order that in accordance with the edict of March 1724 which serves of law for the enslaved in our province of Louisiana, should manumitted negroes or freemen who have offered shelter to said slaves be unable to pay the fine of 300 livres of sugar for each retention day of fugitive slaves, they will be reduced to slavery',
    through_metropole: true,
    partial_match: false
  },
  {
    from: 'New France',
    to: 'Louisiana',
    from_date: 1709,
    to_date: 1716,
    preview: 'The intention of his Majesty is […] to prevent these sorts of marriages a much as it is in your power."',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'New France',
    to: 'India',
    from_date: 1709,
    to_date: 1730,
    preview: 'To marry the daughters of Frenchmen',
    through_metropole: false,
    partial_match: false
  },
  {
    from: 'New France',
    to: 'Isle Bourbon & Isle of France',
    from_date: 1709,
    to_date: 1734,
    preview: 'Prohibits [the Council] from allowing its employees to marry creole girls',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: 1736,
    to_date: 1743,
    preview: 'No employee of the company of any kind in the Indies, on the Islands in the East is allowed to marry without the consent of the company or the councilors and without the agreement of the governors under sentence of being expelled from the Company',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'Louisiana',
    to: 'Isle Bourbon & Isle of France',
    from_date: 1726,
    to_date: 1738,
    preview: 'The company  had approved the dismissal in 1742 and 1738 of some employees and officers […] because they had married without the permission of the Council […] and had allowed others to without hope of being promoted',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'Louisiana',
    to: 'India',
    from_date: 1726,
    to_date: 1748,
    preview: 'That every employee [in the East Indies] who should marry a woman of Indian blood will only be able to reach the rank of sub-dealer [sous-marchand].',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Caribbean',
    from_date: 1674,
    to_date: 1731,
    preview: 'Prohibited marriages between blacks and whites',
    through_metropole: true,
    partial_match: true
  },
  {
    from: 'Senegal',
    to: 'Guyana',
    from_date: 1763,
    to_date: 1767,
    preview: 'These [Gorean] families tend to acquire an additional degree of whiteness through new alliances with poor whites; this population will soon acquire the color that has to be that of masters in America.”',
    through_metropole: false,
    partial_match: true
  },
  {
    from: 'India',
    to: 'Louisiana',
    from_date: 1702,
    to_date: 1728,
    preview: 'Declare the Savages excluded from the successions of the French.',
    through_metropole: false,
    partial_match: true
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: 1705,
    to_date: 1751,
    preview: 'Negroes and negresses having obtained their freedom, who will be capable of receiving slaves in their home to seduce them and incite them to steal from their masters, and lead a scandalous life, will lose their liberty',
    through_metropole: false,
    partial_match: true
  }
]
  ;