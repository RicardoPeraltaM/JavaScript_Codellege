createDom();

function createDom() {
  let output = document.getElementById("output");

  let div = document.createElement("div");
  div.classList.add("form-group");

  let label = document.createElement("label");
  label.innerText = "Ingresa un numero";

  let input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("class", "form-control");
  input.setAttribute("id", "numero");

  output.appendChild(div);
  div.appendChild(label);
  div.appendChild(input);

  let button = document.createElement("button");
  button.innerText = "Calcular";
  button.setAttribute("id", "button");
  button.setAttribute("class", "btn btn-outline-sucess btn-block");
  output.appendChild(button);
  //   alerta
  let alerta = document.createElement("alert");
  alerta.setAttribute("class", "alert alert-primary text-center btn-block");
  alerta.setAttribute("id", "alerta");
  output.appendChild(alerta);

  EventListener();
}

function EventListener() {
  let button = document.getElementById("button");
  button.addEventListener("click", realizar_op);
}

function realizar_op() {
  let numero = Number(document.getElementById("numero").value);
  let r = 0;
  if (numero % 2 == 0) {
    r = numero / 2;
  } else {
    r = numero * 3 + 1;
  }
  let alerta = document.getElementById("alerta");
  alerta.innerText = `El resultado es = ${r}`;
}
