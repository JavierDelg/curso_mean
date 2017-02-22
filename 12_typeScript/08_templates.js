function invertir(elementos) {
    var invertido = [];
    for (var posicion = 0, posicionInvertido = elementos.length - 1; posicion < elementos.length; posicion++, posicionInvertido--) {
        invertido[posicionInvertido] = elementos[posicion];
    }
    return invertido;
}
var arrayOriginal = ["clientes", "clientes2"];
var textosInvertidos = invertir(["clientes", "clientes2"]);
console.log("Original: " + arrayOriginal + " textosInvertidos:" + textosInvertidos);
var arrayOriginal2 = [3333333, 22222222];
var textosInvertidos2 = invertir([3333333, 22222222]);
console.log("Original: " + arrayOriginal2 + " textosInvertidos:" + textosInvertidos2);
var Silla = (function () {
    function Silla(nombre) {
        this.nombre = nombre;
    }
    Silla.prototype.toString = function () {
        return this.nombre;
    };
    return Silla;
}());
var silla = new Silla("Silla 1");
var silla2 = new Silla(123);
console.log(silla.toString());
console.log(silla2.toString());
// let hijosDePadreInvertidos :HijoDePadre[] = invertir<HijoDePadre>([hijoDePadre,hijoDePadre2]);
// abstract class DAOGenerico <T> {
//     abstract add(objeto :T);
//     abstract del(objeto :T);
//     stringify(objeto :T){
//         return objeto+"";    
//     }
// }
// class ArrayGenericDAO <T>{
//     private almacen :T[] = [];
//     add(objeto: T){
//         this.almacen.push(objeto);
//     }
//     del(objeto: T){
//         // recorrer, buscar y eliminar! (Terminator)
//     }
//     list():T[] {
//         return this.almacen;
//     }
// }
// var dao: DAOGenerico<Persona> = null;
// dao.add(new Persona("","",""));
