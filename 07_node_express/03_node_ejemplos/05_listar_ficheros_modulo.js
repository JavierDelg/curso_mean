let fs = require("fs");
let path = require("path");
var eventos = require("events");
var EmisorEventos = eventos.EventEmitter

var miEmisor = new EmisorEventos();
/*miEmisor.on("onError", callbackOnError);
miEmisor.on("onSuccess", callbackOnSuccess);*/

//Con eventos
module.exports = function funPrincipal(directorio, extension, callback) {
    fs.readdir(directorio, (error, ficheros) => {
        if (error) {
            miEmisor.emit("onError", error)
        } else {
            ficheros = ficheros.filter((fichero) => {
                return path.extname(fichero) === extension;
            });
            miEmisor.emit("onSuccess", ficheros);
        }

    });
}


module.exports.on = function(nombreEvento, funcCallback) {
    miEmisor.on(nombreEvento, funcCallback);
}

/*
module.exports = function funPrincipal(directorio, extension, callback) {
    fs.readdir(directorio, (error, ficheros) => {
        var resultado = {
            "error": null,
            "ficheros": null
        };
        if (error) {
            resultado.error = error;
        } else {
            ficheros = ficheros.filter((fichero) => {
                return path.extname(fichero) === extension;
            });
            resultado.ficheros = ficheros;
        }
        callback(resultado);
    });
}
*/