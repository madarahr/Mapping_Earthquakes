// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);


// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSAON data.
// L.geoJSON reverses the coordinates from above to Lat Long
// L.geoJSON(sanFranAirport).addTo(map);


// Let’s break down what is happening in the L.geoJSON() layer:

// We add two arguments: the data and the pointToLayer callback function.
// The data will be our sanFranAirport data.
// For the pointToLayer callback function,
// we are first going to call a function() where we pass each GeoJSON feature as feature, 
// and its latitude and longitude as latlng.
// Then we add a marker for each feature with a latitude and longitude in the pointToLayer 
// callback function argument by using return L.marker(latlng).
// Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
// 	  return L.marker(latlng)
// 	  .bindPopup("<h2>" + feature.properties.city + "</h2>");
//     }

//   }).addTo(map);

  L.geoJson(sanFranAirport, {
    onEachFeature: function(feature, layer) {
		console.log(layer);
    	layer.bindPopup('<h2>'+feature.properties.name+'</h2>');
     }
}).addTo(map);

// We create the tile layer that will be the background of our map.
	let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
	});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// mapbox.streets-v10
// mapbox.light
// mapbox.dark=v10
// mapbox.satellite
// mapbox.streets-satellite-v11
// mapbox.wheatpaste
// mapbox.streets-basic
// mapbox.comic
// mapbox.outdoors
// mapbox.run-bike-hike
// mapbox.pencil
// mapbox.pirates
// mapbox.emerald
// mapbox.high-contrast