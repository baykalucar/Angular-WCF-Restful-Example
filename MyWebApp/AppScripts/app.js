(function () {
    var app = angular.module("MyWebApp", ["ngRoute", "ngResource", "ngCookies", "angular-loading-bar"]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "Views/main.html",
                controller: "MainCtrl"
            })
            .when("/login", {
                templateUrl: "Views/login.html",
                controller: "LoginCtrl"
            })
            .otherwise({ redirectTo: '/main' });
    });

    app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }])
}());