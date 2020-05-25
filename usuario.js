class Usuario {
  constructor(nombre) {
    if (!nombre) {
      throw new Error('El usuario debe tener un nombre');
    }
    this.creditos = 1000;
    this.nombre = nombre;
  }

  sumarCreditos(cantidad) {
    this.verificarCantidad(cantidad);
    this.creditos = this.creditos + cantidad;
  }

  descontarCreditos(cantidad) {
    this.verificarCantidad(cantidad);
    this.creditos = this.creditos - cantidad;
  }

  verificarCantidad(cantidad) {
    if (isNaN(cantidad)) {
      throw new Error('Cantidad debe ser un número');
    }
    if (cantidad < 0) {
      throw new Error('Cantidad debe ser un número positivo');
    }
  }
}

module.exports = Usuario;
