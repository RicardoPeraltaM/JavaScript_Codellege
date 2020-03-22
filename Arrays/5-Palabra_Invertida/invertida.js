EventListener();
function EventListener() {
  document.getElementById("palabra").addEventListener("keypress", Palabras);
}

function Palabras(p) {
  if (p.key == "Enter") {
    if (!isNaN(p.target.value)) return;
    if (p.target.value == "") return;

    rellenarPalabra(p.target.value);
  } else {
    return;
  }
}

function rellenarPalabra(word) {
  let seprador = "",
    //   almaceno los caracteres de la palabra
    arreglo_caracter = word.split(seprador);
  let Caracteres_Inversos = document.getElementById("Caracteres_Inversos");
  let Caracteres = document.getElementById("Caracteres");
  let p = document.getElementById("p");

  p.innerText = `La palabra ingresada es: ${word}`;
  Caracteres.innerText = `Caracteres: ${arreglo_caracter}`;
  Caracteres_Inversos.innerText = `Caracteres inversos: ${arreglo_caracter.reverse()}`;
}
