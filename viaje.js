const Usuario = require('./usuario');
const Vehiculo = require('./vehiculo');

class Viaje {
  constructor(costo, vehiculo, origen, destino) {
    if (costo < 0) {
      throw new Error('El costo del viaje debe ser un valor mayor o igual a 0');
    }
    if (isNaN(costo)) {
      throw new Error('El costo del viaje debe ser un número');
    }
    if (!(vehiculo instanceof Vehiculo)) {
      throw new Error('El vehículo debe ser un objeto de la clase Vehiculo');
    }
    if (!origen || !destino) {
      throw new Error('El viaje debe tener un origen y un destino');
    }
    this.costo = costo;
    this.vehiculo = vehiculo;
    this.origen = origen;
    this.destino = destino;
    this.pasajeros = [];
    this.finalizado = false;
  }

  hayLugar() {
    return this.vehiculo.getCapacidad() > this.pasajeros.length;
  }

  agregarPasajero(pasajero) {
    if (!(pasajero instanceof Usuario)) {
      throw new Error('El pasajero no es un objeto de la clase Usuario');
    }
    if (this.conductor() === pasajero) {
      throw new Error('Este usuario es el conductor del viaje');
    }
    if (this.hayLugar() && !this.finalizado) {
      this.pasajeros.push(pasajero);
      return true;
    }
    return false;
  }

  calcularCosto() {
    return this.costo / (this.pasajeros.length + 1);
  }

  conductor() {
    return this.vehiculo.getPropietario();
  }

  finalizarViaje() {
    if (!this.finalizado) {
      let costo = this.calcularCosto();
      this.pasajeros.forEach((pasajero) => pasajero.descontarCreditos(costo));
      this.conductor().descontarCreditos(costo);
      this.finalizado = true;
    }
  }
}

module.exports = Viaje;
