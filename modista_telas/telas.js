let pulgada=39.3701;


let boton = document.getElementById('boton')
 boton.addEventListener('click',m_p)

 function m_p(){
     let m = Number(document.getElementById('m').value)

     pulgada = pulgada*m;

     let alert =document.getElementById('alert')
alert.innerText=pulgada
 }
