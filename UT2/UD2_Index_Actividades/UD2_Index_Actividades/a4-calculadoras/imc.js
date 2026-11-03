let peso = Number(prompt("Introduce tu peso"));
let altura = Number(prompt("Introduce tu altura"));
let alturaMetros = altura / 100
let imc = peso / (alturaMetros ** 2);

console.log(`peso: ${peso} kg | altura: ${altura} cm da ${imc.toFixed(1)}`);