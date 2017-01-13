$(document).ready(initializeEvents);

function initializeEvents() {
    $("#boton1").click(hideBox);
    $("#boton2").click(showBox);
}

function hideBox() {
    $("#descripcion").children().each(function(i, n) {
        if (i % 2 == 0) {
            var $a = $(n);
            $a.fadeOut("fast");
        }

    });
}

function showBox() {
    $("#descripcion").children().fadeIn("slow");
}