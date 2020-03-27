class car {
  posicionX = 0;
  posicionY = 0;

  constructor(posicionX, posicionY) {
    this.posicionX = posicionX;
    this.posicionY = posicionY;
  }

  moverCarro(direccion, imagen) {
    switch (direccion) {
      case "ArrowUp":
        //   validacion para que no se salga del cuadro
        if (this.posicionY <= 0) return;
        imagen.src = "../assets/derecha_arriba.png";
        imagen.style.top = `${this.posicionY--}%`;
        break;

      case "ArrowLeft":
        //   validacion para que no se salga del cuadro
        if (this.posicionX <= 0) return;
        imagen.src = "../assets/izquierda.png";
        imagen.style.left = `${this.posicionX--}%`;
        break;

      case "ArrowRight":
        //   validacion para que no se salga del cuadro
        if (this.posicionX >= 91) return;
        imagen.src = "../assets/derecha_arriba.png";
        imagen.style.left = `${this.posicionX++}%`;
        break;

      case "ArrowDown":
        //   validacion para que no se salga del cuadro
        if (this.posicionY >= 84) return;
        imagen.src = "../assets/derecha_arriba.png";
        imagen.style.top = `${this.posicionY++}%`;
        break;
    }
  }
}
