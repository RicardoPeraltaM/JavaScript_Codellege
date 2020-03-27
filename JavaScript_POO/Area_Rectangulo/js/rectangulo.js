EventListener();

function EventListener() {
  document.getElementById("calcular").addEventListener("click", SacarArea);
}

function SacarArea() {
  let altura = Number(document.getElementById("altura").value);
  let base = Number(document.getElementById("base").value);

  let op = new SacArea(altura, base);
  op.operacion();

  let alerta = document.getElementById("alerta");
  alerta.innerText = op.operacion();
}
