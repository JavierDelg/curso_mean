"use strict";
let moduloLeerLineas = require("./04_async_modulo.js");

for (var i = 2; i < process.argv.length; i++) {
    let fichero = process.argv[i];
    moduloLeerLineas.saberLineas(fichero, miFuncionCuandoLeefichero.bind(fichero));
}

function miFuncionCuandoLeefichero(error, lineas) {
    if (error) {
        console.log("Error lectura" + error);
    } else {
        console.log("Fichero: " + this + "\nlineas: " + lineas);
    }
}