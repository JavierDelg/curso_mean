$(document).ready(initializeEvents);

function initializeEvents() {
    $("#parrafos p").each(markBySize);
    $("p[class!='menor']").contextmenu(function() {
        event.preventDefault();
        alert($(this).html());
    })
}

function markBySize() {
    if ($(this).text().length < 100) {
        $(this).css("background-color", "#ff0");
        $(this).attr("class", "menor");
    }
}