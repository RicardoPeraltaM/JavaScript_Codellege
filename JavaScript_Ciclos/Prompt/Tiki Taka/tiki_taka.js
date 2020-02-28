
EventListener();
function EventListener (){
    let boton = document.getElementById("boton");
    boton.addEventListener("click", tiki_taka_inicio);
}

function tiki_taka_inicio() {
    let compras=true;
    let total_venta=0;
    let mayores_mil=0,mayores_quinientos=0, menores_quinientos=0;

    
  while(compras){
      let venta = Number(prompt('Ingresa venta del dia:'));
      if (venta>1000){
mayores_mil++;
      }
      if(venta>500 && venta<=1000){
mayores_quinientos++;
      }
      if(venta<=500){
        menores_quinientos+=1;
      }

      if (venta==0){
          compras=false;
      }
      total_venta=total_venta+venta;
  }
//   ALERTAS
  const alerta_1 = document.getElementById("alerta_1");
  const alerta_2 = document.getElementById("alerta_2");
  const alerta_3 = document.getElementById("alerta_3");
  const alerta_4 = document.getElementById("alerta_4");

 alerta_1.innerHTML= `<div class="alert alert-warning mt-3">Mayores a 1000: ${mayores_mil}</div>`
 alerta_2.innerHTML= `<div class="alert alert-info mt-3">Mayores a 500 y menores o iguales a 1000: ${mayores_mil}</div>`
 alerta_3.innerHTML= `<div class="alert alert-danger mt-3">Menores o iguales a 500: ${mayores_mil}</div>`
  alerta_4.innerHTML= `<div class="alert alert-primary mt-3" >El total de compra: ${total_venta}</div>`
}
