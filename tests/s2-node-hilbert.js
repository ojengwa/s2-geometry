var S2 = require('s2geometry-node');
var lat = 40.2574448;
var lng = -111.7089464;

var s2latlng = new S2.S2LatLng(lat, lng);
var point;
var cellId = new S2.S2CellId(s2latlng).parent(15);
var cell;
//var cell = new S2.S2Cell(cellId.toLatLng());

var walk = [];
var next = cellId;
var prev = cellId;
var i;

for (i = 0; i < 10; i += 1) {
  prev = prev.prev();

  walk.unshift([ -(i + 1), prev ]);

  //cell = new S2.S2Cell(prev);
  //console.log(cell.face(), prev.id(), prev.toString(), prev.toLatLng().toString(), prev.level());
}

walk.push([ 0, cellId ]);
//cell = new S2.S2Cell(cellId);
//console.log(0, cell.face(), cellId.id(), cellId.toString(), cellId.toLatLng().toString(), cellId.level());

for (i = 0; i < 10; i += 1) {
  next = next.next();

  walk.push([ i + 1, next ]);

  //cell = new S2.S2Cell(next);
  //console.log(cell.face(), next.id(), next.toString(), next.toLatLng().toString(), next.level());
}

walk.forEach(function (parts) {
  var i = parts[0];
  var cellId = parts[1];

  cell = new S2.S2Cell(cellId);
  console.log(i, cell.face(), cellId.id(), cellId.toString(), cellId.toLatLng().toString(), cellId.level());
});
//console.log(0, cell.face(), cellId.id(), cellId.toString(), cellId.toLatLng().toString(), cellId.level());

/*
console.log(cell.id().toString());
var latlng = cell.toLatLng();
console.log(cellId.toString());
console.log(cellId.face().toString());
console.log(cell.orientation().toString());
console.log(cellId.level().toString());
console.log(latlng.lat.toString(), latlng.lng.toString());
*/
