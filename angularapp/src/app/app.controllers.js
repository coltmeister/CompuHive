angular.module('rv.app')
    .controller('AppCtrl', function ($scope) {

    })

    .controller('HomeCtrl', function($scope) {
        $scope.threadNumbers = {
            'thisThread': 0,
            'newThread': 0
        }
    })
