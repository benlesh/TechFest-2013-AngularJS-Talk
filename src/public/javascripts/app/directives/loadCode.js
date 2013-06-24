//loadCode.js
angular.module('techfest')
    .directive('loadCode', ['$http', '$window', function ($http, $window) {
        return {
            link: function (scope, elem, attrs) {
                scope.$watch(function () {
                    return attrs.loadCode;
                }, function (url) {
                    $http.get(url).then(function (code) {
                        elem.text(code.data);
                    });
                });
            }
        };
    }]);