var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Silla = (function () {
    function Silla(nombre) {
        this.nombre = nombre;
    }
    Silla.prototype.toString = function () {
        return this.nombre;
    };
    return Silla;
}());
var Sofa = (function () {
    function Sofa(nombre) {
        this.nombre = nombre;
    }
    Sofa.prototype.toString = function () {
        return this.nombre;
    };
    return Sofa;
}());
var DAOGenerico2 = (function () {
    function DAOGenerico2() {
    }
    DAOGenerico2.prototype.stringify = function (objeto) {
        return objeto + "";
    };
    return DAOGenerico2;
}());
var ArrayGenericDAO2 = (function (_super) {
    __extends(ArrayGenericDAO2, _super);
    function ArrayGenericDAO2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.almacen = [];
        return _this;
    }
    ArrayGenericDAO2.prototype.add = function (objeto) {
        this.almacen.push(objeto);
    };
    ArrayGenericDAO2.prototype.del = function (objeto) {
        // recorrer, buscar y eliminar! (Terminator)
    };
    ArrayGenericDAO2.prototype.list = function () {
        return this.almacen;
    };
    ArrayGenericDAO2.prototype.update = function (indice, objeto) {
        this.almacen[indice] = objeto;
        return "Actualizado " + this.almacen[indice] + " = " + objeto;
    };
    return ArrayGenericDAO2;
}(DAOGenerico2));
var daoSilla = new ArrayGenericDAO2();
var daoSofa = new ArrayGenericDAO2();
daoSilla.add(new Silla("silla 1"));
daoSilla.add(new Silla("silla 2"));
daoSilla.add(new Silla("silla 3"));
daoSilla.update(1, new Silla("actualizado"));
daoSofa.add(new Sofa("sofa 1"));
daoSofa.add(new Sofa("sofa 2"));
daoSofa.add(new Sofa("sofa 3"));
console.log("DaoSilla: " + daoSilla.list() + " DaoSofa: " + daoSofa.list());
