const log = console.log

function initialTask(dato) {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            log('initial task : ', dato);
            resolve(0)
        }, 1000);
    })
}

function finalTask(dato) {
    setTimeout(() => {
        log('final task - ', dato);
    }, 1000);
}

function taskToRepeat(counter) {
    return new Promise((res,rej)=>{
        setTimeout(() => {
            if (counter == 4) rej('se dañó en ',counter)
            log('loop task - ', counter)
            res(counter+1)
        }, 1000);
    })
}

initialTask('11- soy la primera función')
    .then(taskToRepeat)
    .then(taskToRepeat)
    .then(taskToRepeat)
    .then(taskToRepeat)
    .then(finalTask)
    .catch((a,b)=>{log(a);log(b)})