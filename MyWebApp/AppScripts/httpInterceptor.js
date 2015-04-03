(function () {
    var app = angular.module("MyWebApp");

    var interceptor = function ($q, $rootScope) {
        var request = function (config) {
            if (config.headers['Content-Type'] === "application/json;charset=utf-8") {
                var authObj = $rootScope.authenticationObject;
                if (typeof authObj !== 'undefined' && authObj !== null) {
                    config.headers['AuthenticationToken'] = authObj.AuthenticationToken;
                }
                config.headers['ClientIP'] = $rootScope.clientIP;
                console.log(config.headers);
            }
            return config;
        }
        
        var response = function (result) {
            if (result.headers['Content-Type'] === "application/json;charset=utf-8") {
                console.log(result);
                
            }
            return result;
            
        }

        var responseError = function (rejection) {
            cconsole.log('Failed with', rejection.status, 'status');
            return $q.reject(rejection);
        }

        return {
            request: request,
            response: response,
            responseError: responseError,

        };

    };

    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push(interceptor);
    });
}());