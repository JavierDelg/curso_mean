var miExpress = require("express");

// Instanciar
var app = miExpress();
var url = "/reservas/[0-9]{8}-[A-Za-z]{1}";

app.get(url, (request, response) => {
    var dni = request.originalUrl.split("/")[2];
    response.send("Visto: " + request.originalUrl + " Verbo: " + request.method + " Dni: " + dni);
    console.log("Visto.");
});


app.listen(9000);

console.log("Servidor Express lanzado");