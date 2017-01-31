let fs = require("fs");

let fichero = process.argv[2];
let contenido = fs.readFileSync(fichero);

if (typeof localStorage == "undefined" || localStorage == null) {
    var LocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new LocalStorage("./local");
}


console.log("-----------------Contenido del fichero--------------------:\n" + contenido.toString() +
    "\n----------------Contenido anterior fichero-----------------:\n" + localStorage.getItem("1"));
localStorage.setItem("1", contenido.toString());
let c = contenido.toString();
let a = c.split("\n");
console.log(a.length);