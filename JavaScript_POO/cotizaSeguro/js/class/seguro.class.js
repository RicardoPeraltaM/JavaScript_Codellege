class Seguro {
  marca = "";
  anio = "";
  tipo = "";

  constructor(marca, anio, tipo) {
    this.anio = anio;
    this.marca = marca;
    this.tipo = tipo;
  }

  cotizarSeguro() {
    let cantidadSeguro = 0;
    const base = 2000;

    switch (this.marca) {
      case "1":
        cantidadSeguro = base * 1.15;
        break;

      case "2":
        cantidadSeguro = base * 1.05;
        break;

      case "3":
        cantidadSeguro = base * 1.35;
        break;
    }

    const diferencia = new Date().getFullYear() - this.anio;

    cantidadSeguro -= (diferencia * 3 * cantidadSeguro) / 100;

    if (this.tipo == "basico") {
      cantidadSeguro *= 1.3;
    } else {
      cantidadSeguro *= 1.5;
    }

    return cantidadSeguro;
  }
}
