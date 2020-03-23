EventListener();

function EventListener() {
  document.getElementById("btnIniciarApp").addEventListener("click", FillArray);
}

function FillArray() {
  let alerta = document.getElementById("alerta");
  let alerta_impares = document.getElementById("alerta_impares");

  let Array = [];
  let ArrayImpar = [];

  for (let x = 0; x < 30; x++) {
    Array.push(Math.floor(Math.random() * (301 - 100) + 100));
    if (Array[x] % 2 != 0){
        ArrayImpar.push(Array[x]);
    }
  }
  alerta.innerText = Array;
  alerta_impares.innerText = `Impares: ${ArrayImpar}`
}
