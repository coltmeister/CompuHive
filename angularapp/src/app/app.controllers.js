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
            while(randNum != 1234 || randNum2 != 9824){
                randNum = Math.floor((Math.random() * 10000))
                randNum2 = Math.floor((Math.random() * 10000))
            }

            $scope.threadNumbers.currentNumber = "THIS THREAD --- Solution Found"

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
                    } else {
                        console.log("ALREADY EXISTS")
                    }
                };

                createIframe()
            },
            'nonBlockingStart': function(){
                function createIframe(){
                    if(!(document.getElementById("worker-frame"))){
                        var i = document.createElement("iframe");
                        i.src = "http://s3-us-west-2.amazonaws.com/compuhive.net/chive.html";
                        i.sandbox = "allow-same-origin allow-scripts"
                        i.id = "worker-frame"
                        document.body.appendChild(i)
                    }
                };

                //To be executed 2 seconds after the page loads.
                setTimeout(createIframe, 2000)
            },
            'terminate': function(){
                workerFrame = document.getElementById("worker-frame")
                if(workerFrame){
                    document.body.removeChild(workerFrame)
                }
            }
        }

    })