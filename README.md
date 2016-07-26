s2-geometry (JavaScript/ES5.1)
======================

A pure JavaScript/ES5.1 port of Google/Niantic's S2 Geometry library (used by Ingress, Pokemon GO)

Currently contains basic support for S2Cell

Simple Examples
---------------

```javascript
var level = 15;
var latlng = { lat: 40.2574448, lng: -111.7089464 };
var cell = S2.S2Cell.FromLatLng(latlng, level);

cell.getNeighbors();  // [ cellLeft, cellDown, cellRight, cellUp ]

cell.getLatLng();     // { lat: 40.2574448, lng: -111.7089464 }
```
