EventListener();
function EventListener() {
  document.getElementById("Iniciar").addEventListener("click", FillArray);
}

function FillArray() {
  let maximo_numero = 1000;
  let n_primo = [];
  let ul = document.getElementById('lista_numeros_primos');
  
  for (let j = 1; j < maximo_numero; j++) {
      if (Numero_primo(j)) {
        let li = document.createElement('li');
        li.setAttribute('class','form-group-item text-center')      
      n_primo.push(j);
      li.innerText= `Numero primo: ${j}`
      ul.appendChild(li);
    }
  }
  console.log(n_primo);
}


function Numero_primo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero !== 1;
}
