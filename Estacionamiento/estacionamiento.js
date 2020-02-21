

const boton = document.getElementById('boton')
 boton.addEventListener('click',calcular_horas)

 function calcular_horas(){
let horas_estacionamiento = Number(document.getElementById('horas_estacionamiento').value)

let Precio_Horas= document.getElementById('Precio_Horas');
if (horas_estacionamiento>0 && horas_estacionamiento<=2){
    horas_estacionamiento=horas_estacionamiento*5
    Precio_Horas.innerHTML=`<div class="text-center alert alert-primary">El total es pagar es ${horas_estacionamiento}</div>`
} else 
if(horas_estacionamiento>2 && horas_estacionamiento <=5){
    
    horas_estacionamiento = (5*2) + (horas_estacionamiento-2)*4
    Precio_Horas.innerHTML=`<div class="text-center alert alert-warning">El total es pagar es ${horas_estacionamiento}</div>`
}
else if(horas_estacionamiento>5 && horas_estacionamiento<=10){
horas_estacionamiento= (5*2)+4+3*(horas_estacionamiento-3)
Precio_Horas.innerHTML=`<div class="text-center alert alert-warning">El total es pagar es ${horas_estacionamiento}</div>`

} else if(horas_estacionamiento>10){
    horas_estacionamiento=horas_estacionamiento*2
    Precio_Horas.innerHTML=`<div class="text-center alert alert-warning">El total es pagar es ${horas_estacionamiento}</div>`
}


 }