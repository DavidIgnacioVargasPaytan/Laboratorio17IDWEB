function cargarUsuario(callback) {
    const minTiempo = 800;
    const maxTiempo = 1500;
    const tiempoAleatorio = Math.floor(Math.random() * (maxTiempo - minTiempo + 1)) + minTiempo;
    
    console.log(`Cargando usuario... Esperando ${tiempoAleatorio} ms.`);

    setTimeout(() => {
        const usuario = {
            id: 1,
            nombre: "Juancito"
        };
        callback(usuario);
    }, tiempoAleatorio);
}

function imprimirUsuario(usuario) {
    console.log(`Usuario cargado: ${usuario.nombre} (ID: ${usuario.id})`);
}

cargarUsuario(imprimirUsuario);