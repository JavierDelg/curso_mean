function calculadora(){
			this.crearCalculadora();
			this.operando1= this.input1;
			this.operando2= this.input2;
			this.resultado = document.calculadora.resultado;
		}

	calculadora.prototype.crearCalculadora = function(){
			var body= document.getElementsByTagName("body")[0];

			var formCalc = document.createElement("form");
			body.appendChild(formCalc);
			formCalc.setAttribute("name", "calculadora");

			var texto = document.createTextNode("operando1");
			formCalc.appendChild(texto);
			this.input1 = document.createElement("input");
			formCalc.appendChild(this.input1);
			this.input1.setAttribute("type", "text");
			this.input1.setAttribute("name", "operando1");
			this.input1.setAttribute("value", "0");

			formCalc.appendChild(document.createElement("br"));

			var texto = document.createTextNode("operando2");
			formCalc.appendChild(texto);

			this.input2 = document.createElement("input");
			formCalc.appendChild(this.input2);
			this.input2.setAttribute("type", "text");
			this.input2.setAttribute("name", "operando2");
			this.input2.setAttribute("value", "0");

			formCalc.appendChild(document.createElement("br"));

			var suma = document.createElement("input");
			formCalc.appendChild(suma);
			suma.setAttribute("type", "button");
			suma.setAttribute("value", "+");
			suma.setAttribute("name", "suma");
			//suma.setAttribute("onclick", "calculadora1.calcula('+')");
			suma.addEventListener("click", function(){calculadora1.calcula('+')});

			var resta = document.createElement("input");
			formCalc.appendChild(resta);
			resta.setAttribute("type", "button");
			resta.setAttribute("value", "-");
			resta.setAttribute("name", "resta");
			//resta.setAttribute("onclick", "this.calcula('-')");
			resta.addEventListener("click", function(){calculadora1.calcula('-')});

			var mult = document.createElement("input");
			formCalc.appendChild(mult);
			mult.setAttribute("type", "button");
			mult.setAttribute("value", "*");
			mult.setAttribute("name", "multi");
			//mult.setAttribute("onclick", "this.calcula('*')");
			mult.addEventListener("click", function(){calculadora1.calcula('*')});

			var divi = document.createElement("input");
			formCalc.appendChild(divi);
			divi.setAttribute("type", "button");
			divi.setAttribute("value", "/");
			divi.setAttribute("name", "divi");
			//divi.setAttribute("onclick", "this.calcula('/')");
			divi.addEventListener("click", function(){calculadora1.calcula('/')});

			formCalc.appendChild(document.createElement("br"));

			var result = document.createElement("input");
			formCalc.appendChild(result);
			result.setAttribute("type", "text");
			result.setAttribute("value", "0");
			result.setAttribute("name", "resultado");
		}

	calculadora.prototype.suma = function(){
			var resultado;
			var num1= parseInt(this.operando1.value)
			var num2 = parseInt(this.operando2.value);
			resultado = num1 + num2 ;	
			this.resultado.value=resultado;
		}

	calculadora.prototype.resta = function(){
			var resultado;
			var num1= parseInt(this.operando1.value)
			var num2 = parseInt(this.operando2.value);
			resultado= num1 - num2;
			this.resultado.value=resultado;
		}

	calculadora.prototype.multiplicacion = function(){
			var resultado;
			var num1= parseInt(this.operando1.value)
			var num2 = parseInt(this.operando2.value);
			resultado= num1 * num2;
			this.resultado.value=resultado;
		}

	calculadora.prototype.division = function(){
			var resultado;
			var num1= parseInt(this.operando1.value)
			var num2 = parseInt(this.operando2.value);
			resultado=num1/num2;
			this.resultado.value=resultado;
		}

	calculadora.prototype.calcula = function (operacion){
			switch(operacion){
				case "+":
					this.suma();
				break;
				case "-":
					this.resta();
				break;
				case "*":
					this.multiplicacion();
				break;
				case "/":
					this.division();
				break;
				default:
				break;
			}
		}

		var calculadora1 = new calculadora();