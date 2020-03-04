EventListener();

function EventListener() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", numeros_ingresados);
}

function numeros_ingresados() {
  let iniciar = true;
  let contador = 0;
  let contador2 = 0;
  let num_t = 0;
  let num_t2 = 0;
  let prom_pos = document.getElementById("prom_pos");
  let prom_final = document.getElementById("prom_final");

  while (iniciar) {
    let numero = Number(prompt("Ingresa numero:"));

    if (numero == 0) {
      iniciar = false;
    } else if (numero > 0) {
      contador++;
      num_t = num_t + numero;
    } else {
      contador2++;
      num_t2 = num_t2 + numero;
    }
  }
  let prom1 = num_t / contador;
  prom_pos.innerHTML = `<div class="mt-3 alert alert-primary">Los numero positivos son: ${contador} el promedio es: ${prom1}</div>`;
  let promtotal = (num_t + num_t2) / (contador + contador2);
  prom_final.innerHTML = `<div class="mt-3 alert alert-danger">El promedio de todos los numeros es : ${promtotal}</div>`;
}
