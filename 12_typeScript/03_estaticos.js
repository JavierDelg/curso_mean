/* Clase persona*/
var Persona2 = (function () {
    function Persona2(nombre, ap1, ap2) {
        this.nombre = nombre;
        this.apellido1 = ap1;
        this.apellido2 = ap2;
        Persona2.totalPersonas++;
        Persona2.lastPerson = this;
    }
    Persona2.prototype.stringify = function () {
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    };
    return Persona2;
}());
Persona2.totalPersonas = 0;
var persona_otro = new Persona2("Nombre", "ap1", "ap2");
var persona_otro2 = new Persona2("Nombre", "ap1", "ap2");
var persona_otro3 = new Persona2("Nombre", "ap1", "ap2");
var persona_otro4 = new Persona2("LastNombre", "Lastap", "Lastap2");
console.log(persona_otro);
console.log(persona_otro2);
console.log("Personas creadas:" + Persona2.totalPersonas);
console.log("Last persona: " + Persona2.lastPerson.stringify());
