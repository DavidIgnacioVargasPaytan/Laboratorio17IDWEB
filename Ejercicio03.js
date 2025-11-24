try {
    console.log(variableNoDeclarada);
} catch (error) {
    console.log("Tipo de Error:", error.name);
    console.log("Mensaje del Error:", error.message); 
}