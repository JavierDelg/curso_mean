var funcionAnonimaClasica = function (uno, dos) {
    return uno + dos;
};
console.log(funcionAnonimaClasica(4, 6));
var funcionLambda = function (uno, dos) {
    return uno + dos;
};
console.log(funcionLambda(4, 6));
var PI = 3.1415927;
var _a = { variable1: "valor 1", variable2: "valor 2" }, variable1 = _a.variable1, variable2 = _a.variable2;
console.log(variable1);
function dameLosCamposPorConsola(campo1, campo2) {
    var elRestoDeCampos = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        elRestoDeCampos[_i - 2] = arguments[_i];
    }
    console.log(campo1);
    console.log(campo1);
    console.log(elRestoDeCampos);
    for (var _a = 0, elRestoDeCampos_1 = elRestoDeCampos; _a < elRestoDeCampos_1.length; _a++) {
        var pos = elRestoDeCampos_1[_a];
        // console.log("El campo en la pos " + pos + "\n\t es " + elRestoDeCampos[pos]);
        console.log("El campo en la pos " + pos + "\n\t es " + pos);
    }
}
dameLosCamposPorConsola("cadena", 1, true, "cadena2", 111);
