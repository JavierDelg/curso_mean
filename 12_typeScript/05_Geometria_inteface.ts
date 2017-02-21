interface Geometria2{
    base:number;
    altura:number;
    calcularArea():number;
}


class Triangulo2 implements Geometria2{
    base:number;
    altura:number;
    constructor(base:number , altura:number){
        this.base=base;
        this.altura= altura;
    }
    calcularArea():number{

        return (this.base * this.altura) /2;
    }
}

class Rectangulo2 implements Geometria2{
    base:number;
    altura:number;
    constructor(base:number , altura:number){
        this.base=base;
        this.altura= altura;
    }
    calcularArea():number{
        return this.base * this.altura;
    }
}

let Rectan : Rectangulo2 = new Rectangulo2(10,15);
let triang: Triangulo2 = new Triangulo2 (7,14);

console.log(Rectan.calcularArea());
console.log(triang.calcularArea());