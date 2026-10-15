# Prueba UD2 · Versión B · Respuestas del ejercicio 1

**Christian Exposito Rodriguez**

Rellena la tabla con lo que muestra la consola (o el error que da) y una justificación de una línea con el concepto de la unidad (hoisting, zona muerta temporal, ámbito de bloque, sombreado, coerción, *falsy*, `??`…).

| Fragmento | Salida de la consola (o error) | Justificación |
|-----------|--------------------------------|---------------|
| F1 |        | |
| F2 | | |
| F3 | | |
| F4 | | |
| F5 | | |

# F1 #
for (var i = 0; i < 3; i++) {}
console.log(i);
for (let j = 0; j < 3; j++) {}
console.log(j);
- Uncaught ReferenceError: j is not defined 
- cuando ejecutamos el let j 


# F2 #
let x = 1;
{
console.log(x);
let x = 2;
}
- Cannot access 'x' before initialization
- Asignamos x pero no la imprimimos en el orden correcto si primero asignamos y luego imprimimos dentro de llaves si saldria el valor


# F3 #
const nivel = 'alto';
{
const nivel = 'bajo';
}
console.log(nivel);
nivel = 'medio';
- Assignment to constant variable.
- Pasa lo mismo que antes nivel alto esta fuera de la llaves junto a su console por lo que no podemos acceder a lo que esta dentro de las llaves y la ultima asignacion se hace despues de imprimir


# F4 #
console.log('3' * '4');
console.log('3' + 4 + 5);
console.log(3 + 4 + '5');
- No hay ningun error

- El primero console hace la multipliacion

- El segundo toma el caracter 3 y resuelve console como si el 4 y 5 fueran mas caracter y los une dando 345

- El tercero  suma los numeros 3 y 4 y luego junta el carter 5 y da 75


# F5 #
const nombre = '';
console.log(nombre || 'anónimo');
console.log(nombre ?? 'anónimo');
console.log(null ?? 'anónimo');

- No hay error

-1º console muestra anonimo porque esta imprimiendo la palabra anonimo ya que nombre no contiene nada
-2º el segundo esta imprimiendo nombre que no contiene nada 
