

const boton = document.getElementById('boton');
boton.addEventListener('click',compara)

function compara (){

    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    const alerta = document.getElementById('alerta')

    if (n1>n2){
        alerta.innerText=n1 + " es el mayor"
    } else{
        alerta.innerText=n2 + " es el mayor"

    }

}