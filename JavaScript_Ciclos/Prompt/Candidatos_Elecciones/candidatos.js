EventListener();

function EventListener() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", elecciones);
}

function elecciones() {
  let empezar_elecciones = true;
  let v1 = 0,
    v2 = 0,
    v3 = 0,
    v4 = 0;

  while (empezar_elecciones) {
    let n_eleccion = Number(
      prompt("Ingresa numero de candidatos por quien votaras: ")
    );
    if (n_eleccion == 1) {
      v1 = v1 + 1;
    } else if (n_eleccion == 2) {
      v2 = v2 + 1;
    } else if (n_eleccion == 3) {
      v3 = v3 + 1;
    } else if (n_eleccion == 4) {
      v4 = v4 + 1;
    }
    if (n_eleccion == 0) {
      empezar_elecciones = false;
    }
  }

  let t_votos = v1 + v2 + v3 + v4;
  //   console.log(t_votos);
  let t_v1 = (v1 / t_votos) * 100;
  let t_v2 = (v2 / t_votos) * 100;
  let t_v3 = (v3 / t_votos) * 100;
  let t_v4 = (v4 / t_votos) * 100;

  // ALERTAS
  let alerta1 = document.getElementById("alerta1");
  alerta1.innerHTML = `<div class="text-center alert alert-primary mt-3">Candidato Numero 1: El numero de botonos es: ${v1} el porcentaje es: ${t_v1}</div>`;
  let alerta2 = document.getElementById("alerta2");
  alerta2.innerHTML = `<div class="text-center alert alert-warning">Candidato Numero 2: El numero de botonos es: ${v2} el porcentaje es: ${t_v2}</div>`;
  let alerta3 = document.getElementById("alerta3");
  alerta3.innerHTML = `<div class="text-center alert alert-dark">Candidato Numero 3: El numero de botonos es: ${v3} el porcentaje es: ${t_v3}</div>`;
  let alerta4 = document.getElementById("alerta4");
  alerta4.innerHTML = `<div class="text-center alert alert-info">Candidato Numero 4: El numero de botonos es: ${v4} el porcentaje es: ${t_v4}</div>`;
}
