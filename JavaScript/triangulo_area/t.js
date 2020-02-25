// FORMULA raiz de S(s-a)(s-b)(s-c)

let l_a,l_b,l_c,s;

let b = document.getElementById('calcular');
b.addEventListener('click',calc);

function calc (){
// TOMO LOS VALORES 
l_a = Number(document.getElementById('l_a').value);
l_b = Number(document.getElementById('l_b').value);
l_c = Number(document.getElementById('l_c').value);

// OPERACIONES
let s_r = (l_a+l_b+l_c)/2;


let op1 = s_r*(s_r-l_a)*(s_r-l_b)*(s_r-l_c);
let raiz = Math.sqrt(op1);

// ALERTAS
let alerta = document.getElementById('resultado');
alerta.innerText="El area es "+raiz;


}