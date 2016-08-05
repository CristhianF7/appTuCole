'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', 'LoginService', function($scope, $http, $state, LoginService) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
        $scope.authError = null;
        var parametros =  { username: $scope.user.username, password: $scope.user.password }
        
        $state.go('app.dashboard-v1');
        /*LoginService.Ingresar(parametros).then(function (response) {
            if (!response.data.token) {
                $scope.authError = 'Email o contraseña incorrectos';
            }
            else {
                $scope.app.sessionId = response.data.token;
                $state.go('app.dashboard-v1');
            }
        }).catch(function (error) {
          $scope.authError = 'Error en Servidor';
        });*/
    };
}]);