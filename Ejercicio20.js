function procesarNumeroPromesa(numero) {
    return new Promise(resolve => {
        const minTiempo = 500;
        const maxTiempo = 1500;
        const tiempoAleatorio = Math.floor(Math.random() * (maxTiempo - minTiempo + 1)) + minTiempo;
        
        console.log(`Procesando ${numero}... Esperando ${tiempoAleatorio} ms.`);

        setTimeout(() => {
            console.log(`Número ${numero} procesado.`);
            resolve(`Procesamiento de ${numero} completado.`);
        }, tiempoAleatorio);
    });
}

async function procesarListaAsyncSecuencial(lista) {
    console.log("Iniciando procesamiento secuencial con Async/Await...");

    for (const numero of lista) {
        await procesarNumeroPromesa(numero); 
    }

    console.log("---");
    console.log("Proceso completado");
}

async function procesarListaAsyncConcurrente(lista) {
    console.log("Iniciando procesamiento concurrente con Async/Await y Promise.all...");

    const promesas = lista.map(numero => procesarNumeroPromesa(numero));
    
    await Promise.all(promesas);

    console.log("---");
    console.log("Proceso completado (concurrentemente)");
}


const numeros = [1, 2, 3];
procesarListaAsyncConcurrente(numeros);

console.log("Llamada a procesarLista realizada (código síncrono continúa ejecutándose)");