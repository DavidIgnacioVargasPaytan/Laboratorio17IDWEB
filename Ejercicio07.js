try {
    let x = null; 
    console.log(x.nombre); 
} catch (e) {
    if (e instanceof TypeError) {
        console.log("Se capturó un TypeError: Se intentó acceder a una propiedad de una variable null o undefined.");
        console.log("Mensaje original:", e.message);
    } else if (e instanceof ReferenceError) {
        console.log("Se capturó un ReferenceError: Se usó una variable no declarada.");
        console.log("Mensaje original:", e.message);
    } 
    else {
        console.log("Error de tipo general capturado.");
        console.log("Tipo:", e.name, "| Mensaje:", e.message);
    }
}