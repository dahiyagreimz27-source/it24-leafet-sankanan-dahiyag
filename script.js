const map = L.map("map").setView([8.31058, 124.85926
], 15);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(map);

const marker = L.marker([8.31058, 124.85926]).addTo(map);
marker.bindPopup("<b>Zone 3 Sankanan, Manolo Fortich, Bukidnon</b><p>Welcome to Dahiyag House!🏠 </p>");

L.circle([8.31058, 124.85926], {
  color: "green",
  fillColor: "#3dd347",
  fillOpacity: 0.3,
  radius: 500,
}).addTo(map);

map.on("click", function (event) {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  L.popup()
    .setLatLng(event.latlng)
    .setContent(
      "Latitude: " + lat.toFixed(5) + "<br>Longitude: " + lng.toFixed(5),
    )
    .openOn(map);
});

const locations = [
  { name: "Landmark", lat: 8.30851 , lng:  124.85897, brgy: "Zone 1, Sankanan" },
  { name: "Landmark", lat: 8.31481 , lng: 124.85978 , brgy: "Zone 4, Sankanan" },
  { name: "Landmark", lat: 8.31252 , lng: 124.85924, brgy: "Zone 3, Sankanan" },
  
];

locations.forEach(function(place) {
    L.marker([place.lat, place.lng])
     .addTo(map)
        .bindPopup(place.name + "<br>" + place.brgy);
});

