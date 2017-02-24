var mongoose = require("mongoose");
mongoose.connect("localhost:27017/bd_hoteles")
var r = require("./booking_schema");
var Reserva = r.booking;
var objeto = {};
objeto.getAll = function(cb) {
    Reserva.find({}).exec((error, reserva) => {
        cb(error, reserva);
    });

}
objeto.getReserva = function(customer_id, cb) {
    Reserva.find({
        "customer_id": customer_id
    }).exec((error, reserva) => {
        cb(error, reserva);
    });
}

objeto.getReservaByDate = function(fecha1, fecha2, callback) {
    Reserva.find({
        "check_date": { $gte: new Date(fecha1), $lte: new Date(fecha2) }
    }).exec((error, reserva) => {
        callback(error, reserva);
    });
}

objeto.saveReserva = function(reserva, callback) {
    Reserva = new Reserva(reserva)
    Reserva.save((error, dato) => {
        if (error) {
            console.error("Pues no se ha guardado la reserva! ");
        } else {
            console.log("Guardada reserva con id: " +
                Reserva._id);
            
        }
        if(typeof callback != "undefined"){
        	callback(error, dato);
        }
    })
}


module.exports = objeto;