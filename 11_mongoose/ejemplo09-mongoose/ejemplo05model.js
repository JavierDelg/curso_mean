var mongoose = require("mongoose");
// definicion del esquema
var Schema = mongoose.Schema;
var LibroSchema = new Schema({
    _id: Number,
    titulo: {
        type: String,
        required: [true, "requerido macho!"],
        validate: {
            validator: (valor) => {
                return /^[A-Z]/.test(valor);
            },
            message: "No empieza por mayusculas!"
        }

    },
    autor: String,
    sinopsis: String,
    fecha: Date,
    categoria: {
        type: String,
        enum: ["aventuras", "terror", "novela"],
        required: true
    },
    campos_biblioteca: {
        ejemplares: Number,
        reservas: {
            type: Number,
            min: [1, 'Al menos una reserva, no? tu valor {VALUE} no sirve']
        },
        ultima_reserva: Date
    }
})

var ReservasSchema = new Schema({
    _id: String,
    id_hotel: String,
    hotel_address: {
        type: String,
        required: [true, "Campo  hotel_address es requerido"]
    },
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
    booking_cost: Number,

})
module.exports = {
    Reservas: mongoose.model("Reservas", ReservasSchema),
    Libros: mongoose.model("Libros", LibroSchema)
}