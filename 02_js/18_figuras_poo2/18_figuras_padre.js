var Figura = function(padreDom, nombreFig) {

    if (typeof padreDom == "undefined") {
        return;
    }
    // Añadimos el FORM al padreDom
    this.formCalc = document.createElement("form");
    padreDom.appendChild(this.formCalc);
    // Y los botones
    this.alto = CreadorDOM.addInput(this.formCalc, "alto", "alto");
    this.ancho = CreadorDOM.addInput(this.formCalc, "ancho", "ancho");
    this.resultado = CreadorDOM.addInput(this.formCalc, "Resultado", "resultado");
    // El botón de calcular
    CreadorDOM.addButton(this, " Calcular Área " + nombreFig, this.calculaArea);
    // Y la caja con el resultado
}

// Metodo compartido por todos los objetos que hereden de Figura
Figura.prototype.metodoComp = function(a) {
    alert("Metodo Comppartido: " + a)
}

// Metodo para hacer la herencia donde le pasamos el nombre de una funcion callback y el nombre de la figura
Figura.Heredar = function(funCalcularArea, nombre) {
    var nombreFig = nombre;
    var funcionConstructura = function(padreDom) {
        Figura.call(this, padreDom, nombreFig);
    }
    funcionConstructura.prototype = new Figura();
    funcionConstructura.prototype.calculaArea = funCalcularArea;
    return funcionConstructura;

}