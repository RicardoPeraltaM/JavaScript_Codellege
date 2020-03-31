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
        imagen.style.top = `${(this.posicionY -= 10)}px`;
        break;

      case "ArrowLeft":
        //   validacion para que no se salga del cuadro
        if (this.posicionX <= 0) return;
        imagen.src = "../assets/izquierda.png";
        imagen.style.left = `${(this.posicionX -= 10)}px`;
        break;

      case "ArrowRight":
        //   validacion para que no se salga del cuadro
        if (this.posicionX >= 1060) return;
        imagen.src = "../assets/derecha_arriba.png";
        imagen.style.left = `${(this.posicionX += 10)}px`;
        break;

      case "ArrowDown":
        //   validacion para que no se salga del cuadro
        if (this.posicionY >= 485) return;
        imagen.src = "../assets/derecha_arriba.png";
        imagen.style.top = `${(this.posicionY += 10)}px`;
        break;
    }
  }

  verificarColision(P_imagen = []) {
    for (let i = 0; i < P_imagen.length; i++) {
      if (
        this.posicionX >= P_imagen[i].styleLeft &&
        this.posicionX <= P_imagen[i].styleLeftMax &&
        this.posicionY >= P_imagen[i].styleTop &&
        this.posicionY <= P_imagen[i].styleTopMax
      ) {
        // console.log(`Posicion de la imagen : ${i}`);
        return i;
      }
    }
    return null;
  }
}
