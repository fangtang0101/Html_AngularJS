/**
 * Created by yuezhao on 15/12/1.
 */
var myApp = angular.module('myApp', []);
myApp.controller('myCtrl', function ($scope) {
    $scope.userInfo = {
        email: '334091456@qq.com',
        password: '666666',
        autoLogin: true
    };

    $scope.getFormData = function () {
        console.log($scope.userInfo);
    }
});