var http = require("http");
var url = require("url");
var fs = require("fs");
var clientes = JSON.parse(fs.readFileSync("clientes.json").toString());

var server = http.createServer(
    (request, response) => {
        var miUrl = url.parse(request.url);
        console.log("URL: ", miUrl.path);

        response.writeHead(200, { "content-type": "application/json" });

        if (/\/clientes\/[0-9]/.test(request.url)) {
            var numero = parseInt(request.url.split("/")[2]);

            response.end(JSON.stringify(clientes[numero]) + "\nPedidos: " + JSON.stringify(clientes[numero]));
        } else if (/\/clientes/.test(request.url)) {
            response.end(JSON.stringify(clientes));
        } else {
            response.end(JSON.stringify({ "mensaje": "URL no valida" }));
        }
    }
);
server.listen(8888);
console.log("Servidor iniciado");