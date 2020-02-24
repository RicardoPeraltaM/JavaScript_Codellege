let boton = document.getElementById("boton");
boton.addEventListener("click", paqueteria_cot);

function paqueteria_cot() {
  let destinos = Number(document.getElementById("destinos").value);
  let peso_paquete = Number(document.getElementById("peso_paquete").value);
  let alerta = document.getElementById("alerta");

  if (peso_paquete < 5) {
    alerta.innerHTML = `<div class="text-center alert alert-danger mt-3"> PESO DEL PAQUETE NO VALIDO</div>`;
  } else {
    peso_paquete = peso_paquete * 1000;
    destinos = destinos * peso_paquete;
    alerta.innerHTML = `<div class="text-center alert alert-primary mt-3">El total por enviar el producto es de ${destinos}</div>`;
  }
}
