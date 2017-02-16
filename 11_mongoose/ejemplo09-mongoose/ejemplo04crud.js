var mongoose = require("mongoose");
mongoose.connect("localhost:27017/bd_libros")
var Libro = require("./ejemplo05model")

function getLibros(limit, skip) {
    var Libros = [];
    Libro.find().limit(limit).exec((libro) => {
        Libros.push(libro);
    });
    return Libros;
}

function getLibroById(_id) {
    Libro.findById(_id, (error, libro) => {
        console.log("Libro: " + libro.titulo);
    })
}

function saveLibro(libro) {
    new Libro({ clave: "valor" });
    libro.save((error) => {
        //TODO: 
    })
}

function updateLibro(libro) {
    //TODO
    getLibroById(libro._id)
    libro.categoria = "terror";
    saveLibro(libro);
}

function deleteLibro(_id) {
    Libro.findByIdAndRemove(_id, () => {

    })
}

getLibroById(1);
//deleteLibro("1")