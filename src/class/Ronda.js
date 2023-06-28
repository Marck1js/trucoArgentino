const Equipo = require("./Equipo");
const Mazo = require('./Mazo');
class Ronda extends Mazo {

    constructor(mazo, team1, team2) {
     super();
     this.puntosTeam1 = 0;
     this.puntosTeam2 = 0;
     this.team1 = new Equipo(mazo, team1.name, team1.player1, team1.player2)
     this.team2 = new Equipo(mazo, team2.name, team2.player1, team1.player2)
    } 

    startGame() {
        console.log('COMIENZA EL JUEGO')
        console.log('')
        this.team1.repartirAllTeam();
        this.team2.repartirAllTeam();
    }
    finalizarRonda() {
        console.log('Fin Ronda');
        this.mezclarMazo();
    }

}

module.exports  = Ronda;
