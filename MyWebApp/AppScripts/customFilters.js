(function () {
    var app = angular.module("MyWebApp");

    var jsonDateTimeFilter = function ($filter) {

        var formatDate = function (input, format) {
            if (typeof input === 'undefined' || input === null)
                return null;

            return $filter('date')(new Date(parseInt(input.replace('/Date(', ''))), format);
        };

        return formatDate;
    };

    app.filter('jsonDate', jsonDateTimeFilter);
}());