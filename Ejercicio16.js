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

function procesarListaPromesa(lista) {
    const promesas = lista.map(numero => procesarNumeroPromesa(numero));

    return Promise.all(promesas)
        .then(() => {
            return "Proceso completado";
        });
}

const numeros = [1, 2, 3];
procesarListaPromesa(numeros)
    .then(mensaje => {
        console.log("---");
        console.log("Resultado Final:", mensaje);
    })
    .catch(error => {
        console.error("Ocurrió un error en el proceso:", error);
    });

console.log("Iniciando procesamiento de lista (código síncrono continúa ejecutándose)");