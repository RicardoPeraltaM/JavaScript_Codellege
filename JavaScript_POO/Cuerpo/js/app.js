let imagen = document.getElementById("imagen");
let resultado = document.getElementById("resultado");
EventListener();

function EventListener() {
  imagen.addEventListener("mousemove", imagenMovimiento);
}

function imagenMovimiento(event) {
  let idioma = document.getElementById("idioma").value;
  console.log("cordenadas click: " + "X: " + event.pageX, "Y: " + event.pageY);
  console.log(idioma);
  console.log(event);
//   validamos que seleccione un idioma 
  if (idioma != "") {
    let Cuerpo = new cuerpo();
    Cuerpo.CuerpoParteSeleccionada(event.pageX, event.pageY, idioma);
  }
}
