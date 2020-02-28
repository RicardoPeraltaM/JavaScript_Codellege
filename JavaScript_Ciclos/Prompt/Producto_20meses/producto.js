eventListener();

function eventListener() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", calcular_final);
}

function calcular_final() {
  let meses = 40;
  for (let i = 1; i <= 17; i++) {
    meses = meses * 2;
  }
  let alerta = document.getElementById("alerta");
  alerta.innerHTML = `<div class="text-center alert alert-warning mt-3"> El pago final del producto es: ${meses}</div>`;
}
