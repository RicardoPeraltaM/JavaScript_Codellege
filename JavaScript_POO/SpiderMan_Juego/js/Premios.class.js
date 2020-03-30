class Premio {
  posicionX = 0;
  posicionY = 0;

  constructor(posicionX, posicionY) {
    this.posicionX = posicionX;
    this.posicionY = posicionY;
  }

  crearImagen(contenerdor, sizeMargin) {
    const imagen = document.createElement("img");
    imagen.src = "../assets/trampa2.png";
    imagen.style.width = "50px";
    console.log(this.posicionX,this.posicionY);

    const styleLeft = this.posicionX - sizeMargin;
    const styleTop = this.posicionY - 190;

    

    imagen.style.left = `${styleLeft}px`;
    imagen.style.top = `${styleTop}px`;

    contenerdor.appendChild(imagen);

    return {
      styleLeft,
      styleTop,
      styleLeftMax: styleLeft + 50,
      styleTopMax: styleTop + 50
    };
  }
}