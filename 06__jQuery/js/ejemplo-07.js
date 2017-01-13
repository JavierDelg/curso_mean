$(document).ready(initializeEvents);

function initializeEvents() {
    $(document).mousemove(moveDetected);
}

function moveDetected(event) {
    $("#coordx").text("Coordenada x=" + event.clientX);
    $("#coordy").text("Coordenada y=" + event.clientY);

    $("#cuadrado").css("margin-left", event.clientX);
    $("#cuadrado").css("margin-top", event.clientY);

}