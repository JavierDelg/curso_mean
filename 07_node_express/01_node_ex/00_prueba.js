var miExpress = require("express");

// Instanciar
var app = miExpress();

app.route('/book')
    .get(function(req, res) {
        res.render(__dirname + "/publico/index.jade");
    })
    .post(function(req, res) {
        res.send('Add a book');
    })
    .put(function(req, res) {
        res.send('Update the book');
    });

app.listen(9000);

console.log("Servidor Express lanzado");