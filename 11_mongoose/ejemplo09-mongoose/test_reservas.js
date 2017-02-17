var mocha = require("mocha");
var mongoose = require("mongoose");
var Reserva = require("./booking_schema");
var booking = require("./booking")
var assert = require("assert");


describe("Prueba1", function() {
    it("save reservas", function(done) {
        let reserva1 = {
            customer_id: "Customer_103",
            room_id: 103,
            check_date: Date.now(),
            isDouble: true
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
        booking.getAll();
    })
})