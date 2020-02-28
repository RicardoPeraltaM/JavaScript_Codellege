EventListener();

function EventListener() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", ulam_fun);
}
function ulam_fun() {
  let alerta = document.getElementById("alerta");
  let continuar = true;
  let numero = Number(prompt("Ingresa un numero entero positivo:"));
  while (continuar) {
    if (numero <= 0) {
      alerta.innerHTML = `<div class="text-center alert alert-danger mt-3"> Te dije que ingresaras un numero positivo entero pendejo</div>`;
    }
    // Comparo si el numero es par
    if (numero % 2 == 0) {
      numero = numero / 2;
      alerta.innerHTML = `<div class="text-center alert alert-primary mt-3">El numero es par resultado: ${numero}</div>`;
    } else if (numero % 2 != 0) {
      numero = numero / 2;
      numero = numero * 3 + 1;
      alerta.innerHTML = `<div class="text-center alert alert-primary mt-3">El numero es inpar resultado: ${numero}</div>`;
      continuar = false;
    }
  }
}
