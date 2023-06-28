const mazoCartas = require("../assets/mazoCartas");

class Mazo {
  constructor() {
    this.mazo = [...mazoCartas];
  }
  get showCards() {
    console.log(this.mazo);
    return this.mazo.length;
  }

  repartir() {
    if (this.mazo.length <= 10) {
        console.log('Pocas Cartas, mezcla el mazo');
      return;
    }
    let math = Math.ceil(Math.random() * this.mazo.length - 1);
    let carta = this.mazo.splice(math, 1)[0];
    return carta;
  }

  mezclarMazo() {
    this.mazo = [...mazoCartas];
    console.log("Mezclando Cartas...");
  }

//---------------------------------------------------- //


}

module.exports = Mazo;

  
