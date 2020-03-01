EventListener();

function EventListener() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", fibonacci_1);
}

function fibonacci_1 (){
  let a=1,b=0;c=0;
  let numero = Number(prompt('ingresa numero'));

  for (let i=0;i<=numero;i++){
c = a+b;
a=b;
b=c;
// console.log(a);
}
// console.log("numero final = "+a)

let alerta = document.getElementById('alerta');
alerta.innerHTML=`<div class="text-center alert alert-warning mt-3">El numero de fibonacci es ${a}</div>`
}