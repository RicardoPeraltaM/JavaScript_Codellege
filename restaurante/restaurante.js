
const boton = document.getElementById('boton')
boton.addEventListener('click',restaurante)

function restaurante(){
    
let n_personas = Number(document.getElementById('n_personas').value)

const ZonePrint = document.getElementById('ZonePrint')

if (n_personas==1){
    let persona =95;
    // primero una variable en la cual se pone la alerta
    let divImprimir = `<div class="alert alert-success text-center mt-3"> El Precio Total es = ${persona} </div>`;
    // imprimimos en el div la alerta
    ZonePrint.innerHTML=divImprimir;
} 
else if (n_personas>200 && n_personas<=300){
let op = 85*n_personas;
let divImprimir = `<div class="alert alert-success text-center mt-3"> El Precio Total es = ${op} </div>`;
ZonePrint.innerHTML=divImprimir;
}
else if (n_personas>300){
    let op = 75*n_personas;
    let divImprimir = `<div class="alert alert-success text-center mt-3"> El Precio Total es = ${op} </div>`;
    ZonePrint.innerHTML=divImprimir;
}


}