let PorcentajeBono;

// BONO POR ANTIGUEDAD
let boton_antiguedad = document.getElementById("boton_antiguedad");
boton_antiguedad.addEventListener("click", BonoAntiguedad);
function BonoAntiguedad() {
  let años_trabajo = Number(document.getElementById("años_trabajo").value);
  let sueldo = Number(document.getElementById("sueldo").value);

  // ALERTAS
  let alerta_bono_antiguedad = document.getElementById(
    "alerta_bono_antiguedad"
  );

  if (años_trabajo > 2 && años_trabajo < 5) {
    PorcentajeBono = sueldo * 0.2;
    alerta_bono_antiguedad.innerHTML = `<div class="text-center alert alert-primary mt-3">El bono es de: ${PorcentajeBono}</div>`;
  } else if (años_trabajo >= 5) {
    PorcentajeBono = sueldo * 0.3;
    alerta_bono_antiguedad.innerHTML = `<div class="text-center alert alert-primary mt-3">El bono es de: ${PorcentajeBono}</div>`;
  } else {
    alerta_bono_antiguedad.innerHTML = `<div class="text-center alert alert-danger mt-3">No tienes derecho a bono</div>`;
  }
}

