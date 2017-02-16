var mongoose = require("mongoose");
mongoose.connect("localhost:27017/bd_libros")
var Reserva = require("./booking_schema")

miReserva = new Reserva({
    customer_id: "Customer_1",
    room_id: 101,
    check_date: Date.now(),
    isDouble: true

});
/*
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
          })
}
else {
    console.log("Guardado libro con id: " +
        miLibroDeHistoria._id);
}
})*/
miReserva.save((error) => {
    if (error) {
        console.error("Pues no se ha guardado! ");
    } else {
        console.log("Guardado con id: " +
            miReserva._id);
    }
})