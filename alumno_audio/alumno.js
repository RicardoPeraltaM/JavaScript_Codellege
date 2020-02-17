
const boton = document.getElementById('b')
boton.addEventListener('click',verificar_calificacion)

function verificar_calificacion(){

    const Calificacion = Number(document.getElementById('c1').value)

    const alerta = document.getElementById('alerta')

    if (Calificacion>8){
alerta.innerText="APROBADO"
    } else{
        alerta.innerText="REPROBADO"
        const audioDR = document.getElementById('sdfsdfsdf')
        console.log(audioDR);   
        audioDR.play();
    }
}