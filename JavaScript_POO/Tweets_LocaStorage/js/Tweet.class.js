class Tweets {
  contenido = "";

  constructor(contenido) {
    this.contenido = contenido;
  }

  AgregarTweetDom(contenedor, origen) {
    const li = document.createElement("li");
    li.classList = "list-group-item text-break mt-2";
    li.textContent = this.contenido;

    const btnEliminar = document.createElement("button");
    // propiedad close viene de boostrap
    btnEliminar.classList = "close";

    const span = document.createElement("span");
    span.classList = "badge badge-pill text-danger";
    span.textContent = "X";

    // Colocamos
    contenedor.appendChild(li);
    li.appendChild(btnEliminar);
    btnEliminar.appendChild(span);
    // mandamos al localStorage
    if (origen) ManipularLocalStorage.AgregarTweetsLocalStorage(this.contenido);
  }

  static EliminarTweetDom(tweetEliminar) {
    if (tweetEliminar.target.tagName != "SPAN") return;
    //   parentElement es para acceder al elemento padre de un elemento
    const liEliminado = tweetEliminar.target.parentElement.parentElement;

    let textoLiEliminado = liEliminado.textContent;
    textoLiEliminado = textoLiEliminado.substring(
      0,
      textoLiEliminado.length - 1
    );

    ManipularLocalStorage.EliminarTweetLS(textoLiEliminado);
    console.log("Texto eLIMINADO" + textoLiEliminado);
    liEliminado.remove();
  }
}
