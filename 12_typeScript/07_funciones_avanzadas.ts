let funcionAnonimaClasica = function(uno, dos){
    return uno + dos;
}
console.log(funcionAnonimaClasica(4,6));

let funcionLambda = (uno: number, dos:number)=>{
    return uno + dos;
}
console.log(funcionLambda(4,6));

const PI = 3.1415927;

let {variable1, variable2} = {variable1: "valor 1", variable2: "valor 2"};
console.log(variable1);

function dameLosCamposPorConsola(campo1: string, campo2: number, ...elRestoDeCampos){
    console.log(campo1);
    console.log(campo1);
    console.log(elRestoDeCampos);
    for(let pos of elRestoDeCampos){
       // console.log("El campo en la pos " + pos + "\n\t es " + elRestoDeCampos[pos]);
        console.log("El campo en la pos " + pos + "\n\t es " + pos);
    }
}

dameLosCamposPorConsola("cadena", 1, true, "cadena2", 111);