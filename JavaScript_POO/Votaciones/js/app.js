EventListener();
let votacion = new Votacion();
let output = document.getElementById("output");

function EventListener() {
  document
    .getElementById("btnAceptar")
    .addEventListener("click", IniciarVotaciones);
}

function IniciarVotaciones() {
  let Asunto_Votacion = document.getElementById("Asunto_Votacion").value;
  console.log(Asunto_Votacion);
  Eliminar();

  let divCol = document.createElement("div");
  divCol.setAttribute("class", "col-12");

  let divFG = document.createElement("div");
  divFG.setAttribute("class", "form-group");

  let input = document.createElement("input");
  input.setAttribute("class", "form-control mt-3 mb-3");
  input.disabled = true;
  input.value = Asunto_Votacion;

  let botonFavor = document.createElement("button");
  botonFavor.setAttribute("class", "btn btn-outline-success btn-block");
  botonFavor.innerText = "A Favor";
  botonFavor.setAttribute("id", "id_Afavor");
  botonFavor.setAttribute("value", "op1");

  let botonContra = document.createElement("button");
  botonContra.setAttribute("class", "btn btn-outline-danger btn-block");
  botonContra.innerText = "En Contra";
  botonContra.setAttribute("id", "id_Contra");
  botonContra.setAttribute("value", "op2");

  let botonAbstencion = document.createElement("button");
  botonAbstencion.setAttribute("class", "btn btn-outline-warning btn-block");
  botonAbstencion.innerText = "Abstencion";
  botonAbstencion.setAttribute("id", "id_Abstencion");
  botonAbstencion.setAttribute("value", "op3");

  let finalizar = document.createElement("button");
  finalizar.setAttribute("class", "btn btn-outline-dark btn-block");
  finalizar.innerText = "Finalizar";
  finalizar.setAttribute("id", "finalizar");

  output.appendChild(divCol);
  divCol.appendChild(divFG);
  divFG.appendChild(input);
  divFG.appendChild(botonFavor);
  divFG.appendChild(botonContra);
  divFG.appendChild(botonAbstencion);
  divFG.appendChild(finalizar);

  document.getElementById("id_Afavor").addEventListener("click", Operaciones);
  document.getElementById("id_Contra").addEventListener("click", Operaciones);
  document
    .getElementById("id_Abstencion")
    .addEventListener("click", Operaciones);
  document.getElementById("finalizar").addEventListener("click", Resultado);
}

function Eliminar() {
  while (output.firstChild) {
    output.firstChild.remove();
  }
}

function Operaciones(event) {
  // toElement = para cuando es boton
  let valor = event.toElement.value;
  console.log(valor);
  votacion.VotosContador(valor);
}

function Resultado() {
  // votacion.Imprimir_Res();
  document.getElementById("id_Afavor").disabled = true;
  document.getElementById("id_Contra").disabled = true;
  document.getElementById("id_Abstencion").disabled = true;

  console.log(votacion.Imprimir_Res());

  let divColImprimir = document.createElement("div");
  divColImprimir.setAttribute("class", "col-12");

  let alerta = document.createElement("alert");
  alerta.setAttribute("class", "alert alert-success text-center btn-block");
  alerta.innerText = votacion.Imprimir_Res();

  output.appendChild(divColImprimir);
  divColImprimir.appendChild(alerta);
}
