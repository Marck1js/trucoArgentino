const Jugador = require("./Jugador");


class Equipo {
  constructor(mazo, team, playerName1, playerName2, playerName3) {
    this.team = team;
    this.judador1 = new Jugador(playerName1, mazo);
    if (playerName2) {
      this.judador2 = new Jugador(playerName2, mazo);
    }
    if (playerName3) {
      this.judador3 = new Jugador(playerName3, mazo);
    }
  }


   repartirAllTeam() {
      this.judador1.getCards();
    if(this.judador2){
       this.judador2.getCards();
    }
    if(this.judador3){
       this.judador3.getCards();
    }
    console.log(`CARTAS LISTAS PARA ${this.team.toUpperCase()}`)
    console.log('')
  }
}


module.exports = Equipo;