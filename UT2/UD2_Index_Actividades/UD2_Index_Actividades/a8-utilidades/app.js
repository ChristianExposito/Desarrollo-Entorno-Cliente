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
function generadorSeries() { //Funcion hecha por IA
    let opcion = pedirNumero('Elige: 1 para Tabla, 2 para Fibonacci, 3 para Primos');
    if (opcion === null) return;

    if (opcion === 1) {
        let n = pedirNumero('Que tabla quieres ver?');
        if (n !== null) {
            console.log("Tabla del " + n);
            for (let i = 1; i <= 10; i++) {
                console.log(n + " x " + i + " = " + (n * i));
            }
        }
    } else if (opcion === 2) {
        let cant = pedirNumero('Cuantos numeros de Fibonacci quieres?');
        if (cant !== null) {
            let a = 0;
            let b = 1;
            let arrayFib = [];
            for (let i = 0; i < cant; i++) {
                arrayFib.push(a);
                let aux = a + b;
                a = b;
                b = aux;
            }
            console.log("Fibonacci: " + arrayFib.join(', '));
        }
    } else if (opcion === 3) {
        let limite = pedirNumero('Buscar primos hasta el numero:');
        if (limite !== null) {
            let listaPrimos = [];
            for (let i = 2; i <= limite; i++) {
                let esPrimo = true;
                for (let j = 2; j < i; j++) {
                    if (i % j === 0) {
                        esPrimo = false;
                        break;
                    }
                }
                if (esPrimo) {
                    listaPrimos.push(i);
                }
            }
            console.log("Primos encontrados: " + listaPrimos.join(', '));
        }
    }
}

function estadisticasLista() {
    let numeros = [];
    let n;

    do {
        n = pedirNumero('Mete un numero (pon 0 para terminar):');
        if (n !== null && n !== 0) {
            numeros.push(n);
        }
    } while (n !== 0 && n !== null);

    if (numeros.length === 0) {
        console.log('No se metio ningun numero.');
        return;
    }

    let suma = 0;
    let max = numeros[0];
    let min = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
        if (numeros[i] > max) max = numeros[i];
        if (numeros[i] < min) min = numeros[i];
    }

    let media = suma / numeros.length;
    console.log("Lista: " + numeros.join(', '));
    console.log("Suma total: " + suma + " | Media: " + media + " | Max: " + max + " | Min: " + min);
}

function adivinaElNumero() {
    let secreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let encontrado = false;

    console.log("Juego de adivinar el numero (1 al 100)");

    while (!encontrado) {
        let intentoUser = pedirNumero("Dime un numero:");
        if (intentoUser === null) {
            console.log("Juego cancelado.");
            break;
        }

        intentos++;
        if (intentoUser === secreto) {
            encontrado = true;
            console.log("Has ganado! El numero era " + secreto + ". Intentos: " + intentos);
        } else if (intentoUser < secreto) {
            alert("El numero secreto es mayor.");
        } else {
            alert("El numero secreto es menor.");
        }
    }
}

function juegoVidaCuenta() {
    let saldo = pedirNumero('Dinero ahorrado al empezar (€):');
    if (saldo === null) return;

    let ingreso = pedirNumero('Cuanto ingresas al mes (€):');
    if (ingreso === null) return;

    let gasto = pedirNumero('Cuanto gastas al mes (€):');
    if (gasto === null) return;

    let meses = pedirNumero('Cuantos meses quieres simular?');
    if (meses === null) return;

    let mesEnRojos = null;

    for (let mes = 1; mes <= meses; mes++) {
        saldo = saldo + ingreso - gasto;
        if (saldo < 0 && mesEnRojos === null) {
            mesEnRojos = mes;
        }
    }

    if (mesEnRojos !== null) {
        console.log("Cuidado! Te quedas en numeros rojos en el mes " + mesEnRojos + ". Saldo final: " + saldo + "€");
    } else {
        console.log("Sobreviviste! Saldo final tras " + meses + " meses: " + saldo + "€");
    }
}

function menu() {
    let opcion = -1;

    do {
        let textoMenu = "MENU PRINCIPAL: 1.Conversor | 2.IMC | 3.IGIC | 4.Notas | 5.Series | 6.Estadisticas | 7.Adivinar | 8.Banco | 0.Salir";

        opcion = pedirNumero(textoMenu);

        if (opcion === null || opcion === 0) {
            console.log('Saliendo del programa...');
            break;
        }

        if (opcion === 1) {
            conversorUnidades();
        } else if (opcion === 2) {
            calculadoraIMC();
        } else if (opcion === 3) {
            precioConIgic();
        } else if (opcion === 4) {
            calificacionNota();
        } else if (opcion === 5) {
            generadorSeries();
        } else if (opcion === 6) {
            estadisticasLista();
        } else if (opcion === 7) {
            adivinaElNumero();
        } else if (opcion === 8) {
            juegoVidaCuenta();
        } else {
            alert('Esa opcion no existe');
        }
    } while (opcion !== 0);
}

menu();
