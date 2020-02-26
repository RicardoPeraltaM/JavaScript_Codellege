function EventListener() {
  const button = document.getElementById("boton");
  button.addEventListener("click", iniciar_app);
}

function iniciar_app() {
  let n_alumnos = Number(prompt("¿Cuantos alumnos son?"));
  let resultado = 0;
  let promedio;
  for (let i = 1; i <= n_alumnos; i++) {
    let Edades = Number(prompt(`Ingrese la edad del alumno ${i}:`));
    resultado += Edades;
  }
  promedio = resultado / n_alumnos;
  console.log(promedio);

  let ZonePrint = document.getElementById("ZonePrint");
  ZonePrint.innerHTML = "El promedio es: " + promedio;
}

EventListener();
