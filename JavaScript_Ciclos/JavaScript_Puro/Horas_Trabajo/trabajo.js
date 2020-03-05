CrearDom();

function CrearDom() {
  let output = document.getElementById("output");
  for (let i = 1; i <= 6; i++) {
    // Creamos div
    let div = document.createElement("div");
    div.classList.add("form-group");

    // Creamos label
    let label = document.createElement("label");
    label.innerText = `Ingresa horas de trabajo dia ${i}`;

    // Creamos los input
    let input = document.createElement("input");
    // Añadimos atributos
    input.setAttribute("type", "number");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", `n${i}`);

    // Establecemos donde se pone
    output.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
  }
  //   BOTONES
  let button = document.createElement("button");
  button.innerText = "Calcular horas de trabajo";
  button.setAttribute("class", "btn btn-outline-dark btn-block");
  button.setAttribute("id", "boton");
  output.appendChild(button);
  // Alertas
  let alerta = document.createElement("alert");
  alerta.setAttribute(
    "class",
    "alert alert-primary text-center btn-block mt-4"
  );
  alerta.setAttribute("id", "alerta");
  output.appendChild(alerta);

  //   Llamo la funcion
  EventListener();
}

function EventListener() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", horas_trabajo);
}

function horas_trabajo() {
  let pago_horas = 75;
  let acumulador = 0;
  for (let x = 1; x <= 6; x++) {
    let numero = Number(document.getElementById(`n${x}`).value);
    acumulador = acumulador + numero;
  }
  
  pago_horas = pago_horas * acumulador;
  let alerta = document.getElementById("alerta");
  alerta.innerText = `El sueldo final es de: ${pago_horas}`;
}
