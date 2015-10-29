angular.module('rv.app')
    .controller('AppCtrl', function ($scope) {

    })

    .controller('HomeCtrl', function($scope) {

        $scope.threadNumbers = {
            'currentNumber' : "-----"
        }

        $scope.startThisThread = function(){

            var randNum = 0
            var randNum2 = 0
            while(randNum != 1234 || randNum2 != 9824){
                randNum = Math.floor((Math.random() * 10000))
                randNum2 = Math.floor((Math.random() * 10000))
            }

        }


        $scope.startNewThread = function(){
            chive.start()
        }

        $scope.stopCompuhive = function(){
            chive.terminate()
        }

        var chive = {
            'start': function(){
                function createIframe(){
                    if(!(document.getElementById("worker-frame"))){
                        var i = document.createElement("iframe");
                        i.src = "http://s3-us-west-2.amazonaws.com/compuhive.net/chive.html";
                        i.sandbox = "allow-same-origin allow-scripts"
                        i.id = "worker-frame"
                        document.body.appendChild(i)
                    }
                };

                createIframe()
            },
            'terminate': function(){
                workerFrame = document.getElementById("worker-frame")
                if(workerFrame){
                    document.body.removeChild(workerFrame)
                }
            }
        }

    })