function marker (marker,category) {//marker object
    this.marker = marker;
    this.category = typeof category !== 'undefined' ? category : 999;
}

function createMap(idMap) {
  //console.log('Crear mapa');
  var mapOptions = {
    zoom: 18
  };

  map = new google.maps.Map(document.getElementById(idMap),mapOptions);
  return map;
}

function filterMarkers(element,markers) {
  
  //console.log('Filter markers');
  toShow = [];
  if (element.value!=0) {
    for (var i = markers.length - 1; i >= 0; i--) {
      if(markers[i].category==element.value) {
        toShow.push(markers[i]);
      }
    }
  }else {
    toShow = markers;
  }

  return toShow;
}

function goLocation(map, cadena) {

  console.log('goLocation');

  //var pos = new google.maps.LatLng(41.40843,2.20827);
  var geocoder;

  geocoder = new google.maps.Geocoder();

  geocoder.geocode( { 'address': cadena}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      pos = results[0].geometry.location;
      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: '<p>Location searched</p>'
      });

      map.setCenter(pos);

    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });

}

function geoLocate(map) {

  //console.log('Geolocate');

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
}

function handleNoGeolocation(errorFlag, map) {

  //console.log('handleNoGeolocation');

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

function addLocations(map,markers) {

  //console.log('addLocations');

	for (var i = markers.length - 1; i >= 0; i--) {
		
		markers[i].marker.setMap(map);

		infowindow = new google.maps.InfoWindow({
			content: 'Empty'
		});
	};
}

function centerMap(map,markers) {

  //console.log('centerMap');
  
  var bounds = new google.maps.LatLngBounds();

  for (var i = markers.length - 1; i >= 0; i--) {
    bounds.extend(markers[i].marker.position);
  };
  map.fitBounds(bounds);
}

function clearLocations(markers) {
  //console.log('clearLocations');
  for (var i = markers.length - 1; i >= 0; i--) {
    markers[i].marker.setMap(null);
  }
}

function assignEvents(map,markers) {
  for (var i = markers.length - 1; i >= 0; i--) {
    google.maps.event.addListener(markers[i].marker, 'click', function() {
      infowindow.setContent(this.html);
      infowindow.open(map, this);
    });
  };
}

function testMarkers() {

    markers = new Array();

    icon = "../../../owapp.png";

    html = "<h3>Localizacion</h3><p>Cuerpo localizacion</p>";

    position = new google.maps.LatLng(41.40867,2.20968);
    toAdd = new google.maps.Marker({
        position: position,
        icon: icon,
        html: html
    });
    tmp = new marker(toAdd,1);
    markers.push(tmp);

    position = new google.maps.LatLng(41.40791,2.20763);
    toAdd = new google.maps.Marker({
        position: position,
        icon: icon,
        html: html
    });
    tmp = new marker(toAdd,1);
    markers.push(tmp);

    position = new google.maps.LatLng(41.40797,2.20890);
    toAdd = new google.maps.Marker({
        position: position,
        icon: icon,
        html: html
    });
    tmp = new marker(toAdd,2);
    markers.push(tmp);

    position = new google.maps.LatLng(41.40949,2.20625);
    toAdd = new google.maps.Marker({
        position: position,
        icon: icon,
        html: html
    });
    tmp = new marker(toAdd,2);
    markers.push(tmp);

    position = new google.maps.LatLng(41.40862,2.20515);
    toAdd = new google.maps.Marker({
        position: position,
        icon: icon,
        html: html
    });
    tmp = new marker(toAdd,2);
    markers.push(tmp);

    position = new google.maps.LatLng(41.40753,2.20587);
    toAdd = new google.maps.Marker({
        position: position,
        icon: icon,
        html: html
    });
    tmp = new marker(toAdd);
    markers.push(tmp);

    position = new google.maps.LatLng(41.40711,2.20660);
    toAdd = new google.maps.Marker({
        position: position,
        icon: icon,
        html: html
    });
    tmp = new marker(toAdd);
    markers.push(tmp);

    return markers;
}