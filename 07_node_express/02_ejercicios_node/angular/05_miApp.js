function miControlador() {
    var mC = this;

    mC.misClientes = [
        { nombre: 'Fran', ciudad: 'Vietnam/Cadiz' },
        { nombre: 'Sergio', ciudad: 'Madrid' },
        { nombre: 'Angel', ciudad: 'Madrid' },
        { nombre: 'Julio', ciudad: 'Madrid' },
        { nombre: 'Pedro', ciudad: 'Madrid' }
    ];
    mC.addCliente = function() {
            mC.misClientes.push({ nombre: mC.nombreCliente, ciudad: mC.ciudadCliente })
        }
        //$rootScope.varGlobal = "Adasdasdsda";
}

function miControladorAnimales($scope) {
    $scope.misAnimales = [
        { nombre: 'Tigre' },
        { nombre: 'Leopardo' },
        { nombre: 'Gacela' },
        { nombre: 'Guepardo' }

    ];
    $scope.nombreAnimal = "Animal";
}

var moduloApp = angular.module("miApp", []);
moduloApp.controller('miControlador', miControlador);
moduloApp.controller('miControladorAnimales', miControladorAnimales);