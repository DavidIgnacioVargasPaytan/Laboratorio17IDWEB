function cargarMensajePromesa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const mensaje = "Mensaje cargado";
            resolve(mensaje);
        }, 1000);
    });
}

cargarMensajePromesa()
    .then(mensaje => {
        console.log("Promesa resuelta:", mensaje);
    })
    .catch(error => {
        console.error("Error:", error);
    });

console.log("Llamada a cargarMensajePromesa realizada (código síncrono continúa ejecutándose)");