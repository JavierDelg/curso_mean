let fs = require('fs');

module.exports.saberLineas = function(fichero, callback) {
    fs.readFile(fichero, mifuncionAsincrona.bind(callback));
}

function mifuncionAsincrona(error, contenido) {
    if (error) {
        this(error);
    } else {
        let c = contenido.toString();
        let a = c.split("\n");
        this(null, a.length);
    }
}