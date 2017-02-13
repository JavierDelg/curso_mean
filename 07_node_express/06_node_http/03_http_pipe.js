var http = require("http");
var bl = require("bl");
var fs = require("fs");

let streamEscritura = fs.createWriteStream("google.html");

http.get("http://www.google.es", (res) => {
    res.pipe(streamEscritura);
});
/*
http.get("http://www.google.es", (res) => {
    res.pipe(
        bl((error, datos) => {
            if (error) {
                return console.error("Error al procesar la peticion", error);
            } else {
                let datosStr = datos.toString();
                console.log("Num de caracteres: " + datosStr.length);
                console.log("Datos:\n" + datosStr);
            }
        })
    ).;
});*/