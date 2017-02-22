function invertir<T> (elementos: T[]): T[] {
    let invertido: T[] = [];
    for(let posicion = 0, posicionInvertido = elementos.length -1 ; 
        posicion < elementos.length;
        posicion++,posicionInvertido-- ){
        invertido[posicionInvertido] = elementos[posicion];
    }
    return invertido;
}
let arrayOriginal = ["clientes","clientes2"];
let textosInvertidos :string[] = invertir<string>(["clientes","clientes2"]);

console.log("Original: " + arrayOriginal + " textosInvertidos:" + textosInvertidos);

let arrayOriginal2 = [3333333,22222222];
let textosInvertidos2 :number[] = invertir<number>([3333333,22222222]);

console.log("Original: " + arrayOriginal2 + " textosInvertidos:" + textosInvertidos2);

// class Silla2 <T>{
//     private nombre:T;
//     constructor(nombre:T){
//         this.nombre=nombre;
//     }
//     toString(){
//         return this.nombre;
//     }
// }

// let silla= new Silla<string>("Silla 1");
// let silla2= new Silla<number>(123);
// console.log(silla.toString());
// console.log(silla2.toString());

let hijosDePadreInvertidos :HijoDePadre[] = invertir<HijoDePadre>([hijoDePadre,hijoDePadre2]);

abstract class DAOGenerico <T> {
    abstract add(objeto :T);
    abstract del(objeto :T);
    stringify(objeto :T){
        return objeto+"";    
    }
}
class ArrayGenericDAO<T> extends DAOGenerico<T>{
    private almacen :T[] = [];
    add(objeto: T){
        this.almacen.push(objeto);
    }
    del(objeto: T){
        // recorrer, buscar y eliminar! (Terminator)
    }
    list():T[] {
        return this.almacen;
    }
}

var dao: DAOGenerico<Persona> = null;
dao.add(new Persona("","",""));
