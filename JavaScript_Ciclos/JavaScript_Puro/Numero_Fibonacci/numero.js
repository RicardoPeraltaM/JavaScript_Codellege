createDom();

function createDom (){
let output = document.getElementById("output");

let div = document.createElement("div");
div.classList.add("form-group");

let label = document.createElement("label");
label.innerText="Ingresa un numero";

let input = document.createElement("input");
input.setAttribute("type","number");
input.setAttribute("class","form-control");
input.setAttribute("id","numero");

output.appendChild(div);
div.appendChild(label);
div.appendChild(input);

}