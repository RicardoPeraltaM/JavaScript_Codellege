class Interfaz {
  mostrarMensaje(mensaje, tipo) {
    const div = document.createElement("div");

    if (tipo == "error") {
      div.classList.add("mensaje", "error");
    } else {
      div.classList.add("mensaje", "correcto");
    }

    div.innerHTML = `${mensaje}`;

    document
      .querySelector("#cotizar-seguro")
      .insertBefore(div, document.querySelector(" .form-group"));
      
      
      setTimeout( function () {
          document.querySelector('.mensaje').remove();     
        }, 5000);
        
    }

}
