function sumarElemento(elemento){
   let fatherElement= elemento.parentElement
   let indexArray= fatherElement.dataset.numero;
   let contador = fatherElement.querySelector("p")
  console.log(contador);

   if(contador<=10){
    menu[indexArray].cantidad++
    fatherElement.querySelector("p").innerHTML = menu[indexArray].cantidad;
   }
}


function restarElemento(elemento){
    let fatherElement= elemento.parentElement
    let indexArray=fatherElement.dataset.numero;
    let contador =fatherElement.querySelector("p").innerHTML
    
    if(contador>=0){
        menu[indexArray].cantidad--
        contador= menu[indexArray].cantidad;
    }
   
}

/*function suma(objeto) {
    let indicearray = objeto.parentElement.dataset.numero;
    listaPlatos[indicearray].cantidad++
    objeto.parentElement.querySelector("p").innerHTML = listaPlatos[indicearray].cantidad;
  
    addToCart(listaPlatos[indicearray])
  } 
  
  function resta(objeto) {
    let indicearray = objeto.parentElement.dataset.numero;
      if (listaPlatos[indicearray].cantidad > 0) {
      listaPlatos[indicearray].cantidad--
      objeto.parentElement.querySelector("p").innerHTML = listaPlatos[indicearray].cantidad;
    }
  } 
  
  function addToCart(itemPlato) {
  if (itemPlato.cantidad == 1)
          carritoDeCompra.push(itemPlato)
  }*/
