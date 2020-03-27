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
        imagen.src = "../assets/carro/carro_normal.jpeg";
        imagen.style.top = `${this.posicionY--}%`;
        break;

      case "ArrowLeft":
        //   validacion para que no se salga del cuadro
        if (this.posicionX <= 0) return;
        imagen.src = "../assets/carro/carro_izquierda.jpeg";
        imagen.style.left = `${this.posicionX--}%`;
        break;

      case "ArrowRight":
        //   validacion para que no se salga del cuadro
        if (this.posicionX >= 94) return;
        imagen.src = "../assets/carro/carro_derecha.jpeg";
        imagen.style.left = `${this.posicionX++}%`;
        break;

      case "ArrowDown":
        //   validacion para que no se salga del cuadro
        if (this.posicionY >= 87) return;
        imagen.src = "../assets/carro/carro_abajo.jpeg";
        imagen.style.top = `${this.posicionY++}%`;
        break;
    }
  }
}
