var Rectangulo = function (elemento){
	this.elementoPadre=elemento;
	this.ancho=this.addInput("Ancho ", "ancho");
	this.largo=this.addInput("Largo ", "largo");
	this.addButton("Calcula", this.calcularArea);
	this.resultado= this.addInput("Resultado","resultado");
}	

	Rectangulo.prototype.addInput = function(texto, nombre){
		var texto = document.createTextNode(texto);
		this.elementoPadre.appendChild(texto);
		var nuevoInput = document.createElement("input");
		this.elementoPadre.appendChild(nuevoInput);
		this.elementoPadre.appendChild(document.createElement("br"));
		nuevoInput.name = nombre;
		nuevoInput.value = "0";
		return nuevoInput;
	}	

	Rectangulo.prototype.addButton = function(valor,operacion){
		var nuevoInput = document.createElement("input");
		this.elementoPadre.appendChild(nuevoInput);
		nuevoInput.value = valor;
		nuevoInput.setAttribute("type", "button");
		nuevoInput.addEventListener("click", operacion.bind(this));
		return nuevoInput;
	}
	Rectangulo.prototype.calcularArea = function(){
		var r;
		r= parseInt(this.ancho.value)*parseInt(this.largo.value);
		this.resultado.value = r;
	}



