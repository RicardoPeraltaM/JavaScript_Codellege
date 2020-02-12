let base , altura , suma , resultado ;

let a = document.getElementById('area_boton');
 
a.addEventListener('click', area_1)

function area_1(){
    // TOMO LOS VALORES QUE INGRESAN
    base=Number(document.getElementById('base').value);
    altura=Number(document.getElementById('altura').value);

// REALILZO LAS OPERACIONES
suma= base+altura;
resultado=suma/2;

// IMPRIMIR RESULTADO
let resultado_alerta = document.getElementById('resultado_alerta');
resultado_alerta.innerText=resultado;
}