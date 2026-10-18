let km = Number(prompt("Introduce una cantidad de kilometros"));
let metros = km * 1000;
let millas = km *0.621371;
let millasNauticas =  km * 0.539957;

console.log(`${km} son ${metros}m, ${km} a millas son ${millas} y ${km} a millas nauticas son ${millasNauticas}`);

let  celsius = Number(prompt("introduce grados celsius"));
let fahrenheit = (celsius * 9/5) + 32;
let kelvin = celsius + 273.15;

console.log(`${celsius} equivale a ${fahrenheit} y kelvin ${kelvin}`)