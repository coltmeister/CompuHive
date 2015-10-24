function queueAfterDelay(){
    setTimeout(function(){
        console.log("STARTED A JOB")
        doComputation(queueAfterDelay)
    }, 3000)
}

function doComputation(methodToCallWhenDone){
    setTimeout(function(){
        console.log("DID WORK")
        methodToCallWhenDone()
    }, 2000)
}

function func1(){
    doComputation(queueAfterDelay)
}

func1()