// carga del modulo
var mongoose = require("mongoose");
// conectar a la base de datos
var fs = require("fs");
mongoose.connect("mongodb://localhost/bd_libros");
// Genero el modelo
var Libro = mongoose.model("Libro", {
    titulo: String,
    autor: String,
    paginas: Number,
    personajes: [],
    imagen: Buffer
});
// http://mongoosejs.com/docs/schematypes.html

var portada = fs.readFileSync("error.png");
var esdla = new Libro({
    titulo: "El señor de los arillos ",
    autor: "JJ T",
    paginas: 1999,
    personajes: ["Frodo", "Sam", "Legolas", "Gandalf", "Aragorn"],
    imagen: portada
});


esdla.save((error) => {
    if (error) {
        console.error("Error al guardar: ", error)
    } else {
        console.log("Pelicula guardada " + esdla._id)
    }
});