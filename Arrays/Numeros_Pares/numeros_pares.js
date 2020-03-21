EventListener();

function EventListener() {
  document.getElementById("t_array").addEventListener("keypress", Validaciones);
}

function Validaciones(validacion) {
  if (validacion.key == "Enter") {
    if (isNaN(validacion.target.value)) return;
    FillArray(validacion.target.value);
  }
}

function FillArray(tamaño_array) {
  console.log(tamaño_array);
  let array = [];
  for (let x = 0; x < tamaño_array; x++) {
    array.push(Math.floor(Math.random() * (1000 - 1) + 1));
  }
  console.log(array);
  N_pares(array);
}

function N_pares(arreglo) {
  let arreglo_pares = [];
  let arreglo_impares = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 == 0) {
      arreglo_pares.push(arreglo[i]);
    } else {
      arreglo_impares.push(arreglo[i]);
    }
  }

  //alertas
  let n_par = document.getElementById("n_par");
  let n_impar = document.getElementById("n_impar");

  //  Imprimimos :
  n_par.innerText = `Numeros pares: ${arreglo_pares.sort()}`;
  n_impar.innerText = `Numeros impares: ${arreglo_impares.sort()}`;
}
