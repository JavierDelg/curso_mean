$(document).ready(inicializarEventos);

function inicializarEventos() {
    $("#peticion_ajax").click(peticionAjaxGenerica);
}

function peticionAjaxGenerica() {
    var opcionesAjax = {
        data: {
            nombre: "Ruben",
            nivel: "medio"
        },
        type: "GET",
        dataType: "json",
        url: "https://jsonplaceholder.typicode.com/users"

    };
    $.ajax(opcionesAjax).done(peticionCompletada).fail(peticionFallida);
}

function peticionCompletada(data, status, jqXHR) {
    alert("Peticion completada. Estado: " + status + " : " + data);
    $("#contenido_de_ajax").html(data[0].username);
}

function peticionFallida(jqXHR, data, status) {
    alert("Error al procesar");
    console.log("Estado: " + status);
    console.log("Error! " + error);
}