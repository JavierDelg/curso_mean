// Importamos mucho
var miExpress = require("express");

// Instanciar 
var app = miExpress();

// Generamos las rutas
app.get("/", peticionPrincipal);
app.get("/expresiones", peticionExpresiones);
app.get("/directivas", peticionDirectivas);
app.get("/filtros", peticionFiltros);
app.get("/ordenamiento", peticionOrdenamiento);
app.get("/controlador", peticionControlador);

function peticionPrincipal(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/angular/index.html");
}

function peticionExpresiones(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/angular/01_NG1_expresiones.html");
}

function peticionDirectivas(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/angular/02_NG1_directivas.html");
}

function peticionFiltros(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/angular/03_NG1_filtros.html");
}

function peticionOrdenamiento(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/angular/04_NG1_ordenamiento.html");
}

function peticionControlador(peticion, respuesta) {
    respuesta.sendfile(__dirname + "/angular/05_NG1_controlador.html");
}

app.listen(9000);

console.log("Servidor lanzado");