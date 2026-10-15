// Fragmento 1
console.log(a);
var a = 5;
console.log(a);

// Fragmento 2
console.log(b);
let b = 5;

// Fragmento 3
const c = 1;
c = 2;

// Fragmento 4
if (true) {
  var d = 'var';
  let e = 'let';
}
console.log(d);
console.log(e);

// Fragmento 5
for (var i = 0; i < 3; i++) {}
for (let j = 0; j < 3; j++) {}
console.log(i);
console.log(j);

// Fragmento 6
const nivel = 'exterior';
{
  const nivel = 'interior';
  console.log(nivel);
}
console.log(nivel);

// Fragmento 7
let x = 1;
{
  console.log(x);
  let x = 2;
}

// Fragmento 8
function calcular() {
  const secreto = 42;
  return secreto * 2;
}
console.log(calcular());
console.log(secreto);