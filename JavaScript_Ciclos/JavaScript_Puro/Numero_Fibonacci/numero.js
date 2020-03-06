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
  button.setAttribute("class", "btn btn-outline-primary btn-block");
  button.innerText = "CALCULAR FIBONACCI";
  button.setAttribute("id", "button");
  output.appendChild(button);

 //   alerta
 let alerta = document.createElement("alert");
 alerta.setAttribute("class", "alert alert-primary text-center btn-block");
 alerta.setAttribute("id", "alerta");
 output.appendChild(alerta);

  EventListener();
}

function EventListener() {
  let boton = document.getElementById("button");
  boton.addEventListener("click", numero_fibonacci);
}

function numero_fibonacci() {
  let numero = Number(document.getElementById("numero").value);
  let a = 1,
    b = 0;
  c = 0;
  for (let i = 0; i <= numero; i++) {
    c = a + b;
    a = b;
    b = c;
    // console.log(a);
  }
  let alerta = document.getElementById("alerta");
  alerta.innerText=`Numero serie: ${a}`;
}
