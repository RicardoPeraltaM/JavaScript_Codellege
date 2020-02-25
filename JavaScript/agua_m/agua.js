let m3;
let p_agua = 108.86;

let boton = document.getElementById('boton')
boton.addEventListener('click', precio_agua)

function precio_agua (){
    m3= Number(document.getElementById('m3').value)

    p_agua = p_agua*m3;

    let alert = document.getElementById('alerta')
    alert.innerText=p_agua
}