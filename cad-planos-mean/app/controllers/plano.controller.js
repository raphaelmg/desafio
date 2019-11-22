(function () {
    'use strict';

    angular
        .module('app')
        .controller('planoController', Controller);

    Controller.$inject = ['$scope', '$rootScope', 'planoService', '$state', '$stateParams'];

    function Controller($scope, $rootScope, planoService, $state, $stateParams) {
        $scope.planos = [];

        if ($state.current.name == "planos") {
            $rootScope.Title = "Plano Listing";
            planoService.getPlanos().then(function (res) {
                $scope.planos = res.data;
            }).catch(function (err) {
                console.log(err);
            });

            $scope.deletePlano = function (id) {
                if (confirm('Tem certeza que quer excluir?')) {
                    planoService.deletePlano(id).then(function (res) {
                        if (res.data == "deleted") {
                            $state.go("planos", {}, { reload: true });
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "edit") {
            $rootScope.Title = "Edit Plano";
            var id = $stateParams.id;
            planoService.getPlano(id).then(function (res) {
                $scope.plano = res.data;
            }).catch(function (err) {
                console.log(err);
            });

            $scope.saveData = function (plano) {
                if ($scope.planoForm.$valid) {
                    planoService.updatePlano(plano).then(function (res) {
                        if (res.data == "updated") {
                            $state.go("planos");
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "create") {
            $rootScope.Title = "Create Plano";
            $scope.saveData = function (plano) {
                $scope.IsSubmit = true;
                if ($scope.planoForm.$valid) {
                    planoService.createPlano(plano).then(function (res) {
                        if (res.data == "created") {
                            $state.go("planos");
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            };
        }
    }
})();