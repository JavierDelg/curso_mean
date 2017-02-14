var miExpress = require("express");

// Instanciar
var app = miExpress();

app.get("/reservas/:idCliente?/facturas/:idFactura", (request, response) => {
    var idCliente = request.params.idCliente;
    var idFactura = request.params.idFactura;

    response.send("Visto: " + request.originalUrl + "\nReserva pedida de : " + idCliente + "\nFactura numero: " + idFactura);
});

app.listen(9000);

console.log("Servidor Express lanzado");