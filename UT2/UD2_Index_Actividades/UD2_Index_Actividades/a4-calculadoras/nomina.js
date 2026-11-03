let brutoAnual = Number(prompt("introduce el salario bruto anual"));
let pagas = Number(prompt("introduce el número de pagas"));

let brutoMensual = brutoAnual / pagas;
let irpf = brutoMensual * 0.15;
let seguridadSocial = brutoMensual * 0.0647;
let netoMensual = brutoMensual - irpf - seguridadSocial;

let datosNomina = [
    { Concepto: "Salario Bruto Mensual", Importe: brutoMensual+ " €" },
    { Concepto: "Retención IRPF (15%)", Importe: irpf+ " €" },
    { Concepto: "Seguridad Social (6.47%)", Importe: seguridadSocial + " €" },
    { Concepto: "Salario Neto Mensual", Importe: netoMensual + " €" }
];
console.table(datosNomina);