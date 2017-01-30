let fs = require('fs');

for (var i = 2; i < process.argv.length; i++) {
    let fichero = process.argv[i];

    fs.readFile(fichero, mifuncionAsincrona.bind(fichero));
}

function mifuncionAsincrona(error, contenido) {
    if (error) {
        console.error("Error al ejecutar la funcion asincrona", error);
    } else {
        let c = contenido.toString();
        let a = c.split("\n");
        console.log("Fichero:  " + this + "\nNum lineas:\n " + a.length);
    }
}