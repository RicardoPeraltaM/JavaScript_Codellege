EventListener();
let array = [];

let output = document.getElementById("output");

function EventListener() {
  document.getElementById("iniciarApp").addEventListener("click", FillArray);
}

function FillArray() {
  for (let x = 0; x < 25; x++) {
    array.push(Math.floor(Math.random() * (50 - 1) + 1));
  }

  let divCol = document.createElement("div");
  divCol.setAttribute("class", "col-12 mt-4");

  let alertaArray = document.createElement("alert");
  alertaArray.setAttribute(
    "class",
    "alert alert-success btn-block mt-3 text-center"
  );
  alertaArray.innerText = array;

  let label = document.createElement("label");
  label.innerText = `Ingresa Numero A Buscar:`;

  let input = document.createElement("input");
  input.setAttribute("id", "n_buscar");
  input.setAttribute("class", "form-control");
  input.setAttribute("placeholder", "Ingresa numero");
  input.setAttribute("type", "number");

  let boton = document.createElement("button");
  boton.setAttribute("class", "btn btn-outline-danger btn-block mt-3");
  boton.setAttribute("id", "boton_buscador");
  boton.innerText = "Buscar";

  output.appendChild(divCol);
  divCol.appendChild(alertaArray);
  divCol.appendChild(label);
  divCol.appendChild(input);
  divCol.appendChild(boton);
  Event();
}

function Event() {
  document.getElementById("boton_buscador").addEventListener("click", Buscador);
}

function Buscador() {
  let n_buscar = Number(document.getElementById("n_buscar").value);
  if (n_buscar <= 0) return;
  if (n_buscar == " ") return;

  let divColBuscador = document.createElement("div");
  divColBuscador.setAttribute("class", "col-12 mt-4");

  let ul = document.createElement("ul");
  ul.setAttribute("id", "ul");

  let alertaArrayBuscador = document.createElement("alert");
  alertaArrayBuscador.setAttribute(
    "class",
    "alert alert-warning btn-block mt-3 text-center"
  );

  for (let i = 0; i < array.length; i++) {
    if (n_buscar == array[i]) {
      output.appendChild(alertaArrayBuscador);
      alertaArrayBuscador.appendChild(divColBuscador);
      divColBuscador.appendChild(ul);
      let li = document.createElement("li");
      li.setAttribute("class", "form-group-item text-center");
      ul.appendChild(li);
      li.innerText = `El numero ${n_buscar} se encontro en la posicion ${i}`;
    }
  }

  //     let indices = [];
  //     let index = arreglo.indexOf(n_buscar);

  //     while (index != -1) {
  //       indices.push(index);
  //       index = arreglo.indexOf(n_buscar, index + 1);
  //     }

  //     console.log(indices);
}
