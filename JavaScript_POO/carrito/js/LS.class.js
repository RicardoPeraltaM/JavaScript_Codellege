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

  static EliminarCursoLS(idCurso) {
    let cursoLS = this.obtenerCursoLS();
    let nuevosCursosLS = [];

    for (let x = 0; x < cursoLS.length; x++) {
      if (cursoLS[x].id != idCurso) {
        nuevosCursosLS.push(cursoLS[x]);
      }
    }

    localStorage.setItem("cursos", JSON.stringify(nuevosCursosLS));
  }

  static vaciarcarrito (){
    localStorage.clear();
  }
}
