EventListener();
function EventListener() {
  document.getElementById("Iniciar").addEventListener("click", FillArray);
}

function FillArray() {
  let maximo_numero = 1000;
  let n_primo = [];
  let ul = document.getElementById("lista_numeros_primos");

  for (let j = maximo_numero; j > 0; j--) {
    if (Numero_primo(j)) {
      // Lo utilice asi para imprimirlo en lista
      let li = document.createElement("li");
      li.setAttribute("class", "form-group-item text-center");
      n_primo.push(j);
      li.innerText = `Numero primo: ${j}`;
      ul.appendChild(li);
    }
  }
  // a consola en orden decendente
  console.log(n_primo.reverse());

  // console.log(n_primo);
}

function Numero_primo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero !== 1;
}
