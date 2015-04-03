(function () {
    var app = angular.module("MyWebApp");

    var LoginCtrl = function ($rootScope, $scope, $location, $cookieStore, authentication, translationService) {

        $scope.submit = function () {
            authentication.authenticateUser($scope.username, $scope.password, $scope.rememberme);
        }

        translationService.getTranslation($scope, 'Login');

    };

    app.controller('LoginCtrl', ['$rootScope', '$scope', '$location', '$cookieStore', 'authentication', 'translationService', LoginCtrl]);
}());