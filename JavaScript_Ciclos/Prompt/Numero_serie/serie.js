EventListener();

function EventListener() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", numero_serie);
}

function numero_serie() {
  let n = 5,x = 1;
  let alerta = document.getElementById("alerta");

  while (n < 1800) {
    if (x % 2 == 0) {
      n = n + 3;
    } else {
      n = n + 2;
    }
    x++;
    console.log(n);
    let li = document.createElement("li");
    li.setAttribute("class", "form-group-items text-center");
    li.innerText = n;
    alerta.appendChild(li);
  }
}
