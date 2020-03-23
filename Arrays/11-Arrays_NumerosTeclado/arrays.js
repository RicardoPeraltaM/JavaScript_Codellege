EventListener();
let contador = 0,
  contador2 = 0;
let array1 = [];
let array2 = [];

function EventListener() {
  document.getElementById("numero").addEventListener("keypress", iniciarapp);
}

function iniciarapp(num) {
  let array1_Alerta = document.getElementById("array1");
  let array2_Alerta = document.getElementById("array2");
  let array3_Alerta = document.getElementById("array3");

  if (num.key == "Enter") {
    let n = num.target.value;
    if (array1.length != 5) {
      array1.push(n);
      contador++;
      //   limpiar despues de cada enter
      num.target.value = "";
      array1_Alerta.innerText = `Array 1: ${array1}`;
    } else {
      if (contador2 != 5) {
        array2.push(n);
        contador2++;
        //   limpiar despues de cada enter
        num.target.value = "";
      }
      array2_Alerta.innerText = `Array 2: ${array2}`;
    }

    if (contador2 == 5 && contador == 5) {
      let suma = array1 + "," + array2;
      array3_Alerta.innerText = `Array 3: ${suma}`;
    }
  }
}
