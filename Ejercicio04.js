let jsonInvalido = '{ "nombre": "Juan"';

try {
    let obj = JSON.parse(jsonInvalido); 
    console.log("Objeto Parsedo:", obj);
} catch (e) {
    console.log("Error de parseo JSON:");
    console.log("Nombre del error (e.name):", e.name);
    console.log("Mensaje del error (e.message):", e.message);
}