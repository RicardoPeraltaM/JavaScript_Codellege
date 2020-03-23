EventListener();

function EventListener() {
  document.getElementById("btnIniciar").addEventListener("click", FillArray);
}

function FillArray() {
  let Array1 = [],
    Array2 = [];

  let alerta1 = document.getElementById("alerta1");
  let alerta2 = document.getElementById("alerta2");
  let alerta3 = document.getElementById("alerta3");

  for (let x = 0; x < 20; x++) {
    Array1.push(Math.floor(Math.random() * (100 - 1) + 1));
    Array2.push(Math.floor(Math.random() * (100 - 1) + 1));
  }

  alerta1.innerText = `Array 1: ${Array1}`;
  alerta2.innerText = `Array 2: ${Array2}`;

  let Array3 = Array1.concat(Array2);
  Array3.sort((a, b) => a - b);
  Array3.reverse();
  alerta3.innerText = `Array 3: ${Array3}`;
}
