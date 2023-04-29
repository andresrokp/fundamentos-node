const log = console.log

function funcionParaLlamarAlFinal() {
    log('99 - proceso finalizado')
}

function tareaQueTomaSuTiempo(unaFuncionParaUsarEnAlgunMomentoAquiAdentro) {
    log('2a - Yo me tomaré mi tiempo en ejecutarme')    
    setTimeout(() => {
        log('2b - Me tomé un tiempo en ejecutarme')
        unaFuncionParaUsarEnAlgunMomentoAquiAdentro()
    }, 1500);
}

function vieneDespuesYtambienSeTomaSuTiempo(funcionParaLlamarAlFinal) {
    log('3a - yo vengo después y también me tomaré mi tiempo')
    setTimeout(() => {
        log('3b - vine después y me tomé mi tiempo')
        funcionParaLlamarAlFinal()
    }, 1000);
}

log('1 - iniciando proceso')
tareaQueTomaSuTiempo(()=>vieneDespuesYtambienSeTomaSuTiempo(funcionParaLlamarAlFinal))
