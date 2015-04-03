(function () {
    var app = angular.module("MyWebApp");

    var IndexCtrl = function MainCtrl($rootScope, $scope, authentication, translationService, language, computerName) {
        authentication.authenticationControl();
        $scope.currentLanguage = language.getLanguage();
        computerName.getComputerIP();

        $scope.logout = function () {
            authentication.logout();
        }

        $scope.changeLanguage = function (lang) {
            language.changeLanguage(lang);
            $scope.currentLanguage = language.getLanguage();
            includei18n($scope.currentLanguage);
        }

        translationService.getTranslation($scope, 'Index');

    };


    app.controller("IndexCtrl", ["$rootScope", "$scope", "authentication", "translationService", "language", "computerName", IndexCtrl]);
}());