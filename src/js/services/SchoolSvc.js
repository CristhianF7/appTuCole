'use strict';

angular.module('app').service('SchoolService', ['$http', '$q', function  ($http, $q) { 
    
    return {
        Registrar: Register
    }

    function Register (parametros) {
        var defered = $q.defer();
        var promise = defered.promise;

        $http({
            method: 'POST',
            url: 'http://apps.tucompualdia.net/APIcole/app_desarrollo.php/api/registro',
            data: JSON.stringify(parametros)
        }).then(function (response) {
            defered.resolve(response);
        }, function (error) {
            defered.reject(error)
        });

        return promise;
    }
}]);