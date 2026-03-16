document.getElementById("btnCalcular").addEventListener("click", function(){

    const edad = parseInt(document.getElementById("edad").value);
    const presion = parseInt(document.getElementById("presion").value);
    const colesterol = parseInt(document.getElementById("colesterol").value);
    const fumador = document.getElementById("fumador").value;

    let textoResultado = document.getElementById("textoResultado");

    recomendaciones.innerHTML = "";

    if(!edad || !presion || !colesterol || fumador === ""){
        textoResultado.textContent = "Por favor completa todos los campos antes de calcular.";
        return;
    }

    let puntos = 0;

    if(edad >= 35 && edad <= 44){
        puntos += 1;
    } else if(edad >= 45){
        puntos += 2;
    }

    if(presion >= 140){
        puntos += 3;
    } else if(presion >= 120){
        puntos += 1;
    }

    if(colesterol >= 240){
        puntos += 3;
    } else if(colesterol >= 200){
        puntos += 1;
    }

    if(fumador === "si"){
        puntos += 3;
    }

    

    if(puntos <= 2){

        let nivelRiesgo = document.getElementById("nivelRiesgo");
        let resultado = document.getElementById("resultado");
        let recomendaciones = document.getElementById("recomendaciones");

        textoResultado.textContent = "Riesgo Cardiovascular bajo";
        nivelRiesgo.textContent = "Puntos: " + puntos;
        resultado.style.backgroundColor = "#8BC34A";

        let r1 = document.createElement("li");
        r1.textContent = "Mantén una dieta saludable.";

        let r2 = document.createElement("li");
        r2.textContent = "Realiza actividad física regularmente.";

        let r3 = document.createElement("li");
        r3.textContent = "Continúa con chequeos médicos periódicos.";

        recomendaciones.append(r1, r2, r3);

    }

    else if(puntos >= 3 && puntos <= 5){

        textoResultado.textContent = "Riesgo Cardiovascular mopderado";
        nivelRiesgo.textContent = "Puntos: " + puntos;
        resultado.style.backgroundColor = "#FFC107";

        let r1 = document.createElement("li");
        r1.textContent = "Reduce el consumo de grasas y sal.";

        let r2 = document.createElement("li");
        r2.textContent = "Realiza ejercicio al menos 3 veces por semana.";

        let r3 = document.createElement("li");
        r3.textContent = "Consulta regularmente con tu médico.";

        recomendaciones.append(r1, r2, r3);

    }

    else{

        textoResultado.textContent = "Riesgo Cardiovascular alto";
        nivelRiesgo.textContent = "Puntos: " + puntos;
        resultado.style.backgroundColor = "#F44336";

        let r1 = document.createElement("li");
        r1.textContent = "Acude a un control médico lo antes posible.";

        let r2 = document.createElement("li");
        r2.textContent = "Evita el consumo de tabaco.";

        let r3 = document.createElement("li");
        r3.textContent = "Mejora tu alimentación y realiza actividad física.";

        recomendaciones.append(r1, r2, r3);

    }

});
    