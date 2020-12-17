function sumarElemento(elemento){
   let fatherElement= elemento.parentElement
   let indexArray= fatherElement.dataset.numero;

   if(fatherElement.querySelector("p").innerHTML<10){
    menu[indexArray].cantidad++
    fatherElement.querySelector("p").innerHTML = menu[indexArray].cantidad;
   }
}


function restarElemento(elemento){
    let fatherElement= elemento.parentElement
    let indexArray=fatherElement.dataset.numero;
    
    if(fatherElement.querySelector("p").innerHTML>0){
        menu[indexArray].cantidad--
        fatherElement.querySelector("p").innerHTML= menu[indexArray].cantidad;
    }
}
