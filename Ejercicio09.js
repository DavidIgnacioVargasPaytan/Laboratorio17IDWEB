function cargarMensaje(callback) {
    setTimeout(() => {
        const mensaje = "Mensaje cargado";
        callback(mensaje);
    }, 1000);
}

cargarMensaje((msg) => {
    console.log("Callback recibido:", msg); 
});

console.log("Llamada a cargarMensaje realizada (código síncrono continúa ejecutándose)");