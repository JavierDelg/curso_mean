$(document).ready(initializeEvents);

function initializeEvents() {
    $("#boton1").click(addElementClass);
    $("#boton2").click(removeElementClass);
    $("#boton3").click(addRemoveClass);
}

function addElementClass() {
    $("#descripcion").addClass("recuadro");
}

function removeElementClass() {
    $("#descripcion").removeClass("recuadro");
}

function addRemoveClass() {
    $("#descripcion").toggleClass("recuadro");
}