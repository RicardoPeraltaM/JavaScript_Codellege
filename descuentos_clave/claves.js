 let boton = document.getElementById('boton')
 boton.addEventListener('click',descuentos)

 function descuentos (){
 
    let nombre_articulo= document.getElementById('nombre_articulo').value
    let clave = Number(document.getElementById('clave').value)
    let precio_a = Number(document.getElementById('precio_a').value)
// ALERTAS
    let alerta_precio_original = document.getElementById('alerta_precio_original')
    let alerta_precio_descuento = document.getElementById('alerta_precio_descuento')
    let alerta_error_clave = document.getElementById('alerta_error_clave')
    
    alerta_precio_original.innerText= "El producto es: " +nombre_articulo + " Precio: "+precio_a;
if (clave==01){
 let descuento01 = precio_a *.10;
 precio_a = precio_a-descuento01;
 alerta_precio_descuento.innerText= "El precio con descuento es: "+precio_a;
} else if (clave==02){
    let descuento02 = precio_a*.20;
    precio_a = precio_a-descuento02;
alerta_precio_descuento.innerText= "El precio con descuento es: "+precio_a;
} 
else if(clave!=02 && clave!=01) {
    alerta_error_clave.innerText= "La clave del producto no es valida";

}


 }

