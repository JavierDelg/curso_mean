var mocha = require("mocha");
var assert = require("assert");
var funcionSuma = require("./funcion");



describe("Prueba mocha", function() {
    describe("Sub bateria", function() {
        it("test 1", function() {
            assert.equal("Hola", "Hola".substring(0.4));
        })
        it("test 2", () => { assert.ok(3 == 3); })
        it("Probando funcion 1", function() {
            assert.ok(funcionSuma(5, 2) == 5 + 2);
        })
        it("Probando funcion 2", function() {
            assert.ok(funcionSuma(5, 3) == 5 + 2, "Ha ido mal");
        })
    })
})