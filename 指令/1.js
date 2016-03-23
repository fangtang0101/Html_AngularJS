/**
 * Created by ZyZwei on 15/12/2.
 */
var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.loadData = function () {
        alert('加载中...');
    }
});

app.directive('loader', function () {
    return {
        restrict: 'AE',
        link: function (scope, element, attr) {
            element.bind('mouseenter', function () {
                scope.loadData();
            });
        }
    }
});