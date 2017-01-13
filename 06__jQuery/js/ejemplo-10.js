$(document).ready(initializeEvents);

function initializeEvents() {
    var porcen = 30;
    for (var i = 0; i <= $(":input").length; i++) {
        $("#text" + i).focus(setfocus);
        $("#text" + i).css("color", "hsl(216, 100%," + porcen + "%)");
        porcen += 10;
        $("#text" + i).blur(initializeEvents);

    }

}

function setfocus() {
    $(this).css("color", "#f00");
}