let boton = document.getElementById("boton");
boton.addEventListener("click", productos);

function productos() {
  let tarjeta = Number(document.getElementById("tarjeta").value);
  let chocolates = Number(document.getElementById("chocolates").value);
  let flores = Number(document.getElementById("flores").value);
  let anillo = Number(document.getElementById("anillo").value);

let sumaProductos = tarjeta+chocolates+flores+anillo;
let alerta = document.getElementById('alerta')
alerta.innerHTML=`<div class="text-center alert alert-primary mt-3">El precio final de la compra es ${sumaProductos}</div>`

}
