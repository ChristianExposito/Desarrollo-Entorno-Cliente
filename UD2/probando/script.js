let lista = ["ger","chr","def"]


for(let i = 0;i<lista.length;i++){
    console.log(lista[i]);
}

console.log();

let a = "hola , mundo"

for(let i = 0; a.length;i++){
  console.log(a[i])
}
console.log();

let b = "hola , mundo"
let c=b.split(",")
console.log(c)
console.log(b)


let subcadena = cadena.substring(1,5)

let cade = "2, 31; 6, -4"

let resul =cade.split(", ")
console.log(resul)
let resultado2 = []
for(let i = 0;i<resul.length;i++){
    let parcial = console.log(resul[i].split(";"))
    for (let j = 0; j< parcial.length;j++){
        resultado2.push(parcial[j])
    }  
}
console.log(resultado2)