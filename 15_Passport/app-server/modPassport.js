var passport = require("passport");
var passport_http = require("passport-http").BasicStrategy;
var autenticado = false;

function iniciarModulo(app, urlLogin) {
    passport.use(new passport_http(callbackAutorizar));
    app.use(module.exports.addHeaders);
    app.get(urlLogin, autenticar(),
        (request, response) => {
            console.log("Acceso permitido");
            response.send("Acceso concedido");
        });

    return module.exports;
}

function addHeaders(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.header.origin);
    res.header("Access-Control-Allow-Headers", "Authorization");
    next();
}

function autenticar() {
    return passport.authenticate("basic", { session: false });
}

passport.use(new passport_http(callbackAutorizar));

function callbackAutorizar(name, password, done) {
    console.log("Username: " + name + ", Password: " + password);
    if (name == "Javi" && password == "123456a") {
        autenticado = true;
        done(null, true);
        console.log(autenticado);
    } else {
        done(null, false);
    }
}



module.exports = iniciarModulo;
module.exports.addHeaders = addHeaders;
module.exports.autenticado = autenticado;