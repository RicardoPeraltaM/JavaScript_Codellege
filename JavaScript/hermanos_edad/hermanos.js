 
 let boton = document.getElementById('boton')
 boton.addEventListener('click',hermanos_edades)

 function hermanos_edades(){
    //  NOMBRES
let n_1 = document.getElementById('n_1').value
let n_2 = document.getElementById('n_2').value
// EDADES
let e_1 = Number(document.getElementById('e_1').value)
let e_2 = Number(document.getElementById('e_2').value)

// ALERTAS
let mayor = document.getElementById('mayor')
let dif_edad = document.getElementById('dif_edad')

//  comenzamos comparaciones
if (e_1>e_2){
e_1 = e_1-e_2;
mayor.innerText= "El mayor es " + n_1;
dif_edad.innerText = "La diferencia de edad es de " + e_1 +" años"
} else {
e_2 = e_2-e_1;
mayor.innerText= "El mayor es " + n_2;
dif_edad.innerText = "La diferencia de edad es de " + e_2 +" años"

}


 }