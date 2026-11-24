const CLAVE_MEMORIA = "memoria";
const CONFIG_PREDEFINIDA = {
    parejas: 8
};

let mazo = [];
let contador = 0;

// CLASE CARTA
class Carta {
    #numero;
    #descubierta;

    constructor(numero, descubierta = false) {
        this.#numero = numero;
        this.#descubierta = Boolean(descubierta);
    }

    get numero() {
        return this.#numero;
    }

    set numero(valor) {
        this.#numero = valor;
    }

    get descubierta() {
        return this.#descubierta;
    }

    set descubierta(valor) {
        this.#descubierta = Boolean(valor);
    }
    // Convierte la carta en un objeto
    aObjeto() {
        return {
            numero: this.#numero,
            descubierta: this.#descubierta
        };
    }
    // Crea una carta usando un objeto guardado
    static desdeObjeto(obj) {
        return new Carta(obj.numero, obj.descubierta);
    }
    
    
    // Da la vuelta a la carta
    voltear() {
        this.#descubierta = !this.#descubierta;
    }
}


// PREGUNTAMOS CUANTAS PAREJAS QUEREMOS
function configurarPartida() {
    const entrada = prompt("Introduce el número de parejas (entre 4 y 12):");
    const parejas = Number(entrada);

    if (entrada === null || entrada.trim() === "" || isNaN(parejas) || parejas < 4 || parejas > 12) {
        return CONFIG_PREDEFINIDA.parejas;
    }

    return parejas;
}

// CREAMOS LAS CARTAS
function generarCartas(numParejas) {
    const cartas = [];
    for (let i = 1; i <= numParejas; i++) {
        cartas.push(new Carta(i, false));
        cartas.push(new Carta(i, false));
    }
    return cartas;
}
// MEZCLAMOS LAS CARTAS
function barajar(arrayCartas) {
    for (let i = arrayCartas.length - 1; i > 0; i--) {
        const aleatorio = Math.floor(Math.random() * (i + 1));
        [arrayCartas[i], arrayCartas[aleatorio]] = [arrayCartas[aleatorio], arrayCartas[i]];
    }
    return arrayCartas;
}
// MOSTRAMOS LAS CARTAS
function mostrarCartas(cartas) {
    const tablero = document.getElementById("tablero");
    if (!tablero) {
        console.error("No se encontró el elemento con id 'tablero'.");
        return;
    }

    tablero.innerHTML = "";

    for (const carta of cartas) {
        const div = document.createElement("div");
        div.className = "carta";
        div.textContent = carta.descubierta ? carta.numero : "x";
        tablero.appendChild(div);
    }
}
// GUARDAMOS LA PARTIDA
function guardarProgreso(cartas) {
    const datos = cartas.map(carta => carta.aObjeto());
    localStorage.setItem(CLAVE_MEMORIA, JSON.stringify(datos));
}
// VOLTEAMOS UNA CARTA
function voltearCarta(numero) {
    const indice = numero - 1;
    const carta = mazo[indice];

    if (!carta) {
        console.log("Esa carta no existe");
        return;
    }

    // Si la carta ya está descubierta, no hacemos nada
    if (carta.descubierta) {
        return;
    }

    carta.voltear();
    contador++;

    guardarProgreso(mazo);
    mostrarCartas(mazo);
    mostrarContador();

    console.log(`Carta ${numero} -> número: ${carta.numero} (volteos: ${contador})`);
}
// MOSTRAMOS EL CONTADOR
function mostrarContador(){
    const elementoContador = document.querySelector(".contador");
    elementoContador.textContent = `${contador}`;
}
// INICIAMOS EL JUEGO
function iniciarJuego() {
    const partidaGuardada = localStorage.getItem(CLAVE_MEMORIA);

    if (partidaGuardada) {
        const datos = JSON.parse(partidaGuardada);
        mazo = datos.map(obj => Carta.desdeObjeto(obj));
    } else {
        const numParejas = configurarPartida();
        const cartas = generarCartas(numParejas);
        mazo = barajar(cartas);
        guardarProgreso(mazo);

        const numeros = mazo.map(carta => carta.numero);
        console.log("Orden secreto:", numeros.join(" "));
    }

    mostrarCartas(mazo);
    mostrarContador();
}
//BORRAR PARTIDA
function fin() {
    localStorage.removeItem(CLAVE_MEMORIA);
    contador = 0;
    console.log("Partida borrada de localStorage.");
}
// EMPEZAMOS CUANDO SE CARGA LA PÁGINA
window.addEventListener("DOMContentLoaded", iniciarJuego);
