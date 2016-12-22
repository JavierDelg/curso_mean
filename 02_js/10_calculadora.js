function calculadora(op1, op2){
			this.operando1= op1;
			this.operando2= op2;
			this.resultado = document.calculadora.resultado;
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

		var calculadora1 = new calculadora(document.calculadora.operando1, document.calculadora.operando2)	