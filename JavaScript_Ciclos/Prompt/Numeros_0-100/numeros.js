function EventListener() {
  const boton = document.getElementById("boton");
  boton.addEventListener("click", numeros_imprimir);
}

function numeros_imprimir() {
    const listGroup = document.getElementById("numeros_c");
    let n=0;

  for (let i = 0; i < 100; i++) {
    n++;
    const li = document.createElement("li");
    li.setAttribute("class", "list-group-item  text-center");
    li.innerText = `Numero: ${n}`;
    listGroup.appendChild(li);
  }
}

EventListener();
