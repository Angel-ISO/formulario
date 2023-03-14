let subtotal = 0;
let numArticulos = 0;
while (true) {
  const valorUnitario = parseFloat(prompt("Ingrese el valor unitario del producto (en pesos):"));
  if (isNaN(valorUnitario)) break;
  const cantidad = parseInt(prompt("Ingrese la cantidad de productos comprados:"));
  subtotal += valorUnitario * cantidad;
  numArticulos += cantidad;
}
let descuento = 0;
if (subtotal > 200000) {
  descuento = subtotal * 0.1;
}
const iva = subtotal * 0.19;
const total = subtotal + iva - descuento;
alert(`Resumen de la compra:
Total de artículos comprados: ${numArticulos}
Subtotal de la compra: $${subtotal.toFixed(2)}
Valor IVA: $${iva.toFixed(2)}
Valor Descuento: $${descuento.toFixed(2)}
Total a pagar: $${total.toFixed(2)}`);

