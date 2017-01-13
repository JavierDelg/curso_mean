$(document).ready(initializeEvents);

function initializeEvents() {
    $("#boton1").click(addHtmlForm);
    $("#boton2").click(alertHtmlForm);
    $("#boton3").css("display", "none");
    $("#boton3").click(removeHtmlForm);
}

function addHtmlForm() {
    $("#formulario").html('<form action="#">Ingrese nombre:<input type="text" name="nombre"/><br/>Contrase&ntilde;a:&nbsp;<input type="password" name="pass"/><br/><input type="submit" value="enviar"/></form>');
    $("#boton3").css("display", "block");
}

function alertHtmlForm() {
    alert($("#formulario").html());
}

function removeHtmlForm() {
    $("#formulario").html("");
    // $("div").remove();
}