const boton = document.getElementById("boton");
boton.addEventListener("click", calcular_compra);

function calcular_compra() {
  let kilos_uvas = Number(document.getElementById("kilos_uvas").value);
  let tamaño_uvas = document.getElementById("tamaño_uvas").value;
  let tipo_uva = document.getElementById("tipo_uva").value;
  // tipo a
  let TA_1 = 20;
  let TA_2 = 30;
  // tipo b
  let TB_1 = 30;
  let TB_2 = 50;

  // alerta
  const alerta = document.getElementById("total_compra");

  //   si selecciona tipo a y tamaño 1
  if (tipo_uva == "A") {
    if (tamaño_uvas == "tamaño_1") {
      kilos_uvas = kilos_uvas * TA_1;
      alerta.innerHTML = `<div class="text-center alert alert-primary mt-3">El total de compra es: ${kilos_uvas}</div>`;
    }
    if (tamaño_uvas == "tamaño_2") {
      kilos_uvas = kilos_uvas * TA_2;
      alerta.innerHTML = `<div class="text-center alert alert-primary mt-3">El total de compra es: ${kilos_uvas}</div>`;
    }
  }

  if (tipo_uva == "B") {
    if (tamaño_uvas == "tamaño_1") {
      kilos_uvas = kilos_uvas * TB_1;
      alerta.innerHTML = `<div class="text-center alert alert-primary mt-3">El total de compra es: ${kilos_uvas}</div>`;
    }
    if (tamaño_uvas == "tamaño_2") {
      kilos_uvas = kilos_uvas * TB_2;
      alerta.innerHTML = `<div class="text-center alert alert-primary mt-3">El total de compra es: ${kilos_uvas}</div>`;
    }
  }
}
