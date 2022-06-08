document.getElementById('player').addEventListener("click", sumarPuntos);

let puntos = 0;
let tiempo = 35;
let necesarios = 30;

function sumarPuntos() {
    puntos++;
    document.getElementById('puntos').innerHTML = `Puntos: <b>${puntos}/${necesarios}</b>`;
    randNum = Math.round(Math.random()*500);
    randNum2 = Math.round(Math.random()*500);
    document.getElementById('player').style.marginTop = randNum + 'px';
    document.getElementById('player').style.marginLeft = randNum2 + 'px';
    if (puntos == 30) {
        alert('Ganaste, felicitaciones!!')
        alert(`Cuidado, si pones 'aceptar' el juego arranca de inmediatamente.`);
        tiempo = 35;
        puntos = 0;
    }
}

function restarTiempo() {
    tiempo--;
    document.getElementById('tiempo').innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;Tiempo: <b>${tiempo}</b>`;
    if (tiempo == 0) {
        alert(`Perdiste =(, podes intentarlo de nuevo!`);
        alert(`Ahora atento, al hacer click en 'aceptar' el juego arranca directamete.`);
        tiempo = 35;
        puntos = 0;
    }
}

setInterval(restarTiempo,1000);

function cambiarRojo() {
    if(cambiarRojo) {
        document.body.style.backgroundColor = "#ff0000";
        document.getElementById('bienvenido').style.color = "black";
        document.getElementById('cambioRojo').style.boxShadow = "0px 0px 10px #0000ff";
        document.getElementById('bienvenido').style.textShadow = "0px 0px 5px white";
        document.getElementById('volverInicio').style.boxShadow = "";
    }
}

function cambiarAzul() {
    if(cambiarAzul) {
        document.body.style.backgroundColor = "#0000ff";
        document.getElementById('bienvenido').style.color = "#ffffff";
        document.getElementById('bienvenido').style.textShadow = "10px 0px 10px #000000";
        document.getElementById('volverInicio').style.boxShadow = "";
        document.getElementById('volverInicio').style.boxShadow = "0px 0px 30px white";
    }
}

function cambiarCeleste() {
    if (cambiarCeleste) {
        document.body.style.backgroundColor = "aqua";
        document.getElementById('bienvenido').style.color = "black";
        document.getElementById('bienvenido').style.textShadow = "";
        document.getElementById('volverInicio').style.boxShadow = "";
    }
}

function cambiarNegro() {
    if(cambiarNegro) {
        document.body.style.backgroundColor = "black";
        document.getElementById('bienvenido').style.color = "#ffffff";
        document.getElementById('volverInicio').style.boxShadow = "0px 0px 30px white";
    }
}

function cambiarBlanco() {
    if(cambiarBlanco) {
        document.body.style.backgroundColor = "#ffffff";
        document.getElementById('bienvenido').style.color = "black";
        document.getElementById('volverInicio').style.boxShadow = "";
    }
}