class LocalStorageManipular {

    static AgregarCarritoLS(informacionCursos) {
    const CursoLS = this.obtenerCursoLS();

    CursoLS.push(informacionCursos);

    localStorage.setItem("cursos", JSON.stringify(CursoLS));
  }

  static obtenerCursoLS() {
    if (localStorage.getItem("cursos") == null) return [];

    return JSON.parse(localStorage.getItem("cursos"));
  }
}
