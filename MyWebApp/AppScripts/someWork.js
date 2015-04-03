(function () {
    var someWork = function ($http, $rootScope, CONFIGURATION) {

        var baseUrl = CONFIGURATION.MY_SERVICE_URL;

        var doWork = function (workParam) {
            var request = $http({
                method: "post",
                url: baseUrl + "/dowork",
                data: {

                    'WorkParam': workParam
                }
            });

            request.success(onDoWorkSuccess);
        };

        var onDoWorkSuccess = function (data) {
            $rootScope.doWorkResult = data;
        }

        return {
            doWork: doWork
        };


    };

    var module = angular.module("MyWebApp");
    module.factory("someWork", someWork)
}());