class SacArea {
  altura = 0;
  base = 0;

  constructor(altura, base) {
    this.altura = altura;
    this.base = base;
    console.log(this.altura + this.base);
  }

  operacion() {
    let area = this.base * this.altura;
    console.log(area);
    return area;
  }
}
