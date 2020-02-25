
const boton = document.getElementById('boton')

boton.addEventListener('click' , promedio)

function promedio (){
    const c_1 = Number (document.getElementById('c_1').value)
 const c_2 = Number (document.getElementById('c_2').value)
 const c_3 = Number (document.getElementById('c_3').value)

 let resultado = (c_1+c_2+c_3)/3

//  PARA CONCATENAR
//  let cadena =`La calificacion es: ${c_1}`
 
const ZonePrint = document.getElementById('ZonePrint')

//  APROBADO
 if (resultado>=9){
    let divImprimir = `<div class="alert alert-success text-center mt-3"> El alumno a aprobado </div>`;
    ZonePrint.innerHTML=divImprimir;
}

// REGULAR
 else if (resultado>=6 && resultado<9){
    let divImprimir = `<div class="alert alert-warning text-center mt-3"> El alumno es regular </div>`;
    ZonePrint.innerHTML=divImprimir;
}

// REPROBADO
else if(resultado<6){
    let divImprimir = `<div class="alert alert-danger text-center mt-3"> El alumno esta pendejo </div>`;
    ZonePrint.innerHTML=divImprimir;
}

}