compuhive = {

    //HTTP library to be used in each client's program
    'http' : {
        'request' : function(url, method, headers, resolve, reject, dataParam){

            var xmlhttp = new XMLHttpRequest()
            xmlhttp.onreadystatechange = function(){
                if(xmlhttp.readyState === 4 && xmlhttp.status === 200){ //Resolve
                    var data = JSON.parse(xmlhttp.responseText)
                    resolve(data)
                } else if(xmlhttp.status != 200){  //Reject
                    reject(xmlhttp.responseText)
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

            var randNum = 0
            while(randNum != 42954){
                randNum = Math.floor((Math.random() * 50000))
            }
            console.log(randNum)

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