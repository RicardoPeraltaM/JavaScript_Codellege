EventListener();
function EventListener() {
  const boton = document.getElementById("boton");
  boton.addEventListener("click", horas_empleado);
}

function horas_empleado() {
  let horas_trabajadas = 0;
  let sueldoxhora = 82.5;
  for (let i = 1; i <= 6; i++) {
    let hora = Number(prompt(`ingresa horas trabajadas en el dia ${i}`));
    horas_trabajadas += hora;
  }
  sueldoxhora = sueldoxhora * horas_trabajadas;
  console.log("horas trabajadas = " + horas_trabajadas);
  console.log("sueldo = " + sueldoxhora);
  let alerta = document.getElementById("alerta");
  alerta.innerHTML = `<div class="alert alert-warning text-center mt-3">El total de horas trabajadas es: ${horas_trabajadas} el sueldo total es de: ${sueldoxhora}</div>`;
}
