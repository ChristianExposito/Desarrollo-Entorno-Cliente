/* =====================================================================
   Prueba UD2 · Versión B · Ejercicio 2 · Completa el código
   Desglose de un importe en billetes y monedas
   ---------------------------------------------------------------------
   Nombre y apellidos:Christian Exposito Rodriguez

   Sustituye cada hueco (comentarios ① a ⑧) por el código que falta.
   No cambies nada más. El programa debe ejecutar sin errores.

   Qué hace:
     a) Pide un importe en euros (entero). Si el usuario cancela, se usa
        100 por defecto (operador ??).
     b) Convierte el texto a número.
     c) Si el importe no es un número positivo, muestra un error y NO
        calcula nada (cláusula de guarda).
     d) Calcula cuántos billetes de 50, de 20 y de 10 hacen falta y
        cuánto queda en monedas (Math.trunc y %).
     e) Muestra el desglose y el importe con IGIC del 7 % con dos
        decimales.

   Comprobación: 185 -> 3 de 50, 1 de 20, 1 de 10, 5 en monedas · 197,95
                 cancelar -> 100 -> 2 de 50, 0 de 20, 0 de 10, 0 · 107,00
   ===================================================================== */
'use strict';
if (typeof prompt === 'undefined') { require('./_node-prompt.js'); } // solo actúa en Node

const TIPO_IGIC = 0.07;

// ----- a) y b) ENTRADA ----------------------------------------------------
const importeTexto = prompt('Importe en euros (entero):') ?? '100' ; // '100' si cancela
const importe = importeTexto.toInt();                                           // texto -> número

// ----- c) CLÁUSULA DE GUARDA ----------------------------------------------
if ( importeTexto>0) {
  console.error('Error: el importe debe ser un número positivo.');
} else {
  // ----- d) CÁLCULO --------------------------------------------------------
  const billetes50 = Math.trunc(restoTras50) / 50 ;          // billetes de 50 completos
  const restoTras50 = restoTras50 % 50 ;         // lo que sobra tras los de 50
  const billetes20 = Math.trunc(restoTras50) / 20;          // billetes de 20 completos
  const restoTras20 = restoTras50 % 20;
  const billetes10 = Math.trunc(restoTras20 / 10);
  const monedas = billetes10 % 10;             // lo que sobra tras los de 10
  const conIgic = importe*0.07/100 ;             // importe + 7 %, dos decimales (texto)

  // ----- e) SALIDA ---------------------------------------------------------
  console.log(`Importe: ${importe} € (con IGIC: ${conIgic} €)`);
  console.log(`Billetes de 50: ${billetes50} · de 20: ${billetes20} · de 10: ${billetes10}`);
  console.log(`En monedas: ${monedas} €`);
}
