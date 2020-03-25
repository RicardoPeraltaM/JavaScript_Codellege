class Proyectil {
  V_inicial = 0;
  Angulo = 0;

  constructor(V_inicial, Angulo) {
    this.V_inicial = V_inicial;
    this.Angulo = Angulo;
    console.log(this.V_inicial, this.Angulo);
  }

  //   Metodo
  calcularDistanciaX(t) {
    const DistanciaX =
      this.V_inicial * Math.cos(this.Angulo * (Math.PI / 180)) * t;

    return DistanciaX;
  }

  calcularDistanciaY(t) {
    //   console.log(t);
    let DistanciaY = this.V_inicial * Math.sin(this.Angulo * (Math.PI / 180));

    DistanciaY = DistanciaY * t - 0.5 * 9.8 * Math.pow(t, 2);

    return DistanciaY;
  }

  //   Metodo
  CrearSpan() {
    for (let tiempo = 0; tiempo <= 7; tiempo += 0.01) {
      const span = document.createElement("span");
      const left = this.calcularDistanciaX(tiempo);
      const bottom = this.calcularDistanciaY(tiempo);

      if (left < 0 || bottom < 0 || left >= 99 || bottom >= 99) break;

      span.style.left = `${left}%`;
      span.style.bottom = `${bottom}%`;
      document.getElementById("contenedor").appendChild(span);
    }
  }
}
