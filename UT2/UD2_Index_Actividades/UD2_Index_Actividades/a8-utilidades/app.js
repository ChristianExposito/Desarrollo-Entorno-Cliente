'use strict';

function pedirNumero(mensaje) {
    let entrada = prompt(mensaje);
    while (entrada !== null) {
        if (entrada.trim() !== '' && !Number.isNaN(Number(entrada))) {
            return Number(entrada);
        } else {
            entrada = prompt("Eso no es un numero valido. " + mensaje);
        }
    }
    return null;
}

function conversorUnidades() {
    let tipo = pedirNumero('Elige una opcion: 1. km a metros/millas ---2. C a F/K -----3. Segundos a horas/min/seg');
    if (tipo === null) return;

    if (tipo === 1) {
        let km = pedirNumero('Introduce los kilometros:');
        if (km !== null) {
            let m = km * 1000;
            let mi = km * 0.621371;
            console.log(km + " km son " + m + " metros y " + mi + " millas.");
        }
    } else if (tipo === 2) {
        let c = pedirNumero('Introduce los grados Celsius:');
        if (c !== null) {
            let f = (c * 9/5) + 32;
            let k = c + 273.15;
            console.log(c + " C son " + f + " F y " + k + " K");
        }
    } else if (tipo === 3) {
        let seg = pedirNumero('Introduce los segundos:');
        if (seg !== null) {
            let h = Math.trunc(seg / 3600);
            let m = Math.trunc((seg % 3600) / 60);
            let s = Math.trunc(seg % 60);
            console.log("Tiempo: " + h + "h " + m + "m " + s + "s");
        }
    } else {
        alert('Opcion mal elegida');
    }
}

function calculadoraIMC() {
    let peso = pedirNumero('Cuanto pesas? (kg):');
    if (peso === null) return;

    let alturaCm = pedirNumero('Cuanto mides de altura? (en cm, ej: 175):');
    if (alturaCm === null) return;

    let alturaM = alturaCm / 100;
    let imc = peso / (alturaM * alturaM);

    let mensajeEstado = "";
    if (imc < 18.5) {
        mensajeEstado = "Bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
        mensajeEstado = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        mensajeEstado = "Sobrepeso";
    } else {
        mensajeEstado = "Obesidad";
    }

    console.log("Tu IMC es " + imc + " -> " + mensajeEstado);
}

function precioConIgic() {
    let base = pedirNumero('Introduce el precio sin IVA/IGIC:');
    if (base === null) return;

    let tipoIGIC = prompt('Introduce el % de IGIC (si lo dejas en blanco se aplica el 7%):');
    
    let porc = Number(tipoIGIC);
    if (tipoIGIC === null || tipoIGIC.trim() === '') {
        porc = 7;
    }

    let impuesto = base * (porc / 100);
    let total = base + impuesto;

    console.log("Base: " + base + "€ | IGIC (" + porc + "%): " + impuesto + "€ | Total a pagar: " + total + "€");
}

function calificacionNota() {
    let nota = pedirNumero('Introduce la nota del examen 0 al 10:');
    
    if (nota === null || nota < 0 || nota > 10) {
        console.log('Nota invalida o cancelada.');
        return;
    }

    let res = '';
    if (nota < 5) {
        res = 'Suspenso';
    } else if (nota >= 5 && nota < 6) {
        res = 'Aprobado raspado';
    } else if (nota >= 6 && nota < 7) {
        res = 'Bien';
    } else if (nota >= 7 && nota < 9) {
        res = 'Notable';
    } else if (nota < 10) {
        res = 'Sobresaliente';
    } else {
        res = 'Matricula de Honor';
    }

    console.log("Nota introducida: " + nota + " -> " + res);
}
