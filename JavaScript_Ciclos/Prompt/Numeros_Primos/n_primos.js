EventListener();


function EventListener() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", numeros_primos);
}

function numeros_primos() {
  let cont = 1,
    cont2 = 0,
    indicador = 0;
  const listGroup = document.getElementById("ListaAhorro");
  var numero = Number(prompt("Ingresa numero"));
  while (cont <= numero) {
    while (cont2 < cont) {
      if (cont % cont2 == 0 && cont2 != 1 && cont2 != cont) {
        indicador = 1;
      }
      cont2++;
    }
    if (indicador == 0) {
      const li = document.createElement("li");
      li.setAttribute("class", "list-group-item text-center mt-3");
      li.innerText = `Numero: ${cont2}`;
      listGroup.appendChild(li);
    //   console.log(cont2);
    } else {
        indicador = 0;
    }

    cont++;
    cont2 = 0;
  }
}
