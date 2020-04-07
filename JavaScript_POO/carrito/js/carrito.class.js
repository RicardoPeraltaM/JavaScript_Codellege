class Carrito {
  AgregarCursoCarrito(informacionCurso, tableCarrito, origen) {
    if (
      LocalStorageManipular.VerificarCursoRepetido(informacionCurso.id) &&
      origen
    )
      return;

    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
<td><img src="${informacionCurso.imagen}" width="100%"></td>
<td>${informacionCurso.titulo} </td>
<td> ${informacionCurso.precio}</td>
<td>
<a class="borrar-curso" data-id= "${informacionCurso.id}"> X </a>
</td>
`;

    tableCarrito.appendChild(tableRow);
    // lo mando al LS

    if (origen) LocalStorageManipular.AgregarCarritoLS(informacionCurso);
  }

  static EliminarCurso(nodoDom) {
    const idCurso = nodoDom
      .querySelector(".borrar-curso")
      .getAttribute("data-id");
    console.log(idCurso);

    LocalStorageManipular.EliminarCursoLS(idCurso);
    nodoDom.remove();
  }

  static VaciarCarrito(tableCurso) {
    while (tableCurso.firstChild) {
      tableCurso.firstChild.remove();
    }

    LocalStorageManipular.vaciarcarrito();
  }
}
