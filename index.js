const Usuario = require('./usuario');
const Vehiculo = require('./vehiculo');
const Viaje = require('./viaje');

let juan = new Usuario('Juan');
let pedro = new Usuario('Pedro');
let fordKa = new Vehiculo(4, 'Ford Ka', juan);
let viajeLPBuenosAires = new Viaje(350, fordKa, 'La Plata', 'Buenos Aires');
viajeLPBuenosAires.agregarPasajero(pedro);
viajeLPBuenosAires.finalizarViaje();
viajeLPBuenosAires.finalizarViaje();
