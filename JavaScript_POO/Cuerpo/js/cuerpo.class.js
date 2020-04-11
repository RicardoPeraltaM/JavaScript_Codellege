class cuerpo {
  parte = "";

  CuerpoParteSeleccionada(x, y, idioma) {
    //   console.log('entro clase cuerpo');
    console.log(x);
    console.log(y);
    let parte;
    if ((x > 279 && y < 311) || (x > 275 && y < 310) || (x > 266 && y < 306)) {
      console.log(idioma);

      if (idioma == "español") {
        parte = "Mano derecha";
        return parte;
      } else {
        parte = "Rigth hand";
        return parte;
      }
    }
  }
}
