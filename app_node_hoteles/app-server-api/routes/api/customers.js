var express = require('express');
var router = express.Router();
var model = require("../../model/customer.model");

/* GET users listing. */
router.get('/name/:name', function(req, res, next) {
    let name = req.params.name;
    if (name == null) {
        res.statusCode = 404;
        res.send("No encontrado");
    } else {

        var fnCallback = function(error, customer) {
            if (error) {
                console.log("No se ha leido de la BBDD");
            } else {
                res.json(customer);
            }
        }

        model.leer({ "name": name }, fnCallback);
    }

});

/* POST metodo */
router.post("/", function(req, res) {
    let jsonCustomer = req.body;
    let customer = jsonCustomer;
    model.grabar(customer, function(error, customer) {
        if (error) {
            console.log("No se ha grabado de la BBDD");
        } else {
            res.json(customer);
        }
    });
})

module.exports = router;