// Importamos mucho
var miExpress = require("express");

// Instanciar 
var app = miExpress();

// Generamos las rutas
app.get("/", peticionPrincipal);
app.get("/about", peticionAbout);

function peticionPrincipal(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/publico/index.html");
}

function peticionAbout(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/publico/about.html");
}
app.listen(9000);

console.log("Servidor lanzado");