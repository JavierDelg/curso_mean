var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Geometria = (function () {
    function Geometria(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    return Geometria;
}());
var Triangulo = (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Triangulo.prototype.calcularArea = function () {
        return (this.base * this.altura) / 2;
    };
    return Triangulo;
}(Geometria));
var Rectangulo = (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}(Geometria));
var rect = new Rectangulo(10, 15);
var trian = new Triangulo(7, 14);
console.log(rect.calcularArea());
console.log(trian.calcularArea());
