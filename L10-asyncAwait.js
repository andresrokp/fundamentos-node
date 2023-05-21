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
    return new Promise ((res,rej)=>{
        setTimeout(() => {
            log('final task - ', dato);
            res('OK')
        }, 3000);
    })
}

function taskToRepeat(counter) {
    return new Promise((res,rej)=>{
        setTimeout(() => {
            if (counter == 4) rej('se dañó en ',counter)
            log('loop task - ', counter)
            res(counter+1)
        }, 4000);
    })
}

(async ()=>{
    await initialTask('INICIA AsAw')
    let val = await taskToRepeat(0)
    val = await taskToRepeat(val)
    log('a')
    log(val)
    val = await taskToRepeat(val)
    log('b')
    log(val)
    await finalTask('TERMINA AsAw')
    log('c')
})()
log('sale primero')