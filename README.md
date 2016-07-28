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
```

convert Cell Id to Quadkey
------------------

Convert from base 10 (decimal) `S2 Cell Id` to base 4 `quadkey` (aka hilbert curve quadtree id)

Example '4/032212303102210' becomes '9749618446378729472'

```
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
