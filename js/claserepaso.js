function tabla (numero= Number){
    for( i=0; i<= numero; i++){
        console.log (`${numero}* ${i} = ${numero}`);
    }
}
function tablaD(tabla=Number, limite=Number){
    for(i=0; i<= limite; i++){
        console.log(`${tabla}* ${i} = ${tabla*i}//`)
    }
}
tabla(parseInt(prompt("ingrese un numero: ")))
 console.log('**********')
 tablaD(4, 10)
 console.log('*******')
 tablaT(6);