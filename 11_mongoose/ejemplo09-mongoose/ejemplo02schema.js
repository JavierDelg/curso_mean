var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bd_libros");
// http://mongoosejs.com/docs/guide.html
// definicion del esquema
var Schema = mongoose.Schema;
var LibroSchema = new Schema({
    titulo: String,
    autor: String,
    sinopsis: String,
    fecha: Date,
    categoria: String,
    campos_biblioteca: {
        ejemplares: Number,
        reservas: Number,
        ultima_reserva: Date
    }
})

var ReservasSchema = new Schema({
    _id: String,
    id_hotel: String,
    hotel_address: String,
    customer_id: String,
    first: String,
    last: String,
    checkin_date: Date,
    checkout_date: Date,
    season: String,
    occupancy: [{
        room_id: String,
        isDouble: Boolean,
        date: Date,
        price: Number
    }],
    booking_cost: Number
})
LibroSchema.add({ estado: String });
ReservasSchema.add({ estado: String });

var Libro = mongoose.model("Libro", LibroSchema);

var Reserva = mongoose.model("Reserva", ReservasSchema);

var lotr = new Libro({
    titulo: "Lord of the rings 2",
    // estado: "Algo",
    campos_biblioteca: {
        ultima_reserva: new Date()
    }
});

var reserva1 = new Reserva({
    _id: "20170215_customer3_" + Math.floor(Math.random() * 100),
    id_hotel: "1",
    hotel_address: "String",
    customer_id: "48158593B",
    first: "c",
    last: "d",
    checkin_date: new Date(),
    checkout_date: new Date(),
    season: "alta",
    occupancy: [{
        room_id: "101",
        isDouble: true,
        date: new Date(),
        price: 120
    }],
    booking_cost: 1000

});
// Guardo:
reserva1.save();
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
});