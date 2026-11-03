# 1 #
let vs const: let permite cambiar el valor después const es fijo y no se puede reasignar En un for let crea una variable nueva para cada vuelta mientras que var usa la misma fuera del bucle
# 2 #
console.log(x); let x = 3;: Da error porque entra en la zona muerta temporal Con var no da error muestra undefined por el hoisting
# 3 #
Operaciones:
'3' + 4 + 5 -> "345" concatena todo de izquierda a derecha
3 + 4 + '5' -> "75" suma 3+4 y luego concatena el string
'3' * '4' -> 12 convierte ambos a número por la multiplicación
# 4 #
Los siete falsy: false, 0, -0, 0n, "", null, undefined, NaN. El valor '0' es truthy porque es un string con contenido
# 5 #
Por qué 0.1 + 0.2 === 0.3 es false: Por cómo redondea JavaScript los decimales en binario dando 0.30000000000000004. Para comprobar si algo es NaN se usa Number.isNaN(val)
# 6 #
== vs ===: == convierte los tipos antes de comparar === exige que sean idénticos en valor y tipo. Ejemplo: 5 == '5' es true, pero 5 === '5' es false
# 7 #
0 || 10 vs 0 ?? 10: El primero devuelve 10 porque el 0 cuenta como falso para el OR. El segundo devuelve 0 porque el operador de fusión nula (??) solo salta si hay null o undefined. Usa || para valores por defecto generales y ?? cuando el 0 o "" sí sean datos válidos
# 8 #
Switch con prompt: No entra en case 1: porque el prompt devuelve siempre un string ("1") y el switch hace comparación estricta (===)
# 9 #
Olvidar el break: Provoca que el código siga ejecutándose hacia abajo . Se hace a propósito cuando quieres que varios casos hagan exactamente lo mismo
# 10 #
Bucles: Para pedir clave hasta acertar, un do...while. Para recorrer las letras de una palabra
# 11 #
Condición while sin break:
while (n < 1 || n > 10 || Number.isNaN(n)) {
    // pedir de nuevo
}
# 12 #
Error de ejecución vs lógico: El de ejecución te peta la aplicación o te lanza fallo en la consola (como intentar leer algo sobre null). El lógico no da ningún error técnico, el programa corre pero los cálculos o los resultados están mal.
Herramientas: Consola de errores para ejecuciones petadas; puntos de interrupción (breakpoints) en DevTools para seguir las variables en los fallos lógicos
# 13 #
Step over vs Step into: Step over pasa a la siguiente línea de código saltándose el interior de las funciones que llame esa línea. Step into se mete dentro de la función que se ejecuta en esa línea para ver paso a paso lo que hace
# 14 #
ESLint vs Prettier: ESLint busca fallos de código, variables sin usar o malas prácticas. Prettier solo arregla el aspecto visual 
# 15 #
Comentario JSDoc para esBisiesto(año):
/**
 * Comprueba si un año es bisiesto.
 * @param {number} anio - Año a comprobar.
 * @returns {boolean} True si es bisiesto, false en caso contrario.
 */