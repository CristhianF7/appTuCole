'use strict';

app.controller('SignUpDetails', ['$scope', '$http', '$state', '$stateParams', function($scope, $http, $state, $stateParams) {
    $scope.InformacionColegio = {};
    $scope.InformacionColegio.ubicacion = {};
    $scope.InformacionColegio.tipoInstitucion = {};
    $scope.InformacionColegio.tipoJornada = {};
    
    $scope.Jornadas = [
        { descripcion: 'Completa',  codigo: 'CP' },
        { descripcion: 'Mañana',    codigo: 'MA'},
        { descripcion: 'Tarde',     codigo: 'TA'},
        { descripcion: 'Noche',     codigo: 'NO'}
        ];
    
    $scope.TiposInstitucion = [
        { descripcion: 'Publico',  codigo: 'PU' },
        { descripcion: 'Privado',    codigo: 'PR'},
        { descripcion: 'Educación especial',     codigo: 'EE'},
        ];
    
    $scope.planes = [
        { descripcion : "Básico", rangoEstudiantes : "0 - 1000", precioMensual : "150 mil",
            precioSemestral : "800.000", precioAnual : "1'400.000", clase : "block panel padder-v bg-primary item" },
        { descripcion : "Normal", rangoEstudiantes : "1000 - 3000", precioMensual : "600 mil",
            precioSemestral : "3'500.000", precioAnual : "6'500.000", clase : "block panel padder-v bg-info item" },
        { descripcion : "Avanzado", rangoEstudiantes : "3000 - 5000", precioMensual : "1'200 mil",
            precioSemestral : "6'500.000", precioAnual : "12'000.000", clase : "block panel padder-v bg-dark item" },
        { descripcion : "Premium", rangoEstudiantes : "5000 - 10000", precioMensual : "2'250 mil",
            precioSemestral : "12'500.000", precioAnual : "22'000.000", clase : "block panel padder-v bg-success item" }
    ]
    
    $scope.BuscarDireccion = function(direccion) {
        var params = {address: direccion, sensor: false};
        return $http.get(
          'http://maps.googleapis.com/maps/api/geocode/json',
          {params: params}
        ).then(function(response) {
          $scope.ubicaciones = response.data.results;
        });
    };
    
    $scope.TerminarRegistro = function (plan)
    {
        var parametros = {
                            nombreColegio: $scope.InformacionColegio.nombreColegio,
                            username: $stateParams.info.usuario, 
                            emailUsuario: $stateParams.info.email, 
                            password: $stateParams.info.pass,
                            emailColegio: $stateParams.info.email,
                            estadoColegio: 1,
                            tipoColegio: 1,                            
                            telefonoColegio: $scope.InformacionColegio.telefono,
                            sedePpal: $scope.InformacionColegio.sedePrincipal
            }
        
        $http({
            method: 'POST',
            url: 'http://apps.tucompualdia.net/APIcole/app_desarrollo.php/api/registro',
            data: JSON.stringify(parametros)
        }).then(function (respuesta) {
            var res = respuesta;
            alert(respuesta);
        }, function (error) {
            alert(error);
        });
    }
    
    $scope.TerminarRegistroPrueba = function (plan)
    {
        
    }
}]);