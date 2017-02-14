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
app.get("/reservas/:idCliente", (request, response) => {
    var idCliente = request.params.idCliente;
    response.send(JSON.stringify(clientes[parseInt(idCliente)]));
});
app.route('/book')
    .get(function(req, res) {
        res.send('Get a random book');
    })
    .post(function(req, res) {
        res.send('Add a book');
    })
    .put(function(req, res) {
        res.send('Update the book');
    });


app.get("/save/:fichero.:extension", (request, response) => {
    response.send("Ahora genero un fichero de tipo : " +
        request.params.extension);
    var fichero = request.params.fichero + "." + request.params.extension;
    var f = JSON.stringify(clientes[parseInt(request.params.fichero)])
    fs.writeFile(fichero, f);
    console.log("fichero " + fichero + " creado" + response);
});

app.listen(9000);

console.log("Servidor Express lanzado");