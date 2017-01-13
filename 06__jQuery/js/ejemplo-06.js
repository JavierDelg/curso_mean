var misEstilos = {
    "border": "1px solid black",
    "box-shadow": "10px 10px 5px 0px rgba(0, 0, 0, 0.75)"

}
var misEstilos2 = {
    "border": "",
    "box-shadow": ""

}

$(document).ready(initializeEvents);

function initializeEvents() {
    /* $("a").mouseover(inMouseEvent);
     $("a").mouseout(outMouseEvent);*/
    $("a").hover(inMouseEvent, outMouseEvent);
}

function inMouseEvent() {
    $(this).css(misEstilos);
}

function outMouseEvent() {
    $(this).css(misEstilos2);
}