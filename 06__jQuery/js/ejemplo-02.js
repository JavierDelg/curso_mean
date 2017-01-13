$(document).ready(inicializarEventos);

function inicializarEventos() {
    $("h1").click(presionTitulo);

}

function presionTitulo(event) {
    let mi_titulo = event.target;
    let $mi_titulo = $(mi_titulo);

    if (mi_titulo.id == "titulo1") {
        alert("1")
        $mi_titulo.css("color", "#ff0000");
        $mi_titulo.css("background-color", "#ffff00");
        $mi_titulo.css("font-family", "Courier");
    } else {
        alert("2")
        $mi_titulo.css("color", "#ffff00");
        $mi_titulo.css("background-color", "#ff0000");
        $mi_titulo.css("font-family", "Arial");
    }
}
