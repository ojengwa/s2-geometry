'use strict';

var S2 = require('../src/s2geometry.js').S2;

var level = 15;
var latlng = { lat: 40.2574448, lng: -111.7089464 };
var cell = S2.S2Cell.FromLatLng(latlng, level);

cell.getNeighbors();  // [ cellLeft, cellDown, cellRight, cellUp ]

latlng = cell.getLatLng();     // { lat: 40.2574448, lng: -111.7089464 }

if (40 === Math.round(latlng.lat) && -112 === Math.round(latlng.lng)) {
  console.log('OK');
  process.exit(0);
}
else {
  console.log('[ERROR] latitude and longitude were not the expected values:');
  console.log(latlng);
  process.exit(1);
}
