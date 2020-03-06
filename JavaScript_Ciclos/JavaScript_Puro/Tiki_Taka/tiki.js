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
  boton_2.setAttribute("class", "btn btn-outline-warning btn-block mb-4");
  boton_2.setAttribute("id", "boton_2");
  output.appendChild(boton_2);

  // // ALERTAS
  let div = document.createElement("div");
  div.classList.add("form-group");
  // alerta 1
  let alerta1 = document.createElement("alert");
  alerta1.setAttribute(
    "class",
    "alert alert-danger text-center btn-block mt-2"
  );
  alerta1.setAttribute("id", "alerta1");
  // alerta 2
  let alerta2 = document.createElement("alert");
  alerta2.setAttribute(
    "class",
    "alert alert-warning text-center btn-block mt-2"
  );
  alerta2.setAttribute("id", "alerta2");
  // alerta 3
  let alerta3 = document.createElement("alert");
  alerta3.setAttribute(
    "class",
    "alert alert-primary text-center btn-block mt-2"
  );
  alerta3.setAttribute("id", "alerta3");

  output.appendChild(div);
  div.appendChild(alerta1);
  div.appendChild(alerta2);
  div.appendChild(alerta3);

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

  // ALERTA
  let alerta1 = document.getElementById("alerta1");
  let alerta2 = document.getElementById("alerta2");
  // let alerta3 = document.getElementById("alerta3");
  //  IMPRIMO
  alerta1.innerText = `Los numeros ventas mayores a 1000 son: ${m_1000}`;
  alerta2.innerText = `Los numeros mayores a 500 y menores a 1000: ${mm500}`;
  alerta3.innerText = `Las ventas menores o igual a 500 son: ${m500}`;
}
