(function () {
    var language = function ($cookieStore, $route, $window) {

        var changeLanguage = function (lang) {
            $cookieStore.put('language', lang);
            localStorage.setItem('locale', lang);
            $window.location.reload();
        };

        var getLanguage = function () {
            if (!$cookieStore.get('language'))
                localStorage.setItem('locale', 'tr');
            else
                localStorage.setItem('locale', $cookieStore.get('language'));

            return localStorage.getItem('locale');
        };


        return {
            changeLanguage: changeLanguage,
            getLanguage: getLanguage
        };


    };
    var module = angular.module("MyWebApp");
    module.factory("language", language)
}());