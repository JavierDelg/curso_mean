var reservas = {
    getAll: function() {
        return "{Todas las reservas}"
    },
    getById: function(id) {
        return "reserva" + id;
    },

    post: function(reservas) {
        console.log("Reserva " + reservas.id)
    },

    delete: function(reserva) {
        console.log("Reserva" + reservas.id)
    }


}