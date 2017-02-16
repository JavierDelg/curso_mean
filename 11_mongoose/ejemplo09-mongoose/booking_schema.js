var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SchemaBooking = new Schema({
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

module.exports = mongoose.model("Reserva", SchemaBooking);