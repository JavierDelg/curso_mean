var http = require("http");
var url = require("url");

var server = http.createServer(
    (request, response) => {
        var miUrl = url.parse(request.url);
        console.log("URL: ", miUrl.path)
        response.writeHead(200, { "content-type": "text/html" });
        if (miUrl.path == "/node") {
            response.end("<html> <head > </head> <body> <h1> Node</h1> </body> </html>");
        } else if (/\/clientes\/[0-9]/.test(miUrl.path)) {
            var urlsplit = miUrl.path.split("/");
            response.end("<html> <head > </head> <body> <h1>" + " nombre: " + urlsplit[1] + " num: " +
                urlsplit[2] + "</h1></body> </html > ");
        }

    }
);
server.listen(8888);
console.log("Servidor iniciado");