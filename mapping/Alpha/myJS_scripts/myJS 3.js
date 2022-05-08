
"use strict"; // JS strict mode 

var myFunctionHolder = {};

//declaring function addPopups
myFunctionHolder.addPopups = function (feature, layer) {
  
  if (feature.properties && feature.properties.species) {
    var popupLabel = "<dl><dt>Species:</dt>" 
      + "<dd>" + feature.properties.species + "</dd>" 
      + "<dt>Year of Collection:</dt>" 
      + "<dd>" + feature.properties.year + "</dd></dl>"
  layer.bindPopup(popupLabel);
  } else if (feature.properties && feature.properties.scientificName) {
    var popupLabel = "<dl><dt>Species:</dt>" 
      + "<dd>" + feature.properties.scientificName + "</dd>" 
      + "<dt>Year of Collection:</dt>" 
      + "<dd>" + feature.properties.year + "</dd></dl>"
  layer.bindPopup(popupLabel);
  }
}

//declaring function pointToCircle
myFunctionHolder.pointToCircle = function (feature, latlng) {
  
  var geojsonMarkerOptions = {
    radius: 8,
    //fillColor: "#F46B06",
    fillColor: "yellow",
    color: "black",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  };
  var circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);
  return circleMarker;
}

//executes when window is fully loaded
window.onload = function () {
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  });

  // Lat long coordinates given for city of Albuquerque.
  var mapObject = L.map('mapId').setView([35.0844, -106.6504], 6);

  //replace the code below from the Plain JavaScript from the map style you choose
  //at http://leaflet-extras.github.io/leaflet-providers/preview/
  var baseMap = L.tileLayer('https://api.mapbox.com/styles/v1/liping17/cj6ut4r6u1vnw2rmrtwymq5lq/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGlwaW5nMTciLCJhIjoiY2o2dTJwYTJ0MG1wdzMzbzRrNDJlOG5jbyJ9.cr8HRltBug7xDGgTV_X__A', {
        maxZoom: 18,
        attribution: '&copy; <a href=”https://www.mapbox.com/about/maps/”>Mapbox</a> &copy; <a href=”http://www.openstreetmap.org/copyright”>OpenStreetMap</a>'
    });

    baseMap.addTo(mapObject);

  // specimens is the variable name we defined in sampleData.js file. 
  var specGroup = L.geoJSON(specimens, {
    onEachFeature: myFunctionHolder.addPopups,
    pointToLayer: myFunctionHolder.pointToCircle
  });

  var clusters = L.markerClusterGroup();
  clusters.addLayer(specGroup);
  mapObject.addLayer(clusters);

  mapObject.addLayer(specGroup);
  //mapObject.fitBounds(specGroup.getBounds());
}





