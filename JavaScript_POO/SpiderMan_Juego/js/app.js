const imagen = document.getElementById("carro");

const carro = new car(0, 0);
let contenedor = document.getElementById("contenedor");

EvenListener();

function EvenListener() {
  document.addEventListener("keydown", moveCar);
//   agrego funcion al contenedor
  contenedor.addEventListener("click", ponerPremio);
}

function moveCar(event) {
  console.log(event);
  console.log("funciona");
  carro.moverCarro(event.key, imagen);
}

function ponerPremio(event) {
  console.log(event);

  const premio = new Premio(event.x, event.y);
  premio.crearImagen(contenedor);
}
