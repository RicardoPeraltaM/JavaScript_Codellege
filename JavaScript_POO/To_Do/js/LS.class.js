class MLocalStorage {
  static ActividadesARealizar = [];

  static Agregar_ActividadesLS(actividad) {
    this.ActividadesARealizar = this.ObtenerLS();
    this.ActividadesARealizar.push(actividad);
    console.log(this.ActividadesARealizar);

    localStorage.setItem(
      "Actividades",
      JSON.stringify(this.ActividadesARealizar)
    );
  }

  static ObtenerLS() {
    let AtividadesLS = [];

    if (localStorage.getItem("Actividades") === null) {
      return AtividadesLS;
    }
    return JSON.parse(localStorage.getItem("Actividades"));
  }

  // creo metodo para obtener las finalizadas
  static ObetenerFinalizadas() {
    let fin = [];

    if (localStorage.getItem("Actividades_Finalizadas") == null) {
      return fin;
    }

    return JSON.parse(localStorage.getItem("Actividades_Finalizadas"));
  }

  static FinalizarActividad(actividad) {
    let actividad_a_realizar = this.ObtenerLS();
    let actividad_a_finalizar = this.ObetenerFinalizadas();
    // console.log(actividad_a_finalizar);

    let actividades = [];

    for (let x = 0; x < actividad_a_realizar.length; x++) {
      if (actividad != actividad_a_realizar[x]) {
        actividades.push(actividad_a_realizar[x]);
      } else {
        actividad_a_finalizar.push(actividad_a_realizar[x]);
      }
    }

    localStorage.setItem("Actividades", JSON.stringify(actividades));

    localStorage.setItem(
      "Actividades_Finalizadas",
      JSON.stringify(actividad_a_finalizar)
    );
  }
}
