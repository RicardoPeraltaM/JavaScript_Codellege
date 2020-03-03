EventListener();

function EventListener() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", autos_impuesto);
}

function autos_impuesto() {
  let inicia = true;
  let alerta_autos = document.getElementById("alerta_autos");

  while (inicia) {
    let clave_auto = Number(prompt("Ingresa clave del auto:"));
    if (clave_auto == 0) {
      inicia = false;
    }
    if (clave_auto != 0) {
      let valor_auto = Number(prompt("Ingresa valor del auto:"));
      let li = document.createElement("li");
      li.setAttribute("class", "form-group-items tex-center");
      if (clave_auto == 1) {
        valor_auto = valor_auto * 0.1;
        li.innerText = `El impuesto del auto con clave ${clave_auto} es de: ${valor_auto}`;
      } else if (clave_auto == 2) {
        valor_auto = valor_auto * 0.07;
        li.innerText = `El impuesto del auto con clave ${clave_auto} es de: ${valor_auto}`;
      } else if (clave_auto == 3) {
        valor_auto = valor_auto * 0.05;
        li.innerText = `El impuesto del auto con clave ${clave_auto} es de: ${valor_auto}`;
      }
      alerta_autos.appendChild(li);
    }
  }
}
