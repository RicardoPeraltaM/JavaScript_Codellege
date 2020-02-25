let a , b;


let boton = document.getElementById('boton')
boton.addEventListener('click',pitagoras)

function pitagoras (){
    a = Number(document.getElementById('a').value)
    b = Number(document.getElementById('b').value)

    let c = (Math.pow(a,2))+ (Math.pow(b,2))
    // console.log(c)

// IMPRIMIR RESULTADO EN LA ALERTA
let alerta = document.getElementById('alerta')
alerta.innerText="La hipotenusa es = "+c

}