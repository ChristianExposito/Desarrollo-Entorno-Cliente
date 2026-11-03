/* =====================================================================
   UD2 · A1 · La consola es tu terminal (CE a, h)
   ---------------------------------------------------------------------
   OBJETIVO: ejecutar JavaScript en los tres entornos (consola del
   navegador, fichero enlazado a una página y Node.js) y comprobar el
   efecto del modo estricto.

   CÓMO EJECUTARLO
     Terminal:   node app.js              (dentro de la carpeta a1-consola)
     VS Code:    abre este fichero y pulsa F5
     Navegador:  enlázalo en el index.html mínimo (<script src="app.js" defer>)
                 y ábrelo con Live Server; el resultado está en la consola (F12)
   ===================================================================== */

'use strict'; // PUNTO 4: prueba a comentar esta línea (ver más abajo)
resultado = 42;
// ---------------------------------------------------------------------
// PUNTO 1 · Evalúa estas expresiones en la consola y anota el resultado
// ---------------------------------------------------------------------
// En clase se escriben una a una en la consola de las DevTools. Aquí las
// dejamos también en el fichero para poder comprobarlas de un vistazo.
console.log('--- Punto 1: expresiones ---');
console.log(2 ** 10);       // 1024      ** es la potencia: 2 elevado a 10
console.log('DAW'.length);  // 3         length = número de caracteres del texto
console.log(typeof 3.5);    // 'number'  no hay tipos distintos para enteros y decimales
console.log(typeof '3.5');  // 'string'  entre comillas es texto, aunque "parezca" un número
console.log(10 / 3);        // 3.3333333333333335  la división NO es entera (en Java, 10/3 es 3)
console.log(10 % 3);        // 1         resto de la división entera
console.log('10' + 3);      // '103'     con un texto, + CONCATENA (convierte el 3 en '3')
console.log('10' - 3);      // 7         - solo sabe restar: convierte '10' en 10

// Plantilla literal: comillas invertidas y ${...} para insertar valores
const nombre = 'Christian';
const anioActual = new Date().getFullYear();
console.log(`Me llamo ${nombre} y estamos en ${anioActual}`);

// ---------------------------------------------------------------------
// PUNTO 2 · Cuatro mensajes con log, warn, error y table, y un grupo
// ---------------------------------------------------------------------
console.log('--- Punto 2: métodos de console ---');
console.log('Mensaje normal con console.log');          // texto sin formato
console.warn('Aviso con console.warn');                 // amarillo, con un triángulo
console.error('Error simulado con console.error');      // rojo, con un aspa (NO detiene el programa)
console.table({ modulo: 'DEW', curso: 2, horas: 6 });   // los datos en forma de tabla
// alert('hola');
console.log('Unidad: UT2 · Sintaxis de JavaScript');    //   estos dos mensajes
console.log('Actividad: A1');                           //   aparecen sangrados
console.groupEnd();                                     // cierra el grupo

// ---------------------------------------------------------------------
// PUNTO 3 · El mismo fichero en Node.js: ¿qué diferencias hay?
// ---------------------------------------------------------------------
// · No hay colores ni iconos: warn y error se ven como texto normal
//   (van a la salida de errores, pero en la terminal no se distinguen).
// · console.table se dibuja con caracteres de texto.
// · console.group solo añade sangría: no se puede plegar.
//
// Quita el comentario de la línea siguiente y ejecuta con Node:
//alert('hola');
//
// Resultado en Node:  ReferenceError: alert is not defined
// Explicación: alert no pertenece al lenguaje JavaScript, sino al
// navegador (es un método del objeto window). Node no tiene ventana, así
// que no lo ofrece. Lo mismo ocurre con prompt y con document.

// ---------------------------------------------------------------------
// PUNTO 4 · Variable no declarada y modo estricto
// ---------------------------------------------------------------------
// Usamos try...catch solo para que el error se muestre sin detener el
// resto del fichero. En el ejercicio del alumnado basta con la asignación.
console.log('--- Punto 4: modo estricto ---');
try {
  resultado = 42; // ¡no hay const, let ni var!
  console.log('Sin modo estricto funciona: resultado =', resultado);
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}
// · CON 'use strict' (como está ahora):
//     ReferenceError: resultado is not defined
// · SIN 'use strict' (comenta la primera línea de código y ejecuta otra vez):
//     funciona y crea una variable GLOBAL sin avisar.
// Para qué sirve: nos protege de las erratas. Si escribimos "resutlado = 50"
// por error, sin modo estricto se crearía otra variable y nadie se enteraría.

// ---------------------------------------------------------------------
// PUNTO 5 · Snippet "pruebas"
// ---------------------------------------------------------------------
// En las DevTools: Sources -> Snippets -> New snippet -> nombre "pruebas".
// Pega el contenido del fichero pruebas-snippet.js y pulsa Ctrl/Cmd + Intro.
