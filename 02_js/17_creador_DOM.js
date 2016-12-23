var CreadorDom = function (padreDom) {
		this.elementoPadre= padreDom;
		this.addInput("CajaUno: ", "cajaUno");
		this.addInput("CajaDos: ", "cajaDos");
		this.addButton("Enviar","");
	}

CreadorDom.prototype.addInput = function(texto, nombre) {		
	var texto = document.createTextNode(texto);
	this.elementoPadre.appendChild(texto);
	var nuevoInput = document.createElement("input");
	this.elementoPadre.appendChild(nuevoInput);
	this.elementoPadre.appendChild(document.createElement("br"));
	nuevoInput.name = nombre;
	nuevoInput.value = "0";
	nuevoInput.setAttribute("size", "12");
	return nuevoInput;
}
CreadorDom.prototype.addButton = function(valor, operacion) {		
	var nuevoInput = document.createElement("input");
	this.elementoPadre.appendChild(nuevoInput);
	nuevoInput.value = valor;
	nuevoInput.setAttribute("type", "button");
	//nuevoInput.addEventListener("click", operacion.bind(this));
	return nuevoInput;
}
