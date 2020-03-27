class Votacion {
  Favor = 0;
  Contra = 0;
  Abstencion = 0;

  VotosContador(v) {
    switch (v) {
      case "op1":
        this.Favor++;
        console.log(this.Favor);

        break;

      case "op2":
        this.Contra++;
        console.log(this.Contra);
        break;

      case "op3":
        this.Abstencion++;
        console.log(this.Abstencion);

        break;
    }
   
    // if (v == "op1") {
    //   this.Favor++;
    //   console.log(this.Favor);
    // } else if (v == "op2") {
    //   this.Contra++;
    //   console.log(this.Contra);
    // } else if (v == "op3") {
    //   this.Abstencion++;
    //   console.log(this.Abstencion);
    // }
  }

  Imprimir_Res (){
    return ` A favor ${this.Favor} , En contra ${this.Contra} , Abstencion ${this.Abstencion}`;
}

}
