// let resultado = 0;
// for (let i = 0; i < 2; i++) {
//   let NumeroIngresado = Number(prompt("Ingrese numero: "));
//   resultado = resultado + NumeroIngresado;
// }
// console.log(resultado);

// const ZonaImprimir = document.getElementById('output');
// ZonaImprimir.innerHTML= resultado;

let button; //variable global
// hola
function crearDom() {
  const output = document.getElementById("output");
  for (let x = 1; x <= 5; x++) {
    //   creamos el div
    const div = document.createElement("div");
    div.classList.add("form-group");

    // creamos el label
    const label = document.createElement("label");
    label.innerText = `Ingresa el numero:  ${x}`;

    // creamos el input
    const input = document.createElement("input");
    // añadimos atributo
    input.setAttribute("type", "number");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", `n${x}`);

    // establecemos para saber donde poner la estructura
    output.appendChild(div);

    div.appendChild(label);
    div.appendChild(input);
  }

  const button = document.createElement("button");
  // ponemos texto en el boton
  button.innerText = "Calcular suma";
  // creamos el boton y establecemos clase y id
  button.setAttribute("id", "boton");
  button.setAttribute("class", "btn btn-outline-primary btn-block");
  // abrimos hasta abajo del div llamado output el boton
  output.appendChild(button);

  // Llamamos la funcion
  EventListener();
}

function EventListener() {
  button = document.getElementById("boton");
  button.addEventListener("click", suma);
}

function suma() {
  let acumulador = 0;
  for (let i = 1; i <= 5; i++) {
    let numero = Number(document.getElementById(`n${i}`).value);
    acumulador = acumulador + numero;
  }
  console.log(acumulador);
}

crearDom();
