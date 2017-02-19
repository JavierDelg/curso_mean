var express = require("express");
var modelo = require("../../model/modelo");
var router = express.Router();

router.get("/all", function(req, res, next) {

    var a = modelo.acceder("leerReservas", (datosLeidos) => {
        res.render('reservas', { reservas: JSON.stringify(datosLeidos) })
    });
    console.log(a);
    // res.render('reservas', { reservas: a })

});

module.exports = router;