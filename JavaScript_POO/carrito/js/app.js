eventListener();

const tableCarrito = document.querySelector("#lista-carrito tbody");

function eventListener() {
  document
    .querySelector("#lista-cursos")
    .addEventListener("click", GuardarCursoCarrito);
  IniciarCarrito();
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
  const cursosLS = LocalStorageManipular.obtenerCursoLS();

  for (let x = 0; x < cursosLS.length; x++) {
    const carrito = new Carrito();
    carrito.AgregarCursoCarrito(cursosLS[x], tableCarrito, false);
  }
}
