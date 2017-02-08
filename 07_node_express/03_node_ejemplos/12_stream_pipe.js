"use strict";
/*
let fs = require("fs");
let streamLectura = fs.createReadStream("fichero.txt");
let streamEscritura = fs.createWriteStream("fich_write.txt");

streamLectura.setEncoding("utf8");
streamLectura.pipe(streamEscritura);*/

let fs2 = require("fs");
let zlip = require("zlib");

fs2.createReadStream("PFRO.log.gz").pipe(zlip.createGunzip()).pipe(fs2.createWriteStream("fich_salida.txt"));