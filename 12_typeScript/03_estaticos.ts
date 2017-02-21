/* Clase persona*/
class Persona2{
    nombre: string;
    apellido1: string;
    apellido2: string;
    static totalPersonas: number=0;
    static lastPerson: Persona2;

    constructor(nombre: string, ap1: string, ap2:string){
        this.nombre = nombre;
        this.apellido1 = ap1;
        this.apellido2= ap2;
        Persona2.totalPersonas ++;
        Persona2.lastPerson = this;
    }
    stringify():string{
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    }
}

let persona_otro = new Persona2("Nombre", "ap1", "ap2");
let persona_otro2 = new Persona2("Nombre", "ap1", "ap2");
let persona_otro3 = new Persona2("Nombre", "ap1", "ap2");
let persona_otro4 = new Persona2("LastNombre", "Lastap", "Lastap2");
console.log(persona_otro);
console.log(persona_otro2);
console.log("Personas creadas:" + Persona2.totalPersonas);
console.log("Last persona: " + Persona2.lastPerson.stringify());

