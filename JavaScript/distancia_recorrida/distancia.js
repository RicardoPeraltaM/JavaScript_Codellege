let d ,v,t;


let d_boton = document.getElementById('d_boton');
d_boton.addEventListener('click',dist_calc);



function dist_calc (){

v = Number(document.getElementById('v').value)
t = Number(document.getElementById('t').value)

d = v*t;

let alerta = document.getElementById('resultado_distancia');
alerta.innerText= "La distancia recorrida es " + d + " metros";
}