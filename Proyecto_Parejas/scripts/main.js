const CLAVE_MEMORIA = "mis_preferencias_juego";
const CONFIG_PREDETEFINIDA = {
    parejas: 8 
};

function obtenerConfiguracionGuardada() {
    try {
        let guardado = localStorage.getItem(CLAVE_MEMORIA);
        if (guardado) {
            let datos = JSON.parse(guardado);
            if (Number.isInteger(datos.parejas) && datos.parejas >= 4 && datos.parejas <= 12) {
                return datos.parejas;
            }
        }
    } catch (error) {
        console.error("Error al leer la memoria:", error);
    }
    return CONFIG_PREDETEFINIDA.parejas;
}

function configurarPartida() {
    let valorActual = obtenerConfiguracionGuardada();
    let respuesta = prompt(`¿Cuántas parejas quieres? (Entre 4 y 12):`, valorActual);
    
    if (respuesta === null) return valorActual;

    let numeroParejas = parseInt(respuesta, 10);

    if (Number.isInteger(numeroParejas) && numeroParejas >= 4 && numeroParejas <= 12) {
        // Guardamos un objeto de configuración en localStorage
        let nuevaConfig = { parejas: numeroParejas };
        localStorage.setItem(CLAVE_MEMORIA, JSON.stringify(nuevaConfig));
        return numeroParejas;
    } else {
        console.error("Error: El número debe ser un entero entre 4 y 12. Se mantiene el valor anterior.");
        return valorActual;
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
    for (let i = arrayCartas.length - 1; i > 0; i--) {
        let aleatorio = Math.floor(Math.random() * (i + 1));
        let temporal = arrayCartas[i];
        arrayCartas[i] = arrayCartas[aleatorio];
        arrayCartas[aleatorio] = temporal;
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
//creamos divs por cada carta y los metemos dentro del tablero
    cartas.forEach((carta) => {
    let divCarta = document.createElement("div");
    divCarta.className = "carta";
    divCarta.textContent = carta.numero;
    contenedorTablero.appendChild(divCarta);
});
}


function iniciarJuego() {
    console.log("--- INICIANDO JUEGO ---");
    let numParejas = configurarPartida();
    let cartas = generarCartas(numParejas);
    let cartasBarajadas = fisher_yates(cartas);
    console.log("Número de parejas:", numParejas);
    console.log("Total de cartas:", cartasBarajadas.length);
    console.log("Secuencia en el tablero:", cartasBarajadas.map(c => c.numero).join(" "));
    mostrarCartas(cartasBarajadas);
}


function finDePartida() {
    localStorage.removeItem(CLAVE_MEMORIA);
    console.log("Partida finalizada. Memoria borrada.");
}


window.addEventListener("DOMContentLoaded", iniciarJuego);