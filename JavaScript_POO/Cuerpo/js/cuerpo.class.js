class cuerpo {
  parte = "";

  CuerpoParteSeleccionada(x, y, idioma) {
    //   console.log('entro clase cuerpo');
    console.log(x);
    console.log(y);

    if ((x > 281 && y < 311) || (x > 275 && y < 304) || (x > 271 && y < 303)) {
      console.log(idioma);

      if (idioma == "español") {
        let parte = "Mano derecha";
        return parte;
      } else {
        console.log("rigth hand");
      }
    }
  }
}
