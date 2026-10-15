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
const minutos = prompt("Cuantos minutos va a entrar")
if(minutos>= 0 && minutos<1440 ){
   console.log("no se puede poner menos de 0 o mas de 1440")
}else{
   console.log("Guardado")
}
let tarifaBase = 0;
if(minutos>15){
   console.log("Es gratis")
}else if(minutos>60){
   console.log("pagas 1,5€")
   tarifaBase = 1,5;
}else if(minutos>180){
   cuenta=minutos-60 
   tiempo=cuenta*0.04
   tarifaBase = tiempo+1.5
   console.log({tarifaBase})
}

const vehiculo = prompt("Que vehiculo va a entrar 'coche','moto' o 'furgoneta'").toLowerCase();

}


// ----- PROGRAMA ----------------------------------------------------------



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
