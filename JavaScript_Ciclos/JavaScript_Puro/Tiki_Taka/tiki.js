CreateDom();

function CreateDom() {
  let output = document.getElementById("output");
  // div
  let div = document.createElement("div");
  div.classList.add("form-group");
  // label
  let label = document.createElement("label");
  label.innerText = "Ingresa Numero De Ventas En El Dia:";
  // input
  let input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("class", "form-control");
  input.setAttribute("id", "n_ventas");

  output.appendChild(div);
  div.appendChild(label);
  div.appendChild(input);
  // BOTON
  let boton = document.createElement("button");
  boton.innerText = "Tomar valor de ventas";
  boton.setAttribute("id", "boton");
  boton.setAttribute("class", "btn btn-outline-primary btn-block");
  output.appendChild(boton);
  EventListener();
}

// PARA AGARRAR EL VALOR DE EL NUMERO DE VENTAS QUE OCUPO
function EventListener() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", dom_ventas);
}

function dom_ventas() {
  let numero_ventas = Number(document.getElementById("n_ventas").value);
  for (let x = 1; x <= numero_ventas; x++) {
    let div_2 = document.createElement("div");
    div_2.classList.add("form-group");
    // label
    let labe_1 = document.createElement("label");
    labe_1.innerText = "Ingresa Venta:";
    // input
    let input_1 = document.createElement("input");
    input_1.setAttribute("class", "form-control");
    input_1.setAttribute("id", `n_v${x}`);

    output.appendChild(div_2);
    div_2.appendChild(labe_1);
    div_2.appendChild(input_1);
  }

  let boton_2 = document.createElement("button");
  boton_2.innerText = "Calcular Ventas";
  boton_2.setAttribute("class", "btn btn-outline-warning btn-block");
  boton_2.setAttribute("id", "boton_2");
  output.appendChild(boton_2);
  EventListener2();
}

function EventListener2() {
  let boton_2 = document.getElementById("boton_2");
  boton_2.addEventListener("click", hacer_op_ventas);
}

function hacer_op_ventas() {
  let numero_ventas = Number(document.getElementById("n_ventas").value);
  let m_1000 = 0,
    mm500 = 0,
    m500 = 0;
  for (let x = 1; x <= numero_ventas; x++) {
    let n = Number(document.getElementById(`n_v${x}`).value);
    console.log(n);
    if (n > 1000) {
      m_1000++;
    } else if (n > 500 && n <= 1000) {
      mm500++;
    } else if (n <= 500) {
      m500++;
    }
  }
}
