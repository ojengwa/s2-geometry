'use strict';

//var oS2 = require('./s2geometry.old.js').S2;
var jS2 = require('../src/s2geometry.js').S2;
var nS2 = require('s2geometry-node');

var lat = -43.525166;
var lng = 172.655096;
//var id = '8678661352471920640';

console.log('');
console.log('Lat/Lng');
console.log('=', lat + ',' + lng);

//
// Lat / Lng to XYZ
//
var nS2LatLng = new nS2.S2LatLng(lat, lng).toPoint();
var nXyz = [ nS2LatLng.x(), nS2LatLng.y(), nS2LatLng.z() ];
//var oXyz = oS2.LatLngToXYZ({ lat: lat, lng: lng });
var jXyz = jS2.LatLngToXYZ({ lat: lat, lng: lng });
console.log('');
console.log('XYZ');
console.log('=', nXyz);
//console.log('o', oXyz);
console.log('j', jXyz);


var nCell = new nS2.S2CellId(nS2LatLng).parent(15);
//var oCell = oS2.S2Cell.FromLatLng({ lat: lat, lng: lng }, 15);
var jCell = jS2.S2Cell.FromLatLng({ lat: lat, lng: lng }, 15);
console.log('');
console.log('F,IJ,L');
//console.log('=', cellN);
//console.log('o', oCell.toString());
console.log('j', jCell.toString());

var nKey = nCell.toString();
//var oQuad = oCell.getFaceAndQuads();
//var oKey = oQuad[0] + '/' + oQuad[1].join('');
var jQuad = jCell.getFaceAndQuads();
var jKey = jQuad[0] + '/' + jQuad[1].join('');
console.log('');
console.log('Quadkey');
console.log('=', nKey);
//console.log('o', oKey);
console.log('j', jKey);

//var nCellId = new nS2.S2CellId(id);
//console.log(nCellId.toLatLng().toString());
