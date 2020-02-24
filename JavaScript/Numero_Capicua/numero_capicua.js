const boton = document.getElementById("boton");
boton.addEventListener("click", numerocapicua);
function numerocapicua() {
  let numero = Number(document.getElementById("numero").value);
  // alerta
  let alerta = document.getElementById("alerta");


  let  num_inver=0;
  let ayuda_num = numero;
  let resultado =0;
  // MATH FLOOR LO QUE HACE ES REDONDEAR SIEMPRE HACIA ABAJO
  // EL MATH ROUND REDONDEA NORMAL
  while(ayuda_num !=0){
    resultado=Math.floor(ayuda_num%10);
    num_inver=Math.floor(num_inver*10+resultado)
    ayuda_num= Math.floor(ayuda_num/10);
  }
  
  if (numero==num_inver){
    alerta.innerHTML = `<div class="text-center alert alert-success mt-3">El numero es igual inverso</div>`;
  }
  else
  {
    alerta.innerHTML = `<div class="text-center alert alert-warning mt-3">El numero NO es igual inverso</div>`;
  }


}
