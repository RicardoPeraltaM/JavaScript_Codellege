let boton = document.getElementById("boton");
boton.addEventListener("click", comprar_articulos);

function comprar_articulos() {
  let articulo_1 = Number(document.getElementById("articulo_1").value);
  let articulo_2 = Number(document.getElementById("articulo_2").value);
  let articulo_3 = Number(document.getElementById("articulo_3").value);
  let articulo_4 = Number(document.getElementById("articulo_4").value);
  // presupuesto
  let presupuesto = Number(document.getElementById("presupuesto").value);

  // alertas
  let alerta_1 = document.getElementById('alerta_1')
  let alerta_2 = document.getElementById('alerta_2')

//   PRECIOS DE LOS PRODUCTO
//   <option value="3500">AirPods</option>
//   <option value="18000">MacbookAir</option>
//   <option value="10000">IphoneX</option>
//   <option value="23000">IphonePro</option>
//   <option value="50000">MacbookPro</option>    

  let suma_articulos = articulo_4 + articulo_3 + articulo_2 + articulo_1;

  if (presupuesto < suma_articulos) {
      alerta_1.innerHTML= `<div class="text-center alert alert-danger mt-2"> No tienes fondos suficientes - Tu presupuesto: ${presupuesto} y el total de compra es ${suma_articulos}</div>`
  } else if (presupuesto == suma_articulos) {
    alerta_1.innerHTML= `<div class="text-center alert alert-success mt-2"> Gracias por su compra el total de compra fue de ${suma_articulos}</div>`
  } else {
    alerta_1.innerHTML= `<div class="text-center alert alert-success mt-2"> Gracias por su compra el total de compra fue de ${suma_articulos}</div>`
    let cambio = presupuesto-suma_articulos
    alerta_2.innerHTML= `<div class="text-center alert alert-warning mt-2"> Su cambio ${cambio} </div>`

  }
}
