EventListener();
function EventListener() {
  document.getElementById("iniciar").addEventListener("click", ArrayAcomodar);
}

function ArrayAcomodar() {
  // Alertas
  let array_inicial = document.getElementById("array_inicial");
  let array_final = document.getElementById("array_final");
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  array_inicial.innerText = `Array inicial: ${array}`;
  array_final.innerText = `Array inverso: ${array.reverse()}`;
}
