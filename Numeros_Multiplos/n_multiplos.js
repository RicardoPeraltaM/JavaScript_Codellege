const boton = document.getElementById("boton");
boton.addEventListener("click", multiplos);

function multiplos() {
  let n_1 = Number(document.getElementById("n_1").value);
  let n_2 = Number(document.getElementById("n_2").value);

  // alerta
  const alerta = document.getElementById("alerta");

  let restante = Math.floor(n_1 % n_2);

  if (restante == 0) {
    alerta.innerHTML = `<div class="text-center alert alert-warning mt-3">El multiplo de ${n_1} si es ${n_2}</div>`;
  } else {
    alerta.innerHTML = `<div class="text-center alert alert-danger mt-3"> ${n_1} no son multiplos ${n_2}</div>`;
  }
}
