(function () {
    var app = angular.module("MyWebApp");

    app.constant('CONFIGURATION', (function () {

        var myServiceUrl = "http://localhost:52390/RestfulService.svc";

        var ipUrl = "http://www.telize.com/jsonip?callback=JSON_CALLBACK";


        return {
            MY_SERVICE_URL: myServiceUrl,
            IP_URL: ipUrl
        }
    })());
}());