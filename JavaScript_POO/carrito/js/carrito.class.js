class Carrito {
  AgregarCursoCarrito(informacionCurso, tableCarrito, origen) {
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
}
