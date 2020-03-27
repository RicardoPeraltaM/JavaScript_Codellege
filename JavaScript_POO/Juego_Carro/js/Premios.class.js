class Premio {
  posicionX = 0;
  posicionY = 0;

  constructor(posicionX, posicionY) {
    this.posicionX = posicionX;
    this.posicionY = posicionY;
  }

  crearImagen(contenerdor) {
    const imagen = document.createElement("img");
    imagen.src = "../assets/trampa2.png";
    imagen.style.left = `${this.posicionX}px`;
    imagen.style.top = `${this.posicionY}px`;

    contenerdor.appendChild(imagen);
  }
}
