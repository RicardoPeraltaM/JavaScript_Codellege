const ARealizar = document.getElementById("ARealizar");
const lista_actividades = document.getElementById("lista_actividades");
const lista_actividades_finalizadas = document.getElementById(
  "lista_actividades_finalizadas"
);

EventListener();
ActividadesLS();
finalizadas();

function EventListener() {
  document.querySelector("#formulario").addEventListener("submit", OFormulario);
  lista_actividades.addEventListener("click", FinalizarACTIVIDAD);
  // lista_actividades_finalizadas.addEventListener("click", FinalizarACTIVIDAD);
}

function OFormulario() {
  if (ARealizar.value.trim() == "") return;

  actividades = new Actividades(ARealizar.value);
  actividades.AgregarActividadDom(lista_actividades, true);

}

function FinalizarACTIVIDAD(actividad) {
  Actividades.ActividadTerminada(actividad);
  location.reload();
}



function ActividadesLS() {
  const actividadLS = MLocalStorage.ObtenerLS();

  for (let x = 0; x < actividadLS.length; x++) {
    const InstanciaActividades = new Actividades(actividadLS[x]);
    // console.log("p: "+actividadLS[x]);
    InstanciaActividades.AgregarActividadDom(lista_actividades, false);
  }
}

function finalizadas() {
  const finalizadasA = MLocalStorage.ObetenerFinalizadas();

  for (let i = 0; i < finalizadasA.length; i++) {
    Actividades.AgregarActividadFinalizadaDOM(
      lista_actividades_finalizadas,
      finalizadasA[i]
    );
  }

  // console.log("actividad finalizadas: " + finalizadasA);
}
