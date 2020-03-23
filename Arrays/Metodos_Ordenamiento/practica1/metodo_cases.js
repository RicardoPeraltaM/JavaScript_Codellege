EventListener();
//  length = la longitud del array
//  push = agrega elementos a la ultima posicion del array.
// pop = Elimina el elemento que esta en la ultima posicion.
// unshift = Agrega un elemento a la primera posicion.
// shift = Elimina un elemento de la primera posicion.
//  indexOf = Nos ayuda a encontrar el elemento de busqueda que necesitamos , si no lo encuentra regresa un -1.
//  Sort = Es para ordenarlos de menor a mayor = Numero - Mayusculas - minisculas.
// reverse = Es para voltear un array.
// splice = Es para remplazar un elemento en el cual queramos hacer un cambio.

let array = [];
let outArray = [];

function EventListener() {
  document.getElementById("t_array").addEventListener("keypress", getSize);
  document.addEventListener("click", validarClick);
}

function getSize(tamaño_a) {
  console.log(tamaño_a);

  if (tamaño_a.key != "Enter") return;
  if (tamaño_a.target.value == "") return;
  if (isNaN(tamaño_a.target.value)) return;
  if (tamaño_a.target.value <= 0) return;
  createArray(tamaño_a.target.value);
  tamaño_a.target.value = "";
}

function createArray(array_tamaño) {
  array = [];
  for (let x = 0; x < array_tamaño; x++) {
    array.push(Math.floor(Math.random() * (11 - 1) + 1));
  }
  console.log(array);
}

function validarClick(tamaño_a) {
  switch (tamaño_a.target.id) {
    case "op1":
      for (let x = 0; x < array.length; x++) {
        if ((x + 1) % 2 == 0) {
          outArray.push(0);
        } else {
          outArray.push(array[x]);
        }
      }
      console.log(outArray);
      break;

    case "op2":
      array.pop();
      console.log(array);
      break;

    case "op3":
      let random = Math.floor(Math.random() * (11 - 1) + 1);
      array.unshift(random);
      console.log(array);
      break;

    case "op4":
      array.shift();
      console.log(array);

      break;

    case "op5":
      let indices = [];
      let index = array.indexOf(10);
      while (index != -1) {
        indices.push(index);
        index = array.indexOf(10, index + 1);
      }
      console.log(indices);
      break;

    case "op6":
      //   Numero - Mayusculas - minisculas
      console.log(array.sort());

      break;

    case "op7":
      console.log(array.reverse());
      break;

    case "op8":
      for (let x = 0; x < array.length; x++) {
        if (array[x] == 5) {
          // primeor es posicion - el numero de elementos que vamos a quitar - por lo que lo vamos a remplazar
          array.splice(x, 1, "cinco");
        }
      }
      console.log(array);
      break;

    default:
      return;
      break;
  }
}

/**
 * length -- Regresa la longitud del array
 *
 * Opcion 1: Tomar array principal y a cada index impar sustituir su valor por un 0
 *
 * Opcion 2: Eliminar el ultimo elemento del array
 * pop - elimina el elemento en la ultima posicion del array
 *
 * Opcion 3: Agregar un elemento a la primera posicion del array
 * unshift - agrega un elemento a la primera posicion de array
 *
 * Opcion 4: Eliminar un elemento en la primera posicion del array
 * shift - eliminar el elemento
 *
 * Opcion 5: Econtrar todos los elementos con valor 10 y regresar en un array su posicion
 * indexOf() -- Regresa un index en caso de que no exista regresa un valor menos 1
 *
 * Opcion 6: Ordenar un array
 * .sort - acomodar arreglo
 *
 * Opcion 7: regresar el array invertido
 * .reverse
 *
 * Opcion 8: Los elementos 5 se cambiaran por "cinco"
 * .splice -- busca el valor que declaramos y lo elimina o lo reemplaza
 */
