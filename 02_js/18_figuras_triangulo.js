var Triangulo = function (elemento){
	this.elementoPadre=elemento;
	this.base=this.addInput("Base ", "base");
	this.altura=this.addInput("Altura ", "altura");
	this.addButton("Calcula Area Triangulo", this.calcularAreaT);
	this.resultado2= this.addInput("Resultado","resultado2");
}	

	Triangulo.prototype.addInput = function(texto, nombre){
		var texto = document.createTextNode(texto);
		this.elementoPadre.appendChild(texto);
		var nuevoInput = document.createElement("input");
		this.elementoPadre.appendChild(nuevoInput);
		this.elementoPadre.appendChild(document.createElement("br"));
		nuevoInput.name = nombre;
		nuevoInput.value = "0";
		return nuevoInput;
	}	

	Triangulo.prototype.addButton = function(valor,operacion){
		var nuevoInput = document.createElement("input");
		this.elementoPadre.appendChild(nuevoInput);
		nuevoInput.value = valor;
		nuevoInput.setAttribute("type", "button");
		nuevoInput.addEventListener("click", operacion.bind(this));
		return nuevoInput;
	}
	Triangulo.prototype.calcularAreaT = function(){
		var r;
		r= (parseInt(this.base.value)*parseInt(this.altura.value))/2;
		this.resultado2.value = r;
	}



