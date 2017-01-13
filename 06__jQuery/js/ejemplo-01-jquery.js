$(document).ready(inicializaEventosConJQuery);

function presionarBotonConJquery() {
    alert("Botón pulsado ");
}

function inicializaEventosConJQuery() {
    $("[type=button]").click(presionarBotonConJquery);

}