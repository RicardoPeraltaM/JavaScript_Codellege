
const boton = document.getElementById('boton')
boton.addEventListener('click',descuento)

function descuento(){

let p_traje = Number(document.getElementById('p_traje').value)

let precio_normal = document.getElementById('precio_normal');
let precio_descuento = document.getElementById('precio_descuento');

if (p_traje>3600){
    
    let descuento = p_traje*.16;
    let precio_final = p_traje-descuento;

    let divImprimir_normal = `<div class="alert alert-warning mt-3 text-center">El precio inicial es: ${p_traje} el descuento es de ${descuento}</div>`
    let divImprimir_descuento = `<div class="alert alert-danger mt-3 text-center"> El precio con descuento es: ${precio_final} </div>`

    precio_normal.innerHTML =divImprimir_normal;
precio_descuento.innerHTML = divImprimir_descuento;

} else{
    let descuento = p_traje*.07;
    let precio_final = p_traje-descuento;

let divImprimir_normal = `<div class="alert alert-primary mt-3 text-center">Precio inicial de un traje de valor ${p_traje} el descuento es de ${descuento} </div>`
    let divImprimir_descuento =`<div class="alert alert-danger mt-3 text-center">El precio con descuento es de ${precio_final} </div>`

    precio_normal.innerHTML=divImprimir_normal
    precio_descuento.innerHTML=divImprimir_descuento  

}


}