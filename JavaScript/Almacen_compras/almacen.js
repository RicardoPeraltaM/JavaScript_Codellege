
const boton = document.getElementById('boton');
boton.addEventListener('click',descuento)

function descuento (){
    let compra = Number(document.getElementById('compra').value)

    const alerta = document.getElementById('alerta')
    if (compra>1000){
 let d = compra * .20;
compra = compra-d;
alerta.innerText="El total de compra con descuento es "+compra
    } else{
        alerta.innerText="El total de compra es "+compra

    }
}