var variable;
variable = 1;
var bool;
bool = true;
var cadena;
cadena = "cadena";
console.log(cadena);
var miUnion;
miUnion = "cadena";
miUnion = 12;
var miCumple = { dia: 6, mes: 9, anio: 1995 };
console.log("Cumpleaños " + miCumple.dia + " " + miCumple.mes);
var variableAny;
variableAny = 12;
variableAny = "una cadena";
function concatenar(texto1, texto2) {
    var resultado = texto1 + texto2;
    return resultado;
}
function cumplirAnios(a) {
    a.anio += 1;
    return a;
}
console.log(cumplirAnios(miCumple));
console.log(concatenar("cadena", "cadena2"));
function recibeEnumerado(param) {
    console.log(param);
}
recibeEnumerado();
