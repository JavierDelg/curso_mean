"use strict";

var eventos = require("events");
var EmisorEventos = eventos.EventEmitter

var miEmisor = new EmisorEventos();
miEmisor.on("miEvento", funcionCallback);

function funcionCallback(misDatos) {
    console.log("misDatos: " + misDatos.propiedad1 + ", " + misDatos.propiedad2)
}

let contador = 0;

function aCadaIntervalo() {
    miEmisor.emit("miEvento", {
        propiedad1: new Date(),
        propiedad2: contador
    });
    contador++;
}

setInterval(aCadaIntervalo, 1000);