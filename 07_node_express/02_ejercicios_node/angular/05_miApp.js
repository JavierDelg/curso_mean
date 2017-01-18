function miControlador($scope, $rootScope) {
    $scope.misClientes = [
        { nombre: 'Fran', ciudad: 'Vietnam/Cadiz' },
        { nombre: 'Sergio', ciudad: 'Madrid' },
        { nombre: 'Angel', ciudad: 'Madrid' },
        { nombre: 'Julio', ciudad: 'Madrid' },
        { nombre: 'Pedro', ciudad: 'Madrid' }
    ];
    $scope.addCliente = function() {
        $scope.misClientes.push({ nombre: $scope.nombreCliente, ciudad: $scope.ciudadCliente })
    }
    $rootScope.varGlobal = "Adasdasdsda";
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