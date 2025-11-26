function procesarLista(lista, callbackFinal) {
    if (lista.length === 0) {
        callbackFinal("Proceso completado (lista vacía)");
        return;
    }

    let contador = 0;

    function procesarNumero(numero, index) {
        const minTiempo = 500;
        const maxTiempo = 1500;
        const tiempoAleatorio = Math.floor(Math.random() * (maxTiempo - minTiempo + 1)) + minTiempo;
        
        console.log(`Procesando ${numero}... Esperando ${tiempoAleatorio} ms.`);

        setTimeout(() => {
            console.log(`Número ${numero} procesado.`);
            contador++;

            if (contador === lista.length) {
                callbackFinal("Proceso completado");
            }
        }, tiempoAleatorio);
    }

    lista.forEach((numero, index) => {
        procesarNumero(numero, index);
    });
}

const numeros = [1, 2, 3];
procesarLista(numeros, (mensaje) => {
    console.log("---");
    console.log("Callback Final:", mensaje);
});

console.log("Iniciando procesamiento de lista (el proceso real es asíncrono)");