EventListener();
//  push = agrega elementos a la ultima posicion del array

let array = [];
let outArray = [];
function EventListener() {
  document.getElementById("t_array").addEventListener("keypress", getSize);
  document.addEventListener("click", validarClick);
}

function getSize(tamaño_a) {
  console.log(tamaño_a);

  if (tamaño_a.key != "Enter") return;
  if (tamaño_a.target.value == "") return;
  if (isNaN(tamaño_a.target.value)) return;
  if (tamaño_a.target.value <= 0) return;
  createArray(tamaño_a.target.value);
  tamaño_a.target.value = "";
}

function createArray(array_tamaño) {
  array = [];
  for (let x = 0; x < array_tamaño; x++) {
    array.push(Math.floor(Math.random() * (11 - 1) + 1));
  }
  console.log(array);
}

function validarClick(tamaño_a) {
  if (tamaño_a.target.id == "op1") {
    console.log(tamaño_a.target);

    for (let x = 0; x < array.length; x++) {
      if ((x + 1) % 2 == 0) {
        outArray.push(0);
      } else {
        outArray.push(array[x]);
      }
    }
    console.log(outArray);
  }
  if (tamaño_a.target.id == "op2") {
    array.pop();
    console.log(array);
  } else return;
}
