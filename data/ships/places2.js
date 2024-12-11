/* 
Like data/places.js but with finer granularity, 
eg Bourbon & Ile de France as separate points, Caribbean ports as separate points etc.
This is used in the ships V1 map. 
*/
const PLACES = [
  {
    id: "France",
    label: "France",
    x: -7,
    y: -143,
    ylabel: -10,
  },
  {
    id: "Saint Domingue",
    label: "Saint Domingue",
    x: -320,
    y: -20,
    xlabel: -160,
    ylabel: 0,
  },
  {
    id: "Martinique",
    label: "Martinique",
    x: -280,
    y: 10,
    xlabel: 20,
    ylabel: 10,
  },
  {
    id: "Guadeloupe",
    label: "Guadeloupe",
    x: -280,
    y: -10,
    xlabel: 5,
    ylabel: -15,
  },
  {
    id: "Grenada",
    label: "Grenada",
    x: -280,
    y: 20,
    xlabel: -80,
    ylabel: 20,
  },
  {
    id: "Guyana",
    label: "Guyana",
    x: -230,
    y: 40,
    xlabel: -90,
    ylabel: 20,
  },
  {
    id: "Louisiana",
    label: "Louisiana",
    x: -400,
    y: -90,
    xlabel: -100,
    ylabel: 10,
  },
  {
    id: "New France",
    label: "New France",
    x: -360,
    y: -150,
    xlabel: -120,
    ylabel: 10,
  },
  {
    id: "Gorée",
    label: "Gorée",
    x: -91,
    y: 4,
    xlabel: -50,
    ylabel: 30,
  },
  {
    id: "Saint-Louis",
    label: "Saint-Louis",
    x: -70,
    y: -10,
    xlabel: 0,
    ylabel: -20,
  },
  {
    id: "Ouidah",
    label: "Ouidah",
    x: -10,
    y: 30,
    xlabel: 0,
    ylabel: 30,
  },
  {
    id: "Madagascar",
    label: "Madagascar",
    x: 188,
    y: 132,
    xlabel: -50,
    ylabel: -20,
  },
  {
    id: "Isle Bourbon",
    label: "Isle Bourbon",
    x: 205,
    y: 147,
    xlabel: -45,
    ylabel: 30,
  },
  {
    id: "Île de France",
    label: "Île de France",
    x: 217,
    y: 132,
    xlabel: -5,
    ylabel: 30,
  },
  {
    id: "Pondicherry",
    label: "Pondicherry",
    x: 327,
    y: 3,
    xlabel: -80,
    ylabel: -15,
  },
  {
    id: "Mahe",
    label: "Mahe",
    x: 302,
    y: 9,
    xlabel: -65,
    ylabel: 15,
  },
  {
    id: "Karaikal",
    label: "Karaikal",
    x: 346,
    y: 13,
    xlabel: -45,
    ylabel: 35,
  },
  {
    id: "Chandernagore",
    label: "Chandernagore",
    x: 368,
    y: -29,
    xlabel: -125,
    ylabel: -20,
  },
];

for (i = 0; i < PLACES.length; i++) {
  if (!("color" in PLACES[i])) {
    PLACES[i].size = 8;
    PLACES[i].color = "#c00000";
  }
}
