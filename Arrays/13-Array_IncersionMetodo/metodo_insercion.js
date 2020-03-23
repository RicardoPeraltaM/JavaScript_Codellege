EventListener();
function EventListener() {
  document.getElementById("BtnCalcular").addEventListener("click", MInsercion);
}

function MInsercion() {
  let t_Array = Number(document.getElementById("t_Array").value);
  let Array = [];
  for (let x = 0; x < t_Array; x++) {
    Array.push(Math.floor(Math.random() * (100 - 0) + 0));
  }

  let Alerta = document.getElementById("Alerta");

  const M_Array = Array.length;
  for (let i = 0; i < M_Array; i++) {
    for (let j = 0; j < M_Array - 1 - i; j++) {
      if (Array[j] > Array[j + 1]) {
        [Array[j], Array[j + 1]] = [Array[j + 1], Array[j]];
      }
    }
  }
  Alerta.innerText = Array;
}
