EventListener();
let ArrayGlobalPrimos = [];

function fillArrayGloba() {
  let bandera = true;

  for (let i = 0; i < 1000; i++) {
    for (let y = 2; y < i; y++) {
      if (i % y == 0) {
        // Comprobamos que no es primo
        bandera == false;
        break;
      }

      if (bandera) {
        ArrayGlobalPrimos.push(i);
      }
    }
  }
  console.log(ArrayGlobalPrimos);
}

function EventListener() {
  document.addEventListener("DOMContentLoaded", fillArrayGloba);
  document.getElementById("TamañoArray").addEventListener("keypress", InitApp);
}

function InitApp(event) {
  // console.log(event);
  if (event.key != "Enter") return;
  if (event.target.value == "") return;
  if (event.target.value <= 0) return;
  if (isNaN(event.target.value)) return;

  fillArray(event.target.value);
}

function fillArray(tamaño_array) {
  let ArrayN_Primos = [];
  let suma = 0;

  // RELLENAMOS EL ARRAY ALEATORIAMENTE
  for (let x = 0; x < tamaño_array; x++) {
    let numero_aleatorio =
      Math.floor(Math.random() * (ArrayGlobalPrimos.length - 1)) + 1;
    ArrayN_Primos.push(ArrayGlobalPrimos[numero_aleatorio]);
    suma = suma + ArrayGlobalPrimos[numero_aleatorio];
  }

  // SACAMOS EL MAYOR CON LA FUNCION MATHMAX
  let max = Math.max(...ArrayN_Primos);
  //   console.log(max);
  //   console.log(ArrayN_Primos + "FILL ARRAY");
  //   console.log("LA SUMA ES " + suma);

  let ZonePrint = document.getElementById("ZonePrint");
  let suma_imprimir = document.getElementById("suma_imprimir");
  let mayor = document.getElementById("mayor");

  ZonePrint.innerHTML = "El array es: " + ArrayN_Primos;
  suma_imprimir.innerHTML = "La suma es " + suma;
  mayor.innerHTML = "El mayor es " + max;
}
