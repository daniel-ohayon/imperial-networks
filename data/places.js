const PLACES = [{
  id: 'France',
  label: 'France',
  x: 90,
  y: -125,
  ylabel: -10
},
{
  id: 'Caribbean',
  label: 'Caribbean',
  x: -230,
  y: 20,
  xlabel: -120,
  ylabel: 10,
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
  id: 'Senegal',
  label: 'Senegal',
  x: 15,
  y: 45,
  xlabel: -80,
  ylabel: 30
},
{
  id: 'Madagascar',
  label: 'Madagascar',
  x: 300,
  y: 200,
  xlabel: 20,
  ylabel: -10
},
{
  id: 'Isle Bourbon & Isle of France',
  label: 'Isle of France & Bourbon',
  x: 320,
  y: 220,
  xlabel: -45,
  ylabel: 30,
},
{
  id: 'India',
  label: 'India',
  x: 430,
  y: 40
}
];

for (i = 0; i < PLACES.length; i++) {
  PLACES[i].size = 8;
  PLACES[i].color = '#c00000';
}

// (function validateLinks() {
//   const validIDs = PLACES.map(p => p.id);
//   LINKS.forEach(link => {
//     if (!validIDs.includes(link.from) || !validIDs.includes(link.to)) {
//       console.log(`Invalid node ID!`);
//       console.log(link);
//     }
//   });
// })();