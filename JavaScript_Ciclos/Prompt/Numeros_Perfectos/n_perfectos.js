
EventListener();
function EventListener (){
    let boton = document.getElementById('boton');
    boton.addEventListener('click',numeros_perfectos);
}

function numeros_perfectos(){
let alerta = document.getElementById('alerta');
let alert_numero = document.getElementById('alert_numero');
let resultado ;
let suma = 0;
    let numero = Number(prompt('Ingresa numero'));

for(let i =1;i<numero;i++){
resultado = numero%i;
// Si el resultado da 0 se suma
if (resultado==0){
    suma = suma+i;
    console.log(i);
    let li = document.createElement("li");
    li.setAttribute("class","form-group text-center");
    li.innerText = `Numero ${i}`;
    alerta.appendChild(li);
}
}
if (suma==numero){
    // el numero si es perfecto
    console.log("el numero es perfecto")
} else{
    // no es perfecto
    console.log("el numero NO es perfecto")
}
alert_numero.innerText="El numero es "+ numero;

}