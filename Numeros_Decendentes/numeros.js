const boton = document.getElementById("boton");
boton.addEventListener("click", numeros_decentes_fun);

function numeros_decentes_fun() {
  let n_1 = Number(document.getElementById("n_1").value);
  let n_2 = Number(document.getElementById("n_2").value);
  let n_3 = Number(document.getElementById("n_3").value);
  // ALERTA
  let numeros_decendente = document.getElementById("numeros_decendente");

  if (n_1 > n_2 && n_1 > n_3) {
    if (n_2 > n_3) {
      numeros_decendente.innerHTML = `<div class="text-center alert alert-primary"> ${n_3} - ${n_2} - ${n_1} </div>`;
    } else {
      numeros_decendente.innerHTML = `<div class="text-center alert alert-primary"> ${n_2} - ${n_3} - ${n_1} </div>`;
    }
  } else if (n_2 > n_1 && n_2 > n_3) {
    if (n_1 > n_3) {
      numeros_decendente.innerHTML = `<div class="text-center alert alert-primary"> ${n_3} - ${n_1} - ${n_2} </div>`;
    } else {
      numeros_decendente.innerHTML = `<div class="text-center alert alert-primary"> ${n_1} - ${n_3} - ${n_2} </div>`;
    }
  } else if (n_3 > n_1 && n_3 > n_2) {
      if(n_1>n_2){
        numeros_decendente.innerHTML = `<div class="text-center alert alert-primary"> ${n_2} - ${n_1} - ${n_3} </div>`;

      }else{
        numeros_decendente.innerHTML = `<div class="text-center alert alert-primary"> ${n_1} - ${n_2} - ${n_3} </div>`;

      }
  }
}
