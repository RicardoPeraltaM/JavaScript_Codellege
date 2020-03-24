let Carro1Color = "rojo";
let Carro1Marca = "Honda";
let Carro1Modelo = 2000;
let CarroMotor = 2.0;
// OBJETOS Y SUS ATRIBUTOS O PROPIEDADES
let Carro1Objeto = {
  color: "rojo",
  marca: "Mazada",
  modelo: 2019,
  motor: 2.0,
  PosX: 0,
  PosY: 0,
  avanzarX() {
    //   el this es toda la referencia hacia una aplicacion
    // this.PosX++;
    console.log(this);
  }
};

// console.log(Carro1Objeto);

let Carro2Objeto = {
  color: "rojo",
  marca: "Mazada",
  modelo: 2019,
  motor: 2.0,
  PosX: 0,
  PosY: 0,
  avanzarX() {
    //   el this es toda la referencia hacia una aplicacion
    // this.PosX++;
    console.log(this.PosX++);
  },
  avanzarY() {
    console.log(this.PosY++);
  }
};
// console.log(`El carro es color ${Carro1Objeto.color} `);
// console.log(this);

// CREAR UNA CLASE
class carro {
  color = "";
  marca = "";
  modelo = 0;
  motor = 0;
  PosX = 0;
  PosY = 0;

  constructor(color, marca, modelo, motor) {
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.motor = motor;
  }
  avanzarX() {}
  avanzarY() {}
}

// Constructor : es una funcion que se ejecuta al momento de instanciar una clase
let Carro1 = new carro("rojo", "VW", "GTI", "2.0");
console.log(Carro1.color);
let Carro2 = new carro("azul", "Mercedez", "sedan", "1.8");
console.log(Carro2.color);
