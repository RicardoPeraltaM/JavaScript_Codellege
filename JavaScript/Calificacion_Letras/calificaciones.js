let boton = document.getElementById("boton");

boton.addEventListener("click", calificacion_letter);

function calificacion_letter() {
  let calificacion = Number(document.getElementById("calificacion").value);
  // alerta
  let alerta = document.getElementById("alerta");

  if (calificacion >= 0 && calificacion <= 10) {
    if (calificacion == 10) {
      alerta.innerHTML = `<div class="text-center alert alert-success mt-3"> Calificacion A: ${calificacion}</div>`;
    } else if (calificacion == 9) {
      alerta.innerHTML = `<div class="text-center alert alert-success mt-3"> Calificacion B: ${calificacion}</div>`;
    } else if (calificacion == 8) {
      alerta.innerHTML = `<div class="text-center alert alert-success mt-3"> Calificacion C: ${calificacion}</div>`;
    }
    //   cambio color alerta
    else if (calificacion == 7 || calificacion == 6) {
      alerta.innerHTML = `<div class="text-center alert alert-info mt-3"> Calificacion D: ${calificacion}</div>`;
    } else {
      alerta.innerHTML = `<div class="text-center alert alert-danger mt-3"> Calificacion F: ${calificacion}</div>`;
    }
  } else {
    alerta.innerHTML = `<div class="text-center alert alert-warning mt-3"> Ingresa una calificacion valida</div>`;
  }
}
