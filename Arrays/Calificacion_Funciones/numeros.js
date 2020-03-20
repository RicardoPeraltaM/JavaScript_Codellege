/**Crea un array o arreglo unidimensional con un tamaño de 10, inserta los valores numéricos que desees
 de la manera que quieras y muestra por pantalla la media de valores del array.
 */
eventListeners();
let contadorInputs = 0;
let array_prom = [];

function eventListeners() {
  document.addEventListener("DOMContentLoaded", AddEvents);
}

function AddEvents() {
  document.getElementById("btnInput").addEventListener("click", AddInput);
  document
    .getElementById("btnPromedio")
    .addEventListener("click", SacarPromedio);
}
const output = document.getElementById("output");

function AddInput() {
  const divcol = document.createElement("div");
  divcol.setAttribute("class", "col-12");

  const divFG = document.createElement("div");
  divFG.setAttribute("class", "form-group");

  const label = document.createElement("label");
  label.innerText = ` Ingrese la calificacion: ${contadorInputs + 1}:`;

  const inputFC = document.createElement("input");
  inputFC.setAttribute("class", "form-control");
  inputFC.setAttribute("type", "number");
  inputFC.setAttribute("placeholder", "Ingrese valor");
  inputFC.setAttribute("id", `inputPromedio_${contadorInputs}`);
  contadorInputs++;
  output.appendChild(divcol);
  divcol.appendChild(divFG);
  divFG.appendChild(label);
  divFG.appendChild(inputFC);
}

function SacarPromedio() {
  llenarArray();
  
  let acumulador_prom = 0;
  for (let i = 0; i < contadorInputs; i++) {
    acumulador_prom += array_prom[i];
  }
  acumulador_prom/=contadorInputs;
  let alerta = document.getElementById('alerta');
  alerta.innerText=`El promedio es: ${acumulador_prom}`
  console.log(acumulador_prom);
}

function llenarArray() {
  for (let x = 0; x < contadorInputs; x++) {
    // Nos ayuda a comprobar si un dato es numerico o no y regresa un booleano
    const valor = document.getElementById(`inputPromedio_${x}`).value;
    console.log(valor);
    // Si es un numero lo manda a falso
    // Si es un caracter lo manda a un verdadero
    // Es una validacion
    if (!isNaN(valor)) {
      array_prom[x] = Number(valor);
    } else {
      array_prom[x] = 0;
    }
  }
}
