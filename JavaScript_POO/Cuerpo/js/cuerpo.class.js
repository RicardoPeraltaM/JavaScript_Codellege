class cuerpo {
  parte = "";

  CuerpoParteSeleccionada(x, y, idioma) {
    //   console.log('entro clase cuerpo');
    console.log(x);
    console.log(y);
    let parte;

    // MANO DERECHA
    if (
      (x > 540 && y <= 320) ||
      (x >= 557 && y <= 528) ||
      (x >= 546 && y <= 328)
    ) {
      if (idioma == "español") {
        parte = "Mano derecha";
        return parte;
      } else {
        parte = "Rigth hand";
        return parte;
      }
    }
    // CABEZA
    else if (
      (x > 399 && y < 154) ||
      (x > 370 && y < 150) ||
      (x > 360 && y < 137) ||
      (x > 377 && y < 159)
    ) {
      if (idioma == "español") {
        parte = "Cabeza";
        return parte;
      } else {
        parte = "Head";
        return parte;
      }
    }

    // CUELLO
    else if (x > 376 && y < 170) {
      if (idioma == "español") {
        parte = "Cuello";
        return parte;
      } else {
        parte = "Neck";
        return parte;
      }
    }

    // BRAZO DERECHO
    else if (
      (x > 463 && y < 213) ||
      (x > 483 && y < 237) ||
      (x > 476 && y < 223) ||
      (x > 459 && y < 253) ||
      (x > 503 && y < 288) ||
      (x > 492 && y < 249)
    ) {
      if (idioma == "español") {
        parte = "Brazo derecho";
        return parte;
      } else {
        parte = "Rigth arm";
        return parte;
      }
    }

    //   Pecho
    else if (x > 341 && y < 228) {
      if (idioma == "español") {
        parte = "Pecho";
        return parte;
      } else {
        parte = "Chest";
        return parte;
      }
    }

    // Abdomen
    else if (x > 351 && y < 278) {
      if (idioma == "español") {
        parte = "Abdomen";
        return parte;
      } else {
        parte = "Abdomen";
        return parte;
      }
    }

    // Parte privada

    if (x > 379 && x < 430 && y > 278 && y < 330) {
      if (idioma == "español") {
        parte = "Parte privada";
        return parte;
      } else {
        parte = "dick";
        return parte;
      }
    }

    //   BRAZO IZQUIERDO
    else if (
      (x > 315 && y < 242 && y > 173) ||
      (x > 309 && y < 248) ||
      (x > 281 && y > 250 && y < 276) ||
      (x > 275 && y > 264 && y < 298) ||
      (x > 271 && y > 274 && y < 294) ||
      (x > 261 && y > 282 && y < 298)
    ) {
      if (idioma == "español") {
        parte = "Brazo izquierdo";
        return parte;
      } else {
        parte = "Left arm";
        return parte;
      }
    }

    // MANO IZQUIERDA
    if (x > 228 && x < 276 && y > 297 && y < 330) {
      if (idioma == "español") {
        parte = "Mano izquierda";
        return parte;
      } else {
        parte = "Left hand";
        return parte;
      }
    }

    // Pie der
    if (x > 472 && x < 576 && y > 505 && y < 545) {
      if (idioma == "español") {
        parte = "Pie derecho";
        return parte;
      } else {
        parte = "Rigth foot";
        return parte;
      }
    }

    // Pie izq
    if (x > 236 && x < 318 && y > 498 && y < 545) {
      if (idioma == "español") {
        parte = "Pie izquierdo";

        return parte;
      } else {
        parte = "Left foot";
        return parte;
      }
    }

    // Pierna der

    if (
      (x > 411 && x < 463 && y > 276 && y < 380) ||
      (x > 416 && x < 474 && y > 276 && y < 380) ||
      (y > 354 && y < 459 && x > 432 && x < 497) ||
      (x > 466 && x < 522 && y > 436 && y < 508)
    ) {
      if (idioma == "español") {
        parte = "Pierna derecha";
        return parte;
      } else {
        parte = "Rigth leg";
        return parte;
      }
    }

    // Pierna izq
    if (
      (x > 351 && x < 383 && y > 274 && y < 261) ||
      (y > 337 && y < 424 && x > 324 && x < 375) ||
      (y > 277 && y < 345) ||
      (y > 429 && y < 515 && x > 280 && x < 353)
    ) {
      if (idioma == "español") {
        parte = "Pierna izquierda";
        return parte;
      } else {
        parte = "Left leg";
        return parte;
      }
    } else {
      parte = "";
      return parte;
    }
  }
}
