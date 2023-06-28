const Mazo = require("./Mazo");

class Jugador {
  constructor(name, mazo) {
    this.name = name;
    this.mazo = mazo;
    this.mano;
  }

  getCards() {
    let cartas = [
      this.mazo.repartir(),
      this.mazo.repartir(),
      this.mazo.repartir(),
    ];
    this.mano = cartas;
    console.log(`Repartiendo Cartas a ${this.name}`);
    console.log('');
    return cartas;
  }

  get showCard() {
    if(this.mano == undefined){
      console.log('No hay cartas aun');
      return
    }
      console.log(this.mano);
  }


  calcularEnvido() {
    let maxPalo;
    if (this.mano == undefined) {
      console.log("Reparte las cartas para poder calcular los tantos");
      return "Reparte las cartas para poder calcular los tantos";
    }
    const puntaje = this.mano.reduce((acumulador, elemento) => {
      const valor = elemento.palo;
      if (!acumulador[valor]) {
        acumulador[valor] = [elemento.envido];
      } else if (acumulador[valor]) {
        acumulador[valor] = [...acumulador[valor], elemento.envido];
      }
      return acumulador;
    }, {});
    for (const palo in puntaje) {
      if (puntaje.hasOwnProperty(palo)) {
        if (puntaje[palo].length >= 2) {
          maxPalo = puntaje[palo];
        }
      }
    }
    if (maxPalo?.length == 2) {
      maxPalo = maxPalo[0] + maxPalo[1] + 20;
    }
    if (maxPalo?.length == 3) {
      const masAltos = maxPalo.sort((a, b) => b - a);
      const tanto = masAltos.slice(0, 2);
      maxPalo = tanto[0] + tanto[1] + 20;
    }
    if (maxPalo == undefined) {
      const arreglo = Object.values(puntaje);
      const union = arreglo.flatMap((array) => array);
      maxPalo = Math.max(...union);
    }
    console.log(`${this.name} tiene ${maxPalo} tantos`);
    return maxPalo;
  }

  // cantarEnvdio() {
  //   console.log(`${this.name} dice "ENVIDO"`)
  // }
  // cantarRealEnvdio() {
  //   console.log(`${this.name} dice "REAL ENVIDO"`)
  // }
  // cantarFaltaEnvdio() {
  //   console.log(`${this.name} dice "ENVIDO"`)
  // }

  // cantarTruco(){
  //   console.log(`${this.name} dice "TRUCO"`)
  // }

  // cantarRetrucoTruco(){
  //   console.log(`${this.name} dice "RE TRUCO"`)
  // }

  // cantarValeCuatro(){
  //   console.log(`${this.name} dice "VALE CUATRO"`)
  // }

  // cantarQuiero(){
  //   console.log(`${this.name} dice "QUIERO"`)
  // }
  // cantarNoQuiero(){
  //   console.log(`${this.name} dice "NO QUIERO"`)
  // }
  // cantarPaso() {
  //   console.log(`${this.name} dice "PASO"`)
  // }

}


module.exports = Jugador;