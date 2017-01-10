function FigurasFactory() {}

FigurasFactory.prototype.vistaFigura = FiguraVista;
FigurasFactory.prototype.figuraModelo = Modelo.Rectangulo;

FigurasFactory.prototype.crearControlFigura = function(options) {
    switch (options.tipoVista) {
        case "v1":
            this.vistaFigura = FiguraVista;
            break;
        case "v2":
            this.vistaFigura = FiguraVistaV2;
            break;
    }
    var padreDom = document.getElementById(options.idPadreDom);
    var nuevaVista = new this.vistaFigura(padreDom, options.tipoFigura);

    switch (options.tipoFigura) {
        case "rectangulo":
            this.figuraModelo = Modelo.Rectangulo;
            break;
        case "elipse":
            this.figuraModelo = Modelo.Elipse;
            break;
        case "trianguloEquilatero":
            this.figuraModelo = Modelo.TrianguloEquilatero;
            break;
        case "trianguloIsosceles":
            this.figuraModelo = Modelo.TrianguloIsosceles;
            break;
        case "huevo":
            this.figuraModelo = Modelo.Huevo;
            break;


            TrianguloIsosceles
    }
    return new FiguraControlador(nuevaVista, this.figuraModelo);
}