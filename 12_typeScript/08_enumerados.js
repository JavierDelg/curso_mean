var TipoDeVia;
(function (TipoDeVia) {
    TipoDeVia[TipoDeVia["Calle"] = 7] = "Calle";
    TipoDeVia[TipoDeVia["Plaza"] = 3] = "Plaza";
    TipoDeVia[TipoDeVia["Camimo"] = 4] = "Camimo";
    TipoDeVia[TipoDeVia["Avenida"] = 5] = "Avenida";
})(TipoDeVia || (TipoDeVia = {}));
console.log("Calle " + TipoDeVia.Calle + "\n Avenida " + TipoDeVia.Avenida);
(function (TipoDeVia) {
    function esAvenida(texto) {
        if (texto == "Avda") {
            return TipoDeVia.Avenida;
        }
    }
    TipoDeVia.esAvenida = esAvenida;
})(TipoDeVia || (TipoDeVia = {}));
var miTipoVia = TipoDeVia.Calle;
console.log("Tipo de via: " + miTipoVia);
console.log("Tipo de via: " + TipoDeVia[miTipoVia]);
var avenida = TipoDeVia.esAvenida("Avda");
console.log("Tipo de via: " + avenida);
