var map = L.map("map").setView([41.890251, 12.492373], 6);

mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; " + mapLink + " Contributors",
    maxZoom: 18
}).addTo(map);

var marker = L.marker(map.getCenter()).addTo(map);

function showPosition(position) {
    marker.setLatLng([position.coords.latitude, position.coords.longitude]);

    var latLngs = [marker.getLatLng()];
    var markerBounds = L.latLngBounds(latLngs);
    map.fitBounds(markerBounds);
}

function showError(error) {
    console.log(error.code);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Questo browser non supporta la geolocalizzazione");
    }
}

setInterval(getLocation, 2000)