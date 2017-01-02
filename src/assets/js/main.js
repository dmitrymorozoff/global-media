function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://maps.googleapis.com/maps/api/js?callback=myMap";
    document.body.appendChild(script);
}
window.onload = loadScript;
function myMap() {
    var mapLatLng = {
        lat: 55.848236,
        lng: -4.215924
    };
    var mapCanvas = document.getElementsByClassName('section-map__map')[0];
    var mapOptions = {
        center: mapLatLng,
        zoom: 9,
        scrollwheel: false
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    new google.maps.Marker({position: mapLatLng, map: map});
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
}
