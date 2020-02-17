
const boton = document.getElementById('b');
 boton.addEventListener('click',cal)

 function cal (){

let c1 = Number(document.getElementById('c1').value)

const alerta = document.getElementById('alerta')

if (c1>8){

    alerta.innerText="APROBASTE CON " + c1

} else{

    alerta.innerText="REPROBASTE CON " + c1

}

 }