EventListener();
let Array1 = [];
let Array2 = [];

function EventListener() {
  document.getElementById("boton").addEventListener("click", Validation);
}

function Validation() {
  let t_array = Number(document.getElementById("t_array").value);
  let N_Op = Number(document.getElementById("N_Op").value);
  if (N_Op <= 0 || t_array <= 0) return;
  if (N_Op == "" || t_array == "") return;
  if (isNaN(N_Op) || isNaN(t_array)) return;
  FillArray(t_array, N_Op);
}

function FillArray(ta_array, N_Operacion) {
  let s1 = 0,
    s2 = 0;
  for (let x = 0; x < ta_array; x++) {
    Array1.push(Math.floor(Math.random() * (100 - -100)) + -100);
    s1 = s1 + Array1[x];
    Array2.push(Math.floor(Math.random() * (100 - -100)) + -100);
    s2 = s2 + Array2[x];
  }
  // Alertas Imprimir
  let Total_Array = document.getElementById("Total_Array");
  let Resultado_OP = document.getElementById("Resultado_OP");
  let sumaRes = document.getElementById("sumaRes");
  //   OPCIONES
  let c = 0;
  if (N_Operacion == 1) {
    c = s1 + s2;
    Resultado_OP.innerText = `El resultado es: ${c}`;
  } else if (N_Operacion == 2) {
    c = s2 - s1;
    Resultado_OP.innerText = `El resultado es: ${c}`;
  } else if (N_Operacion == 3) {
    c = s2 * s1;
    Resultado_OP.innerText = `El resultado es: ${c}`;
  }
  Total_Array.innerText = `El array 1 es ${Array1}        El array 2 es ${Array2}`;
  sumaRes.innerText = `Suma Array 1 es: ${s1}             Suma Array 2 es: ${s2}`;
}
