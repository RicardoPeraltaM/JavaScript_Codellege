// let resultado = 0;
// for (let i = 0; i < 2; i++) {
//   let NumeroIngresado = Number(prompt("Ingrese numero: "));
//   resultado = resultado + NumeroIngresado;
// }
// console.log(resultado);

// const ZonaImprimir = document.getElementById('output');
// ZonaImprimir.innerHTML= resultado;

function crearDom() {
  const output = document.getElementById("output");
  for (let x = 1; x <= 5; x++) {
    //   creamos el div
    const div = document.createElement("div");
    div.classList.add("form-group");

    // creamos el label
    const label = document.createElement("label");
    label.innerText = `Ingresa el numero:  ${x}`;

    // creamos el input
    const input = document.createElement("input");
    // añadimos atributo
    input.setAttribute('type','number')
    input.setAttribute('class','form-control')
    input.setAttribute('id','n')

    // establecemos para saber donde poner la estructura
    output.appendChild(div)
    div.appendChild(label)
    div.appendChild(input)
    
  }
}
crearDom();
