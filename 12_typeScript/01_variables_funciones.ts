let variable: number;
variable = 1;
let bool: boolean;
bool = true;
let cadena: string;
cadena= "cadena";
console.log(cadena);
let miUnion: number | string;
miUnion = "cadena";
miUnion = 12;
interface Tiempo{
    dia:number,
    mes:number,
    anio: number
}

var miCumple : Tiempo ={dia: 6, mes: 9, anio: 1995 }
console.log("Cumpleaños " + miCumple.dia + " " + miCumple.mes);
let variableAny : any;
variableAny= 12;
variableAny= "una cadena";

function concatenar(texto1: string, texto2){
    let resultado : string = texto1 + texto2;
    return resultado;
}

function cumplirAnios(a:Tiempo){
    a.anio += 1;
    return a;
}
console.log(cumplirAnios(miCumple));
console.log(concatenar("cadena", "cadena2"));

function recibeEnumerado(param: "cadena 1" | "cadena 2" | "cadena 3"){
    console.log(param);
}

recibeEnumerado("cadena 3");