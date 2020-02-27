function EventListener() {
  const boton = document.getElementById("boton");
  boton.addEventListener("click", determinar_numeros);
}

function determinar_numeros() {
  let n_d;
  let numeros;
  let acumulador_menor = 0;
  let acumulador_mayor = 0;
  let alerta = document.getElementById("ZonePrint");

  n_d = Number(prompt("¿ Cuantos numeros vas a ingresar ?"));
  for (let i = 1; i <= n_d; i++) {
    numeros = Number(prompt("Ingresa numero: "));
    if (numeros <= 0) {
      acumulador_menor++;
    } else if (numeros > 0) {
      acumulador_mayor++;
    }
  }

  alerta.innerText = `Numeros mayores a 0 = ${acumulador_mayor} y numeros menores a 0 = ${acumulador_menor}`;
}

EventListener();