EventListener();
function EventListener() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", alumnos_calificaciones);
}

function alumnos_calificaciones() {
  let c1 = 0,
    c2 = 0,
    c3 = 0;
  let suma_calificacion = 0,
    calificacion_m = 0,
    calificacion_h = 0;

  for (let i = 1; i <= 4; i++) {
    let calificacion = Number(prompt("Ingrese calificacion:"));
    c1++;
    suma_calificacion = suma_calificacion + calificacion;
    let sexo = prompt("ingresa tu sexo: ");
    // SI ES MUJER
    if (sexo == "M" || sexo == "m") {
      c2++;
      calificacion_m = calificacion_m + calificacion;
    }
    // SI ES HOMBRE
    else if ((sexo == "H", "h")) {
      c3++;
      calificacion_h = calificacion_h + calificacion;
    }
  }

  // ALERTAS
  let alerta1 = document.getElementById("alerta1");
  let alerta2 = document.getElementById("alerta2");
  let alerta3 = document.getElementById("alerta3");
  let alerta4 = document.getElementById("alerta4");

  //   Promedio de todos
  suma_calificacion = suma_calificacion / c1;
  alerta1.innerText = `El promedio final de todos es: ${suma_calificacion}`;
  //   promedio mujeres
  calificacion_m = calificacion_m / c2;
  alerta2.innerText = `El promedio de las mujeres es: ${calificacion_m}`;
  // promedio hombres
  calificacion_h = calificacion_h / c3;
  alerta3.innerText = `El promeido de los hombres es: ${calificacion_h}`;

  if (calificacion_h > calificacion_m) {
    alerta4.innerText = `El promedio de los hombres es mayor`;
  } else {
    alerta4.innerText = `El promedio de las mujeres es mayor`;
  }
}
