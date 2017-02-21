/* Clase persona*/
class Persona{
    nombre: string;
    apellido1: string;
    apellido2: string;

    constructor(nombre: string, ap1: string, ap2:string){
        this.nombre = nombre;
        this.apellido1 = ap1;
        this.apellido2= ap2;
    }

    stringify():string{
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    }
}

let persona = new Persona("Nombre", "ap1", "ap2");
let persona2 = new Persona("Nombre2", "ap1-2", "ap2-2");
console.log(persona.stringify());

/* Clase Ciudadano que hereda de Persona */
class Ciudadano extends Persona{
    identidad: string;
    constructor(nombre: string = null, ap1: string= null, ap2:string= null, identidad:string){
        super(nombre, ap1, ap2);
        this.identidad= identidad;
    }

    stringify():string{
        return  super.stringify() + this.identidad
    }
    
}

let ciudadano = new Ciudadano("Nombre", "ap1", "" ,"a");
let ciudadano2: Ciudadano = new Ciudadano("Nombre", "ap1", "" ,"a");
let ciudadano3: Persona = new Ciudadano("Nombre", "ap1", "" ,"a");
console.log(ciudadano.stringify());