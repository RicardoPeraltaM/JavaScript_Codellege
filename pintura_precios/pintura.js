let ancho_pared , largo_pared , costo_metro , resultado;


let b_cotizacion = document.getElementById('cotizacion');

b_cotizacion.addEventListener('click' , cotizacion_1)


function cotizacion_1 () {
// ENTRADAS ES PARA TOMAR LOS VALORES QUE INGRESE EL USUARIO
ancho_pared=Number(document.getElementById('ancho_pared').value);
largo_pared=Number(document.getElementById('largo_pared').value);
costo_metro=Number(document.getElementById('costo_metro').value);

// OPERACIONES
resultado=ancho_pared*largo_pared*costo_metro;

// MOSTRAR EL RESULTADO EN EL ALERT
// INNER TEXT SIRVE PARA IMPRIMIR EN UN ELEMENTO QUE ES DE HTML  
let alerta=document.getElementById('alerta');
alerta.innerText=resultado;

}
