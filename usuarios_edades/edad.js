

const boton = document.getElementById('boton')
boton.addEventListener('click',usuario_mayor)

function usuario_mayor (){
    let nombre_1= document.getElementById('nombre_1').value
    let nombre_2 = document.getElementById('nombre_2').value

    let edad_1 = Number(document.getElementById('edad_1').value)
    let edad_2 = Number(document.getElementById('edad_2').value)
    
    const alerta = document.getElementById('alerta')
if (edad_1>edad_2){
 alerta.innerText="El usuario: "+nombre_1 + " Es mayor de edad: "+edad_1
}else {
    alerta.innerText="El usuario: "+nombre_2 + " Es mayor de edad: "+edad_2

}


}