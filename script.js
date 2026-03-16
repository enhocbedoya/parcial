document.getElementById("btnCalcular").addEventListener("click", function(){

    let edad = parseInt(document.getElementById("edad").value);
    let presion = parseInt(document.getElementById("presion").value);
    let colesterol = parseInt(document.getElementById("colesterol").value);
    let fumador = document.getElementById("fumador").value;

    let textoResultado = document.getElementById("textoResultado");

    if(!edad || !presion || !colesterol || fumador === ""){
        textoResultado.textContent = "Por favor completa todos los campos antes de calcular.";
        return;
    }

    let puntos = 0;

    if(edad >= 35 && edad <= 44){
        puntos += 1;
    } 
    else if(edad >= 45){
        puntos += 2;
    }

    if(presion >= 140){
        puntos += 3;
    } 
    else if(presion >= 120){
        puntos += 1;
    }

    if(colesterol >= 240){
        puntos += 3;
    } 
    else if(colesterol >= 200){
        puntos += 1;
    }

    if(fumador === "si"){
        puntos += 3;
    }

    console.log("Puntos totales:", puntos);

});