const TROPES = [
  {
    "Trope": "Black women's pendulous breasts",
    "Citation": "“On y voit des filles belles et bien faittes; mais les femmes ont des tettasses qui leur pendent jusque a la ceinture, ce qui vient…qu’elles nourissent leurs enfans qu’elle portent toujours en Croupe lors même qu’elles travaillent” ",
    "Title": "La Courbe, Premier voyage, p. 30",
    "Date": "1686",
    "Place": "Atlantic",
    "Author": "Sieur de La Courbe"
  },
  {
    "Trope": "Black women's pendulous breasts",
    "Citation": "“les enfans qui naissent sont […] allaittés par leurs meres qui les portent sur leur dos dans une toile. Si elles ont les mammelles assez longues, elles les donnent pardessus l’épaule.\"",
    "Title": "Souchu de Rennefort, Memoires pour servir a l’histoire des Indes Orientales, pp. 130-131",
    "Date": "1668",
    "Place": "Indian Ocean",
    "Author": "Urbain Souchu de Rennefort"
  },
  {
    "Trope": "Black women's pendulous breasts",
    "Citation": "\"Childing, and their Breasts always pendulous,\n stretches them to so unseemly a length and Bigness that some . . . could\n suckle over their shoulder.\"",
    "Title": "John Atkins, A Voyage to Guinea, Brazil, and the West-Indies (1735), (London, 1970), 50.",
    "Date": "1735",
    "Place": "Atlantic",
    "Author": "John Atkins"
  },
  {
    "Trope": "Blacks compared to animals",
    "Citation": "“when the chief arrived in Saint-Louis il se tint devant la porte, assis sur son cul, comme un singe.” ",
    "Title": "La Courbe, Premier voyage, p. 45",
    "Date": "1686",
    "Place": "Atlantic",
    "Author": "Sieur de La Courbe"
  },
  {
    "Trope": "Black skin's negative connotations",
    "Citation": "\"on ne sçauroit mieux verifier le proverbe qui dit que l’amour est aveugle, que dans la passion déreglée de quelques-uns de nos François qui se portent à aymer leurs Négresses malgré la noirceur de leur visage, qui les rend hideuses, & l’odeur insupportable qu’elles exhalent, qui devroient à mon advis esteindre l’ardeur de leur feu criminel.\"",
    "Title": "Jean-Baptiste Du Tertre, L’Histoire générale des Antilles habitées par les Français (3 vols., Paris, 1667-1671), II: 511",
    "Date": "1667",
    "Place": "Atlantic",
    "Author": "Jean-Baptiste Du Tertre"
  },
  {
    "Trope": "Black skin's negative connotations",
    "Citation": "\"ils sont fripons, cela est attaché à la couleur noire\"",
    "Title": "Jean-Baptiste Labat, Nouvelle relation de l’Afrique occidentale (4 vols., Paris, 1728), III, 171. ",
    "Date": "1728",
    "Place": "Atlantic",
    "Author": "Jean-Baptiste Labat"
  },
  {
    "Trope": "Black people's bad smell",
    "Citation": "\"on ne sçauroit mieux verifier le proverbe qui dit que l’amour est aveugle, que dans la passion déreglée de quelques-uns de nos François qui se portent à aymer leurs Négresses malgré la noirceur de leur visage, qui les rend hideuses, & l’odeur insupportable qu’elles exhalent, qui devroient à mon advis esteindre l’ardeur de leur feu criminel.\"",
    "Title": "Jean-Baptiste Du Tertre, L’Histoire générale des Antilles habitées par les Français (3 vols., Paris, 1667-1671), II: 511",
    "Date": "1667",
    "Place": "Atlantic",
    "Author": "Jean-Baptiste Du Tertre"
  },
  {
    "Trope": "Black people's bad smell",
    "Citation": "\"les habitans de cette Isle sont presque tous noirs & se frottent le corps d’une graisse puante qui jointe à la laideur naturelle les rend vilain & defectueux\"",
    "Title": "Charles Dellon, Relation d’un voyage des Indes Orientales dedié à Monseigneur l’evêque de Meaux (2 vols., Paris, 1685), I, 35, 39",
    "Date": "1685",
    "Place": "Indian Ocean",
    "Author": "Charles Dellon"
  },
  {
    "Trope": "Black people's bad smell",
    "Citation": "\"[ils] pu[en]t par ce moyen en sorte que l’on ne se peut pas se tenir aupres d’eux\"",
    "Title": "Thomas Herbert, Relation du voyage de Perse et des Indes orientales, traduite de l’Anglois par Wicquefort (Paris, 1663), p. 29",
    "Date": "1663",
    "Place": "Indian Ocean",
    "Author": "Thomas Herbert"
  },
  {
    "Trope": "On black and indigenous men's beards",
    "Citation": "\"bazané, mal faisant, sans barbe\"",
    "Title": "François Cauche, Relation du Voyage que François Cauche De Rouen a Fait à Madagascar, isles adjacentes & coste d’Afrique: recueilly par le Sieur Morisot (Paris, 1651), p. 45",
    "Date": "1651",
    "Place": "Indian Ocean",
    "Author": "François Cauche"
  },
  {
    "Trope": "Black people's ugliness",
    "Citation": "\"on ne sçauroit mieux verifier le proverbe qui dit que l’amour est aveugle, que dans la passion déreglée de quelques-uns de nos François qui se portent à aymer leurs Négresses malgré la noirceur de leur visage, qui les rend hideuses, & l’odeur insupportable qu’elles exhalent, qui devroient à mon advis esteindre l’ardeur de leur feu criminel.\"",
    "Title": "Jean-Baptiste Du Tertre, L’Histoire générale des Antilles habitées par les Français (3 vols., Paris, 1667-1671), II: 511",
    "Date": "1667",
    "Place": "Atlantic",
    "Author": "Jean-Baptiste Du Tertre"
  },
  {
    "Trope": "Black people's ugliness",
    "Citation": "Once having the possibility of beginning a relationship with the daughter of a Malagasy leader, he declared that he was ‘trop delicat’ and ‘dégout[é]’ to take up this opportunity",
    "Title": "Carpeau de Saussay, Voyage de Madagascar, connu aussi sous le nom de l’ile St Laurent (Paris, 1722), pp. 255-256.",
    "Date": "1722",
    "Place": "Indian Ocean",
    "Author": "Carpeau de Saussay"
  },
  {
    "Trope": "Indigenous people as \"barbarians\"",
    "Citation": "\"barbares\"",
    "Title": "Cauche, Relations veritables et curieuses de l’isle de Madagascar, p. 1.",
    "Date": "1651",
    "Place": "Indian Ocean",
    "Author": "François Cauche"
  },
  {
    "Trope": "Indigenous people as \"barbarians\"",
    "Citation": "\"barbares perfides",
    "Title": "Etienne de Flacourt, Histoire de la grande isle de Madagascar, avant- propos.",
    "Date": "1661",
    "Place": "Indian Ocean",
    "Author": "Étienne de Flacourt "
  },
  {
    "Trope": "Indigenous people's cruelty",
    "Citation": "\"ce Sont leurs delices, que de rencontrer des enfans, qu’ils fendent en deux tout en vie, & deschirent en morceaux, & des femmes à qui ils fendent le ventre, & les laissent ainsi languir à demi mortes\"",
    "Title": "Flacourt, Histoire de la grande isle de Madagascar, pp. 83-84.",
    "Date": "1661",
    "Place": "Indian Ocean",
    "Author": "Étienne de Flacourt "
  },
  {
    "Trope": "Indigenous people's cruelty",
    "Citation": "\"Ils sont tres-cruels dans leur Victoire, & mettent tout ce qu'ils peuvent à feu & à sang, sans espargner aucune chose, non pas mesme les enfans ay berceau\"",
    "Title": "Sieur Dubois, Les voyages faits par le sieur D.B aux isles Dauphine ou Madagascar, et Bourbon ou Mascarenne, ès [sic] années 1669, 70, 71 et 72 (1674, Paris) p. 119;",
    "Date": "1674",
    "Place": "Indian Ocean",
    "Author": "Sieur Dubois"
  },
  {
    "Trope": "Indigenous people's deceitfulness",
    "Citation": "\"s’il y a nation au monde adonnée à la trahison, dissumulation, flatterie, cruauté, mensonge & tromperie, c’est celle cy\"",
    "Title": "Flacourt, Histoire de la grande isle Madagascar, p. 83.",
    "Date": "1661",
    "Place": "Indian Ocean",
    "Author": "Étienne de Flacourt "
  },
  {
    "Trope": "Indigenous people's deceitfulness",
    "Citation": "\"il est dangereux de se fier trop à eux, & quand ils veulent trahir quelqu'un, c'est lors qu'ils font le plus de carresses.\"",
    "Title": "Dubois, Les voyages faits par le sieur D.B aux isles Dauphine ou Madagascar, et Bourbon ou Mascarenne, pp. 110-111",
    "Date": "1674",
    "Place": "Indian Ocean",
    "Author": "Sieur Dubois"
  },
  {
    "Trope": "Indigenous people's deceitfulness",
    "Citation": "\"ses gestes sont attrayants, & prend une mine riant & dissimulée\"",
    "Title": "Souchu de Rennefort, Relation du premier voyage de la Compagnie des Indes, p. 262.",
    "Date": "1668",
    "Place": "Indian Ocean",
    "Author": "Urbain Souchu de Rennefort"
  },
  {
    "Trope": "Black people's lack of intelligence",
    "Citation": "\"ignorants\"",
    "Title": "Herbert, Relation du voyage de Perse et des Indes orientales, p. 27.",
    "Date": "1663",
    "Place": "Indian Ocean",
    "Author": "Thomas Herbert"
  },
  {
    "Trope": "Black people's lack of intelligence",
    "Citation": "\"pauvres idiots de Negres\"",
    "Title": "Flacourt, Histoire de la grande isle de Madagascar, p. 16.",
    "Date": "1661",
    "Place": "Indian Ocean",
    "Author": "Étienne de Flacourt "
  },
  {
    "Trope": "Indigenous women's sexual depravity",
    "Citation": "\"les filles & femmes de ce païs [Madagascar] sont fort impudiques\"",
    "Title": "Dubois, Les voyages faits par le sieur D.B aux isles Dauphine ou Madagascar, et Bourbon ou Mascarenne, p. 154.",
    "Date": "1674",
    "Place": "Indian Ocean",
    "Author": "Sieur Dubois"
  },
  {
    "Trope": "Indigenous women's sexual depravity",
    "Citation": "\"d’une complexion fort amoureuse\" \"il n’y a point d’avances qu’elles ne leur fassent pour les engager à recevoir les faveurs\"",
    "Title": "Carpeau de Saussay, Voyage de Madagascar, pp. 254-255.",
    "Date": "1722",
    "Place": "Indian Ocean",
    "Author": "Carpeau de Saussay"
  },
  {
    "Trope": "Malagasies' mistreating their children",
    "Citation": "They let them crawl outside like \"des rat écorchez\"",
    "Title": "Carpeau de Saussay, Voyage de Madagascar, p. 254.",
    "Date": "1722",
    "Place": "Indian Ocean",
    "Author": "Carpeau de Saussay"
  },
  {
    "Trope": "Malagasies' mistreating their children",
    "Citation": "\"Si aussi une miserable esclave, qui n'est point mariée accouche, & qu'elle soit negligée de son Maitre, elle ne faindra point de jetter son enfant à la rivère ou l'enterrer tout en vie ou l'estrangler [...] si la femme a esté bien malde en sa grosses, et en accouchant [...] elle commander qu'on l'estrangle, & qu'on l'enterre [...] Si la fille d'un Roandrian, avant que d'estre mariée, se joüe avec un Négre,  [...] etstant accouncgée; elle fait mourir son enfant, ou bin si l'enfant est noir comme le pere [...] ou su'il aye les cheveux frizez, il est ausso-tosts condamné à mourir\"",
    "Title": "Flacourt, Histoire de la grande isle de Madagascar, p. 93.",
    "Date": "1661",
    "Place": "Indian Ocean",
    "Author": "Étienne de Flacourt "
  },
  {
    "Trope": "On black people's alleged laziness",
    "Citation": "\"ils sont [...] paresseux\"",
    "Title": "Flacourt, Histoire de la grande isle de Madagascar, p. 8, 10, 83.",
    "Date": "1661",
    "Place": "Indian Ocean",
    "Author": "Étienne de Flacourt "
  },
  {
    "Trope": "On black people's alleged laziness",
    "Citation": "\"on accoutumera difficilement ces peuples au travail\"",
    "Title": "Mémoires de François Martin, p. 18, 170.",
    "Date": "1665",
    "Place": "Indian Ocean",
    "Author": "François Martin"
  },
  {
    "Trope": "Indigenous people's hospitality",
    "Citation": "\"ces Noirs sont fort Hospitaliers\" \"bien receus par tout\"",
    "Title": "Dubois, Les voyages faits par le sieur D.B aux isles Dauphine ou Madagascar, et Bourbon ou Mascarenne, p. 112.",
    "Date": "1674",
    "Place": "Indian Ocean",
    "Author": "Sieur Dubois"
  },
  {
    "Trope": "Indigenous people's hospitality",
    "Citation": "\"Pource qui regarde l'hospitalité, ils l'ont entre-eux, s'entre-assistent de vivres les uns les autres, & ne denient point à manger à ceux qui en demandent [...] s'ils mangent, ils departent ce qui'ls ont à tous les autres, & le plus souvent ils ne gardent rien pour eux\"",
    "Title": "Flacourt, Histoire de la grande isle de Madagascar, pp. 86-87.",
    "Date": "1661",
    "Place": "Indian Ocean",
    "Author": "Étienne de Flacourt "
  },
  {
    "Trope": "Noble Savage",
    "Citation": "\"c’est une peuplade qui est en son enfance\" \"ils sont sans ambition & sans luxe, passant plus doucement leur vie que les autres habitans de l’Europe\"",
    "Title": "Flacourt, Histoire de la grande isle de Madagascar, avant-propos.",
    "Date": "1661",
    "Place": "Indian Ocean",
    "Author": "Étienne de Flacourt "
  },
  {
    "Trope": "Indigenous people being well-built",
    "Citation": "\"les Madagascarinois sont naturellement robustes, & d’une complexion admirable, endurcis dès leur jeunesse à la fatigue; rien ne les incommoderoit, si les excès qu’ils font ne leur ruinoit pas la santé\"",
    "Title": "Carpeau de Saussay, Voyage de Madagascar, pp. 275-276.",
    "Date": "1722",
    "Place": "Indian Ocean",
    "Author": "Carpeau de Saussay"
  },
  {
    "Trope": "Indigenous people being well-built",
    "Citation": "\"ces gens-là sont bien faits, dispos; point de boiteux ni de bossus que par accident\"",
    "Title": "Mémoires de François Martin, p. 153.",
    "Date": "1665",
    "Place": "Indian Ocean",
    "Author": "François Martin"
  },
  {
    "Trope": "Indigenous people being well-built",
    "Citation": "\"le Madagascarois est grand, agile & d’une démarche fiere\"",
    "Title": "Souchu de Rennefort, Memoires pour servir a l’histoire des Indes orientales, p. 128.",
    "Date": "1668",
    "Place": "Indian Ocean",
    "Author": "Urbain Souchu de Rennefort"
  },
  {
    "Trope": "Indigenous people scared of Europeans",
    "Citation": "\"j’ai vû Souvent des Villages entiers s’enfuir, dès qu’ils nous appercevoient\"",
    "Title": "Carpeau de Saussay, Voyage de Madagascar, p. 250.",
    "Date": "1722",
    "Place": "Indian Ocean",
    "Author": "Carpeau de Saussay"
  },
  {
    "Trope": "Indigenous people criticizing the French habit of strolling",
    "Citation": "\"ils se mocquent de nous, quand nous nous promenons les uns avec les autres, disans que nous sommes bien fous; & quand ils voyent un François Seul se promener ils croyent qu’il est bien fasché, & qu’il a quelque mauvais dessein\"",
    "Title": "Flacourt, Histoire de la grande isle de Madagascar, p. 106.",
    "Date": "1661",
    "Place": "Indian Ocean",
    "Author": "Étienne de Flacourt "
  },
  {
    "Trope": "On the alleged ugliness of Native Americans",
    "Citation": "\"plus laides que belles\"",
    "Title": "LOC, ‘Memoranda on French colonies in America, including Canada, Louisiana, and the Caribbean’, ‘Memoire concernant le pays Illinois, 1691’, p. 302.",
    "Date": "1691",
    "Place": "Atlantic",
    "Author": "Pierre Charles Deliette "
  },
  {
    "Trope": "On the cannibalism of indigenous people",
    "Citation": "\"lantropophagie naturelle aux Sauvages\"",
    "Title": "Carpeau de Saussay, Voyage de Madagascar, p. 6",
    "Date": "1722",
    "Place": "Indian Ocean",
    "Author": "Carpeau de Saussay"
  },
  {
    "Trope": "Indigenous people's cannibalism",
    "Citation": "natives would beat their war prisoners with a stick, tear off their nails and smoke their fingers in pipes before roasting their skin and eating it ‘s’en [suçant] Les doigts comme d’un manger tres exquis’",
    "Title": "\"Relation du Sieur de La Mothe Cadillac Capitaine en pied ayant une Compagnie de La Marine en Canada de Missilimakinak et autres Postes dans Le pays Eloigné, ou il a esté pendant trois années,\" pp. 395-396, 403-404.",
    "Date": "1710",
    "Place": "Atlantic",
    "Author": "Antoine de la Mothe, sieur de Cadillac"
  },
  {
    "Trope": "Indigenous people as \"barbarians\"",
    "Citation": "\"Barbarisé[s]\"",
    "Title": "Relation du Sieur de La Mothe Cadillac’, p. 424, 426;",
    "Date": "1710",
    "Place": "Atlantic",
    "Author": "Antoine de la Mothe, sieur de Cadillac"
  },
  {
    "Trope": "Indigenous people as \"barbarians\"",
    "Citation": "\"Barbares\"",
    "Title": "Hennepin, Description de la Louisiane, epitre, p. 207",
    "Date": "1683",
    "Place": "Atlantic",
    "Author": "Louis Hennepin"
  },
  {
    "Trope": "",
    "Citation": "Illinois Indians look like dogs when playing games on their mats at night",
    "Title": "LOC, ‘Memoranda on French colonies in America, including Canada, Louisiana, and the Caribbean’, ‘Memoire concernant le pays Illinois, 1691’, p. 316.",
    "Date": "1691",
    "Place": "Atlantic",
    "Author": "Pierre Charles Deliette "
  },
  {
    "Trope": "Native Americans compared to animals",
    "Citation": "\"ils mangent en renifflant, & en soufflant comme des bêtes’ and ‘souvent couchés comme les chiens\"",
    "Title": "Hennepin, Description de la Louisiane, p. 15, 53, 55, 191.",
    "Date": "1691",
    "Place": "Atlantic",
    "Author": "Louis Hennepin"
  },
  {
    "Trope": "Indigenous people's deceitfulness",
    "Citation": "\"ils Sont poltrons Luxurieux, Se prevalent toujours de la faiblesse de ceux avec qui ils ont affaires, Voleurs gourmands, Vindicatifs, dissimulez, parjures\"",
    "Title": "LOC, ‘Memoranda on French colonies in America, including Canada, Louisiana, and the Caribbean’, ‘Memoire concernant le pays Illinois 1691’, p. 293.",
    "Date": "1691",
    "Place": "Atlantic",
    "Author": "Pierre Charles Deliette "
  },
  {
    "Trope": "On Native American deceitfulness",
    "Citation": "Always involved in \"des Perfidies, des Trahisons et des massacres horribles\"",
    "Title": "LOC, ‘Memoranda on French colonies in America, including Canada, Louisiana, and the Caribbean’, ‘Relation du Sieur de La Mothe Cadillac’, p. 420.",
    "Date": "1710",
    "Place": "Atlantic",
    "Author": "Antoine de la Mothe, sieur de Cadillac"
  },
  {
    "Trope": "On Native American lazyness",
    "Citation": "\"faisneans\"",
    "Title": "‘Memoir sent in 1693, on the discovery of the Mississippi by M. de la Salle, by the Sieur de Tonti’, in Illinois Historical Collections (38 vols., Springfield, 1903-1978), Volume I: a compilation of primary sources related to La Salle, Marquette, Hennepin, de Tonti, George Rogers Clark and others, edited by Hiram Williams Beckwith, p. 145",
    "Date": "1693",
    "Place": "Atlantic",
    "Author": "Henri de Tonti"
  },
  {
    "Trope": "On Native American lazyness",
    "Citation": "\"indolent\"; \"idle\"; \"women [...] do nearly all the work’",
    "Title": "Paul Du Ru, Journal of Paul Du Ru, Ruth Lapham Butler ed. and trans. (Fairfield, 1997), p. 29, 52-3",
    "Date": "1700",
    "Place": "Atlantic",
    "Author": "Paul Du Ru"
  },
  {
    "Trope": "Indigenous women's sexual depravity",
    "Citation": "\"quand quelque homme qui n’a point de femme passe par un village, il en louë pour une nuit ou pour deux selon sa fantaisie\"; \"cette grande inconstance & changement des femmes, est une grande opposition aux maxims du Christianisme que nous voulions donner aux Sauvages\"",
    "Title": "Hennepin, Description de la Louisiane, pp. 34-37.",
    "Date": "1691",
    "Place": "Atlantic",
    "Author": "Louis Hennepin"
  },
  {
    "Trope": "Indigenous women's sexual depravity",
    "Citation": "native customs allowed women to entertain themselves with \"autant de garcons que bon Leur Semble\"",
    "Title": "LOC, ‘Memoranda on French colonies in America, including Canada, Louisiana, and the Caribbean’, ‘Relation du Sieur de La Mothe Cadillac’, p. 435, 410, 412-13.",
    "Date": "1710",
    "Place": "Atlantic",
    "Author": "Antoine de la Mothe, sieur de Cadillac"
  },
  {
    "Trope": "On indigenous people being capable of reason",
    "Citation": "\"parmi eux, il y en a de bon sens, qui raisonnent bien\"",
    "Title": "\"Mémoires de François Martin,\" p. 155",
    "Date": "1665",
    "Place": "Indian Ocean",
    "Author": "François Martin"
  },
  {
    "Trope": "On indigenous people being capable of reason",
    "Citation": "\"les ameriquains Sont des hommes tres raisonnables \"",
    "Title": "LOC, ‘Memoranda on French colonies in America, including Canada, Louisiana, and the Caribbean’, ‘Remarques Sur l’origine des Peuples de l’Amerique par Mr Bodé prestre de la Mission’, p. 2.",
    "Date": "N/A",
    "Place": "Atlantic",
    "Author": "Mr. Bodé"
  },
  {
    "Trope": "On Native American lacking \"culture\"",
    "Citation": "\"n’est point\"cultivé\"",
    "Title": "LOC, ‘Memoranda on French colonies in America, including Canada, Louisiana, and the Caribbean’, ‘Relation du Sieur de La Mothe Cadillac’, pp. 382-383.",
    "Date": "1710",
    "Place": "Atlantic",
    "Author": "Antoine de la Mothe, sieur de Cadillac"
  },
  {
    "Trope": "On Native American lacking \"culture\"",
    "Citation": "\"s’ils estoient cultivez, & s’ils avoient grand commerce avec les François\"",
    "Title": "Hennepin, Description de la Louisiane, p. 19.",
    "Date": "1691",
    "Place": "Atlantic",
    "Author": "Louis Hennepin"
  },
  {
    "Trope": "Noble Savage",
    "Citation": "\"les ameriquains Sont des hommes tres raisonnables et en plusieurs choses plus admirables que nous autres Chrétiens\"",
    "Title": "LOC, ‘Memoranda on French colonies in America, including Canada, Louisiana, and the Caribbean’, ‘Remarques Sur l’origine des Peuples de l’Amerique par Mr Bodé prestre de la Mission’, p. 2.",
    "Date": "N/A",
    "Place": "Atlantic",
    "Author": "Mr. Bodé"
  },
  {
    "Trope": "On indigenous hospitality ",
    "Citation": "\"bons hospitaliers aux Etrangers\"",
    "Title": "LOC, ‘Memoranda on French colonies in America, including Canada, Louisiana, and the Caribbean’, ‘Relation de la decouverte que Mr de La Salle a faite de la riviere Mississippi en 1683’, p. 246.",
    "Date": "1683",
    "Place": "Atlantic",
    "Author": "Antoine de la Mothe, sieur de Cadillac"
  },
  {
    "Trope": "Noble Savage",
    "Citation": "\"it appears that the Savages are less savage than some nations of Europe\"; I should prefer to be alone at night in their midst than on Rue St. Jacques in Paris at nine o’clock in the evening\"",
    "Title": "Journal of Paul Du Ru, p. 31, 38",
    "Date": "1700",
    "Place": "Atlantic",
    "Author": "Paul Du Ru"
  },
  {
    "Trope": "On indigenous hospitality ",
    "Citation": "\"zealous observers of the laws of hospitality\"",
    "Title": "Journal of Paul Du Ru, p. 52.",
    "Date": "1700",
    "Place": "Atlantic",
    "Author": "Paul Du Ru"
  }
];
