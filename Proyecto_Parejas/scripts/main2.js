
function mostrarCartas(cartas) {

    const contenedor = document.getElementById("contenedor");
    cartas = Number(prompt("Introduce el numero de parejas"));
    
    if (isNaN(cartas) || cartas < 4 || cartas > 12) {
        alert("Entrada no valida");
        return; 
    }
        const cartasTotales = cartas *2;
        const ncolumnas = Math.round(Math.sqrt(cartasTotales));

    contenedor.style.gridTempalteColumns = `repeat(${ncolumnas},100px)`;
    contenedor.innerHTML = '';

    let numeroparejas =[];

    for(let i =1;i<= cartas;i++){
        numeroparejas.push({numero:i,descubierta: true})
        numeroparejas.push({numero:i,descubierta: true})
    }
    
     for (let i = 0; i < numeroparejas.length; i++) {
        let div = document.createElement("div");
        div.classList.add("cartas");
        div.textContent = numeroparejas[i].numero;
        
        contenedor.appendChild(div);
    }
}

mostrarCartas();
