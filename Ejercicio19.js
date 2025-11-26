function dividirAsyncPromesa(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b === 0) {
                reject(new Error("No se puede dividir entre cero")); 
            } else {
                resolve(a / b); 
            }
        }, 1500); 
    });
}

async function ejecutarDivision(a, b) {
    console.log(`Ejecutando división ${a} / ${b} con Async/Await...`);
    try {
        const resultado = await dividirAsyncPromesa(a, b);
        console.log(`Resultado de la división (${a}/${b}): ${resultado}`);
    } catch (error) {
        console.error(`Error en la división (${a}/${b}):`, error.message);
    }
}

ejecutarDivision(20, 4);

ejecutarDivision(20, 0);