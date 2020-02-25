  
let boton = document.getElementById("boton");
boton.addEventListener("click", alrevez);

function alrevez() {
  let numero = Number(document.getElementById("numero").value);
  // alerta
  const alerta = document.getElementById("alerta");

let  num_inver=0;
let ayuda_num = numero;
let resultado =0;

while(ayuda_num !=0){
  resultado=Math.round(ayuda_num%10);
  ayuda_num= Math.round(ayuda_num/10);
  num_inver=Math.round(num_inver*10+resultado)
}
if (numero>99 && numero<1000){

  if (numero==num_inver){
    alerta.innerHTML = `<div class="text-center alert alert-success mt-3">El numero es igual inverso</div>`;
  }
  else
  {
    alerta.innerHTML = `<div class="text-center alert alert-warning mt-3">El numero NO es igual inverso</div>`;
  }
} else{
  alerta.innerHTML = `<div class="text-center alert alert-warning mt-3">Ingresa un numero con 3 digitos</div>`;

}

}