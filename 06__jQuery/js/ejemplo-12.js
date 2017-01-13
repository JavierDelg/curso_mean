$(document).ready(initializeEvents);

function initializeEvents() {
    $("#descripcion").children().click(hideBox);
    $("#boton2").click(showBox);
}

function hideBox() {
    $(this).hide("slow");
}

function showBox() {
    $("#descripcion").children().show("fast");
}