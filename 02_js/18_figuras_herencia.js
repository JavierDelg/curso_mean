 function Figura(elemento) {
     this.elementoPadre = elemento;

 }
 Rectangulo.prototype = new Figura;

 function Rectangulo(elemento) {
     Figura.call(this, elemento);
     this.ancho = this.addInput("Ancho ", "ancho");
     this.largo = this.addInput("Largo ", "largo");
     this.addButton("Calcula", this.calcularArea);
     this.resultado = this.addInput("Resultado", "resultado");
 }

 Rectangulo.prototype.addInput = function(texto, nombre) {
     var texto = document.createTextNode(texto);
     this.elementoPadre.appendChild(texto);
     var nuevoInput = document.createElement("input");
     this.elementoPadre.appendChild(nuevoInput);
     this.elementoPadre.appendChild(document.createElement("br"));
     nuevoInput.name = nombre;
     nuevoInput.value = "0";
     return nuevoInput;
 }

 Rectangulo.prototype.addButton = function(valor, operacion) {
     var nuevoInput = document.createElement("input");
     this.elementoPadre.appendChild(nuevoInput);
     nuevoInput.value = valor;
     nuevoInput.setAttribute("type", "button");
     nuevoInput.addEventListener("click", operacion.bind(this));
     return nuevoInput;
 }


 Rectangulo.prototype.calcularArea = function() {
     var r;
     r = parseInt(this.ancho.value) * parseInt(this.largo.value);
     this.resultado.value = r;
 }

 Triangulo.prototype = new Figura;

 function Triangulo(elemento) {
     Figura.call(this, elemento);
     this.elementoPadre = elemento;
     this.base = this.addInput("Base ", "base");
     this.altura = this.addInput("Altura ", "altura");
     this.addButton("Calcula Area Triangulo", this.calcularAreaT);
     this.resultado2 = this.addInput("Resultado", "resultado2");
 }

 Triangulo.prototype.addInput = function(texto, nombre) {
     var texto = document.createTextNode(texto);
     this.elementoPadre.appendChild(texto);
     var nuevoInput = document.createElement("input");
     this.elementoPadre.appendChild(nuevoInput);
     this.elementoPadre.appendChild(document.createElement("br"));
     nuevoInput.name = nombre;
     nuevoInput.value = "0";
     return nuevoInput;
 }

 Triangulo.prototype.addButton = function(valor, operacion) {
     var nuevoInput = document.createElement("input");
     this.elementoPadre.appendChild(nuevoInput);
     nuevoInput.value = valor;
     nuevoInput.setAttribute("type", "button");
     nuevoInput.addEventListener("click", operacion.bind(this));
     return nuevoInput;
 }
 Triangulo.prototype.calcularAreaT = function() {
     var r;
     r = (parseInt(this.base.value) * parseInt(this.altura.value)) / 2;
     this.resultado2.value = r;
 }