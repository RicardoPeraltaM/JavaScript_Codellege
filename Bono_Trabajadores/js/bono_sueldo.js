// BONO POR SUELDO

let boton_sueldo_bono = document.getElementById("boton_sueldo_bono");
boton_sueldo_bono.addEventListener("click", bono_sueldo);

function bono_sueldo() {
  let sueldo = Number(document.getElementById("sueldo").value);
  // ALERTA
  let alerta_sueldo_bono = document.getElementById("alerta_sueldo_bono");

  let PorcentajeBono;

  if (sueldo < 1000) {
    PorcentajeBono = sueldo * 0.25;
    alerta_sueldo_bono.innerHTML = `<div class="text-center alert alert-warning">El bono es de: ${PorcentajeBono}</div>`;
  }

  if (sueldo > 1000 && sueldo <= 3500) {
    PorcentajeBono = sueldo * 0.15;
    alerta_sueldo_bono.innerHTML = `<div class="text-center alert alert-warning">El bono es de: ${PorcentajeBono}</div>`;
  }

  if (sueldo > 3500) {
    PorcentajeBono = sueldo * 0.1;
    alerta_sueldo_bono.innerHTML = `<div class="text-center alert alert-warning">El bono es de: ${PorcentajeBono}</div>`;
  }
}
