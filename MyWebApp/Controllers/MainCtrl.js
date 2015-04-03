(function () {
    var app = angular.module("MyWebApp");

    var MainCtrl = function MainCtrl($scope, translationService, someWork, cfpLoadingBar) {

        $scope.submit = function () {
            someWork.doWork($scope.workParam);
        }

        translationService.getTranslation($scope, 'Main');
    };


    app.controller("MainCtrl", ["$scope", "translationService", "someWork", "cfpLoadingBar", MainCtrl]);
}());