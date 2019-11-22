(function () {
    'use strict';

    angular.module('app', [
        "ui.router"
    ])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider.state("planos", {
                url: "/",
                templateUrl: "/views/plano/index.html",
                controller: "planoController"
            }).state("create", {
                url: "/create",
                templateUrl: "/views/plano/create.html",
                controller: "planoController"
            }).state("edit", {
                url: "/edit/:id",
                templateUrl: "/views/plano/create.html",
                controller: "planoController"
            }).state("details", {
                url: "/details/:id",
                templateUrl: "/views/plano/details.html",
                controller: "planoController"
            });
        })
        .constant("globalConfig", {
            apiAddress: 'http://localhost:3000/api'
        });
})();