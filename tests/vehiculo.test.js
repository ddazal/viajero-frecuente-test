const Vehiculo = require('../vehiculo');
const Usuario = require('../usuario');

let popeye, ford;

beforeEach(() => {
  popeye = new Usuario('Popeye');
  ford = new Vehiculo(4, 'Ford', popeye);
});

test('La clase Vehiculo es instanciable', () => {
  expect(ford).toBeInstanceOf(Vehiculo);
});

test('El propietario del vehículo es un objeto de la clase Usuario', () => {
  const owner = ford.getPropietario();
  expect(owner).toBeInstanceOf(Usuario);
});

test('El vehículo no puede ser creado si la capacidad no puede ser convertida a un número', () => {
  function createVehicle() {
    new Vehiculo('hola', 'Mazda', popeye);
  }
  expect(createVehicle).toThrow('La capacidad debe ser un número');
});

test('La capacidad del vehículo siempre debe ser un número entero', () => {
  const mazda = new Vehiculo(4.7, 'Mazda', popeye);
  const capacidad = mazda.getCapacidad();
  expect(capacidad).toBe(4);
});

test('El vehículo no puede ser creado si el propietario no es un objeto de la clase Usuario', () => {
  function createVehicle() {
    new Vehiculo(4, 'Mazda', 'Lionel Messi');
  }
  expect(createVehicle).toThrow(
    'El propietario no es un objeto de la clase Usuario'
  );
});
