const imagen = document.getElementById("carro");

const carro = new car(0, 0);
let contenedor = document.getElementById("contenedor");
let sizeMargin = 0;
let Posicion_imagenes = [];
EvenListener();

function EvenListener() {
  document.addEventListener("keydown", moveCar);
  //   agrego funcion al contenedor
  contenedor.addEventListener("click", ponerPremio);
  window.addEventListener("resize", ObtenerMargin);
}

function moveCar(event) {
  // console.log(event);
  // console.log("funciona");
  carro.moverCarro(event.key, imagen);

  const response = carro.verificarColision(Posicion_imagenes);

  if (response != null) {
    Premio.EliminarPremio(contenedor, Posicion_imagenes[response].id);
    Posicion_imagenes.splice(response, 1);
  }
}

function ponerPremio(event) {
  // console.log(event);

  // console.log(event.x, event.y);

  const premio = new Premio(event.x, event.y);
  ObtenerMargin();
  console.log(sizeMargin);

  // premio.crearImagen(contenedor, sizeMargin);
  // console.log(premio.crearImagen(contenedor, sizeMargin));
  Posicion_imagenes.push(premio.crearImagen(contenedor, sizeMargin));
  // console.log(Posicion_imagenes);
}

function ObtenerMargin() {
  const marginContainer = window
    .getComputedStyle(contenedor)
    .getPropertyValue("margin-left");

  console.log(marginContainer);

  sizeMargin = marginContainer.substring(0, marginContainer.length - 2);
}
