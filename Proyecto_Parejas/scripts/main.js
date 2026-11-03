const inputParejas = document.getElementById('parejas');
const boton = document.getElementById('boton');
const contenedor = document.getElementsByClassName('contenedor');
boton.addEventListener('click',() => {
    const numeroDivs = Number(inputParejas);

    if(isNaN(numeroDivs) || numeroDivs<=4 && numeroDivs>=14){
        alert("Introduce un numero valido")
        return;
    }
    contenedor.innerHTML = '';
    
    for(let i = 1;i<= numeroDivs;i++){

    }
}