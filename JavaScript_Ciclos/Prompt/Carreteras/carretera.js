eventListener();

function eventListener() {
  const boton = document.getElementById("boton");
  boton.addEventListener("click", carretera_km);
}

function carretera_km() {
  let ags = 70,
    zacatecas = 150;
  let carretera = true;

  // mientras carretera sea true
  while (carretera) {
    ags++;
    zacatecas--;
    if (ags == zacatecas) {
      carretera = false;
    }
  }

  let alerta_1 = document.getElementById("alerta_1");
  //   puedo imprimir ags o zacatecas igual dara el mismo resultado :)
  alerta_1.innerHTML = `<div class="text-center alert alert-primary"> Se encontraron en el km ${zacatecas}</div>`;
}
