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
            var randNum2 = 0
            while(randNum != 1234 || randNum2 != 15824){
                randNum = Math.floor((Math.random() * 25000))
                randNum2 = Math.floor((Math.random() * 25000))
                if(randNum%5 === 0){
                    console.log(randNum + " trying to be: " + "1234")
                }
            }

            $scope.threadNumbers.currentNumber = "THIS THREAD --- Solution Found"

        }


        $scope.startNewThread = function(){
            $scope.threadNumbers.currentNumber = "solving...."
            console.log(window.chive.start())
        }

    })