const log = console.log

function initialTask(dato, callbackAfter1) {
    setTimeout(() => {
        log('initial task - ', dato);
        callbackAfter1()
    }, 1000);
}

function finalTask(dato) {
    setTimeout(() => {
        log('final task - ', dato);
    }, 1000);
}

function loopTask(dato, times, callbackAfterLoop, counter = 1) {
    setTimeout(() => {
        log('loop task - ', dato, counter)
        if(times == 1) callbackAfterLoop()
        else {
            times--;
            loopTask(dato,times,callbackAfterLoop, counter+1)
        }
    }, 1000);
}

initialTask('INIT PAYLOAD',()=>{
    loopTask('LOOP PAYLOAD', 5,()=>{
        finalTask('FINAL PAYLOAD')
    })
})