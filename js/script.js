class Cliente {
  constructor(nombre) {
    this.nombre = nombre;
  }

  get cliente() {
    return this.nombre;
  }

  set cliente(nombre) {
    this.nombre = nombre;
  }

  calcularImpuesto(monto_bruto_anual, deducciones) {
    return (monto_bruto_anual - deducciones) * 0.21;
  }
}

class Impuestos {
  constructor(monto_bruto_anual, deducciones) {
    this.monto_bruto_anual = monto_bruto_anual;
    this.deducciones = deducciones;
  }

  get montoBruto() {
    return this.monto_bruto_anual;
  }
  set montoBruto(monto_bruto_anual) {
    this.monto_bruto_anual = monto_bruto_anual;
  }

  get deduc() {
    return this.deducciones;
  }
  set deduc(deducciones) {
    this.deducciones = deducciones;
  }
}

const impuesto = new Impuestos(20000, 10000);
const cliente = new Cliente("kevin");
// cliente.cliente = "Pedro";

console.log(
  "Para",
  cliente.cliente,
  "el impuesto es: $",
  cliente.calcularImpuesto(impuesto.montoBruto, impuesto.deduc)
);
