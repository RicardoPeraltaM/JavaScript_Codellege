let imagen = document.getElementById("imagen");
let resultado = document.getElementById("resultado");
EventListener();

function EventListener() {
  imagen.addEventListener("mousemove", imagenMovimiento);
}

function imagenMovimiento(event) {
  let idioma = document.getElementById("idioma").value;
  console.log("funciona");

  console.log("cordenadas click: " + "X: " + event.pageX, "Y: " + event.pageY);
  console.log(idioma);
}
