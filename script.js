document.getElementById("btnCalcular").addEventListener("click", function(){

    let edad = document.getElementById("edad").value;
    let presion = document.getElementById("presion").value;
    let colesterol = document.getElementById("colesterol").value;
    let fumador = document.getElementById("fumador").value;

    let textoResultado = document.getElementById("textoResultado");

    if(edad === "" || presion === "" || colesterol === "" || fumador === ""){
        
        textoResultado.textContent = "Por favor completa todos los campos antes de calcular.";

        return;
    }

    console.log("Edad:", edad);
    console.log("Presión:", presion);
    console.log("Colesterol:", colesterol);
    console.log("Fumador:", fumador);

});