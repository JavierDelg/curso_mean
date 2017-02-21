var Triangulo2 = (function () {
    function Triangulo2(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Triangulo2.prototype.calcularArea = function () {
        return (this.base * this.altura) / 2;
    };
    return Triangulo2;
}());
var Rectangulo2 = (function () {
    function Rectangulo2(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo2.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo2;
}());
var Rectan = new Rectangulo2(10, 15);
var triang = new Triangulo2(7, 14);
console.log(Rectan.calcularArea());
console.log(triang.calcularArea());
