function EventListener() {
  const boton = document.getElementById("boton");
  boton.addEventListener("click", Cuenta_ahorros);
}

function Cuenta_ahorros() {
  let acumulador = 0;
  const listGroup = document.getElementById("ListaAhorro");

  for (let i = 1; i <= 12; i++) {
    //   Es para hacerlo con el prompt
    let ahorro = Number(prompt("¿ Cual es tu ahorro del mes ?"));

    acumulador += ahorro;
    // CREAMOS UN LI
    const li = document.createElement("li");
    // le ponemos un atributo en este cacso es una clase
    li.setAttribute("class", "list-group-item text-center");
    // le agregamos un texto
    li.innerText = `El dinero ahorrado en el mes ${i} es : ${ahorro}`;
    // le decimos donde se debe agregar
    listGroup.appendChild(li);
  }

  const li = document.createElement("li");
  li.setAttribute("class", "list-group-item bg-danger text-center");
  li.innerText = `El dinero ahorrado en todo el año es: ${acumulador}`;
  listGroup.appendChild(li);

}

EventListener();
