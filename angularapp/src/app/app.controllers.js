angular.module('rv.app')
    .controller('AppCtrl', function ($scope) {

    })

    .controller('HomeCtrl', function($scope) {

        $scope.threadNumbers = {
            'currentNumber' : "-----"
        }

        $scope.startThisThread = function(){
            $scope.threadNumbers.currentNumber = "solving...."

            var randNum = 0
            while(randNum != 429541){
                randNum = Math.floor((Math.random() * 500000000))
            }
            $scope.threadNumbers.currentNumber = "THIS THREAD --- Solution Found"

        }


        $scope.startNewThread = function(){
            $scope.threadNumbers.currentNumber = "solving...."

            var work = new Worker('/vendor/compuhive/compuhive.js')

            work.onmessage = function(message){
                $scope.threadNumbers.currentNumber = "NEW THREAD --- Solution Found"
                $scope.$apply()
            }
        }
    })