EventListener();

function EventListener() {
  document
    .getElementById("btnCalcular")
    .addEventListener("click", CalcularRecorrido);
}

function CalcularRecorrido() {
  let velocidad = Number(document.getElementById("velocidad").value);
  let angulo = Number(document.getElementById("angulo").value);
  //   LLAMO LA CLASE PROYECTIL
  const proyectil = new Proyectil(velocidad, angulo);
  proyectil.CrearSpan();
  //   console.log(proyectil.calcularDistanciaX(5));
  //   console.log(proyectil.calcularDistanciaY(5));
}
