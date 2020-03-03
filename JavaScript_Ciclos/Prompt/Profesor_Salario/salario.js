EventListener();

function EventListener() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", Calcular_Salario_Anual);
}

function Calcular_Salario_Anual() {
  let salario = 1500;
  let porcentaje_aumento = 0;
  let t_f = 0;
  let alerta_años = document.getElementById("alerta_años");
  let total_final = document.getElementById("total_final");

  for (let i = 1; i <= 6; i++) {
    porcentaje_aumento = salario * 0.1;
    salario = salario + porcentaje_aumento;
    let li = document.createElement("li");
    li.setAttribute("class", "form-group-items text-center");
    li.innerText = `El aumento el año ${i} es: ${salario}`;
    alerta_años.appendChild(li);
    if (i == 6) {
      t_f = salario;
      total_final.innerHTML = `<div class="text-center alert alert-primary">El salario final es: ${t_f}</div>`;
    }
  }
}
