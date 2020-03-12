EventListener();
let array = [];
const output = document.getElementById("output");

function EventListener() {
  document.getElementById("boton").addEventListener("click", Numeros_Resultado);
  document.getElementById("reset").addEventListener("click", reiniciar_app);
  document.addEventListener("DOMContentLoaded", CargarInputs);
}

function CargarInputs() {
  for (let i = 0; i < 10; i++) {
    const divFG = document.createElement("div");
    divFG.setAttribute("class", "form-group");

    const labelFG = document.createElement("label");
    labelFG.innerText = `Ingresa numero ${i}`;

    const inputFC = document.createElement("input");
    inputFC.setAttribute("class", "form-control");
    inputFC.setAttribute("type", "number");
    inputFC.setAttribute("placeholder", "ingresa un valor");
    inputFC.setAttribute("id", `n${i}`);

    // Colocamos estuctura
    output.appendChild(divFG);
    divFG.appendChild(labelFG);
    divFG.appendChild(inputFC);
  }
}

function reiniciar_app() {
  // Para recargar la pagina
  window.location.reload();
}

function Numeros_Resultado() {
  for (let x = 0; x < 10; x++) {
    const valor = document.getElementById(`n${x}`).value;
    if (valor != "") {
      array[x] = valor;
    } else {
      array[x] = `<span class="text-danger">No se ingreso numero</span>`;
    }
  }
  console.log(array);

  MostrarValores();
}

function MostrarValores() {
  ClearDom();

  const MostrarArray = document.getElementById("MostrarArray");
  for (let x = 0; x < array.length; x++) {
    const li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    li.innerHTML = `<p>Index: ${x}  </p> <p> Valor: ${array[x]}</p>`;
    MostrarArray.appendChild(li);
  }
}

function ClearDom() {
  // El firstchild es para verdadero o falso
  // si hay un primer hijo

  while (output.firstChild) {
    // es para borrar el primer hijo ;
    output.firstChild.remove();
  }
}
