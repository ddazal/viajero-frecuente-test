const Usuario = require('./usuario');

class Vehiculo {
  constructor(capacidad, nombre, propietario) {
    if (isNaN(capacidad)) {
      throw new Error('La capacidad debe ser un número');
    }
    if (!(propietario instanceof Usuario)) {
      throw new Error('El propietario no es un objeto de la clase Usuario');
    }
    this.capacidad = Math.floor(capacidad);
    this.nombre = nombre;
    this.propietario = propietario;
  }

  getCapacidad() {
    return this.capacidad;
  }

  getPropietario() {
    return this.propietario;
  }
}

module.exports = Vehiculo;
