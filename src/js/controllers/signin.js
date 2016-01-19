'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
        $scope.authError = null;
        var parametros =  { username: $scope.user.username, password: $scope.user.password }

        $http({
            method: 'POST',
            url: 'http://apps.tucompualdia.net/APIcole/app_desarrollo.php/api/login',
            data: JSON.stringify(parametros),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(function (response) {
            if (!response.data) {
                $scope.authError = 'Email o contraseña incorrectos';
            }
            else {
                $scope.app.sessionId = response.data.token;
                $state.go('app.dashboard-v1');
            }
        }, function (error) {
          $scope.authError = 'Error en Servidor';

        });
    };
}]);