"use strict";
let miModuloDeFiltrado = require("./05_listar_ficheros_modulo.js");

if (process.argv.length < 4) {
    console.log("USO: node 05_listar_ficheros.js [DIRECTORIO] [EXTENSION]");
}

let directorio = process.argv[2];
let extension = process.argv[3];
/*
function devolucionficheros(error, ficheros) {
    if (error) {
        console.error("Error al listar: " + error);
    } else {
        ficheros.forEach((fichero) => {
            console.log("Fichero " + fichero);
        });
    }
}*/

function devolucionficheros(ficheros) {
    ficheros.forEach((fichero) => {
        console.log("Fichero " + fichero);
    });
}

//miModuloDeFiltrado(directorio, extension, devolucionficheros)
miModuloDeFiltrado(directorio, extension)
miModuloDeFiltrado.on("onSuccess", devolucionficheros)