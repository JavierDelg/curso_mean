
class Silla {
    private nombre:string;
    constructor(nombre:string){
        this.nombre=nombre;
    }
    toString(){
        return this.nombre;
    }
}


class Sofa {
    private nombre:string;
    constructor(nombre:string){
        this.nombre=nombre;
    }
    toString(){
        return this.nombre;
    }
}

abstract class DAOGenerico2 <T> {
    abstract add(objeto :T);
    abstract del(objeto :T);
    abstract list();
    abstract update(indice:number, objeto:T);
    stringify(objeto :T){
        return objeto+"";    
    }
}
class ArrayGenericDAO2<T> extends DAOGenerico2<T>{
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
    update(indice:number, objeto:T):string{
        this.almacen[indice]=objeto;
        return "Actualizado " + this.almacen[indice] + " = " + objeto; 
    }
}

var daoSilla: DAOGenerico2<Silla> = new ArrayGenericDAO2<Silla>();
var daoSofa: DAOGenerico2<Sofa> = new ArrayGenericDAO2<Sofa>();
daoSilla.add(new Silla("silla 1"));
daoSilla.add(new Silla("silla 2"));
daoSilla.add(new Silla("silla 3"));

daoSilla.update(1, new Silla("actualizado"));

daoSofa.add(new Sofa("sofa 1"));
daoSofa.add(new Sofa("sofa 2"));
daoSofa.add(new Sofa("sofa 3"));

console.log("DaoSilla: " + daoSilla.list() + " DaoSofa: " + daoSofa.list() );
