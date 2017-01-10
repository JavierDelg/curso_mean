var Modelo = {
    Rectangulo: {
        calcularDeVerdadArea: function(ancho, alto) { return ancho * alto; },
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 2 + ancho * 2; },
        calcularDeVerdadVolumen: function(ancho, alto, z) { return this.calcularDeVerdadArea(ancho, alto) * z; }
    },
    Elipse: {
        calcularDeVerdadArea: function(ancho, alto) {
            return (ancho / 2) * (alto / 2) * Math.PI;
        },
        calcularDeVerdadPerimetro: function(ancho, alto) {
            return Math.PI * 2 * Math.sqrt((alto * alto + ancho * ancho) / 2);
        },
        calcularDeVerdadVolumen: function(ancho, alto, z) {
            return this.calcularDeVerdadArea(ancho, alto) * z;
        }
    },
    calcularDeVerdadAreaTriangulo: function(ancho, alto) {
        return ancho * alto / 2;
    },

    calcularDeVerdadVolumenTriangulo: function(ancho, alto, z) {
        return (ancho * alto / 2) * z;
    },


    TrianguloEquilatero: {
        calcularDeVerdadArea: function(ancho, alto) { return Modelo.calcularDeVerdadAreaTriangulo(ancho, alto) },
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 3; },
        calcularDeVerdadVolumen: function(ancho, alto, z) { return Modelo.calcularDeVerdadVolumenTriangulo(ancho, alto, z); }
    },
    TrianguloIsosceles: {
        calcularDeVerdadArea: function(ancho, alto) { return Modelo.calcularDeVerdadAreaTriangulo(ancho, alto) },
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 2 + ancho; },
        calcularDeVerdadVolumen: function(ancho, alto, z) { Modelo.calcularDeVerdadVolumenTriangulo(ancho, alto, z); }
    },

    Cuadrado: {
        calcularDeVerdadArea: function(lado) { return Math.pow(lado, 2) },
        calcularDeVerdadPerimetro: function(lado) { return lado * 4 },
        calcularDeVerdadVolumen: function(lado) { return Math.pow(lado, 3) }
    }
};

/*
        function calcularDeVerdadAreaTriangulo(ancho, alto) {
            return ancho * alto / 2;
        }

        functioncalcularDeVerdadVolumenTriangulo(ancho, alto, z) {
            return (ancho * alto / 2) * z;
        }*/