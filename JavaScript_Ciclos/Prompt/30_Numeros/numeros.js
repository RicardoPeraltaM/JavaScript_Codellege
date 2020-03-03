EventListener();

function EventListener() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", Numeros_op);
}

function Numeros_op() {
  let prom = 0;
  let suma_impar = 0,
    suma_par = 0;
  let suma_n_impares = document.getElementById("suma_n_impares");
  let promedio_n_pares = document.getElementById("promedio_n_pares");
  for (let x = 1; x <= 30; x++) {
    let n = Number(prompt("Ingresa numero ENTERO:"));
    if (n % 2 == 0) {
      prom++;
      //   console.log(prom)
      suma_par = suma_par + n;
      //   console.log(suma_par);
      let n_promedio = suma_par / prom;
      promedio_n_pares.innerHTML = `<div class="text-center alert alert-warning"> El promedio de los numeros pares es: ${n_promedio}</div>`;
    } else {
      suma_impar = suma_impar + n;
      suma_n_impares.innerHTML = `<div class="text-center alert alert-dark">La suma de los numeros impares es: ${suma_impar}</div>`;
    }
  }
}
