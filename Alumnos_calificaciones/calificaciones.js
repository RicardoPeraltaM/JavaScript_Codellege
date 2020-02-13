let c_1 , c_2 , c_3 , c_4 , c_5 , matricula , promedio;

let boton = document.getElementById('boton_prom');
boton.addEventListener('click',prom)

function prom (){

    // OBTENGO LOS VALORES INGRESADOS
c_1 = Number(document.getElementById('c_1').value);
c_2 = Number(document.getElementById('c_2').value);
c_3 = Number(document.getElementById('c_3').value);
c_4 = Number(document.getElementById('c_4').value);
c_5 = Number(document.getElementById('c_5').value);

matricula = document.getElementById("matricula").value;

// REALIZO LAS OPERACIONES
promedio = (c_1+c_2+c_3+c_4+c_5)/5;

// IMPRIMIR MATRICULA
let alerta_matricul = document.getElementById('matricula_alerta');
alerta_matricul.innerText=matricula;

// IMPRIMIR PROMEDIO
// aprobado
let prom_aprobado = document.getElementById('pasaste');
// no aprobado
let prom_reprobado = document.getElementById('reprobaste');

 if (promedio>=6){
prom_aprobado.innerText="FELICIDADES APROBASTE TU PROMEDIO FINAL ES " +promedio;
 } 

 else{
     prom_reprobado.innerText="REPROBASTE TU PROMEDIO FINAL ES "+promedio;
 }


}