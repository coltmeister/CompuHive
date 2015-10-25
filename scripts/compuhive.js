compuhive = {

    //HTTP library to be used in each client's program
    'http' : {
        'request' : function(url, method, headers, resolve, reject, dataParam){

            var xmlhttp = new XMLHttpRequest()
            xmlhttp.onreadystatechange = function(){
                if(xmlhttp.readyState === 4 && xmlhttp.status > 200){ //Resolve
                    var data = JSON.parse(xmlhttp.responseText)
                    if(resolve){
                        resolve(data)
                    }
                } else if(xmlhttp.status != 200 && xmlhttp.readyState === 4){  //Reject
                    if(reject){
                        reject(xmlhttp.responseText)
                    }
                }
            }

            for(key in headers){
                if(headers.hasOwnProperty(key)){
                    xmlhttp.setRequestHeader(key, headers[key])
                }
            }

            xmlhttp.open(method || "GET", url, true)
            xmlhttp.send(dataParam || null)

        }
    },

    'lib' : [
        function(http, done){


            http.request(
                'http://harpisoftware.com/compuhive/api/getjob',
                'GET',
                {},
                function(data){

                    //Data was received from the server.

                    var num1 = data[0]
                    var num2 = data[1]

                    var bound = data[2]

                    var randNum = 0
                    var randNum2 = 0;
                    var date1 = new Date()
                    console.log("Trying to guess: " + num1 + " and " + num2)
                    console.log(date1.toLocaleString())
                    while(randNum != num1 || randNum2 != num2){
                        randNum = Math.floor((Math.random() * bound))
                        randNum2 = Math.floor((Math.random() * bound))
                    }
                    var date2 = new Date()
                    console.log(date2.toLocaleString())

                    //The process finished.
                    http.request(
                        'http://harpisoftware.com/compuhive/api/finish',
                        'GET',
                        {},
                        function(data){
                            console.log(data)
                        },
                        function(data){
                            console.log(data)
                        }
                    )


                }
            )

            done()

        }
    ],

    //The main method of compuhive. This is the method called once the worker is spawned.
    'main' : function(){

        //Number of inner-programs
        var numFunctions = compuhive.lib.length

        //Delay between jobs (increases each time queueJob is called up to a cap)
        var delay = 2000

        function queueJob(){

            setTimeout(function(){

                //Randomly selecting a program to run
                var rand = Math.floor((Math.random() * numFunctions))

                compuhive['lib'][rand](compuhive.http, queueJob)

            }, delay)

            if(!(delay*2 === 256)){
                delay = delay*2
            }
        }

        //Start the job loop
        queueJob()
    }
}

//Start compuhive
compuhive.main()