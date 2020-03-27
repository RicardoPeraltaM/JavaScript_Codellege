EventListener();
let  foco = new Foco();

function EventListener() {
  document.getElementById("boton").addEventListener("click", CambiarEstado);
}

function CambiarEstado() {
    document.getElementById("imagen").src = foco.CambiarEstado();
}
