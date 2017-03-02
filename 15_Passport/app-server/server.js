var express = require("express");
var app = express();
var modPassport = require("./modPassport")(app, "/login");

app.get("/admin",
    (request, response) => {
        if (modPassport.autenticado) {
            console.log("Admin");
            response.send("Admin")
        } else {
            console.log("No puedes pasaaar");
            response.send("No puedes pasaaar");
        }
    });


console.log("Servidor arrancado ...");

app.listen(8080);