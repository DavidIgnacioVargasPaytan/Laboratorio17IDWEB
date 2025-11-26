function dividirAsyncPromesa(a, b) {
    return new Promise((resolve, reject) => {
        console.log(`Intentando dividir ${a} / ${b} asíncronamente (Promesa)...`);
        setTimeout(() => {
            if (b === 0) {
                reject(new Error("No se puede dividir entre cero")); 
            } else {
                const resultado = a / b;
                resolve(resultado); 
            }
        }, 1500); 
    });
}

dividirAsyncPromesa(10, 2)
    .then(resultado => {
        console.log("Resultado de la división (10/2):", resultado);
    })
    .catch(error => {
        console.error("Error en la división:", error.message);
    });

dividirAsyncPromesa(10, 0)
    .then(resultado => {
        console.log("Resultado de la división (10/0):", resultado);
    })
    .catch(error => {
        console.error("Error en la división:", error.message);
    });