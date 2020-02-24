const boton = document.getElementById("boton");
boton.addEventListener("click", seguro_calcular);

function seguro_calcular() {
  let tipo_poliza = document.getElementById("tipo_poliza").value;
  let plan_seguro = Number(document.getElementById("plan_seguro").value);
  // ALERTA
  let alerta_precio_poliza = document.getElementById("alerta_precio_poliza");
  let alerta_precio_total = document.getElementById("alerta_precio_total");
  let descuento = document.getElementById("descuento");

  let precio_A = 1200;
  let precio_B = 950;
  let des = 0;

  if (tipo_poliza == "A") {
    alerta_precio_poliza.innerHTML = `<div class="text-center alert alert-warning ml-5 mt-3">El precio del plan A es: ${precio_A}</div>`;
    des = precio_A * plan_seguro;
    plan_seguro = precio_A - des;
    alerta_precio_total.innerHTML = `<div class="text-center alert alert-dark mt-3">El precio final del seguro es = ${plan_seguro}</div>`;
    descuento.innerHTML = `<div class="text-center alert alert-danger mt-3">El descuento fue de= ${des}</div>`;
  } else if (tipo_poliza == "B") {
    alerta_precio_poliza.innerHTML = `<div class="text-center alert alert-warning ml-5 mt-3">El precio del plan A es: ${precio_B}</div>`;
    des = precio_B * plan_seguro;
    plan_seguro = precio_B - des;
    alerta_precio_total.innerHTML = `<div class="text-center alert alert-dark mt-3">El precio final del seguro es = ${plan_seguro}</div>`;
    descuento.innerHTML = `<div class="text-center alert alert-danger mt-3">El descuento fue de= ${des}</div>`;
  }
}
