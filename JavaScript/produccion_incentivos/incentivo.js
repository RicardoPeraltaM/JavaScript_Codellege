
let boton = document.getElementById('boton')
boton.addEventListener('click',calcular_incentivo)

function calcular_incentivo (){
    let u_1 = Number(document.getElementById('u_1').value)
    let u_2 = Number(document.getElementById('u_2').value)
    let u_3 = Number(document.getElementById('u_3').value)
    let u_4 = Number(document.getElementById('u_4').value)
    let u_5 = Number(document.getElementById('u_5').value)
    let u_6 = Number(document.getElementById('u_6').value)

// Alertas
 let si_incentivos= document.getElementById('si_incentivos')
 let no_incentivos = document.getElementById('no_incentivos')

// suma
    let total_semana = u_1+u_2+u_3+u_4+u_5+u_6;


    if (total_semana>100){
 si_incentivos.innerText = "Si hay incentivos produccion de: " +total_semana
    } else {
        no_incentivos.innerText = "No hay incentivos produccion de: " +total_semana
    }
}