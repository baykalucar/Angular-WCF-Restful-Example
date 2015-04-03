(function () {

    var translationService = function ($resource, language) {

        var getTranslation = function ($scope, controllerName) {
            var languageFilePath = 'Translations/' + controllerName + "_" + language.getLanguage() + '.js';
            $resource(languageFilePath).get(function (data) {
                $scope.translation = data;
            });
        };

        return {
            getTranslation: getTranslation
        };
    };


    var module = angular.module("MyWebApp");
    module.service("translationService", translationService)
}());