'use strict';

var tests = require('./generated-locations.json');
var jS2 = require('../src/s2geometry.js').S2;

function checkReal(loc) {
  var jCell = jS2.S2Cell.FromLatLng({ lat: loc.lat, lng: loc.lng }, 15);
  var jQuad = jCell.getFaceAndQuads();
  var jKey = jQuad[0] + '/' + jQuad[1].join('');

  if (loc.quadkey !== jKey) {
    console.log('');
    console.log('Quadkey');
    console.log('=', loc.quadkey);
    console.log('j', jKey);
    throw new Error("values didn't match expected");
  }
}

tests.forEach(checkReal);
console.log('PASS');
