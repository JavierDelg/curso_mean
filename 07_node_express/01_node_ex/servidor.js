// Importamos mucho
var miExpress = require("express");

// Instanciar 
var app = miExpress();

// Generamos la ruta 
app.get("/", peticionPrincipal);

function peticionPrincipal(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/publico/index.html");
}

app.get("/index", peticionPrincipal2);

function peticionPrincipal2(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/publico/index2.html");
}
app.listen(9000);

console.log("Servidor lanzado");