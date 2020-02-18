
let boton = document.getElementById('boton')
boton.addEventListener('click',tipos_triangulos)

function tipos_triangulos (){

    let l_1 = Number(document.getElementById('l_1').value)
    let l_2 = Number(document.getElementById('l_2').value)
    let l_3 = Number(document.getElementById('l_3').value)

// ALERTAS
let tipo_triangulo = document.getElementById('tipo_triangulo')
let no_es_triangulo = document.getElementById('no_es_triangulo')

let mayor=l_1;

// COMPARO PARA VER CUAL ES EL MAYOR
if (l_2>mayor){
mayor=l_2
}else if (l_3>mayor){
    mayor=l_3
}

let suma = (l_3 +l_2+l_1)-mayor;
// COMPARO SI EL NUMERO MAYOR ES MENOR A LA SUMA DE LOS OTROS DOS LADOS PARA CONFIRMAR QUE SI SEA TRIANGULO
if (mayor<suma){

if(l_1==l_2 && l_2==l_3){
tipo_triangulo.innerText= "EL TRIANGULO ES equilatero"
} else 
if (l_1==l_2 || l_1==l_3 || l_3==l_2){
    tipo_triangulo.innerText= "EL TRIANGULO ES isósceles"
}
else {
    tipo_triangulo.innerText= "EL TRIANGULO ES escaleno"
}
} 
else{
    no_es_triangulo.innerText="NO ES TRIANGULO"
}

}