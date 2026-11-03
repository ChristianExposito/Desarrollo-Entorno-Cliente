const CLAVE_MEMORIA =  "memoria"
const CONFIG_PREDETEFINIDA = {
    parejas: 8 
};

f

function configurarPartida() {
let ParejasCartas = prompt("Introduce el numero de parejas entre 4 y 12");
if(ParejasCartas !== null && ParejasCartas.trim() === ""){ //Si el usuario cancela o escribe espacios saltara el numero de parejas predeterminada
    return CONFIG_PREDETEFINIDA.parejas;
}
let numeroParejas = Number(ParejasCartas);

if (isNaN(ParejasCartas) || ParejasCartas<4 || ParejasCartas>12){//Si el usuario escribe algo que no sea numero y ese mismo numero es menor que 4 o mayor que 12 
    return CONFIG_PREDETEFINIDA.parejas;
}else{
    return ParejasCartas;
}
}

function generarCartas(numParejas) {
    let mazo = [];
    for (let i = 1; i <= numParejas; i++) {
        mazo.push({ numero: i, descubierta: true });
        mazo.push({ numero: i, descubierta: true });
    }
    return mazo;
}


function fisher_yates(arrayCartas) {
    // Recorre el array al revés, desde la última carta hasta la segunda
    for (let i = arrayCartas.length - 1; i > 0; i--) {
        //Elige una posición aleatoria entre la primera carta (0) y la carta actual (i)
        let aleatorio = Math.floor(Math.random() * (i + 1));
        let temporal = arrayCartas[i];           // Guarda la carta actual en una variable temporal
        arrayCartas[i] = arrayCartas[aleatorio];  // Pone la carta aleatoria en la posición actual
        arrayCartas[aleatorio] = temporal;        // Mueve la carta de la variable temporal a la posición aleatoria
    }
    return arrayCartas;
}


function mostrarCartas(cartas) {
    let contenedorTablero = document.getElementById("tablero");
    
    if (!contenedorTablero) {
        console.error("No se encontró el elemento con id 'tablero'.");
        return;
    }
    contenedorTablero.innerHTML = "";
    cartas.forEach((carta) => {
    let divCarta = document.createElement("div");
    divCarta.className = "carta";
    divCarta.textContent = carta.numero;
    contenedorTablero.appendChild(divCarta);
});
}


function iniciarJuego() {
    console.log("--- INICIANDO JUEGO ---");

    let numParejas = configurarPartida();   // Pregunta al usuario cuántas parejas quiere jugar
    let cartas = generarCartas(numParejas); // Crea la baraja de cartas según el tamaño elegido
    let cartasBarajadas = fisher_yates(cartas); // Mezcla (baraja) las cartas de forma aleatoria
    console.log("Número de parejas:", numParejas); // Verifica cuántas parejas seleccionó el usuario
    console.log("Total de cartas:", cartasBarajadas.length); // Muestra la cantidad total de cartas generadas
    console.log("Secuencia en el tablero:", cartasBarajadas.map(c => c.numero).join(" ")); // Imprime el orden exacto de los números para hacer trampas/pruebas
    mostrarCartas(cartasBarajadas); // Dibuja visualmente las cartas en la interfaz de la página
}


function finDePartida() {
    localStorage.removeItem(CLAVE_MEMORIA);
    console.log("Partida finalizada. Memoria borrada.");
}


window.addEventListener("DOMContentLoaded", iniciarJuego);