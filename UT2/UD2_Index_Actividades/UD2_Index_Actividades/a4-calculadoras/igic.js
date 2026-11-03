function precioConIgic(base, tipo) {
    let impuesto = base * (tipo / 100);
    let total = base + impuesto;
    return {
        impuesto: Number(impuesto),
        total: Number(total)
    };
}

let precioBase = Number(prompt("introduce el precio sin impuestos:"));
let entradaIgic = prompt("introduce el tipo de IGIC si cancelas se pondra el 7% :");
let tipoIgic = Number(entradaIgic ?? 7);
if (entradaIgic === null || entradaIgic === "") {
    tipoIgic = 7;
}

let resultado = precioConIgic(precioBase, tipoIgic);

console.log(`Importe del impuesto: ${resultado.impuesto} €`);
console.log(`Total con IGIC: ${resultado.total} €`);