var Modelo = {
    notificarCambio: function(escuchadores, figura, propiedad, valorAntiguo, valorNuevo) {
        for (var i = 0; i < escuchadores.length; i++) {
            escuchadores[i].notificar(figura, propiedad, valorAntiguo, valorNuevo);
        }
    },
    Rectangulo: {
        area: 0,
        perimetro: 0,
        volumen: 0,
        escuchadores: [],
        calcularDeVerdadArea: function(ancho, alto) {
            var areaNueva = ancho * alto;
            Modelo.notificarCambio(this.escuchadores, "rectangulo", "area", this.area, areaNueva);
            this.area = areaNueva;
        },
        calcularDeVerdadPerimetro: function(ancho, alto) {
            var perimetroNuevo = alto * 2 + ancho * 2;
            Modelo.notificarCambio(this.escuchadores, "rectangulo", "perimetro", this.perimetro, perimetroNuevo);
            this.perimetro = perimetroNuevo;
        },
        calcularDeVerdadVolumen: function(ancho, alto, profundidad) {
            var volumenNuevo = ancho * alto * profundidad;
            Modelo.notificarCambio(this.escuchadores, "rectangulo", "volumen", this.volumen, volumenNuevo);
            this.volumen = volumenNuevo;
        },
        registrar: function(controlador) {
            this.escuchadores.push(controlador);
        }
    },
    Elipse: {
        area: 0,
        perimetro: 0,
        volumen: 0,
        escuchadores: [],
        calcularDeVerdadArea: function(ancho, alto) {
            var areaNueva = (ancho / 2) * (alto / 2) * Math.PI
            Modelo.notificarCambio(this.escuchadores, "elipse", "area", this.area, areaNueva);
            this.area = areaNueva;
        },
        calcularDeVerdadPerimetro: function(ancho, alto) {
            var perimetroNuevo = Math.PI * 2 * Math.sqrt((alto * alto + ancho * ancho) / 2);
            Modelo.notificarCambio(this.escuchadores, "elipse", "perimetro", this.perimetro, perimetroNuevo);
        },
        calcularDeVerdadVolumen: function(ancho, alto, profundidad) {
            return this.calcularDeVerdadArea(ancho, alto) * profundidad;
        },
        registrar: function(controlador) {
            this.escuchadores.push(controlador);
        }
    },
    calcularDeVerdadAreaTriangulo: function(ancho, alto) {
        return ancho * alto / 2;
    },
    TrianguloEquilatero: {
        area: 0,
        perimetro: 0,
        volumen: 0,
        escuchadores: [],
        calcularDeVerdadArea: function(ancho, alto) {
            return Modelo.calcularDeVerdadAreaTriangulo(ancho, alto);
        },
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 3; },
        calcularDeVerdadVolumen: function(ancho, alto, profundidad) {
            return this.calcularDeVerdadArea(ancho, alto) * profundidad;
        }
    },
    TrianguloIsosceles: {
        area: 0,
        perimetro: 0,
        volumen: 0,
        escuchadores: [],
        calcularDeVerdadArea: function(ancho, alto) {
            return Modelo.calcularDeVerdadAreaTriangulo(ancho, alto);
        },
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 2 + ancho; },
        calcularDeVerdadVolumen: function(ancho, alto, profundidad) {
            return this.calcularDeVerdadArea(ancho, alto) * profundidad;
        }
    },
    Huevo: {
        area: 0,
        perimetro: 0,
        volumen: 0,
        escuchadores: [],
        calcularDeVerdadArea: function(ancho, alto) {
            return (ancho / 2) * (alto / 2) * 100;
        },
        calcularDeVerdadPerimetro: function(ancho, alto) {
            return Math.PI * 2 * Math.sqrt((alto * alto + ancho * ancho) / 2) * 100;
        },
        calcularDeVerdadVolumen: function(ancho, alto, profundidad) {
            return this.calcularDeVerdadArea(ancho, alto) * profundidad * 100;
        }
    },
};