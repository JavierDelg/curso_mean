var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bd_hotel");

var Schema = mongoose.Schema;
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
    services: [{
        service_id: String,
        date: Date,
        desc: Number,
        price: Number,
        quantity: Number,
    }],
    booking_cost: Number,
    services_cost: Number
})