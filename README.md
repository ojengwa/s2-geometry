s2-geometry (JavaScript/ES5.1)
======================

A pure JavaScript/ES5.1 port of Google/Niantic's S2 Geometry library (used by **Ingress**, **Pokemon GO**)

Currently contains basic support for S2Cell

Simple Examples
---------------

```javascript
var level = 15;
var latlng = { lat: 40.2574448, lng: -111.7089464 };
var cell = S2.S2Cell.FromLatLng(latlng, level);

cell.getNeighbors();  // [ cellLeft, cellDown, cellRight, cellUp ]

cell.getLatLng();     // { lat: 40.2574448, lng: -111.7089464 }

var key = cell.toHilbertQuadkey();
```

Previous and Next
-----------------

You can get the previous and next S2CellId from any given Key:

1. Convert from Lat/Lng to Key (Face and Hilbert Curve Quadtree)
2. Get the Previous or Next Key
3. Convert the Key to an Id (uint64 string)

```javascript
var key = S2.latLngToKey(40.2574448, -111.7089464);
var id = S2.toId(key);

var nextKey = S2.nextKey(key);
var nextId = S2.toId(nextKey);

var prevKey = S2.prevKey(key);
var prevId = S2.toId(prevKey);

// See it
console.log(prevKey);
console.log(key);
console.log(nextKey);
console.log(nextId);
```

convert Cell Id to Quadkey
------------------

Convert from base 10 (decimal) `S2 Cell Id` to base 4 `quadkey` (aka hilbert curve quadtree id)

Example '4/032212303102210' becomes '9749618446378729472'

```javascript
'use strict';

var quadkey = '4/032212303102210'
var parts = quadkey.split('/');
var face = parts[0];                  // 4
var position = parts[1];              // '032212303102210';
var level = '032212303102210'.length; // 15

var cellId = S2.fromFacePosLevel(face, position, level);

console.log(cellId);
```

Convert from hilbert quadtree id to s2 cell id:

Example '9749618446378729472' becomes '4/032212303102210'

```
'use strict';

var cellId = '9749618446378729472';

var hilbertQuadkey = S2.toHilbertQuadkey(cellId);

console.log(hilbertQuadkey);
```
