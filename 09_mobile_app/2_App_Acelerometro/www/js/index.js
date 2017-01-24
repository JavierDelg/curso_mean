var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        console.log("Acelerometro: " + navigator.accelerometer);
        alert("Geolocation: " + navigator.geolocation);
        // navigator.accelerometer.getCurrentAcceleration(app.aLRecibirDatos, app.aLRecibirError);
        var options = { frequency: 3000 }
            // var watchID = navigator.accelerometer.watchAcceleration(app.aLRecibirDatos, app.aLRecibirError, options);
        var watchID = navigator.geolocation.watchPosition(app.aLRecibirGps, app.aLRecibirError, options);
        navigator.notification.beep(3);
    },

    //funcion Callback acelerometro
    aLRecibirDatos: function(acelearion) {
        alert("Acelearion X:" + acelearion.x + "\n" +
            "Acelearion Y:" + acelearion.y + "\n" +
            "Acelearion Z:" + acelearion.z + "\n" +
            "En el momento:" + acelearion.timestamp + "\n")
    },
    //funcion Callback GPS
    aLRecibirGps: function(geopos) {
        var divGPS = document.getElementById("posicion_gps");
        divGPS.innerHTML = "<p>Latitud:" + geopos.coords.latitude + "</p>" +
            "<p>Longuitud:" + geopos.coords.longitude + "</p>" +
            "<p>Altura:" + geopos.coords.altitude + "</p>" +
            "<p>Direccion de recorrido:" + geopos.coords.heading + "</p>" +
            "<p>Velocidad:" + geopos.coords.speed + "</p>"

    },

    aLRecibirError: function(error) {
        alert("Se ha producido un error \n" +
            "Coduigo de error: " + error.code + "\n" +
            "Mensaje: " + error.message);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();