function EventListener() {
  const boton = document.getElementById("boton");
  boton.addEventListener("click", numeros_imprimir);
}

function numeros_imprimir() {
    const listGroup = document.getElementById("numeros_c");

  for (let i =100; i > 0; i--) {
    const li = document.createElement("li");
    li.setAttribute("class", "list-group-item  text-center");
    li.innerText = `Numero: ${i}`;
    listGroup.appendChild(li);
  }
}

EventListener();
