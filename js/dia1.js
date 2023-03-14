var palabraRamdom = "anonymus"
CincoIntentos()
function CincoIntentos()
{ var acierto = false ; var contadorErrores = 0; 
    while (acierto == false && contadorErrores <3)
    { var n1 = prompt("Adivina un numero del 0 al 5"); 
    if (n1==palabraRamdom) { acierto=true; 
        document.write("Adivinaste, la palabra era " + palabraRamdom ); } 
    else { contadorErrores++;  
    alert("Vuelve a intentar"); } } if (contadorErrores === 5) window.close(); 
} 

