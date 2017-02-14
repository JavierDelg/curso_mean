var miExpress = require("express");

var fs = require("fs");
// Instanciar
var app = miExpress();

var clientes = [
    { "nombre": "Pepito", "pedidos": 12 },
    { "nombre": "Juanito", "pedidos": 23 },
    { "nombre": "Felipito", "pedidos": 34 },
    { "nombre": "otro", "pedidos": 45 }
]
app.get("/reservas/:idCliente", [getClientes, clientesFichero]);

function getClientes(request, response, next) {
    var idCliente = request.params.idCliente;
    response.send(JSON.stringify(clientes[parseInt(idCliente)]));
    next();
}

function clientesFichero(request, response, next) {
    response.send("Ahora genero un fichero de tipo : " +
        request.params.extension);
    var fichero = request.params.fichero + "." + request.params.extension;
    var f = JSON.stringify(clientes[parseInt(request.params.fichero)])
    fs.writeFile(fichero, f);
    console.log("fichero " + fichero + " creado" + response);
}



app.listen(9000);

console.log("Servidor Express lanzado");