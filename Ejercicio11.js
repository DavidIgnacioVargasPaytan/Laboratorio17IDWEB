function dividirAsync(a, b, callback) {
    console.log(`Intentando dividir ${a} / ${b} asíncronamente...`);
    setTimeout(() => {
        if (b === 0) {
            callback(new Error("No se puede dividir entre cero"), null);
        } else {
            const resultado = a / b;
            callback(null, resultado);
        }
    }, 1500);
}

dividirAsync(10, 2, (error, resultado) => {
    if (error) {
        console.error("Error en la división:", error.message);
    } else {
        console.log("Resultado de la división (10/2):", resultado);
    }
});

dividirAsync(10, 0, (error, resultado) => {
    if (error) {
        console.error("Error en la división:", error.message);
    } else {
        console.log("Resultado de la división (10/0):", resultado);
    }
});