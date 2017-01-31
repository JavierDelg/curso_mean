"use strict";
let fs = require("fs");
let fichero = process.argv[2];
let contenido = fs.readFileSync(fichero);
console.log("Contenido del fichero:\n" + contenido.toString());
let c = contenido.toString();
let a = c.split("\n");
console.log(a.length);