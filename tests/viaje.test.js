const Viaje = require('../viaje');
const Vehiculo = require('../vehiculo');
const Usuario = require('../usuario');

let ford, popeye, trip;

beforeEach(() => {
  popeye = new Usuario('Popeye');
  ford = new Vehiculo(4, 'Ford', popeye);
  trip = new Viaje(700, ford, 'Calle 100', 'Calle 30');
});

test('La clase Viaje es instanciable', () => {
  expect(trip).toBeInstanceOf(Viaje);
});

test('El costo del viaje no puede ser menor a 0', () => {
  function createTrip() {
    new Viaje(-100, ford, 'Calle 100', 'Calle 30');
  }
  expect(createTrip).toThrow(
    'El costo del viaje debe ser un valor mayor o igual a 0'
  );
});

test('El viaje no puede ser creado si el costo del viaje no es un número', () => {
  function createTrip() {
    new Viaje('hasta el infinito', ford, 'Calle 100', 'Calle 30');
  }
  expect(createTrip).toThrow('El costo del viaje debe ser un número');
});

test('El vehículo asignado debe ser un objeto de la clase Vehiculo', () => {
  function createTrip() {
    new Viaje(425, 'Tesla X', 'Calle 100', 'Calle 30');
  }
  expect(createTrip).toThrow(
    'El vehículo debe ser un objeto de la clase Vehiculo'
  );
});

test('El viaje no puede ser creado sin un origen o un destino', () => {
  function noOriginTrip() {
    new Viaje(300, ford, null, 'Calle 30');
  }
  function noDestinationTrip() {
    new Viaje(300, ford, 'Calle 100');
  }
  expect(noOriginTrip).toThrow('El viaje debe tener un origen y un destino');
  expect(noDestinationTrip).toThrow(
    'El viaje debe tener un origen y un destino'
  );
});

test('El viaje no admite pasajeros que no sean objetos de la clase Usuario', () => {
  expect(() => {
    trip.agregarPasajero('Bob Esponja');
  }).toThrow('El pasajero no es un objeto de la clase Usuario');
});

test('El viaje finaliza exitosamente', () => {
  expect(trip.finalizado).toBe(false);
  trip.finalizarViaje();
  expect(trip.finalizado).toBe(true);
});

test('El viaje no permite agregar pasajeros cuando el viaje ha finalizado', () => {
  const mario = new Usuario('Mario');
  trip.finalizarViaje();
  expect(trip.agregarPasajero(mario)).toBe(false);
});

test('El viaje no permite agregar al conductor en la lista de pasajeros', () => {
  function addMyself() {
    trip.agregarPasajero(popeye);
  }
  expect(addMyself).toThrow('Este usuario es el conductor del viaje');
});

test('El viaje permite agregar pasajeros si hay lugar y el viaje no ha finalizado', () => {
  const mario = new Usuario('Mario');
  expect(trip.finalizado).toBe(false);
  trip.agregarPasajero(mario);
  expect(trip.pasajeros).toHaveLength(1);
});
