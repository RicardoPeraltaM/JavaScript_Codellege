EventListener();

function EventListener() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", calcular_ahorro);
}

function calcular_ahorro() {
  let dia = 27;
  let alerta = document.getElementById("alerta");
  //   inicia en 362 por que ya llevaba ahorrados 3 dias
  for (let i = 1; i <= 362; i++) {
    dia = dia * 3;
    // Imprimo en consola cuanto ahorro cada dia
    console.log(dia);
  }
  //   El ahorro final
  alerta.innerHTML = `<div class="text-center alert alert-danger">El ahorro fina es de : ${dia}</div>`;
  console.log("el resultado final es: " + dia);
}
