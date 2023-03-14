const mes = parseInt(prompt("Introduce el número del mes (1 al 12):"));

if (mes === 2) {
  alert("Febrero tiene 28 o 29 días, dependiendo del año");
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
  alert("El mes tiene 30 días");
} else {
  alert("El mes tiene 31 días");
}
