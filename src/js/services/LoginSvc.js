'use strict';

angular.module('app').service('LoginService', ['$http', '$q', function ($http, $q) { 

    return {
        Ingresar: LogIn
    }

    function LogIn (parametros) {
        var defered = $q.defer();
        var promise = defered.promise;

        $http({
            method: 'POST',
            url: 'http://apps.tucompualdia.net/APIcole/app_desarrollo.php/api/login',
            data: JSON.stringify(parametros),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(function (response) {
            defered.resolve(response);
        }, function (error) {
            defered.reject(error);
        });

        return promise;
    }
}]);