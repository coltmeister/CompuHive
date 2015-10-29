//This will be the copy-paste script to install compuhive on any website.

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