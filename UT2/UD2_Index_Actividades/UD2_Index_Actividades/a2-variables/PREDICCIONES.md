# Fragmento 1
console.log(a);
var a = 5;
console.log(a);
prediccion: muestra undefined y luego 5 porque el primer log no contiene nada y el segundo si

# Fragmento 2
console.log(b);
let b = 5;
prediccion: error de inicializacion y cuando imprimes b no tiene nada
# Fragmento 3
const c = 1;
c = 2;
prediccion: la varible es const por lo que no se puede cambiar su tipo
# Fragmento 4
if (true) {
  var d = 'var';
  let e = 'let';
}
console.log(d);
console.log(e);
prediccion: muestra 'var' pero e da error porque let no puede ser usada fuera de las llaves se pierde
# Fragmento 5
for (var i = 0; i < 3; i++) {}
for (let j = 0; j < 3; j++) {}
console.log(i);
console.log(j);
prediccion: muestra 3 y j da error  es lo mismo que el fragmento 4
# Fragmento 6
const nivel = 'exterior';
{
  const nivel = 'interior';
  console.log(nivel);
}
console.log(nivel);
prediccion: imprimira interior y luego exterior  
# Fragmento 7
let x = 1;
{
  console.log(x);
  let x = 2;
}
prediccion:el uso de let es un para un uso temportal por lo que x no se monstrara con el console y dara error de inicializacion
# Fragmento 8
function calcular() {
  const secreto = 42;
  return secreto * 2;
}
console.log(calcular());
console.log(secreto);
prediccion:la funcion se ejecuta y saldra 84 pero el log de secreto da error por que no conoce secreto