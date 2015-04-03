(function () {
    var computerName = function ($http, $rootScope, $cookieStore, CONFIGURATION) {
        var getComputerIP = function () {

            var clientIP = $rootScope.clientIP;
            if (typeof clientIP === 'undefined' || clientIP === null) {

                $http.jsonp(CONFIGURATION.IP_URL).
                    success(function (data) {
                        $rootScope.clientIP = data.ip;
                    }).
                    error(function (data) {
                        $rootScope.clientIP = "N/A";
                    });

                
            }
        };

        return {
            getComputerIP: getComputerIP
        };
    };

    var module = angular.module("MyWebApp");
    module.factory("computerName", computerName)
}());
