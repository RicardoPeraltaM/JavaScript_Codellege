EventListener();

function EventListener() {
  document.getElementById("InitApp").addEventListener("click", FillArray);
}

function FillArray() {
  let Array = [];
  let Array2 = [];
  for (let x = 0; x < 30; x++) {
    Array.push(Math.floor(Math.random() * (100 - 1) + 1));
    if (Array[x] % 7 == 0) {
      Array2.push(Array[x]);
    }
  }

  //   ALERTAS
  let Alert2 = document.getElementById("Alert2");
  let Alert1 = document.getElementById("Alert1");

  Alert1.innerText = `Array Inicial: ${Array}`;
  Alert2.innerText = `Array Multiplos 7 : ${Array2}`;
}
