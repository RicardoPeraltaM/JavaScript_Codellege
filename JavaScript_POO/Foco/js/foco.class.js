class Foco {
  estado = false;

  CambiarEstado() {
    this.estado = !this.estado;

    if (this.estado) {
      return "../assets/foco_prendido.jpg";
    } else {
      return "../assets/foco_apagado.jpg";
    }
  }
}
