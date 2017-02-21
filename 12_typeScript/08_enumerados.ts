enum TipoDeVia{
    Calle = 7,
    Plaza = 3,
    Camimo,
    Avenida
}

console.log("Calle " + TipoDeVia.Calle +"\n Avenida " + TipoDeVia.Avenida);

namespace TipoDeVia{
   export function esAvenida(texto:string):TipoDeVia{
        if(texto == "Avda"){
            return TipoDeVia.Avenida;
        }
    }
}

var miTipoVia: TipoDeVia = TipoDeVia.Calle;
console.log("Tipo de via: " + miTipoVia);
console.log("Tipo de via: " + TipoDeVia[miTipoVia]);

var avenida = TipoDeVia.esAvenida("Avda");
console.log("Tipo de via: " + avenida);