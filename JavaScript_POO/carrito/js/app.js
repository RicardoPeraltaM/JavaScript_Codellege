const tableCarrito = document.querySelector("#lista-carrito tbody");

eventListener();

function eventListener() {
  document
    .querySelector("#lista-cursos")
    .addEventListener("click", GuardarCursoCarrito);
  IniciarCarrito();

  document.querySelector("#carrito").addEventListener("click", EliminarCarrito);
}

function GuardarCursoCarrito(event) {
  // quitarle el enlace default
  event.preventDefault();

  if (event.target.classList.value.search("agregar-carrito") == -1) return;
  //   console.log("Boton Presionado");

  const curso = event.target.parentElement.parentElement;
  //   console.log(curso);

  //   creamos objeto
  const informacionCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    // clase precio y agarramos etiqueta span
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
  };

  const carrito = new Carrito();
  carrito.AgregarCursoCarrito(informacionCurso, tableCarrito, true);
}

function IniciarCarrito() {
  // console.log(tableCarrito);

  const cursosLS = LocalStorageManipular.obtenerCursoLS();

  for (let x = 0; x < cursosLS.length; x++) {
    const carrito = new Carrito();
    carrito.AgregarCursoCarrito(cursosLS[x], tableCarrito, false);
  }
}

function EliminarCarrito(event) {
  // console.log(event.target);
  // acceder a nombre de la clase
  // console.log(event.target.className);

  if (event.target.className.search("borrar-curso") == -1) return;

  // opcion 2 validacion
  // if (event.target.className != "borrar-curso") return;

  // console.log("la clase es : " + event.target.classList.value);
  // console.log(event.target.parentElement.parentElement);

  Carrito.EliminarCurso(
    event.target.parentElement.parentElement);

}
