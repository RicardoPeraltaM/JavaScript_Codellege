
const boton = document.getElementById('boton')
boton.addEventListener('click',f_n_mayor)

function f_n_mayor(){

    const n_1 = Number(document.getElementById('n_1').value)
    const n_2 = Number(document.getElementById('n_2').value)
    const n_3 = Number(document.getElementById('n_3').value)

     const alerta = document.getElementById('alerta')

if (n_1>n_2){
    if (n_2>n_3){
        alerta.innerText="El mayor es "+n_1
    } else {
        alerta.innerText="El mayor es "+n_3
    }
    
} else if (n_2>n_3){
    alerta.innerText="El mayor es "+n_2
} else {
    alerta.innerText="El mayor es "+n_3
}




}