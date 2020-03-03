EventListener();

function EventListener() {
  let boton = document.getElementById("boton");
  boton.addEventListener("click", Mandil);
}

function Mandil() {
  // variables
  let primero = true;
  let n_empleados = 0;
  let t_venta = 0;
  // alertas
  let n_tiendas_alerta = document.getElementById("n_tiendas_alerta");
  let ciudad_alerta = document.getElementById("ciudad_alerta");
  let alerta_total_sucursal = document.getElementById("alerta_total_sucursal");
  let alerta_total_ventas_finales = document.getElementById(
    "alerta_total_ventas_finales"
  );
  let alerta_venta_por_empleado = document.getElementById(
    "alerta_venta_por_empleado"
  );
  let alerta_numero_empleado = document.getElementById(
    "alerta_numero_empleado"
  );

  while (primero) {
    //   ciudad
    let ciudad = prompt("ingresa nombre de la ciudad: ");
    // si no ingresa nada se toma como vacio
    if (ciudad == "") {
      primero = false;
    }
    // confirmo que la ciudad se haya ingresado para poder continuar
    if (ciudad != "") {
      //   pido el numero de tiendas de la ciudad ingresada
      let n_tiendas = Number(prompt("Ingtresa el numero de tiendas"));
      //   numero de tiendas
      n_tiendas_alerta.innerHTML = `<div class="text-center alert alert-primary"> Numero de tiendas: ${n_tiendas} ciudad: ${ciudad} </div>`;

      for (let i = 1; i <= n_tiendas; i++) {
        // ingresar numero de empleados
        n_empleados = Number(
          prompt(
            `Ingresa el numero de empleados que trabajan en la tienda ${i}: `
          )
        );
        //   DECLARO EN 0 LA VARIABLE
        let total_sucursal = 0;
        // NUMERO DE EMPLEADOS DE CADA SUCUSAL
        let li = document.createElement("li");
        li.setAttribute("class", "form-group-items text-center");
        li.innerText = `Numero de empleados ${n_empleados} numero de tienda ${i} ciudad: ${ciudad}`;
        alerta_numero_empleado.appendChild(li);
        for (let x = 1; x <= n_empleados; x++) {
          let venta_empleado = Number(
            prompt(`Ingresa la cantidad de venta del empleado ${x}`)
          );
          t_venta = t_venta + venta_empleado;
          total_sucursal = total_sucursal + venta_empleado;
          // VENTA POR SUCURSAL
          if (x == n_empleados) {
            let li_sucursal = document.createElement("li");
            li_sucursal.setAttribute("class", "form-group-items text-center");
            li_sucursal.innerText = `Venta de sucursal: ${total_sucursal} numero de tienda ${i} ciudad ${ciudad}`;
            alerta_total_sucursal.appendChild(li_sucursal);
          }
          //   VENTAS POR EMPLEADO
          let li = document.createElement("li");
          li.setAttribute("class", "form-group-items text-center");
          li.innerText = `Venta de empleado ${x}: ${venta_empleado} numero de tienda ${i} ciudad ${ciudad}`;
          alerta_venta_por_empleado.appendChild(li);
          // VENTA FINAL DE LAS SUCURSALES
          alerta_total_ventas_finales.innerHTML = `<div class="text-center alert alert-danger">El total de venta final es: ${t_venta}</div>`;
          console.log("Total de venta final = " + t_venta);
        }
      }
    }
  }
}
