const Usuario = require('../usuario');

let popeye;

beforeEach(() => {
  popeye = new Usuario('Popeye');
});

test('La clase Usuario es instanciable', () => {
  expect(popeye).toBeInstanceOf(Usuario);
});

test('El usuario debe iniciar con 1000 creditos', () => {
  expect(popeye.creditos).toBe(1000);
});

test('Un usuario no puede ser creado sin un nombre', () => {
  function createAnonymousUser() {
    new Usuario();
  }
  expect(createAnonymousUser).toThrow('El usuario debe tener un nombre');
});

test('La cantidad de créditos a sumar no puede ser un número negativo', () => {
  expect(() => {
    popeye.sumarCreditos(-252);
  }).toThrow('Cantidad debe ser un número positivo');
});

test('La cantidad de créditos a sumar debe ser un número', () => {
  expect(() => {
    popeye.sumarCreditos('espinaca');
  }).toThrow('Cantidad debe ser un número');
});

test('La cantidad de créditos a sumar no puede ser un número negativo', () => {
  expect(() => {
    popeye.descontarCreditos(-252);
  }).toThrow('Cantidad debe ser un número positivo');
});

test('La cantidad de créditos a descontar debe ser un número', () => {
  expect(() => {
    popeye.descontarCreditos('espinaca');
  }).toThrow('Cantidad debe ser un número');
});

test('Los créditos son añadidos al usuario', () => {
  popeye.sumarCreditos(300);
  expect(popeye.creditos).toBe(1300);
});

test('Los créditos son descontados al usuario', () => {
  popeye.descontarCreditos(300);
  expect(popeye.creditos).toBe(700);
});
