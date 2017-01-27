var jumboHeight = $('.jumbotron').outerHeight();

function parallax() {
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight - scrolled) + 'px');
}

$(window).scroll(function(e) {
    parallax();
});

$(document).ready(inicializarFecha);

function inicializarFecha() {

    var inputFecha = document.getElementById("fechaIni");
    var hoy = new Date(),
        d = hoy.getDate(),
        m = hoy.getMonth() + 1,
        y = hoy.getFullYear(),
        data;
    if (d < 10) {
        d = "0" + d;
    };
    if (m < 10) {
        m = "0" + m;
    };

    data = y + "-" + m + "-" + d;
    console.log(data);
    inputFecha.value = data;
}