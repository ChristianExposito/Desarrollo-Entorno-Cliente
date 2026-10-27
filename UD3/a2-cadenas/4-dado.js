function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let resultado = aleatorio(1, 6);

console.log("Ha salido un: " + resultado); 