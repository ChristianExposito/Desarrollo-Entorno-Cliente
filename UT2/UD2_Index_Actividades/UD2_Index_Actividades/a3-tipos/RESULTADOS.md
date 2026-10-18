# PUNTO 1 #
| Expresion | Prediccion | Resultado real | Clasificación |
| '5' + 3 | "53" | "53" | Sorprendente |
| '5' - 3 | 2 | 2 | Esperable |
| '5' * '2' | 10 | 10 | Esperable |
| 1 + 2 + '3' | "33" | "33" | Sorprendente |
| '1' + 2 + 3 | "123" | "123" | Sorprendente |
| true + true | 2 | 2 | Sorprendente |
| 'hola' * 2 | NaN | NaN | Esperable |
| null + 1 | 1 | 1 | Sorprendente |
| undefined + 1 | NaN | NaN | Esperable |
| 0.1 + 0.2 === 0.3 | false | false | Sorprendente |
| 10 / 0 | Infinity | Infinity | Esperable |
| '10' < '9' | true | true | Sorprendente |
| 10 < '9' | false | false | Esperable |
| 5 == '5' | true | true | Sorprendente |
| 5 === '5' | false | false | Esperable |
|0 == '' | true | true | Sorprendente |
| '' == '0' | false | false | Esperable |
| null == undefined | true | true | Esperable |
| null === undefined | false | false | Esperable |
| NaN === NaN | false | false | Sorprendente |
| Boolean('false') | true | true | Sorprendente |
| Boolean(0) | false | false | Esperable |
| Boolean('0') | true | true | Sorprendente |
| Boolean([]) | true | true | Sorprendente |
| Number('') | 0 | 0 | Esperable |
| Number(' 12 ') | 12 | 12 | Esperable |
| Number('12px') | NaN | NaN | Esperable |
| parseInt('12px') | 12 | 12 | Esperable |
| parseInt('3.9') | 3 | 3 | Esperable |
| parseFloat('3.9') | 3.9 | 3.9 | Esperable |
 # PUNTO 3 #
42: al ser un número entero todo va bien 
3,5: javaScript no traga la coma tiene que ser un punto
3.5 : este si funciona pero el parseInt solo te deja el 3
12px: number() no lo coge por las letras pero las otras leen el numero 
Cadena vacia: number() la interpreta por defecto como un 0, pero los parse devuelven NaN porque no hay ningún dígito para leer.
Hola: ninguna función sabe qué hacer con eso así que todas devuelven NaN.
Cancelar: al cancelar el prompt, devuelve null. Number() lo transforma en 0, mientras que los parse devuelven NaN.
 # PUNTOP 4 #
pront devuelve lo que escribes pero al poner el +1 lo que hara es concatenar se deberia poner el number() y dentro (prompt('Edad:')) + 1