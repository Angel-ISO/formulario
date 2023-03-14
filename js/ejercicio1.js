let acceso = parseInt(prompt("Introduce tu edad"));

if (acceso >= 1 && acceso <= 120) {
  if (acceso >= 18) {
    alert("Tiene permiso de acceso");
  } else {
    alert("No tiene permiso de acceso");
  }
} else {
  alert("Error: La edad debe estar entre 1 y 120 años");
}

