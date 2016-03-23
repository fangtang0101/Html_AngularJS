/**
 * Created by yuezhao on 15/12/21.
 */
var routerApp = angular.module('routerApp',['ui.router']);
routerApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            views : {
                '': {
                    templateUrl: '/Router路由/PageOne.html'
                },
                'topbar@index': {
                    templateUrl: '/Router路由/PageTwo.html'
                },
                'main@index': {
                    templateUrl: '/pageIndex.html'
                }
            }
        })
        .state('index.usermng', {
            url: '/usermng',
            views: {
                'main@index': {
                    templateUrl: '/usermng.html',
                    controller: function($scope, $state) {
                        $scope.addUserType = function () {
                            $state.go('index.usermng.addusertype');
                        }
                    }
                }
            }
        })
        .state('index.usermng.highendusers', {

        })
});