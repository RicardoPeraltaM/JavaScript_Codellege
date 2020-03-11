EventListener();

function EventListener() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", iniciar_suma);
}

function iniciar_suma() {
  let iniciar = true;
  let suma = 0;
  let alerta = document.getElementById("alerta");
  while (iniciar) {
    let n = Number(prompt("Ingrese numero a sumar"));
    suma = suma + n;
    console.log(suma);
    if (suma >= 100) {
      iniciar = false;
      alerta.innerText = "La suma es mayor a 100 resultado: " + suma;
    }
  }
}
