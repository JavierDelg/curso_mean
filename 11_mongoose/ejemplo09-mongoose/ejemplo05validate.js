var mongoose = require("mongoose");
mongoose.connect("localhost:27017/bd_libros")
var Esquema = require("./ejemplo05model")

miLibroDeHistoria = new Esquema.Libros({
    _id: 2,
    titulo: "Mi libro de historia2",
    campos_biblioteca: {
        reservas: 1
    },
    categoria: "terror"
});

miReserva = new Esquema.Reservas({
    _id: "20170215_customer4_" + Math.floor(Math.random() * 100),
    id_hotel: "1",
    hotel_address: 12345,
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
miLibroDeHistoria.save((error) => {
    if (error) {

        console.error("Pues no se ha guardado el libro! ");
        /* Esquema.Libros.eachPath((campo) => {
             if (error.errors[campo]) {
                 console.error(error.errors[campo].message);
             }
         });
         /* lista_campos = ["titulo", "campos_biblioteca.reservas", "categoria"];
          lista_campos.forEach((campo) => {
              if (error.errors[campo]) {
                  console.error(error.errors[campo].message);
              }
          })*/
    } else {
        console.log("Guardado libro con id: " +
            miLibroDeHistoria._id);
    }
})
miReserva.save((error) => {
    if (error) {

        console.error("Pues no se ha guardado! " + error.errors["hotel_address"].message);

        /* lista_campos = ["titulo", "campos_biblioteca.reservas", "categoria"];
         lista_campos.forEach((campo) => {
             if (error.errors[campo]) {
                 console.error(error.errors[campo].message);
             }
         })*/
    } else {
        console.log("Guardado con id: " +
            miReserva._id);
    }
})