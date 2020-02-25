const boton = document.getElementById("boton");
boton.addEventListener("click", calcular_pasaje);

function calcular_pasaje() {
  let opciones_autobuses = document.getElementById("opciones_autobuses").value;
  let n_personas = Number(document.getElementById("n_personas").value);
  let n_km = Number(document.getElementById("n_km").value);

  const precio_autobus_seleccionado = document.getElementById(
    "precio_autobus_seleccionado"
  );
  const precio_final_autobus = document.getElementById("precio_final_autobus");
  const precio_persona_final = document.getElementById("precio_persona_final");

  // DELCARO VARIABLE PARA PONER LOS PRECIOS
  let precio;
  let km;

  if (opciones_autobuses == "A") {
    precio_autobus_seleccionado.innerHTML = `<div class="text-center alert alert-success">Seleccionaste el autobus A con un precio de $1.5 por km </div>`;
    precio = 1.5;
    // console.log("inicio");

    if (n_personas >= 20) {
      //   console.log(n_personas);
      precio = n_personas * precio * n_km;
      precio_final_autobus.innerHTML = `<div class="text-center alert alert-warning" >El precio final es: ${precio} pesos </div>`;
      km = precio / n_personas;
      precio_persona_final.innerHTML = `<div class="text-center alert alert-info" >El precio final por persona es: ${km} pesos </div>`;
    } else {
      precio = precio * 20 * n_km;
      precio_final_autobus.innerHTML = `<div class="text-center alert alert-warning" >El precio final es: ${precio} pesos </div>`;
      km = precio / n_km;
      precio_persona_final.innerHTML = `<div class="text-center alert alert-info" >El precio final por persona es: ${km} pesos </div>`;
    }
  } else if (opciones_autobuses == "B") {
    precio_autobus_seleccionado.innerHTML = `<div class="text-center alert alert-success">Seleccionaste el autobus B con un precio de $2.0 por km </div>`;
    precio = 2;
    if (n_personas >= 20) {
      precio = n_personas * precio * n_km;
      precio_final_autobus.innerHTML = `<div class="text-center alert alert-warning" >El precio final es: ${precio} pesos </div>`;
      km = precio / n_personas;
      precio_persona_final.innerHTML = `<div class="text-center alert alert-info" >El precio final por persona es: ${km} pesos </div>`;
    } else {
      precio = precio * 20 * n_km;
      precio_final_autobus.innerHTML = `<div class="text-center alert alert-warning" >El precio final es: ${precio} pesos </div>`;
      km = precio / n_km;
      precio_persona_final.innerHTML = `<div class="text-center alert alert-info" >El precio final por persona es: ${km} pesos </div>`;
    }
  } else if (opciones_autobuses == "C") {
    precio_autobus_seleccionado.innerHTML = `<div class="text-center alert alert-success">Seleccionaste el autobus C con un precio de $2.5 por km </div>`;
    precio = 2.5;
    if (n_personas >= 20) {
      precio = n_personas * precio * n_km;
      precio_final_autobus.innerHTML = `<div class="text-center alert alert-warning" >El precio final es: ${precio} pesos </div>`;
      km = precio / n_personas;
      precio_persona_final.innerHTML = `<div class="text-center alert alert-info" >El precio final por persona es: ${km} pesos </div>`;
    } else {
      precio = precio * 20 * n_km;
      precio_final_autobus.innerHTML = `<div class="text-center alert alert-warning" >El precio final es: ${precio} pesos </div>`;
      km = precio / n_km;
      precio_persona_final.innerHTML = `<div class="text-center alert alert-info" >El precio final por persona es: ${km} pesos </div>`;
    }
  } else if (opciones_autobuses == "D") {
    precio_autobus_seleccionado.innerHTML = `<div class="text-center alert alert-success">Seleccionaste el autobus D con un precio de $3.0 por km </div>`;
    precio = 3;

    if (opciones_autobuses >= 20) {
      precio = n_personas * precio * n_km;
      precio_final_autobus.innerHTML = `<div class="text-center alert alert-warning" >El precio final es: ${precio} pesos </div>`;
      km = precio / n_personas;
      precio_persona_final.innerHTML = `<div class="text-center alert alert-info" >El precio final por persona es: ${km} pesos </div>`;
    } else {
      precio = precio * 20 * n_km;
      precio_final_autobus.innerHTML = `<div class="text-center alert alert-warning" >El precio final es: ${precio} pesos </div>`;
      km = precio / n_km;
      precio_persona_final.innerHTML = `<div class="text-center alert alert-info" >El precio final por persona es: ${km} pesos </div>`;
    }
  }
}
