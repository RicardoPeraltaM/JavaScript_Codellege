EventListener();
function EventListener() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", fabricas_produccion);
}
function fabricas_produccion() {
  let n_fabricas = true;
  let anuales = 0;
  let alerta = document.getElementById("alerta");

  while (n_fabricas) {
    let fabrica = Number(
      prompt("Ingresa el numero de la fabrica (identificador)")
    );
    // console.log("fabrica " + fabrica);
    if (fabrica == 0) {
      n_fabricas = false;
    } else {
      for (let i = 1; i <= 2; i++) {
        let mes = Number(prompt("Ingresa venta del mes: "));
        anuales = anuales + mes;
      }
      let li = document.createElement("li");
      li.setAttribute("class", "list-group-item text-center mt-3");
      li.innerText = `La fabrica ${fabrica} total anual = ${anuales}`;
      alerta.appendChild(li);
      // console.log("Venta del mes" + anuales)
    }
  }
}
