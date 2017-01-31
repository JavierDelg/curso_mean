"use strict";
let fs = require('fs');
let i = 2;
//for (let i = 2; i < process.argv.length; i++) {
//let fichero = process.argv[i];
fs.readFile(process.argv[i], mifuncionAsincrona.bind(process.argv[i]));
//}

function mifuncionAsincrona(error, contenido) {
    if (error) {
        console.error("Error al ejecutar la funcion asincrona", error);
    } else {
        let c = contenido.toString();
        let a = c.split("\n");
        console.log("Fichero:  " + this + "\nNum lineas:\n " + a.length);
    }
    i++;
    if (i < process.argv.length) {
        fs.readFile(process.argv[i], mifuncionAsincrona.bind(process.argv[i]));
    }
}