const SHIPS_LINKS = [{
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1771',
    to_date: '1774',
    preview: 'CÉRÈS (1771-1774): Lorient → Mascareignes et Madagascar → Cap de Bonne-Espérance → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1774',
    to_date: '1774',
    preview: 'CÉRÈS (1771-1774): Lorient → Mascareignes et Madagascar → Cap de Bonne-Espérance → Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1774',
    to_date: '1774',
    preview: 'CÉRÈS (1771-1774): Lorient → Mascareignes et Madagascar → Cap de Bonne-Espérance → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1774',
    to_date: '1774',
    preview: 'CÉRÈS (1771-1774): Lorient → Mascareignes et Madagascar → Cap de Bonne-Espérance → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1781',
    to_date: '1782',
    preview: 'COUREUR (1781-1782): Lorient → Martinique et Cap-Français → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'COUREUR (1781-1782): Lorient → Martinique et Cap-Français → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1718',
    to_date: '1719',
    preview: 'COURRIER DE BOURBON (1718-1719): Le Havre → Lorient → Madagascar et Mascareignes → Nantes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1719',
    to_date: '1719',
    preview: 'COURRIER DE BOURBON (1718-1719): Le Havre → Lorient → Madagascar et Mascareignes → Nantes'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1719',
    to_date: '1719',
    preview: 'COURRIER DE BOURBON (1718-1719): Le Havre → Lorient → Madagascar et Mascareignes → Nantes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1719',
    to_date: '1719',
    preview: 'COURRIER DE BOURBON (1718-1719): Le Havre → Lorient → Madagascar et Mascareignes → Nantes'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1720',
    to_date: '1722',
    preview: 'COURRIER DE BOURBON (1720-1722): Nantes Paimboeuf → Port-Louis Lorient → Madagascar et Mascareignes → Paimboeuf → Port-Louis Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1722',
    to_date: '1722',
    preview: 'COURRIER DE BOURBON (1720-1722): Nantes Paimboeuf → Port-Louis Lorient → Madagascar et Mascareignes → Paimboeuf → Port-Louis Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1722',
    to_date: '1722',
    preview: 'COURRIER DE BOURBON (1720-1722): Nantes Paimboeuf → Port-Louis Lorient → Madagascar et Mascareignes → Paimboeuf → Port-Louis Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1722',
    to_date: '1722',
    preview: 'COURRIER DE BOURBON (1720-1722): Nantes Paimboeuf → Port-Louis Lorient → Madagascar et Mascareignes → Paimboeuf → Port-Louis Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1722',
    to_date: '1722',
    preview: 'COURRIER DE BOURBON (1720-1722): Nantes Paimboeuf → Port-Louis Lorient → Madagascar et Mascareignes → Paimboeuf → Port-Louis Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1723',
    to_date: '1724',
    preview: 'COURRIER DE BOURBON (1723-1724): Lorient → Sénégal et Gorée → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1724',
    to_date: '1724',
    preview: 'COURRIER DE BOURBON (1723-1724): Lorient → Sénégal et Gorée → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1724',
    to_date: '1724',
    preview: 'COURRIER DE BOURBON (1723-1724): Lorient → Sénégal et Gorée → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'COURRIER DE BOURBON (1723-1724): Lorient → Sénégal et Gorée → Antilles → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1724',
    to_date: '1724',
    preview: 'COURRIER DE BOURBON (1724-1724): Lorient → Antilles → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'COURRIER DE BOURBON (1724-1724): Lorient → Antilles → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1725',
    to_date: '1725',
    preview: 'COURRIER DE BOURBON (1725-1725): Lorient → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1725',
    to_date: '1725',
    preview: 'COURRIER DE BOURBON (1725-1725): Lorient → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1786',
    to_date: '1786',
    preview: 'COURRIER DE L’ÎLE DE FRANCE (1786-1786): Lorient → Bordeaux → île de France ?'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1727',
    to_date: '1728',
    preview: 'COURRIER D’ORLÉANS (1727-1728): Lorient → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1728',
    to_date: '1728',
    preview: 'COURRIER D’ORLÉANS (1727-1728): Lorient → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1728',
    to_date: '1728',
    preview: 'COURRIER D’ORLÉANS (1727-1728): Lorient → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1729',
    to_date: '1731',
    preview: 'COURRIER D’ORLÉANS (1729-1731): Lorient → Sénégal et Portendick → La Corogne → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1731',
    to_date: '1731',
    preview: 'COURRIER D’ORLÉANS (1729-1731): Lorient → Sénégal et Portendick → La Corogne → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1731',
    to_date: '1732',
    preview: 'COURRIER D’ORLÉANS (1731-1732): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1732',
    to_date: '1732',
    preview: 'COURRIER D’ORLÉANS (1731-1732): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1732',
    to_date: '1732',
    preview: 'COURRIER D’ORLÉANS (1732-1732): Lorient → Bordeaux → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1732',
    to_date: '1732',
    preview: 'COURRIER D’ORLÉANS (1732-1732): Lorient → Bordeaux → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1733',
    to_date: '1733',
    preview: 'COURRIER D’ORLÉANS (1733-1733): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1733',
    to_date: '1733',
    preview: 'COURRIER D’ORLÉANS (1733-1733): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1734',
    to_date: '1735',
    preview: 'COURRIER D’ORLÉANS (1734-1735): Lorient → Sénégal → Brest → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1735',
    to_date: '1735',
    preview: 'COURRIER D’ORLÉANS (1734-1735): Lorient → Sénégal → Brest → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1735',
    to_date: '1736',
    preview: 'COURRIER D’ORLÉANS (1735-1736): Lorient → Gorée → Fernando de Noronha → Martinique → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1736',
    to_date: '1736',
    preview: 'COURRIER D’ORLÉANS (1735-1736): Lorient → Gorée → Fernando de Noronha → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1736',
    to_date: '1736',
    preview: 'COURRIER D’ORLÉANS (1735-1736): Lorient → Gorée → Fernando de Noronha → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1736',
    to_date: '1736',
    preview: 'COURRIER D’ORLÉANS (1736-1736): Lorient → Gorée → Fernando de Noronha → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1736',
    to_date: '1736',
    preview: 'COURRIER D’ORLÉANS (1736-1736): Lorient → Gorée → Fernando de Noronha → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1739',
    to_date: '1740',
    preview: 'COURRIER D’ORLÉANS (1739-1740): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1740',
    to_date: '1740',
    preview: 'COURRIER D’ORLÉANS (1739-1740): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1746',
    to_date: '1747',
    preview: 'COLOMBE (1746-1747): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1751',
    to_date: '1757',
    preview: 'COLOMBE (1751-1757): Lorient → Brésil → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1757',
    to_date: '1757',
    preview: 'COLOMBE (1751-1757): Lorient → Brésil → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1757',
    to_date: '1757',
    preview: 'COLOMBE (1751-1757): Lorient → Brésil → Mascareignes → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1786',
    to_date: '1787',
    preview: 'COLON (1786-1787): Lorient → Cadix → False Bay → Mascareignes → Paimboeuf → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1787',
    to_date: '1787',
    preview: 'COLON (1786-1787): Lorient → Cadix → False Bay → Mascareignes → Paimboeuf → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1783',
    to_date: '1785',
    preview: 'COMMERCE (1783-1785): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1785',
    to_date: '1785',
    preview: 'COMMERCE (1783-1785): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1785',
    to_date: '1785',
    preview: 'COMMERCE (1785-1785): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1751',
    to_date: '1752',
    preview: 'COMPAGNIE DES INDES (1751-1752): Lorient → Cap-Vert → Inde et Mascareignes, Madagascar → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1752',
    to_date: '1752',
    preview: 'COMPAGNIE DES INDES (1751-1752): Lorient → Cap-Vert → Inde et Mascareignes, Madagascar → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1752',
    to_date: '1752',
    preview: 'COMPAGNIE DES INDES (1751-1752): Lorient → Cap-Vert → Inde et Mascareignes, Madagascar → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1752',
    to_date: '1752',
    preview: 'COMPAGNIE DES INDES (1751-1752): Lorient → Cap-Vert → Inde et Mascareignes, Madagascar → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Louisiana',
    from_date: '1752',
    to_date: '1752',
    preview: 'COMPAGNIE DES INDES (1751-1752): Lorient → Cap-Vert → Inde et Mascareignes, Madagascar → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1752',
    to_date: '1752',
    preview: 'COMPAGNIE DES INDES (1751-1752): Lorient → Cap-Vert → Inde et Mascareignes, Madagascar → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1753',
    to_date: '1755',
    preview: 'COMPAGNIE DES INDES (1753-1755): Lorient → Gorée → Madagascar, Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1755',
    to_date: '1755',
    preview: 'COMPAGNIE DES INDES (1753-1755): Lorient → Gorée → Madagascar, Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1755',
    to_date: '1755',
    preview: 'COMPAGNIE DES INDES (1753-1755): Lorient → Gorée → Madagascar, Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1755',
    to_date: '1755',
    preview: 'COMPAGNIE DES INDES (1753-1755): Lorient → Gorée → Madagascar, Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1755',
    to_date: '1755',
    preview: 'COMPAGNIE DES INDES (1753-1755): Lorient → Gorée → Madagascar, Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1756',
    to_date: '1758',
    preview: 'COMPAGNIE DES INDES (1756-1758): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1758',
    to_date: '1758',
    preview: 'COMPAGNIE DES INDES (1756-1758): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1759',
    to_date: '1760',
    preview: 'COMPAGNIE DES INDES (1759-1760): Lorient → Madagascar → Inde et Mascareignes'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'COMPAGNIE DES INDES (1759-1760): Lorient → Madagascar → Inde et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1760',
    to_date: '1760',
    preview: 'COMPAGNIE DES INDES (1759-1760): Lorient → Madagascar → Inde et Mascareignes'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1759',
    to_date: '1760',
    preview: 'COMPAGNIE DES INDES (1759-1760): Lorient → Madagascar → Inde et Mascareignes'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'COMPAGNIE DES INDES (1759-1760): Lorient → Madagascar → Inde et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1760',
    to_date: '1760',
    preview: 'COMPAGNIE DES INDES (1759-1760): Lorient → Madagascar → Inde et Mascareignes'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1781',
    to_date: '1782',
    preview: 'COMTE DE JUMILLAC (1781-1782): Bordeaux → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'COMTE DE JUMILLAC (1781-1782): Bordeaux → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1771',
    to_date: '1771',
    preview: 'COMTE DE LANGERON (1771-1771): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1775',
    to_date: '1778',
    preview: 'COMTE DE MAUREPAS (1775-1778): Lorient → Inde et Mascareignes → Lisbonne → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1778',
    to_date: '1778',
    preview: 'COMTE DE MAUREPAS (1775-1778): Lorient → Inde et Mascareignes → Lisbonne → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1778',
    to_date: '1778',
    preview: 'COMTE DE MAUREPAS (1775-1778): Lorient → Inde et Mascareignes → Lisbonne → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1777',
    to_date: '1777',
    preview: 'COMTE DE MAUREPAS (1777-1777): Lorient → ? → banc de l’Étoile, Madagascar'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1776',
    to_date: '1777',
    preview: 'COMTE DE SAINT-GERMAIN (1776-1777): Lorient → Brest → Cap de Bonne-Espérance → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1777',
    to_date: '1777',
    preview: 'COMTE DE SAINT-GERMAIN (1776-1777): Lorient → Brest → Cap de Bonne-Espérance → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1778',
    to_date: '1778',
    preview: 'COMTE DE SAINT-GERMAIN (1778-1778): Lorient → Pondichéry → canal de Mozambique'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1769',
    to_date: '1769',
    preview: 'COMTE DE SAINT-FLORENTIN (1769-1769): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1756',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1756',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE DE PROVENCE (1756-1764): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1786',
    to_date: '1787',
    preview: 'COMTE DE PROVENCE (1786-1787): Lorient → Inde → Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1787',
    to_date: '1787',
    preview: 'COMTE DE PROVENCE (1786-1787): Lorient → Inde → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1787',
    to_date: '1787',
    preview: 'COMTE DE PROVENCE (1786-1787): Lorient → Inde → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1719',
    to_date: '1719',
    preview: 'COMTE DE TOULOUSE (1719-1719): La Rochelle → Louisiane → Antilles'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1719',
    to_date: '1719',
    preview: 'COMTE DE TOULOUSE (1719-1719): La Rochelle → Louisiane → Antilles'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1718',
    to_date: '1719',
    preview: 'COMTE DE TOULOUSE (1718-1719): Le Havre → Marseille ? → Sénégal → Saint-Domingue → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1719',
    to_date: '1719',
    preview: 'COMTE DE TOULOUSE (1718-1719): Le Havre → Marseille ? → Sénégal → Saint-Domingue → Le Havre'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1719',
    to_date: '1719',
    preview: 'COMTE DE TOULOUSE (1718-1719): Le Havre → Marseille ? → Sénégal → Saint-Domingue → Le Havre'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1718',
    to_date: '1719',
    preview: 'COMTE DE TOULOUSE (1718-1719): Saint-Malo → Pondichéry → Port-Louis'
  },
  {
    from: 'India',
    to: 'Madagascar',
    from_date: '1719',
    to_date: '1719',
    preview: 'COMTE DE TOULOUSE (1718-1719): Saint-Malo → Pondichéry → Port-Louis'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1720',
    to_date: '1721',
    preview: 'COMTE DE TOULOUSE (1720-1721): ? → Guinée → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1721',
    to_date: '1721',
    preview: 'COMTE DE TOULOUSE (1721-1721): Le Havre → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1721',
    to_date: '1722',
    preview: 'COMTE DE TOULOUSE (1721-1722): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1722',
    to_date: '1722',
    preview: 'COMTE DE TOULOUSE (1721-1722): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1722',
    to_date: '1723',
    preview: 'COMTE DE TOULOUSE (1722-1723): Lorient → Sénégal et Gorée → Martinique → Nantes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1723',
    to_date: '1723',
    preview: 'COMTE DE TOULOUSE (1722-1723): Lorient → Sénégal et Gorée → Martinique → Nantes → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1723',
    to_date: '1723',
    preview: 'COMTE DE TOULOUSE (1722-1723): Lorient → Sénégal et Gorée → Martinique → Nantes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1724',
    to_date: '1724',
    preview: 'COMTE DE TOULOUSE (1724-1724): Lorient → Juda et côtes de Guinée → Brésil'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1733',
    to_date: '1735',
    preview: 'COMTE DE TOULOUSE (1733-1735): Lorient → Cadix → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1735',
    to_date: '1735',
    preview: 'COMTE DE TOULOUSE (1733-1735): Lorient → Cadix → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1735',
    to_date: '1735',
    preview: 'COMTE DE TOULOUSE (1733-1735): Lorient → Cadix → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1786',
    to_date: '1788',
    preview: 'COMTE DE VERGENNES (1786-1788): Lorient → Madagascar → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1788',
    to_date: '1788',
    preview: 'COMTE DE VERGENNES (1786-1788): Lorient → Madagascar → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1788',
    to_date: '1788',
    preview: 'COMTE DE VERGENNES (1786-1788): Lorient → Madagascar → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1788',
    to_date: '1788',
    preview: 'COMTE DE VERGENNES (1786-1788): Lorient → Madagascar → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE D’AGENOIS (1764-1764): Saint-Malo → Terre-Neuve → Port-Louis'
  },
  {
    from: 'New France',
    to: 'Madagascar',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE D’AGENOIS (1764-1764): Saint-Malo → Terre-Neuve → Port-Louis'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1786',
    to_date: '1787',
    preview: 'COMTE D’ANGIVILLIERS (1786-1787): Nantes → Mozambique → Cap de Bonne-Espérance → Cap-Français → Port-Louis'
  },
  {
    from: 'Caribbean',
    to: 'Madagascar',
    from_date: '1787',
    to_date: '1787',
    preview: 'COMTE D’ANGIVILLIERS (1786-1787): Nantes → Mozambique → Cap de Bonne-Espérance → Cap-Français → Port-Louis'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1749',
    to_date: '1753',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1749-1753): Lorient → Cadix → Sénégal → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1753',
    to_date: '1753',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1749-1753): Lorient → Cadix → Sénégal → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1753',
    to_date: '1753',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1749-1753): Lorient → Cadix → Sénégal → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1758',
    to_date: '1760',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1758-1760): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1760',
    to_date: '1760',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1758-1760): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1758-1760): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1760',
    to_date: '1760',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1758-1760): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1758-1760): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1760',
    to_date: '1760',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1758-1760): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1758',
    to_date: '1760',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1758-1760): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1760',
    to_date: '1760',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1758-1760): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1758-1760): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1760',
    to_date: '1760',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1758-1760): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1758-1760): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1760',
    to_date: '1760',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1758-1760): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1764',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1761-1764): Lorient → Mascareignes et Batavia → Cap de Bonne-Espérance → Rochefort → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1761-1764): Lorient → Mascareignes et Batavia → Cap de Bonne-Espérance → Rochefort → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1765',
    to_date: '1767',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1765-1767): Lorient → Cadix → Inde, Madagascar et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1767',
    to_date: '1767',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1765-1767): Lorient → Cadix → Inde, Madagascar et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1767',
    to_date: '1767',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1765-1767): Lorient → Cadix → Inde, Madagascar et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1767',
    to_date: '1767',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1765-1767): Lorient → Cadix → Inde, Madagascar et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1767',
    to_date: '1767',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1765-1767): Lorient → Cadix → Inde, Madagascar et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1767',
    to_date: '1769',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1767-1769): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1769',
    to_date: '1769',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1767-1769): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1769',
    to_date: '1769',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1767-1769): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1769',
    to_date: '1769',
    preview: 'COMTE D’ARGENSON ou D’ARGENSON (1767-1769): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1760',
    to_date: '1764',
    preview: 'COMTE D’ARTOIS (1760-1764): Lorient → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE D’ARTOIS (1760-1764): Lorient → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE D’ARTOIS (1760-1764): Lorient → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1760',
    to_date: '1764',
    preview: 'COMTE D’ARTOIS (1760-1764): Lorient → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE D’ARTOIS (1760-1764): Lorient → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1764',
    to_date: '1764',
    preview: 'COMTE D’ARTOIS (1760-1764): Lorient → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1765',
    to_date: '1767',
    preview: 'COMTE D’ARTOIS (1765-1767): Lorient → Mascareignes → Cap de Bonne-Espérance → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1767',
    to_date: '1767',
    preview: 'COMTE D’ARTOIS (1765-1767): Lorient → Mascareignes → Cap de Bonne-Espérance → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1767',
    to_date: '1767',
    preview: 'COMTE D’ARTOIS (1765-1767): Lorient → Mascareignes → Cap de Bonne-Espérance → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1786',
    to_date: '1787',
    preview: 'COMTE D’ARTOIS (1786-1787): Lorient → Cadix → Inde → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1787',
    to_date: '1787',
    preview: 'COMTE D’ARTOIS (1786-1787): Lorient → Cadix → Inde → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1788',
    to_date: '1788',
    preview: 'COMTE D’ARTOIS (1788-1788): Lorient → Pondichéry ?'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1769',
    to_date: '1769',
    preview: 'COMTE D’HÉROUVILLE (1769-1769): Port-Louis → Gijon → Vigo → Funchal (Madère) → Port-Louis'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1737',
    to_date: '1739',
    preview: 'COMTESSE (1737-1739): Lorient → Portendick → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1739',
    to_date: '1739',
    preview: 'COMTESSE (1737-1739): Lorient → Portendick → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1739',
    to_date: '1739',
    preview: 'COMTESSE (1737-1739): Lorient → Portendick → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1740',
    to_date: '1741',
    preview: 'COMTESSE (1740-1741): Lorient → Sénégal et Gorée → Côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1741',
    to_date: '1741',
    preview: 'COMTESSE (1740-1741): Lorient → Sénégal et Gorée → Côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1741',
    to_date: '1741',
    preview: 'COMTESSE (1740-1741): Lorient → Sénégal et Gorée → Côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1742',
    to_date: '1744',
    preview: 'COMTESSE (1742-1744): Lorient → Gorée → Juda et côtes de Guinée → Martinique → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1744',
    to_date: '1744',
    preview: 'COMTESSE (1742-1744): Lorient → Gorée → Juda et côtes de Guinée → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1744',
    to_date: '1744',
    preview: 'COMTESSE (1742-1744): Lorient → Gorée → Juda et côtes de Guinée → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1746',
    to_date: '1747',
    preview: 'COMTESSE (1746-1747): Lorient → Sénégal → Fernando de Noronha → Antilles → Saint-Nazaire → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1747',
    to_date: '1747',
    preview: 'COMTESSE (1746-1747): Lorient → Sénégal → Fernando de Noronha → Antilles → Saint-Nazaire → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1747',
    to_date: '1747',
    preview: 'COMTESSE (1746-1747): Lorient → Sénégal → Fernando de Noronha → Antilles → Saint-Nazaire → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1782',
    to_date: '1783',
    preview: 'COMTESSE DE CHARLUS (1782-1783): Bordeaux  pour l\'Inde'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1783',
    to_date: '1784',
    preview: 'COMTESSE DE CHINON (1783-1784): Bordeaux → île de France → Inde → île de France → Sainte-Hélène → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1784',
    to_date: '1784',
    preview: 'COMTESSE DE CHINON (1783-1784): Bordeaux → île de France → Inde → île de France → Sainte-Hélène → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1784',
    to_date: '1784',
    preview: 'COMTESSE DE CHINON (1783-1784): Bordeaux → île de France → Inde → île de France → Sainte-Hélène → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1784',
    to_date: '1784',
    preview: 'COMTESSE DE CHINON (1783-1784): Bordeaux → île de France → Inde → île de France → Sainte-Hélène → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1767',
    to_date: '1768',
    preview: 'COMTESSE DE MAILLY (1767-1768): Le Havre → Port-Louis → ?'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1768',
    to_date: '1768',
    preview: 'COMTESSE DE MAILLY (1767-1768): Le Havre → Port-Louis → ?'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'COMTESSE D’ARBAUD (1782-1782): Basse-Terre, Guadeloupe → Bordeaux → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1746',
    to_date: '1747',
    preview: 'CONCORDE (1746-1747): Nantes → Paimboeuf → Martinique → Port-Louis'
  },
  {
    from: 'Caribbean',
    to: 'Madagascar',
    from_date: '1747',
    to_date: '1747',
    preview: 'CONCORDE (1746-1747): Nantes → Paimboeuf → Martinique → Port-Louis'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1733',
    to_date: '1734',
    preview: 'CONDÉ (1733-1734): Lorient → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1734',
    to_date: '1734',
    preview: 'CONDÉ (1733-1734): Lorient → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1734',
    to_date: '1734',
    preview: 'CONDÉ (1733-1734): Lorient → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1734',
    to_date: '1734',
    preview: 'CONDÉ (1733-1734): Lorient → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1734',
    to_date: '1734',
    preview: 'CONDÉ (1733-1734): Lorient → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1734',
    to_date: '1736',
    preview: 'CONDÉ (1734-1736): Lorient → Cadix → Cap de Bonne-Espérance → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1736',
    to_date: '1736',
    preview: 'CONDÉ (1734-1736): Lorient → Cadix → Cap de Bonne-Espérance → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1736',
    to_date: '1738',
    preview: 'CONDÉ (1736-1738): Lorient → Cap de Bonne-Espérance → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1738',
    to_date: '1738',
    preview: 'CONDÉ (1736-1738): Lorient → Cap de Bonne-Espérance → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1738',
    to_date: '1740',
    preview: 'CONDÉ (1738-1740): Lorient → Cap de Bonne-Espérance → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1740',
    to_date: '1740',
    preview: 'CONDÉ (1738-1740): Lorient → Cap de Bonne-Espérance → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1741',
    to_date: '1742',
    preview: 'CONDÉ (1741-1742): Lorient → Cap-Vert → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1742',
    to_date: '1742',
    preview: 'CONDÉ (1741-1742): Lorient → Cap-Vert → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1742',
    to_date: '1742',
    preview: 'CONDÉ (1741-1742): Lorient → Cap-Vert → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1742',
    to_date: '1742',
    preview: 'CONDÉ (1741-1742): Lorient → Cap-Vert → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1742',
    to_date: '1742',
    preview: 'CONDÉ (1741-1742): Lorient → Cap-Vert → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1742',
    to_date: '1743',
    preview: 'CONDÉ (1742-1743): Port-Louis → Saint-Malo'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1753',
    to_date: '1755',
    preview: 'CONDÉ (1753-1755): Lorient → Gorée → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1755',
    to_date: '1755',
    preview: 'CONDÉ (1753-1755): Lorient → Gorée → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1755',
    to_date: '1755',
    preview: 'CONDÉ (1753-1755): Lorient → Gorée → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1755',
    to_date: '1755',
    preview: 'CONDÉ (1753-1755): Lorient → Gorée → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1756',
    to_date: '1764',
    preview: 'CONDÉ (1756-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1764',
    to_date: '1764',
    preview: 'CONDÉ (1756-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1764',
    preview: 'CONDÉ (1756-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1756',
    to_date: '1764',
    preview: 'CONDÉ (1756-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1764',
    to_date: '1764',
    preview: 'CONDÉ (1756-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1764',
    preview: 'CONDÉ (1756-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1766',
    to_date: '1767',
    preview: 'CONDÉ (1766-1767): Lorient → Cadix → Inde et Mascareignes → False Bay → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1767',
    to_date: '1767',
    preview: 'CONDÉ (1766-1767): Lorient → Cadix → Inde et Mascareignes → False Bay → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1767',
    to_date: '1767',
    preview: 'CONDÉ (1766-1767): Lorient → Cadix → Inde et Mascareignes → False Bay → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1787',
    to_date: '1788',
    preview: 'CONSOLATEUR (1787-1788): île de France → France → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1719',
    to_date: '1720',
    preview: 'CONTENT (1719-1720): Lorient → Louisiane → Saint-Malo'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'CONTENT (1719-1720): Lorient → Louisiane → Saint-Malo'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1747',
    to_date: '1749',
    preview: 'CONTENT (1747-1749): Vaisseau du roi armé par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1776',
    to_date: '1778',
    preview: 'CAVAILLON (1776-1778): Le Havre → Rochefort → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1778',
    to_date: '1778',
    preview: 'CAVAILLON (1776-1778): Le Havre → Rochefort → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1778',
    to_date: '1778',
    preview: 'CAVAILLON (1776-1778): Le Havre → Rochefort → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1732',
    to_date: '1732',
    preview: 'CAVALIER (1732-1732): Lorient → Cadix → Madère → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1732',
    to_date: '1732',
    preview: 'CAVALIER (1732-1732): Lorient → Cadix → Madère → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1733',
    to_date: '1734',
    preview: 'CAVALIER (1733-1734): Lorient → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1734',
    to_date: '1734',
    preview: 'CAVALIER (1733-1734): Lorient → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1734',
    to_date: '1734',
    preview: 'CAVALIER (1733-1734): Lorient → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1734',
    to_date: '1734',
    preview: 'CAVALIER (1733-1734): Lorient → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1734',
    to_date: '1734',
    preview: 'CAVALIER (1733-1734): Lorient → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1735',
    to_date: '1737',
    preview: 'CAVALIER (1735-1737): Lorient → Juda → Antilles → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1737',
    to_date: '1737',
    preview: 'CAVALIER (1735-1737): Lorient → Juda → Antilles → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1737',
    to_date: '1737',
    preview: 'CAVALIER (1735-1737): Lorient → Juda → Antilles → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1785',
    to_date: '1787',
    preview: 'CALONNE (1785-1787): Lorient → Inde → Santiago de Cassem, Portugal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1765',
    to_date: '1766',
    preview: 'CALYPSO (1765-1766): Lorient → Juda → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1766',
    to_date: '1766',
    preview: 'CALYPSO (1765-1766): Lorient → Juda → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1783',
    to_date: '1785',
    preview: 'CALYPSO (1783-1785): Bordeaux → île de France → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1785',
    to_date: '1785',
    preview: 'CALYPSO (1783-1785): Bordeaux → île de France → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1759',
    to_date: '1759',
    preview: 'CARDINAL DE SOURDIS (1759-1759): Brest → Port-Louis'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1773',
    to_date: '1775',
    preview: 'CARNATIC (1773-1775): Pondichéry → île Bourbon → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1775',
    to_date: '1775',
    preview: 'CARNATIC (1773-1775): Pondichéry → île Bourbon → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1783',
    to_date: '1786',
    preview: 'CASTRIES (1783-1786): Bordeaux → Lisbonne → Cap de Bonne-Espérance, île de France, Batavia → Hollande → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1786',
    to_date: '1786',
    preview: 'CASTRIES (1783-1786): Bordeaux → Lisbonne → Cap de Bonne-Espérance, île de France, Batavia → Hollande → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1725',
    to_date: '1725',
    preview: 'CENTAURE (1725-1725): Lorient pour l’Inde → Brest'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1725',
    to_date: '1725',
    preview: 'CENTAURE (1725-1725): Lorient pour l’Inde → Brest'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1746',
    to_date: '1750',
    preview: 'CENTAURE (1746-1750): Lorient → Inde et Mascareignes → Île de France → vaisseau de côte'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1750',
    to_date: '1750',
    preview: 'CENTAURE (1746-1750): Lorient → Inde et Mascareignes → Île de France → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1746',
    to_date: '1750',
    preview: 'CENTAURE (1746-1750): Lorient → Inde et Mascareignes → Île de France → vaisseau de côte'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1750',
    to_date: '1750',
    preview: 'CENTAURE (1746-1750): Lorient → Inde et Mascareignes → Île de France → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1746',
    to_date: '1750',
    preview: 'CENTAURE (1746-1750): Lorient → Inde et Mascareignes → Île de France → vaisseau de côte'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1750',
    to_date: '1750',
    preview: 'CENTAURE (1746-1750): Lorient → Inde et Mascareignes → Île de France → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1752',
    to_date: '1753',
    preview: 'CENTAURE (1752-1753): Lorient → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1753',
    to_date: '1753',
    preview: 'CENTAURE (1752-1753): Lorient → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1753',
    to_date: '1753',
    preview: 'CENTAURE (1752-1753): Lorient → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1753',
    to_date: '1753',
    preview: 'CENTAURE (1752-1753): Lorient → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1753',
    to_date: '1753',
    preview: 'CENTAURE (1752-1753): Lorient → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1753',
    to_date: '1753',
    preview: 'CENTAURE (1752-1753): Lorient → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1754',
    to_date: '1755',
    preview: 'CENTAURE (1754-1755): Lorient → Gorée → Inde et Mascareignes → Angola → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1755',
    to_date: '1755',
    preview: 'CENTAURE (1754-1755): Lorient → Gorée → Inde et Mascareignes → Angola → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1755',
    to_date: '1755',
    preview: 'CENTAURE (1754-1755): Lorient → Gorée → Inde et Mascareignes → Angola → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1755',
    to_date: '1755',
    preview: 'CENTAURE (1754-1755): Lorient → Gorée → Inde et Mascareignes → Angola → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1756',
    to_date: '1756',
    preview: 'CENTAURE (1756-1756): Lorient pour l\'Inde'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1752',
    to_date: '1752',
    preview: 'CERF (1752-1752): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1752',
    to_date: '1752',
    preview: 'CERF (1752-1752): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1755',
    to_date: '1757',
    preview: 'CERF (1755-1757): Lorient → Brésil → Mascareignes → vaisseau de côte'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1757',
    to_date: '1757',
    preview: 'CERF (1755-1757): Lorient → Brésil → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1757',
    to_date: '1757',
    preview: 'CERF (1755-1757): Lorient → Brésil → Mascareignes → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1740',
    to_date: '1741',
    preview: 'CERF-VOLANT (1740-1741): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1741',
    to_date: '1741',
    preview: 'CERF-VOLANT (1741-1741): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1786',
    to_date: '1786',
    preview: 'CERF-VOLANT (1786-1786): Nantes → Port-au-Prince → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1786',
    to_date: '1786',
    preview: 'CERF-VOLANT (1786-1786): Nantes → Port-au-Prince → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1721',
    preview: 'CHAMEAU (1720-1721): Port-Louis → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1721',
    preview: 'CHAMEAU (1720-1721): Port-Louis → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1721',
    to_date: '1721',
    preview: 'CHAMEAU (1720-1721): Port-Louis → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1722',
    to_date: '1723',
    preview: 'CHAMEAU (1722-1723): Lorient → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1723',
    to_date: '1723',
    preview: 'CHAMEAU (1722-1723): Lorient → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1723',
    to_date: '1724',
    preview: 'CHAMEAU (1723-1724): Lorient → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1724',
    to_date: '1724',
    preview: 'CHAMEAU (1723-1724): Lorient → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'CHAMEAU (1723-1724): Lorient → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1725',
    to_date: '1725',
    preview: 'CHAMEAU (1725-1725): Lorient → Sénégal et Guinée'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1753',
    to_date: '1753',
    preview: 'CHAMEAU (1753-1753): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1758',
    to_date: '1761',
    preview: 'CHAMEAU (1758-1761): Lorient → Inde et Mascareignes → Chine → Mascareignes → La Corogne → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1761',
    preview: 'CHAMEAU (1758-1761): Lorient → Inde et Mascareignes → Chine → Mascareignes → La Corogne → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1761',
    to_date: '1761',
    preview: 'CHAMEAU (1758-1761): Lorient → Inde et Mascareignes → Chine → Mascareignes → La Corogne → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1758',
    to_date: '1761',
    preview: 'CHAMEAU (1758-1761): Lorient → Inde et Mascareignes → Chine → Mascareignes → La Corogne → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1761',
    preview: 'CHAMEAU (1758-1761): Lorient → Inde et Mascareignes → Chine → Mascareignes → La Corogne → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1761',
    to_date: '1761',
    preview: 'CHAMEAU (1758-1761): Lorient → Inde et Mascareignes → Chine → Mascareignes → La Corogne → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1763',
    preview: 'CHAMEAU (1762-1763): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1763',
    to_date: '1763',
    preview: 'CHAMEAU (1762-1763): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1764',
    to_date: '1766',
    preview: 'CHAMEAU (1764-1766): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1766',
    to_date: '1766',
    preview: 'CHAMEAU (1764-1766): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1766',
    to_date: '1766',
    preview: 'CHAMEAU (1764-1766): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1783',
    to_date: '1784',
    preview: 'CHANCELIÈRE DE BRABANT (1783-1784): Lorient → Bordeaux → Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1784',
    to_date: '1784',
    preview: 'CHANCELIÈRE DE BRABANT (1783-1784): Lorient → Bordeaux → Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1784',
    to_date: '1787',
    preview: 'CHANCELIÈRE DE BRABANT (1784-1787): Lorient → Bordeaux → Mascareignes, Madagascar et Inde → Île de France → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1787',
    to_date: '1787',
    preview: 'CHANCELIÈRE DE BRABANT (1784-1787): Lorient → Bordeaux → Mascareignes, Madagascar et Inde → Île de France → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1787',
    to_date: '1787',
    preview: 'CHANCELIÈRE DE BRABANT (1784-1787): Lorient → Bordeaux → Mascareignes, Madagascar et Inde → Île de France → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1787',
    to_date: '1787',
    preview: 'CHANCELIÈRE DE BRABANT (1784-1787): Lorient → Bordeaux → Mascareignes, Madagascar et Inde → Île de France → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1787',
    to_date: '1787',
    preview: 'CHANCELIÈRE DE BRABANT (1784-1787): Lorient → Bordeaux → Mascareignes, Madagascar et Inde → Île de France → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1788',
    to_date: '1788',
    preview: 'CHANCELIÈRE DE BRABANT (1788-1788): Lorient → îles de France et de Bourbon ?'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1745',
    to_date: '1745',
    preview: 'CHASSEUR (1745-1745): Lorient → Juda'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1746',
    to_date: '1746',
    preview: 'CHASSEUR (1746-1746): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1741',
    to_date: '1741',
    preview: 'CHARMANT (1741-1741): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1744',
    to_date: '1745',
    preview: 'CHARMANTE (1744-1745): Lorient → Brésil → Inde et Mascareignes → Louisbourg'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1745',
    to_date: '1745',
    preview: 'CHARMANTE (1744-1745): Lorient → Brésil → Inde et Mascareignes → Louisbourg'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'New France',
    from_date: '1745',
    to_date: '1745',
    preview: 'CHARMANTE (1744-1745): Lorient → Brésil → Inde et Mascareignes → Louisbourg'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1775',
    to_date: '1775',
    preview: 'CHARMANTE MARGUERITE (1775-1775): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1763',
    to_date: '1763',
    preview: 'CHARMANTE JULIE (1763-1763): Lorient → Saint-Domingue ?'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1766',
    to_date: '1766',
    preview: 'CHARMANTE JULIE (1766-1766): Lorient → Marennes → Port-Louis → Honfleur → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1766',
    to_date: '1766',
    preview: 'CHARMANTE JULIE (1766-1766): Lorient → Marennes → Port-Louis → Honfleur → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1767',
    to_date: '1768',
    preview: 'CHARMANTE JULIE (1767-1768): Port-Louis → Auray → Marseille → Barcelone → Port-Louis'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1768',
    to_date: '1768',
    preview: 'CHARMANTE JULIE (1767-1768): Port-Louis → Auray → Marseille → Barcelone → Port-Louis'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1734',
    to_date: '1735',
    preview: 'CHAROLAIS (1734-1735): Lorient → Gorée → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1735',
    to_date: '1735',
    preview: 'CHAROLAIS (1734-1735): Lorient → Gorée → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1735',
    to_date: '1735',
    preview: 'CHAROLAIS (1734-1735): Lorient → Gorée → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1735',
    to_date: '1735',
    preview: 'CHAROLAIS (1734-1735): Lorient → Gorée → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1721',
    preview: 'CHARENTE (1721-1721): Lorient → armée pour la Louisiane, revenue après une épidémie'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1720',
    to_date: '1720',
    preview: 'CHARLES (1720-1720): Saint-Malo → Lorient → Juda et côtes de Guinée'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1733',
    to_date: '1735',
    preview: 'CHAUVELIN (1733-1735): Saint-Malo → Cadix → Anjouan → Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1735',
    to_date: '1735',
    preview: 'CHAUVELIN (1733-1735): Saint-Malo → Cadix → Anjouan → Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1735',
    to_date: '1735',
    preview: 'CHAUVELIN (1733-1735): Saint-Malo → Cadix → Anjouan → Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Caribbean',
    from_date: '1735',
    to_date: '1735',
    preview: 'CHAUVELIN (1733-1735): Saint-Malo → Cadix → Anjouan → Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1735',
    to_date: '1735',
    preview: 'CHAUVELIN (1733-1735): Saint-Malo → Cadix → Anjouan → Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1736',
    to_date: '1738',
    preview: 'CHAUVELIN (1736-1738): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1738',
    to_date: '1738',
    preview: 'CHAUVELIN (1736-1738): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1738',
    to_date: '1738',
    preview: 'CHAUVELIN (1736-1738): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1738',
    to_date: '1738',
    preview: 'CHAUVELIN (1736-1738): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1738',
    to_date: '1738',
    preview: 'CHAUVELIN (1736-1738): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1739',
    to_date: '1740',
    preview: 'CHAUVELIN (1739-1740): Lorient → Anjouan → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1740',
    to_date: '1740',
    preview: 'CHAUVELIN (1739-1740): Lorient → Anjouan → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1740',
    to_date: '1740',
    preview: 'CHAUVELIN (1739-1740): Lorient → Anjouan → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1740',
    to_date: '1740',
    preview: 'CHAUVELIN (1739-1740): Lorient → Anjouan → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1741',
    to_date: '1742',
    preview: 'CHAUVELIN (1741-1742): Lorient → Cap-Vert → Anjouan → Inde → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1742',
    to_date: '1742',
    preview: 'CHAUVELIN (1741-1742): Lorient → Cap-Vert → Anjouan → Inde → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1742',
    to_date: '1742',
    preview: 'CHAUVELIN (1741-1742): Lorient → Cap-Vert → Anjouan → Inde → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1742',
    to_date: '1742',
    preview: 'CHAUVELIN (1741-1742): Lorient → Cap-Vert → Anjouan → Inde → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1742',
    to_date: '1742',
    preview: 'CHAUVELIN (1741-1742): Lorient → Cap-Vert → Anjouan → Inde → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1742',
    to_date: '1742',
    preview: 'CHAUVELIN (1741-1742): Lorient → Cap-Vert → Anjouan → Inde → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1722',
    preview: 'CHER (1721-1722): Lorient → Louisiane'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1740',
    to_date: '1741',
    preview: 'CHEVAL MARIN (1740-1741): Lorient → Sénégal → La Corogne'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1749',
    to_date: '1749',
    preview: 'CHEVALIER MARIN (1749-1749): Lorient → Ténériffe → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1749',
    to_date: '1749',
    preview: 'CHEVALIER MARIN (1749-1749): Lorient → Ténériffe → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1750',
    to_date: '1750',
    preview: 'CHEVALIER MARIN (1750-1750): Lorient → Sénégal et Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1750',
    to_date: '1750',
    preview: 'CHEVALIER MARIN (1750-1750): Lorient → Sénégal et Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1750',
    to_date: '1750',
    preview: 'CHEVALIER MARIN (1750-1750): Lorient → Sénégal et Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1781',
    to_date: '1782',
    preview: 'CHIMÈRE (1781-1782): Lorient → Saint-Domingue → Bordeaux'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'CHIMÈRE (1781-1782): Lorient → Saint-Domingue → Bordeaux'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1790',
    to_date: '1790',
    preview: 'CITOYEN (1790-1790): Lorient → Pondichéry → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1790',
    to_date: '1790',
    preview: 'CITOYEN (1790-1790): Lorient → Pondichéry → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1790',
    to_date: '1790',
    preview: 'CITOYENNE (1790-1790): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1754',
    to_date: '1754',
    preview: 'CIVETTE (1754-1754): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1745',
    to_date: '1745',
    preview: 'CIGALE (1745-1745): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1754',
    to_date: '1754',
    preview: 'CLOTILDE ou CLOTHILDE (1754-1754): Lorient → Mascareignes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1786',
    to_date: '1787',
    preview: 'CLÉOMÈNE (1786-1787): Lorient → île de France → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1787',
    to_date: '1787',
    preview: 'CLÉOMÈNE (1786-1787): Lorient → île de France → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1732',
    to_date: '1733',
    preview: 'CUPIDON (1732-1733): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1735',
    to_date: '1735',
    preview: 'CUPIDON (1735-1735): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1775',
    to_date: '1775',
    preview: 'CURIEUX (1775-1775): Lorient → Bengale ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1747',
    to_date: '1749',
    preview: 'CYBÈLE ou CIBÈLE (1747-1749): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1749',
    to_date: '1749',
    preview: 'CYBÈLE ou CIBÈLE (1747-1749): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1749',
    to_date: '1749',
    preview: 'CYBÈLE ou CIBÈLE (1747-1749): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1750',
    to_date: '1752',
    preview: 'CYBÈLE ou CIBÈLE (1750-1752): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1752',
    to_date: '1752',
    preview: 'CYBÈLE ou CIBÈLE (1750-1752): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1750',
    to_date: '1752',
    preview: 'CYBÈLE ou CIBÈLE (1750-1752): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1752',
    to_date: '1752',
    preview: 'CYBÈLE ou CIBÈLE (1750-1752): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1753',
    to_date: '1753',
    preview: 'CYBÈLE ou CIBÈLE (1753-1753): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1753',
    to_date: '1753',
    preview: 'CYBÈLE ou CIBÈLE (1753-1753): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1753',
    to_date: '1754',
    preview: 'CYBÈLE ou CIBÈLE (1753-1754): Lorient → Sénégal et Portendick → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1754',
    to_date: '1754',
    preview: 'CYBÈLE ou CIBÈLE (1753-1754): Lorient → Sénégal et Portendick → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1755',
    to_date: '1756',
    preview: 'CYBÈLE ou CIBÈLE (1755-1756): Lorient → Gorée → cap de Bonne-Espérance'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1729',
    to_date: '1729',
    preview: 'CYGNE ou CIGNE (1729-1729): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1736',
    to_date: '1736',
    preview: 'CYGNE (1736-1736): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1738',
    to_date: '1738',
    preview: 'CYGNE (1738-1738): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1749',
    to_date: '1749',
    preview: 'CYGNE (1749-1749): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1790',
    to_date: '1790',
    preview: 'AMI DE LA NATION (1790-1790): Lorient → Terre-Neuve ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1778',
    to_date: '1778',
    preview: 'AMIS (1778-1778): Lorient → Inde ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1789',
    to_date: '1790',
    preview: 'AMITIÉ (1789-1790): Lorient → île de France → Nantes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1790',
    to_date: '1790',
    preview: 'AMITIÉ (1789-1790): Lorient → île de France → Nantes'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1733',
    to_date: '1734',
    preview: 'AMPHITRITE (1733-1734): Lorient → Cadix → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1734',
    to_date: '1734',
    preview: 'AMPHITRITE (1733-1734): Lorient → Cadix → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1734',
    to_date: '1734',
    preview: 'AMPHITRITE (1733-1734): Lorient → Cadix → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Louisiana',
    from_date: '1734',
    to_date: '1734',
    preview: 'AMPHITRITE (1733-1734): Lorient → Cadix → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'India',
    from_date: '1734',
    to_date: '1734',
    preview: 'AMPHITRITE (1733-1734): Lorient → Cadix → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Louisiana',
    from_date: '1734',
    to_date: '1734',
    preview: 'AMPHITRITE (1733-1734): Lorient → Cadix → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1734',
    to_date: '1734',
    preview: 'AMPHITRITE (1733-1734): Lorient → Cadix → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1734',
    to_date: '1734',
    preview: 'AMPHITRITE (1733-1734): Lorient → Cadix → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1736',
    to_date: '1737',
    preview: 'AMPHITRITE (1736-1737): Lorient → Gorée → Inde et Mascareignes → Sainte-Hélène et Ascencion → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1737',
    to_date: '1737',
    preview: 'AMPHITRITE (1736-1737): Lorient → Gorée → Inde et Mascareignes → Sainte-Hélène et Ascencion → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1737',
    to_date: '1737',
    preview: 'AMPHITRITE (1736-1737): Lorient → Gorée → Inde et Mascareignes → Sainte-Hélène et Ascencion → Lorient'
  },
  {
    from: 'India',
    to: 'Louisiana',
    from_date: '1737',
    to_date: '1737',
    preview: 'AMPHITRITE (1736-1737): Lorient → Gorée → Inde et Mascareignes → Sainte-Hélène et Ascencion → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1737',
    to_date: '1737',
    preview: 'AMPHITRITE (1736-1737): Lorient → Gorée → Inde et Mascareignes → Sainte-Hélène et Ascencion → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1738',
    to_date: '1739',
    preview: 'AMPHITRITE (1738-1739): Lorient → Gorée → Inde (?) et Mascareignes'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1739',
    to_date: '1739',
    preview: 'AMPHITRITE (1738-1739): Lorient → Gorée → Inde (?) et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'AMPHITRITE (1738-1739): Lorient → Gorée → Inde (?) et Mascareignes'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1776',
    to_date: '1777',
    preview: 'AMPHITRITE (1776-1777): Le Havre → Lorient → Cap-Français → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1777',
    to_date: '1777',
    preview: 'AMPHITRITE (1776-1777): Le Havre → Lorient → Cap-Français → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1723',
    to_date: '1724',
    preview: 'AMÉRICAIN (1723-1724): Nantes → Juda → Martinique → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1724',
    to_date: '1724',
    preview: 'AMÉRICAIN (1723-1724): Nantes → Juda → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'AMÉRICAIN (1723-1724): Nantes → Juda → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1727',
    to_date: '1728',
    preview: 'AMÉRICAIN (1727-1728): Lorient → Martinique → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1728',
    to_date: '1728',
    preview: 'AMÉRICAIN (1727-1728): Lorient → Martinique → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1728',
    to_date: '1730',
    preview: 'AMÉRICAIN (1728-1730): Lorient → Gorée → Juda → Martinique → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1730',
    to_date: '1730',
    preview: 'AMÉRICAIN (1728-1730): Lorient → Gorée → Juda → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1730',
    to_date: '1730',
    preview: 'AMÉRICAIN (1728-1730): Lorient → Gorée → Juda → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1731',
    to_date: '1732',
    preview: 'AMÉRICAIN (1731-1732): Lorient → Portendick et Arguin → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1732',
    to_date: '1732',
    preview: 'AMÉRICAIN (1731-1732): Lorient → Portendick et Arguin → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1732',
    to_date: '1732',
    preview: 'AMÉRICAIN (1731-1732): Lorient → Portendick et Arguin → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1784',
    to_date: '1784',
    preview: 'ANTONIA (1784-1784): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1784',
    to_date: '1784',
    preview: 'ANTONIA (1784-1784): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1773',
    to_date: '1774',
    preview: 'ANTOINETTE MARIE (1773-1774): Sète → Gorée → île de France → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1774',
    to_date: '1774',
    preview: 'ANTOINETTE MARIE (1773-1774): Sète → Gorée → île de France → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1774',
    to_date: '1774',
    preview: 'ANTOINETTE MARIE (1773-1774): Sète → Gorée → île de France → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1741',
    to_date: '1746',
    preview: 'ANGE RAPHAËL (1741-1746): Saint-Malo → Cadix → Carthagène (Colombie) → Porto Bello (Panama) → Carthagène → Cadix'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1747',
    to_date: '1749',
    preview: 'ANGLESEA ou ANGLESEY (1747-1749): Frégate du roi affrétée par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1723',
    to_date: '1724',
    preview: 'ANNIBAL (1723-1724): Nantes → Bourgneuf → Juda, île du Prince → Martinique → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1724',
    to_date: '1724',
    preview: 'ANNIBAL (1723-1724): Nantes → Bourgneuf → Juda, île du Prince → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'ANNIBAL (1723-1724): Nantes → Bourgneuf → Juda, île du Prince → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1726',
    to_date: '1728',
    preview: 'ANNIBAL (1726-1728): Lorient → Arguin, Sénégal et Gorée → Saint-Domingue et Louisiane → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1728',
    to_date: '1728',
    preview: 'ANNIBAL (1726-1728): Lorient → Arguin, Sénégal et Gorée → Saint-Domingue et Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1728',
    to_date: '1728',
    preview: 'ANNIBAL (1726-1728): Lorient → Arguin, Sénégal et Gorée → Saint-Domingue et Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1728',
    to_date: '1728',
    preview: 'ANNIBAL (1726-1728): Lorient → Arguin, Sénégal et Gorée → Saint-Domingue et Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1728',
    to_date: '1728',
    preview: 'ANNIBAL (1726-1728): Lorient → Arguin, Sénégal et Gorée → Saint-Domingue et Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1729',
    to_date: '1730',
    preview: 'ANNIBAL (1729-1730): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1730',
    to_date: '1730',
    preview: 'ANNIBAL (1729-1730): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1730',
    to_date: '1730',
    preview: 'ANNIBAL (1729-1730): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1731',
    to_date: '1732',
    preview: 'ANNIBAL (1731-1732): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1732',
    to_date: '1732',
    preview: 'ANNIBAL (1731-1732): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1733',
    to_date: '1735',
    preview: 'ANNIBAL (1733-1735): Lorient → Arguin → Sénégal et Gorée → Antilles'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1735',
    to_date: '1735',
    preview: 'ANNIBAL (1733-1735): Lorient → Arguin → Sénégal et Gorée → Antilles'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1750',
    to_date: '1750',
    preview: 'ANONYME (1750-1750): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1773',
    to_date: '1776',
    preview: 'ANONYME (1773-1776): Lorient → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1776',
    to_date: '1776',
    preview: 'ANONYME (1773-1776): Lorient → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1776',
    to_date: '1776',
    preview: 'ANONYME (1773-1776): Lorient → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1749',
    to_date: '1750',
    preview: 'ANSON (1749-1750): Île de France → Inde et Moka → Pondichéry'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1753',
    to_date: '1753',
    preview: 'ANSON (1753-1753): Pondichéry → île de France'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1724',
    preview: 'ABEILLE (1721-1724): La Rochelle → Louisiane'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1768',
    to_date: '1769',
    preview: 'ACTIONNAIRE (1768-1769): Lorient → Inde et Mascareignes → Sainte-Hélène → Martinique → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1769',
    to_date: '1769',
    preview: 'ACTIONNAIRE (1768-1769): Lorient → Inde et Mascareignes → Sainte-Hélène → Martinique → Lorient'
  },
  {
    from: 'India',
    to: 'Caribbean',
    from_date: '1769',
    to_date: '1769',
    preview: 'ACTIONNAIRE (1768-1769): Lorient → Inde et Mascareignes → Sainte-Hélène → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1769',
    to_date: '1769',
    preview: 'ACTIONNAIRE (1768-1769): Lorient → Inde et Mascareignes → Sainte-Hélène → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1758',
    to_date: '1762',
    preview: 'ACTIF (1758-1762): Escadre de Froger de l\'Éguille pour l\'Inde'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1762',
    preview: 'ACTIF (1758-1762): Escadre de Froger de l\'Éguille pour l\'Inde'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1762',
    to_date: '1762',
    preview: 'ACTIF (1758-1762): Escadre de Froger de l\'Éguille pour l\'Inde'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1762',
    preview: 'ACTIF (1758-1762): Escadre de Froger de l\'Éguille pour l\'Inde'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1762',
    to_date: '1762',
    preview: 'ACTIF (1758-1762): Escadre de Froger de l\'Éguille pour l\'Inde'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1762',
    preview: 'ACTIF (1758-1762): Escadre de Froger de l\'Éguille pour l\'Inde'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1762',
    to_date: '1762',
    preview: 'ACTIF (1758-1762): Escadre de Froger de l\'Éguille pour l\'Inde'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1762',
    to_date: '1762',
    preview: 'ACTIF (1758-1762): Escadre de Froger de l\'Éguille pour l\'Inde'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1774',
    to_date: '1775',
    preview: 'ACTIF (1774-1775): Nantes → Lorient → île de France → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1775',
    to_date: '1775',
    preview: 'ACTIF (1774-1775): Nantes → Lorient → île de France → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1775',
    to_date: '1776',
    preview: 'ACTIF (1775-1776): Lorient → Martinique → Saint-Domingue → Nantes'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1776',
    to_date: '1776',
    preview: 'ACTIF (1775-1776): Lorient → Martinique → Saint-Domingue → Nantes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1745',
    to_date: '1748',
    preview: 'ACHILLE (1745-1748): Lorient → Brésil → Inde et Mascareignes, Madagascar → Angola → Martinique → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1748',
    to_date: '1748',
    preview: 'ACHILLE (1745-1748): Lorient → Brésil → Inde et Mascareignes, Madagascar → Angola → Martinique → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1748',
    to_date: '1748',
    preview: 'ACHILLE (1745-1748): Lorient → Brésil → Inde et Mascareignes, Madagascar → Angola → Martinique → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1748',
    to_date: '1748',
    preview: 'ACHILLE (1745-1748): Lorient → Brésil → Inde et Mascareignes, Madagascar → Angola → Martinique → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1748',
    to_date: '1748',
    preview: 'ACHILLE (1745-1748): Lorient → Brésil → Inde et Mascareignes, Madagascar → Angola → Martinique → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1748',
    to_date: '1748',
    preview: 'ACHILLE (1745-1748): Lorient → Brésil → Inde et Mascareignes, Madagascar → Angola → Martinique → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1748',
    to_date: '1748',
    preview: 'ACHILLE (1745-1748): Lorient → Brésil → Inde et Mascareignes, Madagascar → Angola → Martinique → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Caribbean',
    from_date: '1748',
    to_date: '1748',
    preview: 'ACHILLE (1745-1748): Lorient → Brésil → Inde et Mascareignes, Madagascar → Angola → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1748',
    to_date: '1748',
    preview: 'ACHILLE (1745-1748): Lorient → Brésil → Inde et Mascareignes, Madagascar → Angola → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1749',
    to_date: '1752',
    preview: 'ACHILLE (1749-1752): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1752',
    to_date: '1752',
    preview: 'ACHILLE (1749-1752): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1752',
    to_date: '1752',
    preview: 'ACHILLE (1749-1752): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1752',
    to_date: '1752',
    preview: 'ACHILLE (1749-1752): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1752',
    to_date: '1754',
    preview: 'ACHILLE (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Madagascar et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1754',
    to_date: '1754',
    preview: 'ACHILLE (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Madagascar et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1754',
    to_date: '1754',
    preview: 'ACHILLE (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Madagascar et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1754',
    to_date: '1754',
    preview: 'ACHILLE (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Madagascar et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1754',
    to_date: '1754',
    preview: 'ACHILLE (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Madagascar et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1754',
    to_date: '1757',
    preview: 'ACHILLE (1754-1757): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Saint-Domingue'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1757',
    to_date: '1757',
    preview: 'ACHILLE (1754-1757): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Saint-Domingue'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1757',
    to_date: '1757',
    preview: 'ACHILLE (1754-1757): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Saint-Domingue'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Caribbean',
    from_date: '1757',
    to_date: '1757',
    preview: 'ACHILLE (1754-1757): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Saint-Domingue'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1781',
    to_date: '1782',
    preview: 'ACHILLE (1781-1782): Bordeaux → Antilles → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'ACHILLE (1781-1782): Bordeaux → Antilles → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1722',
    preview: 'ADOUR (1721-1722): Lorient → Louisiane'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1762',
    preview: 'ADOUR (1760-1762): Achetée ou cédée par le roi à la Compagnie des Indes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1762',
    to_date: '1762',
    preview: 'ADOUR (1760-1762): Achetée ou cédée par le roi à la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1763',
    to_date: '1764',
    preview: 'ADOUR (1763-1764): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1764',
    to_date: '1764',
    preview: 'ADOUR (1763-1764): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1765',
    to_date: '1766',
    preview: 'ADOUR (1765-1766): Lorient → Inde → Sainte-Hélène → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1766',
    to_date: '1766',
    preview: 'ADOUR (1765-1766): Lorient → Inde → Sainte-Hélène → Lorient'
  },
  {
    from: 'India',
    to: 'Louisiana',
    from_date: '1766',
    to_date: '1766',
    preview: 'ADOUR (1765-1766): Lorient → Inde → Sainte-Hélène → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1766',
    to_date: '1766',
    preview: 'ADOUR (1765-1766): Lorient → Inde → Sainte-Hélène → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1767',
    to_date: '1767',
    preview: 'ADOUR (1767-1767): Lorient → Mascareignes → Inde'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1767',
    to_date: '1767',
    preview: 'ADOUR (1767-1767): Lorient → Mascareignes → Inde'
  },
  {
    from: 'New France',
    to: 'France',
    from_date: '1786',
    to_date: '1787',
    preview: 'ADÉLAÏDE (1786-1787): Granville → Terre-Neuve → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1719',
    to_date: '1721',
    preview: 'AFRICAIN (1719-1721): Acheté à Saint-Malo par la Compagnie des Indes'
  },
  {
    from: 'Madagascar',
    to: 'Senegal',
    from_date: '1721',
    to_date: '1721',
    preview: 'AFRICAIN (1719-1721): Acheté à Saint-Malo par la Compagnie des Indes'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1721',
    to_date: '1721',
    preview: 'AFRICAIN (1719-1721): Acheté à Saint-Malo par la Compagnie des Indes'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1721',
    preview: 'AFRICAIN (1719-1721): Acheté à Saint-Malo par la Compagnie des Indes'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1721',
    to_date: '1721',
    preview: 'AFRICAIN (1719-1721): Acheté à Saint-Malo par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1724',
    to_date: '1726',
    preview: 'AFRICAIN (1724-1726): Lorient → Sénégal et Gorée → Juda → Martinique → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1726',
    to_date: '1726',
    preview: 'AFRICAIN (1724-1726): Lorient → Sénégal et Gorée → Juda → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'AFRICAIN (1724-1726): Lorient → Sénégal et Gorée → Juda → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1713',
    to_date: '1714',
    preview: 'AFRICAINE ou AFFRIQUAINE (1713-1714): Nantes → Sénégal → Saint-Domingue → Nantes'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1714',
    to_date: '1714',
    preview: 'AFRICAINE ou AFFRIQUAINE (1713-1714): Nantes → Sénégal → Saint-Domingue → Nantes'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1714',
    to_date: '1714',
    preview: 'AFRICAINE ou AFFRIQUAINE (1713-1714): Nantes → Sénégal → Saint-Domingue → Nantes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1715',
    to_date: '1716',
    preview: 'AFRICAINE ou AFFRIQUAINE (1715-1716): Nantes → Sénégal → Saint-Domingue → Nantes'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1716',
    to_date: '1716',
    preview: 'AFRICAINE ou AFFRIQUAINE (1715-1716): Nantes → Sénégal → Saint-Domingue → Nantes'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1716',
    to_date: '1716',
    preview: 'AFRICAINE ou AFFRIQUAINE (1715-1716): Nantes → Sénégal → Saint-Domingue → Nantes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1734',
    to_date: '1736',
    preview: 'AIGLE (1734-1736): Lorient → Portendick → Sénégal → Côtes de Guinée → Martinique → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1736',
    to_date: '1736',
    preview: 'AIGLE (1734-1736): Lorient → Portendick → Sénégal → Côtes de Guinée → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1736',
    to_date: '1736',
    preview: 'AIGLE (1734-1736): Lorient → Portendick → Sénégal → Côtes de Guinée → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1736',
    to_date: '1738',
    preview: 'AIGLE (1736-1738): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1738',
    to_date: '1738',
    preview: 'AIGLE (1736-1738): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1738',
    to_date: '1738',
    preview: 'AIGLE (1736-1738): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1738',
    to_date: '1739',
    preview: 'AIGLE (1738-1739): Lorient → Brésil → Terres Australes → île de France → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1755',
    to_date: '1755',
    preview: 'AIGLE (1755-1755): Lorient → Sénégal'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1773',
    to_date: '1775',
    preview: 'AIGLE (1773-1775): île de France → Cap de Bonne-Espérance → île de France → Manille → île de France → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1776',
    to_date: '1777',
    preview: 'AIGLE (1776-1777): Lorient → Mascareignes et Indes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1777',
    to_date: '1777',
    preview: 'AIGLE (1776-1777): Lorient → Mascareignes et Indes → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1777',
    to_date: '1777',
    preview: 'AIGLE (1776-1777): Lorient → Mascareignes et Indes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1746',
    to_date: '1747',
    preview: 'AIGLE VOLANT (1746-1747): Port-Louis → escadre d’Anville → Chibouctou (Acadie)'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1741',
    to_date: '1743',
    preview: 'AIMABLE ou AYMABLE (1741-1743): Lorient → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1743',
    to_date: '1743',
    preview: 'AIMABLE ou AYMABLE (1741-1743): Lorient → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1743',
    to_date: '1743',
    preview: 'AIMABLE ou AYMABLE (1741-1743): Lorient → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1743',
    to_date: '1743',
    preview: 'AIMABLE ou AYMABLE (1741-1743): Lorient → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1743',
    to_date: '1743',
    preview: 'AIMABLE ou AYMABLE (1741-1743): Lorient → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1743',
    to_date: '1743',
    preview: 'AIMABLE ou AYMABLE (1741-1743): Lorient → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1745',
    to_date: '1746',
    preview: 'AIMABLE ou AYMABLE (1745-1746): Lorient → Chine → Mascareignes → Fernando de Noronha → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1746',
    to_date: '1746',
    preview: 'AIMABLE ou AYMABLE (1745-1746): Lorient → Chine → Mascareignes → Fernando de Noronha → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1747',
    to_date: '1750',
    preview: 'AIMABLE ou AYMABLE (1747-1750): Lorient → Brésil → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1750',
    to_date: '1750',
    preview: 'AIMABLE ou AYMABLE (1747-1750): Lorient → Brésil → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1776',
    to_date: '1777',
    preview: 'AIMABLE NANETTE (1776-1777): Lorient → Pondichéry → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1777',
    to_date: '1777',
    preview: 'AIMABLE NANETTE (1776-1777): Lorient → Pondichéry → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1778',
    to_date: '1778',
    preview: 'AIMABLE NANETTE (1778-1778): Lorient → Île de France → ?'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1759',
    to_date: '1760',
    preview: 'AIMABLE NANON (1759-1760): Saint-Malo → Brest → Port-Louis'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1783',
    to_date: '1783',
    preview: 'AIMABLE PHILIS (1783-1783): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1785',
    to_date: '1785',
    preview: 'AIMABLE SOPHIE (1785-1785): Lorient → Terre-Neuve → Nantes → Lorient'
  },
  {
    from: 'New France',
    to: 'France',
    from_date: '1785',
    to_date: '1785',
    preview: 'AIMABLE SOPHIE (1785-1785): Lorient → Terre-Neuve → Nantes → Lorient'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1786',
    to_date: '1786',
    preview: 'AIMABLE SOPHIE (1786-1786): Lorient → Terre-Neuve → Lorient'
  },
  {
    from: 'New France',
    to: 'France',
    from_date: '1786',
    to_date: '1786',
    preview: 'AIMABLE SOPHIE (1786-1786): Lorient → Terre-Neuve → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1787',
    to_date: '1787',
    preview: 'AIMABLE SOPHIE (1787-1787): Port-Louis → pêche → Lorient'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1788',
    to_date: '1788',
    preview: 'AIMABLE SOPHIE (1788-1788): Lorient → Terre-Neuve → Lorient'
  },
  {
    from: 'New France',
    to: 'France',
    from_date: '1788',
    to_date: '1788',
    preview: 'AIMABLE SOPHIE (1788-1788): Lorient → Terre-Neuve → Lorient'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1789',
    to_date: '1789',
    preview: 'AIMABLE SOPHIE (1789-1789): Lorient → Terre-Neuve ?'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1790',
    to_date: '1790',
    preview: 'AIMABLE SOPHIE (1790-1790): Lorient → Terre-Neuve ?'
  },
  {
    from: 'Madagascar',
    to: 'Caribbean',
    from_date: '1757',
    to_date: '1757',
    preview: 'AIMABLE SUZANNE (1757-1757): Port-Louis → Saint-Domingue ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1786',
    to_date: '1786',
    preview: 'AIMABLE VICTOIRE (1786-1786): Lorient → Île de France → Mozambique ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1763',
    to_date: '1763',
    preview: 'AJAX (1763-1763): Prise anglaise achetée à Brest par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1763',
    to_date: '1765',
    preview: 'AJAX (1763-1765): Lorient → Brésil → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1765',
    to_date: '1765',
    preview: 'AJAX (1763-1765): Lorient → Brésil → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1765',
    to_date: '1765',
    preview: 'AJAX (1763-1765): Lorient → Brésil → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1765',
    to_date: '1767',
    preview: 'AJAX (1765-1767): Lorient → Cadix → Anjouan → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1767',
    to_date: '1767',
    preview: 'AJAX (1765-1767): Lorient → Cadix → Anjouan → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1767',
    to_date: '1767',
    preview: 'AJAX (1765-1767): Lorient → Cadix → Anjouan → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1767',
    to_date: '1767',
    preview: 'AJAX (1765-1767): Lorient → Cadix → Anjouan → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1768',
    to_date: '1769',
    preview: 'AJAX (1768-1769): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1769',
    to_date: '1769',
    preview: 'AJAX (1768-1769): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1769',
    to_date: '1769',
    preview: 'AJAX (1768-1769): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1774',
    to_date: '1776',
    preview: 'AJAX (1774-1776): Lorient → Cap de Bonne-Espérance → Inde → Sainte-Hélène → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1776',
    to_date: '1776',
    preview: 'AJAX (1774-1776): Lorient → Cap de Bonne-Espérance → Inde → Sainte-Hélène → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1775',
    to_date: '1776',
    preview: 'ALTIER (1775-1776): île de France → ? → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1776',
    to_date: '1776',
    preview: 'ALTIER (1776-1776): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1725',
    to_date: '1730',
    preview: 'ALCYON (1725-1730): Lorient → Madagascar, Inde et Mascareignes → Inde → vaisseau de côte → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1730',
    to_date: '1730',
    preview: 'ALCYON (1725-1730): Lorient → Madagascar, Inde et Mascareignes → Inde → vaisseau de côte → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1730',
    to_date: '1730',
    preview: 'ALCYON (1725-1730): Lorient → Madagascar, Inde et Mascareignes → Inde → vaisseau de côte → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1730',
    to_date: '1730',
    preview: 'ALCYON (1725-1730): Lorient → Madagascar, Inde et Mascareignes → Inde → vaisseau de côte → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1730',
    to_date: '1730',
    preview: 'ALCYON (1725-1730): Lorient → Madagascar, Inde et Mascareignes → Inde → vaisseau de côte → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1730',
    to_date: '1730',
    preview: 'ALCYON (1725-1730): Lorient → Madagascar, Inde et Mascareignes → Inde → vaisseau de côte → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1730',
    to_date: '1730',
    preview: 'ALCYON (1725-1730): Lorient → Madagascar, Inde et Mascareignes → Inde → vaisseau de côte → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1730',
    to_date: '1730',
    preview: 'ALCYON (1725-1730): Lorient → Madagascar, Inde et Mascareignes → Inde → vaisseau de côte → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1730',
    to_date: '1730',
    preview: 'ALCYON (1725-1730): Lorient → Madagascar, Inde et Mascareignes → Inde → vaisseau de côte → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1730',
    to_date: '1730',
    preview: 'ALCYON (1725-1730): Lorient → Madagascar, Inde et Mascareignes → Inde → vaisseau de côte → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1730',
    to_date: '1730',
    preview: 'ALCYON (1725-1730): Lorient → Madagascar, Inde et Mascareignes → Inde → vaisseau de côte → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1730',
    to_date: '1730',
    preview: 'ALCYON (1725-1730): Lorient → Madagascar, Inde et Mascareignes → Inde → vaisseau de côte → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1730',
    to_date: '1730',
    preview: 'ALCYON (1725-1730): Lorient → Madagascar, Inde et Mascareignes → Inde → vaisseau de côte → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1730',
    to_date: '1730',
    preview: 'ALCYON (1725-1730): Lorient → Madagascar, Inde et Mascareignes → Inde → vaisseau de côte → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1731',
    to_date: '1737',
    preview: 'ALCYON (1731-1737): Lorient → Inde → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1739',
    to_date: '1739',
    preview: 'ALCYON (1739-1739): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1782',
    to_date: '1783',
    preview: 'ALERTE (1782-1783): Brest → Rochefort → Antilles → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1783',
    to_date: '1783',
    preview: 'ALERTE (1782-1783): Brest → Rochefort → Antilles → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1721',
    preview: 'ALEXANDRE (1720-1721): La Rochelle → Lorient → Saint-Domingue et Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1721',
    preview: 'ALEXANDRE (1720-1721): La Rochelle → Lorient → Saint-Domingue et Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1721',
    to_date: '1721',
    preview: 'ALEXANDRE (1720-1721): La Rochelle → Lorient → Saint-Domingue et Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1722',
    to_date: '1723',
    preview: 'ALEXANDRE (1722-1723): Lorient → Louisiane → Lisbonne → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1723',
    to_date: '1723',
    preview: 'ALEXANDRE (1722-1723): Lorient → Louisiane → Lisbonne → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1724',
    to_date: '1726',
    preview: 'ALEXANDRE (1724-1726): Lorient → Lisbonne → Gorée → Juda → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1726',
    to_date: '1726',
    preview: 'ALEXANDRE (1724-1726): Lorient → Lisbonne → Gorée → Juda → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'ALEXANDRE (1724-1726): Lorient → Lisbonne → Gorée → Juda → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1729',
    to_date: '1730',
    preview: 'ALEXANDRE (1729-1730): Lorient → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1730',
    to_date: '1730',
    preview: 'ALEXANDRE (1729-1730): Lorient → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1730',
    to_date: '1730',
    preview: 'ALEXANDRE (1729-1730): Lorient → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1731',
    to_date: '1732',
    preview: 'ALEXANDRE (1731-1732): Lorient → Sénégal → La Corogne → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1732',
    to_date: '1732',
    preview: 'ALEXANDRE (1731-1732): Lorient → Sénégal → La Corogne → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1732',
    to_date: '1734',
    preview: 'ALEXANDRE (1732-1734): Lorient → Sénégal, Gorée et Portendick → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1734',
    to_date: '1734',
    preview: 'ALEXANDRE (1732-1734): Lorient → Sénégal, Gorée et Portendick → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1734',
    to_date: '1734',
    preview: 'ALEXANDRE (1732-1734): Lorient → Sénégal, Gorée et Portendick → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1774',
    to_date: '1776',
    preview: 'ALEXANDRE (1774-1776): La Rochelle → Mascareignes → Chine → île de France → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1776',
    to_date: '1776',
    preview: 'ALEXANDRE (1774-1776): La Rochelle → Mascareignes → Chine → île de France → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1774',
    to_date: '1776',
    preview: 'ALLIANCE (1774-1776): île de France → Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1776',
    to_date: '1776',
    preview: 'ALLIANCE (1774-1776): île de France → Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1730',
    to_date: '1730',
    preview: 'ALOUETTE (1730-1730): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1736',
    to_date: '1736',
    preview: 'ALOUETTE (1736-1736): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1749',
    to_date: '1749',
    preview: 'ALOUETTE (1749-1749): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1758',
    to_date: '1759',
    preview: 'ALOUETTE (1758-1759): Lorient → Sénégal et Gorée'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1723',
    to_date: '1723',
    preview: 'APOLLON (1723-1723): Lorient → Arguin, Portendick → Sénégal et Gorée → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1723',
    to_date: '1723',
    preview: 'APOLLON (1723-1723): Lorient → Arguin, Portendick → Sénégal et Gorée → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1724',
    to_date: '1726',
    preview: 'APOLLON (1724-1726): Lorient → Inde et Mascareignes → Moka → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1726',
    to_date: '1726',
    preview: 'APOLLON (1724-1726): Lorient → Inde et Mascareignes → Moka → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1726',
    to_date: '1726',
    preview: 'APOLLON (1724-1726): Lorient → Inde et Mascareignes → Moka → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1726',
    to_date: '1726',
    preview: 'APOLLON (1724-1726): Lorient → Inde et Mascareignes → Moka → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'APOLLON (1724-1726): Lorient → Inde et Mascareignes → Moka → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1734',
    to_date: '1735',
    preview: 'APOLLON (1734-1735): Lorient → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1735',
    to_date: '1735',
    preview: 'APOLLON (1734-1735): Lorient → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1735',
    to_date: '1735',
    preview: 'APOLLON (1734-1735): Lorient → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1735',
    to_date: '1735',
    preview: 'APOLLON (1734-1735): Lorient → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1735',
    to_date: '1735',
    preview: 'APOLLON (1734-1735): Lorient → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1735',
    to_date: '1737',
    preview: 'APOLLON (1735-1737): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1737',
    to_date: '1737',
    preview: 'APOLLON (1735-1737): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1737',
    to_date: '1737',
    preview: 'APOLLON (1735-1737): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1737',
    to_date: '1737',
    preview: 'APOLLON (1737-1737): Lorient → Sénégal ? → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1737',
    to_date: '1737',
    preview: 'APOLLON (1737-1737): Lorient → Sénégal ? → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1738',
    to_date: '1739',
    preview: 'APOLLON (1738-1739): Lorient → Inde et Mascareignes → Sainte-Hélène  → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1739',
    to_date: '1739',
    preview: 'APOLLON (1738-1739): Lorient → Inde et Mascareignes → Sainte-Hélène  → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'APOLLON (1738-1739): Lorient → Inde et Mascareignes → Sainte-Hélène  → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1739',
    to_date: '1739',
    preview: 'APOLLON (1738-1739): Lorient → Inde et Mascareignes → Sainte-Hélène  → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1740',
    to_date: '1741',
    preview: 'APOLLON (1740-1741): Lorient → Cap-Vert → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1741',
    to_date: '1741',
    preview: 'APOLLON (1740-1741): Lorient → Cap-Vert → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1741',
    to_date: '1741',
    preview: 'APOLLON (1740-1741): Lorient → Cap-Vert → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1741',
    to_date: '1741',
    preview: 'APOLLON (1740-1741): Lorient → Cap-Vert → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1741',
    to_date: '1741',
    preview: 'APOLLON (1740-1741): Lorient → Cap-Vert → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1741',
    to_date: '1742',
    preview: 'APOLLON (1741-1742): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1742',
    to_date: '1742',
    preview: 'APOLLON (1741-1742): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1742',
    to_date: '1742',
    preview: 'APOLLON (1741-1742): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1742',
    to_date: '1742',
    preview: 'APOLLON (1741-1742): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1724',
    to_date: '1725',
    preview: 'AQUILON (1724-1725): Lorient → Angola et Guinée → Martinique'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1773',
    to_date: '1774',
    preview: 'AQUILON (1773-1774): Lorient → Pondichéry → Bengale → Pondichéry → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1774',
    to_date: '1774',
    preview: 'AQUILON (1773-1774): Lorient → Pondichéry → Bengale → Pondichéry → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1775',
    to_date: '1776',
    preview: 'AQUILON (1775-1776): Lorient → Inde → Sainte-Hélène → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1776',
    to_date: '1776',
    preview: 'AQUILON (1775-1776): Lorient → Inde → Sainte-Hélène → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1777',
    to_date: '1778',
    preview: 'AQUILON (1777-1778): Lorient → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1778',
    to_date: '1778',
    preview: 'AQUILON (1777-1778): Lorient → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1778',
    to_date: '1778',
    preview: 'AQUILON (1777-1778): Lorient → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1782',
    to_date: '1784',
    preview: 'ARCHANGE SAINT-MICHEL (1782-1784): Brest → Lorient → Cap de Bonne-Espérance → île de France → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1784',
    to_date: '1784',
    preview: 'ARCHANGE SAINT-MICHEL (1782-1784): Brest → Lorient → Cap de Bonne-Espérance → île de France → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1782',
    to_date: '1786',
    preview: 'ARCHIDUC (1782-1786): La Rochelle → Inde → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1786',
    to_date: '1786',
    preview: 'ARCHIDUC (1782-1786): La Rochelle → Inde → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1720',
    preview: 'ARGONAUTE (1720-1720): Lorient → Louisiane'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1722',
    to_date: '1724',
    preview: 'ARGONAUTE (1722-1724): Port-Louis → Brest → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1724',
    to_date: '1724',
    preview: 'ARGONAUTE (1722-1724): Port-Louis → Brest → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1724',
    to_date: '1724',
    preview: 'ARGONAUTE (1722-1724): Port-Louis → Brest → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'ARGONAUTE (1722-1724): Port-Louis → Brest → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1725',
    to_date: '1725',
    preview: 'ARGONAUTE (1725-1725): Lorient → ? → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1726',
    to_date: '1727',
    preview: 'ARGONAUTE (1726-1727): Lorient → Cadix → Inde et Mascareignes → Açores → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1727',
    to_date: '1727',
    preview: 'ARGONAUTE (1726-1727): Lorient → Cadix → Inde et Mascareignes → Açores → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1727',
    to_date: '1727',
    preview: 'ARGONAUTE (1726-1727): Lorient → Cadix → Inde et Mascareignes → Açores → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1727',
    to_date: '1727',
    preview: 'ARGONAUTE (1726-1727): Lorient → Cadix → Inde et Mascareignes → Açores → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1729',
    to_date: '1730',
    preview: 'ARGONAUTE (1729-1730): Lorient → Ténériffe → Cap de Bonne-Espérance → Chine → Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1730',
    to_date: '1730',
    preview: 'ARGONAUTE (1729-1730): Lorient → Ténériffe → Cap de Bonne-Espérance → Chine → Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1730',
    to_date: '1730',
    preview: 'ARGONAUTE (1729-1730): Lorient → Ténériffe → Cap de Bonne-Espérance → Chine → Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1730',
    to_date: '1732',
    preview: 'ARGONAUTE (1730-1732): Lorient → Cadix → Ténériffe → Cap-Vert → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1732',
    to_date: '1732',
    preview: 'ARGONAUTE (1730-1732): Lorient → Cadix → Ténériffe → Cap-Vert → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1732',
    to_date: '1732',
    preview: 'ARGONAUTE (1730-1732): Lorient → Cadix → Ténériffe → Cap-Vert → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1732',
    to_date: '1732',
    preview: 'ARGONAUTE (1730-1732): Lorient → Cadix → Ténériffe → Cap-Vert → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1732',
    to_date: '1732',
    preview: 'ARGONAUTE (1730-1732): Lorient → Cadix → Ténériffe → Cap-Vert → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1732',
    to_date: '1732',
    preview: 'ARGONAUTE (1730-1732): Lorient → Cadix → Ténériffe → Cap-Vert → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1732',
    to_date: '1734',
    preview: 'ARGONAUTE (1732-1734): Lorient → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1734',
    to_date: '1734',
    preview: 'ARGONAUTE (1732-1734): Lorient → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1734',
    to_date: '1734',
    preview: 'ARGONAUTE (1732-1734): Lorient → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1734',
    to_date: '1734',
    preview: 'ARGONAUTE (1732-1734): Lorient → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1734',
    to_date: '1734',
    preview: 'ARGONAUTE (1732-1734): Lorient → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1739',
    to_date: '1740',
    preview: 'ARGONAUTE (1739-1740): Lorient → Cap-Vert → Anjouan → Inde → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1740',
    to_date: '1740',
    preview: 'ARGONAUTE (1739-1740): Lorient → Cap-Vert → Anjouan → Inde → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1740',
    to_date: '1740',
    preview: 'ARGONAUTE (1739-1740): Lorient → Cap-Vert → Anjouan → Inde → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Louisiana',
    from_date: '1740',
    to_date: '1740',
    preview: 'ARGONAUTE (1739-1740): Lorient → Cap-Vert → Anjouan → Inde → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1740',
    to_date: '1740',
    preview: 'ARGONAUTE (1739-1740): Lorient → Cap-Vert → Anjouan → Inde → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1783',
    to_date: '1784',
    preview: 'ASTRE DE L’EUROPE (1783-1784): idef → Manille → Chine → île de France → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1784',
    to_date: '1784',
    preview: 'ASTRE DE L’EUROPE (1783-1784): idef → Manille → Chine → île de France → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1726',
    to_date: '1727',
    preview: 'ASTRÉE (1726-1727): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1727',
    to_date: '1727',
    preview: 'ASTRÉE (1726-1727): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1727',
    to_date: '1729',
    preview: 'ASTRÉE (1727-1729): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1729',
    to_date: '1729',
    preview: 'ASTRÉE (1727-1729): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1730',
    to_date: '1731',
    preview: 'ASTRÉE (1730-1731): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1731',
    to_date: '1731',
    preview: 'ASTRÉE (1730-1731): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1731',
    to_date: '1732',
    preview: 'ASTRÉE (1731-1732): Lorient → Sénégal → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1732',
    to_date: '1732',
    preview: 'ASTRÉE (1731-1732): Lorient → Sénégal → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1732',
    to_date: '1732',
    preview: 'ASTRÉE (1731-1732): Lorient → Sénégal → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1732',
    to_date: '1736',
    preview: 'ASTRÉE (1732-1736): Lorient → Ténériffe → côte du sud-ouest africain → Brésil → Mascareignes et Madagascar → Inde'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1736',
    to_date: '1736',
    preview: 'ASTRÉE (1732-1736): Lorient → Ténériffe → côte du sud-ouest africain → Brésil → Mascareignes et Madagascar → Inde'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1736',
    to_date: '1736',
    preview: 'ASTRÉE (1732-1736): Lorient → Ténériffe → côte du sud-ouest africain → Brésil → Mascareignes et Madagascar → Inde'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1736',
    to_date: '1736',
    preview: 'ASTRÉE (1732-1736): Lorient → Ténériffe → côte du sud-ouest africain → Brésil → Mascareignes et Madagascar → Inde'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1736',
    to_date: '1736',
    preview: 'ASTRÉE (1732-1736): Lorient → Ténériffe → côte du sud-ouest africain → Brésil → Mascareignes et Madagascar → Inde'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1736',
    to_date: '1736',
    preview: 'ASTRÉE (1732-1736): Lorient → Ténériffe → côte du sud-ouest africain → Brésil → Mascareignes et Madagascar → Inde'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1736',
    to_date: '1736',
    preview: 'ASTRÉE (1732-1736): Lorient → Ténériffe → côte du sud-ouest africain → Brésil → Mascareignes et Madagascar → Inde'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1736',
    to_date: '1736',
    preview: 'ASTRÉE (1732-1736): Lorient → Ténériffe → côte du sud-ouest africain → Brésil → Mascareignes et Madagascar → Inde'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1736',
    to_date: '1736',
    preview: 'ASTRÉE (1732-1736): Lorient → Ténériffe → côte du sud-ouest africain → Brésil → Mascareignes et Madagascar → Inde'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1744',
    to_date: '1744',
    preview: 'ASTRÉE (1744-1744): Nantes → Sénégal → Nantes'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1744',
    to_date: '1744',
    preview: 'ASTRÉE (1744-1744): Nantes → Sénégal → Nantes'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1746',
    to_date: '1747',
    preview: 'ASTRÉE (1746-1747): Nantes → Paimboeuf → La Rochelle → ? → Martinique → Port-Louis'
  },
  {
    from: 'Caribbean',
    to: 'Madagascar',
    from_date: '1747',
    to_date: '1747',
    preview: 'ASTRÉE (1746-1747): Nantes → Paimboeuf → La Rochelle → ? → Martinique → Port-Louis'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1752',
    to_date: '1752',
    preview: 'ASTRÉE (1752-1752): Lorient → Sénégal et Gorée'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1753',
    to_date: '1754',
    preview: 'ASTRÉE (1753-1754): Sénégal → Açores → Le Conquet → Brest → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1754',
    to_date: '1754',
    preview: 'ASTRÉE (1754-1754): Lorient pour Pondichéry'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1783',
    to_date: '1785',
    preview: 'ASIE (1783-1785): Bordeaux → Mascareignes et Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1785',
    to_date: '1785',
    preview: 'ASIE (1783-1785): Bordeaux → Mascareignes et Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1785',
    to_date: '1785',
    preview: 'ASIE (1783-1785): Bordeaux → Mascareignes et Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1790',
    to_date: '1790',
    preview: 'ASSEMBLÉE NATIONALE (1790-1790): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1721',
    to_date: '1724',
    preview: 'ATALANTE (1721-1724): Lorient → Brésil → Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1724',
    to_date: '1724',
    preview: 'ATALANTE (1721-1724): Lorient → Brésil → Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1724',
    to_date: '1724',
    preview: 'ATALANTE (1721-1724): Lorient → Brésil → Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1724',
    to_date: '1724',
    preview: 'ATALANTE (1721-1724): Lorient → Brésil → Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Caribbean',
    from_date: '1724',
    to_date: '1724',
    preview: 'ATALANTE (1721-1724): Lorient → Brésil → Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'ATALANTE (1721-1724): Lorient → Brésil → Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1732',
    to_date: '1733',
    preview: 'ATALANTE (1732-1733): Lorient → Cadix → Ténériffe → Anjouan → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1733',
    to_date: '1733',
    preview: 'ATALANTE (1732-1733): Lorient → Cadix → Ténériffe → Anjouan → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1733',
    to_date: '1733',
    preview: 'ATALANTE (1732-1733): Lorient → Cadix → Ténériffe → Anjouan → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1733',
    to_date: '1733',
    preview: 'ATALANTE (1732-1733): Lorient → Cadix → Ténériffe → Anjouan → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1734',
    to_date: '1737',
    preview: 'ATALANTE (1734-1737): Lorient → Mascareignes et Madagascar'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1737',
    to_date: '1737',
    preview: 'ATALANTE (1734-1737): Lorient → Mascareignes et Madagascar'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1737',
    to_date: '1737',
    preview: 'ATALANTE (1734-1737): Lorient → Mascareignes et Madagascar'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1770',
    to_date: '1774',
    preview: 'ATALANTE (1770-1774): Lorient → Mascareignes → Cap de Bonne-Espérance → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1774',
    to_date: '1774',
    preview: 'ATALANTE (1770-1774): Lorient → Mascareignes → Cap de Bonne-Espérance → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1774',
    to_date: '1774',
    preview: 'ATALANTE (1774-1774): Lorient → îles de France et de Bourbon ?'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1779',
    to_date: '1779',
    preview: 'AUDACIEUX (1779-1779): Lorient → Cap-Français ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1748',
    to_date: '1749',
    preview: 'AUGUSTE (1748-1749): Lorient → Inde et Mascareignes, Madagascar → Antilles → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1749',
    to_date: '1749',
    preview: 'AUGUSTE (1748-1749): Lorient → Inde et Mascareignes, Madagascar → Antilles → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1749',
    to_date: '1749',
    preview: 'AUGUSTE (1748-1749): Lorient → Inde et Mascareignes, Madagascar → Antilles → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Caribbean',
    from_date: '1749',
    to_date: '1749',
    preview: 'AUGUSTE (1748-1749): Lorient → Inde et Mascareignes, Madagascar → Antilles → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1749',
    to_date: '1749',
    preview: 'AUGUSTE (1748-1749): Lorient → Inde et Mascareignes, Madagascar → Antilles → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1750',
    to_date: '1752',
    preview: 'AUGUSTE (1750-1752): Lorient → Cap-Vert → Inde et Mascareignes → Brésil → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1752',
    to_date: '1752',
    preview: 'AUGUSTE (1750-1752): Lorient → Cap-Vert → Inde et Mascareignes → Brésil → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1752',
    to_date: '1752',
    preview: 'AUGUSTE (1750-1752): Lorient → Cap-Vert → Inde et Mascareignes → Brésil → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1752',
    to_date: '1752',
    preview: 'AUGUSTE (1750-1752): Lorient → Cap-Vert → Inde et Mascareignes → Brésil → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1752',
    to_date: '1752',
    preview: 'AUGUSTE (1750-1752): Lorient → Cap-Vert → Inde et Mascareignes → Brésil → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1752',
    to_date: '1754',
    preview: 'AUGUSTE (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1754',
    to_date: '1754',
    preview: 'AUGUSTE (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1754',
    to_date: '1754',
    preview: 'AUGUSTE (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1754',
    to_date: '1754',
    preview: 'AUGUSTE (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1754',
    to_date: '1754',
    preview: 'AUGUSTE (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1755',
    to_date: '1757',
    preview: 'AUGUSTE (1755-1757): Lorient → Cap-Vert → Mascareignes et Madagascar → vaisseau de côte'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1757',
    to_date: '1757',
    preview: 'AUGUSTE (1755-1757): Lorient → Cap-Vert → Mascareignes et Madagascar → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1757',
    to_date: '1757',
    preview: 'AUGUSTE (1755-1757): Lorient → Cap-Vert → Mascareignes et Madagascar → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1757',
    to_date: '1757',
    preview: 'AUGUSTE (1755-1757): Lorient → Cap-Vert → Mascareignes et Madagascar → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1757',
    to_date: '1757',
    preview: 'AUGUSTE (1755-1757): Lorient → Cap-Vert → Mascareignes et Madagascar → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1757',
    to_date: '1757',
    preview: 'AUGUSTE (1755-1757): Lorient → Cap-Vert → Mascareignes et Madagascar → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1757',
    to_date: '1757',
    preview: 'AUGUSTE (1755-1757): Lorient → Cap-Vert → Mascareignes et Madagascar → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1757',
    to_date: '1757',
    preview: 'AUGUSTE (1755-1757): Lorient → Cap-Vert → Mascareignes et Madagascar → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1757',
    to_date: '1757',
    preview: 'AUGUSTE (1755-1757): Lorient → Cap-Vert → Mascareignes et Madagascar → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1757',
    to_date: '1757',
    preview: 'AUGUSTE (1755-1757): Lorient → Cap-Vert → Mascareignes et Madagascar → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1776',
    to_date: '1776',
    preview: 'AUGUSTE (1776-1776): Lorient → Martinique ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1777',
    to_date: '1777',
    preview: 'AUGUSTE (1777-1777): Lorient → îles de France et de Bourbon ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1788',
    to_date: '1788',
    preview: 'AUGUSTE (1788-1788): Lorient → Cadix → île de France ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1790',
    to_date: '1790',
    preview: 'AUGUSTE (1790-1790): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1785',
    to_date: '1785',
    preview: 'AUGUSTE VICTOR (1785-1785): Rochefort → Inde et Mascareignes → Lorient → Rochefort'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1785',
    to_date: '1785',
    preview: 'AUGUSTE VICTOR (1785-1785): Rochefort → Inde et Mascareignes → Lorient → Rochefort'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1785',
    to_date: '1785',
    preview: 'AUGUSTE VICTOR (1785-1785): Rochefort → Inde et Mascareignes → Lorient → Rochefort'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1718',
    to_date: '1719',
    preview: 'AURORE (1718-1719): Saint-Malo → Juda et côtes de Guinée → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1719',
    to_date: '1719',
    preview: 'AURORE (1718-1719): Saint-Malo → Juda et côtes de Guinée → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1719',
    to_date: '1719',
    preview: 'AURORE (1718-1719): Saint-Malo → Juda et côtes de Guinée → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1719',
    to_date: '1719',
    preview: 'AURORE (1718-1719): Saint-Malo → Juda et côtes de Guinée → Antilles → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1720',
    preview: 'AURORE (1720-1720): Lorient → Louisiane → Antilles'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1720',
    preview: 'AURORE (1720-1720): Lorient → Louisiane → Antilles'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1725',
    to_date: '1726',
    preview: 'AURORE (1725-1726): Le Havre → Lorient → Sénégal et Gorée → La Grenade → Louisiane → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Louisiana',
    from_date: '1726',
    to_date: '1726',
    preview: 'AURORE (1725-1726): Le Havre → Lorient → Sénégal et Gorée → La Grenade → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'AURORE (1725-1726): Le Havre → Lorient → Sénégal et Gorée → La Grenade → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1728',
    to_date: '1729',
    preview: 'AURORE (1728-1729): Lorient → Ténériffe → Saint-Domingue → Louisiane → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1729',
    to_date: '1729',
    preview: 'AURORE (1728-1729): Lorient → Ténériffe → Saint-Domingue → Louisiane → Martinique → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1729',
    to_date: '1729',
    preview: 'AURORE (1728-1729): Lorient → Ténériffe → Saint-Domingue → Louisiane → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1729',
    to_date: '1729',
    preview: 'AURORE (1728-1729): Lorient → Ténériffe → Saint-Domingue → Louisiane → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1730',
    to_date: '1731',
    preview: 'AURORE (1730-1731): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1731',
    to_date: '1731',
    preview: 'AURORE (1730-1731): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1731',
    to_date: '1731',
    preview: 'AURORE (1730-1731): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1731',
    to_date: '1731',
    preview: 'AURORE (1730-1731): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1735',
    to_date: '1736',
    preview: 'AURORE (1735-1736): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1736',
    to_date: '1736',
    preview: 'AURORE (1735-1736): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1736',
    to_date: '1736',
    preview: 'AURORE (1735-1736): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1736',
    to_date: '1736',
    preview: 'AURORE (1736-1736): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1736',
    to_date: '1736',
    preview: 'AURORE (1736-1736): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1736',
    to_date: '1737',
    preview: 'AURORE (1736-1737): Lorient → Sénégal et Gorée → Martinique → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1737',
    to_date: '1737',
    preview: 'AURORE (1736-1737): Lorient → Sénégal et Gorée → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1737',
    to_date: '1737',
    preview: 'AURORE (1736-1737): Lorient → Sénégal et Gorée → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1737',
    to_date: '1739',
    preview: 'AURORE (1737-1739): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1739',
    to_date: '1739',
    preview: 'AURORE (1737-1739): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1739',
    to_date: '1739',
    preview: 'AURORE (1737-1739): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1740',
    to_date: '1741',
    preview: 'AURORE (1740-1741): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1741',
    to_date: '1741',
    preview: 'AURORE (1740-1741): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1741',
    to_date: '1741',
    preview: 'AURORE (1740-1741): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1721',
    preview: 'AVENTURIER (1720-1721): Lorient → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1721',
    preview: 'AVENTURIER (1720-1721): Lorient → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1721',
    to_date: '1721',
    preview: 'AVENTURIER (1720-1721): Lorient → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1722',
    to_date: '1722',
    preview: 'AVENTURIER (1722-1722): Lorient → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1722',
    to_date: '1722',
    preview: 'AVENTURIER (1722-1722): Lorient → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1723',
    to_date: '1724',
    preview: 'AVENTURIER (1723-1724): Lorient → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'AVENTURIER (1723-1724): Lorient → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1724',
    to_date: '1726',
    preview: 'AVENTURIER (1724-1726): Lorient → Juda → Antilles'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1726',
    to_date: '1726',
    preview: 'AVENTURIER (1724-1726): Lorient → Juda → Antilles'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1737',
    to_date: '1737',
    preview: 'AVENTURIER (1737-1737): Nantes ? → Sénégal → Portendick'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1783',
    to_date: '1783',
    preview: 'BOUGAINVILLE (1783-1783): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1786',
    to_date: '1789',
    preview: 'BOUFFLERS (1786-1789): Lorient → côte d’Afrique → Saint-Domingue → Nantes'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1789',
    to_date: '1789',
    preview: 'BOUFFLERS (1786-1789): Lorient → côte d’Afrique → Saint-Domingue → Nantes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1776',
    to_date: '1776',
    preview: 'BOUFFONNE (1776-1776): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1759',
    to_date: '1760',
    preview: 'BOULLONGNE ou BOULONGNE (1759-1760): Lorient → Inde et Mascareignes → Rochefort'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'BOULLONGNE ou BOULONGNE (1759-1760): Lorient → Inde et Mascareignes → Rochefort'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1760',
    to_date: '1760',
    preview: 'BOULLONGNE ou BOULONGNE (1759-1760): Lorient → Inde et Mascareignes → Rochefort'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1761',
    preview: 'BOULLONGNE ou BOULONGNE (1761-1761): Rochefort → Mascareignes → Antilles'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Caribbean',
    from_date: '1761',
    to_date: '1761',
    preview: 'BOULLONGNE ou BOULONGNE (1761-1761): Rochefort → Mascareignes → Antilles'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1785',
    to_date: '1786',
    preview: 'BOULLONGNE ou BOULLOGNE, BOULONGNE (1785-1786): Lorient → Bengale → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1786',
    to_date: '1786',
    preview: 'BOULLONGNE ou BOULLOGNE, BOULONGNE (1785-1786): Lorient → Bengale → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1787',
    to_date: '1788',
    preview: 'BOULLONGNE ou BOULLOGNE, BOULONGNE (1787-1788): Lorient → Bengale → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1788',
    to_date: '1788',
    preview: 'BOULLONGNE ou BOULLOGNE, BOULONGNE (1787-1788): Lorient → Bengale → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1789',
    to_date: '1789',
    preview: 'BOULLONGNE ou BOULLOGNE, BOULONGNE (1789-1789): Lorient → Bengale → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1789',
    to_date: '1789',
    preview: 'BOULLONGNE ou BOULLOGNE, BOULONGNE (1789-1789): Lorient → Bengale → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1722',
    to_date: '1724',
    preview: 'BOURBON (1722-1724): Brest → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1724',
    to_date: '1724',
    preview: 'BOURBON (1722-1724): Brest → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Caribbean',
    from_date: '1724',
    to_date: '1724',
    preview: 'BOURBON (1722-1724): Brest → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'BOURBON (1722-1724): Brest → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1728',
    to_date: '1729',
    preview: 'BOURBON (1728-1729): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1729',
    to_date: '1729',
    preview: 'BOURBON (1728-1729): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1729',
    to_date: '1729',
    preview: 'BOURBON (1728-1729): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1729',
    to_date: '1729',
    preview: 'BOURBON (1728-1729): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1729',
    to_date: '1729',
    preview: 'BOURBON (1728-1729): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1730',
    to_date: '1732',
    preview: 'BOURBON (1730-1732): Lorient → Cadix → Anjouan → Inde et Mascareignes'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1732',
    to_date: '1732',
    preview: 'BOURBON (1730-1732): Lorient → Cadix → Anjouan → Inde et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1732',
    to_date: '1732',
    preview: 'BOURBON (1730-1732): Lorient → Cadix → Anjouan → Inde et Mascareignes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1751',
    to_date: '1754',
    preview: 'BOURBON (1751-1754): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1754',
    to_date: '1754',
    preview: 'BOURBON (1751-1754): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1754',
    to_date: '1754',
    preview: 'BOURBON (1751-1754): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1754',
    to_date: '1754',
    preview: 'BOURBON (1751-1754): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1754',
    to_date: '1754',
    preview: 'BOURBON (1751-1754): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1754',
    to_date: '1757',
    preview: 'BOURBON (1754-1757): Lorient → Gorée → Brésil → Inde → Angola → Brésil → Vigo'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1757',
    to_date: '1757',
    preview: 'BOURBON (1754-1757): Lorient → Gorée → Brésil → Inde → Angola → Brésil → Vigo'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1758',
    to_date: '1759',
    preview: 'BOURBON (1758-1759): Lorient → Mascareignes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1759',
    to_date: '1760',
    preview: 'BOUTIN (1759-1760): Lorient → île Grande → Inde → Rochefort'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1760',
    to_date: '1760',
    preview: 'BOUTIN (1759-1760): Lorient → île Grande → Inde → Rochefort'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1762',
    preview: 'BOUTIN (1761-1762): Rochefort → Mascareignes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1771',
    to_date: '1773',
    preview: 'BOYNES (1771-1773): Lorient → Mascareignes → Inde → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1773',
    to_date: '1773',
    preview: 'BOYNES (1771-1773): Lorient → Mascareignes → Inde → Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1773',
    to_date: '1773',
    preview: 'BOYNES (1771-1773): Lorient → Mascareignes → Inde → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1773',
    to_date: '1773',
    preview: 'BOYNES (1771-1773): Lorient → Mascareignes → Inde → Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1773',
    to_date: '1773',
    preview: 'BOYNES (1773-1773): Chandernagor → île Bourbon → Sainte-Hélène → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1773',
    to_date: '1773',
    preview: 'BOYNES (1773-1773): Chandernagor → île Bourbon → Sainte-Hélène → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1775',
    to_date: '1775',
    preview: 'BOYNES (1775-1775): Lorient → Bengale ?'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1782',
    to_date: '1783',
    preview: 'BON AMI (1782-1783): Bordeaux → Brest → Rochefort → Antilles → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1783',
    to_date: '1783',
    preview: 'BON AMI (1782-1783): Bordeaux → Brest → Rochefort → Antilles → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1783',
    to_date: '1783',
    preview: 'BON PÈRE (1783-1783): Lorient → Saint-Pierre, Martinique ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1783',
    to_date: '1785',
    preview: 'BONHOMME RICHARD (1783-1785): Rochefort → Inde → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1785',
    to_date: '1785',
    preview: 'BONHOMME RICHARD (1783-1785): Rochefort → Inde → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Caribbean',
    from_date: '1762',
    to_date: '1762',
    preview: 'BONITE (1762-1762): Port-Louis → Saint-Domingue ?'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1784',
    to_date: '1785',
    preview: 'BONNE AMIE (1784-1785): Lorient → Saint-Pierre et Miquelon → Kernevel'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1785',
    to_date: '1785',
    preview: 'BONNE AMIE (1785-1785): Lorient → Saint-Pierre et Miquelon ?'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1786',
    to_date: '1787',
    preview: 'BONNE AMIE (1786-1787): Lorient → Saint-Pierre et Miquelon → Lorient'
  },
  {
    from: 'New France',
    to: 'France',
    from_date: '1787',
    to_date: '1787',
    preview: 'BONNE AMIE (1786-1787): Lorient → Saint-Pierre et Miquelon → Lorient'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1787',
    to_date: '1788',
    preview: 'BONNE AMIE (1787-1788): Lorient → Saint-Pierre et Miquelon → Saint-Domingue → Nantes → Lorient'
  },
  {
    from: 'New France',
    to: 'Caribbean',
    from_date: '1788',
    to_date: '1788',
    preview: 'BONNE AMIE (1787-1788): Lorient → Saint-Pierre et Miquelon → Saint-Domingue → Nantes → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1788',
    to_date: '1788',
    preview: 'BONNE AMIE (1787-1788): Lorient → Saint-Pierre et Miquelon → Saint-Domingue → Nantes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1790',
    to_date: '1790',
    preview: 'BONNE AMIE (1790-1790): Lorient → Marseille → Île de France ?'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1719',
    to_date: '1720',
    preview: 'BONNE AVENTURE ou BONNAVENTURE (1719-1720): Le Havre → Sénégal et Gorée → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'BONNE AVENTURE ou BONNAVENTURE (1719-1720): Le Havre → Sénégal et Gorée → Le Havre'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1720',
    to_date: '1720',
    preview: 'BONNE AVENTURE ou BONNAVENTURE (1720-1720): Le Havre → Sénégal et Arguin → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'BONNE AVENTURE ou BONNAVENTURE (1720-1720): Le Havre → Sénégal et Arguin → Le Havre'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1722',
    to_date: '1724',
    preview: 'BONNE AVENTURE ou BONNAVENTURE (1722-1724): Le Havre → Sénégal et Gorée → Cayenne → Nantes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'BONNE AVENTURE ou BONNAVENTURE (1722-1724): Le Havre → Sénégal et Gorée → Cayenne → Nantes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Caribbean',
    from_date: '1784',
    to_date: '1785',
    preview: 'BONNE ESPÉRANCE (1784-1785): île de France → Cap de Bonne-Espérance → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1785',
    to_date: '1785',
    preview: 'BONNE ESPÉRANCE (1784-1785): île de France → Cap de Bonne-Espérance → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1779',
    to_date: '1779',
    preview: 'BONS AMIS (1779-1779): Lorient → île de France ?'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'BONS AMIS (1782-1782): Martinique → Guadeloupe → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1783',
    to_date: '1783',
    preview: 'BONS AMIS (1783-1783): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1776',
    to_date: '1778',
    preview: 'BORDELAIS (1776-1778): Rochefort → Inde et Mascareignes → Ascencion → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1778',
    to_date: '1778',
    preview: 'BORDELAIS (1776-1778): Rochefort → Inde et Mascareignes → Ascencion → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1778',
    to_date: '1778',
    preview: 'BORDELAIS (1776-1778): Rochefort → Inde et Mascareignes → Ascencion → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1725',
    to_date: '1728',
    preview: 'BADINE (1725-1728): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1728',
    to_date: '1728',
    preview: 'BADINE (1725-1728): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1728',
    to_date: '1728',
    preview: 'BADINE (1725-1728): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1730',
    to_date: '1732',
    preview: 'BADINE (1730-1732): Lorient → Ténériffe → Sénégal et Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1732',
    to_date: '1732',
    preview: 'BADINE (1730-1732): Lorient → Ténériffe → Sénégal et Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1732',
    to_date: '1732',
    preview: 'BADINE (1730-1732): Lorient → Ténériffe → Sénégal et Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1732',
    to_date: '1732',
    preview: 'BADINE (1730-1732): Lorient → Ténériffe → Sénégal et Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1732',
    to_date: '1732',
    preview: 'BADINE (1730-1732): Lorient → Ténériffe → Sénégal et Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1732',
    to_date: '1732',
    preview: 'BADINE (1730-1732): Lorient → Ténériffe → Sénégal et Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1733',
    to_date: '1734',
    preview: 'BADINE (1733-1734): Lorient → Cap-Vert → Inde et Mascareignes → Ascension → Vigo → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1734',
    to_date: '1734',
    preview: 'BADINE (1733-1734): Lorient → Cap-Vert → Inde et Mascareignes → Ascension → Vigo → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1734',
    to_date: '1734',
    preview: 'BADINE (1733-1734): Lorient → Cap-Vert → Inde et Mascareignes → Ascension → Vigo → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1734',
    to_date: '1734',
    preview: 'BADINE (1733-1734): Lorient → Cap-Vert → Inde et Mascareignes → Ascension → Vigo → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1734',
    to_date: '1734',
    preview: 'BADINE (1733-1734): Lorient → Cap-Vert → Inde et Mascareignes → Ascension → Vigo → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1734',
    to_date: '1734',
    preview: 'BADINE (1733-1734): Lorient → Cap-Vert → Inde et Mascareignes → Ascension → Vigo → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1735',
    to_date: '1736',
    preview: 'BADINE (1735-1736): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1736',
    to_date: '1736',
    preview: 'BADINE (1735-1736): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1736',
    to_date: '1736',
    preview: 'BADINE (1735-1736): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1737',
    to_date: '1737',
    preview: 'BADINE (1737-1737): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1737',
    to_date: '1737',
    preview: 'BADINE (1737-1737): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1721',
    preview: 'BALEINE (1720-1721): Lorient → Nantes/Paimbœuf → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1721',
    to_date: '1721',
    preview: 'BALEINE (1720-1721): Lorient → Nantes/Paimbœuf → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1725',
    to_date: '1726',
    preview: 'BALEINE (1725-1726): Lorient → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'BALEINE (1725-1726): Lorient → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1726',
    to_date: '1727',
    preview: 'BALEINE (1726-1727): Lorient →  Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1727',
    to_date: '1727',
    preview: 'BALEINE (1726-1727): Lorient →  Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1727',
    to_date: '1727',
    preview: 'BALEINE (1726-1727): Lorient →  Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1728',
    to_date: '1729',
    preview: 'BALEINE (1728-1729): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1729',
    to_date: '1729',
    preview: 'BALEINE (1728-1729): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1729',
    to_date: '1729',
    preview: 'BALEINE (1728-1729): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1729',
    to_date: '1729',
    preview: 'BALEINE (1728-1729): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1729',
    to_date: '1731',
    preview: 'BALEINE (1729-1731): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1731',
    to_date: '1731',
    preview: 'BALEINE (1729-1731): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1731',
    to_date: '1731',
    preview: 'BALEINE (1729-1731): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1731',
    to_date: '1731',
    preview: 'BALEINE (1729-1731): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1731',
    to_date: '1733',
    preview: 'BALEINE (1731-1733): Lorient → Sénégal, Portendick et Gorée → Saint-Domingue → Belle-île → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1733',
    to_date: '1733',
    preview: 'BALEINE (1731-1733): Lorient → Sénégal, Portendick et Gorée → Saint-Domingue → Belle-île → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1733',
    to_date: '1733',
    preview: 'BALEINE (1731-1733): Lorient → Sénégal, Portendick et Gorée → Saint-Domingue → Belle-île → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1786',
    to_date: '1787',
    preview: 'BARON DE BRETEUIL (1786-1787): Lorient → Bengale → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1787',
    to_date: '1787',
    preview: 'BARON DE BRETEUIL (1786-1787): Lorient → Bengale → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1788',
    to_date: '1788',
    preview: 'BARON DE BRETEUIL (1788-1788): Lorient → Bengale ?'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1778',
    to_date: '1778',
    preview: 'BASSETERRE (1778-1778): Le Havre → Antilles → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1778',
    to_date: '1778',
    preview: 'BASSETERRE (1778-1778): Le Havre → Antilles → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1759',
    to_date: '1760',
    preview: 'BETSY ex prise anglaise (1759-1760): Saint-Malo → Brest → Port-Louis'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1775',
    to_date: '1776',
    preview: 'BETZY (1775-1776): Lorient → Saint-Pierre et Miquelon → Lorient → Rochefort → Lorient'
  },
  {
    from: 'New France',
    to: 'France',
    from_date: '1776',
    to_date: '1776',
    preview: 'BETZY (1775-1776): Lorient → Saint-Pierre et Miquelon → Lorient → Rochefort → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1783',
    to_date: '1784',
    preview: 'BEYMOUTH (1783-1784): Marseille → Majorque → Malaga → Port-Louis'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1763',
    to_date: '1764',
    preview: 'BEAUMONT (1763-1764): Lorient → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1764',
    to_date: '1764',
    preview: 'BEAUMONT (1763-1764): Lorient → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1765',
    to_date: '1766',
    preview: 'BEAUMONT (1765-1766): Lorient → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1766',
    to_date: '1766',
    preview: 'BEAUMONT (1765-1766): Lorient → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1766',
    to_date: '1766',
    preview: 'BEAUMONT (1765-1766): Lorient → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1767',
    to_date: '1768',
    preview: 'BEAUMONT (1767-1768): Lorient →  Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1768',
    to_date: '1768',
    preview: 'BEAUMONT (1767-1768): Lorient →  Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1768',
    to_date: '1770',
    preview: 'BEAUMONT (1768-1770): Lorient → Cap de Bonne-Espérance → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1770',
    to_date: '1770',
    preview: 'BEAUMONT (1768-1770): Lorient → Cap de Bonne-Espérance → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1773',
    to_date: '1774',
    preview: 'BEAUMONT (1773-1774): Lorient → île de France → Chine → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1774',
    to_date: '1774',
    preview: 'BEAUMONT (1773-1774): Lorient → île de France → Chine → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1775',
    to_date: '1777',
    preview: 'BEAUMONT (1775-1777): Lorient → Inde → Chine → Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1777',
    to_date: '1777',
    preview: 'BEAUMONT (1775-1777): Lorient → Inde → Chine → Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1750',
    to_date: '1751',
    preview: 'BELETTE (1750-1751): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1751',
    to_date: '1751',
    preview: 'BELETTE (1750-1751): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1752',
    to_date: '1753',
    preview: 'BELETTE (1752-1753): Lorient → Sénégal'
  },
  {
    from: 'Madagascar',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1723',
    preview: 'BELLONE (1721-1723): Port-Louis → Louisiane → Saint-Domingue → Rochefort'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1723',
    to_date: '1723',
    preview: 'BELLONE (1721-1723): Port-Louis → Louisiane → Saint-Domingue → Rochefort'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1723',
    to_date: '1723',
    preview: 'BELLONE (1721-1723): Port-Louis → Louisiane → Saint-Domingue → Rochefort'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1724',
    to_date: '1725',
    preview: 'BELLONE (1724-1725): Rochefort → Louisiane'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1780',
    to_date: '1782',
    preview: 'BELLONE (1780-1782): Lorient → Bordeaux → Rochefort → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'BELLONE (1780-1782): Lorient → Bordeaux → Rochefort → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1778',
    to_date: '1779',
    preview: 'BELMARRE (1778-1779): Bordeaux → Saint-Pierre et Miquelon → Virginie → Baltimore → Lorient'
  },
  {
    from: 'New France',
    to: 'France',
    from_date: '1779',
    to_date: '1779',
    preview: 'BELMARRE (1778-1779): Bordeaux → Saint-Pierre et Miquelon → Virginie → Baltimore → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1778',
    to_date: '1779',
    preview: 'BERGÈRE ou BERGERRE ex  (1778-1779): Nantes/Paimboeuf → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1779',
    to_date: '1779',
    preview: 'BERGÈRE ou BERGERRE ex  (1778-1779): Nantes/Paimboeuf → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1783',
    to_date: '1783',
    preview: 'BERGER (1783-1783): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1761',
    preview: 'BERRYER (1760-1761): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1761',
    to_date: '1761',
    preview: 'BERRYER (1760-1761): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1763',
    preview: 'BERRYER (1762-1763): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1763',
    to_date: '1763',
    preview: 'BERRYER (1762-1763): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1765',
    preview: 'BERRYER (1764-1765): Lorient → Chine → Mascareignes → Saint-Paul de Luanda (Angola) → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1765',
    to_date: '1765',
    preview: 'BERRYER (1764-1765): Lorient → Chine → Mascareignes → Saint-Paul de Luanda (Angola) → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1765',
    to_date: '1767',
    preview: 'BERRYER (1765-1767): Lorient → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1767',
    to_date: '1767',
    preview: 'BERRYER (1765-1767): Lorient → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1767',
    to_date: '1767',
    preview: 'BERRYER (1765-1767): Lorient → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1767',
    to_date: '1769',
    preview: 'BERRYER (1767-1769): Lorient → Cadix → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1769',
    to_date: '1769',
    preview: 'BERRYER (1767-1769): Lorient → Cadix → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1761',
    to_date: '1761',
    preview: 'BERTIN (1761-1761): Lorient pour l\'Inde et les Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1761',
    preview: 'BERTIN (1761-1761): Lorient pour l\'Inde et les Mascareignes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1766',
    preview: 'BERTIN (1762-1766): Lorient → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1766',
    to_date: '1766',
    preview: 'BERTIN (1762-1766): Lorient → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1766',
    to_date: '1766',
    preview: 'BERTIN (1762-1766): Lorient → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1766',
    to_date: '1766',
    preview: 'BERTIN (1762-1766): Lorient → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1766',
    to_date: '1766',
    preview: 'BERTIN (1762-1766): Lorient → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1766',
    to_date: '1766',
    preview: 'BERTIN (1762-1766): Lorient → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1766',
    to_date: '1766',
    preview: 'BERTIN (1762-1766): Lorient → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1766',
    preview: 'BERTIN (1762-1766): Lorient → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1766',
    to_date: '1766',
    preview: 'BERTIN (1762-1766): Lorient → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1766',
    to_date: '1766',
    preview: 'BERTIN (1762-1766): Lorient → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1766',
    to_date: '1766',
    preview: 'BERTIN (1762-1766): Lorient → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1766',
    to_date: '1766',
    preview: 'BERTIN (1762-1766): Lorient → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1766',
    to_date: '1766',
    preview: 'BERTIN (1762-1766): Lorient → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1766',
    to_date: '1766',
    preview: 'BERTIN (1762-1766): Lorient → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1766',
    to_date: '1768',
    preview: 'BERTIN (1766-1768): Lorient → Cadix → Inde → Chine → Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1768',
    to_date: '1768',
    preview: 'BERTIN (1766-1768): Lorient → Cadix → Inde → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1768',
    to_date: '1768',
    preview: 'BERTIN (1766-1768): Lorient → Cadix → Inde → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1769',
    to_date: '1770',
    preview: 'BERTIN (1769-1770): Lorient → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1770',
    to_date: '1770',
    preview: 'BERTIN (1769-1770): Lorient → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1752',
    to_date: '1753',
    preview: 'BICHE (1752-1753): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1757',
    to_date: '1758',
    preview: 'BIEN-AIMÉ (1757-1758): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1758',
    to_date: '1758',
    preview: 'BIEN-AIMÉ (1757-1758): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1782',
    to_date: '1782',
    preview: 'BIEN-AIMÉE (1782-1782): Granville → Saint-Malo → Brest → Cap-Français → Belle-Île → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'BIEN-AIMÉE (1782-1782): Granville → Saint-Malo → Brest → Cap-Français → Belle-Île → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1783',
    to_date: '1783',
    preview: 'BIEN-AIMÉE (1783-1783): Lorient → Saint-Domingue ?'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1772',
    to_date: '1775',
    preview: 'BRUNE (1772-1775): Lorient → Cap de Bonne-Espérance → Madagascar et Mascareignes → Inde → Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1775',
    to_date: '1775',
    preview: 'BRUNE (1772-1775): Lorient → Cap de Bonne-Espérance → Madagascar et Mascareignes → Inde → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1775',
    to_date: '1775',
    preview: 'BRUNE (1772-1775): Lorient → Cap de Bonne-Espérance → Madagascar et Mascareignes → Inde → Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1775',
    to_date: '1775',
    preview: 'BRUNE (1772-1775): Lorient → Cap de Bonne-Espérance → Madagascar et Mascareignes → Inde → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1775',
    to_date: '1775',
    preview: 'BRUNE (1772-1775): Lorient → Cap de Bonne-Espérance → Madagascar et Mascareignes → Inde → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1776',
    to_date: '1777',
    preview: 'BRUNE (1776-1777): Lorient → Inde → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1777',
    to_date: '1777',
    preview: 'BRUNE (1776-1777): Lorient → Inde → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1777',
    to_date: '1778',
    preview: 'BRUNE (1777-1778): Lorient → Saint-Domingue → Boston'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1771',
    to_date: '1773',
    preview: 'BRUNY (1771-1773): Lorient → Cap de Bonne-Espérance → Madagascar et Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1773',
    to_date: '1773',
    preview: 'BRUNY (1771-1773): Lorient → Cap de Bonne-Espérance → Madagascar et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1773',
    to_date: '1773',
    preview: 'BRUNY (1771-1773): Lorient → Cap de Bonne-Espérance → Madagascar et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1773',
    to_date: '1774',
    preview: 'BRUNY (1773-1774): Lorient → Vannes → Lorient → Port-au-Prince → Nantes → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1774',
    to_date: '1774',
    preview: 'BRUNY (1773-1774): Lorient → Vannes → Lorient → Port-au-Prince → Nantes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1751',
    to_date: '1751',
    preview: 'BRACK (1751-1751): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1783',
    to_date: '1783',
    preview: 'BRABANT (1783-1783): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1737',
    to_date: '1737',
    preview: 'BRAVE (1737-1737): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1779',
    to_date: '1780',
    preview: 'BRETON (1779-1780): Lorient → Saint-Domingue → Bordeaux'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1780',
    to_date: '1780',
    preview: 'BRETON (1779-1780): Lorient → Saint-Domingue → Bordeaux'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1786',
    to_date: '1786',
    preview: 'BRETON (1786-1786): Lorient → Cap de Bonne-Espérance → Île de France → Mozambique → Cap de Bonne-Espérance → Saint-Domingue → Nantes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Caribbean',
    from_date: '1786',
    to_date: '1786',
    preview: 'BRETON (1786-1786): Lorient → Cap de Bonne-Espérance → Île de France → Mozambique → Cap de Bonne-Espérance → Saint-Domingue → Nantes'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1786',
    to_date: '1786',
    preview: 'BRETON (1786-1786): Lorient → Cap de Bonne-Espérance → Île de France → Mozambique → Cap de Bonne-Espérance → Saint-Domingue → Nantes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1733',
    to_date: '1733',
    preview: 'BRETONNE (1733-1733): Lorient pour le Sénégal'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1789',
    to_date: '1789',
    preview: 'BRETONNE CHÉRIE (1789-1789): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1785',
    to_date: '1786',
    preview: 'BRETAGNE (1785-1786): Bordeaux → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1786',
    to_date: '1786',
    preview: 'BRETAGNE (1785-1786): Bordeaux → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1786',
    to_date: '1786',
    preview: 'BRETAGNE (1785-1786): Bordeaux → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1788',
    to_date: '1788',
    preview: 'BRETAGNE (1788-1788): Lorient → Bordeaux → île de France ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1790',
    to_date: '1790',
    preview: 'BRETAGNE (1790-1790): Lorient → Bengale ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1775',
    to_date: '1777',
    preview: 'BRICOLE (1775-1777): Rochefort → Mascareignes → Inde → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1777',
    to_date: '1777',
    preview: 'BRICOLE (1775-1777): Rochefort → Mascareignes → Inde → Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1777',
    to_date: '1777',
    preview: 'BRICOLE (1775-1777): Rochefort → Mascareignes → Inde → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1777',
    to_date: '1777',
    preview: 'BRICOLE (1775-1777): Rochefort → Mascareignes → Inde → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1741',
    to_date: '1743',
    preview: 'BRILLANT (1741-1743): Lorient → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1743',
    to_date: '1743',
    preview: 'BRILLANT (1741-1743): Lorient → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1743',
    to_date: '1743',
    preview: 'BRILLANT (1741-1743): Lorient → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1743',
    to_date: '1743',
    preview: 'BRILLANT (1741-1743): Lorient → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1743',
    to_date: '1743',
    preview: 'BRILLANT (1741-1743): Lorient → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1743',
    to_date: '1743',
    preview: 'BRILLANT (1741-1743): Lorient → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1744',
    to_date: '1744',
    preview: 'BRILLANT (1744-1744): Lorient → Île Royale et  Louisbourg → Lorient'
  },
  {
    from: 'New France',
    to: 'France',
    from_date: '1744',
    to_date: '1744',
    preview: 'BRILLANT (1744-1744): Lorient → Île Royale et  Louisbourg → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1746',
    to_date: '1747',
    preview: 'BRILLANT (1746-1747): Prise anglaise capturée au large de Madras'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1746',
    to_date: '1750',
    preview: 'BRILLANT (1746-1750): Lorient → Gorée → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1750',
    to_date: '1750',
    preview: 'BRILLANT (1746-1750): Lorient → Gorée → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1750',
    to_date: '1750',
    preview: 'BRILLANT (1746-1750): Lorient → Gorée → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1750',
    to_date: '1750',
    preview: 'BRILLANT (1746-1750): Lorient → Gorée → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1755',
    to_date: '1757',
    preview: 'BRILLANT (1755-1757): Le Havre → Martinique → Louisbourg (Acadie) → Cap-Français (St-Domingue) → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1757',
    to_date: '1757',
    preview: 'BRILLANT (1755-1757): Le Havre → Martinique → Louisbourg (Acadie) → Cap-Français (St-Domingue) → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1758',
    to_date: '1758',
    preview: 'BRILLANT (1758-1758): Lorient pour l’Inde'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1767',
    to_date: '1769',
    preview: 'BRISSON (1767-1769): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1769',
    to_date: '1769',
    preview: 'BRISSON (1767-1769): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1769',
    to_date: '1769',
    preview: 'BRISSON (1767-1769): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1769',
    to_date: '1769',
    preview: 'BRISSON (1767-1769): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1770',
    to_date: '1772',
    preview: 'BRISSON (1770-1772): Lorient → La Rochelle → Cadix → Mascareignes → Cap de Bonne-Espérance → Ascension → La Rochelle → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1772',
    to_date: '1772',
    preview: 'BRISSON (1770-1772): Lorient → La Rochelle → Cadix → Mascareignes → Cap de Bonne-Espérance → Ascension → La Rochelle → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1772',
    to_date: '1772',
    preview: 'BRISSON (1770-1772): Lorient → La Rochelle → Cadix → Mascareignes → Cap de Bonne-Espérance → Ascension → La Rochelle → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1772',
    to_date: '1774',
    preview: 'BRISSON (1772-1774): La Rochelle → Mascareignes → Chine → île de France → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1774',
    to_date: '1774',
    preview: 'BRISSON (1772-1774): La Rochelle → Mascareignes → Chine → île de France → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1775',
    to_date: '1776',
    preview: 'BRISSON (1775-1776): Lorient → Mascareignes → Inde → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1776',
    to_date: '1776',
    preview: 'BRISSON (1775-1776): Lorient → Mascareignes → Inde → Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1776',
    to_date: '1776',
    preview: 'BRISSON (1775-1776): Lorient → Mascareignes → Inde → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1776',
    to_date: '1776',
    preview: 'BRISSON (1775-1776): Lorient → Mascareignes → Inde → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1778',
    to_date: '1780',
    preview: 'BRISSON (1778-1780): Lorient → Madère → Mascareignes et Pondichéry → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1780',
    to_date: '1780',
    preview: 'BRISSON (1778-1780): Lorient → Madère → Mascareignes et Pondichéry → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1780',
    to_date: '1780',
    preview: 'BRISSON (1778-1780): Lorient → Madère → Mascareignes et Pondichéry → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1781',
    to_date: '1781',
    preview: 'BRISSON (1781-1781): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1746',
    to_date: '1747',
    preview: 'BRISTOL (1746-1747): Brest → Rochefort → La Corogne → Port-Louis'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1749',
    to_date: '1751',
    preview: 'BRISTOL (1749-1751): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1751',
    to_date: '1751',
    preview: 'BRISTOL (1749-1751): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1751',
    to_date: '1751',
    preview: 'BRISTOL (1749-1751): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1751',
    to_date: '1751',
    preview: 'BRISTOL (1749-1751): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1751',
    to_date: '1751',
    preview: 'BRISTOL (1749-1751): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1749',
    to_date: '1751',
    preview: 'BRISTOL (1749-1751): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1751',
    to_date: '1751',
    preview: 'BRISTOL (1749-1751): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1751',
    to_date: '1751',
    preview: 'BRISTOL (1749-1751): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1751',
    to_date: '1751',
    preview: 'BRISTOL (1749-1751): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1751',
    to_date: '1751',
    preview: 'BRISTOL (1749-1751): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1752',
    to_date: '1753',
    preview: 'BRISTOL (1752-1753): Lorient → Brésil → Inde et Mascareignes → Fernando de Noronha → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1753',
    to_date: '1753',
    preview: 'BRISTOL (1752-1753): Lorient → Brésil → Inde et Mascareignes → Fernando de Noronha → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1753',
    to_date: '1753',
    preview: 'BRISTOL (1752-1753): Lorient → Brésil → Inde et Mascareignes → Fernando de Noronha → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1754',
    to_date: '1756',
    preview: 'BRISTOL (1754-1756): Lorient → Gorée → Madagascar et Mascareignes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1756',
    to_date: '1756',
    preview: 'BRISTOL (1754-1756): Lorient → Gorée → Madagascar et Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1756',
    to_date: '1756',
    preview: 'BRISTOL (1754-1756): Lorient → Gorée → Madagascar et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1756',
    to_date: '1756',
    preview: 'BRISTOL (1754-1756): Lorient → Gorée → Madagascar et Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1756',
    to_date: '1756',
    preview: 'BRISTOL (1754-1756): Lorient → Gorée → Madagascar et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1756',
    to_date: '1756',
    preview: 'BRISTOL (1754-1756): Lorient → Gorée → Madagascar et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1756',
    to_date: '1759',
    preview: 'BRISTOL (1756-1759): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1759',
    to_date: '1759',
    preview: 'BRISTOL (1756-1759): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1743',
    to_date: '1747',
    preview: 'BROCHET (1743-1747): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1776',
    to_date: '1777',
    preview: 'GÊNOIS (1776-1777): Marseille → îles de France et de Bourbon → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1777',
    to_date: '1777',
    preview: 'GÊNOIS (1776-1777): Marseille → îles de France et de Bourbon → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1778',
    to_date: '1779',
    preview: 'GÉNOIS (1778-1779): Lorient → Le Havre → Lisbonne → Juda → Cayenne → ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1769',
    to_date: '1771',
    preview: 'GÉRION (1769-1771): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1771',
    to_date: '1771',
    preview: 'GÉRION (1769-1771): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1744',
    to_date: '1744',
    preview: 'GAZELLE (1744-1744): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1744',
    to_date: '1744',
    preview: 'GAZELLE (1744-1744): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1723',
    to_date: '1724',
    preview: 'GALATÉE ou GALATHÉE (1723-1724): Lorient → Cap-Français → Louisiane → La Rochelle → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1724',
    to_date: '1724',
    preview: 'GALATÉE ou GALATHÉE (1723-1724): Lorient → Cap-Français → Louisiane → La Rochelle → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'GALATÉE ou GALATHÉE (1723-1724): Lorient → Cap-Français → Louisiane → La Rochelle → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1725',
    to_date: '1727',
    preview: 'GALATÉE ou GALATHÉE (1725-1727): Lorient → Canaries → Juda → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1727',
    to_date: '1727',
    preview: 'GALATÉE ou GALATHÉE (1725-1727): Lorient → Canaries → Juda → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1727',
    to_date: '1727',
    preview: 'GALATÉE ou GALATHÉE (1725-1727): Lorient → Canaries → Juda → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1728',
    to_date: '1730',
    preview: 'GALATÉE ou GALATHÉE (1728-1730): Lorient → Sénégal et Gorée → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1730',
    to_date: '1730',
    preview: 'GALATÉE ou GALATHÉE (1728-1730): Lorient → Sénégal et Gorée → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1730',
    to_date: '1730',
    preview: 'GALATÉE ou GALATHÉE (1728-1730): Lorient → Sénégal et Gorée → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1730',
    to_date: '1730',
    preview: 'GALATÉE ou GALATHÉE (1728-1730): Lorient → Sénégal et Gorée → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1730',
    to_date: '1730',
    preview: 'GALATÉE ou GALATHÉE (1728-1730): Lorient → Sénégal et Gorée → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1731',
    to_date: '1732',
    preview: 'GALATÉE ou GALATHÉE (1731-1732): Lorient → Bordeaux → Cap-Vert → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1732',
    to_date: '1732',
    preview: 'GALATÉE ou GALATHÉE (1731-1732): Lorient → Bordeaux → Cap-Vert → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1732',
    to_date: '1732',
    preview: 'GALATÉE ou GALATHÉE (1731-1732): Lorient → Bordeaux → Cap-Vert → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1732',
    to_date: '1732',
    preview: 'GALATÉE ou GALATHÉE (1731-1732): Lorient → Bordeaux → Cap-Vert → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1733',
    to_date: '1735',
    preview: 'GALATÉE ou GALATHÉE (1733-1735): Lorient → Bordeaux → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1735',
    to_date: '1735',
    preview: 'GALATÉE ou GALATHÉE (1733-1735): Lorient → Bordeaux → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1735',
    to_date: '1735',
    preview: 'GALATÉE ou GALATHÉE (1733-1735): Lorient → Bordeaux → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1735',
    to_date: '1735',
    preview: 'GALATÉE ou GALATHÉE (1733-1735): Lorient → Bordeaux → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1735',
    to_date: '1735',
    preview: 'GALATÉE ou GALATHÉE (1733-1735): Lorient → Bordeaux → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1753',
    to_date: '1756',
    preview: 'GALATÉE ou GALATHÉE (1753-1756): Lorient → Cap-Vert → Brésil → Mascareignes → Inde → vaisseau de côte'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1756',
    to_date: '1756',
    preview: 'GALATÉE ou GALATHÉE (1753-1756): Lorient → Cap-Vert → Brésil → Mascareignes → Inde → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1756',
    to_date: '1756',
    preview: 'GALATÉE ou GALATHÉE (1753-1756): Lorient → Cap-Vert → Brésil → Mascareignes → Inde → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1754',
    to_date: '1757',
    preview: 'GANGE (1754-1757): Lorient → Inde et Mascareignes → Madagascar → Le Passage'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1757',
    to_date: '1757',
    preview: 'GANGE (1754-1757): Lorient → Inde et Mascareignes → Madagascar → Le Passage'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1757',
    to_date: '1757',
    preview: 'GANGE (1754-1757): Lorient → Inde et Mascareignes → Madagascar → Le Passage'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1759',
    to_date: '1762',
    preview: 'GANGE (1759-1762): Lorient → Brésil → Mascareignes et cap de Bonne-Espérance → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1762',
    to_date: '1762',
    preview: 'GANGE (1759-1762): Lorient → Brésil → Mascareignes et cap de Bonne-Espérance → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1762',
    preview: 'GANGE (1759-1762): Lorient → Brésil → Mascareignes et cap de Bonne-Espérance → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1762',
    to_date: '1762',
    preview: 'GANGE (1759-1762): Lorient → Brésil → Mascareignes et cap de Bonne-Espérance → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1762',
    preview: 'GANGE (1759-1762): Lorient → Brésil → Mascareignes et cap de Bonne-Espérance → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1762',
    to_date: '1762',
    preview: 'GANGE (1759-1762): Lorient → Brésil → Mascareignes et cap de Bonne-Espérance → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1762',
    preview: 'GANGE (1759-1762): Lorient → Brésil → Mascareignes et cap de Bonne-Espérance → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1762',
    to_date: '1762',
    preview: 'GANGE (1759-1762): Lorient → Brésil → Mascareignes et cap de Bonne-Espérance → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1762',
    preview: 'GANGE (1759-1762): Lorient → Brésil → Mascareignes et cap de Bonne-Espérance → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1762',
    to_date: '1762',
    preview: 'GANGE (1759-1762): Lorient → Brésil → Mascareignes et cap de Bonne-Espérance → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1762',
    preview: 'GANGE (1759-1762): Lorient → Brésil → Mascareignes et cap de Bonne-Espérance → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1762',
    to_date: '1762',
    preview: 'GANGE (1759-1762): Lorient → Brésil → Mascareignes et cap de Bonne-Espérance → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1769',
    to_date: '1770',
    preview: 'GANGE (1769-1770): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1770',
    to_date: '1770',
    preview: 'GANGE (1769-1770): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1770',
    to_date: '1770',
    preview: 'GANGE (1769-1770): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1771',
    to_date: '1772',
    preview: 'GANGE (1771-1772): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1772',
    to_date: '1772',
    preview: 'GANGE (1771-1772): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1772',
    to_date: '1772',
    preview: 'GANGE (1771-1772): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1773',
    to_date: '1775',
    preview: 'GANGE (1773-1775): Lorient → Pondichéry → Mahé et côte ouest de l’Inde → Chine → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1775',
    to_date: '1775',
    preview: 'GANGE (1773-1775): Lorient → Pondichéry → Mahé et côte ouest de l’Inde → Chine → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1776',
    to_date: '1777',
    preview: 'GANGE (1776-1777): Lorient → Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1777',
    to_date: '1777',
    preview: 'GANGE (1776-1777): Lorient → Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1780',
    to_date: '1780',
    preview: 'GANGE (1780-1780): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1722',
    preview: 'GARONNE (1720-1722): Lorient → Louisiane → Antilles → Rochefort'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1722',
    to_date: '1722',
    preview: 'GARONNE (1720-1722): Lorient → Louisiane → Antilles → Rochefort'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1722',
    to_date: '1722',
    preview: 'GARONNE (1720-1722): Lorient → Louisiane → Antilles → Rochefort'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1767',
    to_date: '1767',
    preview: 'GARONNE (1767-1767): Lorient → Mascareignes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1788',
    to_date: '1788',
    preview: 'GARONNE (1788-1788): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1759',
    to_date: '1760',
    preview: 'GEORGES (1759-1760): Saint-Malo → Brest → Port-Louis'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1748',
    to_date: '1748',
    preview: 'GIRALDUS ou GÉRARDUS OU GERARDUS (1748-1748): Lorient pour l\'Inde'
  },
  {
    from: 'Madagascar',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1721',
    preview: 'GIRONDE (1720-1721): Port-Louis → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1721',
    to_date: '1721',
    preview: 'GIRONDE (1720-1721): Port-Louis → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1721',
    to_date: '1722',
    preview: 'GIRONDE (1721-1722): Lorient → La Rochelle →  Antilles ? → Rochefort'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1722',
    to_date: '1722',
    preview: 'GIRONDE (1721-1722): Lorient → La Rochelle →  Antilles ? → Rochefort'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1724',
    to_date: '1725',
    preview: 'GIRONDE (1724-1725): Lorient → Ténériffe → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1725',
    to_date: '1725',
    preview: 'GIRONDE (1724-1725): Lorient → Ténériffe → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1725',
    to_date: '1725',
    preview: 'GIRONDE (1724-1725): Lorient → Ténériffe → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1725',
    to_date: '1725',
    preview: 'GIRONDE (1724-1725): Lorient → Ténériffe → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1725',
    to_date: '1725',
    preview: 'GIRONDE (1724-1725): Lorient → Ténériffe → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1726',
    to_date: '1726',
    preview: 'GIRONDE (1726-1726): Lorient → Lisbonne → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'GIRONDE (1726-1726): Lorient → Lisbonne → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1727',
    to_date: '1728',
    preview: 'GIRONDE (1727-1728): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1728',
    to_date: '1728',
    preview: 'GIRONDE (1727-1728): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1728',
    to_date: '1728',
    preview: 'GIRONDE (1727-1728): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1728',
    to_date: '1728',
    preview: 'GIRONDE (1727-1728): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1730',
    to_date: '1731',
    preview: 'GIRONDE (1730-1731): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1731',
    to_date: '1731',
    preview: 'GIRONDE (1730-1731): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1731',
    to_date: '1731',
    preview: 'GIRONDE (1730-1731): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1731',
    to_date: '1731',
    preview: 'GIRONDE (1730-1731): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1733',
    to_date: '1735',
    preview: 'GIRONDE (1733-1735): Lorient → Sénégal → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1735',
    to_date: '1735',
    preview: 'GIRONDE (1733-1735): Lorient → Sénégal → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1735',
    to_date: '1735',
    preview: 'GIRONDE (1733-1735): Lorient → Sénégal → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1736',
    to_date: '1736',
    preview: 'GLOIRE (1736-1736): Lorient → Sénégal → Açores → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1736',
    to_date: '1736',
    preview: 'GLOIRE (1736-1736): Lorient → Sénégal → Açores → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1737',
    to_date: '1737',
    preview: 'GLOIRE (1737-1737): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1737',
    to_date: '1737',
    preview: 'GLOIRE (1737-1737): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1738',
    to_date: '1738',
    preview: 'GLOIRE (1738-1738): Lorient → Sénégal → Brest → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1738',
    to_date: '1738',
    preview: 'GLOIRE (1738-1738): Lorient → Sénégal → Brest → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1739',
    to_date: '1740',
    preview: 'GLOIRE (1739-1740): Lorient → Sénégal et Gorée → Martinique → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1740',
    to_date: '1740',
    preview: 'GLOIRE (1739-1740): Lorient → Sénégal et Gorée → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1740',
    to_date: '1740',
    preview: 'GLOIRE (1739-1740): Lorient → Sénégal et Gorée → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1741',
    to_date: '1741',
    preview: 'GLOIRE (1741-1741): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1741',
    to_date: '1741',
    preview: 'GLOIRE (1741-1741): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1741',
    to_date: '1741',
    preview: 'GLOIRE (1741-1741): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1742',
    to_date: '1743',
    preview: 'GLOIRE (1742-1743): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1743',
    to_date: '1743',
    preview: 'GLOIRE (1742-1743): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1743',
    to_date: '1743',
    preview: 'GLOIRE (1742-1743): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1745',
    to_date: '1746',
    preview: 'GLOIRE (1745-1746): Lorient → Bordeaux → ? → Saint-Domingue'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1753',
    to_date: '1755',
    preview: 'GLOIRE (1753-1755): Lorient → Cap-Vert → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1755',
    to_date: '1755',
    preview: 'GLOIRE (1753-1755): Lorient → Cap-Vert → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1755',
    to_date: '1755',
    preview: 'GLOIRE (1753-1755): Lorient → Cap-Vert → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1755',
    to_date: '1755',
    preview: 'GLOIRE (1753-1755): Lorient → Cap-Vert → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1755',
    to_date: '1761',
    preview: 'GLOIRE (1755-1761): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1761',
    to_date: '1761',
    preview: 'GLOIRE (1755-1761): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1761',
    preview: 'GLOIRE (1755-1761): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1761',
    to_date: '1761',
    preview: 'GLOIRE (1755-1761): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1761',
    preview: 'GLOIRE (1755-1761): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1761',
    to_date: '1761',
    preview: 'GLOIRE (1755-1761): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1759',
    to_date: '1760',
    preview: 'GRACIEUSE (1759-1760): Lorient → Inde → Nantes'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1760',
    to_date: '1760',
    preview: 'GRACIEUSE (1759-1760): Lorient → Inde → Nantes'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1762',
    to_date: '1764',
    preview: 'GRACIEUSE (1762-1764): Nantes → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1764',
    preview: 'GRACIEUSE (1762-1764): Nantes → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1764',
    to_date: '1764',
    preview: 'GRACIEUSE (1762-1764): Nantes → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1764',
    to_date: '1764',
    preview: 'GRACIEUSE (1762-1764): Nantes → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1764',
    to_date: '1765',
    preview: 'GRACIEUSE (1764-1765): Lorient → Inde et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1765',
    to_date: '1765',
    preview: 'GRACIEUSE (1764-1765): Lorient → Inde et Mascareignes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1773',
    to_date: '1775',
    preview: 'GRACIEUX (1773-1775): Le Havre → Cadix → Île de France → Moka → Pondichéry → Île de France → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1775',
    to_date: '1775',
    preview: 'GRACIEUX (1773-1775): Le Havre → Cadix → Île de France → Moka → Pondichéry → Île de France → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1775',
    to_date: '1775',
    preview: 'GRACIEUX (1773-1775): Le Havre → Cadix → Île de France → Moka → Pondichéry → Île de France → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1775',
    to_date: '1775',
    preview: 'GRACIEUX (1773-1775): Le Havre → Cadix → Île de France → Moka → Pondichéry → Île de France → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1750',
    to_date: '1750',
    preview: 'GRAND GÉDÉON (1750-1750): Nantes → Paimboeuf → Port-Louis'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1783',
    to_date: '1783',
    preview: 'GRAND DUC DE TOSCANE (1783-1783): Lorient → Inde ?'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1757',
    to_date: '1758',
    preview: 'GRAND SAINT-JEAN-BAPTISTE (1757-1758): Bordeaux → Cap-Français → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1758',
    to_date: '1758',
    preview: 'GRAND SAINT-JEAN-BAPTISTE (1757-1758): Bordeaux → Cap-Français → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1758',
    to_date: '1758',
    preview: 'GRAND SAINT-JEAN-BAPTISTE (1758-1758): Port-Louis → Bordeaux ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1732',
    to_date: '1733',
    preview: 'GRIFFON (1732-1733): Lorient → Ténériffe → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1733',
    to_date: '1733',
    preview: 'GRIFFON (1732-1733): Lorient → Ténériffe → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1733',
    to_date: '1733',
    preview: 'GRIFFON (1732-1733): Lorient → Ténériffe → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1735',
    to_date: '1737',
    preview: 'GRIFFON (1735-1737): Lorient → Madagascar, Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1737',
    to_date: '1737',
    preview: 'GRIFFON (1735-1737): Lorient → Madagascar, Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1737',
    to_date: '1737',
    preview: 'GRIFFON (1735-1737): Lorient → Madagascar, Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1737',
    to_date: '1737',
    preview: 'GRIFFON (1735-1737): Lorient → Madagascar, Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1737',
    to_date: '1737',
    preview: 'GRIFFON (1735-1737): Lorient → Madagascar, Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1737',
    to_date: '1737',
    preview: 'GRIFFON (1735-1737): Lorient → Madagascar, Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1737',
    to_date: '1737',
    preview: 'GRIFFON (1735-1737): Lorient → Madagascar, Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1737',
    to_date: '1737',
    preview: 'GRIFFON (1735-1737): Lorient → Madagascar, Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1737',
    to_date: '1737',
    preview: 'GRIFFON (1735-1737): Lorient → Madagascar, Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1738',
    to_date: '1739',
    preview: 'GRIFFON (1738-1739): Lorient → Sénégal → Mascareignes'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'GRIFFON (1738-1739): Lorient → Sénégal → Mascareignes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1740',
    to_date: '1741',
    preview: 'GRIFFON (1740-1741): Lorient → Mascareignes et Madagascar'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1741',
    to_date: '1741',
    preview: 'GRIFFON (1740-1741): Lorient → Mascareignes et Madagascar'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1741',
    to_date: '1741',
    preview: 'GRIFFON (1741-1741): Lorient pour les Mascareignes'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1781',
    to_date: '1782',
    preview: 'GUALBERT (1781-1782): Port-au-Prince → Espagne → La Rochelle → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1767',
    to_date: '1767',
    preview: 'DOYARD (1767-1767): Nantes → Indes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1723',
    to_date: '1724',
    preview: 'DAUPHIN (1723-1724): Lorient → Sénégal → Juda → Martinique'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1724',
    to_date: '1724',
    preview: 'DAUPHIN (1723-1724): Lorient → Sénégal → Juda → Martinique'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1731',
    to_date: '1732',
    preview: 'DAUPHIN (1731-1732): Pondichéry → Mascareignes → Pondichéry'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1732',
    to_date: '1732',
    preview: 'DAUPHIN (1731-1732): Pondichéry → Mascareignes → Pondichéry'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1731',
    to_date: '1733',
    preview: 'DAUPHIN (1731-1733): Lorient → Cadix → Ténériffe → Cap de Bonne-Espérance → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1733',
    to_date: '1733',
    preview: 'DAUPHIN (1731-1733): Lorient → Cadix → Ténériffe → Cap de Bonne-Espérance → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1733',
    to_date: '1733',
    preview: 'DAUPHIN (1731-1733): Lorient → Cadix → Ténériffe → Cap de Bonne-Espérance → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1733',
    to_date: '1733',
    preview: 'DAUPHIN (1731-1733): Lorient → Cadix → Ténériffe → Cap de Bonne-Espérance → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1733',
    to_date: '1733',
    preview: 'DAUPHIN (1731-1733): Lorient → Cadix → Ténériffe → Cap de Bonne-Espérance → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1733',
    to_date: '1735',
    preview: 'DAUPHIN (1733-1735): Lorient → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1735',
    to_date: '1735',
    preview: 'DAUPHIN (1733-1735): Lorient → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1735',
    to_date: '1735',
    preview: 'DAUPHIN (1733-1735): Lorient → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1735',
    to_date: '1735',
    preview: 'DAUPHIN (1733-1735): Lorient → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1735',
    to_date: '1735',
    preview: 'DAUPHIN (1733-1735): Lorient → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1735',
    to_date: '1735',
    preview: 'DAUPHIN (1733-1735): Lorient → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1736',
    to_date: '1737',
    preview: 'DAUPHIN (1736-1737): Lorient → Cap-Vert → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1737',
    to_date: '1737',
    preview: 'DAUPHIN (1736-1737): Lorient → Cap-Vert → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1737',
    to_date: '1737',
    preview: 'DAUPHIN (1736-1737): Lorient → Cap-Vert → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1737',
    to_date: '1737',
    preview: 'DAUPHIN (1736-1737): Lorient → Cap-Vert → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1737',
    to_date: '1737',
    preview: 'DAUPHIN (1736-1737): Lorient → Cap-Vert → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1738',
    to_date: '1739',
    preview: 'DAUPHIN (1738-1739): Lorient → Île de France → Inde'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1739',
    to_date: '1739',
    preview: 'DAUPHIN (1738-1739): Lorient → Île de France → Inde'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1743',
    to_date: '1745',
    preview: 'DAUPHIN (1743-1745): Lorient → Cap de Bonne-Espérance → Inde → Chine'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1717',
    to_date: '1718',
    preview: 'DAUPHINE (1717-1718): La Rochelle → Louisiane → La Rochelle ?'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1718',
    to_date: '1718',
    preview: 'DAUPHINE (1717-1718): La Rochelle → Louisiane → La Rochelle ?'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1719',
    to_date: '1719',
    preview: 'DAUPHINE (1719-1719): La Rochelle → Louisiane'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1751',
    to_date: '1751',
    preview: 'DAMEL (1751-1751): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1721',
    to_date: '1723',
    preview: 'DANAÉ (1721-1723): Lorient → Mascareignes → Poulo-Condor → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1723',
    to_date: '1723',
    preview: 'DANAÉ (1721-1723): Lorient → Mascareignes → Poulo-Condor → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1724',
    to_date: '1727',
    preview: 'DANAÉ (1724-1727): Lorient → Cadix → Madagascar et Comores → Inde et Mascareignes → Ascension → Martinique → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1727',
    to_date: '1727',
    preview: 'DANAÉ (1724-1727): Lorient → Cadix → Madagascar et Comores → Inde et Mascareignes → Ascension → Martinique → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1727',
    to_date: '1727',
    preview: 'DANAÉ (1724-1727): Lorient → Cadix → Madagascar et Comores → Inde et Mascareignes → Ascension → Martinique → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1727',
    to_date: '1727',
    preview: 'DANAÉ (1724-1727): Lorient → Cadix → Madagascar et Comores → Inde et Mascareignes → Ascension → Martinique → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1727',
    to_date: '1727',
    preview: 'DANAÉ (1724-1727): Lorient → Cadix → Madagascar et Comores → Inde et Mascareignes → Ascension → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1727',
    to_date: '1727',
    preview: 'DANAÉ (1724-1727): Lorient → Cadix → Madagascar et Comores → Inde et Mascareignes → Ascension → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1728',
    to_date: '1730',
    preview: 'DANAÉ (1728-1730): Lorient → Cadix → Madagascar → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1730',
    to_date: '1730',
    preview: 'DANAÉ (1728-1730): Lorient → Cadix → Madagascar → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1730',
    to_date: '1730',
    preview: 'DANAÉ (1728-1730): Lorient → Cadix → Madagascar → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1730',
    to_date: '1730',
    preview: 'DANAÉ (1728-1730): Lorient → Cadix → Madagascar → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1730',
    to_date: '1730',
    preview: 'DANAÉ (1728-1730): Lorient → Cadix → Madagascar → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1730',
    to_date: '1732',
    preview: 'DANAÉ (1730-1732): Lorient → Cap de Bonne-Espérance → Chine → Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1732',
    to_date: '1732',
    preview: 'DANAÉ (1730-1732): Lorient → Cap de Bonne-Espérance → Chine → Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1732',
    to_date: '1732',
    preview: 'DANAÉ (1730-1732): Lorient → Cap de Bonne-Espérance → Chine → Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1733',
    to_date: '1734',
    preview: 'DANAÉ (1733-1734): Lorient → Inde et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1734',
    to_date: '1734',
    preview: 'DANAÉ (1733-1734): Lorient → Inde et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1734',
    to_date: '1734',
    preview: 'DANAÉ (1733-1734): Lorient → Inde et Mascareignes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1755',
    to_date: '1756',
    preview: 'DANAÉ (1755-1756): Lorient → Cadix → Mascareignes → Inde'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1756',
    to_date: '1756',
    preview: 'DANAÉ (1755-1756): Lorient → Cadix → Mascareignes → Inde'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1747',
    to_date: '1747',
    preview: 'DARTMOUTH (1747-1747): Navire de Nantes affrété par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1719',
    to_date: '1720',
    preview: 'DEUX COURONNES (1719-1720): Saint-Malo → Inde → Port-Louis'
  },
  {
    from: 'India',
    to: 'Madagascar',
    from_date: '1720',
    to_date: '1720',
    preview: 'DEUX COURONNES (1719-1720): Saint-Malo → Inde → Port-Louis'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1784',
    to_date: '1785',
    preview: 'DEUX COUSINS (1784-1785): Lorient → Ténériffe → île de France → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1785',
    to_date: '1785',
    preview: 'DEUX COUSINS (1784-1785): Lorient → Ténériffe → île de France → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1719',
    to_date: '1720',
    preview: 'DEUX FRÈRES (1719-1720): Lorient → Louisiane → Lorient ou La Rochelle ?'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'DEUX FRÈRES (1719-1720): Lorient → Louisiane → Lorient ou La Rochelle ?'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1721',
    preview: 'DEUX FRÈRES (1720-1721): La Rochelle → Lorient → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1721',
    preview: 'DEUX FRÈRES (1720-1721): La Rochelle → Lorient → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1721',
    to_date: '1721',
    preview: 'DEUX FRÈRES (1720-1721): La Rochelle → Lorient → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1722',
    to_date: '1723',
    preview: 'DEUX FRÈRES (1722-1723): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1723',
    to_date: '1723',
    preview: 'DEUX FRÈRES (1722-1723): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1723',
    to_date: '1723',
    preview: 'DEUX FRÈRES (1722-1723): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1723',
    to_date: '1723',
    preview: 'DEUX FRÈRES (1722-1723): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1725',
    to_date: '1725',
    preview: 'DEUX FRÈRES (1725-1725): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1725',
    to_date: '1725',
    preview: 'DEUX FRÈRES (1725-1725): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1727',
    to_date: '1728',
    preview: 'DEUX FRÈRES (1727-1728): Lorient → Louisiane → Saint-Domingue'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1728',
    to_date: '1728',
    preview: 'DEUX FRÈRES (1727-1728): Lorient → Louisiane → Saint-Domingue'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1785',
    to_date: '1785',
    preview: 'DEUX FRÈRES (1785-1785): Lorient → île de France et Inde ?'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1785',
    to_date: '1785',
    preview: 'DEUX FRÈRES (1785-1785): Lorient → île de France et Inde ?'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1766',
    to_date: '1767',
    preview: 'DEUX SŒURS (1766-1767): Saint-Malo → Terre-Neuve → Marseille → Port-Louis'
  },
  {
    from: 'New France',
    to: 'France',
    from_date: '1767',
    to_date: '1767',
    preview: 'DEUX SŒURS (1766-1767): Saint-Malo → Terre-Neuve → Marseille → Port-Louis'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1767',
    to_date: '1767',
    preview: 'DEUX SŒURS (1766-1767): Saint-Malo → Terre-Neuve → Marseille → Port-Louis'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1721',
    to_date: '1724',
    preview: 'DIANE (1721-1724): Lorient → Santiago → Île Grande → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1724',
    to_date: '1724',
    preview: 'DIANE (1721-1724): Lorient → Santiago → Île Grande → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1724',
    to_date: '1724',
    preview: 'DIANE (1721-1724): Lorient → Santiago → Île Grande → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1724',
    to_date: '1724',
    preview: 'DIANE (1721-1724): Lorient → Santiago → Île Grande → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'DIANE (1721-1724): Lorient → Santiago → Île Grande → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1724',
    to_date: '1726',
    preview: 'DIANE (1724-1726): Lorient → Angola → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'DIANE (1724-1726): Lorient → Angola → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1727',
    to_date: '1729',
    preview: 'DIANE (1727-1729): Lorient → Juda → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1729',
    to_date: '1729',
    preview: 'DIANE (1727-1729): Lorient → Juda → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1729',
    to_date: '1729',
    preview: 'DIANE (1727-1729): Lorient → Juda → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1729',
    to_date: '1729',
    preview: 'DIANE (1727-1729): Lorient → Juda → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1729',
    to_date: '1731',
    preview: 'DIANE (1729-1731): Lorient → Ténériffe → Sénégal et Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1731',
    to_date: '1731',
    preview: 'DIANE (1729-1731): Lorient → Ténériffe → Sénégal et Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1731',
    to_date: '1731',
    preview: 'DIANE (1729-1731): Lorient → Ténériffe → Sénégal et Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1731',
    to_date: '1731',
    preview: 'DIANE (1729-1731): Lorient → Ténériffe → Sénégal et Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1731',
    to_date: '1731',
    preview: 'DIANE (1729-1731): Lorient → Ténériffe → Sénégal et Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1731',
    to_date: '1731',
    preview: 'DIANE (1729-1731): Lorient → Ténériffe → Sénégal et Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1731',
    to_date: '1737',
    preview: 'DIANE (1731-1737): Lorient → Mascareignes et Madagascar → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1737',
    to_date: '1737',
    preview: 'DIANE (1731-1737): Lorient → Mascareignes et Madagascar → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1737',
    to_date: '1737',
    preview: 'DIANE (1731-1737): Lorient → Mascareignes et Madagascar → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1737',
    to_date: '1737',
    preview: 'DIANE (1731-1737): Lorient → Mascareignes et Madagascar → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1737',
    to_date: '1737',
    preview: 'DIANE (1731-1737): Lorient → Mascareignes et Madagascar → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1737',
    to_date: '1737',
    preview: 'DIANE (1731-1737): Lorient → Mascareignes et Madagascar → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1737',
    to_date: '1737',
    preview: 'DIANE (1731-1737): Lorient → Mascareignes et Madagascar → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1737',
    to_date: '1737',
    preview: 'DIANE (1731-1737): Lorient → Mascareignes et Madagascar → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1737',
    to_date: '1737',
    preview: 'DIANE (1731-1737): Lorient → Mascareignes et Madagascar → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1750',
    to_date: '1751',
    preview: 'DIANE ex  (1750-1751): Lorient → Cap-Vert → Mascareignes → Anjouan → Inde → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1751',
    to_date: '1751',
    preview: 'DIANE ex  (1750-1751): Lorient → Cap-Vert → Mascareignes → Anjouan → Inde → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1751',
    to_date: '1751',
    preview: 'DIANE ex  (1750-1751): Lorient → Cap-Vert → Mascareignes → Anjouan → Inde → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1751',
    to_date: '1751',
    preview: 'DIANE ex  (1750-1751): Lorient → Cap-Vert → Mascareignes → Anjouan → Inde → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Louisiana',
    from_date: '1751',
    to_date: '1751',
    preview: 'DIANE ex  (1750-1751): Lorient → Cap-Vert → Mascareignes → Anjouan → Inde → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1751',
    to_date: '1751',
    preview: 'DIANE ex  (1750-1751): Lorient → Cap-Vert → Mascareignes → Anjouan → Inde → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1751',
    to_date: '1753',
    preview: 'DIANE ex  (1751-1753): Lorient → Gorée → Anjouan → Inde et Mascareignes → Brésil → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1753',
    to_date: '1753',
    preview: 'DIANE ex  (1751-1753): Lorient → Gorée → Anjouan → Inde et Mascareignes → Brésil → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1753',
    to_date: '1753',
    preview: 'DIANE ex  (1751-1753): Lorient → Gorée → Anjouan → Inde et Mascareignes → Brésil → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1753',
    to_date: '1753',
    preview: 'DIANE ex  (1751-1753): Lorient → Gorée → Anjouan → Inde et Mascareignes → Brésil → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1753',
    to_date: '1753',
    preview: 'DIANE ex  (1751-1753): Lorient → Gorée → Anjouan → Inde et Mascareignes → Brésil → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1768',
    to_date: '1771',
    preview: 'DIGUE (1768-1771): Lorient → Mascareignes et Seychelles → Inde → Birmanie -Inde → Mascareigne → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1771',
    to_date: '1771',
    preview: 'DIGUE (1768-1771): Lorient → Mascareignes et Seychelles → Inde → Birmanie -Inde → Mascareigne → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1771',
    to_date: '1771',
    preview: 'DIGUE (1768-1771): Lorient → Mascareignes et Seychelles → Inde → Birmanie -Inde → Mascareigne → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1772',
    to_date: '1773',
    preview: 'DIGUE (1772-1773): Lorient → île de France → Cap de Bonne-Espérance → Port-Louis → Nantes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1773',
    to_date: '1773',
    preview: 'DIGUE (1772-1773): Lorient → île de France → Cap de Bonne-Espérance → Port-Louis → Nantes'
  },
  {
    from: 'Louisiana',
    to: 'Madagascar',
    from_date: '1773',
    to_date: '1773',
    preview: 'DIGUE (1772-1773): Lorient → île de France → Cap de Bonne-Espérance → Port-Louis → Nantes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1725',
    to_date: '1726',
    preview: 'DILIGENT (1725-1726): Brest → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1726',
    to_date: '1726',
    preview: 'DILIGENT (1725-1726): Brest → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'DILIGENT (1725-1726): Brest → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1726',
    to_date: '1727',
    preview: 'DILIGENT (1726-1727): Lorient → Juda et côtes de Guinée → Saint-Domingue'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1727',
    to_date: '1727',
    preview: 'DILIGENT (1726-1727): Lorient → Juda et côtes de Guinée → Saint-Domingue'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1781',
    to_date: '1782',
    preview: 'DILIGENT (1781-1782): Marseille → Alicante → Cadix → Martinique → Cap-Français → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'DILIGENT (1781-1782): Marseille → Alicante → Cadix → Martinique → Cap-Français → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1727',
    to_date: '1727',
    preview: 'DILIGENT POSTILLON (1727-1727): Lorient → Saint-Domingue → ?'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1721',
    preview: 'DILIGENTE (1720-1721): La Rochelle → Louisiane'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1761',
    preview: 'DILIGENTE (1760-1761): Lorient → Inde et Mascareignes → Brest'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1761',
    to_date: '1761',
    preview: 'DILIGENTE (1760-1761): Lorient → Inde et Mascareignes → Brest'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1761',
    preview: 'DILIGENTE (1760-1761): Lorient → Inde et Mascareignes → Brest'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1761',
    to_date: '1761',
    preview: 'DILIGENTE (1760-1761): Lorient → Inde et Mascareignes → Brest'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1777',
    to_date: '1778',
    preview: 'DILIGENTE (1777-1778): Lorient → îles de France et de Bourbon'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1720',
    preview: 'DRYADE ou DRIADE (1720-1720): Lorient → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1720',
    preview: 'DRYADE ou DRIADE (1720-1720): Lorient → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'DRYADE ou DRIADE (1720-1720): Lorient → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1725',
    to_date: '1727',
    preview: 'DRYADE ou DRIADE (1725-1727): Lorient → Gorée → Juda et côtes de Guinée → Brésil → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1727',
    to_date: '1727',
    preview: 'DRYADE ou DRIADE (1725-1727): Lorient → Gorée → Juda et côtes de Guinée → Brésil → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1727',
    to_date: '1727',
    preview: 'DRYADE ou DRIADE (1725-1727): Lorient → Gorée → Juda et côtes de Guinée → Brésil → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1748',
    to_date: '1749',
    preview: 'DRAGON (1748-1749): Navire de Nantes affrété par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1749',
    to_date: '1750',
    preview: 'DRAGON (1749-1750): Navire de Nantes affrété par la Compagnie des Indes'
  },
  {
    from: 'Madagascar',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1726',
    preview: 'DROMADAIRE (1720-1726): Port-Louis → Louisiane'
  },
  {
    from: 'Madagascar',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1726',
    preview: 'DROMADAIRE (1720-1726): Port-Louis → Louisiane'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1727',
    to_date: '1728',
    preview: 'DROMADAIRE (1727-1728): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1728',
    to_date: '1728',
    preview: 'DROMADAIRE (1727-1728): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1728',
    to_date: '1728',
    preview: 'DROMADAIRE (1727-1728): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1728',
    to_date: '1728',
    preview: 'DROMADAIRE (1727-1728): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1728',
    to_date: '1730',
    preview: 'DROMADAIRE (1728-1730): Lorient → Saint-Domingue → Louisiane → Lisbonne → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1730',
    to_date: '1730',
    preview: 'DROMADAIRE (1728-1730): Lorient → Saint-Domingue → Louisiane → Lisbonne → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1730',
    to_date: '1730',
    preview: 'DROMADAIRE (1728-1730): Lorient → Saint-Domingue → Louisiane → Lisbonne → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1731',
    to_date: '1732',
    preview: 'DROMADAIRE (1731-1732): Lorient → Saint-Domingue → Louisiane → Roscoff → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1732',
    to_date: '1732',
    preview: 'DROMADAIRE (1731-1732): Lorient → Saint-Domingue → Louisiane → Roscoff → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1732',
    to_date: '1732',
    preview: 'DROMADAIRE (1731-1732): Lorient → Saint-Domingue → Louisiane → Roscoff → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1733',
    to_date: '1735',
    preview: 'DROMADAIRE (1733-1735): Lorient → Juda et côtes de Guinée → Cayenne → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1735',
    to_date: '1735',
    preview: 'DROMADAIRE (1733-1735): Lorient → Juda et côtes de Guinée → Cayenne → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1735',
    to_date: '1735',
    preview: 'DROMADAIRE (1733-1735): Lorient → Juda et côtes de Guinée → Cayenne → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1759',
    to_date: '1761',
    preview: 'DROMADAIRE (1759-1761): Lorient → Mascareignes → La Corogne'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1761',
    to_date: '1761',
    preview: 'DROMADAIRE (1759-1761): Lorient → Mascareignes → La Corogne'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1762',
    to_date: '1762',
    preview: 'DROMADAIRE (1762-1762): Lorient → Mascareignes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1718',
    to_date: '1719',
    preview: 'DUC DU MAINE ou MAINE, GRAND DUC DU MAINE (1718-1719): Saint-Malo → Juda et côtes de Guinée → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1719',
    to_date: '1719',
    preview: 'DUC DU MAINE ou MAINE, GRAND DUC DU MAINE (1718-1719): Saint-Malo → Juda et côtes de Guinée → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1719',
    to_date: '1719',
    preview: 'DUC DU MAINE ou MAINE, GRAND DUC DU MAINE (1718-1719): Saint-Malo → Juda et côtes de Guinée → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1719',
    to_date: '1719',
    preview: 'DUC DU MAINE ou MAINE, GRAND DUC DU MAINE (1718-1719): Saint-Malo → Juda et côtes de Guinée → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Senegal',
    from_date: '1720',
    to_date: '1721',
    preview: 'DUC DU MAINE ou MAINE, GRAND DUC DU MAINE (1720-1721): Lorient → Juda → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1721',
    to_date: '1721',
    preview: 'DUC DU MAINE ou MAINE, GRAND DUC DU MAINE (1720-1721): Lorient → Juda → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1721',
    preview: 'DUC DU MAINE ou MAINE, GRAND DUC DU MAINE (1720-1721): Lorient → Juda → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1721',
    to_date: '1721',
    preview: 'DUC DU MAINE ou MAINE, GRAND DUC DU MAINE (1720-1721): Lorient → Juda → Antilles → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1722',
    to_date: '1723',
    preview: 'DUC DU MAINE ou MAINE, GRAND DUC DU MAINE (1722-1723): Lorient → Brest (?) → Arguin, Portendick → Sénégal et Gorée → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1723',
    to_date: '1723',
    preview: 'DUC DU MAINE ou MAINE, GRAND DUC DU MAINE (1722-1723): Lorient → Brest (?) → Arguin, Portendick → Sénégal et Gorée → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1724',
    to_date: '1724',
    preview: 'DUC DU MAINE ou MAINE, GRAND DUC DU MAINE (1724-1724): Lorient → Canaries → Arguin → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'DUC DU MAINE ou MAINE, GRAND DUC DU MAINE (1724-1724): Lorient → Canaries → Arguin → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1725',
    to_date: '1727',
    preview: 'DUC DU MAINE ou MAINE, GRAND DUC DU MAINE (1725-1727): Lorient → Angola → Antilles → Brest'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1727',
    to_date: '1727',
    preview: 'DUC DU MAINE ou MAINE, GRAND DUC DU MAINE (1725-1727): Lorient → Angola → Antilles → Brest'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1719',
    to_date: '1720',
    preview: 'DUC DE NOAILLES (1719-1720): Bayonne → La Rochelle → Louisiane → La Rochelle → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1720',
    preview: 'DUC DE NOAILLES (1719-1720): Bayonne → La Rochelle → Louisiane → La Rochelle → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'DUC DE NOAILLES (1719-1720): Bayonne → La Rochelle → Louisiane → La Rochelle → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1722',
    to_date: '1724',
    preview: 'DUC DE NOAILLES (1722-1724): Lorient → Sénégal et Gorée → Saint-Domingue → Paimboeuf → Nantes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1724',
    to_date: '1724',
    preview: 'DUC DE NOAILLES (1722-1724): Lorient → Sénégal et Gorée → Saint-Domingue → Paimboeuf → Nantes → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'DUC DE NOAILLES (1722-1724): Lorient → Sénégal et Gorée → Saint-Domingue → Paimboeuf → Nantes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1725',
    to_date: '1726',
    preview: 'DUC DE NOAILLES (1725-1726): Lorient → Juda → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1726',
    to_date: '1726',
    preview: 'DUC DE NOAILLES (1725-1726): Lorient → Juda → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'DUC DE NOAILLES (1725-1726): Lorient → Juda → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1727',
    to_date: '1728',
    preview: 'DUC DE NOAILLES (1727-1728): Lorient → Sénégal et Gorée → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1728',
    to_date: '1728',
    preview: 'DUC DE NOAILLES (1727-1728): Lorient → Sénégal et Gorée → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1728',
    to_date: '1728',
    preview: 'DUC DE NOAILLES (1727-1728): Lorient → Sénégal et Gorée → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1728',
    to_date: '1728',
    preview: 'DUC DE NOAILLES (1727-1728): Lorient → Sénégal et Gorée → Antilles → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1728',
    to_date: '1729',
    preview: 'DUC DE NOAILLES (1728-1729): Lorient → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1729',
    to_date: '1729',
    preview: 'DUC DE NOAILLES (1728-1729): Lorient → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1729',
    to_date: '1729',
    preview: 'DUC DE NOAILLES (1728-1729): Lorient → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1731',
    to_date: '1732',
    preview: 'DUC DE NOAILLES (1731-1732): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1732',
    to_date: '1732',
    preview: 'DUC DE NOAILLES (1731-1732): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1732',
    to_date: '1732',
    preview: 'DUC DE NOAILLES (1731-1732): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1732',
    to_date: '1732',
    preview: 'DUC DE NOAILLES (1731-1732): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1734',
    to_date: '1735',
    preview: 'DUC DE NOAILLES (1734-1735): Lorient → Sénégal et Gorée → Portendick → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1735',
    to_date: '1735',
    preview: 'DUC DE NOAILLES (1734-1735): Lorient → Sénégal et Gorée → Portendick → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1787',
    to_date: '1787',
    preview: 'DUC DE NORMANDIE (1787-1787): Lorient → Inde ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1789',
    to_date: '1789',
    preview: 'DUC DE NORMANDIE (1789-1789): Lorient → Inde → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1789',
    to_date: '1789',
    preview: 'DUC DE NORMANDIE (1789-1789): Lorient → Inde → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1752',
    to_date: '1752',
    preview: 'DUC DE BEAUFORT (1752-1752): Port-Louis → Bordeaux → Amérique ?'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1753',
    to_date: '1753',
    preview: 'DUC DE BEAUFORT (1753-1753): Bordeaux → cabotage → Port-Louis'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1754',
    to_date: '1754',
    preview: 'DUC DE BEAUFORT (1754-1754): Port-Louis → Nantes ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1756',
    to_date: '1760',
    preview: 'DUC DE BERRY (1756-1760): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'DUC DE BERRY (1756-1760): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1724',
    to_date: '1725',
    preview: 'DUC DE BOURBON (1724-1725): Bordeaux → Juda et côtes de Guinée → Martinique → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1725',
    to_date: '1725',
    preview: 'DUC DE BOURBON (1724-1725): Bordeaux → Juda et côtes de Guinée → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1725',
    to_date: '1725',
    preview: 'DUC DE BOURBON (1724-1725): Bordeaux → Juda et côtes de Guinée → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1729',
    to_date: '1730',
    preview: 'DUC DE BOURBON (1729-1730): Lorient → Sénégal et Gorée → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1730',
    to_date: '1730',
    preview: 'DUC DE BOURBON (1729-1730): Lorient → Sénégal et Gorée → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1730',
    to_date: '1730',
    preview: 'DUC DE BOURBON (1729-1730): Lorient → Sénégal et Gorée → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1730',
    to_date: '1730',
    preview: 'DUC DE BOURBON (1729-1730): Lorient → Sénégal et Gorée → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1730',
    to_date: '1731',
    preview: 'DUC DE BOURBON (1730-1731): Lorient → Portendick → Sénégal → Brest → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1731',
    to_date: '1731',
    preview: 'DUC DE BOURBON (1730-1731): Lorient → Portendick → Sénégal → Brest → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1732',
    to_date: '1733',
    preview: 'DUC DE BOURBON (1732-1733): Lorient → Sénégal et Gorée → Saint-Domingue'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1733',
    to_date: '1733',
    preview: 'DUC DE BOURBON (1732-1733): Lorient → Sénégal et Gorée → Saint-Domingue'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1735',
    to_date: '1736',
    preview: 'DUC DE BOURBON ou BOURBON (1735-1736): Lorient → Ténériffe → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1736',
    to_date: '1736',
    preview: 'DUC DE BOURBON ou BOURBON (1735-1736): Lorient → Ténériffe → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1736',
    to_date: '1736',
    preview: 'DUC DE BOURBON ou BOURBON (1735-1736): Lorient → Ténériffe → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1736',
    to_date: '1736',
    preview: 'DUC DE BOURBON ou BOURBON (1735-1736): Lorient → Ténériffe → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1736',
    to_date: '1736',
    preview: 'DUC DE BOURBON ou BOURBON (1735-1736): Lorient → Ténériffe → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1736',
    to_date: '1739',
    preview: 'DUC DE BOURBON ou BOURBON (1736-1739): Lorient → Inde et Mascareignes, Moka → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'DUC DE BOURBON ou BOURBON (1736-1739): Lorient → Inde et Mascareignes, Moka → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1739',
    to_date: '1739',
    preview: 'DUC DE BOURBON ou BOURBON (1736-1739): Lorient → Inde et Mascareignes, Moka → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1739',
    to_date: '1739',
    preview: 'DUC DE BOURBON ou BOURBON (1736-1739): Lorient → Inde et Mascareignes, Moka → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1740',
    to_date: '1742',
    preview: 'DUC DE BOURBON ou BOURBON (1740-1742): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1742',
    to_date: '1742',
    preview: 'DUC DE BOURBON ou BOURBON (1740-1742): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1742',
    to_date: '1742',
    preview: 'DUC DE BOURBON ou BOURBON (1740-1742): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1744',
    to_date: '1748',
    preview: 'DUC DE BOURBON ou BOURBON (1744-1748): Lorient → Inde et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1748',
    to_date: '1748',
    preview: 'DUC DE BOURBON ou BOURBON (1744-1748): Lorient → Inde et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1748',
    to_date: '1748',
    preview: 'DUC DE BOURBON ou BOURBON (1744-1748): Lorient → Inde et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1748',
    to_date: '1748',
    preview: 'DUC DE BOURBON ou BOURBON (1744-1748): Lorient → Inde et Mascareignes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1753',
    to_date: '1755',
    preview: 'DUC DE BOURGOGNE (1753-1755): Lorient → Gorée → Inde et Mascareignes → Angola → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1755',
    to_date: '1755',
    preview: 'DUC DE BOURGOGNE (1753-1755): Lorient → Gorée → Inde et Mascareignes → Angola → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1755',
    to_date: '1755',
    preview: 'DUC DE BOURGOGNE (1753-1755): Lorient → Gorée → Inde et Mascareignes → Angola → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1755',
    to_date: '1755',
    preview: 'DUC DE BOURGOGNE (1753-1755): Lorient → Gorée → Inde et Mascareignes → Angola → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1756',
    to_date: '1756',
    preview: 'DUC DE BOURGOGNE (1756-1756): Lorient pour l\'Inde'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1756',
    to_date: '1760',
    preview: 'DUC DE BOURGOGNE (1756-1760): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1760',
    to_date: '1760',
    preview: 'DUC DE BOURGOGNE (1756-1760): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1760',
    to_date: '1760',
    preview: 'DUC DE BOURGOGNE (1756-1760): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'DUC DE BOURGOGNE (1756-1760): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1760',
    to_date: '1760',
    preview: 'DUC DE BOURGOGNE (1756-1760): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'DUC DE BOURGOGNE (1756-1760): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1760',
    to_date: '1760',
    preview: 'DUC DE BOURGOGNE (1756-1760): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1760',
    to_date: '1760',
    preview: 'DUC DE BOURGOGNE (1756-1760): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'DUC DE BOURGOGNE (1756-1760): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1756',
    to_date: '1760',
    preview: 'DUC DE BOURGOGNE (1756-1760): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1760',
    to_date: '1760',
    preview: 'DUC DE BOURGOGNE (1756-1760): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1760',
    to_date: '1760',
    preview: 'DUC DE BOURGOGNE (1756-1760): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'DUC DE BOURGOGNE (1756-1760): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1760',
    to_date: '1760',
    preview: 'DUC DE BOURGOGNE (1756-1760): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'DUC DE BOURGOGNE (1756-1760): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1760',
    to_date: '1760',
    preview: 'DUC DE BOURGOGNE (1756-1760): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1760',
    to_date: '1760',
    preview: 'DUC DE BOURGOGNE (1756-1760): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'DUC DE BOURGOGNE (1756-1760): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1748',
    to_date: '1750',
    preview: 'DUC DE BÉTHUNE (1748-1750): Lorient → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1750',
    to_date: '1750',
    preview: 'DUC DE BÉTHUNE (1748-1750): Lorient → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1751',
    to_date: '1753',
    preview: 'DUC DE BÉTHUNE (1751-1753): Lorient → Brésil → Sumatra → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1753',
    to_date: '1753',
    preview: 'DUC DE BÉTHUNE (1751-1753): Lorient → Brésil → Sumatra → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1754',
    to_date: '1755',
    preview: 'DUC DE BÉTHUNE (1754-1755): Lorient → Gorée → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1755',
    to_date: '1755',
    preview: 'DUC DE BÉTHUNE (1754-1755): Lorient → Gorée → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1755',
    to_date: '1755',
    preview: 'DUC DE BÉTHUNE (1754-1755): Lorient → Gorée → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1755',
    to_date: '1755',
    preview: 'DUC DE BÉTHUNE (1754-1755): Lorient → Gorée → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1756',
    to_date: '1758',
    preview: 'DUC DE BÉTHUNE (1756-1758): Lorient → Sénégal et Gorée → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1758',
    to_date: '1758',
    preview: 'DUC DE BÉTHUNE (1756-1758): Lorient → Sénégal et Gorée → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1758',
    to_date: '1758',
    preview: 'DUC DE BÉTHUNE (1756-1758): Lorient → Sénégal et Gorée → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1758',
    to_date: '1758',
    preview: 'DUC DE BÉTHUNE (1756-1758): Lorient → Sénégal et Gorée → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1758',
    to_date: '1758',
    preview: 'DUC DE BÉTHUNE (1756-1758): Lorient → Sénégal et Gorée → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1758',
    to_date: '1758',
    preview: 'DUC DE BÉTHUNE (1756-1758): Lorient → Sénégal et Gorée → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1758',
    to_date: '1758',
    preview: 'DUC DE BÉTHUNE (1756-1758): Lorient → Sénégal et Gorée → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1724',
    to_date: '1726',
    preview: 'DUC DE CHARTRES (1724-1726): Lorient → Lisbonne → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1726',
    to_date: '1726',
    preview: 'DUC DE CHARTRES (1724-1726): Lorient → Lisbonne → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1726',
    to_date: '1726',
    preview: 'DUC DE CHARTRES (1724-1726): Lorient → Lisbonne → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1726',
    to_date: '1726',
    preview: 'DUC DE CHARTRES (1724-1726): Lorient → Lisbonne → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'DUC DE CHARTRES (1724-1726): Lorient → Lisbonne → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1729',
    to_date: '1731',
    preview: 'DUC DE CHARTRES (1729-1731): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1731',
    to_date: '1731',
    preview: 'DUC DE CHARTRES (1729-1731): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1731',
    to_date: '1731',
    preview: 'DUC DE CHARTRES (1729-1731): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1731',
    to_date: '1731',
    preview: 'DUC DE CHARTRES (1729-1731): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1731',
    to_date: '1731',
    preview: 'DUC DE CHARTRES (1729-1731): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1731',
    to_date: '1733',
    preview: 'DUC DE CHARTRES (1731-1733): Lorient → Cadix → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1733',
    to_date: '1733',
    preview: 'DUC DE CHARTRES (1731-1733): Lorient → Cadix → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1733',
    to_date: '1733',
    preview: 'DUC DE CHARTRES (1731-1733): Lorient → Cadix → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1733',
    to_date: '1733',
    preview: 'DUC DE CHARTRES (1731-1733): Lorient → Cadix → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1733',
    to_date: '1733',
    preview: 'DUC DE CHARTRES (1731-1733): Lorient → Cadix → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1733',
    to_date: '1735',
    preview: 'DUC DE CHARTRES (1733-1735): Lorient → Cadix → Anjouan → Moka → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1735',
    to_date: '1735',
    preview: 'DUC DE CHARTRES (1733-1735): Lorient → Cadix → Anjouan → Moka → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1735',
    to_date: '1735',
    preview: 'DUC DE CHARTRES (1733-1735): Lorient → Cadix → Anjouan → Moka → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1735',
    to_date: '1735',
    preview: 'DUC DE CHARTRES (1733-1735): Lorient → Cadix → Anjouan → Moka → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1738',
    to_date: '1740',
    preview: 'DUC DE CHARTRES (1738-1740): Lorient → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1740',
    to_date: '1740',
    preview: 'DUC DE CHARTRES (1738-1740): Lorient → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1741',
    to_date: '1742',
    preview: 'DUC DE CHARTRES (1741-1742): Lorient → Cap-Vert → Mascareignes → Chine → Mascareignes → Ascension → La Corogne → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1742',
    to_date: '1742',
    preview: 'DUC DE CHARTRES (1741-1742): Lorient → Cap-Vert → Mascareignes → Chine → Mascareignes → Ascension → La Corogne → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1742',
    to_date: '1742',
    preview: 'DUC DE CHARTRES (1741-1742): Lorient → Cap-Vert → Mascareignes → Chine → Mascareignes → Ascension → La Corogne → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1742',
    to_date: '1742',
    preview: 'DUC DE CHARTRES (1741-1742): Lorient → Cap-Vert → Mascareignes → Chine → Mascareignes → Ascension → La Corogne → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1743',
    to_date: '1744',
    preview: 'DUC DE CHARTRES (1743-1744): Lorient → Cap-Vert → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1744',
    to_date: '1744',
    preview: 'DUC DE CHARTRES (1743-1744): Lorient → Cap-Vert → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1744',
    to_date: '1744',
    preview: 'DUC DE CHARTRES (1743-1744): Lorient → Cap-Vert → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1744',
    to_date: '1744',
    preview: 'DUC DE CHARTRES (1743-1744): Lorient → Cap-Vert → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1744',
    to_date: '1744',
    preview: 'DUC DE CHARTRES (1743-1744): Lorient → Cap-Vert → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1744',
    to_date: '1744',
    preview: 'DUC DE CHARTRES (1743-1744): Lorient → Cap-Vert → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1746',
    to_date: '1747',
    preview: 'DUC DE CHARTRES (1746-1747): Lorient → Sénégal et Gorée → Fernando de Noronha → la Grenade → Martinique → Douarnenez → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1747',
    to_date: '1747',
    preview: 'DUC DE CHARTRES (1746-1747): Lorient → Sénégal et Gorée → Fernando de Noronha → la Grenade → Martinique → Douarnenez → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1747',
    to_date: '1747',
    preview: 'DUC DE CHARTRES (1746-1747): Lorient → Sénégal et Gorée → Fernando de Noronha → la Grenade → Martinique → Douarnenez → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1764',
    preview: 'DUC DE CHOISEUL (1762-1764): Lorient → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1764',
    to_date: '1764',
    preview: 'DUC DE CHOISEUL (1762-1764): Lorient → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1764',
    to_date: '1764',
    preview: 'DUC DE CHOISEUL (1762-1764): Lorient → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1763',
    to_date: '1763',
    preview: 'DUC DE CHOISEUL ou PETIT CHOISEUL (1763-1763): Navire de Saint-Malo affrété par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1765',
    to_date: '1766',
    preview: 'DUC DE CHOISEUL (1765-1766): Lorient → Cadix → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1766',
    to_date: '1766',
    preview: 'DUC DE CHOISEUL (1765-1766): Lorient → Cadix → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1766',
    to_date: '1766',
    preview: 'DUC DE CHOISEUL (1765-1766): Lorient → Cadix → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1765',
    to_date: '1767',
    preview: 'DUC DE CHOISEUL ou PETIT CHOISEUL (1765-1767): Lorient → Juda → cap de Bonne-Espérance → Mascareignes'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1767',
    to_date: '1767',
    preview: 'DUC DE CHOISEUL ou PETIT CHOISEUL (1765-1767): Lorient → Juda → cap de Bonne-Espérance → Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1767',
    to_date: '1767',
    preview: 'DUC DE CHOISEUL ou PETIT CHOISEUL (1765-1767): Lorient → Juda → cap de Bonne-Espérance → Mascareignes'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1767',
    to_date: '1767',
    preview: 'DUC DE CHOISEUL ou PETIT CHOISEUL (1765-1767): Lorient → Juda → cap de Bonne-Espérance → Mascareignes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1766',
    to_date: '1768',
    preview: 'DUC DE CHOISEUL (1766-1768): Lorient → Cadix → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1768',
    to_date: '1768',
    preview: 'DUC DE CHOISEUL (1766-1768): Lorient → Cadix → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1768',
    to_date: '1768',
    preview: 'DUC DE CHOISEUL (1766-1768): Lorient → Cadix → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1768',
    to_date: '1768',
    preview: 'DUC DE CHOISEUL (1766-1768): Lorient → Cadix → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1769',
    to_date: '1770',
    preview: 'DUC DE CHOISEUL (1769-1770): Lorient → Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1770',
    to_date: '1770',
    preview: 'DUC DE CHOISEUL (1769-1770): Lorient → Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1766',
    to_date: '1767',
    preview: 'DUC DE DURAS (1766-1767): Lorient → Cadix → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1767',
    to_date: '1767',
    preview: 'DUC DE DURAS (1766-1767): Lorient → Cadix → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1767',
    to_date: '1767',
    preview: 'DUC DE DURAS (1766-1767): Lorient → Cadix → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1767',
    to_date: '1769',
    preview: 'DUC DE DURAS (1767-1769): Lorient → Inde → Chine → Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1769',
    to_date: '1769',
    preview: 'DUC DE DURAS (1767-1769): Lorient → Inde → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1769',
    to_date: '1769',
    preview: 'DUC DE DURAS (1767-1769): Lorient → Inde → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1770',
    to_date: '1771',
    preview: 'DUC DE DURAS (1770-1771): Lorient → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1771',
    to_date: '1771',
    preview: 'DUC DE DURAS (1770-1771): Lorient → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1771',
    to_date: '1773',
    preview: 'DUC DE DURAS (1771-1773): Lorient → Cadix → île de France → Chine → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1773',
    to_date: '1773',
    preview: 'DUC DE DURAS (1771-1773): Lorient → Cadix → île de France → Chine → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1774',
    to_date: '1777',
    preview: 'DUC DE DURAS (1774-1777): Lorient → Cap de Bonne-Espérance → Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1777',
    to_date: '1777',
    preview: 'DUC DE DURAS (1774-1777): Lorient → Cap de Bonne-Espérance → Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1774',
    to_date: '1775',
    preview: 'DUC DE FITZ-JAMES (1774-1775): Saint-Malo → Île de France → Chine → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1775',
    to_date: '1775',
    preview: 'DUC DE FITZ-JAMES (1774-1775): Saint-Malo → Île de France → Chine → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1781',
    to_date: '1782',
    preview: 'DUC DE FITZ-JAMES (1781-1782): Granville → Saint-Malo → Brest → Martinique → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'DUC DE FITZ-JAMES (1781-1782): Granville → Saint-Malo → Brest → Martinique → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1716',
    to_date: '1718',
    preview: 'DUC DE LUXEMBOURG (1716-1718): Le Havre → Sénégal ? → Saint-Domingue → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1718',
    to_date: '1718',
    preview: 'DUC DE LUXEMBOURG (1716-1718): Le Havre → Sénégal ? → Saint-Domingue → Le Havre'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1718',
    to_date: '1718',
    preview: 'DUC DE LUXEMBOURG (1716-1718): Le Havre → Sénégal ? → Saint-Domingue → Le Havre'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1718',
    to_date: '1720',
    preview: 'DUC DE LUXEMBOURG (1718-1720): Le Havre → Gorée → Antilles → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1720',
    preview: 'DUC DE LUXEMBOURG (1718-1720): Le Havre → Gorée → Antilles → Le Havre'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'DUC DE LUXEMBOURG (1718-1720): Le Havre → Gorée → Antilles → Le Havre'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1772',
    to_date: '1772',
    preview: 'DUC DE LA VRILLIÈRE (1772-1772): Chandernagor → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1772',
    to_date: '1772',
    preview: 'DUC DE LA VRILLIÈRE (1772-1772): Chandernagor → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1773',
    to_date: '1775',
    preview: 'DUC DE LA VRILLIÈRE (1773-1775): Lorient → île de France → Bengale → île de France → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1775',
    to_date: '1775',
    preview: 'DUC DE LA VRILLIÈRE (1773-1775): Lorient → île de France → Bengale → île de France → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1775',
    to_date: '1775',
    preview: 'DUC DE LA VRILLIÈRE (1773-1775): Lorient → île de France → Bengale → île de France → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1775',
    to_date: '1775',
    preview: 'DUC DE LA VRILLIÈRE (1773-1775): Lorient → île de France → Bengale → île de France → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1776',
    to_date: '1778',
    preview: 'DUC DE LA VRILLIÈRE (1776-1778): Lorient → Inde'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1750',
    to_date: '1752',
    preview: 'DUC DE PARME (1750-1752): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1752',
    to_date: '1752',
    preview: 'DUC DE PARME (1750-1752): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1752',
    to_date: '1752',
    preview: 'DUC DE PARME (1750-1752): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1752',
    to_date: '1752',
    preview: 'DUC DE PARME (1750-1752): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1752',
    to_date: '1754',
    preview: 'DUC DE PARME (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Saint-Paul de Luanda (Angola) → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1754',
    to_date: '1754',
    preview: 'DUC DE PARME (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Saint-Paul de Luanda (Angola) → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1754',
    to_date: '1754',
    preview: 'DUC DE PARME (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Saint-Paul de Luanda (Angola) → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1754',
    to_date: '1754',
    preview: 'DUC DE PARME (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Saint-Paul de Luanda (Angola) → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1754',
    to_date: '1754',
    preview: 'DUC DE PARME (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Saint-Paul de Luanda (Angola) → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1757',
    to_date: '1757',
    preview: 'DUC DE PARME (1757-1757): Lorient pour l\'Inde'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1758',
    to_date: '1758',
    preview: 'DUC DE PARME (1758-1758): Lorient → armé pour l\'Inde → Lisbonne'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1787',
    to_date: '1787',
    preview: 'DUC DE PENTHIÈVRE (1787-1787): Lorient → Pondichéry ?'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1764',
    to_date: '1766',
    preview: 'DUC DE PRASLIN (1764-1766): Lorient → Cap-Vert → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1766',
    to_date: '1766',
    preview: 'DUC DE PRASLIN (1764-1766): Lorient → Cap-Vert → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1766',
    to_date: '1766',
    preview: 'DUC DE PRASLIN (1764-1766): Lorient → Cap-Vert → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1766',
    to_date: '1766',
    preview: 'DUC DE PRASLIN (1764-1766): Lorient → Cap-Vert → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1766',
    to_date: '1766',
    preview: 'DUC DE PRASLIN (1764-1766): Lorient → Cap-Vert → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1767',
    to_date: '1768',
    preview: 'DUC DE PRASLIN (1767-1768): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1768',
    to_date: '1768',
    preview: 'DUC DE PRASLIN (1767-1768): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1768',
    to_date: '1768',
    preview: 'DUC DE PRASLIN (1767-1768): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1768',
    to_date: '1768',
    preview: 'DUC DE PRASLIN (1767-1768): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1769',
    to_date: '1770',
    preview: 'DUC DE PRASLIN (1769-1770): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1770',
    to_date: '1770',
    preview: 'DUC DE PRASLIN (1769-1770): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1770',
    to_date: '1770',
    preview: 'DUC DE PRASLIN (1769-1770): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1770',
    to_date: '1770',
    preview: 'DUC DE PRASLIN (1769-1770): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1770',
    to_date: '1771',
    preview: 'DUC DE PRASLIN (1770-1771): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1771',
    to_date: '1771',
    preview: 'DUC DE PRASLIN (1770-1771): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1772',
    to_date: '1774',
    preview: 'DUC DE PRASLIN (1772-1774): Lorient → Inde → Chine → île de France → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1774',
    to_date: '1774',
    preview: 'DUC DE PRASLIN (1772-1774): Lorient → Inde → Chine → île de France → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1774',
    to_date: '1774',
    preview: 'DUC DE PRASLIN (1772-1774): Lorient → Inde → Chine → île de France → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1787',
    to_date: '1788',
    preview: 'DUC DE VAUGUYON (1787-1788): Lorient → Madagascar → Bengale → Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1788',
    to_date: '1788',
    preview: 'DUC DE VAUGUYON (1787-1788): Lorient → Madagascar → Bengale → Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1788',
    to_date: '1788',
    preview: 'DUC DE VAUGUYON (1787-1788): Lorient → Madagascar → Bengale → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1788',
    to_date: '1788',
    preview: 'DUC DE VAUGUYON (1787-1788): Lorient → Madagascar → Bengale → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1731',
    to_date: '1733',
    preview: 'DUC D’ANJOU (1731-1733): Lorient → Cadix → Cap-Vert → Chine → Sainte-Hélène → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1733',
    to_date: '1733',
    preview: 'DUC D’ANJOU (1731-1733): Lorient → Cadix → Cap-Vert → Chine → Sainte-Hélène → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1735',
    to_date: '1736',
    preview: 'DUC D’ANJOU (1735-1736): Lorient → Cadix → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1736',
    to_date: '1736',
    preview: 'DUC D’ANJOU (1735-1736): Lorient → Cadix → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1736',
    to_date: '1736',
    preview: 'DUC D’ANJOU (1735-1736): Lorient → Cadix → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1736',
    to_date: '1736',
    preview: 'DUC D’ANJOU (1735-1736): Lorient → Cadix → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1736',
    to_date: '1736',
    preview: 'DUC D’ANJOU (1735-1736): Lorient → Cadix → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1736',
    to_date: '1739',
    preview: 'DUC D’ANJOU (1736-1739): Lorient → Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'DUC D’ANJOU (1736-1739): Lorient → Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1739',
    to_date: '1739',
    preview: 'DUC D’ANJOU (1736-1739): Lorient → Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'DUC D’ANJOU (1736-1739): Lorient → Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1739',
    to_date: '1739',
    preview: 'DUC D’ANJOU (1736-1739): Lorient → Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'DUC D’ANJOU (1736-1739): Lorient → Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1739',
    to_date: '1739',
    preview: 'DUC D’ANJOU (1736-1739): Lorient → Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'DUC D’ANJOU (1736-1739): Lorient → Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1739',
    to_date: '1739',
    preview: 'DUC D’ANJOU (1736-1739): Lorient → Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'DUC D’ANJOU (1736-1739): Lorient → Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1739',
    to_date: '1739',
    preview: 'DUC D’ANJOU (1736-1739): Lorient → Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'DUC D’ANJOU (1736-1739): Lorient → Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1739',
    to_date: '1739',
    preview: 'DUC D’ANJOU (1736-1739): Lorient → Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'DUC D’ANJOU (1736-1739): Lorient → Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1739',
    to_date: '1739',
    preview: 'DUC D’ANJOU (1736-1739): Lorient → Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'DUC D’ANJOU (1736-1739): Lorient → Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1739',
    to_date: '1739',
    preview: 'DUC D’ANJOU (1736-1739): Lorient → Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'DUC D’ANJOU (1736-1739): Lorient → Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1763',
    preview: 'DUC D’AIGUILLON (1762-1763): Lorient → armé pour les Mascareignes, capturé par les Anglais'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1773',
    to_date: '1774',
    preview: 'DUC D’AIGUILLON (1773-1774): île de France → île Bourbon → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1775',
    to_date: '1775',
    preview: 'DUC D’AIGUILLON (1775-1775): Lorient → ? → Chandernagor'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1755',
    to_date: '1757',
    preview: 'DUC D’AQUITAINE (1755-1757): Lorient → Inde et Mascareignes → Madagascar → Lisbonne'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1757',
    to_date: '1757',
    preview: 'DUC D’AQUITAINE (1755-1757): Lorient → Inde et Mascareignes → Madagascar → Lisbonne'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1757',
    to_date: '1757',
    preview: 'DUC D’AQUITAINE (1755-1757): Lorient → Inde et Mascareignes → Madagascar → Lisbonne'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1757',
    to_date: '1757',
    preview: 'DUC D’AQUITAINE (1755-1757): Lorient → Inde et Mascareignes → Madagascar → Lisbonne'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1748',
    to_date: '1751',
    preview: 'DUC D’HARCOURT (1748-1751): Bordeaux → Gorée → Mascareignes → Angola → St-Domingue → Bordeaux'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1751',
    to_date: '1751',
    preview: 'DUC D’HARCOURT (1748-1751): Bordeaux → Gorée → Mascareignes → Angola → St-Domingue → Bordeaux'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Caribbean',
    from_date: '1751',
    to_date: '1751',
    preview: 'DUC D’HARCOURT (1748-1751): Bordeaux → Gorée → Mascareignes → Angola → St-Domingue → Bordeaux'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1751',
    to_date: '1751',
    preview: 'DUC D’HARCOURT (1748-1751): Bordeaux → Gorée → Mascareignes → Angola → St-Domingue → Bordeaux'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1716',
    to_date: '1717',
    preview: 'DUC D’ORLÉANS (1716-1717): Honfleur → Sénégal → Saint-Domingue → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1717',
    to_date: '1717',
    preview: 'DUC D’ORLÉANS (1716-1717): Honfleur → Sénégal → Saint-Domingue → Le Havre'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1717',
    to_date: '1717',
    preview: 'DUC D’ORLÉANS (1716-1717): Honfleur → Sénégal → Saint-Domingue → Le Havre'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1717',
    to_date: '1719',
    preview: 'DUC D’ORLÉANS (1717-1719): Le Havre → Brest → Sénégal → Antilles → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1719',
    to_date: '1719',
    preview: 'DUC D’ORLÉANS (1717-1719): Le Havre → Brest → Sénégal → Antilles → Le Havre'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1719',
    to_date: '1719',
    preview: 'DUC D’ORLÉANS (1717-1719): Le Havre → Brest → Sénégal → Antilles → Le Havre'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1720',
    preview: 'DUC D’ORLÉANS (1720-1720): Dunkerque → Louisiane → Martinique (?) → Port-Louis'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1720',
    preview: 'DUC D’ORLÉANS (1720-1720): Dunkerque → Louisiane → Martinique (?) → Port-Louis'
  },
  {
    from: 'Caribbean',
    to: 'Madagascar',
    from_date: '1720',
    to_date: '1720',
    preview: 'DUC D’ORLÉANS (1720-1720): Dunkerque → Louisiane → Martinique (?) → Port-Louis'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1720',
    to_date: '1720',
    preview: 'DUC D’ORLÉANS (1720-1720): Le Havre → Sénégal → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'DUC D’ORLÉANS (1720-1720): Le Havre → Sénégal → Le Havre'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1720',
    to_date: '1721',
    preview: 'DUC D’ORLÉANS (1720-1721): Le Havre → Sénégal et Gorée → Antilles'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1721',
    to_date: '1721',
    preview: 'DUC D’ORLÉANS (1720-1721): Le Havre → Sénégal et Gorée → Antilles'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1721',
    to_date: '1722',
    preview: 'DUC D’ORLÉANS (1721-1722): Lorient → Sénégal et Gorée → Martinique → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1722',
    to_date: '1722',
    preview: 'DUC D’ORLÉANS (1721-1722): Lorient → Sénégal et Gorée → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Madagascar',
    from_date: '1722',
    to_date: '1722',
    preview: 'DUC D’ORLÉANS (1721-1722): Lorient → Sénégal et Gorée → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1722',
    to_date: '1722',
    preview: 'DUC D’ORLÉANS (1722-1722): Lorient → Nantes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1722',
    to_date: '1722',
    preview: 'DUC D’ORLÉANS (1722-1722): Lorient → Nantes → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1726',
    to_date: '1726',
    preview: 'DUC D’ORLÉANS (1726-1726): Lorient → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'DUC D’ORLÉANS (1726-1726): Lorient → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1728',
    to_date: '1729',
    preview: 'DUC D’ORLÉANS (1728-1729): Lorient → Arguin → Sénégal et Gorée → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1729',
    to_date: '1729',
    preview: 'DUC D’ORLÉANS (1728-1729): Lorient → Arguin → Sénégal et Gorée → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1732',
    to_date: '1733',
    preview: 'DUCHESSE (1732-1733): Lorient → Cadix → Madagascar → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1733',
    to_date: '1733',
    preview: 'DUCHESSE (1732-1733): Lorient → Cadix → Madagascar → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1733',
    to_date: '1733',
    preview: 'DUCHESSE (1732-1733): Lorient → Cadix → Madagascar → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1733',
    to_date: '1733',
    preview: 'DUCHESSE (1732-1733): Lorient → Cadix → Madagascar → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1734',
    to_date: '1735',
    preview: 'DUCHESSE (1734-1735): Lorient → Anjouan → Inde et Mascareignes → Ascension → Port-Louis → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1735',
    to_date: '1735',
    preview: 'DUCHESSE (1734-1735): Lorient → Anjouan → Inde et Mascareignes → Ascension → Port-Louis → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1735',
    to_date: '1735',
    preview: 'DUCHESSE (1734-1735): Lorient → Anjouan → Inde et Mascareignes → Ascension → Port-Louis → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1735',
    to_date: '1735',
    preview: 'DUCHESSE (1734-1735): Lorient → Anjouan → Inde et Mascareignes → Ascension → Port-Louis → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Madagascar',
    from_date: '1735',
    to_date: '1735',
    preview: 'DUCHESSE (1734-1735): Lorient → Anjouan → Inde et Mascareignes → Ascension → Port-Louis → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1735',
    to_date: '1735',
    preview: 'DUCHESSE (1734-1735): Lorient → Anjouan → Inde et Mascareignes → Ascension → Port-Louis → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1735',
    to_date: '1737',
    preview: 'DUCHESSE (1735-1737): Lorient → Cap de Bonne-Espérance → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1737',
    to_date: '1737',
    preview: 'DUCHESSE (1735-1737): Lorient → Cap de Bonne-Espérance → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1737',
    to_date: '1737',
    preview: 'DUCHESSE (1735-1737): Lorient → Cap de Bonne-Espérance → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1737',
    to_date: '1739',
    preview: 'DUCHESSE (1737-1739): Lorient → Indes'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1718',
    to_date: '1718',
    preview: 'DUCHESSE DE NOAILLES (1718-1718): La Rochelle → Louisiane → La Rochelle ?'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1718',
    to_date: '1718',
    preview: 'DUCHESSE DE NOAILLES (1718-1718): La Rochelle → Louisiane → La Rochelle ?'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1719',
    to_date: '1720',
    preview: 'DUCHESSE DE NOAILLES (1719-1720): La Rochelle → Antilles → Louisiane → La Rochelle → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1720',
    preview: 'DUCHESSE DE NOAILLES (1719-1720): La Rochelle → Antilles → Louisiane → La Rochelle → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'DUCHESSE DE NOAILLES (1719-1720): La Rochelle → Antilles → Louisiane → La Rochelle → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1720',
    to_date: '1721',
    preview: 'DUCHESSE DE NOAILLES (1720-1721): Lorient → Brésil → Mascareignes et Madagascar'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1721',
    to_date: '1721',
    preview: 'DUCHESSE DE NOAILLES (1720-1721): Lorient → Brésil → Mascareignes et Madagascar'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1722',
    preview: 'DURANCE (1721-1722): Lorient → Louisiane → Saint-Domingue → Port-Louis'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1722',
    to_date: '1722',
    preview: 'DURANCE (1721-1722): Lorient → Louisiane → Saint-Domingue → Port-Louis'
  },
  {
    from: 'Caribbean',
    to: 'Madagascar',
    from_date: '1722',
    to_date: '1722',
    preview: 'DURANCE (1721-1722): Lorient → Louisiane → Saint-Domingue → Port-Louis'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1725',
    to_date: '1727',
    preview: 'DURANCE (1725-1727): Lorient → Saint-Domigue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1727',
    to_date: '1727',
    preview: 'DURANCE (1725-1727): Lorient → Saint-Domigue → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1729',
    to_date: '1730',
    preview: 'DURANCE (1729-1730): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1730',
    to_date: '1730',
    preview: 'DURANCE (1729-1730): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1730',
    to_date: '1730',
    preview: 'DURANCE (1729-1730): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1730',
    to_date: '1730',
    preview: 'DURANCE (1729-1730): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1732',
    to_date: '1734',
    preview: 'DURANCE (1732-1734): Lorient → Sénégal → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1734',
    to_date: '1734',
    preview: 'DURANCE (1732-1734): Lorient → Sénégal → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1734',
    to_date: '1734',
    preview: 'DURANCE (1732-1734): Lorient → Sénégal → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1782',
    to_date: '1784',
    preview: 'DURANCE (1782-1784): Toulon → Cadix → Antilles → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1784',
    to_date: '1784',
    preview: 'DURANCE (1782-1784): Toulon → Cadix → Antilles → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1748',
    to_date: '1750',
    preview: 'D’ORMESSON ou DORMESSON (1748-1750): La Rochelle → Mascareignes → Antilles → La Rochelle ?'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Caribbean',
    from_date: '1750',
    to_date: '1750',
    preview: 'D’ORMESSON ou DORMESSON (1748-1750): La Rochelle → Mascareignes → Antilles → La Rochelle ?'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1750',
    to_date: '1750',
    preview: 'D’ORMESSON ou DORMESSON (1748-1750): La Rochelle → Mascareignes → Antilles → La Rochelle ?'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1785',
    to_date: '1785',
    preview: 'DÉGOURDI (1785-1785): Port-au-Prince → Baltimore → Nantes → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1759',
    to_date: '1759',
    preview: 'ENTREPRENANT (1759-1759): Brest → Port-Louis'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1785',
    to_date: '1785',
    preview: 'ENTREPRENANT (1785-1785): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1718',
    to_date: '1720',
    preview: 'ENTREPRISE (1718-1720): Le Havre ? → Gorée → Saint-Domingue → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1720',
    preview: 'ENTREPRISE (1718-1720): Le Havre ? → Gorée → Saint-Domingue → Le Havre'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'ENTREPRISE (1718-1720): Le Havre ? → Gorée → Saint-Domingue → Le Havre'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1722',
    to_date: '1723',
    preview: 'ESPÉRANCE (1722-1723): Lorient → Arguin → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1723',
    to_date: '1723',
    preview: 'ESPÉRANCE (1722-1723): Lorient → Arguin → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1723',
    to_date: '1724',
    preview: 'ESPÉRANCE (1723-1724): Lorient → Canaries → Arguin → Sénégal → Nantes/Paimboeuf → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'ESPÉRANCE (1723-1724): Lorient → Canaries → Arguin → Sénégal → Nantes/Paimboeuf → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1724',
    to_date: '1726',
    preview: 'ESPÉRANCE (1724-1726): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'ESPÉRANCE (1724-1726): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1726',
    to_date: '1726',
    preview: 'ESPÉRANCE (1726-1726): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'ESPÉRANCE (1726-1726): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1727',
    to_date: '1727',
    preview: 'ESPÉRANCE (1727-1727): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1727',
    to_date: '1727',
    preview: 'ESPÉRANCE (1727-1727): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1728',
    to_date: '1728',
    preview: 'ESPÉRANCE (1728-1728): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1728',
    to_date: '1728',
    preview: 'ESPÉRANCE (1728-1728): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1729',
    to_date: '1730',
    preview: 'ESPÉRANCE (1729-1730): Lorient → Sénégal → Antilles'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1730',
    to_date: '1730',
    preview: 'ESPÉRANCE (1729-1730): Lorient → Sénégal → Antilles'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1723',
    preview: 'ESPIDUEL ou SPIDWELL , SPEEDWELL (1721-1723): Port-Louis → Louisiane'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1720',
    to_date: '1721',
    preview: 'EXPÉDITION (1720-1721): Saint-Malo → Lorient → Sénégal et Gorée → Antilles → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1721',
    to_date: '1721',
    preview: 'EXPÉDITION (1720-1721): Saint-Malo → Lorient → Sénégal et Gorée → Antilles → Le Havre'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1721',
    to_date: '1721',
    preview: 'EXPÉDITION (1720-1721): Saint-Malo → Lorient → Sénégal et Gorée → Antilles → Le Havre'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1722',
    to_date: '1723',
    preview: 'EXPÉDITION (1722-1723): Le Havre → Sénégal et Gorée → Louisiane → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'Louisiana',
    from_date: '1723',
    to_date: '1723',
    preview: 'EXPÉDITION (1722-1723): Le Havre → Sénégal et Gorée → Louisiane → Le Havre'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1723',
    to_date: '1723',
    preview: 'EXPÉDITION (1722-1723): Le Havre → Sénégal et Gorée → Louisiane → Le Havre'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1724',
    to_date: '1726',
    preview: 'EXPÉDITION (1724-1726): Le Havre → Lorient → Juda → Guyane → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'EXPÉDITION (1724-1726): Le Havre → Lorient → Juda → Guyane → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1726',
    to_date: '1726',
    preview: 'EXPÉDITION (1724-1726): Le Havre → Lorient → Juda → Guyane → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'EXPÉDITION (1724-1726): Le Havre → Lorient → Juda → Guyane → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1727',
    to_date: '1728',
    preview: 'EXPÉDITION (1727-1728): Lorient → Ténériffe → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1728',
    to_date: '1728',
    preview: 'EXPÉDITION (1727-1728): Lorient → Ténériffe → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1744',
    to_date: '1744',
    preview: 'EXPÉDITION (1744-1744): Lorient → Sénégal → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Louisiana',
    from_date: '1744',
    to_date: '1744',
    preview: 'EXPÉDITION (1744-1744): Lorient → Sénégal → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1744',
    to_date: '1744',
    preview: 'EXPÉDITION (1744-1744): Lorient → Sénégal → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1745',
    to_date: '1745',
    preview: 'EXPÉDITION (1745-1745): Lorient → Mascareignes → Inde'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1745',
    to_date: '1745',
    preview: 'EXPÉDITION (1745-1745): Lorient → Mascareignes → Inde'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1758',
    to_date: '1762',
    preview: 'EXPÉDITION (1758-1762): Lorient → Inde et Mascareignes → expédition d’Estaing'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1762',
    to_date: '1762',
    preview: 'EXPÉDITION (1758-1762): Lorient → Inde et Mascareignes → expédition d’Estaing'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1762',
    preview: 'EXPÉDITION (1758-1762): Lorient → Inde et Mascareignes → expédition d’Estaing'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1776',
    to_date: '1776',
    preview: 'EXPÉRIENCE (1776-1776): Lorient → île de France → Inde'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1776',
    to_date: '1776',
    preview: 'EXPÉRIENCE (1776-1776): Lorient → île de France → Inde'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1723',
    preview: 'FOUDROYANT (1720-1723): Lorient → Louisiane'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1720',
    to_date: '1721',
    preview: 'FORTUNÉ (1720-1721): Acheté à Brest par la Compagnie des Indes'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1721',
    to_date: '1721',
    preview: 'FORTUNÉ (1720-1721): Acheté à Brest par la Compagnie des Indes'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1721',
    preview: 'FORTUNÉ (1720-1721): Acheté à Brest par la Compagnie des Indes'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1721',
    to_date: '1721',
    preview: 'FORTUNÉ (1720-1721): Acheté à Brest par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1725',
    to_date: '1726',
    preview: 'FORTUNÉ (1725-1726): Lorient → Angola → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'FORTUNÉ (1725-1726): Lorient → Angola → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1758',
    to_date: '1763',
    preview: 'FORTUNÉ (1758-1763): Lorient → Brésil → Inde et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1763',
    to_date: '1763',
    preview: 'FORTUNÉ (1758-1763): Lorient → Brésil → Inde et Mascareignes'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1763',
    to_date: '1763',
    preview: 'FORTUNÉ (1758-1763): Lorient → Brésil → Inde et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1763',
    to_date: '1763',
    preview: 'FORTUNÉ (1758-1763): Lorient → Brésil → Inde et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1763',
    to_date: '1763',
    preview: 'FORTUNÉ (1758-1763): Lorient → Brésil → Inde et Mascareignes'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1763',
    to_date: '1763',
    preview: 'FORTUNÉ (1758-1763): Lorient → Brésil → Inde et Mascareignes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1758',
    to_date: '1763',
    preview: 'FORTUNÉ (1758-1763): Lorient → Brésil → Inde et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1763',
    to_date: '1763',
    preview: 'FORTUNÉ (1758-1763): Lorient → Brésil → Inde et Mascareignes'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1763',
    to_date: '1763',
    preview: 'FORTUNÉ (1758-1763): Lorient → Brésil → Inde et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1763',
    to_date: '1763',
    preview: 'FORTUNÉ (1758-1763): Lorient → Brésil → Inde et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1763',
    to_date: '1763',
    preview: 'FORTUNÉ (1758-1763): Lorient → Brésil → Inde et Mascareignes'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1763',
    to_date: '1763',
    preview: 'FORTUNÉ (1758-1763): Lorient → Brésil → Inde et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1774',
    to_date: '1774',
    preview: 'FORTUNÉ (1774-1774): île de France → île Bourbon → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1785',
    to_date: '1786',
    preview: 'FAUNE (1785-1786): Lorient → Cap de Bonne-Espérance → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1786',
    to_date: '1786',
    preview: 'FAUNE (1785-1786): Lorient → Cap de Bonne-Espérance → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1787',
    to_date: '1788',
    preview: 'FAUNE (1787-1788): Lorient → Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1788',
    to_date: '1788',
    preview: 'FAUNE (1787-1788): Lorient → Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1788',
    to_date: '1788',
    preview: 'FAUNE (1788-1788): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1790',
    to_date: '1790',
    preview: 'FAUNE (1790-1790): Lorient → île de France → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1790',
    to_date: '1790',
    preview: 'FAUNE (1790-1790): Lorient → île de France → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1721',
    preview: 'FAUVETTE (1721-1721): La Rochelle → Louisiane'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1744',
    to_date: '1744',
    preview: 'FAVORI ou FAVORY (1744-1744): Lorient → Inde'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1785',
    to_date: '1785',
    preview: 'FAVORI ou FAVORY (1785-1785): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1785',
    to_date: '1785',
    preview: 'FAVORI ou FAVORY (1785-1785): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1740',
    to_date: '1742',
    preview: 'FAVORITE (1740-1742): Lorient → Juda et côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1742',
    to_date: '1742',
    preview: 'FAVORITE (1740-1742): Lorient → Juda et côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1742',
    to_date: '1742',
    preview: 'FAVORITE (1740-1742): Lorient → Juda et côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1743',
    to_date: '1744',
    preview: 'FAVORITE (1743-1744): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1744',
    to_date: '1744',
    preview: 'FAVORITE (1743-1744): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1744',
    to_date: '1744',
    preview: 'FAVORITE (1743-1744): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1744',
    to_date: '1746',
    preview: 'FAVORITE (1744-1746): Lorient → Sénégal et Gorée → Mascareignes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1746',
    to_date: '1746',
    preview: 'FAVORITE (1744-1746): Lorient → Sénégal et Gorée → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1746',
    to_date: '1746',
    preview: 'FAVORITE (1744-1746): Lorient → Sénégal et Gorée → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1746',
    to_date: '1747',
    preview: 'FAVORITE (1746-1747): Lorient → Sénégal → Mascareignes → La Corogne → Le Passage → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1747',
    to_date: '1747',
    preview: 'FAVORITE (1746-1747): Lorient → Sénégal → Mascareignes → La Corogne → Le Passage → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1747',
    to_date: '1747',
    preview: 'FAVORITE (1746-1747): Lorient → Sénégal → Mascareignes → La Corogne → Le Passage → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1748',
    to_date: '1750',
    preview: 'FAVORITE (1748-1750): Lorient → Inde et Mascareignes → Pondichéry → Philippines → Inde'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1750',
    to_date: '1750',
    preview: 'FAVORITE (1748-1750): Lorient → Inde et Mascareignes → Pondichéry → Philippines → Inde'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1750',
    to_date: '1750',
    preview: 'FAVORITE (1748-1750): Lorient → Inde et Mascareignes → Pondichéry → Philippines → Inde'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1748',
    to_date: '1750',
    preview: 'FAVORITE (1748-1750): Lorient → Inde et Mascareignes → Pondichéry → Philippines → Inde'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1750',
    to_date: '1750',
    preview: 'FAVORITE (1748-1750): Lorient → Inde et Mascareignes → Pondichéry → Philippines → Inde'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1750',
    to_date: '1750',
    preview: 'FAVORITE (1748-1750): Lorient → Inde et Mascareignes → Pondichéry → Philippines → Inde'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1757',
    to_date: '1757',
    preview: 'FAVORITE (1757-1757): Port-Louis → La Rochelle ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1783',
    to_date: '1785',
    preview: 'FABIUS (1783-1785): Lorient → Inde → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1785',
    to_date: '1785',
    preview: 'FABIUS (1783-1785): Lorient → Inde → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1785',
    to_date: '1787',
    preview: 'FABIUS (1785-1787): Lorient → île de France → Cap de Bonne-Espérance → Antilles → Nantes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Caribbean',
    from_date: '1787',
    to_date: '1787',
    preview: 'FABIUS (1785-1787): Lorient → île de France → Cap de Bonne-Espérance → Antilles → Nantes → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1787',
    to_date: '1787',
    preview: 'FABIUS (1785-1787): Lorient → île de France → Cap de Bonne-Espérance → Antilles → Nantes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1758',
    to_date: '1759',
    preview: 'FIDÈLE (1758-1759): Lorient → Brésil → Inde et Mascareignes, Madagascar → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1759',
    to_date: '1759',
    preview: 'FIDÈLE (1758-1759): Lorient → Brésil → Inde et Mascareignes, Madagascar → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1759',
    to_date: '1759',
    preview: 'FIDÈLE (1758-1759): Lorient → Brésil → Inde et Mascareignes, Madagascar → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1759',
    to_date: '1759',
    preview: 'FIDÈLE (1758-1759): Lorient → Brésil → Inde et Mascareignes, Madagascar → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1759',
    to_date: '1759',
    preview: 'FIDÈLE (1758-1759): Lorient → Brésil → Inde et Mascareignes, Madagascar → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1763',
    preview: 'FIDÈLE (1761-1763): Lorient → Mascareignes → course dans l’Océan Indien → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1763',
    to_date: '1763',
    preview: 'FIDÈLE (1761-1763): Lorient → Mascareignes → course dans l’Océan Indien → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1763',
    to_date: '1763',
    preview: 'FIDÈLE (1761-1763): Lorient → Mascareignes → course dans l’Océan Indien → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1744',
    to_date: '1745',
    preview: 'FIDÉLITÉ (1744-1745): Bordeaux → Martinique → Port-Louis'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1745',
    to_date: '1745',
    preview: 'FIDÉLITÉ (1744-1745): Bordeaux → Martinique → Port-Louis'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1745',
    to_date: '1745',
    preview: 'FIDÉLITÉ (1744-1745): Bordeaux → Martinique → Port-Louis'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1722',
    to_date: '1723',
    preview: 'FIER (1722-1723): Le Havre → Sénégal → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1723',
    to_date: '1723',
    preview: 'FIER (1722-1723): Le Havre → Sénégal → Le Havre'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1723',
    to_date: '1724',
    preview: 'FIER (1723-1724): Le Havre → Lorient → Arguin → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'FIER (1723-1724): Le Havre → Lorient → Arguin → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1724',
    to_date: '1725',
    preview: 'FIER (1724-1725): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1725',
    to_date: '1725',
    preview: 'FIER (1724-1725): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1725',
    to_date: '1726',
    preview: 'FIER (1725-1726): Lorient → Arguin → Sénégal et Gorée → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'FIER (1725-1726): Lorient → Arguin → Sénégal et Gorée → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1726',
    to_date: '1727',
    preview: 'FIER (1726-1727): Lorient → Arguin, Sénégal et Gorée → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1727',
    to_date: '1727',
    preview: 'FIER (1726-1727): Lorient → Arguin, Sénégal et Gorée → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1728',
    to_date: '1729',
    preview: 'FIER (1728-1729): Lorient → Sénégal et Gorée → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1729',
    to_date: '1729',
    preview: 'FIER (1728-1729): Lorient → Sénégal et Gorée → Le Havre'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1730',
    to_date: '1731',
    preview: 'FIER (1730-1731): Le Havre → Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1731',
    to_date: '1731',
    preview: 'FIER (1730-1731): Le Havre → Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1732',
    to_date: '1733',
    preview: 'FIER (1732-1733): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1733',
    to_date: '1733',
    preview: 'FIER (1732-1733): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1782',
    to_date: '1784',
    preview: 'FIER (1782-1784): Rochefort → Ténériffe → Cap de Bonne-Espérance → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1784',
    to_date: '1784',
    preview: 'FIER (1782-1784): Rochefort → Ténériffe → Cap de Bonne-Espérance → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1780',
    to_date: '1780',
    preview: 'FILLE UNIQUE (1780-1780): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1760',
    to_date: '1760',
    preview: 'FINE (1760-1760): Lorient → Inde et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'FINE (1760-1760): Lorient → Inde et Mascareignes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1736',
    to_date: '1737',
    preview: 'FIÈRE (1736-1737): Lorient → Rochefort → Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1737',
    to_date: '1737',
    preview: 'FIÈRE (1736-1737): Lorient → Rochefort → Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1738',
    to_date: '1738',
    preview: 'FIÈRE (1738-1738): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1738',
    to_date: '1738',
    preview: 'FIÈRE (1738-1738): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1739',
    to_date: '1740',
    preview: 'FIÈRE (1739-1740): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1740',
    to_date: '1740',
    preview: 'FIÈRE (1739-1740): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1740',
    to_date: '1740',
    preview: 'FIÈRE (1739-1740): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1744',
    to_date: '1745',
    preview: 'FIÈRE (1744-1745): Lorient → Gorée → Mascareignes → ?'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1745',
    to_date: '1745',
    preview: 'FIÈRE (1744-1745): Lorient → Gorée → Mascareignes → ?'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1750',
    to_date: '1752',
    preview: 'FIÈRE (1750-1752): Lorient → Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1752',
    to_date: '1752',
    preview: 'FIÈRE (1750-1752): Lorient → Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1736',
    to_date: '1738',
    preview: 'FLEURY (1736-1738): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1738',
    to_date: '1738',
    preview: 'FLEURY (1736-1738): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1738',
    to_date: '1738',
    preview: 'FLEURY (1736-1738): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1738',
    to_date: '1738',
    preview: 'FLEURY (1736-1738): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1738',
    to_date: '1738',
    preview: 'FLEURY (1736-1738): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1739',
    to_date: '1740',
    preview: 'FLEURY (1739-1740): Lorient → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1740',
    to_date: '1740',
    preview: 'FLEURY (1739-1740): Lorient → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1740',
    to_date: '1740',
    preview: 'FLEURY (1739-1740): Lorient → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1740',
    to_date: '1740',
    preview: 'FLEURY (1739-1740): Lorient → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1741',
    to_date: '1743',
    preview: 'FLEURY (1741-1743): Lorient → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1743',
    to_date: '1743',
    preview: 'FLEURY (1741-1743): Lorient → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1743',
    to_date: '1743',
    preview: 'FLEURY (1741-1743): Lorient → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1743',
    to_date: '1743',
    preview: 'FLEURY (1741-1743): Lorient → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1743',
    to_date: '1743',
    preview: 'FLEURY (1741-1743): Lorient → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1743',
    to_date: '1743',
    preview: 'FLEURY (1741-1743): Lorient → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1744',
    to_date: '1744',
    preview: 'FLEURY (1744-1744): Navire du Havre affrété par la Compagnie des Indes'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1744',
    to_date: '1744',
    preview: 'FLEURY (1744-1744): Navire du Havre affrété par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1728',
    to_date: '1729',
    preview: 'FLORE (1728-1729): Lorient → Arguin → Sénégal et Gorée → Louisiane → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Louisiana',
    from_date: '1729',
    to_date: '1729',
    preview: 'FLORE (1728-1729): Lorient → Arguin → Sénégal et Gorée → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1729',
    to_date: '1729',
    preview: 'FLORE (1728-1729): Lorient → Arguin → Sénégal et Gorée → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1730',
    to_date: '1731',
    preview: 'FLORE (1730-1731): Lorient → Juda et côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1731',
    to_date: '1731',
    preview: 'FLORE (1730-1731): Lorient → Juda et côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1731',
    to_date: '1731',
    preview: 'FLORE (1730-1731): Lorient → Juda et côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1731',
    to_date: '1733',
    preview: 'FLORE (1731-1733): Lorient → Juda → Saiint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1733',
    to_date: '1733',
    preview: 'FLORE (1731-1733): Lorient → Juda → Saiint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1733',
    to_date: '1733',
    preview: 'FLORE (1731-1733): Lorient → Juda → Saiint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1734',
    to_date: '1736',
    preview: 'FLORE (1734-1736): Saint-Malo → Lorient → Sénégal → côtes de Guinée et Juda → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1736',
    to_date: '1736',
    preview: 'FLORE (1734-1736): Saint-Malo → Lorient → Sénégal → côtes de Guinée et Juda → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1736',
    to_date: '1736',
    preview: 'FLORE (1734-1736): Saint-Malo → Lorient → Sénégal → côtes de Guinée et Juda → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1737',
    to_date: '1738',
    preview: 'FLORE (1737-1738): Lorient → Juda → Martinique → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1738',
    to_date: '1738',
    preview: 'FLORE (1737-1738): Lorient → Juda → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1738',
    to_date: '1738',
    preview: 'FLORE (1737-1738): Lorient → Juda → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1739',
    to_date: '1740',
    preview: 'FLORE (1739-1740): Lorient → Sénégal → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1740',
    to_date: '1740',
    preview: 'FLORE (1739-1740): Lorient → Sénégal → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1740',
    to_date: '1740',
    preview: 'FLORE (1739-1740): Lorient → Sénégal → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1740',
    to_date: '1741',
    preview: 'FLORE (1740-1741): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1741',
    to_date: '1741',
    preview: 'FLORE (1740-1741): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1741',
    to_date: '1741',
    preview: 'FLORE (1740-1741): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1741',
    to_date: '1743',
    preview: 'FLORE (1741-1743): Lorient → Sénégal et Gorée → Juda et île du Prince → Martinique → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1743',
    to_date: '1743',
    preview: 'FLORE (1741-1743): Lorient → Sénégal et Gorée → Juda et île du Prince → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1743',
    to_date: '1743',
    preview: 'FLORE (1741-1743): Lorient → Sénégal et Gorée → Juda et île du Prince → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1783',
    to_date: '1785',
    preview: 'FRANÇOISE (1783-1785): Saint-Malo → Mascareignes et Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1785',
    to_date: '1785',
    preview: 'FRANÇOISE (1783-1785): Saint-Malo → Mascareignes et Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1785',
    to_date: '1785',
    preview: 'FRANÇOISE (1783-1785): Saint-Malo → Mascareignes et Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1786',
    to_date: '1786',
    preview: 'FRANÇOISE (1786-1786): Lorient → Saint-Pierre et Miquelon ?'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1781',
    to_date: '1782',
    preview: 'FRATERNITÉ (1781-1782): Bordeaux → Île d\'Aix → Île de Ré → Cayenne → Guadeloupe → Cap-Français → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'FRATERNITÉ (1781-1782): Bordeaux → Île d\'Aix → Île de Ré → Cayenne → Guadeloupe → Cap-Français → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1738',
    to_date: '1739',
    preview: 'FULVY (1738-1739): Lorient → Santiago → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'FULVY (1738-1739): Lorient → Santiago → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1739',
    to_date: '1739',
    preview: 'FULVY (1738-1739): Lorient → Santiago → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1739',
    to_date: '1739',
    preview: 'FULVY (1738-1739): Lorient → Santiago → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1740',
    to_date: '1741',
    preview: 'FULVY (1740-1741): Lorient → Santiago (Cap-Vert) → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1741',
    to_date: '1741',
    preview: 'FULVY (1740-1741): Lorient → Santiago (Cap-Vert) → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1741',
    to_date: '1741',
    preview: 'FULVY (1740-1741): Lorient → Santiago (Cap-Vert) → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1741',
    to_date: '1741',
    preview: 'FULVY (1740-1741): Lorient → Santiago (Cap-Vert) → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1741',
    to_date: '1741',
    preview: 'FULVY (1740-1741): Lorient → Santiago (Cap-Vert) → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1742',
    to_date: '1744',
    preview: 'FULVY (1742-1744): Lorient → Santiago → Mascareignes et Madagascar → Louisbourg → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1744',
    to_date: '1744',
    preview: 'FULVY (1742-1744): Lorient → Santiago → Mascareignes et Madagascar → Louisbourg → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1744',
    to_date: '1744',
    preview: 'FULVY (1742-1744): Lorient → Santiago → Mascareignes et Madagascar → Louisbourg → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1744',
    to_date: '1744',
    preview: 'FULVY (1742-1744): Lorient → Santiago → Mascareignes et Madagascar → Louisbourg → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1744',
    to_date: '1744',
    preview: 'FULVY (1742-1744): Lorient → Santiago → Mascareignes et Madagascar → Louisbourg → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1744',
    to_date: '1744',
    preview: 'FULVY (1742-1744): Lorient → Santiago → Mascareignes et Madagascar → Louisbourg → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1744',
    to_date: '1744',
    preview: 'FULVY (1742-1744): Lorient → Santiago → Mascareignes et Madagascar → Louisbourg → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1747',
    to_date: '1749',
    preview: 'FULVY (1747-1749): Lorient → Brésil → Mascareignes et Madagascar'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1749',
    to_date: '1749',
    preview: 'FULVY (1747-1749): Lorient → Brésil → Mascareignes et Madagascar'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1784',
    to_date: '1785',
    preview: 'FÉLICITÉ (1784-1785): Lorient → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1785',
    to_date: '1785',
    preview: 'FÉLICITÉ (1784-1785): Lorient → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1787',
    to_date: '1787',
    preview: 'FÉLICITÉ (1787-1787): Lorient → îles de France et de Bourbon ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1788',
    to_date: '1788',
    preview: 'FÉLIX (1788-1788): Lorient → Île de France et Mozambique → Saint-Domingue'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Caribbean',
    from_date: '1788',
    to_date: '1788',
    preview: 'FÉLIX (1788-1788): Lorient → Île de France et Mozambique → Saint-Domingue'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1780',
    to_date: '1780',
    preview: 'HOUZARD (1780-1780): Lorient → Saint-Domingue ?'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1777',
    to_date: '1778',
    preview: 'HARMONIE (1777-1778): Le Havre → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1778',
    to_date: '1778',
    preview: 'HARMONIE (1777-1778): Le Havre → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1768',
    to_date: '1769',
    preview: 'HEUREUSE (1768-1769): Lorient → Mascareignes'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1745',
    to_date: '1746',
    preview: 'HEUREUSE MARIE (1745-1746): Saint-Malo → Brest → Québec → La Rochelle → Port-Louis'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1741',
    to_date: '1741',
    preview: 'HEUREUX (1741-1741): Lorient → Sénégal'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1762',
    preview: 'HEUREUX (1762-1762): Prise capturée en Inde par l’escadre de Saint-Georges'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1767',
    to_date: '1767',
    preview: 'HEUREUX (1767-1767): vaisseau affrété par la Compagnie des Indes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1771',
    to_date: '1772',
    preview: 'HECTOR (1771-1772): Chandernagor → Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1772',
    to_date: '1772',
    preview: 'HECTOR (1771-1772): Chandernagor → Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1773',
    to_date: '1774',
    preview: 'HECTOR (1773-1774): Lorient → Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1774',
    to_date: '1774',
    preview: 'HECTOR (1773-1774): Lorient → Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1780',
    to_date: '1780',
    preview: 'HENRIADE (1780-1780): Lorient pour l\'île de France'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1738',
    to_date: '1739',
    preview: 'HENRIETTE ou HENRYETTE (1738-1739): Lorient → Juda et côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1739',
    to_date: '1739',
    preview: 'HENRIETTE ou HENRYETTE (1738-1739): Lorient → Juda et côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1739',
    to_date: '1739',
    preview: 'HENRIETTE ou HENRYETTE (1738-1739): Lorient → Juda et côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1739',
    to_date: '1740',
    preview: 'HENRIETTE ou HENRYETTE (1739-1740): Lorient → Sénégal → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1740',
    to_date: '1740',
    preview: 'HENRIETTE ou HENRYETTE (1739-1740): Lorient → Sénégal → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1740',
    to_date: '1740',
    preview: 'HENRIETTE ou HENRYETTE (1739-1740): Lorient → Sénégal → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1741',
    to_date: '1741',
    preview: 'HENRIETTE ou HENRYETTE (1741-1741): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1741',
    to_date: '1741',
    preview: 'HENRIETTE ou HENRYETTE (1741-1741): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1742',
    to_date: '1742',
    preview: 'HENRIETTE ou HENRYETTE (1742-1742): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1742',
    to_date: '1742',
    preview: 'HENRIETTE ou HENRYETTE (1742-1742): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1743',
    to_date: '1745',
    preview: 'HENRIETTE ou HENRYETTE (1743-1745): Lorient → Sénégal et Gorée → Antilles → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1745',
    to_date: '1745',
    preview: 'HENRIETTE ou HENRYETTE (1743-1745): Lorient → Sénégal et Gorée → Antilles → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1745',
    to_date: '1745',
    preview: 'HENRIETTE ou HENRYETTE (1743-1745): Lorient → Sénégal et Gorée → Antilles → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1718',
    to_date: '1718',
    preview: 'HERCULE (1718-1718): Vaisseau de La Rochelle affrété pour transporter des troupes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1720',
    to_date: '1720',
    preview: 'HERCULE (1720-1720): La Rochelle ? → Guinée ou Sénégal → Louisiane → ?'
  },
  {
    from: 'Senegal',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1720',
    preview: 'HERCULE (1720-1720): La Rochelle ? → Guinée ou Sénégal → Louisiane → ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1724',
    to_date: '1727',
    preview: 'HERCULE (1724-1727): Lorient → La Corogne → Lisbonne → Brésil → Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1727',
    to_date: '1727',
    preview: 'HERCULE (1724-1727): Lorient → La Corogne → Lisbonne → Brésil → Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'India',
    to: 'Caribbean',
    from_date: '1727',
    to_date: '1727',
    preview: 'HERCULE (1724-1727): Lorient → La Corogne → Lisbonne → Brésil → Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1727',
    to_date: '1727',
    preview: 'HERCULE (1724-1727): Lorient → La Corogne → Lisbonne → Brésil → Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1740',
    to_date: '1741',
    preview: 'HERCULE (1740-1741): Lorient → Cap-Vert → Mascareignes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1741',
    to_date: '1741',
    preview: 'HERCULE (1740-1741): Lorient → Cap-Vert → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1741',
    to_date: '1741',
    preview: 'HERCULE (1740-1741): Lorient → Cap-Vert → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1742',
    to_date: '1743',
    preview: 'HERCULE (1742-1743): Lorient → Cap de Bonne-Espérance → Inde → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Louisiana',
    from_date: '1743',
    to_date: '1743',
    preview: 'HERCULE (1742-1743): Lorient → Cap de Bonne-Espérance → Inde → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1743',
    to_date: '1743',
    preview: 'HERCULE (1742-1743): Lorient → Cap de Bonne-Espérance → Inde → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1748',
    to_date: '1749',
    preview: 'HERCULE (1748-1749): Lorient → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1749',
    to_date: '1749',
    preview: 'HERCULE (1748-1749): Lorient → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1749',
    to_date: '1749',
    preview: 'HERCULE (1748-1749): Lorient → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1749',
    to_date: '1749',
    preview: 'HERCULE (1748-1749): Lorient → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1749',
    to_date: '1749',
    preview: 'HERCULE (1748-1749): Lorient → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1749',
    to_date: '1751',
    preview: 'HERCULE (1749-1751): Lorient → Sénégal et Gorée → Inde et Mascareignes'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1751',
    to_date: '1751',
    preview: 'HERCULE (1749-1751): Lorient → Sénégal et Gorée → Inde et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1751',
    to_date: '1751',
    preview: 'HERCULE (1749-1751): Lorient → Sénégal et Gorée → Inde et Mascareignes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1755',
    to_date: '1766',
    preview: 'HERMIONE (1755-1766): Lorient → Mascareigne → Inde → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1766',
    to_date: '1766',
    preview: 'HERMIONE (1755-1766): Lorient → Mascareigne → Inde → vaisseau de côte'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1766',
    to_date: '1766',
    preview: 'HERMIONE (1755-1766): Lorient → Mascareigne → Inde → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1766',
    to_date: '1766',
    preview: 'HERMIONE (1755-1766): Lorient → Mascareigne → Inde → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1766',
    to_date: '1766',
    preview: 'HERMIONE (1755-1766): Lorient → Mascareigne → Inde → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1774',
    to_date: '1774',
    preview: 'HIPPOPOTAME (1774-1774): Lorient → Inde ?'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1721',
    to_date: '1722',
    preview: 'HIRONDELLE (1721-1722): La Rochelle → Antilles → Louisiane'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1722',
    to_date: '1722',
    preview: 'HIRONDELLE (1721-1722): La Rochelle → Antilles → Louisiane'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1731',
    to_date: '1743',
    preview: 'HIRONDELLE (1731-1743): Lorient →  Gorée → Martin Vas → Madagascar et Mascareignes → vaisseau de côte'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1743',
    to_date: '1743',
    preview: 'HIRONDELLE (1731-1743): Lorient →  Gorée → Martin Vas → Madagascar et Mascareignes → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1743',
    to_date: '1743',
    preview: 'HIRONDELLE (1731-1743): Lorient →  Gorée → Martin Vas → Madagascar et Mascareignes → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1748',
    to_date: '1749',
    preview: 'HIRONDELLE (1748-1749): Lorient → Inde et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1749',
    to_date: '1749',
    preview: 'HIRONDELLE (1748-1749): Lorient → Inde et Mascareignes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1753',
    to_date: '1753',
    preview: 'HIRONDELLE (1753-1753): Lorient → Portendick → Sénégal et Gorée → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1753',
    to_date: '1753',
    preview: 'HIRONDELLE (1753-1753): Lorient → Portendick → Sénégal et Gorée → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1756',
    to_date: '1756',
    preview: 'HIRONDELLE (1756-1756): Lorient pour le Sénégal'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1727',
    to_date: '1727',
    preview: 'HYACINTHE THOMAS (1727-1727): Lorient → Martinique ?'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1732',
    to_date: '1735',
    preview: 'HÉRON (1732-1735): Lorient → Ténériffe → Madagascar, Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1735',
    to_date: '1735',
    preview: 'HÉRON (1732-1735): Lorient → Ténériffe → Madagascar, Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1735',
    to_date: '1735',
    preview: 'HÉRON (1732-1735): Lorient → Ténériffe → Madagascar, Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1735',
    to_date: '1735',
    preview: 'HÉRON (1732-1735): Lorient → Ténériffe → Madagascar, Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1735',
    to_date: '1735',
    preview: 'HÉRON (1732-1735): Lorient → Ténériffe → Madagascar, Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1736',
    to_date: '1738',
    preview: 'HÉRON (1736-1738): Lorient → Cap-Vert → Inde et Mascareignes, Moka → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1738',
    to_date: '1738',
    preview: 'HÉRON (1736-1738): Lorient → Cap-Vert → Inde et Mascareignes, Moka → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1738',
    to_date: '1738',
    preview: 'HÉRON (1736-1738): Lorient → Cap-Vert → Inde et Mascareignes, Moka → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1738',
    to_date: '1738',
    preview: 'HÉRON (1736-1738): Lorient → Cap-Vert → Inde et Mascareignes, Moka → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1738',
    to_date: '1738',
    preview: 'HÉRON (1736-1738): Lorient → Cap-Vert → Inde et Mascareignes, Moka → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1738',
    to_date: '1738',
    preview: 'HÉRON (1736-1738): Lorient → Cap-Vert → Inde et Mascareignes, Moka → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1739',
    to_date: '1740',
    preview: 'HÉRON (1739-1740): Lorient → Cap-Vert → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1740',
    to_date: '1740',
    preview: 'HÉRON (1739-1740): Lorient → Cap-Vert → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1740',
    to_date: '1740',
    preview: 'HÉRON (1739-1740): Lorient → Cap-Vert → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1740',
    to_date: '1740',
    preview: 'HÉRON (1739-1740): Lorient → Cap-Vert → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1741',
    to_date: '1742',
    preview: 'HÉRON (1741-1742): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1742',
    to_date: '1742',
    preview: 'HÉRON (1741-1742): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1742',
    to_date: '1742',
    preview: 'HÉRON (1741-1742): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1742',
    to_date: '1742',
    preview: 'HÉRON (1741-1742): Lorient → Sénégal et Gorée → Madagascar et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1744',
    to_date: '1745',
    preview: 'HÉRON (1744-1745): Lorient → Gorée → Mascareignes → Canada'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1745',
    to_date: '1745',
    preview: 'HÉRON (1744-1745): Lorient → Gorée → Mascareignes → Canada'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1779',
    to_date: '1779',
    preview: 'HÉROS (1779-1779): Lorient → Saint-Domingue ?'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1725',
    to_date: '1725',
    preview: 'INTRÉPIDE (1725-1725): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1741',
    to_date: '1741',
    preview: 'INTRÉPIDE (1741-1741): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1746',
    to_date: '1747',
    preview: 'INVINCIBLE (1746-1747): Vaisseau du roi armé pour protéger les vaisseaux  de la Compagnie des Indes'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1747',
    to_date: '1747',
    preview: 'INVINCIBLE (1746-1747): Vaisseau du roi armé pour protéger les vaisseaux  de la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1720',
    to_date: '1722',
    preview: 'INDIEN (1720-1722): Le Havre → Brésil → Île Bourbon → Mozambique → Île Bourbon → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1722',
    to_date: '1722',
    preview: 'INDIEN (1720-1722): Le Havre → Brésil → Île Bourbon → Mozambique → Île Bourbon → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1722',
    to_date: '1722',
    preview: 'INDIEN (1720-1722): Le Havre → Brésil → Île Bourbon → Mozambique → Île Bourbon → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1724',
    to_date: '1724',
    preview: 'INDIEN (1724-1724): Lorient → Juda'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1729',
    to_date: '1732',
    preview: 'INDIEN (1729-1732): Pondichéry → Mascareignes et Madagascar → Pondichéry'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1732',
    to_date: '1732',
    preview: 'INDIEN (1729-1732): Pondichéry → Mascareignes et Madagascar → Pondichéry'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1732',
    to_date: '1732',
    preview: 'INDIEN (1729-1732): Pondichéry → Mascareignes et Madagascar → Pondichéry'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1732',
    to_date: '1733',
    preview: 'INDIEN (1732-1733): Pondichéry → Mascareignes et Madagascar → Pondichéry'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1733',
    to_date: '1733',
    preview: 'INDIEN (1732-1733): Pondichéry → Mascareignes et Madagascar → Pondichéry'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1733',
    to_date: '1733',
    preview: 'INDIEN (1732-1733): Pondichéry → Mascareignes et Madagascar → Pondichéry'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1752',
    to_date: '1753',
    preview: 'INDIEN (1752-1753): Saint-Malo → Lorient → Inde et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1753',
    to_date: '1753',
    preview: 'INDIEN (1752-1753): Saint-Malo → Lorient → Inde et Mascareignes'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1752',
    to_date: '1753',
    preview: 'INDIEN (1752-1753): Saint-Malo → Lorient → Inde et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1753',
    to_date: '1753',
    preview: 'INDIEN (1752-1753): Saint-Malo → Lorient → Inde et Mascareignes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1769',
    to_date: '1771',
    preview: 'INDIEN (1769-1771): Lorient → Inde et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1771',
    to_date: '1771',
    preview: 'INDIEN (1769-1771): Lorient → Inde et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1771',
    to_date: '1771',
    preview: 'INDIEN (1769-1771): Lorient → Inde et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1745',
    to_date: '1747',
    preview: 'INSULAIRE (1745-1747): En service dans l\'Océan Indien → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1758',
    to_date: '1760',
    preview: 'ILLUSTRE (1758-1760): Escadre de Froger de l\'Éguille pour l\'Inde'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'ILLUSTRE (1758-1760): Escadre de Froger de l\'Éguille pour l\'Inde'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1760',
    to_date: '1760',
    preview: 'ILLUSTRE (1758-1760): Escadre de Froger de l\'Éguille pour l\'Inde'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'ILLUSTRE (1758-1760): Escadre de Froger de l\'Éguille pour l\'Inde'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1781',
    to_date: '1784',
    preview: 'IRIS (1781-1784): Bordeaux → Brest → Mascareignes → Inde → Cap de Bonne-Espérance → La Corogne → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1784',
    to_date: '1784',
    preview: 'IRIS (1781-1784): Bordeaux → Brest → Mascareignes → Inde → Cap de Bonne-Espérance → La Corogne → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1784',
    to_date: '1784',
    preview: 'IRIS (1781-1784): Bordeaux → Brest → Mascareignes → Inde → Cap de Bonne-Espérance → La Corogne → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1780',
    to_date: '1780',
    preview: 'ISABELLE (1780-1780): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1775',
    to_date: '1777',
    preview: 'ISLE DE FRANCE (1775-1777): Brest → Lorient → Santiago (Cap-Vert) → Cap de Bonne-Espérance → Mascareignes → Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1777',
    to_date: '1777',
    preview: 'ISLE DE FRANCE (1775-1777): Brest → Lorient → Santiago (Cap-Vert) → Cap de Bonne-Espérance → Mascareignes → Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1777',
    to_date: '1777',
    preview: 'ISLE DE FRANCE (1775-1777): Brest → Lorient → Santiago (Cap-Vert) → Cap de Bonne-Espérance → Mascareignes → Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1777',
    to_date: '1777',
    preview: 'ISLE DE FRANCE (1775-1777): Brest → Lorient → Santiago (Cap-Vert) → Cap de Bonne-Espérance → Mascareignes → Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1742',
    to_date: '1743',
    preview: 'JOLI ou JOLY (1742-1743): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1726',
    to_date: '1729',
    preview: 'JALOUX (1726-1729): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1721',
    to_date: '1721',
    preview: 'JASON (1721-1721): Lorient → Portendick → Arguin → Gorée → Guinée → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1721',
    to_date: '1721',
    preview: 'JASON (1721-1721): Lorient → Portendick → Arguin → Gorée → Guinée → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1723',
    to_date: '1724',
    preview: 'JASON (1723-1724): Lorient → Sénégal et Gorée → Martinique → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1724',
    to_date: '1724',
    preview: 'JASON (1723-1724): Lorient → Sénégal et Gorée → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'JASON (1723-1724): Lorient → Sénégal et Gorée → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1726',
    to_date: '1727',
    preview: 'JASON (1726-1727): Lorient → Cadix → Canaries → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1727',
    to_date: '1727',
    preview: 'JASON (1726-1727): Lorient → Cadix → Canaries → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1727',
    to_date: '1727',
    preview: 'JASON (1726-1727): Lorient → Cadix → Canaries → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1727',
    to_date: '1727',
    preview: 'JASON (1726-1727): Lorient → Cadix → Canaries → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1728',
    to_date: '1729',
    preview: 'JASON (1728-1729): Lorient → Gorée → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1729',
    to_date: '1729',
    preview: 'JASON (1728-1729): Lorient → Gorée → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1729',
    to_date: '1729',
    preview: 'JASON (1728-1729): Lorient → Gorée → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1730',
    to_date: '1732',
    preview: 'JASON (1730-1732): Lorient → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1732',
    to_date: '1732',
    preview: 'JASON (1730-1732): Lorient → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1732',
    to_date: '1732',
    preview: 'JASON (1730-1732): Lorient → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1732',
    to_date: '1732',
    preview: 'JASON (1730-1732): Lorient → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1734',
    to_date: '1734',
    preview: 'JASON (1734-1734): Lorient pour l\'Inde'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'JEUNE CLOTILDE (1782-1782): Cap-Français → Bordeaux → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1781',
    to_date: '1782',
    preview: 'JEUNE AMAZONE (1781-1782): Marseille → Toulon → Cadix → Martinique → Cap-Français → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'JEUNE AMAZONE (1781-1782): Marseille → Toulon → Cadix → Martinique → Cap-Français → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1766',
    to_date: '1766',
    preview: 'JEAN ALEXANDRE (1766-1766): Lorient → Le Havre → Port-Louis'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1781',
    to_date: '1782',
    preview: 'JEAN PIERRE (1781-1782): Bordeaux → Martinique → Saint-Domingue → Port-Louis'
  },
  {
    from: 'Caribbean',
    to: 'Madagascar',
    from_date: '1782',
    to_date: '1782',
    preview: 'JEAN PIERRE (1781-1782): Bordeaux → Martinique → Saint-Domingue → Port-Louis'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1784',
    to_date: '1784',
    preview: 'JEAN PIERRE (1784-1784): Lorient → île de France ?'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1786',
    to_date: '1786',
    preview: 'JEANNE CÉCILE (1786-1786): île de France → Lorient'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1735',
    to_date: '1735',
    preview: 'JEANNETON (1735-1735): Saint-Malo → Terre-Neuve → Belle-île → Port-Louis'
  },
  {
    from: 'New France',
    to: 'Madagascar',
    from_date: '1735',
    to_date: '1735',
    preview: 'JEANNETON (1735-1735): Saint-Malo → Terre-Neuve → Belle-île → Port-Louis'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1786',
    to_date: '1787',
    preview: 'JULIE ex  (1786-1787): Navire de Bordeaux acheté à l\'île Maurice par Nicolas Hilaire Comarmond'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1723',
    to_date: '1725',
    preview: 'JUNON (1723-1725): Lorient → Arguin → Gorée → Juda et côtes de Guinée → Cap-Français → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1725',
    to_date: '1725',
    preview: 'JUNON (1723-1725): Lorient → Arguin → Gorée → Juda et côtes de Guinée → Cap-Français → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1725',
    to_date: '1725',
    preview: 'JUNON (1723-1725): Lorient → Arguin → Gorée → Juda et côtes de Guinée → Cap-Français → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1725',
    to_date: '1726',
    preview: 'JUNON (1725-1726): Lorient → Juda et côtes de Guinée → Martinique → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1726',
    to_date: '1726',
    preview: 'JUNON (1725-1726): Lorient → Juda et côtes de Guinée → Martinique → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'JUNON (1725-1726): Lorient → Juda et côtes de Guinée → Martinique → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1723',
    to_date: '1725',
    preview: 'JUPITER (1723-1725): Lorient → Juda et côtes de Guinée → Martinique → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1725',
    to_date: '1725',
    preview: 'JUPITER (1723-1725): Lorient → Juda et côtes de Guinée → Martinique → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1725',
    to_date: '1725',
    preview: 'JUPITER (1723-1725): Lorient → Juda et côtes de Guinée → Martinique → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1726',
    to_date: '1728',
    preview: 'JUPITER (1726-1728): Lorient → Cadix → Cap-Vert → Anjouan → Inde et Mascareignes → Antilles → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1728',
    to_date: '1728',
    preview: 'JUPITER (1726-1728): Lorient → Cadix → Cap-Vert → Anjouan → Inde et Mascareignes → Antilles → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1728',
    to_date: '1728',
    preview: 'JUPITER (1726-1728): Lorient → Cadix → Cap-Vert → Anjouan → Inde et Mascareignes → Antilles → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1728',
    to_date: '1728',
    preview: 'JUPITER (1726-1728): Lorient → Cadix → Cap-Vert → Anjouan → Inde et Mascareignes → Antilles → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Caribbean',
    from_date: '1728',
    to_date: '1728',
    preview: 'JUPITER (1726-1728): Lorient → Cadix → Cap-Vert → Anjouan → Inde et Mascareignes → Antilles → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1728',
    to_date: '1728',
    preview: 'JUPITER (1726-1728): Lorient → Cadix → Cap-Vert → Anjouan → Inde et Mascareignes → Antilles → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1733',
    to_date: '1734',
    preview: 'JUPITER (1733-1734): Lorient → Cadix → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1734',
    to_date: '1734',
    preview: 'JUPITER (1733-1734): Lorient → Cadix → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1734',
    to_date: '1734',
    preview: 'JUPITER (1733-1734): Lorient → Cadix → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1734',
    to_date: '1734',
    preview: 'JUPITER (1733-1734): Lorient → Cadix → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1734',
    to_date: '1734',
    preview: 'JUPITER (1733-1734): Lorient → Cadix → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1735',
    to_date: '1738',
    preview: 'JUPITER (1735-1738): Lorient → Cap-Vert → Madagascar et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1738',
    to_date: '1738',
    preview: 'JUPITER (1735-1738): Lorient → Cap-Vert → Madagascar et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1738',
    to_date: '1738',
    preview: 'JUPITER (1735-1738): Lorient → Cap-Vert → Madagascar et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1738',
    to_date: '1738',
    preview: 'JUPITER (1735-1738): Lorient → Cap-Vert → Madagascar et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1738',
    to_date: '1738',
    preview: 'JUPITER (1735-1738): Lorient → Cap-Vert → Madagascar et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1739',
    to_date: '1740',
    preview: 'JUPITER (1739-1740): Lorient → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1740',
    to_date: '1740',
    preview: 'JUPITER (1739-1740): Lorient → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1740',
    to_date: '1740',
    preview: 'JUPITER (1739-1740): Lorient → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1740',
    to_date: '1740',
    preview: 'JUPITER (1739-1740): Lorient → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1741',
    to_date: '1743',
    preview: 'JUPITER (1741-1743): Lorient → Gorée → Inde et Mascareignes'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1743',
    to_date: '1743',
    preview: 'JUPITER (1741-1743): Lorient → Gorée → Inde et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1743',
    to_date: '1743',
    preview: 'JUPITER (1741-1743): Lorient → Gorée → Inde et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1743',
    to_date: '1743',
    preview: 'JUPITER (1741-1743): Lorient → Gorée → Inde et Mascareignes'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1744',
    to_date: '1744',
    preview: 'JUPITER (1744-1744): Marseille → Carthagène → Malaga → Cadix → Port-Louis'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1784',
    to_date: '1784',
    preview: 'JUSTE (1784-1784): Lorient → Cap-Français ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1787',
    to_date: '1787',
    preview: 'JUSTE (1787-1787): Lorient → îles de France et de Bourbon ?'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1744',
    to_date: '1745',
    preview: 'OMPHALE (1744-1745): Le Havre → Martinique → Port-Louis'
  },
  {
    from: 'Caribbean',
    to: 'Madagascar',
    from_date: '1745',
    to_date: '1745',
    preview: 'OMPHALE (1744-1745): Le Havre → Martinique → Port-Louis'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'OBLIGATION (1782-1782): Saint-Pierre (Martinique) → Guadeloupe → Saint-Domingue → Bordeaux → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1731',
    to_date: '1733',
    preview: 'OISEAU (1731-1733): Lorient → Gorée → Martin Vas → Madagascar et Mascareignes'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1733',
    to_date: '1733',
    preview: 'OISEAU (1731-1733): Lorient → Gorée → Martin Vas → Madagascar et Mascareignes'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1733',
    to_date: '1733',
    preview: 'OISEAU (1731-1733): Lorient → Gorée → Martin Vas → Madagascar et Mascareignes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1739',
    to_date: '1742',
    preview: 'OISEAU (1739-1742): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1778',
    to_date: '1779',
    preview: 'OISEAU (1778-1779): Le Havre → Gorée → côte de Guinée → Cayenne → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1779',
    to_date: '1779',
    preview: 'OISEAU (1778-1779): Le Havre → Gorée → côte de Guinée → Cayenne → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1779',
    to_date: '1779',
    preview: 'OISEAU (1779-1779): Lorient → Cap-Français → Baltimore → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1779',
    to_date: '1779',
    preview: 'OISEAU (1779-1779): Lorient → Cap-Français → Baltimore → Lorient'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1786',
    to_date: '1787',
    preview: 'OISEAU (1786-1787): Lorient → Saint-Pierre et Miquelon → Virginie → Lorient'
  },
  {
    from: 'New France',
    to: 'France',
    from_date: '1787',
    to_date: '1787',
    preview: 'OISEAU (1786-1787): Lorient → Saint-Pierre et Miquelon → Virginie → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1752',
    to_date: '1752',
    preview: 'OURS (1752-1752): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1780',
    to_date: '1782',
    preview: 'LOUIS AUGUSTE (1780-1782): Le Havre → Cherbourg → Brest → Saint-Domingue et Amérique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'LOUIS AUGUSTE (1780-1782): Le Havre → Cherbourg → Brest → Saint-Domingue et Amérique → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1787',
    to_date: '1788',
    preview: 'LOUIS MARIE ex prise anglaise (1787-1788): Saint-Malo → Bordeaux → Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1788',
    to_date: '1788',
    preview: 'LOUIS MARIE ex prise anglaise (1787-1788): Saint-Malo → Bordeaux → Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1788',
    to_date: '1788',
    preview: 'LOUIS MARIE ex prise anglaise (1788-1788): Lorient → Saint-Domingue ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1790',
    to_date: '1790',
    preview: 'LOUISE CHÉRIE (1790-1790): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1787',
    to_date: '1787',
    preview: 'LOUISE JULIE (1787-1787): Lorient → Pondichéry ?'
  },
  {
    from: 'Madagascar',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1721',
    preview: 'LOIRE (1720-1721): Port-Louis → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1721',
    to_date: '1721',
    preview: 'LOIRE (1720-1721): Port-Louis → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1722',
    to_date: '1723',
    preview: 'LOIRE (1722-1723): Lorient → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1723',
    to_date: '1723',
    preview: 'LOIRE (1722-1723): Lorient → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1723',
    to_date: '1723',
    preview: 'LOIRE (1722-1723): Lorient → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1724',
    to_date: '1725',
    preview: 'LOIRE (1724-1725): Lorient → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1725',
    to_date: '1725',
    preview: 'LOIRE (1724-1725): Lorient → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1725',
    to_date: '1725',
    preview: 'LOIRE (1724-1725): Lorient → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1726',
    to_date: '1726',
    preview: 'LOIRE (1726-1726): Lorient → Saint-Domingue → Louisiane'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1726',
    to_date: '1726',
    preview: 'LOIRE (1726-1726): Lorient → Saint-Domingue → Louisiane'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1750',
    to_date: '1755',
    preview: 'GLORIEUX (1750-1755): Lorient → Rio de Janeiro → Mascareignes → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1780',
    to_date: '1780',
    preview: 'GRANDVILLE ou LA GRANVILLE (1780-1780): Lorient → Saint-Domingue ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1766',
    to_date: '1768',
    preview: 'LAVERDY ou L’AVERDY (1766-1768): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1768',
    to_date: '1768',
    preview: 'LAVERDY ou L’AVERDY (1766-1768): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1768',
    to_date: '1768',
    preview: 'LAVERDY ou L’AVERDY (1766-1768): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1769',
    to_date: '1770',
    preview: 'LAVERDY ou L’AVERDY (1769-1770): Lorient → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1770',
    to_date: '1770',
    preview: 'LAVERDY ou L’AVERDY (1769-1770): Lorient → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1771',
    to_date: '1772',
    preview: 'LAVERDY ou L’AVERDY (1771-1772): Lorient → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1772',
    to_date: '1772',
    preview: 'LAVERDY ou L’AVERDY (1771-1772): Lorient → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1772',
    to_date: '1772',
    preview: 'LAVERDY ou L’AVERDY (1771-1772): Lorient → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1777',
    to_date: '1779',
    preview: 'LABOULAY (1777-1779): Bordeaux → Saint-Domingue ? → Edington → Lorient → Bordeaux ? → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1779',
    to_date: '1779',
    preview: 'LABOULAY (1777-1779): Bordeaux → Saint-Domingue ? → Edington → Lorient → Bordeaux ? → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1785',
    to_date: '1785',
    preview: 'LABOUREUR (1785-1785): Port-au-Prince → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1790',
    to_date: '1790',
    preview: 'LAMBERT (1790-1790): Lorient → Pondichéry ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1790',
    to_date: '1790',
    preview: 'LIBERTÉ (1790-1790): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1781',
    to_date: '1782',
    preview: 'LINOTTE (1781-1782): Nantes → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'LINOTTE (1781-1782): Nantes → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1743',
    to_date: '1744',
    preview: 'LION ou LYON (1743-1744): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1747',
    to_date: '1749',
    preview: 'LION ou LYON (1747-1749): Vaisseau de Nantes affrété par la Compagnie des Indes'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1750',
    to_date: '1751',
    preview: 'LION ou LYON (1750-1751): Vaisseau de Nantes affrété par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1775',
    to_date: '1776',
    preview: 'LION (1775-1776): Lorient → île de France'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1744',
    to_date: '1744',
    preview: 'LIONCEAU ou LYONCEAU (1744-1744): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1785',
    to_date: '1785',
    preview: 'LUCIE (1785-1785): Lorient → Terre-Neuve ?'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1764',
    to_date: '1764',
    preview: 'LYON ou LION (1764-1764): Port-Louis → Bordeaux → Saint-Domingue ?'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1764',
    to_date: '1764',
    preview: 'LYON ou LION (1764-1764): Port-Louis → Bordeaux → Saint-Domingue ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1723',
    to_date: '1725',
    preview: 'LYS (1723-1725): Lorient → Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1725',
    to_date: '1725',
    preview: 'LYS (1723-1725): Lorient → Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1725',
    to_date: '1725',
    preview: 'LYS (1723-1725): Lorient → Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Caribbean',
    from_date: '1725',
    to_date: '1725',
    preview: 'LYS (1723-1725): Lorient → Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1725',
    to_date: '1725',
    preview: 'LYS (1723-1725): Lorient → Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1727',
    to_date: '1728',
    preview: 'LYS (1727-1728): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1728',
    to_date: '1728',
    preview: 'LYS (1727-1728): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1728',
    to_date: '1728',
    preview: 'LYS (1727-1728): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1730',
    to_date: '1731',
    preview: 'LYS (1730-1731): Lorient → Cadix → Inde et Mascareignes → Cap de Bonne-Espérance → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1731',
    to_date: '1731',
    preview: 'LYS (1730-1731): Lorient → Cadix → Inde et Mascareignes → Cap de Bonne-Espérance → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Louisiana',
    from_date: '1731',
    to_date: '1731',
    preview: 'LYS (1730-1731): Lorient → Cadix → Inde et Mascareignes → Cap de Bonne-Espérance → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1731',
    to_date: '1731',
    preview: 'LYS (1730-1731): Lorient → Cadix → Inde et Mascareignes → Cap de Bonne-Espérance → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1735',
    to_date: '1736',
    preview: 'LYS (1735-1736): Lorient → Cadix → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1736',
    to_date: '1736',
    preview: 'LYS (1735-1736): Lorient → Cadix → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1736',
    to_date: '1736',
    preview: 'LYS (1735-1736): Lorient → Cadix → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1736',
    to_date: '1736',
    preview: 'LYS (1735-1736): Lorient → Cadix → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1736',
    to_date: '1736',
    preview: 'LYS (1735-1736): Lorient → Cadix → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1737',
    to_date: '1738',
    preview: 'LYS (1737-1738): Lorient → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1738',
    to_date: '1738',
    preview: 'LYS (1737-1738): Lorient → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1738',
    to_date: '1738',
    preview: 'LYS (1737-1738): Lorient → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1738',
    to_date: '1738',
    preview: 'LYS (1737-1738): Lorient → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1739',
    to_date: '1741',
    preview: 'LYS (1739-1741): Lorient → Falmouth → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1741',
    to_date: '1741',
    preview: 'LYS (1739-1741): Lorient → Falmouth → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1741',
    to_date: '1741',
    preview: 'LYS (1739-1741): Lorient → Falmouth → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1741',
    to_date: '1741',
    preview: 'LYS (1739-1741): Lorient → Falmouth → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1741',
    to_date: '1741',
    preview: 'LYS (1739-1741): Lorient → Falmouth → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1741',
    to_date: '1741',
    preview: 'LYS (1739-1741): Lorient → Falmouth → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1742',
    to_date: '1743',
    preview: 'LYS (1742-1743): Lorient → Cap de Bonne-Espérance → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1743',
    to_date: '1743',
    preview: 'LYS (1742-1743): Lorient → Cap de Bonne-Espérance → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1743',
    to_date: '1743',
    preview: 'LYS (1742-1743): Lorient → Cap de Bonne-Espérance → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1743',
    to_date: '1743',
    preview: 'LYS (1742-1743): Lorient → Cap de Bonne-Espérance → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1743',
    to_date: '1743',
    preview: 'LYS (1742-1743): Lorient → Cap de Bonne-Espérance → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1745',
    to_date: '1747',
    preview: 'LYS (1745-1747): Lorient → Brésil → Inde et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1747',
    to_date: '1747',
    preview: 'LYS (1745-1747): Lorient → Brésil → Inde et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1747',
    to_date: '1747',
    preview: 'LYS (1745-1747): Lorient → Brésil → Inde et Mascareignes'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1723',
    preview: 'LÉGÈRE (1720-1723): La Rochelle → Antilles → Louisiane'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1723',
    to_date: '1723',
    preview: 'LÉGÈRE (1720-1723): La Rochelle → Antilles → Louisiane'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1730',
    to_date: '1739',
    preview: 'LÉGÈRE (1730-1739): Dieppe → Lorient → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1739',
    to_date: '1739',
    preview: 'LÉGÈRE (1730-1739): Dieppe → Lorient → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1739',
    to_date: '1739',
    preview: 'LÉGÈRE (1730-1739): Dieppe → Lorient → Mascareignes → vaisseau de côte'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'LÉGÈRE (1730-1739): Dieppe → Lorient → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1739',
    to_date: '1739',
    preview: 'LÉGÈRE (1730-1739): Dieppe → Lorient → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1739',
    to_date: '1739',
    preview: 'LÉGÈRE (1730-1739): Dieppe → Lorient → Mascareignes → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1745',
    to_date: '1745',
    preview: 'LÉGÈRE (1745-1745): Le Havre → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1745',
    to_date: '1745',
    preview: 'LÉGÈRE (1745-1745): Le Havre → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1746',
    to_date: '1746',
    preview: 'LÉGÈRE (1746-1746): Lorient → Sénégal et Gorée → Fernando de Noronha → Antilles ? → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1746',
    to_date: '1746',
    preview: 'LÉGÈRE (1746-1746): Lorient → Sénégal et Gorée → Fernando de Noronha → Antilles ? → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1746',
    to_date: '1746',
    preview: 'LÉGÈRE (1746-1746): Lorient → Sénégal et Gorée → Fernando de Noronha → Antilles ? → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1755',
    to_date: '1756',
    preview: 'LÉGÈRE (1755-1756): Lorient → Sénégal → Vigo → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1756',
    to_date: '1756',
    preview: 'LÉGÈRE (1755-1756): Lorient → Sénégal → Vigo → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1756',
    to_date: '1756',
    preview: 'LÉGÈRE (1756-1756): Lorient pour l\'Inde'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1758',
    to_date: '1758',
    preview: 'LÉGÈRE (1758-1758): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1780',
    to_date: '1781',
    preview: 'LÉGÈRE (1780-1781): Nantes → Rochefort → Sénégal → La Corogne → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1781',
    to_date: '1781',
    preview: 'LÉGÈRE (1780-1781): Nantes → Rochefort → Sénégal → La Corogne → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1726',
    to_date: '1726',
    preview: 'LÉGER (1726-1726): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1743',
    to_date: '1743',
    preview: 'LÉGER (1743-1743): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1727',
    to_date: '1727',
    preview: 'LÉOPARD (1727-1727): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1722',
    preview: 'MOUCHE (1721-1722): La Rochelle → Louisiane'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1785',
    to_date: '1785',
    preview: 'MOZAMBIQUE (1785-1785): Lorient → Inde ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1747',
    to_date: '1747',
    preview: 'MODESTE (1747-1747): Navire de Nantes affrété par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1782',
    to_date: '1784',
    preview: 'MOLLY (1782-1784): Toulon → Cadix → Antilles → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1784',
    to_date: '1784',
    preview: 'MOLLY (1782-1784): Toulon → Cadix → Antilles → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1757',
    to_date: '1758',
    preview: 'MONTMARTEL (1757-1758): Vaisseau de Nantes affrété par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1766',
    to_date: '1766',
    preview: 'MONTMARTEL (1766-1766): Lorient → Inde'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1748',
    to_date: '1750',
    preview: 'MONTARAN (1748-1750): Lorient → Cap de Bonne-Espérance → Mascareignes → Chine → Mascareignes → Espagne → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1750',
    to_date: '1750',
    preview: 'MONTARAN (1748-1750): Lorient → Cap de Bonne-Espérance → Mascareignes → Chine → Mascareignes → Espagne → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1750',
    to_date: '1750',
    preview: 'MONTARAN (1748-1750): Lorient → Cap de Bonne-Espérance → Mascareignes → Chine → Mascareignes → Espagne → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1750',
    to_date: '1752',
    preview: 'MONTARAN (1750-1752): Lorient → Santiago → Cap de Bonne-Espérance → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1752',
    to_date: '1752',
    preview: 'MONTARAN (1750-1752): Lorient → Santiago → Cap de Bonne-Espérance → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1753',
    to_date: '1755',
    preview: 'MONTARAN (1753-1755): Lorient → Gorée → Inde et Mascareignes → Chine → Mascareignes → Angola → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1755',
    to_date: '1755',
    preview: 'MONTARAN (1753-1755): Lorient → Gorée → Inde et Mascareignes → Chine → Mascareignes → Angola → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1755',
    to_date: '1755',
    preview: 'MONTARAN (1753-1755): Lorient → Gorée → Inde et Mascareignes → Chine → Mascareignes → Angola → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1755',
    to_date: '1755',
    preview: 'MONTARAN (1753-1755): Lorient → Gorée → Inde et Mascareignes → Chine → Mascareignes → Angola → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1756',
    to_date: '1761',
    preview: 'MORAS (1756-1761): île de France → Madagascar → Inde → Île de France'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1761',
    preview: 'MORAS (1756-1761): île de France → Madagascar → Inde → Île de France'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1761',
    to_date: '1761',
    preview: 'MORAS (1756-1761): île de France → Madagascar → Inde → Île de France'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1761',
    preview: 'MORAS (1756-1761): île de France → Madagascar → Inde → Île de France'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1759',
    to_date: '1760',
    preview: 'MATHY (1759-1760): Brest → Port-Louis'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1724',
    to_date: '1726',
    preview: 'MAURE (1724-1726): Lorient → Sénégal et Gorée → Juda → Guinée → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'MAURE (1724-1726): Lorient → Sénégal et Gorée → Juda → Guinée → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1730',
    to_date: '1730',
    preview: 'MAURE (1730-1730): Lorient → Juda'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1733',
    to_date: '1735',
    preview: 'MAUREPAS (1733-1735): Lorient → Cadix → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1735',
    to_date: '1735',
    preview: 'MAUREPAS (1733-1735): Lorient → Cadix → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1735',
    to_date: '1735',
    preview: 'MAUREPAS (1733-1735): Lorient → Cadix → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1735',
    to_date: '1735',
    preview: 'MAUREPAS (1733-1735): Lorient → Cadix → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1735',
    to_date: '1735',
    preview: 'MAUREPAS (1733-1735): Lorient → Cadix → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1735',
    to_date: '1735',
    preview: 'MAUREPAS (1733-1735): Lorient → Cadix → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1736',
    to_date: '1738',
    preview: 'MAUREPAS (1736-1738): Lorient → Santiago → Moka, Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1738',
    to_date: '1738',
    preview: 'MAUREPAS (1736-1738): Lorient → Santiago → Moka, Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1738',
    to_date: '1738',
    preview: 'MAUREPAS (1736-1738): Lorient → Santiago → Moka, Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1738',
    to_date: '1738',
    preview: 'MAUREPAS (1736-1738): Lorient → Santiago → Moka, Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1738',
    to_date: '1738',
    preview: 'MAUREPAS (1736-1738): Lorient → Santiago → Moka, Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1738',
    to_date: '1738',
    preview: 'MAUREPAS (1736-1738): Lorient → Santiago → Moka, Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1739',
    to_date: '1741',
    preview: 'MAUREPAS (1739-1741): Lorient → Inde et Mascareignes, Siam → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1741',
    to_date: '1741',
    preview: 'MAUREPAS (1739-1741): Lorient → Inde et Mascareignes, Siam → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1741',
    to_date: '1741',
    preview: 'MAUREPAS (1739-1741): Lorient → Inde et Mascareignes, Siam → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1742',
    to_date: '1743',
    preview: 'MAUREPAS (1742-1743): Lorient → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1743',
    to_date: '1743',
    preview: 'MAUREPAS (1742-1743): Lorient → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1743',
    to_date: '1743',
    preview: 'MAUREPAS (1742-1743): Lorient → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1745',
    to_date: '1745',
    preview: 'MAUREPAS (1745-1745): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1749',
    to_date: '1751',
    preview: 'MAUREPAS (1749-1751): Lorient → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1751',
    to_date: '1751',
    preview: 'MAUREPAS (1749-1751): Lorient → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1751',
    to_date: '1751',
    preview: 'MAUREPAS (1749-1751): Lorient → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1752',
    to_date: '1754',
    preview: 'MAUREPAS (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1754',
    to_date: '1754',
    preview: 'MAUREPAS (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1754',
    to_date: '1754',
    preview: 'MAUREPAS (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1754',
    to_date: '1754',
    preview: 'MAUREPAS (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1754',
    to_date: '1754',
    preview: 'MAUREPAS (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1755',
    to_date: '1760',
    preview: 'MAUREPAS (1755-1760): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1760',
    to_date: '1760',
    preview: 'MAUREPAS (1755-1760): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'MAUREPAS (1755-1760): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1760',
    to_date: '1760',
    preview: 'MAUREPAS (1755-1760): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'MAUREPAS (1755-1760): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1781',
    to_date: '1781',
    preview: 'MAUREPAS (1781-1781): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1786',
    to_date: '1786',
    preview: 'MAURICE (1786-1786): Lorient → ? → Île de France'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1747',
    to_date: '1751',
    preview: 'MACHAULT (1747-1751): Lorient → Gorée → Madagascar → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1751',
    to_date: '1751',
    preview: 'MACHAULT (1747-1751): Lorient → Gorée → Madagascar → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1751',
    to_date: '1751',
    preview: 'MACHAULT (1747-1751): Lorient → Gorée → Madagascar → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1751',
    to_date: '1751',
    preview: 'MACHAULT (1747-1751): Lorient → Gorée → Madagascar → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1751',
    to_date: '1751',
    preview: 'MACHAULT (1747-1751): Lorient → Gorée → Madagascar → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1751',
    to_date: '1751',
    preview: 'MACHAULT (1747-1751): Lorient → Gorée → Madagascar → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1751',
    to_date: '1751',
    preview: 'MACHAULT (1747-1751): Lorient → Gorée → Madagascar → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1751',
    to_date: '1753',
    preview: 'MACHAULT (1751-1753): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1753',
    to_date: '1753',
    preview: 'MACHAULT (1751-1753): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1753',
    to_date: '1753',
    preview: 'MACHAULT (1751-1753): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1754',
    to_date: '1756',
    preview: 'MACHAULT (1754-1756): Lorient → Anjouan → Inde → Madagascar et Mascareignes'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1756',
    to_date: '1756',
    preview: 'MACHAULT (1754-1756): Lorient → Anjouan → Inde → Madagascar et Mascareignes'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1756',
    to_date: '1756',
    preview: 'MACHAULT (1754-1756): Lorient → Anjouan → Inde → Madagascar et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1756',
    to_date: '1756',
    preview: 'MACHAULT (1754-1756): Lorient → Anjouan → Inde → Madagascar et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1756',
    to_date: '1756',
    preview: 'MACHAULT (1754-1756): Lorient → Anjouan → Inde → Madagascar et Mascareignes'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1756',
    to_date: '1756',
    preview: 'MACHAULT (1754-1756): Lorient → Anjouan → Inde → Madagascar et Mascareignes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1785',
    to_date: '1785',
    preview: 'MADAGASCAR (1785-1785): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1784',
    to_date: '1785',
    preview: 'MARÉCHAL DE CASTRIES (1784-1785): Lorient → Inde → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1785',
    to_date: '1785',
    preview: 'MARÉCHAL DE CASTRIES (1784-1785): Lorient → Inde → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1786',
    to_date: '1788',
    preview: 'MARÉCHAL DE CASTRIES (1786-1788): Lorient → Cadix → Inde → Cap de Bonne-Espérance → Sierra Leone'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1776',
    to_date: '1777',
    preview: 'MARÉCHAL DE BROGLIE (1776-1777): Lorient → Mascareignes → Chine → ? → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1777',
    to_date: '1777',
    preview: 'MARÉCHAL DE BROGLIE (1776-1777): Lorient → Mascareignes → Chine → ? → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1787',
    to_date: '1788',
    preview: 'MARÉCHAL DE DURAS (1787-1788): Lorient → Cadix → Pondichéry → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1788',
    to_date: '1788',
    preview: 'MARÉCHAL DE DURAS (1787-1788): Lorient → Cadix → Pondichéry → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1789',
    to_date: '1791',
    preview: 'MARÉCHAL DE DURAS (1789-1791): Lorient → Pondichéry → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1791',
    to_date: '1791',
    preview: 'MARÉCHAL DE DURAS (1789-1791): Lorient → Pondichéry → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1759',
    to_date: '1760',
    preview: 'MARÉCHAL DE LUXEMBOURG (1759-1760): Saint-Malo → Brest → Port-Louis'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1763',
    to_date: '1763',
    preview: 'MARÉCHAL DE LUXEMBOURG (1763-1763): Lorient → Nantes → Saint-Domingue ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1788',
    to_date: '1789',
    preview: 'MARÉCHAL DE SÉGUR (1788-1789): Lorient → Pondichéry → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1789',
    to_date: '1789',
    preview: 'MARÉCHAL DE SÉGUR (1788-1789): Lorient → Pondichéry → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1749',
    to_date: '1751',
    preview: 'MARÉCHAL DE SAXE (1749-1751): Lorient Cap-Vert → Mascareignes → Chine → Inde et Mascareignes → Fernando de Noronha → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1751',
    to_date: '1751',
    preview: 'MARÉCHAL DE SAXE (1749-1751): Lorient Cap-Vert → Mascareignes → Chine → Inde et Mascareignes → Fernando de Noronha → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1751',
    to_date: '1751',
    preview: 'MARÉCHAL DE SAXE (1749-1751): Lorient Cap-Vert → Mascareignes → Chine → Inde et Mascareignes → Fernando de Noronha → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1752',
    to_date: '1754',
    preview: 'MARÉCHAL DE SAXE (1752-1754): Lorient → Cap de Bonne-Espérance → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1754',
    to_date: '1754',
    preview: 'MARÉCHAL DE SAXE (1752-1754): Lorient → Cap de Bonne-Espérance → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1754',
    to_date: '1754',
    preview: 'MARÉCHAL DE SAXE (1752-1754): Lorient → Cap de Bonne-Espérance → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1719',
    to_date: '1720',
    preview: 'MARÉCHAL DE VILLARS (1719-1720): La Rochelle → Louisiane'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1787',
    to_date: '1787',
    preview: 'MARÉCHAL D’AUBETERRE (1787-1787): Lorient → îles de France et de Bourbon ?'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1719',
    to_date: '1720',
    preview: 'MARÉCHAL D’ESTRÉES (1719-1720): Le Havre → Sénégal et Gorée → Saint-Domingue → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1720',
    preview: 'MARÉCHAL D’ESTRÉES (1719-1720): Le Havre → Sénégal et Gorée → Saint-Domingue → Le Havre'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'MARÉCHAL D’ESTRÉES (1719-1720): Le Havre → Sénégal et Gorée → Saint-Domingue → Le Havre'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1719',
    to_date: '1721',
    preview: 'MARÉCHAL D’ESTRÉES (1719-1721): Bayonne → La Rochelle → Saint-Domingue → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1721',
    to_date: '1721',
    preview: 'MARÉCHAL D’ESTRÉES (1719-1721): Bayonne → La Rochelle → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Madagascar',
    from_date: '1721',
    to_date: '1721',
    preview: 'MARÉCHAL D’ESTRÉES (1719-1721): Bayonne → La Rochelle → Saint-Domingue → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1721',
    to_date: '1721',
    preview: 'MARÉCHAL D’ESTRÉES (1719-1721): Bayonne → La Rochelle → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1720',
    to_date: '1721',
    preview: 'MARÉCHAL D’ESTRÉES (1720-1721): Le Havre → Sénégal et Gorée → Louisiane'
  },
  {
    from: 'Senegal',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1721',
    preview: 'MARÉCHAL D’ESTRÉES (1720-1721): Le Havre → Sénégal et Gorée → Louisiane'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1723',
    to_date: '1724',
    preview: 'MARÉCHAL D’ESTRÉES (1723-1724): Lorient → Sénégal et Gorée → Martinique → La Rochelle → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1724',
    to_date: '1724',
    preview: 'MARÉCHAL D’ESTRÉES (1723-1724): Lorient → Sénégal et Gorée → Martinique → La Rochelle → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'MARÉCHAL D’ESTRÉES (1723-1724): Lorient → Sénégal et Gorée → Martinique → La Rochelle → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1724',
    to_date: '1724',
    preview: 'MARÉCHAL D’ESTRÉES (1723-1724): Lorient → Sénégal et Gorée → Martinique → La Rochelle → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'MARÉCHAL D’ESTRÉES (1723-1724): Lorient → Sénégal et Gorée → Martinique → La Rochelle → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1726',
    to_date: '1728',
    preview: 'MARÉCHAL D’ESTRÉES (1726-1728): Lorient → Sénégal et Gorée → Saint-Domingue'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1728',
    to_date: '1728',
    preview: 'MARÉCHAL D’ESTRÉES (1726-1728): Lorient → Sénégal et Gorée → Saint-Domingue'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1781',
    to_date: '1782',
    preview: 'MARÉCHALE DE MOUCHI (1781-1782): Bordeaux → Martinique → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'MARÉCHALE DE MOUCHI (1781-1782): Bordeaux → Martinique → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1723',
    to_date: '1723',
    preview: 'MARIANNE (1723-1723): ? → Antilles → Saint-Malo'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1718',
    to_date: '1719',
    preview: 'MARIE (1718-1719): La Rochelle → Louisiane → La Rochelle'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1719',
    to_date: '1719',
    preview: 'MARIE (1718-1719): La Rochelle → Louisiane → La Rochelle'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1719',
    to_date: '1720',
    preview: 'MARIE (1719-1720): La Rochelle → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1720',
    preview: 'MARIE (1719-1720): La Rochelle → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'MARIE (1719-1720): La Rochelle → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1721',
    preview: 'MARIE (1720-1721): Lorient → La Rochelle → Saint-Domingue et Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1721',
    preview: 'MARIE (1720-1721): Lorient → La Rochelle → Saint-Domingue et Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1721',
    to_date: '1721',
    preview: 'MARIE (1720-1721): Lorient → La Rochelle → Saint-Domingue et Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1724',
    to_date: '1725',
    preview: 'MARIE (1724-1725): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1725',
    to_date: '1726',
    preview: 'MARIE (1725-1726): Lorient → Sénégal et Gorée → Antilles'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1726',
    to_date: '1726',
    preview: 'MARIE (1725-1726): Lorient → Sénégal et Gorée → Antilles'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1740',
    to_date: '1742',
    preview: 'MARIE (1740-1742): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1742',
    to_date: '1742',
    preview: 'MARIE (1740-1742): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1742',
    to_date: '1742',
    preview: 'MARIE (1740-1742): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1743',
    to_date: '1743',
    preview: 'MARIE (1743-1743): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1743',
    to_date: '1743',
    preview: 'MARIE (1743-1743): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1754',
    to_date: '1754',
    preview: 'MARIE ANGÉLIQUE (1754-1754): Port-Louis → Sète ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1772',
    to_date: '1776',
    preview: 'MARIE ADÉLAÏDE (1772-1776): Marseille → Mascareignes → Cap de Bonne-Espérance → Mascareignes et Inde → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1776',
    to_date: '1776',
    preview: 'MARIE ADÉLAÏDE (1772-1776): Marseille → Mascareignes → Cap de Bonne-Espérance → Mascareignes et Inde → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1784',
    to_date: '1784',
    preview: 'MARIUS (1784-1784): Lorient → Inde ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1767',
    to_date: '1769',
    preview: 'MARQUISE DE MARBŒUF ou MARQUISE DE MARBOEUF (1767-1769): Navire de Lorient affrété par la Compagnie des Indes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1769',
    to_date: '1769',
    preview: 'MARQUISE DE MARBŒUF ou MARQUISE DE MARBOEUF (1767-1769): Navire de Lorient affrété par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1767',
    to_date: '1767',
    preview: 'MARQUISE DE MARBŒUF (1767-1767): Nantes/Paimboeuf → Marseille → Port-Louis'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1787',
    to_date: '1788',
    preview: 'MARQUISE DE SAINT-PERN (1787-1788): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1788',
    to_date: '1788',
    preview: 'MARQUISE DE SAINT-PERN (1787-1788): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1766',
    to_date: '1767',
    preview: 'MARQUIS DE CASTRIES (1766-1767): Lorient → Cadix → Anjouan → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1767',
    to_date: '1767',
    preview: 'MARQUIS DE CASTRIES (1766-1767): Lorient → Cadix → Anjouan → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1767',
    to_date: '1767',
    preview: 'MARQUIS DE CASTRIES (1766-1767): Lorient → Cadix → Anjouan → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1767',
    to_date: '1767',
    preview: 'MARQUIS DE CASTRIES (1766-1767): Lorient → Cadix → Anjouan → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1768',
    to_date: '1770',
    preview: 'MARQUIS DE CASTRIES (1768-1770): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1770',
    to_date: '1770',
    preview: 'MARQUIS DE CASTRIES (1768-1770): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1770',
    to_date: '1770',
    preview: 'MARQUIS DE CASTRIES (1768-1770): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1770',
    to_date: '1770',
    preview: 'MARQUIS DE CASTRIES (1768-1770): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1772',
    to_date: '1774',
    preview: 'MARQUIS DE CASTRIES (1772-1774): Lorient → Mascareignes → Inde → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1774',
    to_date: '1774',
    preview: 'MARQUIS DE CASTRIES (1772-1774): Lorient → Mascareignes → Inde → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1774',
    to_date: '1774',
    preview: 'MARQUIS DE CASTRIES (1772-1774): Lorient → Mascareignes → Inde → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1775',
    to_date: '1777',
    preview: 'MARQUIS DE CASTRIES (1775-1777): Lorient → Mascareignes → Inde → Birmanie → Inde → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1777',
    to_date: '1777',
    preview: 'MARQUIS DE CASTRIES (1775-1777): Lorient → Mascareignes → Inde → Birmanie → Inde → Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1777',
    to_date: '1777',
    preview: 'MARQUIS DE CASTRIES (1775-1777): Lorient → Mascareignes → Inde → Birmanie → Inde → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1777',
    to_date: '1777',
    preview: 'MARQUIS DE CASTRIES (1775-1777): Lorient → Mascareignes → Inde → Birmanie → Inde → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1783',
    to_date: '1786',
    preview: 'MARQUIS DE CASTRIES (1783-1786): Saint-Malo → Madagascar et Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1786',
    to_date: '1786',
    preview: 'MARQUIS DE CASTRIES (1783-1786): Saint-Malo → Madagascar et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1786',
    to_date: '1786',
    preview: 'MARQUIS DE CASTRIES (1783-1786): Saint-Malo → Madagascar et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1748',
    to_date: '1749',
    preview: 'MARQUIS DE LASSAY (1748-1749): Nantes → Lorient → Brésil → Indes'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1780',
    to_date: '1780',
    preview: 'MARQUIS DE L’AIGLE (1780-1780): Lorient → Saint-Domingue ?'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1731',
    to_date: '1731',
    preview: 'MARQUIS DE MAILLEBOIS (1731-1731): Saint-Malo → Saint-Domingue → Port-Louis'
  },
  {
    from: 'Caribbean',
    to: 'Madagascar',
    from_date: '1731',
    to_date: '1731',
    preview: 'MARQUIS DE MAILLEBOIS (1731-1731): Saint-Malo → Saint-Domingue → Port-Louis'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1757',
    to_date: '1758',
    preview: 'MARQUIS DE MALAUSE (1757-1758): Bordeaux → Cap-Français → Port-Louis'
  },
  {
    from: 'Caribbean',
    to: 'Madagascar',
    from_date: '1758',
    to_date: '1758',
    preview: 'MARQUIS DE MALAUSE (1757-1758): Bordeaux → Cap-Français → Port-Louis'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1781',
    to_date: '1782',
    preview: 'MARQUIS DE MONTESQUIOU (1781-1782): Granville → Antilles → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1766',
    to_date: '1768',
    preview: 'MARQUIS DE SANCÉ (1766-1768): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1768',
    to_date: '1768',
    preview: 'MARQUIS DE SANCÉ (1766-1768): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1768',
    to_date: '1768',
    preview: 'MARQUIS DE SANCÉ (1766-1768): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1769',
    to_date: '1770',
    preview: 'MARQUIS DE SANCÉ (1769-1770): Lorient → Inde et Mascareignes'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1770',
    to_date: '1770',
    preview: 'MARQUIS DE SANCÉ (1769-1770): Lorient → Inde et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1770',
    to_date: '1770',
    preview: 'MARQUIS DE SANCÉ (1769-1770): Lorient → Inde et Mascareignes'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1727',
    to_date: '1729',
    preview: 'MARS (1727-1729): Lorient → Cadix → Cap de Bonne-Espérance → Inde et Mascareignes → Brest → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1729',
    to_date: '1729',
    preview: 'MARS (1727-1729): Lorient → Cadix → Cap de Bonne-Espérance → Inde et Mascareignes → Brest → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1729',
    to_date: '1729',
    preview: 'MARS (1727-1729): Lorient → Cadix → Cap de Bonne-Espérance → Inde et Mascareignes → Brest → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1729',
    to_date: '1731',
    preview: 'MARS (1729-1731): Lorient → Cadix → Ténériffe → Île de France → Chine → Sainte-Hélène → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1731',
    to_date: '1731',
    preview: 'MARS (1729-1731): Lorient → Cadix → Ténériffe → Île de France → Chine → Sainte-Hélène → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1731',
    to_date: '1733',
    preview: 'MARS (1731-1733): Lorient → Ténériffe → Anjouan → Moka → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1733',
    to_date: '1733',
    preview: 'MARS (1731-1733): Lorient → Ténériffe → Anjouan → Moka → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1733',
    to_date: '1733',
    preview: 'MARS (1731-1733): Lorient → Ténériffe → Anjouan → Moka → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1733',
    to_date: '1733',
    preview: 'MARS (1731-1733): Lorient → Ténériffe → Anjouan → Moka → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1741',
    to_date: '1742',
    preview: 'MARS (1741-1742): Lorient → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1742',
    to_date: '1742',
    preview: 'MARS (1741-1742): Lorient → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1742',
    to_date: '1744',
    preview: 'MARS (1742-1744): Lorient → Cap-Vert → Mascareignes → Chine → Mascareignes → Ascension → Louisbourg → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1744',
    to_date: '1744',
    preview: 'MARS (1742-1744): Lorient → Cap-Vert → Mascareignes → Chine → Mascareignes → Ascension → Louisbourg → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1744',
    to_date: '1744',
    preview: 'MARS (1742-1744): Lorient → Cap-Vert → Mascareignes → Chine → Mascareignes → Ascension → Louisbourg → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'New France',
    from_date: '1744',
    to_date: '1744',
    preview: 'MARS (1742-1744): Lorient → Cap-Vert → Mascareignes → Chine → Mascareignes → Ascension → Louisbourg → Lorient'
  },
  {
    from: 'New France',
    to: 'France',
    from_date: '1744',
    to_date: '1744',
    preview: 'MARS (1742-1744): Lorient → Cap-Vert → Mascareignes → Chine → Mascareignes → Ascension → Louisbourg → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1746',
    to_date: '1751',
    preview: 'MARS (1746-1751): Lorient → Inde et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1751',
    to_date: '1751',
    preview: 'MARS (1746-1751): Lorient → Inde et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1751',
    to_date: '1751',
    preview: 'MARS (1746-1751): Lorient → Inde et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1751',
    to_date: '1751',
    preview: 'MARS (1746-1751): Lorient → Inde et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1751',
    to_date: '1751',
    preview: 'MARS (1746-1751): Lorient → Inde et Mascareignes'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1754',
    to_date: '1755',
    preview: 'MARS (1754-1755): Le Havre → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1755',
    to_date: '1755',
    preview: 'MARS (1754-1755): Le Havre → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1786',
    to_date: '1786',
    preview: 'MARTINIQUE (1786-1786): Lorient → îles de France et de Bourbon ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1748',
    to_date: '1749',
    preview: 'MASCARIN (1748-1749): Navire de Nantes affrété puis acheté par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1749',
    to_date: '1751',
    preview: 'MASCARIN (1749-1751): Lorient → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1751',
    to_date: '1751',
    preview: 'MASCARIN (1749-1751): Lorient → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1751',
    to_date: '1751',
    preview: 'MASCARIN (1749-1751): Lorient → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1752',
    to_date: '1752',
    preview: 'MASCARIN (1752-1752): Lorient → Île de France'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1759',
    to_date: '1760',
    preview: 'MASSIAC (1759-1760): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1760',
    to_date: '1760',
    preview: 'MASSIAC (1759-1760): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1761',
    preview: 'MASSIAC (1760-1761): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1761',
    to_date: '1761',
    preview: 'MASSIAC (1760-1761): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1764',
    preview: 'MASSIAC (1762-1764): Lorient → Mascareignes → Batavia → Mascareignes → Cap de Bonne-Espérance → Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1764',
    to_date: '1764',
    preview: 'MASSIAC (1762-1764): Lorient → Mascareignes → Batavia → Mascareignes → Cap de Bonne-Espérance → Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1766',
    to_date: '1768',
    preview: 'MASSIAC (1766-1768): Lorient → Cadix → Inde et Mascareignes → Sumatra → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1768',
    to_date: '1768',
    preview: 'MASSIAC (1766-1768): Lorient → Cadix → Inde et Mascareignes → Sumatra → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1768',
    to_date: '1768',
    preview: 'MASSIAC (1766-1768): Lorient → Cadix → Inde et Mascareignes → Sumatra → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1768',
    to_date: '1768',
    preview: 'MASSIAC (1766-1768): Lorient → Cadix → Inde et Mascareignes → Sumatra → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1768',
    to_date: '1769',
    preview: 'MASSIAC (1768-1769): Lorient → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1769',
    to_date: '1769',
    preview: 'MASSIAC (1768-1769): Lorient → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1769',
    to_date: '1769',
    preview: 'MASSIAC (1768-1769): Lorient → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1770',
    to_date: '1771',
    preview: 'MASSIAC (1770-1771): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1771',
    to_date: '1771',
    preview: 'MASSIAC (1770-1771): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1771',
    to_date: '1771',
    preview: 'MASSIAC (1770-1771): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1771',
    to_date: '1771',
    preview: 'MASSIAC (1770-1771): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1771',
    to_date: '1773',
    preview: 'MASSIAC (1771-1773): Lorient → Cadix → Mascareignes → Chine → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1773',
    to_date: '1773',
    preview: 'MASSIAC (1771-1773): Lorient → Cadix → Mascareignes → Chine → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1724',
    to_date: '1725',
    preview: 'MERCURE (1724-1725): Lorient → Lisbonne → Ténériffe → Gorée → Guinée → Martinique → La Rochelle → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1725',
    to_date: '1725',
    preview: 'MERCURE (1724-1725): Lorient → Lisbonne → Ténériffe → Gorée → Guinée → Martinique → La Rochelle → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1725',
    to_date: '1725',
    preview: 'MERCURE (1724-1725): Lorient → Lisbonne → Ténériffe → Gorée → Guinée → Martinique → La Rochelle → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1727',
    to_date: '1729',
    preview: 'MERCURE (1727-1729): Lorient → Cadix → Madagascar → Inde et Mascareignes → Louisbourg → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1729',
    to_date: '1729',
    preview: 'MERCURE (1727-1729): Lorient → Cadix → Madagascar → Inde et Mascareignes → Louisbourg → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1729',
    to_date: '1729',
    preview: 'MERCURE (1727-1729): Lorient → Cadix → Madagascar → Inde et Mascareignes → Louisbourg → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'New France',
    from_date: '1729',
    to_date: '1729',
    preview: 'MERCURE (1727-1729): Lorient → Cadix → Madagascar → Inde et Mascareignes → Louisbourg → Lorient'
  },
  {
    from: 'New France',
    to: 'France',
    from_date: '1729',
    to_date: '1729',
    preview: 'MERCURE (1727-1729): Lorient → Cadix → Madagascar → Inde et Mascareignes → Louisbourg → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1730',
    to_date: '1732',
    preview: 'MERCURE (1730-1732): Lorient → Cap de Bonne-Espérance → Chine → Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1732',
    to_date: '1732',
    preview: 'MERCURE (1730-1732): Lorient → Cap de Bonne-Espérance → Chine → Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1732',
    to_date: '1732',
    preview: 'MERCURE (1730-1732): Lorient → Cap de Bonne-Espérance → Chine → Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1747',
    to_date: '1747',
    preview: 'MERCURE ex  (1747-1747): Acheté à Brest par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1775',
    to_date: '1776',
    preview: 'MERGER (1775-1776): Nantes → Lorient → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1776',
    to_date: '1776',
    preview: 'MERGER (1775-1776): Nantes → Lorient → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1776',
    to_date: '1777',
    preview: 'MERGER (1776-1777): Lorient → Inde → Bengale'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1732',
    to_date: '1732',
    preview: 'MIGNON (1732-1732): Lorient → Sénégal et Arguin'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1735',
    to_date: '1736',
    preview: 'MIGNON (1735-1736): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1761',
    preview: 'MIGNONNE (1760-1761): Lorient → Mascareignes'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1759',
    to_date: '1760',
    preview: 'MIMI (1759-1760): Saint-Malo → Brest → Port-Louis'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1724',
    to_date: '1728',
    preview: 'MINERVE (1724-1728): Lorient → Cadix → Inde → Chine → Inde'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1758',
    to_date: '1762',
    preview: 'MINOTAURE (1758-1762): Escadre de Froger de l\'Éguille pour l\'Inde'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1762',
    preview: 'MINOTAURE (1758-1762): Escadre de Froger de l\'Éguille pour l\'Inde'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1762',
    to_date: '1762',
    preview: 'MINOTAURE (1758-1762): Escadre de Froger de l\'Éguille pour l\'Inde'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1762',
    preview: 'MINOTAURE (1758-1762): Escadre de Froger de l\'Éguille pour l\'Inde'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1762',
    to_date: '1762',
    preview: 'MINOTAURE (1758-1762): Escadre de Froger de l\'Éguille pour l\'Inde'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1762',
    to_date: '1762',
    preview: 'MINOTAURE (1758-1762): Escadre de Froger de l\'Éguille pour l\'Inde'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1786',
    to_date: '1787',
    preview: 'MIROMESNIL (1786-1787): Lorient → Bengale → Sainte-Hélène → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1787',
    to_date: '1787',
    preview: 'MIROMESNIL (1786-1787): Lorient → Bengale → Sainte-Hélène → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1788',
    to_date: '1788',
    preview: 'MIROMESNIL (1788-1788): Lorient → Bengale ?'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1719',
    to_date: '1720',
    preview: 'MUTINE (1719-1720): Le Havre → Port-Louis → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1720',
    preview: 'MUTINE (1719-1720): Le Havre → Port-Louis → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1720',
    preview: 'MUTINE (1719-1720): Le Havre → Port-Louis → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'MUTINE (1719-1720): Le Havre → Port-Louis → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1721',
    preview: 'MUTINE (1720-1721): Port-Louis → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1721',
    to_date: '1721',
    preview: 'MUTINE (1720-1721): Port-Louis → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1723',
    to_date: '1724',
    preview: 'MUTINE (1723-1724): Lorient → Arguin → Sénégal et Gorée → Antilles → Paimboeuf/Nantes → Belle-Île → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1724',
    to_date: '1724',
    preview: 'MUTINE (1723-1724): Lorient → Arguin → Sénégal et Gorée → Antilles → Paimboeuf/Nantes → Belle-Île → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'MUTINE (1723-1724): Lorient → Arguin → Sénégal et Gorée → Antilles → Paimboeuf/Nantes → Belle-Île → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1725',
    to_date: '1726',
    preview: 'MUTINE (1725-1726): Lorient → Sénégal et Gorée → Guinée → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1726',
    to_date: '1726',
    preview: 'MUTINE (1725-1726): Lorient → Sénégal et Gorée → Guinée → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1726',
    to_date: '1726',
    preview: 'MUTINE (1725-1726): Lorient → Sénégal et Gorée → Guinée → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'MUTINE (1725-1726): Lorient → Sénégal et Gorée → Guinée → Antilles → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1750',
    to_date: '1751',
    preview: 'MUTINE (1750-1751): Lorient → Brésil → Mascareignes'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1783',
    to_date: '1784',
    preview: 'MULET (1783-1784): Rochefort → Chine → Sainte-Hélène → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1784',
    to_date: '1784',
    preview: 'MULET (1783-1784): Rochefort → Chine → Sainte-Hélène → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1777',
    to_date: '1777',
    preview: 'MÈRE BOBIE (1777-1777): Paimpol → Morlaix → Paimboeuf → Saint-Pierre et Miquelon → Lorient'
  },
  {
    from: 'New France',
    to: 'France',
    from_date: '1777',
    to_date: '1777',
    preview: 'MÈRE BOBIE (1777-1777): Paimpol → Morlaix → Paimboeuf → Saint-Pierre et Miquelon → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1720',
    to_date: '1722',
    preview: 'MÉDUSE (1720-1722): Lorient → Gorée → Angola → Antilles → Nantes/Paimboeuf'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1722',
    to_date: '1722',
    preview: 'MÉDUSE (1720-1722): Lorient → Gorée → Angola → Antilles → Nantes/Paimboeuf'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1722',
    to_date: '1722',
    preview: 'MÉDUSE (1720-1722): Lorient → Gorée → Angola → Antilles → Nantes/Paimboeuf'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1724',
    to_date: '1726',
    preview: 'MÉDUSE (1724-1726): Rochefort → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1726',
    to_date: '1726',
    preview: 'MÉDUSE (1724-1726): Rochefort → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'MÉDUSE (1724-1726): Rochefort → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1728',
    to_date: '1731',
    preview: 'MÉDUSE (1728-1731): Lorient → Juda et côtes de Guinée → Madagascar et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1731',
    to_date: '1731',
    preview: 'MÉDUSE (1728-1731): Lorient → Juda et côtes de Guinée → Madagascar et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1731',
    to_date: '1731',
    preview: 'MÉDUSE (1728-1731): Lorient → Juda et côtes de Guinée → Madagascar et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1731',
    to_date: '1731',
    preview: 'MÉDUSE (1728-1731): Lorient → Juda et côtes de Guinée → Madagascar et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1731',
    to_date: '1731',
    preview: 'MÉDUSE (1728-1731): Lorient → Juda et côtes de Guinée → Madagascar et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1731',
    to_date: '1731',
    preview: 'MÉDUSE (1728-1731): Lorient → Juda et côtes de Guinée → Madagascar et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1731',
    to_date: '1731',
    preview: 'MÉDUSE (1728-1731): Lorient → Juda et côtes de Guinée → Madagascar et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1731',
    to_date: '1731',
    preview: 'MÉDUSE (1728-1731): Lorient → Juda et côtes de Guinée → Madagascar et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1733',
    to_date: '1733',
    preview: 'MÉDUSE (1733-1733): Lorient → Bordeaux → Cap-Vert → Madagascar et Mascareignes'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1733',
    to_date: '1733',
    preview: 'MÉDUSE (1733-1733): Lorient → Bordeaux → Cap-Vert → Madagascar et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1733',
    to_date: '1733',
    preview: 'MÉDUSE (1733-1733): Lorient → Bordeaux → Cap-Vert → Madagascar et Mascareignes'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1733',
    to_date: '1733',
    preview: 'MÉDUSE (1733-1733): Lorient → Bordeaux → Cap-Vert → Madagascar et Mascareignes'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1783',
    to_date: '1784',
    preview: 'MÉDUSE (1783-1784): Lorient → Chine → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1784',
    to_date: '1784',
    preview: 'MÉDUSE (1783-1784): Lorient → Chine → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1785',
    to_date: '1786',
    preview: 'NOTRE-DAME DU CARMEL (1785-1786): Lorient → Pondichéry → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1786',
    to_date: '1786',
    preview: 'NOTRE-DAME DU CARMEL (1785-1786): Lorient → Pondichéry → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1750',
    to_date: '1751',
    preview: 'NOUVEAU CROISSANT (1750-1751): Nantes → Ténériffe → Sénégal et Gorée'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1787',
    to_date: '1788',
    preview: 'NOIR (1787-1788): Lorient → Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1788',
    to_date: '1788',
    preview: 'NOIR (1787-1788): Lorient → Inde → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1789',
    to_date: '1789',
    preview: 'NOIR (1789-1789): Lorient → Bengale → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1789',
    to_date: '1789',
    preview: 'NOIR (1789-1789): Lorient → Bengale → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1776',
    to_date: '1776',
    preview: 'NORMAND (1776-1776): Lorient → Inde ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1774',
    to_date: '1775',
    preview: 'NORMANDE (1774-1775): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1775',
    to_date: '1775',
    preview: 'NORMANDE (1774-1775): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1775',
    to_date: '1775',
    preview: 'NATHALIE (1775-1775): Lorient → Inde ?'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1786',
    to_date: '1787',
    preview: 'NANCY (1786-1787): île de France → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1730',
    to_date: '1730',
    preview: 'NAÏADE ou NAYADE (1730-1730): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1747',
    to_date: '1748',
    preview: 'NAÏADE ou NAYADE (1747-1748): Lorient → Inde'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1748',
    to_date: '1748',
    preview: 'NAÏADE ou NAYADE (1747-1748): Lorient → Inde'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1789',
    to_date: '1789',
    preview: 'NECKER (1789-1789): Lorient → îles de France et de Bourbon ?'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1717',
    to_date: '1722',
    preview: 'NEPTUNE (1717-1722): La Rochelle → Louisiane'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1718',
    to_date: '1719',
    preview: 'NEPTUNE (1718-1719): Le Havre → Sénégal → Antilles → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1719',
    to_date: '1719',
    preview: 'NEPTUNE (1718-1719): Le Havre → Sénégal → Antilles → Le Havre'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1719',
    to_date: '1719',
    preview: 'NEPTUNE (1718-1719): Le Havre → Sénégal → Antilles → Le Havre'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1724',
    to_date: '1726',
    preview: 'NEPTUNE (1724-1726): Lorient → Ténériffe → Gorée → Inde et Mascareignes → Ascension -'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1726',
    to_date: '1726',
    preview: 'NEPTUNE (1724-1726): Lorient → Ténériffe → Gorée → Inde et Mascareignes → Ascension -'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1726',
    to_date: '1726',
    preview: 'NEPTUNE (1724-1726): Lorient → Ténériffe → Gorée → Inde et Mascareignes → Ascension -'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1726',
    to_date: '1726',
    preview: 'NEPTUNE (1724-1726): Lorient → Ténériffe → Gorée → Inde et Mascareignes → Ascension -'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'NEPTUNE (1724-1726): Lorient → Ténériffe → Gorée → Inde et Mascareignes → Ascension -'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1729',
    to_date: '1731',
    preview: 'NEPTUNE (1729-1731): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1731',
    to_date: '1731',
    preview: 'NEPTUNE (1729-1731): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1731',
    to_date: '1731',
    preview: 'NEPTUNE (1729-1731): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1731',
    to_date: '1731',
    preview: 'NEPTUNE (1729-1731): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1731',
    to_date: '1734',
    preview: 'NEPTUNE (1731-1734): Lorient → Ténériffe → Cap-Vert → Madagascar et Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1734',
    to_date: '1734',
    preview: 'NEPTUNE (1731-1734): Lorient → Ténériffe → Cap-Vert → Madagascar et Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1734',
    to_date: '1734',
    preview: 'NEPTUNE (1731-1734): Lorient → Ténériffe → Cap-Vert → Madagascar et Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1734',
    to_date: '1734',
    preview: 'NEPTUNE (1731-1734): Lorient → Ténériffe → Cap-Vert → Madagascar et Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1740',
    to_date: '1741',
    preview: 'NEPTUNE (1740-1741): Lorient → Santiago → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1741',
    to_date: '1741',
    preview: 'NEPTUNE (1740-1741): Lorient → Santiago → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1741',
    to_date: '1741',
    preview: 'NEPTUNE (1740-1741): Lorient → Santiago → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1741',
    to_date: '1743',
    preview: 'NEPTUNE (1741-1743): Lorient → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1743',
    to_date: '1743',
    preview: 'NEPTUNE (1741-1743): Lorient → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1746',
    to_date: '1746',
    preview: 'NÉCESSAIRE (1746-1746): Nantes → Lorient pour le Sénégal'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1746',
    to_date: '1746',
    preview: 'NÉCESSAIRE (1746-1746): Nantes → Lorient pour le Sénégal'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1769',
    to_date: '1770',
    preview: 'NÉCESSAIRE (1769-1770): Lorient → Inde et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1770',
    to_date: '1770',
    preview: 'NÉCESSAIRE (1769-1770): Lorient → Inde et Mascareignes'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1721',
    preview: 'NÉRÉIDE (1720-1721): La Rochelle → Côte de Guinée → La Grenade → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1721',
    preview: 'NÉRÉIDE (1720-1721): La Rochelle → Côte de Guinée → La Grenade → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1721',
    to_date: '1721',
    preview: 'NÉRÉIDE (1720-1721): La Rochelle → Côte de Guinée → La Grenade → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1723',
    to_date: '1725',
    preview: 'NÉRÉIDE (1723-1725): Lorient → Juda et côtes de Guinée → Martinique → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1725',
    to_date: '1725',
    preview: 'NÉRÉIDE (1723-1725): Lorient → Juda et côtes de Guinée → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1725',
    to_date: '1725',
    preview: 'NÉRÉIDE (1723-1725): Lorient → Juda et côtes de Guinée → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1729',
    to_date: '1731',
    preview: 'NÉRÉIDE (1729-1731): Lorient →  Portendick, Sénégal et Gorée → Saint-Domingue → Lorient → Nantes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1731',
    to_date: '1731',
    preview: 'NÉRÉIDE (1729-1731): Lorient →  Portendick, Sénégal et Gorée → Saint-Domingue → Lorient → Nantes → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1731',
    to_date: '1731',
    preview: 'NÉRÉIDE (1729-1731): Lorient →  Portendick, Sénégal et Gorée → Saint-Domingue → Lorient → Nantes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1732',
    to_date: '1733',
    preview: 'NÉRÉIDE (1732-1733): Lorient → Sénégal et Portendick → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1733',
    to_date: '1733',
    preview: 'NÉRÉIDE (1732-1733): Lorient → Sénégal et Portendick → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1734',
    to_date: '1735',
    preview: 'NÉRÉIDE (1734-1735): Lorient → Sénégal et Gorée → Fernando de Noronha → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1735',
    to_date: '1735',
    preview: 'NÉRÉIDE (1734-1735): Lorient → Sénégal et Gorée → Fernando de Noronha → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1775',
    to_date: '1777',
    preview: 'SÉVÈRE (1775-1777): Lorient → Mascareignes → Inde → Chine → Luanda → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1777',
    to_date: '1777',
    preview: 'SÉVÈRE (1775-1777): Lorient → Mascareignes → Inde → Chine → Luanda → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1777',
    to_date: '1777',
    preview: 'SÉVÈRE (1775-1777): Lorient → Mascareignes → Inde → Chine → Luanda → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1781',
    to_date: '1781',
    preview: 'SÉRAPIS (1781-1781): Lorient → île de France → Foulpointe, Madagascar'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1781',
    to_date: '1781',
    preview: 'SÉRAPIS (1781-1781): Lorient → île de France → Foulpointe, Madagascar'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1720',
    to_date: '1722',
    preview: 'SÉRIEUSE (1720-1722): Le Havre → Sénégal et Gorée → Antilles → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1722',
    to_date: '1722',
    preview: 'SÉRIEUSE (1720-1722): Le Havre → Sénégal et Gorée → Antilles → Le Havre'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1722',
    to_date: '1722',
    preview: 'SÉRIEUSE (1720-1722): Le Havre → Sénégal et Gorée → Antilles → Le Havre'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1723',
    to_date: '1724',
    preview: 'SÉRIEUSE (1723-1724): Le Havre → Sénégal et Gorée → Antilles → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1724',
    to_date: '1724',
    preview: 'SÉRIEUSE (1723-1724): Le Havre → Sénégal et Gorée → Antilles → Le Havre'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'SÉRIEUSE (1723-1724): Le Havre → Sénégal et Gorée → Antilles → Le Havre'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1724',
    to_date: '1726',
    preview: 'SÉRIEUSE (1724-1726): Le Havre → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1726',
    to_date: '1726',
    preview: 'SÉRIEUSE (1724-1726): Le Havre → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'SÉRIEUSE (1724-1726): Le Havre → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1759',
    to_date: '1759',
    preview: 'SOCIÉTÉ (1759-1759): Cap-Français → Nantes → Port-Louis'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1759',
    to_date: '1759',
    preview: 'SOCIÉTÉ (1759-1759): Cap-Français → Nantes → Port-Louis'
  },
  {
    from: 'Madagascar',
    to: 'Caribbean',
    from_date: '1760',
    to_date: '1761',
    preview: 'SOCIÉTÉ (1760-1761): Port-Louis → Cap-Français ?'
  },
  {
    from: 'Madagascar',
    to: 'Caribbean',
    from_date: '1760',
    to_date: '1760',
    preview: 'SOCIÉTÉ (1760-1760): Port-Louis → Cap-Français → Port-Louis'
  },
  {
    from: 'Caribbean',
    to: 'Madagascar',
    from_date: '1760',
    to_date: '1760',
    preview: 'SOCIÉTÉ (1760-1760): Port-Louis → Cap-Français → Port-Louis'
  },
  {
    from: 'India',
    to: 'Caribbean',
    from_date: '1760',
    to_date: '1761',
    preview: 'SOCIÉTÉ (1760-1761): Petit Goave → côte de Saint-Domingue → Port-Louis'
  },
  {
    from: 'Caribbean',
    to: 'Madagascar',
    from_date: '1761',
    to_date: '1761',
    preview: 'SOCIÉTÉ (1760-1761): Petit Goave → côte de Saint-Domingue → Port-Louis'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1762',
    to_date: '1762',
    preview: 'SOCIÉTÉ (1762-1762): Port-Louis → Bordeaux ?'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1717',
    to_date: '1718',
    preview: 'SOLIDE (1717-1718): Le Havre → Côte occidentale d’Afrique → Antilles → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1718',
    to_date: '1718',
    preview: 'SOLIDE (1717-1718): Le Havre → Côte occidentale d’Afrique → Antilles → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1719',
    to_date: '1721',
    preview: 'SOLIDE (1719-1721): Le Havre → Inde → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1721',
    to_date: '1721',
    preview: 'SOLIDE (1719-1721): Le Havre → Inde → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1722',
    to_date: '1723',
    preview: 'SOLIDE (1722-1723): Lorient → au devant des vaisseaux → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1722',
    to_date: '1723',
    preview: 'SOLIDE (1722-1723): Lorient → au devant des vaisseaux → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1724',
    to_date: '1726',
    preview: 'SOLIDE (1724-1726): Lorient → Angola → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'SOLIDE (1724-1726): Lorient → Angola → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1727',
    to_date: '1728',
    preview: 'SOLIDE (1727-1728): Lorient → Ténériffe → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1728',
    to_date: '1728',
    preview: 'SOLIDE (1727-1728): Lorient → Ténériffe → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1728',
    to_date: '1728',
    preview: 'SOLIDE (1727-1728): Lorient → Ténériffe → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1728',
    to_date: '1728',
    preview: 'SOLIDE (1727-1728): Lorient → Ténériffe → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1767',
    to_date: '1768',
    preview: 'SOLIDE (1767-1768): Le Havre → Lorient → Inde et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1768',
    to_date: '1768',
    preview: 'SOLIDE (1767-1768): Le Havre → Lorient → Inde et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1773',
    to_date: '1774',
    preview: 'SOLIDE (1773-1774): Île de France → Île Bourbon → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1787',
    to_date: '1789',
    preview: 'SOLIDE (1787-1789): Lorient → île de France'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1766',
    to_date: '1769',
    preview: 'SAGE (1766-1769): Corvette de Lorient affrétée puis achetée par la Compagnie des Indes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1769',
    to_date: '1769',
    preview: 'SAGE (1766-1769): Corvette de Lorient affrétée puis achetée par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1766',
    to_date: '1769',
    preview: 'SAGE (1766-1769): Corvette de Lorient affrétée puis achetée par la Compagnie des Indes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1769',
    to_date: '1769',
    preview: 'SAGE (1766-1769): Corvette de Lorient affrétée puis achetée par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1776',
    to_date: '1777',
    preview: 'SAGE (1776-1777): Lorient → Inde → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1777',
    to_date: '1777',
    preview: 'SAGE (1776-1777): Lorient → Inde → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1755',
    to_date: '1757',
    preview: 'SAINT-CONTEST (1755-1757): Lorient → Inde'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1747',
    to_date: '1747',
    preview: 'SAINT-CHARLES (1747-1747): Lorient pour le Sénégal'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1755',
    to_date: '1765',
    preview: 'SAINT-CHARLES (1755-1765): Lorient → Brésil → Mascareignes → cap de Bonne-Espérance → Mascareignes →  vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1769',
    to_date: '1769',
    preview: 'SAINT-CHARLES (1769-1769): Lorient → Mascareignes'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1777',
    to_date: '1777',
    preview: 'SAINT-CHARLES (1777-1777): Lorient → Saint-Domingue ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1747',
    to_date: '1747',
    preview: 'SAINT-ANTOINE (1747-1747): Navire de Nantes affrété par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1720',
    preview: 'SAINT-ANDRÉ (1720-1720): Lorient → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1720',
    preview: 'SAINT-ANDRÉ (1720-1720): Lorient → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'SAINT-ANDRÉ (1720-1720): Lorient → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1722',
    preview: 'SAINT-ANDRÉ (1721-1722): Port-Louis → Louisiane → Port-Louis'
  },
  {
    from: 'Louisiana',
    to: 'Madagascar',
    from_date: '1722',
    to_date: '1722',
    preview: 'SAINT-ANDRÉ (1721-1722): Port-Louis → Louisiane → Port-Louis'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1724',
    to_date: '1725',
    preview: 'SAINT-ANDRÉ (1724-1725): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1725',
    to_date: '1725',
    preview: 'SAINT-ANDRÉ (1724-1725): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1725',
    to_date: '1725',
    preview: 'SAINT-ANDRÉ (1724-1725): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1725',
    to_date: '1725',
    preview: 'SAINT-ANDRÉ (1724-1725): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1726',
    to_date: '1727',
    preview: 'SAINT-ANDRÉ (1726-1727): Lorient → Saint-Domingue → Louisiane → Saint-Domingue'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1727',
    to_date: '1727',
    preview: 'SAINT-ANDRÉ (1726-1727): Lorient → Saint-Domingue → Louisiane → Saint-Domingue'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1727',
    to_date: '1727',
    preview: 'SAINT-ANDRÉ (1726-1727): Lorient → Saint-Domingue → Louisiane → Saint-Domingue'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1769',
    to_date: '1770',
    preview: 'SAINT-ANDRÉ (1769-1770): Le Havre → Lorient → Inde et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1770',
    to_date: '1770',
    preview: 'SAINT-ANDRÉ (1769-1770): Le Havre → Lorient → Inde et Mascareignes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1719',
    to_date: '1720',
    preview: 'SAINT-ALBIN (1719-1720): Le Havre → Sénégal et Gorée → Antilles → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1720',
    preview: 'SAINT-ALBIN (1719-1720): Le Havre → Sénégal et Gorée → Antilles → Le Havre'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'SAINT-ALBIN (1719-1720): Le Havre → Sénégal et Gorée → Antilles → Le Havre'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1721',
    to_date: '1723',
    preview: 'SAINT-ALBIN (1721-1723): Le Havre → Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1723',
    to_date: '1723',
    preview: 'SAINT-ALBIN (1721-1723): Le Havre → Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1723',
    to_date: '1723',
    preview: 'SAINT-ALBIN (1721-1723): Le Havre → Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1737',
    to_date: '1739',
    preview: 'SAINT-GÉRAN (1737-1739): Lorient → Cadix → Anjouan → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1739',
    to_date: '1739',
    preview: 'SAINT-GÉRAN (1737-1739): Lorient → Cadix → Anjouan → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'SAINT-GÉRAN (1737-1739): Lorient → Cadix → Anjouan → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1739',
    to_date: '1739',
    preview: 'SAINT-GÉRAN (1737-1739): Lorient → Cadix → Anjouan → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1739',
    to_date: '1739',
    preview: 'SAINT-GÉRAN (1737-1739): Lorient → Cadix → Anjouan → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1739',
    to_date: '1741',
    preview: 'SAINT-GÉRAN (1739-1741): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1741',
    to_date: '1741',
    preview: 'SAINT-GÉRAN (1739-1741): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1741',
    to_date: '1741',
    preview: 'SAINT-GÉRAN (1739-1741): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1742',
    to_date: '1743',
    preview: 'SAINT-GÉRAN (1742-1743): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1743',
    to_date: '1743',
    preview: 'SAINT-GÉRAN (1742-1743): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1743',
    to_date: '1743',
    preview: 'SAINT-GÉRAN (1742-1743): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1744',
    to_date: '1744',
    preview: 'SAINT-GÉRAN (1744-1744): Lorient → Gorée → Mascareignes'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1744',
    to_date: '1744',
    preview: 'SAINT-GÉRAN (1744-1744): Lorient → Gorée → Mascareignes'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1781',
    to_date: '1782',
    preview: 'SAINT-ESPRIT (1781-1782): Saint-Malo → Brest → Lorient → Brest → Martinique → Cap-Français → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'SAINT-ESPRIT (1781-1782): Saint-Malo → Brest → Lorient → Brest → Martinique → Cap-Français → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1785',
    to_date: '1787',
    preview: 'SAINT-ESPRIT (1785-1787): Saint-Malo → îles de France et de Bourbon → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1787',
    to_date: '1787',
    preview: 'SAINT-ESPRIT (1785-1787): Saint-Malo → îles de France et de Bourbon → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1788',
    to_date: '1788',
    preview: 'SAINT-ESPRIT (1788-1788): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1744',
    to_date: '1744',
    preview: 'SAINT-ESPRIT DIT LA MINERVE (1744-1744): Marseille → Cadix → Cap-Français → Vera Cruz (Mexique) → Cap-Français → Port-Louis'
  },
  {
    from: 'Caribbean',
    to: 'Madagascar',
    from_date: '1744',
    to_date: '1744',
    preview: 'SAINT-ESPRIT DIT LA MINERVE (1744-1744): Marseille → Cadix → Cap-Français → Vera Cruz (Mexique) → Cap-Français → Port-Louis'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1717',
    to_date: '1719',
    preview: 'SAINT-JOSEPH (1717-1719): Honfleur → Sénégal → Saint-Domingue → Honfleur'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1719',
    to_date: '1719',
    preview: 'SAINT-JOSEPH (1717-1719): Honfleur → Sénégal → Saint-Domingue → Honfleur'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1719',
    to_date: '1719',
    preview: 'SAINT-JOSEPH (1717-1719): Honfleur → Sénégal → Saint-Domingue → Honfleur'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1731',
    to_date: '1731',
    preview: 'SAINT-JOSEPH ex  (1731-1731): Pondichéry → Mascareignes → Pondichéry'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1731',
    to_date: '1731',
    preview: 'SAINT-JOSEPH ex  (1731-1731): Pondichéry → Mascareignes → Pondichéry'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1733',
    to_date: '1733',
    preview: 'SAINT-JOSEPH ex  (1733-1733): Pondichéry → Mascareignes → Pondichéry'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1733',
    to_date: '1733',
    preview: 'SAINT-JOSEPH ex  (1733-1733): Pondichéry → Mascareignes → Pondichéry'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1774',
    to_date: '1774',
    preview: 'SAINT-JOSEPH (1774-1774): Lorient → Inde ?'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1722',
    to_date: '1722',
    preview: 'SAINT-JACQUES (1722-1722): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1767',
    to_date: '1773',
    preview: 'SAINT-JEAN-BAPTISTE (1767-1773): Lorient → Inde et Mascareignes → Pacifique'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1773',
    to_date: '1773',
    preview: 'SAINT-JEAN-BAPTISTE (1767-1773): Lorient → Inde et Mascareignes → Pacifique'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1773',
    to_date: '1773',
    preview: 'SAINT-JEAN-BAPTISTE (1767-1773): Lorient → Inde et Mascareignes → Pacifique'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1731',
    to_date: '1732',
    preview: 'SAINT-JEAN-L’ÉVANGÉLISTE ex  (1731-1732): Porto → Madagascar et Mascareignes'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1717',
    to_date: '1718',
    preview: 'SAINT-LOUIS (1717-1718): Saint-Malo → Le Havre → Antilles → Le Havre'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1718',
    to_date: '1718',
    preview: 'SAINT-LOUIS (1717-1718): Saint-Malo → Le Havre → Antilles → Le Havre'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1719',
    to_date: '1721',
    preview: 'SAINT-LOUIS (1719-1721): La Rochelle → Louisiane'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1719',
    to_date: '1722',
    preview: 'SAINT-LOUIS (1719-1722): Saint-Malo → Inde'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1729',
    to_date: '1731',
    preview: 'SAINT-LOUIS (1729-1731): Lorient → Sénégal et Gorée, Portendick → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1731',
    to_date: '1731',
    preview: 'SAINT-LOUIS (1729-1731): Lorient → Sénégal et Gorée, Portendick → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1731',
    to_date: '1731',
    preview: 'SAINT-LOUIS (1729-1731): Lorient → Sénégal et Gorée, Portendick → Antilles → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1731',
    to_date: '1731',
    preview: 'SAINT-LOUIS (1729-1731): Lorient → Sénégal et Gorée, Portendick → Antilles → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1732',
    to_date: '1733',
    preview: 'SAINT-LOUIS (1732-1733): Lorient → Bordeaux → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1733',
    to_date: '1733',
    preview: 'SAINT-LOUIS (1732-1733): Lorient → Bordeaux → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1733',
    to_date: '1733',
    preview: 'SAINT-LOUIS (1732-1733): Lorient → Bordeaux → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1733',
    to_date: '1733',
    preview: 'SAINT-LOUIS (1732-1733): Lorient → Bordeaux → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1733',
    to_date: '1733',
    preview: 'SAINT-LOUIS (1732-1733): Lorient → Bordeaux → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1734',
    to_date: '1735',
    preview: 'SAINT-LOUIS (1734-1735): Lorient → Sénégal et Gorée, Portendick  → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1735',
    to_date: '1735',
    preview: 'SAINT-LOUIS (1734-1735): Lorient → Sénégal et Gorée, Portendick  → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1735',
    to_date: '1735',
    preview: 'SAINT-LOUIS (1734-1735): Lorient → Sénégal et Gorée, Portendick  → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1745',
    to_date: '1748',
    preview: 'SAINT-LOUIS (1745-1748): Lorient → Mascareignes et Madagascar → Inde'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1748',
    to_date: '1748',
    preview: 'SAINT-LOUIS (1745-1748): Lorient → Mascareignes et Madagascar → Inde'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1748',
    to_date: '1748',
    preview: 'SAINT-LOUIS (1745-1748): Lorient → Mascareignes et Madagascar → Inde'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1756',
    to_date: '1758',
    preview: 'SAINT-LUC (1756-1758): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1758',
    to_date: '1758',
    preview: 'SAINT-LUC (1756-1758): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1758',
    to_date: '1759',
    preview: 'SAINT-LUC (1758-1759): Lorient → Sénégal et Gorée → Brest → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1759',
    to_date: '1759',
    preview: 'SAINT-LUC (1758-1759): Lorient → Sénégal et Gorée → Brest → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1759',
    to_date: '1760',
    preview: 'SAINT-LUC (1759-1760): Lorient → Inde et Mascareignes → île de France → vaisseau de côte'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'SAINT-LUC (1759-1760): Lorient → Inde et Mascareignes → île de France → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1747',
    to_date: '1748',
    preview: 'SAINT-MALO ou MALO (1747-1748): Frégate de Saint-Malo affrétée puis achetée par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1729',
    to_date: '1730',
    preview: 'SAINT-MICHEL (1729-1730): Nantes → Lisbonne → Louisiane'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1730',
    to_date: '1730',
    preview: 'SAINT-MICHEL (1729-1730): Nantes → Lisbonne → Louisiane'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1730',
    to_date: '1732',
    preview: 'SAINT-MICHEL (1730-1732): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1732',
    to_date: '1732',
    preview: 'SAINT-MICHEL (1730-1732): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1732',
    to_date: '1732',
    preview: 'SAINT-MICHEL (1730-1732): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1732',
    to_date: '1732',
    preview: 'SAINT-MICHEL (1732-1732): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1732',
    to_date: '1732',
    preview: 'SAINT-MICHEL (1732-1732): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1733',
    to_date: '1733',
    preview: 'SAINT-MICHEL (1733-1733): Lorient → Sénégal et Portendick → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1733',
    to_date: '1733',
    preview: 'SAINT-MICHEL (1733-1733): Lorient → Sénégal et Portendick → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1734',
    to_date: '1735',
    preview: 'SAINT-MICHEL (1734-1735): Lorient → Gorée → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1735',
    to_date: '1735',
    preview: 'SAINT-MICHEL (1734-1735): Lorient → Gorée → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1735',
    to_date: '1735',
    preview: 'SAINT-MICHEL (1734-1735): Lorient → Gorée → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1735',
    to_date: '1735',
    preview: 'SAINT-MICHEL (1734-1735): Lorient → Gorée → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1735',
    to_date: '1737',
    preview: 'SAINT-MICHEL (1735-1737): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1737',
    to_date: '1737',
    preview: 'SAINT-MICHEL (1735-1737): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1737',
    to_date: '1737',
    preview: 'SAINT-MICHEL (1735-1737): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1737',
    to_date: '1738',
    preview: 'SAINT-MICHEL (1737-1738): Lorient → Sénégal → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1738',
    to_date: '1738',
    preview: 'SAINT-MICHEL (1737-1738): Lorient → Sénégal → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1738',
    to_date: '1738',
    preview: 'SAINT-MICHEL (1737-1738): Lorient → Sénégal → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1739',
    to_date: '1739',
    preview: 'SAINT-MICHEL (1739-1739): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1739',
    to_date: '1739',
    preview: 'SAINT-MICHEL (1739-1739): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1740',
    to_date: '1740',
    preview: 'SAINT-MICHEL (1740-1740): Lorient → Sénégal et Gorée → La Corogne → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1740',
    to_date: '1740',
    preview: 'SAINT-MICHEL (1740-1740): Lorient → Sénégal et Gorée → La Corogne → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1741',
    to_date: '1742',
    preview: 'SAINT-MICHEL (1741-1742): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1742',
    to_date: '1742',
    preview: 'SAINT-MICHEL (1741-1742): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1742',
    to_date: '1742',
    preview: 'SAINT-MICHEL (1741-1742): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1729',
    to_date: '1729',
    preview: 'SAINT-PIERRE (1729-1729): Lorient → Martinique ?'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1730',
    to_date: '1730',
    preview: 'SAINT-PIERRE (1730-1730): Pondichéry → Mascareignes → Pondichéry'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1730',
    to_date: '1730',
    preview: 'SAINT-PIERRE (1730-1730): Pondichéry → Mascareignes → Pondichéry'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1732',
    to_date: '1732',
    preview: 'SAINT-PIERRE (1732-1732): Pondichéry → Mascareignes → Pondichéry'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1732',
    to_date: '1732',
    preview: 'SAINT-PIERRE (1732-1732): Pondichéry → Mascareignes → Pondichéry'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1735',
    to_date: '1738',
    preview: 'SAINT-PIERRE (1735-1738): Pondichéry → Mascareignes → Pondichéry'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1738',
    to_date: '1738',
    preview: 'SAINT-PIERRE (1735-1738): Pondichéry → Mascareignes → Pondichéry'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1745',
    to_date: '1745',
    preview: 'SAINT-PIERRE (1745-1745): Lorient → Bordeaux → Lorient → Bordeaux → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1745',
    to_date: '1745',
    preview: 'SAINT-PIERRE (1745-1745): Lorient → Bordeaux → Lorient → Bordeaux → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1745',
    to_date: '1745',
    preview: 'SAINT-PIERRE (1745-1745): Lorient → Bordeaux → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1750',
    to_date: '1752',
    preview: 'SAINT-PRIEST (1750-1752): Lorient → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1752',
    to_date: '1752',
    preview: 'SAINT-PRIEST (1750-1752): Lorient → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1752',
    to_date: '1752',
    preview: 'SAINT-PRIEST (1750-1752): Lorient → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1752',
    to_date: '1752',
    preview: 'SAINT-PRIEST (1750-1752): Lorient → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1752',
    to_date: '1754',
    preview: 'SAINT-PRIEST (1752-1754): Lorient → Gorée → Mascareignes → Anjouan → Inde et Mascareignes → Açores → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1754',
    to_date: '1754',
    preview: 'SAINT-PRIEST (1752-1754): Lorient → Gorée → Mascareignes → Anjouan → Inde et Mascareignes → Açores → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1754',
    to_date: '1754',
    preview: 'SAINT-PRIEST (1752-1754): Lorient → Gorée → Mascareignes → Anjouan → Inde et Mascareignes → Açores → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1754',
    to_date: '1754',
    preview: 'SAINT-PRIEST (1752-1754): Lorient → Gorée → Mascareignes → Anjouan → Inde et Mascareignes → Açores → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1754',
    to_date: '1754',
    preview: 'SAINT-PRIEST (1752-1754): Lorient → Gorée → Mascareignes → Anjouan → Inde et Mascareignes → Açores → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1754',
    to_date: '1754',
    preview: 'SAINT-PRIEST (1752-1754): Lorient → Gorée → Mascareignes → Anjouan → Inde et Mascareignes → Açores → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1755',
    to_date: '1759',
    preview: 'SAINT-PRIEST (1755-1759): Lorient → Brésil → Mascareignes → Inde → Chine → Mascareignes et Madagascar → Santander → Rochefort'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1759',
    to_date: '1759',
    preview: 'SAINT-PRIEST (1755-1759): Lorient → Brésil → Mascareignes → Inde → Chine → Mascareignes et Madagascar → Santander → Rochefort'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1759',
    to_date: '1759',
    preview: 'SAINT-PRIEST (1755-1759): Lorient → Brésil → Mascareignes → Inde → Chine → Mascareignes et Madagascar → Santander → Rochefort'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1759',
    to_date: '1759',
    preview: 'SAINT-PRIEST (1755-1759): Lorient → Brésil → Mascareignes → Inde → Chine → Mascareignes et Madagascar → Santander → Rochefort'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1759',
    to_date: '1759',
    preview: 'SAINT-PRIEST (1755-1759): Lorient → Brésil → Mascareignes → Inde → Chine → Mascareignes et Madagascar → Santander → Rochefort'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1759',
    to_date: '1759',
    preview: 'SAINT-PRIEST (1755-1759): Lorient → Brésil → Mascareignes → Inde → Chine → Mascareignes et Madagascar → Santander → Rochefort'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1762',
    preview: 'SAINT-PRIEST (1761-1762): Rochefort → Mascareignes'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1781',
    to_date: '1782',
    preview: 'SAINT-RENÉ (1781-1782): Bordeaux → Guadeloupe → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'SAINT-RENÉ (1781-1782): Bordeaux → Guadeloupe → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1788',
    to_date: '1788',
    preview: 'SAINT-RÉMI (1788-1788): Lorient → îles de France et de Bourbon ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1775',
    to_date: '1775',
    preview: 'SAINT-VINCENT (1775-1775): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1720',
    preview: 'SAINT-ÉDOUARD (1720-1720): Lorient → Louisiane'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1772',
    to_date: '1773',
    preview: 'SAINTE-ANNE (1772-1773): Saint-Malo → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1773',
    to_date: '1773',
    preview: 'SAINTE-ANNE (1772-1773): Saint-Malo → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1773',
    to_date: '1773',
    preview: 'SAINTE-ANNE (1772-1773): Saint-Malo → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1774',
    to_date: '1775',
    preview: 'SAINTE-ANNE (1774-1775): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1775',
    to_date: '1775',
    preview: 'SAINTE-ANNE (1774-1775): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1734',
    to_date: '1735',
    preview: 'SAINTE-FAMILLE (1734-1735): Marseille → Saint-Domingue → Bordeaux → Vannes → Port-Louis'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1735',
    to_date: '1735',
    preview: 'SAINTE-FAMILLE (1734-1735): Marseille → Saint-Domingue → Bordeaux → Vannes → Port-Louis'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1735',
    to_date: '1735',
    preview: 'SAINTE-FAMILLE (1734-1735): Marseille → Saint-Domingue → Bordeaux → Vannes → Port-Louis'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1743',
    to_date: '1744',
    preview: 'SAINTE-GENEVIÈVE (1743-1744): Le Havre → Cadix → Marseille → Port-Louis'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1750',
    to_date: '1752',
    preview: 'SAINTE-REINE (1750-1752): Lorient → Lisbonne → Brésil → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1752',
    to_date: '1752',
    preview: 'SAINTE-REINE (1750-1752): Lorient → Lisbonne → Brésil → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1752',
    to_date: '1753',
    preview: 'SAINTE-REINE (1752-1753): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1753',
    to_date: '1753',
    preview: 'SAINTE-REINE (1752-1753): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1781',
    to_date: '1782',
    preview: 'SAINTE-ROSALIE (1781-1782): Marseille → Cadix → Martinique et Guadeloupe → Cap-Français → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'SAINTE-ROSALIE (1781-1782): Marseille → Cadix → Martinique et Guadeloupe → Cap-Français → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1721',
    preview: 'SAINTE-ÉLISABETH (1720-1721): Lorient → Louisiane'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1774',
    to_date: '1777',
    preview: 'SALOMON (1774-1777): Lorient → Mascareignes et Madagascar → Inde → Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1777',
    to_date: '1777',
    preview: 'SALOMON (1774-1777): Lorient → Mascareignes et Madagascar → Inde → Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1777',
    to_date: '1777',
    preview: 'SALOMON (1774-1777): Lorient → Mascareignes et Madagascar → Inde → Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1777',
    to_date: '1777',
    preview: 'SALOMON (1774-1777): Lorient → Mascareignes et Madagascar → Inde → Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1777',
    to_date: '1777',
    preview: 'SALOMON (1774-1777): Lorient → Mascareignes et Madagascar → Inde → Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1778',
    to_date: '1778',
    preview: 'SALOMON (1778-1778): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1775',
    to_date: '1776',
    preview: 'SARTINE (1775-1776): Lorient → Inde → île Bourbon → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1776',
    to_date: '1776',
    preview: 'SARTINE (1775-1776): Lorient → Inde → île Bourbon → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1776',
    to_date: '1776',
    preview: 'SARTINE (1775-1776): Lorient → Inde → île Bourbon → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1722',
    preview: 'SAÔNE (1721-1722): Lorient → Louisiane → Rochefort'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1722',
    to_date: '1722',
    preview: 'SAÔNE (1721-1722): Lorient → Louisiane → Rochefort'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1725',
    to_date: '1726',
    preview: 'SAÔNE (1725-1726): Rochefort → Lorient → Louisiane → Antilles'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1726',
    to_date: '1726',
    preview: 'SAÔNE (1725-1726): Rochefort → Lorient → Louisiane → Antilles'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1756',
    to_date: '1760',
    preview: 'SEYCHELLES ou SECHELLES (1756-1760): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1760',
    to_date: '1760',
    preview: 'SEYCHELLES ou SECHELLES (1756-1760): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'SEYCHELLES ou SECHELLES (1756-1760): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1760',
    to_date: '1760',
    preview: 'SEYCHELLES ou SECHELLES (1756-1760): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1760',
    to_date: '1760',
    preview: 'SEYCHELLES ou SECHELLES (1756-1760): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'SEYCHELLES ou SECHELLES (1756-1760): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1721',
    preview: 'SEINE (1720-1721): Lorient → Saint-Domingue → Louisiane'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1721',
    preview: 'SEINE (1720-1721): Lorient → Saint-Domingue → Louisiane'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1755',
    to_date: '1755',
    preview: 'SEINE (1755-1755): Lorient → Sénégal → Antilles'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1755',
    to_date: '1755',
    preview: 'SEINE (1755-1755): Lorient → Sénégal → Antilles'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1784',
    to_date: '1784',
    preview: 'SEINE (1784-1784): Lorient → Cap-Français ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1783',
    to_date: '1784',
    preview: 'SENSIBLE (1783-1784): Lorient → ? → Chine → île de France → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1784',
    to_date: '1784',
    preview: 'SENSIBLE (1783-1784): Lorient → ? → Chine → île de France → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1783',
    to_date: '1784',
    preview: 'SIX FRÈRES devenu la  (1783-1784): Lorient → cap de Bonne-Espérance ? → Mascareignes → Bordeaux'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1784',
    to_date: '1784',
    preview: 'SIX FRÈRES devenu la  (1783-1784): Lorient → cap de Bonne-Espérance ? → Mascareignes → Bordeaux'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1786',
    to_date: '1786',
    preview: 'SIX FRÈRES devenu la  (1786-1786): Bordeaux → île de France'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1752',
    to_date: '1754',
    preview: 'SILHOUETTE (1752-1754): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Angola → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1754',
    to_date: '1754',
    preview: 'SILHOUETTE (1752-1754): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Angola → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1754',
    to_date: '1754',
    preview: 'SILHOUETTE (1752-1754): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Angola → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1754',
    to_date: '1758',
    preview: 'SILHOUETTE (1754-1758): Lorient → Anjouan → Inde et Mascareignes, Madagascar → La Corogne → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1758',
    to_date: '1758',
    preview: 'SILHOUETTE (1754-1758): Lorient → Anjouan → Inde et Mascareignes, Madagascar → La Corogne → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1758',
    to_date: '1758',
    preview: 'SILHOUETTE (1754-1758): Lorient → Anjouan → Inde et Mascareignes, Madagascar → La Corogne → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1758',
    to_date: '1758',
    preview: 'SILHOUETTE (1754-1758): Lorient → Anjouan → Inde et Mascareignes, Madagascar → La Corogne → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1758',
    to_date: '1758',
    preview: 'SILHOUETTE (1754-1758): Lorient → Anjouan → Inde et Mascareignes, Madagascar → La Corogne → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1759',
    to_date: '1762',
    preview: 'SILHOUETTE (1759-1762): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1762',
    preview: 'SILHOUETTE (1759-1762): Lorient → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1754',
    to_date: '1754',
    preview: 'SINGE (1754-1754): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1720',
    to_date: '1722',
    preview: 'SIRÈNE (1720-1722): Lorient → Cap-Vert → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1722',
    to_date: '1722',
    preview: 'SIRÈNE (1720-1722): Lorient → Cap-Vert → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1722',
    to_date: '1722',
    preview: 'SIRÈNE (1720-1722): Lorient → Cap-Vert → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1722',
    to_date: '1722',
    preview: 'SIRÈNE (1720-1722): Lorient → Cap-Vert → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1724',
    to_date: '1726',
    preview: 'SIRÈNE (1724-1726): Lorient → Cadix → Inde et Mascareignes → Sainte-Hélène → Martinique → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1726',
    to_date: '1726',
    preview: 'SIRÈNE (1724-1726): Lorient → Cadix → Inde et Mascareignes → Sainte-Hélène → Martinique → Lorient'
  },
  {
    from: 'India',
    to: 'Caribbean',
    from_date: '1726',
    to_date: '1726',
    preview: 'SIRÈNE (1724-1726): Lorient → Cadix → Inde et Mascareignes → Sainte-Hélène → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'SIRÈNE (1724-1726): Lorient → Cadix → Inde et Mascareignes → Sainte-Hélène → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1728',
    to_date: '1730',
    preview: 'SIRÈNE (1728-1730): Lorient → Ténériffe → Inde et Mascareignes, Madagascar → Ascension → Martinique → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1730',
    to_date: '1730',
    preview: 'SIRÈNE (1728-1730): Lorient → Ténériffe → Inde et Mascareignes, Madagascar → Ascension → Martinique → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1730',
    to_date: '1730',
    preview: 'SIRÈNE (1728-1730): Lorient → Ténériffe → Inde et Mascareignes, Madagascar → Ascension → Martinique → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1730',
    to_date: '1730',
    preview: 'SIRÈNE (1728-1730): Lorient → Ténériffe → Inde et Mascareignes, Madagascar → Ascension → Martinique → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1730',
    to_date: '1730',
    preview: 'SIRÈNE (1728-1730): Lorient → Ténériffe → Inde et Mascareignes, Madagascar → Ascension → Martinique → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1730',
    to_date: '1730',
    preview: 'SIRÈNE (1728-1730): Lorient → Ténériffe → Inde et Mascareignes, Madagascar → Ascension → Martinique → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1730',
    to_date: '1730',
    preview: 'SIRÈNE (1728-1730): Lorient → Ténériffe → Inde et Mascareignes, Madagascar → Ascension → Martinique → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1730',
    to_date: '1730',
    preview: 'SIRÈNE (1728-1730): Lorient → Ténériffe → Inde et Mascareignes, Madagascar → Ascension → Martinique → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1730',
    to_date: '1730',
    preview: 'SIRÈNE (1728-1730): Lorient → Ténériffe → Inde et Mascareignes, Madagascar → Ascension → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1730',
    to_date: '1730',
    preview: 'SIRÈNE (1728-1730): Lorient → Ténériffe → Inde et Mascareignes, Madagascar → Ascension → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1731',
    to_date: '1732',
    preview: 'SIRÈNE (1731-1732): Lorient → Rio de Janeiro → Cap de Bonne-Espérance → Mascareignes'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1732',
    to_date: '1732',
    preview: 'SIRÈNE (1731-1732): Lorient → Rio de Janeiro → Cap de Bonne-Espérance → Mascareignes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1771',
    to_date: '1773',
    preview: 'SIRÈNE (1771-1773): La Rochelle → Mascareignes → Cap de Bonne-Espérance → Mascareignes → Inde → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1773',
    to_date: '1773',
    preview: 'SIRÈNE (1771-1773): La Rochelle → Mascareignes → Cap de Bonne-Espérance → Mascareignes → Inde → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1773',
    to_date: '1773',
    preview: 'SIRÈNE (1771-1773): La Rochelle → Mascareignes → Cap de Bonne-Espérance → Mascareignes → Inde → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1773',
    to_date: '1774',
    preview: 'SIRÈNE (1773-1774): Lorient → Vannes → Saint-Domingue → Nantes'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1774',
    to_date: '1774',
    preview: 'SIRÈNE (1773-1774): Lorient → Vannes → Saint-Domingue → Nantes'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1722',
    preview: 'SUBTILE (1720-1722): La Rochelle → Antilles → Louisiane'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1722',
    to_date: '1722',
    preview: 'SUBTILE (1720-1722): La Rochelle → Antilles → Louisiane'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1731',
    to_date: '1739',
    preview: 'SUBTILE (1731-1739): Dieppe →  Lorient →  Madagascar, Mascareignes et Inde → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'SUBTILE (1731-1739): Dieppe →  Lorient →  Madagascar, Mascareignes et Inde → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1739',
    to_date: '1739',
    preview: 'SUBTILE (1731-1739): Dieppe →  Lorient →  Madagascar, Mascareignes et Inde → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1759',
    to_date: '1760',
    preview: 'SUBTILE (1759-1760): Lorient → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1760',
    preview: 'SUBTILE (1759-1760): Lorient → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1760',
    to_date: '1760',
    preview: 'SUBTILE (1759-1760): Lorient → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1760',
    to_date: '1761',
    preview: 'SUBTILE (1760-1761): Lorient → Inde et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1761',
    preview: 'SUBTILE (1760-1761): Lorient → Inde et Mascareignes'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1781',
    to_date: '1782',
    preview: 'SULTAN (1781-1782): Bayonne → Cap-Français → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'SULTAN (1781-1782): Bayonne → Cap-Français → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1748',
    to_date: '1749',
    preview: 'SULTANE (1748-1749): Vaisseau de Nantes affrété par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1750',
    to_date: '1751',
    preview: 'SULTANE (1750-1751): Vaisseau de Nantes affrété par la Compagnie des Indes'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'SUPERBE (1782-1782): Saint-Domingue → France → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1783',
    to_date: '1783',
    preview: 'SUPERBE (1783-1783): Lorient → îles de France et de Bourbon ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1756',
    to_date: '1761',
    preview: 'SYLPHIDE ou SILPHIDE (1756-1761): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1761',
    to_date: '1761',
    preview: 'SYLPHIDE ou SILPHIDE (1756-1761): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1761',
    preview: 'SYLPHIDE ou SILPHIDE (1756-1761): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1761',
    to_date: '1761',
    preview: 'SYLPHIDE ou SILPHIDE (1756-1761): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1761',
    preview: 'SYLPHIDE ou SILPHIDE (1756-1761): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1761',
    to_date: '1761',
    preview: 'SYLPHIDE ou SILPHIDE (1756-1761): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1761',
    to_date: '1761',
    preview: 'SYLPHIDE ou SILPHIDE (1756-1761): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1761',
    preview: 'SYLPHIDE ou SILPHIDE (1756-1761): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1761',
    to_date: '1761',
    preview: 'SYLPHIDE ou SILPHIDE (1756-1761): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1761',
    preview: 'SYLPHIDE ou SILPHIDE (1756-1761): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1758',
    to_date: '1758',
    preview: 'SYLPHIDE (1758-1758): Port-Louis → La Rochelle ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1756',
    to_date: '1761',
    preview: 'SYLPHIDE ou SILPHIDE (1756-1761): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1761',
    to_date: '1761',
    preview: 'SYLPHIDE ou SILPHIDE (1756-1761): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1761',
    preview: 'SYLPHIDE ou SILPHIDE (1756-1761): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1761',
    to_date: '1761',
    preview: 'SYLPHIDE ou SILPHIDE (1756-1761): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1761',
    preview: 'SYLPHIDE ou SILPHIDE (1756-1761): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1761',
    to_date: '1761',
    preview: 'SYLPHIDE ou SILPHIDE (1756-1761): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1761',
    to_date: '1761',
    preview: 'SYLPHIDE ou SILPHIDE (1756-1761): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1761',
    preview: 'SYLPHIDE ou SILPHIDE (1756-1761): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1761',
    to_date: '1761',
    preview: 'SYLPHIDE ou SILPHIDE (1756-1761): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1761',
    preview: 'SYLPHIDE ou SILPHIDE (1756-1761): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1755',
    to_date: '1756',
    preview: 'PONDICHÉRY (1755-1756): Lorient → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1756',
    to_date: '1756',
    preview: 'PONDICHÉRY (1755-1756): Lorient → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1770',
    to_date: '1771',
    preview: 'PONDICHÉRY (1770-1771): Lorient → Île de France → Canton → Île de France → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1771',
    to_date: '1771',
    preview: 'PONDICHÉRY (1770-1771): Lorient → Île de France → Canton → Île de France → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1772',
    to_date: '1775',
    preview: 'PONDICHÉRY (1772-1775): Lorient → Mascareignes → Inde → Chine → Cap de Bonne-Espérance → Sainte-Hélène → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1775',
    to_date: '1775',
    preview: 'PONDICHÉRY (1772-1775): Lorient → Mascareignes → Inde → Chine → Cap de Bonne-Espérance → Sainte-Hélène → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1775',
    to_date: '1775',
    preview: 'PONDICHÉRY (1772-1775): Lorient → Mascareignes → Inde → Chine → Cap de Bonne-Espérance → Sainte-Hélène → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1776',
    to_date: '1779',
    preview: 'PONDICHÉRY (1776-1779): Lorient → Mascareignes et Inde → Chine → Mascareignes → Vigo → La Corogne → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1779',
    to_date: '1779',
    preview: 'PONDICHÉRY (1776-1779): Lorient → Mascareignes et Inde → Chine → Mascareignes → Vigo → La Corogne → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1779',
    to_date: '1779',
    preview: 'PONDICHÉRY (1776-1779): Lorient → Mascareignes et Inde → Chine → Mascareignes → Vigo → La Corogne → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1779',
    to_date: '1779',
    preview: 'PONDICHÉRY (1776-1779): Lorient → Mascareignes et Inde → Chine → Mascareignes → Vigo → La Corogne → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1714',
    to_date: '1715',
    preview: 'PONTCHARTRAIN (1714-1715): Nantes → Sénégal → Saint-Domingue → Nantes'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1715',
    to_date: '1715',
    preview: 'PONTCHARTRAIN (1714-1715): Nantes → Sénégal → Saint-Domingue → Nantes'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1715',
    to_date: '1715',
    preview: 'PONTCHARTRAIN (1714-1715): Nantes → Sénégal → Saint-Domingue → Nantes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1716',
    to_date: '1717',
    preview: 'PONTCHARTRAIN (1716-1717): Nantes → Sénégal ? → Saint-Domingue → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1717',
    to_date: '1717',
    preview: 'PONTCHARTRAIN (1716-1717): Nantes → Sénégal ? → Saint-Domingue → Le Havre'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1717',
    to_date: '1717',
    preview: 'PONTCHARTRAIN (1716-1717): Nantes → Sénégal ? → Saint-Domingue → Le Havre'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1718',
    to_date: '1719',
    preview: 'PONTCHARTRAIN (1718-1719): Le Havre → Sénégal → Saint-Domingue → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1719',
    to_date: '1719',
    preview: 'PONTCHARTRAIN (1718-1719): Le Havre → Sénégal → Saint-Domingue → Le Havre'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1719',
    to_date: '1719',
    preview: 'PONTCHARTRAIN (1718-1719): Le Havre → Sénégal → Saint-Domingue → Le Havre'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1720',
    to_date: '1720',
    preview: 'PONTCHARTRAIN (1720-1720): Le Havre → Sénégal et Gorée → Saint-Domingue → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1720',
    preview: 'PONTCHARTRAIN (1720-1720): Le Havre → Sénégal et Gorée → Saint-Domingue → Le Havre'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'PONTCHARTRAIN (1720-1720): Le Havre → Sénégal et Gorée → Saint-Domingue → Le Havre'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1722',
    to_date: '1723',
    preview: 'PONTCHARTRAIN (1722-1723): Le Havre → Sénégal et Gorée → Saint-Domingue → Nantes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1723',
    to_date: '1723',
    preview: 'PONTCHARTRAIN (1722-1723): Le Havre → Sénégal et Gorée → Saint-Domingue → Nantes → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1723',
    to_date: '1723',
    preview: 'PONTCHARTRAIN (1722-1723): Le Havre → Sénégal et Gorée → Saint-Domingue → Nantes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1725',
    to_date: '1727',
    preview: 'PONTCHARTRAIN (1725-1727): Lorient → Juda et côtes de Guinée → Martinique → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1727',
    to_date: '1727',
    preview: 'PONTCHARTRAIN (1725-1727): Lorient → Juda et côtes de Guinée → Martinique → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1727',
    to_date: '1727',
    preview: 'PONTCHARTRAIN (1725-1727): Lorient → Juda et côtes de Guinée → Martinique → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1731',
    to_date: '1732',
    preview: 'PONTCHARTRAIN (1731-1732): Lorient → Juda et côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1732',
    to_date: '1732',
    preview: 'PONTCHARTRAIN (1731-1732): Lorient → Juda et côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1732',
    to_date: '1732',
    preview: 'PONTCHARTRAIN (1731-1732): Lorient → Juda et côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1733',
    to_date: '1734',
    preview: 'PONTCHARTRAIN (1733-1734): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1734',
    to_date: '1734',
    preview: 'PONTCHARTRAIN (1733-1734): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1786',
    to_date: '1787',
    preview: 'PORT FRANC (1786-1787): Lorient → Saint-Pierre et Miquelon → Baltimore → Lorient'
  },
  {
    from: 'New France',
    to: 'France',
    from_date: '1787',
    to_date: '1787',
    preview: 'PORT FRANC (1786-1787): Lorient → Saint-Pierre et Miquelon → Baltimore → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1788',
    to_date: '1788',
    preview: 'PORT FRANC (1788-1788): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1720',
    preview: 'PORTEFAIX (1720-1720): La Rochelle → Louisiane'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1721',
    preview: 'PORTEFAIX (1721-1721): Lorient → Louisiane'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1725',
    to_date: '1726',
    preview: 'POSTILLON (1725-1726): Le Havre → Lorient/Port-Louis'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'POSTILLON (1725-1726): Le Havre → Lorient/Port-Louis'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1745',
    to_date: '1745',
    preview: 'POSTILLON (1745-1745): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1757',
    to_date: '1757',
    preview: 'PACIFIQUE (1757-1757): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1780',
    to_date: '1780',
    preview: 'PACTOLE (1780-1780): Lorient → Saint-Domingue ?'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1717',
    to_date: '1718',
    preview: 'PAIX (1717-1718): La Rochelle → Louisiane → La Rochelle'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1718',
    to_date: '1718',
    preview: 'PAIX (1717-1718): La Rochelle → Louisiane → La Rochelle'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1718',
    to_date: '1720',
    preview: 'PAIX (1718-1720): Saint-Malo → Moka et Mascareignes → Saint-Malo'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'PAIX (1718-1720): Saint-Malo → Moka et Mascareignes → Saint-Malo'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1735',
    to_date: '1737',
    preview: 'PAIX (1735-1737): Lorient → Cadix → Anjouan → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1737',
    to_date: '1737',
    preview: 'PAIX (1735-1737): Lorient → Cadix → Anjouan → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1737',
    to_date: '1737',
    preview: 'PAIX (1735-1737): Lorient → Cadix → Anjouan → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1737',
    to_date: '1737',
    preview: 'PAIX (1735-1737): Lorient → Cadix → Anjouan → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1738',
    to_date: '1740',
    preview: 'PAIX (1738-1740): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1740',
    to_date: '1740',
    preview: 'PAIX (1738-1740): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1740',
    to_date: '1740',
    preview: 'PAIX (1738-1740): Lorient → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1749',
    to_date: '1751',
    preview: 'PAIX (1749-1751): Lorient → Ténériffe → Anjouan → Inde et Mascareignes, Madagascar → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1751',
    to_date: '1751',
    preview: 'PAIX (1749-1751): Lorient → Ténériffe → Anjouan → Inde et Mascareignes, Madagascar → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1751',
    to_date: '1751',
    preview: 'PAIX (1749-1751): Lorient → Ténériffe → Anjouan → Inde et Mascareignes, Madagascar → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1751',
    to_date: '1751',
    preview: 'PAIX (1749-1751): Lorient → Ténériffe → Anjouan → Inde et Mascareignes, Madagascar → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1751',
    to_date: '1751',
    preview: 'PAIX (1749-1751): Lorient → Ténériffe → Anjouan → Inde et Mascareignes, Madagascar → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1751',
    to_date: '1751',
    preview: 'PAIX (1749-1751): Lorient → Ténériffe → Anjouan → Inde et Mascareignes, Madagascar → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1751',
    to_date: '1751',
    preview: 'PAIX (1749-1751): Lorient → Ténériffe → Anjouan → Inde et Mascareignes, Madagascar → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1751',
    to_date: '1751',
    preview: 'PAIX (1749-1751): Lorient → Ténériffe → Anjouan → Inde et Mascareignes, Madagascar → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1751',
    to_date: '1751',
    preview: 'PAIX (1749-1751): Lorient → Ténériffe → Anjouan → Inde et Mascareignes, Madagascar → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1752',
    to_date: '1753',
    preview: 'PAIX (1752-1753): Lorient → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1753',
    to_date: '1753',
    preview: 'PAIX (1752-1753): Lorient → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1753',
    to_date: '1753',
    preview: 'PAIX (1752-1753): Lorient → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1754',
    to_date: '1755',
    preview: 'PAIX (1754-1755): Lorient → Gorée → Madagascar et Mascareignes'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1755',
    to_date: '1755',
    preview: 'PAIX (1754-1755): Lorient → Gorée → Madagascar et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1755',
    to_date: '1755',
    preview: 'PAIX (1754-1755): Lorient → Gorée → Madagascar et Mascareignes'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1755',
    to_date: '1755',
    preview: 'PAIX (1754-1755): Lorient → Gorée → Madagascar et Mascareignes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1715',
    to_date: '1716',
    preview: 'PAIX COURONNÉE (1715-1716): Affrété par la Compagnie de Saint-Domingue'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1716',
    to_date: '1716',
    preview: 'PAIX COURONNÉE (1715-1716): Affrété par la Compagnie de Saint-Domingue'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1716',
    to_date: '1716',
    preview: 'PAIX COURONNÉE (1715-1716): Affrété par la Compagnie de Saint-Domingue'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1729',
    to_date: '1729',
    preview: 'PAON (1729-1729): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1729',
    to_date: '1729',
    preview: 'PAON (1729-1729): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1730',
    to_date: '1730',
    preview: 'PAON (1730-1730): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1745',
    to_date: '1745',
    preview: 'PAON (1745-1745): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1745',
    to_date: '1745',
    preview: 'PAON (1745-1745): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1746',
    to_date: '1746',
    preview: 'PAON (1746-1746): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1749',
    to_date: '1749',
    preview: 'PAON (1749-1749): Lorient → Brest → Lorient → Port-Louis → Lorient → Sénégal'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1749',
    to_date: '1749',
    preview: 'PAON (1749-1749): Lorient → Brest → Lorient → Port-Louis → Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1749',
    to_date: '1749',
    preview: 'PAON (1749-1749): Lorient → Brest → Lorient → Port-Louis → Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1741',
    to_date: '1748',
    preview: 'PARFAITE (1741-1748): Lorient → Mascareignes'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1747',
    to_date: '1747',
    preview: 'PETIT CHASSEUR ou CHASSEUR (1747-1747): Acheté à Saint-Malo par la Compagnie des Indes au sr Magon de La Balue'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1749',
    to_date: '1751',
    preview: 'PETIT CHASSEUR ou CHASSEUR (1749-1751): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1751',
    to_date: '1751',
    preview: 'PETIT CHASSEUR ou CHASSEUR (1749-1751): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1753',
    to_date: '1754',
    preview: 'PETIT CHASSEUR ou CHASSEUR (1753-1754): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1787',
    to_date: '1787',
    preview: 'PETIT BOULLONGNE (1787-1787): Lorient → îles de France et de Bourbon ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1780',
    to_date: '1780',
    preview: 'PETITE JULIE (1780-1780): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1786',
    to_date: '1786',
    preview: 'PETITE JULIE (1786-1786): Lorient → Sénégal et Gorée → Sierra Leone'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1738',
    to_date: '1739',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1738-1739): Lorient → Santiago (Cap-Vert) → Chine → Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1738-1739): Lorient → Santiago (Cap-Vert) → Chine → Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1739',
    to_date: '1739',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1738-1739): Lorient → Santiago (Cap-Vert) → Chine → Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1739',
    to_date: '1739',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1738-1739): Lorient → Santiago (Cap-Vert) → Chine → Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1740',
    to_date: '1742',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1740-1742): Lorient → Santiago (Cap-Vert) → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1742',
    to_date: '1742',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1740-1742): Lorient → Santiago (Cap-Vert) → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1742',
    to_date: '1742',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1740-1742): Lorient → Santiago (Cap-Vert) → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1742',
    to_date: '1742',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1740-1742): Lorient → Santiago (Cap-Vert) → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1742',
    to_date: '1742',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1740-1742): Lorient → Santiago (Cap-Vert) → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1743',
    to_date: '1744',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1743-1744): Lorient → Santiago → Anjouan → Inde et Mascareignes → Ascension → Louisbourg → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1744',
    to_date: '1744',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1743-1744): Lorient → Santiago → Anjouan → Inde et Mascareignes → Ascension → Louisbourg → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1744',
    to_date: '1744',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1743-1744): Lorient → Santiago → Anjouan → Inde et Mascareignes → Ascension → Louisbourg → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1744',
    to_date: '1744',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1743-1744): Lorient → Santiago → Anjouan → Inde et Mascareignes → Ascension → Louisbourg → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1744',
    to_date: '1744',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1743-1744): Lorient → Santiago → Anjouan → Inde et Mascareignes → Ascension → Louisbourg → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'New France',
    from_date: '1744',
    to_date: '1744',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1743-1744): Lorient → Santiago → Anjouan → Inde et Mascareignes → Ascension → Louisbourg → Lorient'
  },
  {
    from: 'New France',
    to: 'France',
    from_date: '1744',
    to_date: '1744',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1743-1744): Lorient → Santiago → Anjouan → Inde et Mascareignes → Ascension → Louisbourg → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1746',
    to_date: '1748',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1746-1748): Lorient → Sénégal et Gorée →  Mascareignes → Angola → Martinique → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1748',
    to_date: '1748',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1746-1748): Lorient → Sénégal et Gorée →  Mascareignes → Angola → Martinique → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Caribbean',
    from_date: '1748',
    to_date: '1748',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1746-1748): Lorient → Sénégal et Gorée →  Mascareignes → Angola → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1748',
    to_date: '1748',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1746-1748): Lorient → Sénégal et Gorée →  Mascareignes → Angola → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1765',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1764-1765): Lorient → Cadix → Chine → Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1765',
    to_date: '1765',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1764-1765): Lorient → Cadix → Chine → Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1765',
    to_date: '1765',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1764-1765): Lorient → Cadix → Chine → Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1765',
    to_date: '1767',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1765-1767): Lorient → Inde → Chine → Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1767',
    to_date: '1767',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1765-1767): Lorient → Inde → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1767',
    to_date: '1767',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1765-1767): Lorient → Inde → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1767',
    to_date: '1767',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1765-1767): Lorient → Inde → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1767',
    to_date: '1769',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1767-1769): Lorient → Cadix → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1769',
    to_date: '1769',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1767-1769): Lorient → Cadix → Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1770',
    to_date: '1771',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1770-1771): Lorient → Cadix → Mascareignes → Ascencion → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1771',
    to_date: '1771',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1770-1771): Lorient → Cadix → Mascareignes → Ascencion → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1771',
    to_date: '1773',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1771-1773): Lorient → Mascareignes → Chine → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1773',
    to_date: '1773',
    preview: 'PENTHIÈVRE ou DUC DE PENTHIÈVRE (1771-1773): Lorient → Mascareignes → Chine → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1731',
    to_date: '1733',
    preview: 'PHILIBERT ou PHILBERT (1731-1733): Lorient → Cadix → Cap de Bonne-Espérance → Inde et Mascareignes, Madagascar → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1733',
    to_date: '1733',
    preview: 'PHILIBERT ou PHILBERT (1731-1733): Lorient → Cadix → Cap de Bonne-Espérance → Inde et Mascareignes, Madagascar → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1733',
    to_date: '1733',
    preview: 'PHILIBERT ou PHILBERT (1731-1733): Lorient → Cadix → Cap de Bonne-Espérance → Inde et Mascareignes, Madagascar → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Louisiana',
    from_date: '1733',
    to_date: '1733',
    preview: 'PHILIBERT ou PHILBERT (1731-1733): Lorient → Cadix → Cap de Bonne-Espérance → Inde et Mascareignes, Madagascar → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1733',
    to_date: '1733',
    preview: 'PHILIBERT ou PHILBERT (1731-1733): Lorient → Cadix → Cap de Bonne-Espérance → Inde et Mascareignes, Madagascar → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1733',
    to_date: '1735',
    preview: 'PHILIBERT ou PHILBERT (1733-1735): Lorient → Cadix → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1735',
    to_date: '1735',
    preview: 'PHILIBERT ou PHILBERT (1733-1735): Lorient → Cadix → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1735',
    to_date: '1735',
    preview: 'PHILIBERT ou PHILBERT (1733-1735): Lorient → Cadix → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1735',
    to_date: '1735',
    preview: 'PHILIBERT ou PHILBERT (1733-1735): Lorient → Cadix → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1735',
    to_date: '1735',
    preview: 'PHILIBERT ou PHILBERT (1733-1735): Lorient → Cadix → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1736',
    to_date: '1738',
    preview: 'PHILIBERT ou PHILBERT (1736-1738): Lorient → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1738',
    to_date: '1738',
    preview: 'PHILIBERT ou PHILBERT (1736-1738): Lorient → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1738',
    to_date: '1738',
    preview: 'PHILIBERT ou PHILBERT (1736-1738): Lorient → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1738',
    to_date: '1738',
    preview: 'PHILIBERT ou PHILBERT (1736-1738): Lorient → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1738',
    to_date: '1738',
    preview: 'PHILIBERT ou PHILBERT (1736-1738): Lorient → Madagascar → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1738',
    to_date: '1739',
    preview: 'PHILIBERT ou PHILBERT (1738-1739): Lorient → Inde'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1742',
    to_date: '1744',
    preview: 'PHILIBERT ou PHILBERT (1742-1744): Lorient → Chine → Mascareignes → Ascension → Louisbourg → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1744',
    to_date: '1744',
    preview: 'PHILIBERT ou PHILBERT (1742-1744): Lorient → Chine → Mascareignes → Ascension → Louisbourg → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'New France',
    from_date: '1744',
    to_date: '1744',
    preview: 'PHILIBERT ou PHILBERT (1742-1744): Lorient → Chine → Mascareignes → Ascension → Louisbourg → Lorient'
  },
  {
    from: 'New France',
    to: 'France',
    from_date: '1744',
    to_date: '1744',
    preview: 'PHILIBERT ou PHILBERT (1742-1744): Lorient → Chine → Mascareignes → Ascension → Louisbourg → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1745',
    to_date: '1746',
    preview: 'PHILIBERT ou PHILBERT (1745-1746): Lorient → Chine → Mascareignes → Antilles → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1746',
    to_date: '1746',
    preview: 'PHILIBERT ou PHILBERT (1745-1746): Lorient → Chine → Mascareignes → Antilles → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Caribbean',
    from_date: '1746',
    to_date: '1746',
    preview: 'PHILIBERT ou PHILBERT (1745-1746): Lorient → Chine → Mascareignes → Antilles → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1746',
    to_date: '1746',
    preview: 'PHILIBERT ou PHILBERT (1745-1746): Lorient → Chine → Mascareignes → Antilles → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1749',
    to_date: '1750',
    preview: 'PHILIBERT ou PHILBERT (1749-1750): Vaisseau de Nantes affrété puis racheté par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1750',
    to_date: '1752',
    preview: 'PHILIBERT ou PHILBERT (1750-1752): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1752',
    to_date: '1752',
    preview: 'PHILIBERT ou PHILBERT (1750-1752): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1752',
    to_date: '1752',
    preview: 'PHILIBERT ou PHILBERT (1750-1752): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1718',
    to_date: '1720',
    preview: 'PHILIPPE (1718-1720): La Rochelle → Saint-Domingue et Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1720',
    preview: 'PHILIPPE (1718-1720): La Rochelle → Saint-Domingue et Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'PHILIPPE (1718-1720): La Rochelle → Saint-Domingue et Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1722',
    to_date: '1723',
    preview: 'PHILIPPE (1722-1723): Lorient → Antilles ? → Rochefort'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1723',
    to_date: '1723',
    preview: 'PHILIPPE (1722-1723): Lorient → Antilles ? → Rochefort'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1724',
    to_date: '1726',
    preview: 'PHILIPPE (1724-1726): Rochefort → Lorient → Sénégal → Antilles'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1726',
    to_date: '1726',
    preview: 'PHILIPPE (1724-1726): Rochefort → Lorient → Sénégal → Antilles'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1776',
    to_date: '1778',
    preview: 'PHILIPPINE (1776-1778): Marseille → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1778',
    to_date: '1778',
    preview: 'PHILIPPINE (1776-1778): Marseille → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1778',
    to_date: '1778',
    preview: 'PHILIPPINE (1776-1778): Marseille → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1725',
    to_date: '1726',
    preview: 'PHŒNIX ou PHÉNIX (1725-1726): Lorient → Angola → Martinique'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1736',
    to_date: '1737',
    preview: 'PHŒNIX (1736-1737): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1737',
    to_date: '1737',
    preview: 'PHŒNIX (1736-1737): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1737',
    to_date: '1737',
    preview: 'PHŒNIX (1736-1737): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1737',
    to_date: '1737',
    preview: 'PHŒNIX (1736-1737): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1737',
    to_date: '1737',
    preview: 'PHŒNIX (1736-1737): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1737',
    to_date: '1737',
    preview: 'PHŒNIX (1736-1737): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1737',
    to_date: '1739',
    preview: 'PHŒNIX (1737-1739): Lorient → Gorée → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'PHŒNIX (1737-1739): Lorient → Gorée → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1739',
    to_date: '1739',
    preview: 'PHŒNIX (1737-1739): Lorient → Gorée → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1739',
    to_date: '1739',
    preview: 'PHŒNIX (1737-1739): Lorient → Gorée → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'PHŒNIX (1737-1739): Lorient → Gorée → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Senegal',
    from_date: '1739',
    to_date: '1739',
    preview: 'PHŒNIX (1737-1739): Lorient → Gorée → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'PHŒNIX (1737-1739): Lorient → Gorée → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1739',
    to_date: '1739',
    preview: 'PHŒNIX (1737-1739): Lorient → Gorée → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Louisiana',
    from_date: '1739',
    to_date: '1739',
    preview: 'PHŒNIX (1737-1739): Lorient → Gorée → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1740',
    to_date: '1741',
    preview: 'PHŒNIX (1740-1741): Lorient → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1741',
    to_date: '1741',
    preview: 'PHŒNIX (1740-1741): Lorient → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1741',
    to_date: '1741',
    preview: 'PHŒNIX (1740-1741): Lorient → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1741',
    to_date: '1741',
    preview: 'PHŒNIX (1740-1741): Lorient → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1741',
    to_date: '1741',
    preview: 'PHŒNIX (1740-1741): Lorient → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1741',
    to_date: '1741',
    preview: 'PHŒNIX (1740-1741): Lorient → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1742',
    to_date: '1744',
    preview: 'PHŒNIX (1742-1744): Lorient → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1744',
    to_date: '1744',
    preview: 'PHŒNIX (1742-1744): Lorient → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1744',
    to_date: '1744',
    preview: 'PHŒNIX (1742-1744): Lorient → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1745',
    to_date: '1747',
    preview: 'PHŒNIX (1745-1747): Lorient → Brésil → Inde, Madagascar et Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1747',
    to_date: '1747',
    preview: 'PHŒNIX (1745-1747): Lorient → Brésil → Inde, Madagascar et Mascareignes'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1747',
    to_date: '1747',
    preview: 'PHŒNIX (1745-1747): Lorient → Brésil → Inde, Madagascar et Mascareignes'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1747',
    to_date: '1747',
    preview: 'PHŒNIX (1745-1747): Lorient → Brésil → Inde, Madagascar et Mascareignes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1753',
    to_date: '1754',
    preview: 'PHÉLYPEAUX (1753-1754): Lorient → Santiago (Cap-Vert) → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1754',
    to_date: '1754',
    preview: 'PHÉLYPEAUX (1753-1754): Lorient → Santiago (Cap-Vert) → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1754',
    to_date: '1754',
    preview: 'PHÉLYPEAUX (1753-1754): Lorient → Santiago (Cap-Vert) → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1754',
    to_date: '1754',
    preview: 'PHÉLYPEAUX (1753-1754): Lorient → Santiago (Cap-Vert) → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1755',
    to_date: '1757',
    preview: 'PHÉLYPEAUX (1755-1757): Lorient → Mascareignes et Madagascar'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1757',
    to_date: '1757',
    preview: 'PHÉLYPEAUX (1755-1757): Lorient → Mascareignes et Madagascar'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1757',
    to_date: '1757',
    preview: 'PHÉLYPEAUX (1755-1757): Lorient → Mascareignes et Madagascar'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1778',
    to_date: '1778',
    preview: 'PIE (1778-1778): Lorient → Martinique ?'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1778',
    to_date: '1778',
    preview: 'PIE (1778-1778): Lorient → Martinique → Mindin → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1778',
    to_date: '1778',
    preview: 'PIE (1778-1778): Lorient → Martinique → Mindin → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1752',
    to_date: '1753',
    preview: 'PIERRE DANIEL ou PIERRE (1752-1753): Lorient → Sénégal → Antilles → Saint-Malo'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1753',
    to_date: '1753',
    preview: 'PIERRE DANIEL ou PIERRE (1752-1753): Lorient → Sénégal → Antilles → Saint-Malo'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1753',
    to_date: '1753',
    preview: 'PIERRE DANIEL ou PIERRE (1752-1753): Lorient → Sénégal → Antilles → Saint-Malo'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1754',
    to_date: '1759',
    preview: 'PIERRE DANIEL ou PIERRE (1754-1759): Lorient → Mascareignes et Océan Indien'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1759',
    to_date: '1759',
    preview: 'PIERRE DANIEL ou PIERRE (1754-1759): Lorient → Mascareignes et Océan Indien'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1766',
    to_date: '1766',
    preview: 'PRUDENT (1766-1766): Navire de Lorient armé par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1738',
    to_date: '1739',
    preview: 'PRUDENTE (1738-1739): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1739',
    to_date: '1739',
    preview: 'PRUDENTE (1738-1739): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1741',
    to_date: '1742',
    preview: 'PRUDENTE (1741-1742): Lorient → Sénégal et Gambie'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1747',
    to_date: '1750',
    preview: 'PRINCE (1747-1750): Lorient → Brésil → Inde et Mascareignes → Siam → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1750',
    to_date: '1750',
    preview: 'PRINCE (1747-1750): Lorient → Brésil → Inde et Mascareignes → Siam → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1750',
    to_date: '1750',
    preview: 'PRINCE (1747-1750): Lorient → Brésil → Inde et Mascareignes → Siam → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1750',
    to_date: '1750',
    preview: 'PRINCE (1747-1750): Lorient → Brésil → Inde et Mascareignes → Siam → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1750',
    to_date: '1750',
    preview: 'PRINCE (1747-1750): Lorient → Brésil → Inde et Mascareignes → Siam → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1751',
    to_date: '1753',
    preview: 'PRINCE (1751-1753): Échoué au départ puis renfloué à Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1753',
    to_date: '1753',
    preview: 'PRINCE (1751-1753): Échoué au départ puis renfloué à Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1755',
    to_date: '1756',
    preview: 'PRINCE DE CONDÉ (1755-1756): Le Havre → Martinique → Port-Louis'
  },
  {
    from: 'Caribbean',
    to: 'Madagascar',
    from_date: '1756',
    to_date: '1756',
    preview: 'PRINCE DE CONDÉ (1755-1756): Le Havre → Martinique → Port-Louis'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1788',
    to_date: '1788',
    preview: 'PRINCE DE CONDÉ (1788-1788): Lorient → Pondichéry ?'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1720',
    to_date: '1722',
    preview: 'PRINCE DE CONTI ou PRINCE DE CONTY (1720-1722): Saint-Malo → Chine → La Corogne → Port-Louis'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1724',
    to_date: '1725',
    preview: 'PRINCE DE CONTI ou PRINCE DE CONTY (1724-1725): Lorient → Portendick, Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1725',
    to_date: '1725',
    preview: 'PRINCE DE CONTI ou PRINCE DE CONTY (1724-1725): Lorient → Portendick, Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1725',
    to_date: '1725',
    preview: 'PRINCE DE CONTI ou PRINCE DE CONTY (1724-1725): Lorient → Portendick, Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1726',
    to_date: '1728',
    preview: 'PRINCE DE CONTI ou PRINCE DE CONTY (1726-1728): Lorient → Sénégal et Gorée → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1728',
    to_date: '1728',
    preview: 'PRINCE DE CONTI ou PRINCE DE CONTY (1726-1728): Lorient → Sénégal et Gorée → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1728',
    to_date: '1728',
    preview: 'PRINCE DE CONTI ou PRINCE DE CONTY (1726-1728): Lorient → Sénégal et Gorée → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1728',
    to_date: '1728',
    preview: 'PRINCE DE CONTI ou PRINCE DE CONTY (1726-1728): Lorient → Sénégal et Gorée → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1728',
    to_date: '1729',
    preview: 'PRINCE DE CONTI ou PRINCE DE CONTY (1728-1729): Lorient → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1729',
    to_date: '1729',
    preview: 'PRINCE DE CONTI ou PRINCE DE CONTY (1728-1729): Lorient → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1729',
    to_date: '1729',
    preview: 'PRINCE DE CONTI ou PRINCE DE CONTY (1728-1729): Lorient → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1730',
    to_date: '1731',
    preview: 'PRINCE DE CONTI ou PRINCE DE CONTY (1730-1731): Lorient → Saint-Domingue → Louisiane'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1731',
    to_date: '1731',
    preview: 'PRINCE DE CONTI ou PRINCE DE CONTY (1730-1731): Lorient → Saint-Domingue → Louisiane'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1732',
    to_date: '1734',
    preview: 'PRINCE DE CONTI (1732-1734): Lorient → Cadix → Cap-Vert → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1734',
    to_date: '1734',
    preview: 'PRINCE DE CONTI (1732-1734): Lorient → Cadix → Cap-Vert → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1734',
    to_date: '1734',
    preview: 'PRINCE DE CONTI (1732-1734): Lorient → Cadix → Cap-Vert → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1734',
    to_date: '1734',
    preview: 'PRINCE DE CONTI (1732-1734): Lorient → Cadix → Cap-Vert → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1734',
    to_date: '1734',
    preview: 'PRINCE DE CONTI (1732-1734): Lorient → Cadix → Cap-Vert → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1734',
    to_date: '1734',
    preview: 'PRINCE DE CONTI (1732-1734): Lorient → Cadix → Cap-Vert → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1735',
    to_date: '1736',
    preview: 'PRINCE DE CONTI (1735-1736): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1736',
    to_date: '1736',
    preview: 'PRINCE DE CONTI (1735-1736): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1736',
    to_date: '1736',
    preview: 'PRINCE DE CONTI (1735-1736): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1736',
    to_date: '1736',
    preview: 'PRINCE DE CONTI (1735-1736): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1736',
    to_date: '1738',
    preview: 'PRINCE DE CONTI (1736-1738): Lorient → Cap de Bonne-Espérance → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1738',
    to_date: '1738',
    preview: 'PRINCE DE CONTI (1736-1738): Lorient → Cap de Bonne-Espérance → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1738',
    to_date: '1738',
    preview: 'PRINCE DE CONTI (1736-1738): Lorient → Cap de Bonne-Espérance → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1739',
    to_date: '1740',
    preview: 'PRINCE DE CONTI (1739-1740): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1740',
    to_date: '1740',
    preview: 'PRINCE DE CONTI (1739-1740): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1740',
    to_date: '1740',
    preview: 'PRINCE DE CONTI (1739-1740): Lorient → Cadix → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1741',
    to_date: '1741',
    preview: 'PRINCE DE CONTI (1741-1741): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1741',
    to_date: '1741',
    preview: 'PRINCE DE CONTI (1741-1741): Lorient → Sénégal → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1748',
    to_date: '1749',
    preview: 'PRINCESSE ÉMILIE ou PRINCESSE AMÉLIE (1748-1749): Madras → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1749',
    to_date: '1749',
    preview: 'PRINCESSE ÉMILIE ou PRINCESSE AMÉLIE (1748-1749): Madras → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1749',
    to_date: '1749',
    preview: 'PRINCESSE ÉMILIE ou PRINCESSE AMÉLIE (1748-1749): Madras → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1749',
    to_date: '1749',
    preview: 'PRINCESSE ÉMILIE ou PRINCESSE AMÉLIE (1748-1749): Madras → Inde et Mascareignes → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1721',
    preview: 'PROFOND (1720-1721): La Rochelle → Saint-Domingue et Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1721',
    preview: 'PROFOND (1720-1721): La Rochelle → Saint-Domingue et Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1721',
    to_date: '1721',
    preview: 'PROFOND (1720-1721): La Rochelle → Saint-Domingue et Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1723',
    preview: 'PROFOND (1721-1723): Lorient → Louisiane → Rochefort'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1723',
    to_date: '1723',
    preview: 'PROFOND (1721-1723): Lorient → Louisiane → Rochefort'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1723',
    to_date: '1726',
    preview: 'PROFOND (1723-1726): Rochefort → Lorient → Saint-Domingue → Louisiane → Lisbonne → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1726',
    to_date: '1726',
    preview: 'PROFOND (1723-1726): Rochefort → Lorient → Saint-Domingue → Louisiane → Lisbonne → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1726',
    to_date: '1726',
    preview: 'PROFOND (1723-1726): Rochefort → Lorient → Saint-Domingue → Louisiane → Lisbonne → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1726',
    to_date: '1726',
    preview: 'PROFOND (1723-1726): Rochefort → Lorient → Saint-Domingue → Louisiane → Lisbonne → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1719',
    to_date: '1720',
    preview: 'PROMPTE (1719-1720): Le Havre → Sénégal → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'PROMPTE (1719-1720): Le Havre → Sénégal → Le Havre'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1720',
    to_date: '1720',
    preview: 'PROMPTE (1720-1720): Le Havre → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1720',
    to_date: '1720',
    preview: 'PROMPTE (1720-1720): Le Havre → Sénégal → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'PROMPTE (1720-1720): Le Havre → Sénégal → Le Havre'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1724',
    to_date: '1725',
    preview: 'PROTHÉE (1724-1725): Le Havre → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1725',
    to_date: '1725',
    preview: 'PROTHÉE (1724-1725): Le Havre → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1777',
    to_date: '1777',
    preview: 'PRÉVOST (1777-1777): Lorient → îles de France et de Bourbon ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1749',
    to_date: '1752',
    preview: 'PUISIEULX (1749-1752): Lorient → Inde et Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1752',
    to_date: '1752',
    preview: 'PUISIEULX (1749-1752): Lorient → Inde et Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1752',
    to_date: '1752',
    preview: 'PUISIEULX (1749-1752): Lorient → Inde et Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1752',
    to_date: '1752',
    preview: 'PUISIEULX (1749-1752): Lorient → Inde et Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1752',
    to_date: '1752',
    preview: 'PUISIEULX (1749-1752): Lorient → Inde et Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1752',
    to_date: '1754',
    preview: 'PUISIEULX (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1754',
    to_date: '1754',
    preview: 'PUISIEULX (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1754',
    to_date: '1754',
    preview: 'PUISIEULX (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1754',
    to_date: '1754',
    preview: 'PUISIEULX (1752-1754): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1740',
    to_date: '1740',
    preview: 'PÈRE DE FAMILLE (1740-1740): Nantes → Sénégal → Nantes'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1740',
    to_date: '1740',
    preview: 'PÈRE DE FAMILLE (1740-1740): Nantes → Sénégal → Nantes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1742',
    to_date: '1743',
    preview: 'PÈRE DE FAMILLE (1742-1743): Nantes → Sénégal → Antilles → Nantes'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1743',
    to_date: '1743',
    preview: 'PÈRE DE FAMILLE (1742-1743): Nantes → Sénégal → Antilles → Nantes'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1743',
    to_date: '1743',
    preview: 'PÈRE DE FAMILLE (1742-1743): Nantes → Sénégal → Antilles → Nantes'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1785',
    to_date: '1786',
    preview: 'PÈRE DE FAMILLE (1785-1786): Lorient → Inde et Mascareigne → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1786',
    to_date: '1786',
    preview: 'PÈRE DE FAMILLE (1785-1786): Lorient → Inde et Mascareigne → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1786',
    to_date: '1788',
    preview: 'PÈRE DE FAMILLE (1786-1788): Lorient → îles de France et de Bourbon → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1788',
    to_date: '1788',
    preview: 'PÈRE DE FAMILLE (1786-1788): Lorient → îles de France et de Bourbon → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1720',
    preview: 'PÈRE ÉTERNEL (1720-1720): Lorient → Louisiane'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1739',
    to_date: '1739',
    preview: 'PÉLICAN (1739-1739): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1750',
    to_date: '1750',
    preview: 'PÉLICAN (1750-1750): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1757',
    to_date: '1766',
    preview: 'PÉNÉLOPE ou PENELOPE (1757-1766): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1766',
    to_date: '1766',
    preview: 'PÉNÉLOPE ou PENELOPE (1757-1766): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1748',
    to_date: '1750',
    preview: 'ROUILLÉ (1748-1750): Lorient → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1750',
    to_date: '1750',
    preview: 'ROUILLÉ (1748-1750): Lorient → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1750',
    to_date: '1750',
    preview: 'ROUILLÉ (1748-1750): Lorient → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1750',
    to_date: '1750',
    preview: 'ROUILLÉ (1748-1750): Lorient → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1750',
    to_date: '1752',
    preview: 'ROUILLÉ (1750-1752): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1752',
    to_date: '1752',
    preview: 'ROUILLÉ (1750-1752): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1752',
    to_date: '1752',
    preview: 'ROUILLÉ (1750-1752): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1752',
    to_date: '1752',
    preview: 'ROUILLÉ (1750-1752): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1752',
    to_date: '1752',
    preview: 'ROUILLÉ (1750-1752): Lorient → Gorée → Cap de Bonne-Espérance → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1753',
    to_date: '1754',
    preview: 'ROUILLÉ (1753-1754): Lorient → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1754',
    to_date: '1754',
    preview: 'ROUILLÉ (1753-1754): Lorient → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1754',
    to_date: '1754',
    preview: 'ROUILLÉ (1753-1754): Lorient → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1754',
    to_date: '1754',
    preview: 'ROUILLÉ (1753-1754): Lorient → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1754',
    to_date: '1757',
    preview: 'ROUILLÉ (1754-1757): Lorient → Santiago (Cap-Vert) → Inde et Mascareignes, Madagascar → Vigo'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1757',
    to_date: '1757',
    preview: 'ROUILLÉ (1754-1757): Lorient → Santiago (Cap-Vert) → Inde et Mascareignes, Madagascar → Vigo'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1757',
    to_date: '1757',
    preview: 'ROUILLÉ (1754-1757): Lorient → Santiago (Cap-Vert) → Inde et Mascareignes, Madagascar → Vigo'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1757',
    to_date: '1757',
    preview: 'ROUILLÉ (1754-1757): Lorient → Santiago (Cap-Vert) → Inde et Mascareignes, Madagascar → Vigo'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1754',
    to_date: '1755',
    preview: 'ROY DE GABINGUE (1754-1755): Nantes → Lorient → Sénégal → Antilles → Nantes'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1755',
    to_date: '1755',
    preview: 'ROY DE GABINGUE (1754-1755): Nantes → Lorient → Sénégal → Antilles → Nantes'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1755',
    to_date: '1755',
    preview: 'ROY DE GABINGUE (1754-1755): Nantes → Lorient → Sénégal → Antilles → Nantes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1723',
    to_date: '1725',
    preview: 'ROYAL PHILIPPE (1723-1725): Brest → Cadix → Moka → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1725',
    to_date: '1725',
    preview: 'ROYAL PHILIPPE (1723-1725): Brest → Cadix → Moka → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1728',
    to_date: '1730',
    preview: 'ROYAL PHILIPPE (1728-1730): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1730',
    to_date: '1730',
    preview: 'ROYAL PHILIPPE (1728-1730): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1730',
    to_date: '1730',
    preview: 'ROYAL PHILIPPE (1728-1730): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1730',
    to_date: '1730',
    preview: 'ROYAL PHILIPPE (1728-1730): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1730',
    to_date: '1730',
    preview: 'ROYAL PHILIPPE (1728-1730): Lorient → Cadix → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1731',
    to_date: '1732',
    preview: 'ROYAL PHILIPPE (1731-1732): Lorient → Cadix → Ténériffe → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1732',
    to_date: '1732',
    preview: 'ROYAL PHILIPPE (1731-1732): Lorient → Cadix → Ténériffe → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1732',
    to_date: '1732',
    preview: 'ROYAL PHILIPPE (1731-1732): Lorient → Cadix → Ténériffe → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1732',
    to_date: '1732',
    preview: 'ROYAL PHILIPPE (1731-1732): Lorient → Cadix → Ténériffe → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1732',
    to_date: '1732',
    preview: 'ROYAL PHILIPPE (1731-1732): Lorient → Cadix → Ténériffe → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1732',
    to_date: '1734',
    preview: 'ROYAL PHILIPPE (1732-1734): Lorient → Cadix → Madagascar → Moka → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1734',
    to_date: '1734',
    preview: 'ROYAL PHILIPPE (1732-1734): Lorient → Cadix → Madagascar → Moka → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1734',
    to_date: '1734',
    preview: 'ROYAL PHILIPPE (1732-1734): Lorient → Cadix → Madagascar → Moka → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1734',
    to_date: '1734',
    preview: 'ROYAL PHILIPPE (1732-1734): Lorient → Cadix → Madagascar → Moka → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1787',
    to_date: '1788',
    preview: 'ROYALE ÉLISABETH (1787-1788): Lorient → Cadix → Chine → Île de France → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1788',
    to_date: '1788',
    preview: 'ROYALE ÉLISABETH (1787-1788): Lorient → Cadix → Chine → Île de France → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1789',
    to_date: '1789',
    preview: 'ROYALE ÉLISABETH (1789-1789): Lorient → Inde ?'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1758',
    to_date: '1758',
    preview: 'ROGER (1758-1758): Sénégal → Douarnenez → Lorient'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1767',
    to_date: '1768',
    preview: 'ROI DAVID (1767-1768): Rochefort → Saint-Pierre et Miquelon → Port-Louis'
  },
  {
    from: 'New France',
    to: 'Madagascar',
    from_date: '1768',
    to_date: '1768',
    preview: 'ROI DAVID (1767-1768): Rochefort → Saint-Pierre et Miquelon → Port-Louis'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1755',
    to_date: '1756',
    preview: 'ROSALIE ex  (1755-1756): Bordeaux → Martinique → Port-Louis'
  },
  {
    from: 'Caribbean',
    to: 'Madagascar',
    from_date: '1756',
    to_date: '1756',
    preview: 'ROSALIE ex  (1755-1756): Bordeaux → Martinique → Port-Louis'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1757',
    to_date: '1757',
    preview: 'ROSALIE (1757-1757): Port-Louis → Bordeaux ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1781',
    to_date: '1781',
    preview: 'ROSALIE (1781-1781): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1785',
    to_date: '1787',
    preview: 'ROSALIE (1785-1787): Nantes/Paimboeuf → Lorient → île de France → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1787',
    to_date: '1787',
    preview: 'ROSALIE (1785-1787): Nantes/Paimboeuf → Lorient → île de France → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1779',
    to_date: '1780',
    preview: 'RAIMBAUD (1779-1780): Pointe-à-Pitre, Guadeloupe → Nantes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1766',
    to_date: '1769',
    preview: 'RAISON (1766-1769): Navire de Lorient armé par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1732',
    to_date: '1733',
    preview: 'REINE (1732-1733): Lorient → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1733',
    to_date: '1733',
    preview: 'REINE (1732-1733): Lorient → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1733',
    to_date: '1733',
    preview: 'REINE (1732-1733): Lorient → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1733',
    to_date: '1733',
    preview: 'REINE (1732-1733): Lorient → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1733',
    to_date: '1733',
    preview: 'REINE (1732-1733): Lorient → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1734',
    to_date: '1736',
    preview: 'REINE (1734-1736): Lorient → Cap-Vert → Madagascar, Inde et Mascareignes → Fernando de Noronha → Brest → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1736',
    to_date: '1736',
    preview: 'REINE (1734-1736): Lorient → Cap-Vert → Madagascar, Inde et Mascareignes → Fernando de Noronha → Brest → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1736',
    to_date: '1736',
    preview: 'REINE (1734-1736): Lorient → Cap-Vert → Madagascar, Inde et Mascareignes → Fernando de Noronha → Brest → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1736',
    to_date: '1736',
    preview: 'REINE (1734-1736): Lorient → Cap-Vert → Madagascar, Inde et Mascareignes → Fernando de Noronha → Brest → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1736',
    to_date: '1736',
    preview: 'REINE (1734-1736): Lorient → Cap-Vert → Madagascar, Inde et Mascareignes → Fernando de Noronha → Brest → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1736',
    to_date: '1736',
    preview: 'REINE (1734-1736): Lorient → Cap-Vert → Madagascar, Inde et Mascareignes → Fernando de Noronha → Brest → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1736',
    to_date: '1736',
    preview: 'REINE (1734-1736): Lorient → Cap-Vert → Madagascar, Inde et Mascareignes → Fernando de Noronha → Brest → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1737',
    to_date: '1739',
    preview: 'REINE (1737-1739): Lorient → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1739',
    to_date: '1739',
    preview: 'REINE (1737-1739): Lorient → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1739',
    to_date: '1739',
    preview: 'REINE (1737-1739): Lorient → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1750',
    to_date: '1751',
    preview: 'REINE (1750-1751): Lorient → Inde → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Louisiana',
    from_date: '1751',
    to_date: '1751',
    preview: 'REINE (1750-1751): Lorient → Inde → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1751',
    to_date: '1751',
    preview: 'REINE (1750-1751): Lorient → Inde → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1752',
    to_date: '1753',
    preview: 'REINE (1752-1753): Lorient → Cap-Vert → Mascareignes → Comores → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1753',
    to_date: '1753',
    preview: 'REINE (1752-1753): Lorient → Cap-Vert → Mascareignes → Comores → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1753',
    to_date: '1753',
    preview: 'REINE (1752-1753): Lorient → Cap-Vert → Mascareignes → Comores → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1753',
    to_date: '1753',
    preview: 'REINE (1752-1753): Lorient → Cap-Vert → Mascareignes → Comores → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1753',
    to_date: '1753',
    preview: 'REINE (1752-1753): Lorient → Cap-Vert → Mascareignes → Comores → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1753',
    to_date: '1753',
    preview: 'REINE (1752-1753): Lorient → Cap-Vert → Mascareignes → Comores → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1754',
    to_date: '1755',
    preview: 'REINE (1754-1755): Lorient → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1755',
    to_date: '1755',
    preview: 'REINE (1754-1755): Lorient → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1755',
    to_date: '1755',
    preview: 'REINE (1754-1755): Lorient → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1755',
    to_date: '1755',
    preview: 'REINE (1754-1755): Lorient → Gorée → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1756',
    to_date: '1758',
    preview: 'REINE (1756-1758): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1758',
    to_date: '1758',
    preview: 'REINE (1756-1758): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1758',
    to_date: '1758',
    preview: 'REINE (1756-1758): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1758',
    to_date: '1758',
    preview: 'REINE (1756-1758): Escadre d\'Aché pour l\'Inde, première division'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1786',
    to_date: '1788',
    preview: 'REINE (1786-1788): Lorient → Cadix → Île de France → Inde → Chine → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1788',
    to_date: '1788',
    preview: 'REINE (1786-1788): Lorient → Cadix → Île de France → Inde → Chine → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1788',
    to_date: '1788',
    preview: 'REINE (1786-1788): Lorient → Cadix → Île de France → Inde → Chine → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1754',
    to_date: '1754',
    preview: 'REINE DES ANGES (1754-1754): Port-Louis → Bordeaux ?'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1738',
    to_date: '1740',
    preview: 'RENOMMÉE (1738-1740): Lorient → Juda et côtes de Guinée → Martinique → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1740',
    to_date: '1740',
    preview: 'RENOMMÉE (1738-1740): Lorient → Juda et côtes de Guinée → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1740',
    to_date: '1740',
    preview: 'RENOMMÉE (1738-1740): Lorient → Juda et côtes de Guinée → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1741',
    to_date: '1748',
    preview: 'RENOMMÉE (1741-1748): Lorient → Île Grande (Brésil) → Mascareignes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1753',
    to_date: '1753',
    preview: 'RENOMMÉE (1753-1753): Lorient → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1753',
    to_date: '1753',
    preview: 'RENOMMÉE (1753-1753): Lorient → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1753',
    to_date: '1755',
    preview: 'RENOMMÉE (1753-1755): Lorient → Cap-Vert → Cap de Bonne-Espérance → Chine → Inde et Mascareignes → Angola → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1755',
    to_date: '1755',
    preview: 'RENOMMÉE (1753-1755): Lorient → Cap-Vert → Cap de Bonne-Espérance → Chine → Inde et Mascareignes → Angola → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1755',
    to_date: '1755',
    preview: 'RENOMMÉE (1753-1755): Lorient → Cap-Vert → Cap de Bonne-Espérance → Chine → Inde et Mascareignes → Angola → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1755',
    to_date: '1755',
    preview: 'RENOMMÉE (1753-1755): Lorient → Cap-Vert → Cap de Bonne-Espérance → Chine → Inde et Mascareignes → Angola → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1757',
    to_date: '1758',
    preview: 'RENOMMÉE (1757-1758): Lorient → Sénégal et Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1758',
    to_date: '1758',
    preview: 'RENOMMÉE (1757-1758): Lorient → Sénégal et Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1758',
    to_date: '1758',
    preview: 'RENOMMÉE (1757-1758): Lorient → Sénégal et Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1758',
    to_date: '1758',
    preview: 'RENOMMÉE (1757-1758): Lorient → Sénégal et Gorée → Mascareignes → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1758',
    to_date: '1759',
    preview: 'RENOMMÉE (1758-1759): Lorient- Vannes → Bordeaux → Rochefort → Île d’Aix → Brest → Port-Louis'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1714',
    to_date: '1715',
    preview: 'RUBIS ou RUBY (1714-1715): Honfleur → Sénégal → Saint-Domingue → Honfleur'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1715',
    to_date: '1715',
    preview: 'RUBIS ou RUBY (1714-1715): Honfleur → Sénégal → Saint-Domingue → Honfleur'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1715',
    to_date: '1715',
    preview: 'RUBIS ou RUBY (1714-1715): Honfleur → Sénégal → Saint-Domingue → Honfleur'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1715',
    to_date: '1716',
    preview: 'RUBIS ou RUBY (1715-1716): Honfleur → Bordeaux → Sénégal → Saint-Domingue → Honfleur'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1716',
    to_date: '1716',
    preview: 'RUBIS ou RUBY (1715-1716): Honfleur → Bordeaux → Sénégal → Saint-Domingue → Honfleur'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1716',
    to_date: '1716',
    preview: 'RUBIS ou RUBY (1715-1716): Honfleur → Bordeaux → Sénégal → Saint-Domingue → Honfleur'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1717',
    to_date: '1718',
    preview: 'RUBIS ou RUBY (1717-1718): Honfleur → Sénégal → Saint-Domingue → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1718',
    to_date: '1718',
    preview: 'RUBIS ou RUBY (1717-1718): Honfleur → Sénégal → Saint-Domingue → Le Havre'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1718',
    to_date: '1718',
    preview: 'RUBIS ou RUBY (1717-1718): Honfleur → Sénégal → Saint-Domingue → Le Havre'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1719',
    to_date: '1720',
    preview: 'RUBIS ou RUBY (1719-1720): Le Havre → Marseille → Sénégal et Gorée → Louisiane → Le Havre'
  },
  {
    from: 'Senegal',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1720',
    preview: 'RUBIS ou RUBY (1719-1720): Le Havre → Marseille → Sénégal et Gorée → Louisiane → Le Havre'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'RUBIS ou RUBY (1719-1720): Le Havre → Marseille → Sénégal et Gorée → Louisiane → Le Havre'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1721',
    to_date: '1723',
    preview: 'RUBIS ou RUBY (1721-1723): Le Havre → Lorient → Madagascar et Mascareignes'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1723',
    to_date: '1723',
    preview: 'RUBIS ou RUBY (1721-1723): Le Havre → Lorient → Madagascar et Mascareignes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1786',
    to_date: '1786',
    preview: 'RUCHE (1786-1786): Lorient → îles de France et de Bourbon ?'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1746',
    to_date: '1747',
    preview: 'RÉSOLUTION ex  (1746-1747): Lorient → Sénégal → Antilles'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1747',
    to_date: '1747',
    preview: 'RÉSOLUTION ex  (1746-1747): Lorient → Sénégal → Antilles'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1763',
    to_date: '1764',
    preview: 'TOURTERELLE (1763-1764): Bordeaux → Martinique → Port-Louis'
  },
  {
    from: 'Caribbean',
    to: 'Madagascar',
    from_date: '1764',
    to_date: '1764',
    preview: 'TOURTERELLE (1763-1764): Bordeaux → Martinique → Port-Louis'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1764',
    to_date: '1764',
    preview: 'TOURTERELLE (1764-1764): Port-Louis → Bordeaux → îles françaises de l’Amérique ?'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1759',
    to_date: '1760',
    preview: 'TAVIGNON (1759-1760): Saint-Malo → Brest → Port-Louis'
  },
  {
    from: 'Madagascar',
    to: 'New France',
    from_date: '1760',
    to_date: '1760',
    preview: 'TAVIGNON (1760-1760): Port-Louis → Terre-Neuve ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1774',
    to_date: '1776',
    preview: 'TERRAY (1774-1776): Saint-Malo → Mascareignes → Inde → Cap de Bonne-Espérance → Saint-Malo → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1776',
    to_date: '1776',
    preview: 'TERRAY (1774-1776): Saint-Malo → Mascareignes → Inde → Cap de Bonne-Espérance → Saint-Malo → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1776',
    to_date: '1776',
    preview: 'TERRAY (1774-1776): Saint-Malo → Mascareignes → Inde → Cap de Bonne-Espérance → Saint-Malo → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1776',
    to_date: '1778',
    preview: 'TERRAY (1776-1778): Lorient → Cap de Bonne-Espérance → Inde → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1778',
    to_date: '1778',
    preview: 'TERRAY (1776-1778): Lorient → Cap de Bonne-Espérance → Inde → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1783',
    to_date: '1785',
    preview: 'THÉRÈSE (1783-1785): Lorient → Cap de Bonne-Espérance → Inde → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1785',
    to_date: '1785',
    preview: 'THÉRÈSE (1783-1785): Lorient → Cap de Bonne-Espérance → Inde → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1733',
    to_date: '1734',
    preview: 'THÉTIS (1733-1734): Lorient → Cadix → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1734',
    to_date: '1734',
    preview: 'THÉTIS (1733-1734): Lorient → Cadix → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1734',
    to_date: '1734',
    preview: 'THÉTIS (1733-1734): Lorient → Cadix → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1734',
    to_date: '1734',
    preview: 'THÉTIS (1733-1734): Lorient → Cadix → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1734',
    to_date: '1734',
    preview: 'THÉTIS (1733-1734): Lorient → Cadix → Anjouan → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1736',
    to_date: '1737',
    preview: 'THÉTIS (1736-1737): Lorient → Cadix → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1737',
    to_date: '1737',
    preview: 'THÉTIS (1736-1737): Lorient → Cadix → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1737',
    to_date: '1737',
    preview: 'THÉTIS (1736-1737): Lorient → Cadix → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1737',
    to_date: '1737',
    preview: 'THÉTIS (1736-1737): Lorient → Cadix → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1738',
    to_date: '1740',
    preview: 'THÉTIS (1738-1740): Lorient → Cap-Vert → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1740',
    to_date: '1740',
    preview: 'THÉTIS (1738-1740): Lorient → Cap-Vert → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1740',
    to_date: '1740',
    preview: 'THÉTIS (1738-1740): Lorient → Cap-Vert → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1740',
    to_date: '1740',
    preview: 'THÉTIS (1738-1740): Lorient → Cap-Vert → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1740',
    to_date: '1740',
    preview: 'THÉTIS (1738-1740): Lorient → Cap-Vert → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1740',
    to_date: '1740',
    preview: 'THÉTIS (1738-1740): Lorient → Cap-Vert → Inde et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1747',
    to_date: '1747',
    preview: 'THÉTIS (1747-1747): Navire de Nantes affrété par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1783',
    to_date: '1783',
    preview: 'TIENNETTE ou TIENETTE (1783-1783): Lorient → Terre-Neuve ?'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1727',
    to_date: '1727',
    preview: 'TIGRE (1727-1727): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1743',
    to_date: '1744',
    preview: 'TIGRE (1743-1744): Lorient → Sénégal → Port-Louis'
  },
  {
    from: 'Senegal',
    to: 'Madagascar',
    from_date: '1744',
    to_date: '1744',
    preview: 'TIGRE (1743-1744): Lorient → Sénégal → Port-Louis'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1780',
    to_date: '1782',
    preview: 'TIGRE (1780-1782): Lorient → Rochefort → Martinique et Saint-Domingue → Espagne → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'TIGRE (1780-1782): Lorient → Rochefort → Martinique et Saint-Domingue → Espagne → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1720',
    preview: 'TILLEUL (1720-1720): Dunkerque → Louisiane'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1788',
    to_date: '1788',
    preview: 'TIPOO SULTAN (1788-1788): Lorient → Pondichéry ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1749',
    to_date: '1750',
    preview: 'TREIZE CANTONS (1749-1750): Frégate de Nantes affrétée puis achetée par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1750',
    to_date: '1752',
    preview: 'TREIZE CANTONS (1750-1752): Lorient → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1752',
    to_date: '1752',
    preview: 'TREIZE CANTONS (1750-1752): Lorient → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1752',
    to_date: '1752',
    preview: 'TREIZE CANTONS (1750-1752): Lorient → Inde et Mascareignes → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1753',
    to_date: '1754',
    preview: 'TREIZE CANTONS (1753-1754): Lorient → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1754',
    to_date: '1754',
    preview: 'TREIZE CANTONS (1753-1754): Lorient → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1754',
    to_date: '1754',
    preview: 'TREIZE CANTONS (1753-1754): Lorient → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1754',
    to_date: '1754',
    preview: 'TREIZE CANTONS (1753-1754): Lorient → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1754',
    to_date: '1754',
    preview: 'TREIZE CANTONS (1753-1754): Lorient → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1755',
    to_date: '1755',
    preview: 'TREIZE CANTONS (1755-1755): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1720',
    to_date: '1722',
    preview: 'TRITON (1720-1722): Saint-Malo → Cadix → Mascareignes → Moka → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1722',
    to_date: '1722',
    preview: 'TRITON (1720-1722): Saint-Malo → Cadix → Mascareignes → Moka → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1723',
    to_date: '1724',
    preview: 'TRITON (1723-1724): Lorient → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1724',
    to_date: '1724',
    preview: 'TRITON (1723-1724): Lorient → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'TRITON (1723-1724): Lorient → Brésil → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1724',
    to_date: '1726',
    preview: 'TRITON ou PETIT TRITON (1724-1726): En service en Inde et dans l’océan Indien'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1726',
    to_date: '1726',
    preview: 'TRITON ou PETIT TRITON (1724-1726): En service en Inde et dans l’océan Indien'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1732',
    to_date: '1735',
    preview: 'TRITON (1732-1735): Saint-Malo → Plymouth → Chine → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1735',
    to_date: '1735',
    preview: 'TRITON (1732-1735): Saint-Malo → Plymouth → Chine → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1735',
    to_date: '1735',
    preview: 'TRITON (1732-1735): Saint-Malo → Plymouth → Chine → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1735',
    to_date: '1735',
    preview: 'TRITON (1732-1735): Saint-Malo → Plymouth → Chine → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1737',
    to_date: '1738',
    preview: 'TRITON (1737-1738): Lorient → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1738',
    to_date: '1738',
    preview: 'TRITON (1737-1738): Lorient → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1738',
    to_date: '1738',
    preview: 'TRITON (1737-1738): Lorient → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1738',
    to_date: '1738',
    preview: 'TRITON (1737-1738): Lorient → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1738',
    to_date: '1738',
    preview: 'TRITON (1737-1738): Lorient → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1738',
    to_date: '1738',
    preview: 'TRITON (1737-1738): Lorient → Santiago → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1739',
    to_date: '1740',
    preview: 'TRITON (1739-1740): Lorient → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1740',
    to_date: '1740',
    preview: 'TRITON (1739-1740): Lorient → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1740',
    to_date: '1740',
    preview: 'TRITON (1739-1740): Lorient → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1740',
    to_date: '1740',
    preview: 'TRITON (1739-1740): Lorient → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1740',
    to_date: '1740',
    preview: 'TRITON (1739-1740): Lorient → Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1740',
    to_date: '1742',
    preview: 'TRITON (1740-1742): Lorient → Santiago → Anjouan → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1742',
    to_date: '1742',
    preview: 'TRITON (1740-1742): Lorient → Santiago → Anjouan → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1742',
    to_date: '1742',
    preview: 'TRITON (1740-1742): Lorient → Santiago → Anjouan → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1742',
    to_date: '1742',
    preview: 'TRITON (1740-1742): Lorient → Santiago → Anjouan → Inde et Mascareignes → Sainte-Hélène → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1743',
    to_date: '1745',
    preview: 'TRITON (1743-1745): Lorient → Gorée → Brésil → Mascareignes et Madagascar, cap de Bonne-Espérance → Martinique'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1745',
    to_date: '1745',
    preview: 'TRITON (1743-1745): Lorient → Gorée → Brésil → Mascareignes et Madagascar, cap de Bonne-Espérance → Martinique'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1745',
    to_date: '1745',
    preview: 'TRITON (1743-1745): Lorient → Gorée → Brésil → Mascareignes et Madagascar, cap de Bonne-Espérance → Martinique'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1745',
    to_date: '1745',
    preview: 'TRITON (1743-1745): Lorient → Gorée → Brésil → Mascareignes et Madagascar, cap de Bonne-Espérance → Martinique'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Caribbean',
    from_date: '1745',
    to_date: '1745',
    preview: 'TRITON (1743-1745): Lorient → Gorée → Brésil → Mascareignes et Madagascar, cap de Bonne-Espérance → Martinique'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1744',
    to_date: '1744',
    preview: 'TRITON (1744-1744): Le Havre → Sénégal et Gorée '
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1772',
    to_date: '1773',
    preview: 'TROIS COUSINS (1772-1773): Lorient → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1773',
    to_date: '1773',
    preview: 'TROIS COUSINS (1772-1773): Lorient → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1773',
    to_date: '1773',
    preview: 'TROIS COUSINS (1772-1773): Lorient → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1775',
    to_date: '1776',
    preview: 'TROIS COUSINS (1775-1776): Lorient → Inde → Chandernagor'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1757',
    to_date: '1757',
    preview: 'TROIS AMIS (1757-1757): Port-Louis → Bordeaux ?'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1774',
    to_date: '1776',
    preview: 'TROIS AMIS (1774-1776): Lorient → La Rochelle → lMascareignes → Inde → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1776',
    to_date: '1776',
    preview: 'TROIS AMIS (1774-1776): Lorient → La Rochelle → lMascareignes → Inde → Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1776',
    to_date: '1776',
    preview: 'TROIS AMIS (1774-1776): Lorient → La Rochelle → lMascareignes → Inde → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1776',
    to_date: '1776',
    preview: 'TROIS AMIS (1774-1776): Lorient → La Rochelle → lMascareignes → Inde → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1776',
    to_date: '1778',
    preview: 'TROIS AMIS (1776-1778): Lorient → île de France → Inde → Chine → île de France → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1778',
    to_date: '1778',
    preview: 'TROIS AMIS (1776-1778): Lorient → île de France → Inde → Chine → île de France → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1778',
    to_date: '1778',
    preview: 'TROIS AMIS (1776-1778): Lorient → île de France → Inde → Chine → île de France → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1778',
    to_date: '1778',
    preview: 'TROIS AMIS (1776-1778): Lorient → île de France → Inde → Chine → île de France → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1781',
    to_date: '1781',
    preview: 'TROIS AMIS (1781-1781): Lorient → île de France ?'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1783',
    to_date: '1784',
    preview: 'TROIS AMIS (1783-1784): île de France → île Bourbon → Inde → île de France → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1784',
    to_date: '1784',
    preview: 'TROIS AMIS (1783-1784): île de France → île Bourbon → Inde → île de France → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1784',
    to_date: '1784',
    preview: 'TROIS AMIS (1783-1784): île de France → île Bourbon → Inde → île de France → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1775',
    to_date: '1777',
    preview: 'TURGOT (1775-1777): Lorient → Anjouan → Inde → Chine → Sainte-Hélène → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1777',
    to_date: '1777',
    preview: 'TURGOT (1775-1777): Lorient → Anjouan → Inde → Chine → Sainte-Hélène → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1777',
    to_date: '1777',
    preview: 'TURGOT (1775-1777): Lorient → Anjouan → Inde → Chine → Sainte-Hélène → Lorient'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1769',
    to_date: '1771',
    preview: 'TYPHON (1769-1771): Lorient → Alicante → Sète → Malaga → Port-Louis → Nantes/Paimboeuf → Alicante → Marseille → Malaga → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1771',
    to_date: '1771',
    preview: 'TYPHON (1769-1771): Lorient → Alicante → Sète → Malaga → Port-Louis → Nantes/Paimboeuf → Alicante → Marseille → Malaga → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1725',
    to_date: '1725',
    preview: 'TÉMÉRAIRE (1725-1725): Lorient → Sénégal et Gorée'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1737',
    to_date: '1737',
    preview: 'TÉMÉRAIRE (1737-1737): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1719',
    to_date: '1720',
    preview: 'UNION (1719-1720): Saint-Malo → La Rochelle → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1720',
    to_date: '1720',
    preview: 'UNION (1719-1720): Saint-Malo → La Rochelle → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1720',
    preview: 'UNION (1719-1720): Saint-Malo → La Rochelle → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1720',
    to_date: '1720',
    preview: 'UNION (1719-1720): Saint-Malo → La Rochelle → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1723',
    to_date: '1725',
    preview: 'UNION (1723-1725): Lorient → Moka, Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1725',
    to_date: '1725',
    preview: 'UNION (1723-1725): Lorient → Moka, Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1725',
    to_date: '1725',
    preview: 'UNION (1723-1725): Lorient → Moka, Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Caribbean',
    from_date: '1725',
    to_date: '1725',
    preview: 'UNION (1723-1725): Lorient → Moka, Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1725',
    to_date: '1725',
    preview: 'UNION (1723-1725): Lorient → Moka, Inde et Mascareignes → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1772',
    to_date: '1775',
    preview: 'UNION (1772-1775): Saint-Malo → Lorient → Philippines → Inde → Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1775',
    to_date: '1775',
    preview: 'UNION (1772-1775): Saint-Malo → Lorient → Philippines → Inde → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1775',
    to_date: '1775',
    preview: 'UNION (1772-1775): Saint-Malo → Lorient → Philippines → Inde → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1777',
    to_date: '1778',
    preview: 'UNION (1777-1778): Lorient → Vannes → Cap-Français → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1778',
    to_date: '1778',
    preview: 'UNION (1777-1778): Lorient → Vannes → Cap-Français → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1770',
    to_date: '1770',
    preview: 'UNIQUE (1770-1770): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1773',
    to_date: '1775',
    preview: 'UNIQUE (1773-1775): Saint-Malo → Ténériffe → Cap de Bonne-Espérance → Pondichéry et Bengale → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1775',
    to_date: '1775',
    preview: 'UNIQUE (1773-1775): Saint-Malo → Ténériffe → Cap de Bonne-Espérance → Pondichéry et Bengale → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1753',
    to_date: '1754',
    preview: 'UTILE (1753-1754): Île de France → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1754',
    to_date: '1760',
    preview: 'UTILE (1754-1760): Lorient → Inde et Mascareignes → Île de France → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1760',
    to_date: '1760',
    preview: 'UTILE (1754-1760): Lorient → Inde et Mascareignes → Île de France → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1760',
    to_date: '1761',
    preview: 'UTILE (1760-1761): Acheté ou cédé par le roi à la Compagnie des Indes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1761',
    to_date: '1761',
    preview: 'UTILE (1760-1761): Acheté ou cédé par le roi à la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1767',
    to_date: '1769',
    preview: 'UTILE (1767-1769): Lorient → Île de France'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1758',
    to_date: '1758',
    preview: 'VOLANT (1758-1758): Lorient → Sénégal → Antilles'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1758',
    to_date: '1758',
    preview: 'VOLANT (1758-1758): Lorient → Sénégal → Antilles'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1721',
    preview: 'VOLAGE (1720-1721): La Rochelle → Antilles → Louisiane'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1721',
    preview: 'VOLAGE (1720-1721): La Rochelle → Antilles → Louisiane'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1728',
    to_date: '1728',
    preview: 'VOLAGE (1728-1728): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1724',
    to_date: '1725',
    preview: 'VAUTOUR (1724-1725): Lorient → Mascareignes'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1725',
    to_date: '1725',
    preview: 'VAUTOUR (1724-1725): Lorient → Mascareignes'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1755',
    to_date: '1755',
    preview: 'VAUTOUR (1755-1755): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1736',
    to_date: '1738',
    preview: 'VALEUR (1736-1738): Lorient → Juda et côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1738',
    to_date: '1738',
    preview: 'VALEUR (1736-1738): Lorient → Juda et côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1738',
    to_date: '1738',
    preview: 'VALEUR (1736-1738): Lorient → Juda et côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1738',
    to_date: '1739',
    preview: 'VALEUR (1738-1739): Lorient → Sénégal → Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1739',
    to_date: '1739',
    preview: 'VALEUR (1738-1739): Lorient → Sénégal → Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1739',
    to_date: '1739',
    preview: 'VALEUR (1738-1739): Lorient → Sénégal → Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1740',
    to_date: '1741',
    preview: 'VALEUR (1740-1741): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1741',
    to_date: '1741',
    preview: 'VALEUR (1740-1741): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1741',
    to_date: '1741',
    preview: 'VALEUR (1740-1741): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1742',
    to_date: '1743',
    preview: 'VALEUR (1742-1743): Lorient → Sénégal → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1743',
    to_date: '1743',
    preview: 'VALEUR (1742-1743): Lorient → Sénégal → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1743',
    to_date: '1743',
    preview: 'VALEUR (1742-1743): Lorient → Sénégal → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1748',
    to_date: '1748',
    preview: 'VALEUR (1748-1748): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1748',
    to_date: '1748',
    preview: 'VALEUR (1748-1748): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1748',
    to_date: '1748',
    preview: 'VALEUR (1748-1748): Lorient → Sénégal et Gorée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1750',
    to_date: '1750',
    preview: 'VALEUR (1750-1750): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1750',
    to_date: '1750',
    preview: 'VALEUR (1750-1750): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1751',
    to_date: '1751',
    preview: 'VALEUR (1751-1751): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1751',
    to_date: '1751',
    preview: 'VALEUR (1751-1751): Lorient → Sénégal et Gorée → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1757',
    to_date: '1764',
    preview: 'VENGEUR (1757-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1764',
    to_date: '1764',
    preview: 'VENGEUR (1757-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1764',
    preview: 'VENGEUR (1757-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1764',
    to_date: '1764',
    preview: 'VENGEUR (1757-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1764',
    to_date: '1764',
    preview: 'VENGEUR (1757-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1764',
    preview: 'VENGEUR (1757-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1764',
    to_date: '1764',
    preview: 'VENGEUR (1757-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1764',
    preview: 'VENGEUR (1757-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1764',
    to_date: '1764',
    preview: 'VENGEUR (1757-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1757',
    to_date: '1764',
    preview: 'VENGEUR (1757-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1764',
    to_date: '1764',
    preview: 'VENGEUR (1757-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1764',
    preview: 'VENGEUR (1757-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1764',
    to_date: '1764',
    preview: 'VENGEUR (1757-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1764',
    to_date: '1764',
    preview: 'VENGEUR (1757-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1764',
    preview: 'VENGEUR (1757-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1764',
    to_date: '1764',
    preview: 'VENGEUR (1757-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1764',
    preview: 'VENGEUR (1757-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1764',
    to_date: '1764',
    preview: 'VENGEUR (1757-1764): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1781',
    to_date: '1783',
    preview: 'VESTA (1781-1783): Lorient → île de France et Inde → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1783',
    to_date: '1783',
    preview: 'VESTA (1781-1783): Lorient → île de France et Inde → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1783',
    to_date: '1783',
    preview: 'VESTA (1781-1783): Lorient → île de France et Inde → Lorient'
  },
  {
    from: 'France',
    to: 'New France',
    from_date: '1784',
    to_date: '1784',
    preview: 'VESTA (1784-1784): Lorient → Terre-Neuve → Lorient'
  },
  {
    from: 'New France',
    to: 'France',
    from_date: '1784',
    to_date: '1784',
    preview: 'VESTA (1784-1784): Lorient → Terre-Neuve → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1737',
    to_date: '1737',
    preview: 'VESTALE (1737-1737): Lorient → Sénégal → Guinée ? → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1737',
    to_date: '1737',
    preview: 'VESTALE (1737-1737): Lorient → Sénégal → Guinée ? → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1737',
    to_date: '1739',
    preview: 'VESTALE (1737-1739): Lorient → Gorée → Juda et côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1739',
    to_date: '1739',
    preview: 'VESTALE (1737-1739): Lorient → Gorée → Juda et côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1739',
    to_date: '1739',
    preview: 'VESTALE (1737-1739): Lorient → Gorée → Juda et côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1740',
    to_date: '1741',
    preview: 'VESTALE (1740-1741): Lorient → Gorée → Juda et côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1741',
    to_date: '1741',
    preview: 'VESTALE (1740-1741): Lorient → Gorée → Juda et côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1741',
    to_date: '1741',
    preview: 'VESTALE (1740-1741): Lorient → Gorée → Juda et côtes de Guinée → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1741',
    to_date: '1742',
    preview: 'VESTALE (1741-1742): Lorient → Sénégal et Gorée → Martinique → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1742',
    to_date: '1742',
    preview: 'VESTALE (1741-1742): Lorient → Sénégal et Gorée → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1742',
    to_date: '1742',
    preview: 'VESTALE (1741-1742): Lorient → Sénégal et Gorée → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1743',
    to_date: '1744',
    preview: 'VESTALE (1743-1744): Lorient → Sénégal et Gorée → Juda et côtes de Guinée'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1718',
    to_date: '1719',
    preview: 'VICTOIRE (1718-1719): Saint-Malo → Falmouth → La Rochelle'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1719',
    to_date: '1719',
    preview: 'VICTOIRE (1718-1719): Saint-Malo → Falmouth → La Rochelle'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1719',
    to_date: '1719',
    preview: 'VICTOIRE (1718-1719): Saint-Malo → Falmouth → La Rochelle'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1738',
    to_date: '1738',
    preview: 'VICTOIRE (1738-1738): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1781',
    to_date: '1781',
    preview: 'VICTOIRE (1781-1781): Lorient → île de France ?'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1781',
    to_date: '1782',
    preview: 'VICTOIRE (1781-1782): Marseille → Toulon → Cadix → Martinique → Cap-Français → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'VICTOIRE (1781-1782): Marseille → Toulon → Cadix → Martinique → Cap-Français → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1781',
    to_date: '1782',
    preview: 'VICTORIEUSE (1781-1782): Marseille → Martinique → Cap-Français → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'VICTORIEUSE (1781-1782): Marseille → Martinique → Cap-Français → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1783',
    to_date: '1783',
    preview: 'VICTORIEUSE (1783-1783): Lorient → Saint-Domingue ?'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1720',
    to_date: '1721',
    preview: 'VIERGE DE GRÂCE (1720-1721): Nantes → Moka → Inde → Lorient'
  },
  {
    from: 'Senegal',
    to: 'India',
    from_date: '1721',
    to_date: '1721',
    preview: 'VIERGE DE GRÂCE (1720-1721): Nantes → Moka → Inde → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1721',
    to_date: '1721',
    preview: 'VIERGE DE GRÂCE (1720-1721): Nantes → Moka → Inde → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1722',
    to_date: '1723',
    preview: 'VIERGE DE GRÂCE (1722-1723): Lorient → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1723',
    to_date: '1723',
    preview: 'VIERGE DE GRÂCE (1722-1723): Lorient → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1723',
    to_date: '1723',
    preview: 'VIERGE DE GRÂCE (1722-1723): Lorient → Mascareignes et Madagascar → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1724',
    to_date: '1727',
    preview: 'VIERGE DE GRÂCE (1724-1727): Lorient → Inde et Mascareignes, Madagascar → Antilles → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1727',
    to_date: '1727',
    preview: 'VIERGE DE GRÂCE (1724-1727): Lorient → Inde et Mascareignes, Madagascar → Antilles → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1727',
    to_date: '1727',
    preview: 'VIERGE DE GRÂCE (1724-1727): Lorient → Inde et Mascareignes, Madagascar → Antilles → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1727',
    to_date: '1727',
    preview: 'VIERGE DE GRÂCE (1724-1727): Lorient → Inde et Mascareignes, Madagascar → Antilles → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1727',
    to_date: '1727',
    preview: 'VIERGE DE GRÂCE (1724-1727): Lorient → Inde et Mascareignes, Madagascar → Antilles → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1727',
    to_date: '1727',
    preview: 'VIERGE DE GRÂCE (1724-1727): Lorient → Inde et Mascareignes, Madagascar → Antilles → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1727',
    to_date: '1727',
    preview: 'VIERGE DE GRÂCE (1724-1727): Lorient → Inde et Mascareignes, Madagascar → Antilles → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1727',
    to_date: '1727',
    preview: 'VIERGE DE GRÂCE (1724-1727): Lorient → Inde et Mascareignes, Madagascar → Antilles → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Caribbean',
    from_date: '1727',
    to_date: '1727',
    preview: 'VIERGE DE GRÂCE (1724-1727): Lorient → Inde et Mascareignes, Madagascar → Antilles → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1727',
    to_date: '1727',
    preview: 'VIERGE DE GRÂCE (1724-1727): Lorient → Inde et Mascareignes, Madagascar → Antilles → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1729',
    to_date: '1732',
    preview: 'VIERGE DE GRÂCE (1729-1732): Lorient → Ténériffe → Sénégal et Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1732',
    to_date: '1732',
    preview: 'VIERGE DE GRÂCE (1729-1732): Lorient → Ténériffe → Sénégal et Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1732',
    to_date: '1732',
    preview: 'VIERGE DE GRÂCE (1729-1732): Lorient → Ténériffe → Sénégal et Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1732',
    to_date: '1732',
    preview: 'VIERGE DE GRÂCE (1729-1732): Lorient → Ténériffe → Sénégal et Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1732',
    to_date: '1732',
    preview: 'VIERGE DE GRÂCE (1729-1732): Lorient → Ténériffe → Sénégal et Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1732',
    to_date: '1732',
    preview: 'VIERGE DE GRÂCE (1729-1732): Lorient → Ténériffe → Sénégal et Gorée → Inde et Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1732',
    to_date: '1734',
    preview: 'VIERGE DE GRÂCE (1732-1734): Lorient → Madagascar et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1734',
    to_date: '1734',
    preview: 'VIERGE DE GRÂCE (1732-1734): Lorient → Madagascar et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1734',
    to_date: '1734',
    preview: 'VIERGE DE GRÂCE (1732-1734): Lorient → Madagascar et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1734',
    to_date: '1734',
    preview: 'VIERGE DE GRÂCE (1732-1734): Lorient → Madagascar et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1734',
    to_date: '1734',
    preview: 'VIERGE DE GRÂCE (1732-1734): Lorient → Madagascar et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1734',
    to_date: '1734',
    preview: 'VIERGE DE GRÂCE (1732-1734): Lorient → Madagascar et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1734',
    to_date: '1734',
    preview: 'VIERGE DE GRÂCE (1732-1734): Lorient → Madagascar et Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1747',
    to_date: '1747',
    preview: 'VIGILANT (1747-1747): Navire de Nantes affrété par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1778',
    to_date: '1778',
    preview: 'VIGILANT (1778-1778): Lorient → Inde et Mascareignes ?'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1778',
    to_date: '1778',
    preview: 'VIGILANT (1778-1778): Lorient → Inde et Mascareignes ?'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1717',
    to_date: '1717',
    preview: 'VIGILANTE (1717-1717): La Rochelle → Louisiane'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1751',
    to_date: '1752',
    preview: 'VILLE DE LORIENT dit le  (1751-1752): Navire de Lorient affrété par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'Madagascar',
    from_date: '1753',
    to_date: '1754',
    preview: 'VILLE DE LORIENT dit le  (1753-1754): Lorient → Port-Louis → Bordeaux → Marseille → Lorient'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1754',
    to_date: '1754',
    preview: 'VILLE DE LORIENT dit le  (1753-1754): Lorient → Port-Louis → Bordeaux → Marseille → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1774',
    to_date: '1774',
    preview: 'VILLE DE LORIENT (1774-1774): Lorient → île de France'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1776',
    to_date: '1778',
    preview: 'VILLE D’ARCHANGEL (1776-1778): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1778',
    to_date: '1778',
    preview: 'VILLE D’ARCHANGEL (1776-1778): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1778',
    to_date: '1778',
    preview: 'VILLE D’ARCHANGEL (1776-1778): Lorient → Cap de Bonne-Espérance → Inde et Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1762',
    preview: 'VILLEVAULT (1761-1762): Bordeaux → Mascareignes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1763',
    to_date: '1764',
    preview: 'VILLEVAULT (1763-1764): Armé pour la Chine, ne s’y rend pas'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1764',
    to_date: '1764',
    preview: 'VILLEVAULT (1763-1764): Armé pour la Chine, ne s’y rend pas'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1765',
    to_date: '1766',
    preview: 'VILLEVAULT (1765-1766): Lorient → Cadix → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1766',
    to_date: '1766',
    preview: 'VILLEVAULT (1765-1766): Lorient → Cadix → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1766',
    to_date: '1766',
    preview: 'VILLEVAULT (1765-1766): Lorient → Cadix → Mascareignes → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1767',
    to_date: '1768',
    preview: 'VILLEVAULT (1767-1768): Lorient → Chine → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1768',
    to_date: '1768',
    preview: 'VILLEVAULT (1767-1768): Lorient → Chine → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1768',
    to_date: '1770',
    preview: 'VILLEVAULT (1768-1770): Lorient → Cadix → Cap de Bonne-Espérance → Inde → Cap de Bonne-Espérance → La Corogne → Lorient'
  },
  {
    from: 'India',
    to: 'France',
    from_date: '1770',
    to_date: '1770',
    preview: 'VILLEVAULT (1768-1770): Lorient → Cadix → Cap de Bonne-Espérance → Inde → Cap de Bonne-Espérance → La Corogne → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1748',
    to_date: '1749',
    preview: 'VILLEFLIX (1748-1749): Navire de Nantes affrété puis acheté par la Compagnie des Indes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1749',
    to_date: '1751',
    preview: 'VILLEFLIX (1749-1751): Lorient → Cap de Bonne-Espérance → Chine → Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1751',
    to_date: '1751',
    preview: 'VILLEFLIX (1749-1751): Lorient → Cap de Bonne-Espérance → Chine → Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1751',
    to_date: '1751',
    preview: 'VILLEFLIX (1749-1751): Lorient → Cap de Bonne-Espérance → Chine → Mascareignes → Sainte-Hélène et Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1751',
    to_date: '1754',
    preview: 'VILLEFLIX (1751-1754): Lorient → Cap de Bonne-Espérance → Inde → Chine → Mascareignes → vaisseau de côte'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1754',
    to_date: '1754',
    preview: 'VILLEFLIX (1751-1754): Lorient → Cap de Bonne-Espérance → Inde → Chine → Mascareignes → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1721',
    to_date: '1722',
    preview: 'VÉNUS (1721-1722): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Nantes → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1722',
    to_date: '1722',
    preview: 'VÉNUS (1721-1722): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Nantes → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1722',
    to_date: '1722',
    preview: 'VÉNUS (1721-1722): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Nantes → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1722',
    to_date: '1722',
    preview: 'VÉNUS (1721-1722): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Nantes → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1723',
    to_date: '1725',
    preview: 'VÉNUS (1723-1725): Lorient → Juda et côtes de Guinée → Martinique → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Caribbean',
    from_date: '1725',
    to_date: '1725',
    preview: 'VÉNUS (1723-1725): Lorient → Juda et côtes de Guinée → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1725',
    to_date: '1725',
    preview: 'VÉNUS (1723-1725): Lorient → Juda et côtes de Guinée → Martinique → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1728',
    to_date: '1728',
    preview: 'VÉNUS (1728-1728): Lorient → Sénégal et Gorée → Louisiane → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Louisiana',
    from_date: '1728',
    to_date: '1728',
    preview: 'VÉNUS (1728-1728): Lorient → Sénégal et Gorée → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1728',
    to_date: '1728',
    preview: 'VÉNUS (1728-1728): Lorient → Sénégal et Gorée → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1729',
    to_date: '1729',
    preview: 'VÉNUS (1729-1729): Lorient → Sénégal et Gorée → Louisiane → Lorient'
  },
  {
    from: 'Senegal',
    to: 'Louisiana',
    from_date: '1729',
    to_date: '1729',
    preview: 'VÉNUS (1729-1729): Lorient → Sénégal et Gorée → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1729',
    to_date: '1729',
    preview: 'VÉNUS (1729-1729): Lorient → Sénégal et Gorée → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1730',
    to_date: '1731',
    preview: 'VÉNUS (1730-1731): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1731',
    to_date: '1731',
    preview: 'VÉNUS (1730-1731): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1731',
    to_date: '1731',
    preview: 'VÉNUS (1730-1731): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1731',
    to_date: '1731',
    preview: 'VÉNUS (1730-1731): Lorient → Saint-Domingue → Louisiane → Saint-Domingue → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1732',
    to_date: '1733',
    preview: 'VÉNUS (1732-1733): Lorient → Ténériffe → côte du sud-ouest africain → Sainte-Hélène → Mascareignes'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1757',
    to_date: '1762',
    preview: 'ZODIAQUE (1757-1762): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1762',
    to_date: '1762',
    preview: 'ZODIAQUE (1757-1762): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1762',
    preview: 'ZODIAQUE (1757-1762): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1762',
    to_date: '1762',
    preview: 'ZODIAQUE (1757-1762): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Madagascar',
    to: 'India',
    from_date: '1762',
    to_date: '1762',
    preview: 'ZODIAQUE (1757-1762): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1762',
    preview: 'ZODIAQUE (1757-1762): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Madagascar',
    from_date: '1762',
    to_date: '1762',
    preview: 'ZODIAQUE (1757-1762): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Madagascar',
    to: 'France',
    from_date: '1762',
    to_date: '1762',
    preview: 'ZODIAQUE (1757-1762): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1723',
    to_date: '1731',
    preview: 'ZÉPHYR (1723-1731): Le Havre → Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1742',
    to_date: '1742',
    preview: 'ZÉPHYR (1742-1742): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1749',
    to_date: '1749',
    preview: 'ZÉPHYR (1749-1749): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1771',
    to_date: '1772',
    preview: 'ZÉPHYR (1771-1772): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1772',
    to_date: '1772',
    preview: 'ZÉPHYR (1771-1772): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1772',
    to_date: '1773',
    preview: 'ZÉPHYR (1772-1773): Lorient → Vannes → Martinique → Guadeloupe → Nantes'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1773',
    to_date: '1773',
    preview: 'ZÉPHYR (1772-1773): Lorient → Vannes → Martinique → Guadeloupe → Nantes'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1773',
    to_date: '1774',
    preview: 'ZÉPHYR (1773-1774): Nantes → Martinique → Nantes'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1774',
    to_date: '1774',
    preview: 'ZÉPHYR (1773-1774): Nantes → Martinique → Nantes'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1774',
    to_date: '1775',
    preview: 'ZÉPHYR (1774-1775): Lorient → Vannes → Martinique → Saint-Domingue → Nantes → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1775',
    to_date: '1775',
    preview: 'ZÉPHYR (1774-1775): Lorient → Vannes → Martinique → Saint-Domingue → Nantes → Lorient'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1777',
    to_date: '1777',
    preview: 'ZÉPHYR (1777-1777): Lorient → Martinique → Lorient → Nantes → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1777',
    to_date: '1777',
    preview: 'ZÉPHYR (1777-1777): Lorient → Martinique → Lorient → Nantes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1757',
    to_date: '1758',
    preview: 'ÉMERAUDE (1757-1758): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Caribbean',
    from_date: '1758',
    to_date: '1758',
    preview: 'ÉMERAUDE (1757-1758): Escadre d\'Aché pour l\'Inde, deuxième division'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1758',
    to_date: '1759',
    preview: 'ÉCUREUIL (1758-1759): Lorient → Sénégal et Gorée → Brest'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1759',
    to_date: '1759',
    preview: 'ÉCUREUIL (1758-1759): Lorient → Sénégal et Gorée → Brest'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1742',
    to_date: '1746',
    preview: 'ÉLISABETH (1742-1746): Île de France → vaisseau de côte, voyage de découverte dans l’Océan Indien'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1747',
    to_date: '1747',
    preview: 'ÉLISABETH (1747-1747): Lorient pour le Sénégal'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1777',
    to_date: '1777',
    preview: 'ÉLISABETH (1777-1777): Lorient → île de France → Inde ?'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1777',
    to_date: '1777',
    preview: 'ÉLISABETH (1777-1777): Lorient → île de France → Inde ?'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1777',
    to_date: '1777',
    preview: 'ÉLISABETH (1777-1777): Lorient → Inde ?'
  },
  {
    from: 'Madagascar',
    to: 'Caribbean',
    from_date: '1720',
    to_date: '1721',
    preview: 'ÉLÉPHANT (1720-1721): Port-Louis → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'Louisiana',
    from_date: '1721',
    to_date: '1721',
    preview: 'ÉLÉPHANT (1720-1721): Port-Louis → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1721',
    to_date: '1721',
    preview: 'ÉLÉPHANT (1720-1721): Port-Louis → Saint-Domingue → Louisiane → Lorient'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1723',
    to_date: '1724',
    preview: 'ÉLÉPHANT (1723-1724): Lorient → Arguin → Sénégal → Lorient'
  },
  {
    from: 'Senegal',
    to: 'France',
    from_date: '1724',
    to_date: '1724',
    preview: 'ÉLÉPHANT (1723-1724): Lorient → Arguin → Sénégal → Lorient'
  },
  {
    from: 'France',
    to: 'Louisiana',
    from_date: '1725',
    to_date: '1725',
    preview: 'ÉLÉPHANT (1725-1725): Lorient → Louisiane → Antilles'
  },
  {
    from: 'Louisiana',
    to: 'Caribbean',
    from_date: '1725',
    to_date: '1725',
    preview: 'ÉLÉPHANT (1725-1725): Lorient → Louisiane → Antilles'
  },
  {
    from: 'France',
    to: 'Senegal',
    from_date: '1753',
    to_date: '1753',
    preview: 'ÉLÉPHANT (1753-1753): Lorient → Sénégal'
  },
  {
    from: 'France',
    to: 'India',
    from_date: '1758',
    to_date: '1761',
    preview: 'ÉLÉPHANT (1758-1761): Lorient → Inde → Chine → Mascareignes → La Corogne → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1761',
    to_date: '1761',
    preview: 'ÉLÉPHANT (1758-1761): Lorient → Inde → Chine → Mascareignes → La Corogne → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1761',
    to_date: '1761',
    preview: 'ÉLÉPHANT (1758-1761): Lorient → Inde → Chine → Mascareignes → La Corogne → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1762',
    to_date: '1763',
    preview: 'ÉLÉPHANT (1762-1763): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1763',
    to_date: '1763',
    preview: 'ÉLÉPHANT (1762-1763): Lorient → Mascareignes → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1764',
    to_date: '1765',
    preview: 'ÉLÉPHANT (1764-1765): Lorient → Cadix → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'Louisiana',
    from_date: '1765',
    to_date: '1765',
    preview: 'ÉLÉPHANT (1764-1765): Lorient → Cadix → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'Louisiana',
    to: 'France',
    from_date: '1765',
    to_date: '1765',
    preview: 'ÉLÉPHANT (1764-1765): Lorient → Cadix → Chine → Mascareignes → Ascension → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1766',
    to_date: '1767',
    preview: 'ÉLÉPHANT (1766-1767): Lorient → Cadix → Mascareignes → Inde → vaisseau de côte'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'India',
    from_date: '1767',
    to_date: '1767',
    preview: 'ÉLÉPHANT (1766-1767): Lorient → Cadix → Mascareignes → Inde → vaisseau de côte'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1784',
    to_date: '1785',
    preview: 'ÉLÉPHANT (1784-1785): Lorient → Ténériffe → Île de France → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'Isle Bourbon & Isle of France',
    to: 'France',
    from_date: '1785',
    to_date: '1785',
    preview: 'ÉLÉPHANT (1784-1785): Lorient → Ténériffe → Île de France → Cap de Bonne-Espérance → Lorient'
  },
  {
    from: 'France',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1777',
    to_date: '1779',
    preview: 'ÉPAMINONDAS (1777-1779): Lorient → île de France → ?'
  },
  {
    from: 'France',
    to: 'Caribbean',
    from_date: '1781',
    to_date: '1782',
    preview: 'ÉPREUVE (1781-1782): Marseille → Martinique → Lorient'
  },
  {
    from: 'Caribbean',
    to: 'France',
    from_date: '1782',
    to_date: '1782',
    preview: 'ÉPREUVE (1781-1782): Marseille → Martinique → Lorient'
  },
  {
    from: 'India',
    to: 'Isle Bourbon & Isle of France',
    from_date: '1731',
    to_date: '1731',
    preview: 'ÉTOILE (1731-1731): Pondichéry → armé pour les Mascareignes'
  }
];