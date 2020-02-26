EventListener();

function EventListener() {
  const boton = document.getElementById("boton");
  boton.addEventListener("click", personas);
}

function personas() {
  let continuar = true;
  let acumulador = 0;
  let contador = 0;

  // tambien se puede dejar solo con el continuar
  while (continuar == true) {
    let estatura = Number(prompt("Ingrese estatura: "));
    if (estatura == 0) {
      continuar = false;
    }
    acumulador += estatura;
    contador++;
  }

  let r = acumulador / (contador-1);

  const alerta = document.getElementById("alerta");
  alerta.innerText = "El promedio es: " + r;
}
