var express = require("express");
var reservas = require("./../model/booking");
var router = express.Router();

router.get("/all", function(req, res, next) {

    reservas.getAll(function(error, reservas) {
        for (var i = 0; i < reservas.length; i++) {
            console.log("-/-/-/-/-/-/-RESERVAS-/-/-/-/-/-");
            console.log(reservas[i]);
            res.render('reservas', { reservas: reservas });
        }
        res.render('reservas', { reservas: reservas });
    });
});

router.get("/:Customerid", function(req, res, next) {

    reservas.getReserva(req.params.Customerid, function(error, reservas) {
        res.render('reservas', { reservas: reservas });
    });
});


module.exports = router;