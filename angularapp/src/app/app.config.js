angular.module('rv.app')
    .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);

        $urlRouterProvider
            .when('', '/');

        $stateProvider
            .state('app', {
                url: '',
                templateUrl: '/app/app.html',
                controller: 'AppCtrl',
                abstract: true
            })

            .state('app.home', {
                url: '/',
                templateUrl: '/app/pages/home.html',
                controller: 'HomeCtrl'
            })
    })
    .run(function ($rootScope, $state) {
        $state.go('app.home');
    });
