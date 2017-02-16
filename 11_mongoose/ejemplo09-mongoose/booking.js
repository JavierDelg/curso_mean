var mongoose = require("mongoose");
mongoose.connect("localhost:27017/bd_libros")
var Reserva = require("./booking_schema");
var objeto = {};
objeto.getAll = function() {
    var Reservas = [];
    console.log("///////////////////////////");
    console.log(Reserva);
    Reserva.find({}).exec((error, reserva) => {
        console.log(reserva);
        Reservas.push(reserva);
    });
    console.log(Reservas);
}

objeto.saveReserva = function(reserva, callback) {
    Reserva = new Reserva(reserva)
    Reserva.save((error, doc) => {
        if (error) {
            console.error("Pues no se ha guardado la reserva! ");
        } else {
            console.log("Guardada reserva con id: " +
                Reserva._id);
            callback(error, doc);
        }
    })
}


module.exports = objeto;