abstract class Geometria{
    base:number;
    altura:number;

    constructor(base:number , altura:number){
        this.base=base;
        this.altura= altura;
    }
    abstract calcularArea():number;
}

class Triangulo extends Geometria{
    calcularArea():number{
        return (this.base * this.altura) /2;
    }
}

class Rectangulo extends Geometria{
    calcularArea():number{
        return this.base * this.altura;
    }
}

let rect : Geometria = new Rectangulo(10,15);
let trian: Geometria = new Triangulo (7,14);

console.log(rect.calcularArea());
console.log(trian.calcularArea());