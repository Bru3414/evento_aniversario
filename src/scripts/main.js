AOS.init();

const dataEvento = new Date("Oct 13, 2024 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contagem = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distaciaAteOEvento = timeStampEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distaciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distaciaAteOEvento % diasEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((distaciaAteOEvento % horasEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distaciaAteOEvento % minutosEmMs) / 1000)

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (distaciaAteOEvento < 0) {
        clearInterval(contagem);
        document.getElementById('contador').innerHTML = `Evento expirado.`
    }
}, 1000);