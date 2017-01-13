$(document).ready(initializeEvents);

function initializeEvents() {
    $("#parrafos p").each(markBySize);
    $("p[id!='menor']").contextmenu(function() {
        alert($(this).html());
    })
}

function markBySize() {
    if ($(this).text().length < 100) {
        $(this).css("background-color", "#ff0");
        $(this).attr("id", "menor");
    }
}