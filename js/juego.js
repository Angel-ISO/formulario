var palabraRamdom = "rinoceronte"
CincoIntentos()
function CincoIntentos()
{ var acierto = false ; var contadorErrores = 0; 
    while (acierto == false && contadorErrores <5)
    { var n1 = prompt("Adivina la palabra la primera letra es: ", palabraRamdom.charAt(0) ); 
    if (n1==palabraRamdom) { acierto=true; 
        document.write("Adivinaste, la palabra era " + palabraRamdom ); } 
    else { contadorErrores++;     
    alert("Vuelve a intentar llevas :"+ contadorErrores +" intentos"); } } 
    
    
    // if (contadorErrores ===1){
    //     palabraRamdom.substring(0,1);
    // }
    // if (contadorErrores ===2){
    //     palabraRamdom.substring(0,2);
    // }
    // if (contadorErrores ===3){
    //     palabraRamdom.substring(0,3);
    // }
    // if (contadorErrores ===4){
    //     palabraRamdom.substring(0,4);
    // }
    if (contadorErrores === 5) window.close(); 
} 
