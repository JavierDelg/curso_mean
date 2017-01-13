$(document).ready(initializeEvents);

function initializeEvents() {
    $("#boton1").click(hideBox);

}

function hideBox() {
    var len = $("#descripcion").children().length;
    for (var i = 0; i < len / 2; i++) {
        $($("#descripcion").children()[i]).toggle("slow");
    }
    for (var j = len; j > len - (len / 2); j--) {
        $($("#descripcion").children()[j]).toggle("fast");
    }


}