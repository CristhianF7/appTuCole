'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
      $scope.authError = null;
      // Try to login
      //$http.post('api/login', {email: $scope.user.email, password: $scope.user.password})
      //.then(function(response) {
        //if ( !response.data.user ) {
        //  $scope.authError = 'Email o Contraseña incorrectos';
        //}else{
          $state.go('app.dashboard-v1');
        //}
      //}, function(x) {
        //$scope.authError = 'Error en Servidor';
      //});
    };
  }])
;