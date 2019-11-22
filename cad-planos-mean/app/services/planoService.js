(function () {
    'use strict';

    angular
        .module('app')
        .factory('planoService', Service);

    Service.$inject = ['$http', 'globalConfig'];

    function Service($http, globalConfig) {
        var url = "";
        return {
            getPlanos: function () {
                url = globalConfig.apiAddress + "/plano";
                return $http.get(url);
            },
            getPlano: function (id) {
                url = globalConfig.apiAddress + "/plano/" + id;
                return $http.get(url);
            },
            createPlano: function (plano) {
                url = globalConfig.apiAddress + "/plano";
                return $http.post(url, plano);
            },
            updatePlano: function (plano) {
                url = globalConfig.apiAddress + "/plano/" + plano._id;
                return $http.put(url, plano);
            },
            deletePlano: function (id) {
                url = globalConfig.apiAddress + "/plano/" + id;
                return $http.delete(url);
            }
        };
    }
})();