'use strict';

app.controller('SignUpDetails', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.refreshAddresses = function(address) {
        var params = {address: address, sensor: false};
        return $http.get(
          'http://maps.googleapis.com/maps/api/geocode/json',
          {params: params}
        ).then(function(response) {
          $scope.ubicaciones = response.data.results;
        });
    };
    $scope.TipoJornadas = [ { descripcion : "Completa"}, { descripcion : "Mañana"} , { descripcion : "Tarde"}];
    
    $scope.Jornadas = [
        { descripcion: 'Completa',  codigo: 'CP' },
        { descripcion: 'Mañana',    codigo: 'MA'},
        { descripcion: 'Tarde',     codigo: 'TA'},
        { descripcion: 'Noche',     codigo: 'NO'}
        ];

    $scope.tipoJorna = {};
    $scope.ubicacion = {};
}]);