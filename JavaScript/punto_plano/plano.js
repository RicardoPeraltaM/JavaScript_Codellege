let a_x,a_y;
let b_X,b_y;

let boton = document.getElementById('calcular_boton');
boton.addEventListener('click',distancia_f);

function distancia_f(){

a_x= Number(document.getElementById('a_x').value);
a_y=Number(document.getElementById('a_y').value);

b_X = Number(document.getElementById('b_x').value);
b_y= Number(document.getElementById('b_y').value);

// operaciones
let d = Math.sqrt((Math.pow((b_X-a_x),2))+(Math.pow((b_y,a_y),2)));
console.log(d);

// alerta
let alerta = document.getElementById('alerta');
alerta.innerText=d;



}