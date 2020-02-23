const boton = document.getElementById("boton");
boton.addEventListener("click", calificaciones);

function calificaciones() {
  // calificaciones
  let c_1 = Number(document.getElementById("c_1").value);
  let c_2 = Number(document.getElementById("c_2").value);
  let c_3 = Number(document.getElementById("c_3").value);
  let c_4 = Number(document.getElementById("c_4").value);
  // alerta
  const alerta = document.getElementById("alerta");
  const alerta2 = document.getElementById("alerta2");

  let promedio;

  if (c_1 < c_2 && c_1 < c_3 && c_1 < c_4) {
    promedio = (c_2 + c_3 + c_4) / 3;
    alerta.innerHTML = `<div class="text-center alert alert-primary mt-3">Promedio: ${promedio}</div>`;
    alerta2.innerHTML = `<div class="text-center alert alert-danger mt-3">La calificacion menor eliminada es: ${c_1}</div>`;
  } else if (c_2 < c_3 && c_2 < c_1 && c_2 < c_4) {
    promedio = (c_1 + c_3 + c_4) / 3;
    alerta.innerHTML = `<div class="text-center alert alert-primary mt-3">Promedio: ${promedio}</div>`;
    alerta2.innerHTML = `<div class="text-center alert alert-danger mt-3">La calificacion menor eliminada es: ${c_2}</div>`;
  } else if (c_3 < c_1 && c_3 < c_2 && c_3 < c_4) {
    promedio = (c_1 + c_2 + c_4) / 3;
    alerta.innerHTML = `<div class="text-center alert alert-primary mt-3">Promedio: ${promedio}</div>`;
    alerta2.innerHTML = `<div class="text-center alert alert-danger mt-3">La calificacion menor eliminada es: ${c_3}</div>`;
  } else {
    promedio = (c_1 + c_2 + c_3) / 3;
    alerta.innerHTML = `<div class="text-center alert alert-primary mt-3">Promedio: ${promedio}</div>`;
    alerta2.innerHTML = `<div class="text-center alert alert-danger mt-3">La calificacion menor eliminada es: ${c_4}</div>`;
  }
}
