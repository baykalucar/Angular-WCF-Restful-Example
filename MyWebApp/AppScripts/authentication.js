(function () {
    var authentication = function ($http, $rootScope, $location, $cookieStore, CONFIGURATION) {
        
        var baseUrl = CONFIGURATION.MY_SERVICE_URL;

        var rememberMeChecked = null;

        var authenticateUser = function (username, password, rememberme) {
            var request = $http({
                method: "post",
                url: baseUrl + "/authenticate",
                data: {

                        'UserName': username,
                        'Password': password
                }
            });

            
            rememberMeChecked = rememberme;

            request.success(onAuthenticationSuccess);

        };

        var onAuthenticationSuccess = function (data) {

            if (data.IsAuthenticated) {
                if (rememberMeChecked) {
                    $cookieStore.put('authenticationObject', data)
                }
                sessionStorage.setItem('authenticationObject', JSON.stringify(data));
                $rootScope.authenticationObject = data;

                $location.path("/main");
            }
        }

        var authenticationControl = function () {

            var authObj = getAuthenticationObject();

            if (typeof authObj === 'undefined' || authObj === null) {
                $location.path("/login");
            }
            else {
                sessionStorage.setItem('authenticationObject', JSON.stringify(authObj));
                $rootScope.authenticationObject = authObj;

                $location.path("/main");
            }
        };

        var getAuthenticationObject = function () {
            var authObj = JSON.parse(sessionStorage.getItem('authenticationObject'));
            if (typeof authObj === 'undefined' || authObj === null) {
                authObj = $cookieStore.get('authenticationObject');
            }

            return authObj;
        }

        var logout = function () {

            sessionStorage.removeItem('authenticationObject');
            $rootScope.authenticationObject = null;
            $rootScope.clear
            $cookieStore.remove('authenticationObject');

            authenticationControl();
        }
        
        return {
            authenticateUser: authenticateUser,
            authenticationControl: authenticationControl,
            logout: logout,
            getAuthenticationObject: getAuthenticationObject
        };

        
    };
    var module = angular.module("MyWebApp");
    module.factory("authentication", authentication)
}());