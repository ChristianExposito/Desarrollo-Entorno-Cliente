//JSDOM
/**
 * Analiza los datos de la flota de vehículos, calcula la media de precios,
 * determina el modelo más caro, ejecuta un bucle de mantenimiento y 
 * actualiza tanto la consola como el DOM.
 * @function analizarFlotaVehiculos
 * @returns {void} No devuelve ningún valor directo, imprime y actualiza el DOM.
 */

const v1Nombre = "Opel Astra H";
const v1Año = 2008;
const v1Precio = 3500;
const v1Cv = 105;

const v2Nombre = "Opel Cascada";
const v2Año = 2016;
const v2Precio = 12000;
const v2Cv = 140;

const v3Nombre = "BMW Serie 1";
const v3Año = 2015;
const v3Precio = 11500;
const v3Cv = 150;


function misCoches() {
    // Media de precios
    let precioMedio = (v1Precio + v2Precio + v3Precio) / 3;

    // Determinar el vehiculo más caro 
    let maxPrecio = v1Precio;
    let maxNombre = v1Nombre;

    if (v2Precio > maxPrecio) {
        maxPrecio = v2Precio;
        maxNombre = v2Nombre;
    }
    else if (v3Precio > maxPrecio) {
        maxPrecio = v3Precio;
        maxNombre = v3Nombre;
    }

    //Clasificacion por rangos del Opel Cascada 
    let clasificacionPrecio = "";
    if (v2Precio < 5000) {
        clasificacionPrecio = "Económico";
    } else if (v2Precio <= 10000) {
        clasificacionPrecio = "Gama Media";
    } else {
        clasificacionPrecio = "Gama Alta";
    }
    let cocheElegido = prompt("Introduce el nombre de un coche (Opel Astra H, Opel Cascada o BMW Serie 1");
    let descripcionModelo = "";

    //Switch para elegir un coche
    switch (cocheElegido) {
        case "Opel Astra H":
            descripcionModelo = "Un clasico robusto";
            break;
        case "Opel Cascada":
            descripcionModelo = "Un descapotable";
            break;
        case "BMW Serie 1":
            descripcionModelo = "El bemeta de toda la vida";
            break;
        default:
            descripcionModelo = "No existe ese coche";
    }


    // Mostramos el resultado en la consola
    console.log(`Coche consultado: ${cocheElegido}`);
    console.log(`Descripcion: ${descripcionModelo}`);
    console.log(`Precio medio de los vehiculos: ${precioMedio} €`);
    console.log(`Vehiculo de mayor valor: ${maxNombre} (${maxPrecio} €`)

    console.table({
        Vehiculo1: { Nombre: v1Nombre, Año: v1Año, Precio: v1Precio + " €", CV: v1Cv },
        Vehiculo2: { Nombre: v2Nombre, Año: v2Año, Precio: v2Precio + " €", CV: v2Cv },
        Vehiculo3: { Nombre: v3Nombre, Año: v3Año, Precio: v3Precio + " €", CV: v3Cv }
    });

    // Bucle
    let kilometros = 40000;
    for (let i = 1; i<= 3; i++) {
        kilometros += 15000;
        console.log(`Revisión #${i}: Programada al alcanzar los ${kilometros} km`);
    }

    // 5. Actualización del párrafo #info en la página inicial usando textContent
    let infoParrafo = document.querySelector("#info");
    if (infoParrafo) {
        infoParrafo.textContent = `Resumen de mis coches: Analizados ${v1Nombre}, ${v2Nombre} y ${v3Nombre}. Precio medio: ${precioMedio.toFixed(2)} €. Destaca el ${maxNombre} como el de mayor valor (${maxPrecio} €).`;
    }
}
misCoches();