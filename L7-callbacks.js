const log = console.log

function funcionParaLlamarAlFinal() {
    log('99 - proceso finalizado')
}

function tareaQueTomaSuTiempo(unaFuncionParaUsarEnAlgunMomentoAquiAdentro) {
    log('2a - Yo me tomaré mi tiempo en ejecutarme')    
    setTimeout(() => {
        log('2b - ...Me tomé un tiempo en ejecutarme')
        unaFuncionParaUsarEnAlgunMomentoAquiAdentro()
    }, 1500);
}

function vieneDespuesYtambienSeTomaSuTiempo(callback2) {
    log('3a - yo vengo después y también me tomaré mi tiempo')
    setTimeout(() => {
        log('3b - ...vine después y me tomé mi tiempo')
        callback2()
    }, 1000);
}

function link4(funcionParaLlamarAlFinal) {
    log('4a - soy nueva, me tomaré otro tiempito')
    setTimeout(() => {
        log('4b - ...entré también a tomarme mi tiempo')
        funcionParaLlamarAlFinal()
    }, 1000);
    
}

log('1 - iniciando proceso')
tareaQueTomaSuTiempo(()=>vieneDespuesYtambienSeTomaSuTiempo(()=>link4(()=>funcionParaLlamarAlFinal())))


setTimeout(() => {
    log("\n- - ahora con function declaration - -\n")
    tareaQueTomaSuTiempo(function(){
        vieneDespuesYtambienSeTomaSuTiempo(function () {
            funcionParaLlamarAlFinal
        })
    })    
}, 4000);
