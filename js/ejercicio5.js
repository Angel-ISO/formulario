const minNacionales = parseInt(prompt("Ingrese el total de minutos nacionales:"));
const minInternacionales = parseInt(prompt("Ingrese el total de minutos internacionales:"));


const valorNacional = minNacionales * 200;
const valorInternacional = minInternacionales * 500;


let descuento = 0;
const estrato = parseInt(prompt("Ingrese el estrato del usuario (1 a 6):"));
switch (estrato) {
  case 1:
    descuento = 0.1;
    break;
  case 2:
    descuento = 0.05;
    break;
  case 3:
    descuento = 0.02;
    break;
  case 4:
  case 5:
  case 6:
    descuento = 0.01;
    break;
}


const subtotal = valorNacional + valorInternacional;
const iva = subtotal * 0.15;
const total = subtotal + iva;
const descuentoValor = subtotal * descuento;


alert(`Resumen del valor a pagar:);
- Total minutos nacionales: ${minNacionales}
- Total minutos internacionales: ${minInternacionales}
- Valor a pagar por minutos nacionales: $${valorNacional.toFixed(2)}