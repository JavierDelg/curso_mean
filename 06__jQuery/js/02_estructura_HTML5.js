$(document).ready(arranqueDocumento);

function arranqueDocumento() {
    // $("#relleno").html();
    // $("h1:contains('Titulo ')").css("color", "blue")
    var $headers = $("header");
    var $verde = $(".verde");
    //$headers.not($verde).css("color", "blue");
    $headers.filter($verde).css("color", "blue");
}