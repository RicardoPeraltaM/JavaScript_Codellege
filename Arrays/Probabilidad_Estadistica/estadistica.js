EventListener();
let output = document.getElementById("output");
let CI = 0;
let array = [];
function EventListener() {
  document.addEventListener("DOMContentLoaded", AddEvents);
}

function AddEvents() {
  document
    .getElementById("AgregarNumero")
    .addEventListener("click", InputsCrear);
  document.addEventListener("click", validarClick);
}

function InputsCrear() {
  const divCol = document.createElement("div");
  divCol.setAttribute("class", "col-12");

  const DivFG = document.createElement("div");
  DivFG.setAttribute("class", "form-group");

  const label = document.createElement("label");
  label.innerText = "Ingresa Numero:";

  const input = document.createElement("input");
  input.setAttribute("class", "form-control");
  input.setAttribute("type", "number");
  input.setAttribute("id", `n${CI}`);
  input.setAttribute("placeholder", "Ingresa numero");
  CI++;

  output.appendChild(divCol);
  divCol.appendChild(DivFG);
  DivFG.appendChild(label);
  DivFG.appendChild(input);
}

function FillArray() {
  for (let x = 0; x < CI; x++) {
    const n = Number(document.getElementById(`n${x}`).value);
    array[x] = n;
  }
  //   console.log(array);
}

function validarClick(botones) {
  FillArray();
  // Alertas Generales:
  let outputAlertas = document.getElementById("Alertas");

  const divColAlertas = document.createElement("div");
  divColAlertas.setAttribute("class", "col-12");

  let DivFGAlert = document.createElement("div");
  DivFGAlert.setAttribute("class", "form-group");

  let sumaV = 0;

  switch (botones.target.id) {
    case "op1":
      // MEDIA:
      const media = array.reduce((a, b) => a + b) / array.length;

      let MediaAlerta = document.createElement("alert");
      MediaAlerta.setAttribute(
        "class",
        "alert alert-primary btn-block text-center mt-4"
      );
      MediaAlerta.innerText = `La media es: ${media}`;

      // MEDIANA:
      array.sort((a, b) => a - b);
      let mediana =
        (array[(array.length - 1) >> 1] + array[array.length >> 1]) / 2;
      let MedianaAlerta = document.createElement("alert");
      MedianaAlerta.setAttribute(
        "class",
        "alert alert-success btn-block mt-4 text-center"
      );
      MedianaAlerta.innerText = `La mediana es: ${mediana}`;

      //   MODA
      let ModaArray = [];
      let j = 0;
      while (j < array.length) {
        if (array[j] == array[j + 1]) {
          ModaArray = array[j];
          j++;
        } else {
          j++;
        }
      }

      let ModaAlerta = document.createElement("alert");
      ModaAlerta.setAttribute(
        "class",
        "alert alert-primary btn-block mt-4 text-center"
      );
      ModaAlerta.innerText = `La moda es: ${ModaArray}`;

      //   Alertas opcion 1:
      outputAlertas.appendChild(divColAlertas);
      divColAlertas.appendChild(DivFGAlert);
      DivFGAlert.appendChild(MediaAlerta);
      DivFGAlert.appendChild(MedianaAlerta);
      //   validamos que haya una moda para poderla imprimir
      if (ModaArray != "") {
        DivFGAlert.appendChild(ModaAlerta);
      }

      break;

    case "op2":
      const n1 = array.length;
      // metodo reduce() reduce sobre cada elemento de un array
      const op_varianza = array.reduce((a, b) => a + b) / n1;
      console.log("reduce: " + op_varianza);

      // metodo map() crea un nuevo array con los resultados
      const Varianza =
        array.map(x => Math.pow(x - op_varianza, 2)).reduce((a, b) => a + b) /
        n1;

      let VarianzaAlert = document.createElement("alert");
      VarianzaAlert.setAttribute(
        "class",
        "alert alert-primary btn-block mt-3 text-center"
      );
      VarianzaAlert.innerText = `Varianza: ${Varianza}`;

      // Alertas opcion 2:
      outputAlertas.appendChild(divColAlertas);
      divColAlertas.appendChild(DivFGAlert);
      DivFGAlert.appendChild(VarianzaAlert);

      break;

    case "op3":
      const n = array.length;
      // metodo reduce() reduce sobre cada elemento de un array
      const operacion_d_estandar = array.reduce((a, b) => a + b) / n;
     
      // metodo map() crea un nuevo array con los resultados
      const d_estandar = Math.sqrt(
        array
          .map(x => Math.pow(x - operacion_d_estandar, 2))
          .reduce((a, b) => a + b) / n
      );

      let D_E_Alerta = document.createElement("alert");
      D_E_Alerta.setAttribute(
        "class",
        "alert alert-success btn-block mt-3 text-center"
      );
      D_E_Alerta.innerText = `Desviacion Estandar: ${d_estandar}`;

      //   Alertas opcion 3:
      outputAlertas.appendChild(divColAlertas);
      divColAlertas.appendChild(DivFGAlert);
      DivFGAlert.appendChild(D_E_Alerta);
      break;

    default:
      break;
  }
}
