class Padre{
    private propPrivate: number = 0;
    public propPublica: number = 0;
    protected propProtegida: number = 0;
    
    getPropPrivate(){
        return this.propPrivate;
    }
    setPropPrivate(valor:number){
        this.propPrivate = valor;
    }
    toString(): string{
        return this.propPublica  + " " +  this.propProtegida; 
    } 
}

let tuPadre: Padre = new Padre();
tuPadre.propPublica= 34;

class Hijo extends Padre{
    constructor(otroValor: number){
        super();
        this.propPublica = 55;
        this.propProtegida = 77
    }
    toString(): string{
        return this.propPublica  + " " +  this.propProtegida + " aas" ; 
    }
}

let hijo: Padre = new Hijo(77);
console.log(hijo.toString());

class Nieto extends Hijo{
    protected propNieto: number;
    constructor(otroValor: number, valorNieto: number){
        super(otroValor);
        this.propNieto = valorNieto;    
    }
}

