  
let boton = document.getElementById("boton");
boton.addEventListener("click", alrevez);

function alrevez() {
  let numero = Number(document.getElementById("numero").value);
  // alerta
  const alerta = document.getElementById("alerta");

  if (numero > 99 && numero < 1000) {
    // coloco el math round para que el numero que salga lo redonde al valor mas cercano
    let centenas = Math.round(numero / 100);
 
    //   saco unidades
    let unidades = Math.round((numero %100) %10);

    // console.log(unidades);
    // console.log(centenas);

    if (centenas == unidades) {
      alerta.innerHTML = `<div class="text-center alert alert-success mt-3">El numero es igual inverso</div>`;
    } else {
      alerta.innerHTML = `<div class="text-center alert alert-warning mt-3">El numero NO es igual inverso</div>`;
    }
  } else {
    alerta.innerHTML = `<div class="text-center alert alert-dark mt-3">Ingresa un numero con 3 digitos</div>`;
  }
}