function cargarUsuarioPromesa() {
    return new Promise((resolve) => {
        const minTiempo = 800;
        const maxTiempo = 1500;
        const tiempoAleatorio = Math.floor(Math.random() * (maxTiempo - minTiempo + 1)) + minTiempo;
        
        console.log(`Cargando usuario... Esperando ${tiempoAleatorio} ms.`);

        setTimeout(() => {
            const usuario = {
                id: 1,
                nombre: "Juancito"
            };
            resolve(usuario);
        }, tiempoAleatorio);
    });
}

cargarUsuarioPromesa()
    .then(usuario => {
        console.log(`Usuario cargado: ${usuario.nombre} (ID: ${usuario.id})`);
    })
    .catch(error => {
        console.error("Error en la carga del usuario:", error);
    });