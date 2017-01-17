$(document).ready(inicializarEventos);

function inicializarEventos() {
    $("#peticion_ajax").click(function() {
        cargarJson($("#ajax").val());
    });
}

function cargarJson(cadena) {
    $.ajax({
        method: "POST",
        dataType: "json",
        url: cadena
    }).done(ajaxCompletado);

}

function ajaxCompletado(data, status, jqXHR) {
    console.log("Datos: " + data + " Estado: " + status);
    $("#contenido_de_ajax").html("Data: " + data);
}