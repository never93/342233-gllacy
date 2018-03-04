function initMap() {
    var uluru = {lat: 59.938, lng: 30.323};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru 
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
