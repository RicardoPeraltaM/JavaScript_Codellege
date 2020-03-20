function EventListener() {
  document.getElementById("t_array").addEventListener("keypress", Validaciones);
}

function Validaciones(validacion) {
  if (validacion.key == "Enter") {
    if (isNaN(validacion.target.value)) return;
    FillArray(validacion.target.value);
  }
}

function FillArray(tamaño_array) {
let array = [];
for (let x = 0; x < tamaño_array; x++){

}

}
