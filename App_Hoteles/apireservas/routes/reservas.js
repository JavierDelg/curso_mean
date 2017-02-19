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
    //console.log("-/-/-/-/-/-/-RESERVAS-/-/-/-/-/-");
    //  console.log(a);

    // res.render('reservas', { reservas: a[i] });

});


module.exports = router;