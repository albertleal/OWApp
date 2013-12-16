function goLocation(idMap){
	  var mapOptions = {
    zoom: 18
  };
    map = new google.maps.Map(document.getElementById(idMap),
      mapOptions);

  var pos = new google.maps.LatLng(41.40843,2.20827);

  var infowindow = new google.maps.InfoWindow({
    map: map,
    position: pos,
    content: '<p>You are here!</p>'
  });

  map.setCenter(pos);

  addLocations(map);
}

function geoLocate(idMap){

  var mapOptions = {
    zoom: 18
  };
    map = new google.maps.Map(document.getElementById(idMap),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: '<p>You are here! Thanks HTML5!</p>'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true, map);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false, map);
  }
   addLocations(map);

}

function handleNoGeolocation(errorFlag, map) {

  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };
  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);

}

function addLocations(map){

		markers = new Array();

		icon = "../../../owapp.png";

		html = "<h3>Localizacion</h3><p>Cuerpo localizacion</p>";

		markers[0] = new google.maps.LatLng(41.40914,2.20855);
		markers[1] = new google.maps.LatLng(41.40867,2.20968);
		markers[2] = new google.maps.LatLng(41.40791,2.20763);
		markers[3] = new google.maps.LatLng(41.40797,2.20890);

		var bounds = new google.maps.LatLngBounds ();

		for (var i = markers.length - 1; i >= 0; i--) {
			marker = new google.maps.Marker({
				position: markers[i],
				icon: icon,
				map: map,
				html: html
			});

			bounds.extend(markers[i]);

			infowindow = new google.maps.InfoWindow({
				content: 'Empty'
			});

		   google.maps.event.addListener(marker, 'click', function() {
	        infowindow.setContent(this.html);
	        infowindow.open(map, this);    
	        });
		};
		map.fitBounds(bounds);

}