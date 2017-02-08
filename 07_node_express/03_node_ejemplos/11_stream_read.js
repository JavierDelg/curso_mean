"use strict";

let fs = require("fs");
let streamLectura = fs.createReadStream("fichero.txt");
let streamEscritura = fs.createWriteStream("fich2_write.txt");

streamLectura.setEncoding("utf8");
streamLectura.on("data", alLeerDelStream);

function alLeerDelStream(chunkBuffer) {
    streamEscritura.write(chunkBuffer.toString());
}