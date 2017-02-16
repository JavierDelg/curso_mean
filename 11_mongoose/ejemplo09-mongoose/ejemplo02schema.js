var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bd_libros");
// http://mongoosejs.com/docs/guide.html
// definicion del esquema
var Schema = mongoose.Schema;

var ReservasSchema = new Schema({
    customer_id: {
        type: String,
        required: [true, '{PATH} es obligatorio']
    },
    room_id: {
        type: Number,
        required: [true, '{PATH} es obligatorio'],
        min: [100, 'Las habitaciones empiezan en {MIN}'],
        max: [999, 'Las habitaciones acaban en {MAX}']
    },
    check_date: {
        type: Date,
        required: [true, '{PATH} es obligatorio'],
        validate: {
            validator: (fecha) => {
                return fecha.getTime() >= (Date.now() - 24 * 60 * 60 * 1000) //Si le quito un dia puede reservar para hoy
            }
        }
    },
    isDouble: {
        type: Boolean,
        required: [true, '{PATH} es obligatorio']
    }
});


//LibroSchema.add({ estado: String });
//ReservasSchema.add({ estado: String });

//var Libro = mongoose.model("Libro", LibroSchema);

var Reserva = mongoose.model("Booking", ReservasSchema);


var reserva1 = new Reserva({
    customer_id: "Customer_1",
    room_id: 101,
    check_date: Date.now(),
    isDouble: true

});
// Guardo:
reserva1.save((error) => {
        if (error) {
            console.error("Error al guardar: ", error);
        } else {
            console.log("Salvado con id: " + reserva1._id);
            Reserva.find((error, data) => {
                console.log(data);
            });
        }
    })
    /*
    lotr.save((error) => {
            if (error) {
                console.error("Error al guardar: ", error);
            } else {
                console.log("Salvado con id: " + lotr._id);
                Libro.find((error, data) => {
                    console.log(data);
                });
            }
        })
        // Listo:
    Libro.find((error, data) => {
        console.log(data);
    });*/