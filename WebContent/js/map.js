$( document ).ready(function() {
    initMap();
});

function updateSelection(selection){

var isSelected = $('#'+selection).data('selected');
if(isSelected=='1')
    $('#'+selection).data('selected',0);
else
    $('#'+selection).data('selected',1);
initMap();
}

function contactEmergency() {

    $.confirm({
        title: 'Text emergency service',
        content: ''
    });

}

function initMap() {
        var btnCounsellor = $('#btnCounsellor').data('selected');
        var btnFinancial = $('#btnFinancial').data('selected');
        var btnLegal = $('#btnLegal').data('selected');
        var btnSexAbuse = $('#btnSexAbuse').data('selected');
        var btnFinal = $('#btnSendInvite').data('selected');

        var myLatLng = {lat: -33.8689677, lng: 151.204453};

        // var image = {
        //   url: 'file:///Users/elonliu/Developer/hack2017/dv/DVHelper/imgs/ellon.png',
        //   // This marker is 20 pixels wide by 32 pixels high.
        //   size: new google.maps.Size(20, 32)
        //   // // The origin for this image is (0, 0).
        //   // origin: new google.maps.Point(0, 0),
        //   // // The anchor for this image is the base of the flagpole at (0, 32).
        //   // anchor: new google.maps.Point(0, 32)
        // };

        var image = 'imgs/pin_2.png';
        var imageCounsellor = 'imgs/pin_blue.png';
        var imageFinancial = 'imgs/pin_orange.png';
        var imageLegal = 'imgs/pin_green.png';
        var imageSexAbuse = 'imgs/pin_red.png';

        var map = new google.maps.Map(document.getElementById('mapid'), {
          zoom: 15,
          center: myLatLng
        });
        var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
        });

        var markerCounsellor = new google.maps.Marker({
            position: {lat: -33.8731, lng: 151.2113},
            map: null,
            icon: imageCounsellor
        });
        var markerCounsellor_2 = new google.maps.Marker({
            position: {lat: -33.8701, lng: 151.2083},
            map: null,
            icon: imageCounsellor
        });
        var markerCounsellor_3 = new google.maps.Marker({
            position: {lat: -33.8731, lng: 151.2133},
            map: null,
            icon: imageCounsellor
        });
        var markerFinancial = new google.maps.Marker({
            position: {lat: -33.8721, lng: 151.2023},
            map: null,
            icon: imageFinancial
        });
        var markerLegal = new google.maps.Marker({
            position: {lat: -33.8681, lng: 151.2110},
            map: null,
            icon: imageLegal
        });
        var markerSexAbuse = new google.maps.Marker({
            position: {lat: -33.8684, lng: 151.1970},
            map: null,
            icon: imageSexAbuse
        });
        var markerSexAbuse_2 = new google.maps.Marker({
            position: {lat: -33.8731, lng: 151.1970},
            map: null,
            icon: imageSexAbuse
        });

        if (btnCounsellor == '1') 
        {
            markerCounsellor.setMap(map);
            markerCounsellor_2.setMap(map);
            markerCounsellor_3.setMap(map);
        }
        if (btnFinancial == '1') {
            markerFinancial.setMap(map);
        }
        if (btnLegal == '1') {
            markerLegal.setMap(map);
        }
        if (btnSexAbuse == '1') {
            markerSexAbuse.setMap(map);
            markerSexAbuse_2.setMap(map);
        }
        if (btnFinal == '1') {
            markerCounsellor.setMap(null);
            markerCounsellor_3.setMap(null);
            markerSexAbuse.setMap(null);
        }


      }
