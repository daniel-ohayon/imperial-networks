/* 
Like data/places.js but with finer granularity, 
eg Bourbon & Ile de France as separate points, Caribbean ports as separate points etc.
This is used in the ships V1 map. 
*/
const PLACES = [{
    id: 'France',
    label: 'France',
    x: 90,
    y: -125,
    ylabel: -10
},
{
    id: 'Saint Domingue',
    label: 'Saint Domingue',
    x: -250,
    y: 20,
    xlabel: -160,
    ylabel: 0,
},
{
    id: 'Martinique',
    label: 'Martinique',
    x: -205,
    y: 45,
    xlabel: 20,
    ylabel: 10,
},
{
    id: 'Guadeloupe',
    label: 'Guadeloupe',
    x: -205,
    y: 25,
    xlabel: 5,
    ylabel: -15,
},
{
    id: 'Grenada',
    label: 'Grenada',
    x: -205,
    y: 55,
    xlabel: 20,
    ylabel: 20,
},
{
    id: 'Guyana',
    label: 'Guyana',
    x: -150,
    y: 90,
    xlabel: -90,
    ylabel: 20
},
{
    id: 'Louisiana',
    label: 'Louisiana',
    x: -340,
    y: -60,
    xlabel: -100,
    ylabel: 10,
},
{
    id: 'New France',
    label: 'New France',
    x: -340,
    y: -150,
    xlabel: -120,
    ylabel: 10,
},
{
    id: 'Gorée',
    label: 'Gorée',
    x: 5,
    y: 45,
    xlabel: -50,
    ylabel: 30
},
{
    id: 'Saint-Louis',
    label: 'Saint-Louis',
    x: 25,
    y: 35,
    xlabel: 0,
    ylabel: -20
},
{
    id: 'Ouidah',
    label: 'Ouidah',
    x: 80,
    y: 80,
    xlabel: 0,
    ylabel: 30
},
{
    id: 'Madagascar',
    label: 'Madagascar',
    x: 300,
    y: 200,
    xlabel: -50,
    ylabel: -20
},
{
    id: 'Isle Bourbon',
    label: 'Isle Bourbon',
    x: 320,
    y: 220,
    xlabel: -45,
    ylabel: 30,
},
{
    id: 'Île de France',
    label: 'Île de France',
    x: 340,
    y: 200,
    xlabel: -5,
    ylabel: 30,
},
{
    id: 'Pondicherry',
    label: 'Pondicherry',
    x: 450,
    y: 50,
    xlabel: -80,
    ylabel: -15,    
},
{
    id: 'Mahe',
    label: 'Mahe',
    x: 420,
    y: 60,
    xlabel: -65,
    ylabel: 15,    
},
{
    id: 'Karaikal',
    label: 'Karaikal',
    x: 470,
    y: 60,
    xlabel: -45,
    ylabel: 35,    
},
{
    id: 'Chandernagore',
    label: 'Chandernagore',
    x: 480,
    y: 10,
    xlabel: -125,
    ylabel: -20,    
},
];

for (i = 0; i < PLACES.length; i++) {
    if (!('color' in PLACES[i])) {
        PLACES[i].size = 8;
        PLACES[i].color = '#c00000';
    }
}