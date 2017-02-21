var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Padre = (function () {
    function Padre() {
        this.propPrivate = 0;
        this.propPublica = 0;
        this.propProtegida = 0;
    }
    Padre.prototype.getPropPrivate = function () {
        return this.propPrivate;
    };
    Padre.prototype.setPropPrivate = function (valor) {
        this.propPrivate = valor;
    };
    Padre.prototype.toString = function () {
        return this.propPublica + " " + this.propProtegida;
    };
    return Padre;
}());
var tuPadre = new Padre();
tuPadre.propPublica = 34;
var Hijo = (function (_super) {
    __extends(Hijo, _super);
    function Hijo(otroValor) {
        var _this = _super.call(this) || this;
        _this.propPublica = 55;
        _this.propProtegida = 77;
        return _this;
    }
    Hijo.prototype.toString = function () {
        return this.propPublica + " " + this.propProtegida + " aas";
    };
    return Hijo;
}(Padre));
var hijo = new Hijo(77);
console.log(hijo.toString());
var Nieto = (function (_super) {
    __extends(Nieto, _super);
    function Nieto(otroValor, valorNieto) {
        var _this = _super.call(this, otroValor) || this;
        _this.propNieto = valorNieto;
        return _this;
    }
    return Nieto;
}(Hijo));
