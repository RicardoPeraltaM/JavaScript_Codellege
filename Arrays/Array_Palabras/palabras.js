EventListener();
const output = document.getElementById("output");
let contadorInputs = 0;
let arrayPalabras = [];

function EventListener() {
  document.addEventListener("DOMContentLoaded", AddEvents);
}

function AddEvents() {
  document.getElementById("btnInput").addEventListener("click", AddInput);
  document
    .getElementById("btnPalabrasFinales")
    .addEventListener("click", SacarPalabras);
}

function AddInput() {
  const divcol = document.createElement("div");
  divcol.setAttribute("class", "col-12");

  const divFG = document.createElement("div");
  divFG.setAttribute("class", "form-group");

  const label = document.createElement("label");
  label.innerText = "Ingresa Palabra";

  const input = document.createElement("input");
  input.setAttribute("class", "form-control");
  input.setAttribute("id", `palabra${contadorInputs}`);
  input.setAttribute("placeholder", "Ingresa palabra");
  input.setAttribute("type", "text");

  contadorInputs++;
  output.appendChild(divcol);
  divcol.appendChild(divFG);
  divFG.appendChild(label);
  divFG.appendChild(input);
}

function SacarPalabras() {
  rellenarArray();

  let palabras_lista = document.getElementById("palabras_lista");

  for (let i = 0; i < arrayPalabras.length; i++) {
    // Creo los li para las lista de palabras
    let li = document.createElement("li");
    li.setAttribute("class", "list-group-item text-center");

    // Validacion de que son vocales
    if (
      arrayPalabras[i].charAt(0) == "A" ||
      arrayPalabras[i].charAt(0) == "a"
    ) {
      li.innerText = arrayPalabras[i];
      palabras_lista.appendChild(li);
    } else if (
      arrayPalabras[i].charAt(0) == "E" ||
      arrayPalabras[i].charAt(0) == "e"
    ) {
      li.innerText = arrayPalabras[i];
      palabras_lista.appendChild(li);
    } else if (
      arrayPalabras[i].charAt(0) == "I" ||
      arrayPalabras[i].charAt(0) == "i"
    ) {
      li.innerText = arrayPalabras[i];
      palabras_lista.appendChild(li);
    } else if (
      arrayPalabras[i].charAt(0) == "O" ||
      arrayPalabras[i].charAt(0) == "o"
    ) {
      li.innerText = arrayPalabras[i];
      palabras_lista.appendChild(li);
    } else if (
      arrayPalabras[i].charAt(0) == "U" ||
      arrayPalabras[i].charAt(0) == "u"
    ) {
      li.innerText = arrayPalabras[i];
      palabras_lista.appendChild(li);
    }
  }
}

function rellenarArray() {
  for (let x = 0; x < contadorInputs; x++) {
    const p = document.getElementById(`palabra${x}`).value;

    if (isNaN(p)) {
      arrayPalabras[x] = p;
      console.log(p);
    } else {
      arrayPalabras[x] = "";
    }
  }
}
