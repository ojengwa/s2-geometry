var S2 = require('s2geometry-node');

// Provo, UT (Center St)
//var lat = 40.2574448;
//var lng = -111.7089464;

// Startup Building in Provo
var lat = 40.2262363;
var lng = -111.6630927;

var s2latlng = new S2.S2LatLng(lat, lng);
var cellId = new S2.S2CellId(s2latlng).parent(15);
var cell;

var walk = [];
var next = cellId;
var prev = cellId;
var i;

// -10 - -1
for (i = 0; i < 10; i += 1) {
  prev = prev.prev();

  walk.unshift([ -(i + 1), prev ]);
}

// 0
walk.push([ 0, cellId ]);

// 1 - 10
for (i = 0; i < 10; i += 1) {
  next = next.next();

  walk.push([ i + 1, next ]);
}

// all results
walk.forEach(function (parts) {
  var i = parts[0];
  var cellId = parts[1];

  cell = new S2.S2Cell(cellId);
  console.log(i, cell.face(), cellId.id(), cellId.toString(), cellId.toLatLng().toString(), cellId.level());
});
