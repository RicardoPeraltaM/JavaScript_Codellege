EventListener();
const output = document.getElementById("output");

function EventListener() {
  document
    .getElementById("boton_inicio")
    .addEventListener("click", Mostrar_Inputs);
}

function Mostrar_Inputs() {
  const n_inputs = Number(document.getElementById("n_inputs").value);

  // return es para sacarlo de la aplicacion automaticamente
  if (n_inputs > 1000 || n_inputs <= 0) return;

  EliminarElementos();

  //   Creo el row
  const row = document.createElement("div");
  row.setAttribute("class", "row");

  for (let i = 0; i < n_inputs; i++) {
    const divCol = document.createElement("div");
    divCol.setAttribute("class", "col-12");

    const divFG = document.createElement("div");
    divFG.setAttribute("class", "form-group");

    const label = document.createElement("label");
    label.innerText = `Ingrese numero a guardar en el arreglo`;

    const input = document.createElement("input");
    input.setAttribute("class", "form-control");
    input.setAttribute("type", "number");
    input.setAttribute("id", `n_array${i}`);

    row.appendChild(divCol);
    divCol.appendChild(divFG);
    divFG.appendChild(label);
    divFG.appendChild(input);
  }
  output.appendChild(row);
  const buttonResultado = document.createElement("button");
  buttonResultado.innerText = "Obtener resultado";
  buttonResultado.setAttribute("class", "btn btn-outline-success btn-block");
  buttonResultado.setAttribute("id", "calcular_resultado");

  row.appendChild(buttonResultado);

  document
    .getElementById("calcular_resultado")
    .addEventListener("click", RelizaComparacion);
}

function EliminarElementos() {
  while (output.firstChild) {
    output.firstChild.remove();
  }
}

let arreglo1 = [];

function RelizaComparacion() {
  // los elementos que puedes llamar en todo el body
  const numero_inputs = document.getElementsByTagName("input");
  // console.log(numero_inputs);
  // let acumulador = 0;

  for (let x = 0; x < numero_inputs.length; x++) {
    // acumulador += Number(numero_inputs[x].value);

    for (let i = x + 1; i < numero_inputs.length; i++) {
      if (numero_inputs[x].value == numero_inputs[i].value) {
        numero_inputs[i].value = "";
      }
    }
    // console.log(numero_inputs[x].value);
    // console.log(acumulador);
  }

  MostrarDatos(numero_inputs);
}

function MostrarDatos(NumeroInputsArreglo = []) {
 
  for (let x = 0; x < NumeroInputsArreglo.length; x++) {
    if (NumeroInputsArreglo[x].value != "") {
      console.log(NumeroInputsArreglo[x].value);
    }
  }
  
}
