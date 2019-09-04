mapboxgl.accessToken = 'pk.eyJ1IjoiYWx0bWFnYSIsImEiOiJjanhvaDBybGQwMnBsM2psMzJyajJnc3JwIn0.i5wnnqDWG9isQU-QOAwe8g';
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
  center: [2.352,48.877], // starting position
  zoom: 16 // starting zoom
});