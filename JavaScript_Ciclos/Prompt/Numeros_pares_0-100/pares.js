function eventeListener() {
  const boton = document.getElementById("boton");
  boton.addEventListener("click", numeros_pares);
}

function numeros_pares() {
    let numeros_pares_lista = document.getElementById('numeros_pares_lista');
    let n = 0;
    for (let i = 0; i <= 100; i++) {
        n++;
        if (n % 2 == 0) {
const li = document.createElement('li');
li.setAttribute("class","text-center list-group-item")
li.innerText=`Numero par: ${n}`
numeros_pares_lista.appendChild(li);
    }
  }

}

eventeListener();