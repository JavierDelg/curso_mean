"use strict";
/*
let fs = require("fs");
let streamLectura = fs.createReadStream("PFRO.log");

let data = "";

streamLectura.on("data", cuandoLee);
streamLectura.on("end", cuandoAcaba);

function cuandoLee(chunk) {
    console.log("Longuitud del buffer: " + chunk.length);
    data += chunk;

}

function cuandoAcaba() {
    console.log(data);
}*/

let fs2 = require("fs");
let streamLectura2 = fs2.createReadStream("fichero.txt");
let data2 = "";
let buffer;

streamLectura2.on("readable", alCrearseStreamLectura);

function alCrearseStreamLectura() {
    while ((buffer = streamLectura2.read()) != null) {
        data2 += buffer;
    }
}

streamLectura2.on("end", function() {
    console.log(data2);
});