EventListener();

function EventListener() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", numero_serie);
}

function numero_serie() {
  let n = 5;
  let inicio = true;
  let alerta = document.getElementById("alerta");
  let alerta_1 = document.getElementById("alerta_1");

  while (inicio) {
    let li = document.createElement("li");
    li.setAttribute("class", "form-group-items text-center");

    let li_1 = document.createElement("li");
    li_1.setAttribute("class", "form-group-items text-center");

    n = n + 2;
    console.log(n);
    li_1.innerText = n;
    alerta_1.appendChild(li_1);

    n = n + 3;
    li.innerText = n;
    console.log(n);
    alerta.appendChild(li);
    if (n == 40) {
      inicio = false;
    }
  }
}
