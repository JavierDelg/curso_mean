var Figura = function(padreDom, nombreFigura, CallbackAlAcabar) {

    if (typeof padreDom == "undefined")
        return;
    // Añadimos el FORM al padreDom
    this.formCalc = document.createElement("form");
    padreDom.appendChild(this.formCalc);
    // Y los botones
    this.alto = CreadorDOM.addInput(this.formCalc, "alto", "alto",
        Figura.ANCHO_POR_DEFECTO);
    this.ancho = CreadorDOM.addInput(this.formCalc, "ancho", "ancho");
    this.resultado = CreadorDOM.addInput(this.formCalc, "Resultado", "resultado");
    // El botón de calcular
    CreadorDOM.addButton(this, " Calcular Área " + nombreFigura, this.calculaArea);
    CallbackAlAcabar(nombreFigura);
}
Figura.prototype.metodoCompartido = function(loquesea) {
    alert("METODO COMPARTIDO " + loquesea);
}
Figura.ANCHO_POR_DEFECTO = 10;
Figura.ALOO_POR_DEFECTO = 10;


Figura.Heredar = function(funCalculaArea, nombre, unCallback) {
    var nombreFun = nombre;
    var unFunCB = unCallback
    var funcionConstructora = function(padreDom) {
        Figura.call(this, padreDom, nombreFun, unFunCB); // super
    }
    funcionConstructora.prototype = new Figura();
    funcionConstructora.prototype.calculaArea = funCalculaArea;

    return funcionConstructora;
}