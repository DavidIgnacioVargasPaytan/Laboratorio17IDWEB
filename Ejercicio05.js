try {
    funcionInexistente(); 
    console.log("Esto no se ejecutará");
} catch (e) {
    console.log("falló");
} finally {
    console.log("siempre se ejecuta");
}