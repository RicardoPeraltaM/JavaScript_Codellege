EventListener();

function EventListener() {
  document.getElementById("palabra").addEventListener("keypress", validaciones);
}

function validaciones(p) {
  if (p.key != "Enter") return;
  if (!isNaN(p.target.value)) return;
  if (p.target.value == "") return;
  encriptar(p.target.value);
}

function encriptar(word) {
  let espacio = "",
    separacion = word.split(espacio);
  // index es para la poscion:
  let index = 0;

  // Alertas
  let word_ingresada = document.getElementById("word_ingresada");
  let letras_palabra = document.getElementById("letras_palabra");
  let ul = document.getElementById("lista");
  word_ingresada.innerText = `Palabra: ${word}`;

  for (let x = 0; x < separacion.length; x++) {
    let li = document.createElement("li");
    li.setAttribute("class", "list-group-item text-center");
    let almacena = word.charCodeAt(index);
    li.innerText = `${word[x]}  - Numero ASCII: ${almacena + 3}`;
    ul.appendChild(li);
    index++;
  }
}
