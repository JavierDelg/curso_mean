$(document).ready(initializeEvents);

function initializeEvents() {
    $("td").mousedown(downEvent);
    $("td").mouseup(upEvent);
}


function downEvent() {
    $(this).css("background-color", "#ff0");
    var elemt = $(this);
    a = setTimeout(
        function() {
            elemt.trigger('mouseup', upEvent);
            alert("Necesitas mas tiempo");
            console.log("2 sec");

        }, 2000);

}

function upEvent() {
    $(this).css("background-color", "#fff");
    clearTimeout(a);
    console.log("Limpio")
}