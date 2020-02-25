 
 let boton = document.getElementById('boton')
 boton.addEventListener('click',calcula_viaje)

 function calcula_viaje(){

let nombre = document.getElementById('nombre').value
let destino = document.getElementById('destino').value

    // ALERTAS
    let Destino_Seleccionado_Alerta = document.getElementById('Destino_Seleccionado_Alerta')
    let km_por_recorrer = document.getElementById('km_por_recorrer')
    let precio_final = document.getElementById('precio_final')

let precio;
let precio_casa;

if (destino=="Mexico"){
let km_mexico = 750
precio = 20
precio_casa = 100
Destino_Seleccionado_Alerta.innerHTML= `<div class="text-center alert alert-dark mt-3"> Estimado(a) ${nombre} El destino seleccionado: ${destino}</div>`
km_por_recorrer.innerHTML=`<div class="text-center alert alert-warning btn-block mt-3"> Los km que recorreras son: ${km_mexico} km y el precio de la casa por noche es: ${precio_casa} pesos</div>`
km_mexico= (km_mexico*2);
precio= precio*km_mexico
precio_final.innerHTML = `<div class="text-center alert alert-danger"> El precio por el transporte es: ${precio}</div>`


} 
else if(destino=="Acapulco"){
    let km_acapulco=1200
    precio = 30
    precio_casa = 200

    Destino_Seleccionado_Alerta.innerHTML= `<div class="text-center alert alert-dark mt-3"> Estimado(a) ${nombre} El destino seleccionado: ${destino}</div>`
    km_por_recorrer.innerHTML=`<div class="text-center alert alert-warning btn-block mt-3"> Los km que recorreras son: ${km_acapulco} km y el precio de la casa por noche es: ${precio_casa} pesos</div>`
    km_acapulco= (km_acapulco*2);
    precio= precio*km_acapulco
    precio_final.innerHTML = `<div class="text-center alert alert-danger"> El precio por el transporte es: ${precio}</div>`



} 
else if(destino=="Cancun"){
let km_cancun = 1800
precio = 50
precio_casa = 300
Destino_Seleccionado_Alerta.innerHTML= `<div class="text-center alert alert-dark mt-3"> Estimado(a) ${nombre} El destino seleccionado: ${destino}</div>`
km_por_recorrer.innerHTML=`<div class="text-center alert alert-warning btn-block mt-3"> Los km que recorreras son: ${km_cancun} km y el precio de la casa por noche es: ${precio_casa} pesos</div>`
km_cancun= (km_cancun*2);
precio= precio*km_cancun
precio_final.innerHTML = `<div class="text-center alert alert-danger"> El precio por el transporte es: ${precio}</div>`



}
 else if(destino="PV"){
let km_pv = 800
precio = 25
precio_casa = 250
Destino_Seleccionado_Alerta.innerHTML= `<div class="text-center alert alert-dark mt-3"> Estimado(a) ${nombre} El destino seleccionado: ${destino}</div>`
km_por_recorrer.innerHTML=`<div class="text-center alert alert-warning btn-block mt-3"> Los km que recorreras son: ${km_pv} km y el precio de la casa por noche es: ${precio_casa} pesos</div>`
km_pv= (km_pv*2);
precio= precio*km_pv
precio_final.innerHTML = `<div class="text-center alert alert-danger"> El precio por el transporte es: ${precio}</div>`


}


 }