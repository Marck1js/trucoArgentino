const Equipo = require('./src/class/Equipo');
const Jugador = require('./src/class/Jugador');
const Mazo = require('./src/class/Mazo');
const Ronda = require('./src/class/Ronda');
let mazo = new Mazo()

let equipo1 = new Equipo(mazo,'Nosotros', 'Marco', 'Guille', 'Dani');

console.log(equipo1);
// equipo1.repartirAllTeam();
// equipo1.judador1.showCard
// equipo1.judador2.showCard
// equipo1.judador3.showCard
// equipo1.judador1.calcularEnvido();
// equipo1.judador2.calcularEnvido();
equipo1.judador1.getCards();
equipo1.judador1.showCard
equipo1.judador1.calcularEnvido();
// mazo.showCards


// equipo1.judador1.showCard