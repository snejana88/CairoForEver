function suma(objeto) {
    let indicearray = objeto.parentElement.dataset.numero;
    let cantidadItems = listaPlatos[indicearray].cantidad;
         cantidadItems++
         console.log(listaPlatos[indicearray].cantidad = cantidadItems);
 }
   let indicearray = objeto.parentElement.dataset.numero;
   listaPlatos[indicearray].cantidad++
   objeto.parentElement.querySelector("p").innerHTML = listaPlatos[indicearray].cantidad;
 } 
 
 function resta(objeto) {
   let i = parseFloat(objeto.parentElement.querySelector("inpugitt").value)
     if(i > 0) {
         i--;
         return objeto.parentElement.querySelector("input").value = i;
     }
 }
   let indicearray = objeto.parentElement.dataset.numero;
     if (listaPlatos[indicearray].cantidad > 0) {
     listaPlatos[indicearray].cantidad--
     objeto.parentElement.querySelector("p").innerHTML = listaPlatos[indicearray].cantidad;
   }
 }  