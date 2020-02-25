let dias ;
let hotel = 980;
let comida = 500;

let boton = document.getElementById('boton')
boton.addEventListener('click',cheque)

function cheque (){
dias= Number(document.getElementById('dias').value)

let chequesito = (dias*hotel)+(dias*comida)+(dias*100)
// console.log(chequesito)

let alarma = document.getElementById('alerta')
alarma.innerText="El monto del cheque correspondiente es: "+chequesito
}