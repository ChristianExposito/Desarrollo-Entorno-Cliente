/* =====================================================================
   Prueba UD2 · Versión B · Ejercicio 3 · Escribe una función
   Coste de un aparcamiento
   ---------------------------------------------------------------------
   Nombre y apellidos: Christian Exposito

   Escribe aquí la función costeAparcamiento(minutos, vehiculo) y el
   programa que la usa, según el enunciado. Documenta la función con JSDoc.
   ===================================================================== */
'use strict';
if (typeof prompt === 'undefined') { require('./_node-prompt.js'); } // solo actúa en Node

// ----- FUNCIÓN -----------------------------------------------------------
function costeAparcamiento(minutos,vehiculo){
<<<<<<< HEAD

const tipo = vehiculo.trim().toLowerCase();
  if (tipo !== 'coche' && tipo !== 'moto' && tipo !== 'furgoneta') return null;

if (isNaN(minutos) || minutos<= 0 && minutos>1440){
=======
const tipoVehiculo = typeof vehiculo === 'string' ? vehiculo.trim().toLowerCase() : '';
const vehiculoValido = ['coche', 'moto', 'furgoneta'].includes(tipoVehiculo);
if(isNaN(minutos) || minutos < 0 || minutos > 1440 ){
>>>>>>> d122cd49b148fb1d9df7e75d11a77d82669a6c18
   console.log("no se puede poner menos de 0 o mas de 1440")
   return;
}else{
   console.log("Guardado")
}
let tarifaBase = 0;
<<<<<<< HEAD
if(minutos<15){
=======
if(minutos<=15){
>>>>>>> d122cd49b148fb1d9df7e75d11a77d82669a6c18
   console.log("Es gratis")
}else if(minutos<=60){
   console.log("pagas 1,5€")
   tarifaBase = 1.5;
}else if(minutos<=180)
{
   let cuenta=minutos-60;
   let tiempo=cuenta*0.04;
   tarifaBase = tiempo+1.5;
   console.log({tarifaBase});
}else{
   return 7.0;
   console.log("Tarifa máxima aplicada");
}
let multiplicador = 1;
switch(tipoVehiculo){
   case 'coche':
      multiplicador = 1;
      break;
   case 'moto':
      multiplicador = 0.5;
      break;
   case 'furgoneta':
      multiplicador = 1.5;
      break;
}
return tarifaBase * multiplicador;
}


// ----- PROGRAMA ----------------------------------------------------------
<<<<<<< HEAD
const minutos = Number(prompt("Cuantos minutos va a entrar"));
const entradaVehiculo = prompt("¿Qué tipo de vehículo es? ('coche', 'moto' o 'furgoneta')");

const costeFinal = costeAparcamiento(minutos,entradaVehiculo);

if (costeFinal !== null){
    alert(`El coste total del aparcamiento es: ${costeFinal}€`);
}
=======
const entradaMinutos = prompt('Introduce los minutos (0 - 1440):');
const entradaVehiculo = prompt('Introduce el vehículo (coche, moto, furgoneta):');

// Si el usuario cancela (devuelve null), asignamos valores que invaliden la entrada
const minutosNum = entradaMinutos !== null ? Number(entradaMinutos) : null;
const vehiculoStr = entradaVehiculo !== null ? entradaVehiculo : '';

const coste = costeAparcamiento(minutosNum, vehiculoStr);

// Muestra el resultado con un operador ternario

const resultadoFinal = `Coste del aparcamiento: ${coste.toFixed(2)} €`;

console.log(resultadoFinal);
>>>>>>> d122cd49b148fb1d9df7e75d11a77d82669a6c18

/* ---------------------------------------------------------------------
   CASOS DE PRUEBA (rellena la columna «obtenido» tras ejecutar)
   minutos | vehiculo     | esperado | obtenido
   --------|--------------|----------|---------
   10      | coche        | 0.00     |
   60      | ' Moto '     | 0.75     |
   90      | coche        | 2.70     |
   200     | furgoneta    | 10.50    |
   1500    | coche        | null     |
   30      | bici         | null     |
   --------------------------------------------------------------------- */
