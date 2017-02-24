var mongoose = require("mongoose");

var Schemas = require("./schema");



function grabar(customer, cb) {
    let customer1 = new Schemas.CustomerModel(customer);
    customer1.save((error, customer2) => {
        if (error) {
            console.error("Error al guardar");
        } else {
            console.log("Cliente guardado");
        }
        if (typeof cb != "undefined") {
            cb(error, customer2);
        }
    })
}

function leer(customer, cb) {
    let name = customer.name;
    Schemas.CustomerModel.find({ "name": name }, { "_v": 0 }, (error, customers) => {
        if (typeof cb != "undefined") {
            cb(error, customers);
        }
    })
}

module.exports.grabar = grabar;
module.exports.leer = leer;