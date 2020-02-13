let r_correcta, r_incorrecta, r_blanco;

let boton = document.getElementById('boton_puntaje');
boton.addEventListener('click',p);

function p (){
// TOMO LOS VALORES INGRESADOS
r_correcta = Number(document.getElementById('r_correcta').value);
r_incorrecta = Number(document.getElementById('r_incorrecta').value);
// aqui tomo el blanco pero realmente no da puntaje asi que no lo tomo en cuenta para las demas operaciones
r_blanco = Number(document.getElementById('r_blanco').value);

// OPERACIONES
let correctas = r_correcta * 4;
let incorrectas = r_incorrecta * -1;
// console.log(incorrectas);
let promedio_respuestas = correctas + incorrectas;
// console.log(promedio_respuestas);

//  ALERTA DE EL PROMEDIO
let alerta = document.getElementById('puntaje_final');
alerta.innerText= promedio_respuestas;
}