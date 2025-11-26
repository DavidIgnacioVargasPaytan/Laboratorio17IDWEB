function cargarMensajePromesa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Mensaje cargado");
        }, 1000);
    });
}

async function ejecutarCargarMensaje() {
    console.log("Iniciando carga con Async/Await...");
    try {
        const mensaje = await cargarMensajePromesa();
        console.log("Async/Await recibió:", mensaje);
    } catch (error) {
        console.error("Error en la carga:", error);
    }
}

ejecutarCargarMensaje();
console.log("Llamada a ejecutarCargarMensaje realizada (código síncrono continúa ejecutándose)");