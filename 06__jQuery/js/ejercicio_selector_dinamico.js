$(document).ready(initializeEvents);

function initializeEvents() {
    $("#selectorBoton").click(buscar);

}

function buscar() {
    var $select = $("#selector").val();
    $($select).css("background-color", "red");

}