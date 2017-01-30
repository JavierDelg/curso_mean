let fs = require("fs");
let path = require("path");
let contarFiche = require("./05_listar_modulo.js")

function funPrincipal(directorio, extension, callback) {
    fs.readdir(directorio, callback)

}