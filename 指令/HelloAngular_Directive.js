/**
 * Created by ZyZwei on 15/12/1.
 */
var app = angular.module('HelloApp', []);

//transclude
app.directive('hello', function () {
    return {
        restrict: 'E',
        transclude: true,
        template: "<div>Hi transclude!<div ng-transclude></div></div>"
    }
});

//正常方式,容易侃长
/*
app.directive('hello', function ($templateCache) {
    return {
        restrict: 'AECM',//属性,元素,class,注释
        template: '<div>Hi everyone!</div>',
        replace: true
    }
});
*/
//精简方式
/*
app.run(function ($templateCache) {
    $templateCache.put('hello.html', '<div>Hi angular.</div>');
});

app.directive('hello', function ($templateCache) {
    return {
        restrict: 'AECM',//属性,元素,class,注释
        template: $templateCache.get('hello.html'),
        replace: true
    }
});
    */