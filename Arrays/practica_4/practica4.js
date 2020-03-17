EventListener();
function EventListener() {
  document.getElementById("TamañoArray").addEventListener("keypress", CreatDom);
}

// Event es el que manda los parametros
function CreatDom(event) {
  if (event.key == "Enter") {
    //         console.log(event.target.value);
    // console.log("Funciona Enter");

    // Si es NAN no es un numero
    // Si nan es falso es un numero
    if (isNaN(event.target.value)) return;
    console.log("works");

    rellenarArray(event.target.value);
  }
}

function rellenarArray(tamañoArray) {
  let array_n_aleatorios = [];

  for (let x = 0; x < tamañoArray; x++) {
    array_n_aleatorios[x] = Math.floor(Math.random() * (10 - 1)) + 1;
    console.log(array_n_aleatorios)
  }
}
