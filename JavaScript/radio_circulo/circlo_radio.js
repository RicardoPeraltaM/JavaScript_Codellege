let radio , resultado ;
// const constantePi=3.1416;

let button = document.getElementById('area_boton');

button.addEventListener('click',a_circulo);

function a_circulo(){
// TOMO ELEMENTOS
    radio=Number(document.getElementById('radio').value);

// REALIZAMOS OPRACIONES
// MATH ES UNA LIBRERIA 
let radio_elevado = Math.pow(radio,2);
resultado = Math.PI * radio_elevado;

// PARA MOSTRAR EL RESULTADO
let aler = document.getElementById('resultado_alerta');
aler.innerText=resultado;
}