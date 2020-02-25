let boton = document.getElementById("boton");
boton.addEventListener("click", dias_semana);
function dias_semana() {
  let dias_semana = document.getElementById("dias_semana").value;
  //   ALERTA
  let alerta = document.getElementById("alerta");

  alerta.innerHTML = `<div class="text-center alert alert-primary mt-3">El dia es: ${dias_semana}</div>`;
}
