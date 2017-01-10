/*var padreCalcRectangulo = document.getElementById("padre-Calc-Rectangulo");
var padreCalcTriangulo = document.getElementById("padre-Calc-Triangulo");
var padreCalcElipse = document.getElementById("padre-Calc-Elipse");
var padreCalcHuevo = document.getElementById("padre-Calc-Huevo");

var vistaRectangulo = new FiguraVista(padreCalcRectangulo, "Rectangulo");
var vistaRectangulo2 = new FiguraVistaV2(padreCalcRectangulo, "Rectangulo");

var vistaElipse = new FiguraVista(padreCalcElipse, "Elipse");
var vistaElipse2 = new FiguraVistaV2(padreCalcElipse, "Elipse");

var controlRectangulo = new FiguraControlador(vistaRectangulo, Modelo.Rectangulo);
var controlRectangulo2 = new FiguraControlador(vistaRectangulo2, Modelo.Rectangulo);

var controlElipse = new FiguraControlador(vistaElipse, Modelo.Elipse);
var controlElipse2 = new FiguraControlador(vistaElipse2, Modelo.Elipse);


*/
var miFactory = new FigurasFactory();

var cRectangulo = new miFactory.crearControlFigura({
    tipoFigura: "rectangulo",
    idPadreDom: "padre-Calc-Rectangulo",
    tipoVista: "v1"
});

var cElipse = new miFactory.crearControlFigura({
    tipoFigura: "elipse",
    idPadreDom: "padre-Calc-Elipse",
    tipoVista: "v1"
});
var cTriangulo = new miFactory.crearControlFigura({
    tipoFigura: "trianguloEquilatero",
    idPadreDom: "padre-Calc-Triangulo",
    tipoVista: "v2"
});
var cHuevo = new miFactory.crearControlFigura({
    tipoFigura: "huevo",
    idPadreDom: "padre-Calc-Huevo",
    tipoVista: "v2"
});