$(document).ready(initializeEvents);

function initializeEvents() {
    $("#boton1").click(hideBox);
    $("#boton2").click(showBox);
}

function hideBox() {
    $("#descripcion").children().each(function(i, element) {
        if (i % 2 == 0) {
            var $elemt = $(element);
            //alert("indice " + i + " elemento " + $elemt.html());
            $elemt.fadeOut("fast");
        }
    });
}

function showBox() {
    $("#descripcion").children().fadeIn("slow");
}