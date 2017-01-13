$(document).ready(initializeEvents);

function initializeEvents() {
    $("#buscar").focus(clearValue);
    $("#buscar").focusout(function() {
        $("#buscar").attr("value", "Buscar ...");
    });
}

function clearValue() {
    $("#buscar").attr("value", "");
}