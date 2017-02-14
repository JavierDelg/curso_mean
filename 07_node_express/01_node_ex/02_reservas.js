var miExpress = require("express");

// Instanciar
var app = miExpress();

var aResponder = (request, response) => {
    console.log("Acceso a la peticion, ", request);
    response.send("Ruta: " + request.originalUrl + " Verbo: " + request.method);
    var metodo = reservas[request.method];
}

var reservas = {
    GET: function() {
        return "{Todas las reservas}"
    },
    getById: function(id) {
        return "reserva" + id;
    },

    POST: function(reservas) {
        console.log("Añadir reserva " + reservas.id)
    },

    delete: function(reserva) {
        console.log("Reserva" + reservas.id)
    }


}


app.all("/reservas", aResponder);

app.listen(9000);

console.log("Servidor Express lanzado");