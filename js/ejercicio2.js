const origen = prompt("Introduce tu lugar de partida:");
const destino = prompt("Introduce tu lugar de llegada:");


let descuento = 0;


if (origen.toLowerCase() === "palma" && destino.toLowerCase() === "barcelona") {
  descuento = 5;
}

if (origen.toLowerCase() === "palma" && destino.toLowerCase() === "madrid") {
  descuento = 10;
}


if (origen.toLowerCase() === "palma" && destino.toLowerCase() === "valencia") {
  descuento = 15;
}


if (descuento > 0) {
  alert(`Se ha aplicado un descuento del ${descuento}%`);
} else {
  alert("No se ha aplicado ningún descuento");
}

