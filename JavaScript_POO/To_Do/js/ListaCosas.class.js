class Actividades {
  contenido = "";

  constructor(contenido) {
    this.contenido = contenido;
  }

  AgregarActividadDom(ul, validacion) {
    const li = document.createElement("li");
    li.classList = "list-group-item text-break mt-1";
    li.textContent = this.contenido;

    const btnRealizada = document.createElement("button");
    btnRealizada.classList = "close";

    const spanfinalizar = document.createElement("span");
    spanfinalizar.classList = "badge badge-pill text-success";
    spanfinalizar.textContent = "Finalizada";

    ul.appendChild(li);
    li.appendChild(btnRealizada);
    btnRealizada.appendChild(spanfinalizar);
    // console.log(li);

    // Lo envio al LS
    if (validacion) MLocalStorage.Agregar_ActividadesLS(this.contenido);
  }

  // imprimir finalizadas
  static AgregarActividadFinalizadaDOM(ul2, texto2) {
    const li2 = document.createElement("li");
    li2.classList = "list-group-item text-break mt-1";
    li2.textContent = texto2;


    ul2.appendChild(li2);
  }

  static ActividadTerminada(actividad) {
    if (actividad.target.tagName != "SPAN") return;

    const liActividad = actividad.target.parentElement.parentElement;
    let textoEliminado = liActividad.textContent;

    textoEliminado = textoEliminado.substring(0, textoEliminado.length - 10);

    MLocalStorage.FinalizarActividad(textoEliminado);
    // console.log("Texto eliminado: " + textoEliminado);
    liActividad.remove();
  }
}
