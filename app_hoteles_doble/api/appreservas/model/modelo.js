var ClienteMongo = require("mongodb").MongoClient;
var assert = require("assert");

var url = "mongodb://localhost:27017/bd_hotel";

var modelo = {
        acceder: function(accion, datos, miCallback) {
            ClienteMongo.connect(url, function(err, db) {
                assert.equal(null, err);
                console.log("Conexion a bbdd correcta");

                modelo.reservas[accion](db, datos, function(resultado) {
                    console.log("Cerrar bbdd...");

                    db.close();
                    return resultado;
                    if (typeof miCallback == "function") {
                        miCallback(resultado);
                    }
                })
            })
        },
        reservas: {
            insertarBase: function(db, datos, callback) {
                var coleccion = db.collection("reservas");
                coleccion.insert(datos,
                    function(err, documentos) {
                        assert.equal(err, null);
                        assert.equal(3, documentos.result.n);
                        assert.equal(3, documentos.ops.length);
                        console.log("Insertados reservas");
                        callback(documentos);
                    });
            },
            leerReservas: function(db, callback) {
                var coleccion = db.collection("reservas");

                return coleccion.find().toArray(function(err, docs) {
                    console.log(docs);
                    callback(docs);
                    // return docs;
                });

                //return datos;
            }
        }
    }
    /*
    modelo.acceder("insertarBase", [
        { cliente: "cliente 1", habitacion: 101 },
        { cliente: "cliente 2", habitacion: 102 },
        { cliente: "cliente 3", habitacion: 103 }

    ], (datosInsertados) => {
        console.log("Se han insertado datos");
    });*/
module.exports = modelo;