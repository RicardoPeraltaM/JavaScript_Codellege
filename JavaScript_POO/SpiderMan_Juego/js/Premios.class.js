class Premio {
  posicionX = 0;
  posicionY = 0;

  constructor(posicionX, posicionY) {
    this.posicionX = posicionX;
    this.posicionY = posicionY;
  }

  static EliminarPremio(contenedor, id) {
    // alert("caca eliminada");
    contenedor.removeChild(document.getElementById(`${id}`));

  }

  crearImagen(contenerdor, sizeMargin) {
    const imagen = document.createElement("img");
    imagen.src = "../assets/trampa2.png";
    imagen.style.width = "50px";
    // ponemos id a la imagen
    imagen.id = `imagen${
      Math.random()
        .toString()
        .split(".")[1]
    }`;

    console.log(this.posicionX, this.posicionY);

    const styleLeft = this.posicionX - sizeMargin;
    const styleTop = this.posicionY - 190;

    imagen.style.left = `${styleLeft}px`;
    imagen.style.top = `${styleTop}px`;

    contenerdor.appendChild(imagen);

    return {
      id: imagen.id,
      styleLeft: styleLeft - 50,
      styleTop: styleTop - 80,
      styleLeftMax: styleLeft + 50,
      styleTopMax: styleTop + 50
    };
  }
}
