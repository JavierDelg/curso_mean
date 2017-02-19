var mocha = require("mocha");
var mongoose = require("mongoose");
var Reserva = require("./../model/booking_schema");
var booking = require("./../model/booking")
var assert = require("assert");


describe("Prueba1", function() {
    it("save reservas", function(done) {
        let reserva1 = {
            customer_id: "Customer_104",
            room_id: 104,
            check_date: Date.now(),
            isDouble: false
        }
        booking.saveReserva(reserva1, function(error, doc) {
            console.log(doc);
            console.log("---------------------");
            if (error) {
                done(error);
            } else {
                assert(doc.customer_id == reserva1.customer_id, "Fallo!");
                done();
            }
        });
    })

    it("GetAll reservas", function() {
        booking.getAll(function(error, reservas) {
            for (var i = 0; i < reservas.length; i++) {
                console.log(reservas[i])
            }
        });
    })
})