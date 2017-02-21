var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* Clase persona*/
var Persona = (function () {
    function Persona(nombre, ap1, ap2) {
        this.nombre = nombre;
        this.apellido1 = ap1;
        this.apellido2 = ap2;
    }
    Persona.prototype.stringify = function () {
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    };
    return Persona;
}());
var persona = new Persona("Nombre", "ap1", "ap2");
var persona2 = new Persona("Nombre2", "ap1-2", "ap2-2");
console.log(persona.stringify());
/* Clase Ciudadano que hereda de Persona */
var Ciudadano = (function (_super) {
    __extends(Ciudadano, _super);
    function Ciudadano(nombre, ap1, ap2, identidad) {
        if (nombre === void 0) { nombre = null; }
        if (ap1 === void 0) { ap1 = null; }
        if (ap2 === void 0) { ap2 = null; }
        var _this = _super.call(this, nombre, ap1, ap2) || this;
        _this.identidad = identidad;
        return _this;
    }
    Ciudadano.prototype.stringify = function () {
        return _super.prototype.stringify.call(this) + this.identidad;
    };
    return Ciudadano;
}(Persona));
var ciudadano = new Ciudadano("Nombre", "ap1", "", "a");
var ciudadano2 = new Ciudadano("Nombre", "ap1", "", "a");
var ciudadano3 = new Ciudadano("Nombre", "ap1", "", "a");
console.log(ciudadano.stringify());
