function validarEdad(edad) {
    if (typeof edad !== 'number' || edad < 0) {
        throw new Error("Edad inválida"); 
    }
    return true;
}

try {
    validarEdad(25);
    console.log("Edad 25 validada correctamente.");
} catch (e) {
    console.log("Error capturado:", e.message);
}

try {
    validarEdad(-5);
} catch (e) {
    console.log("Error capturado:", e.message); 
}

try {
    validarEdad("diez");
} catch (e) {
    console.log("Error capturado:", e.message);
}