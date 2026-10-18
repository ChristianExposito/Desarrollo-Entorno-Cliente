let segundos = Number(prompt("introduce los segundos"));
let horas = Math.trunc(totalSegundos/3600);
let resto = totalSegundos % 3600;
let minutos = Math.trunc(resto / 60);
let segundo = resto % 60;
let tiempo = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;

console.log(`${segundos} son ${tiempo}`);