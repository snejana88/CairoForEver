


function restElement(elemento) {
    console.log(elemento);
    let indiceArray = elemento.parentElement.dataset.numero;
    menu[indiceArray].cantidad++
    elemento.parentElement.querySelector("#cuenta").innerHTML = menu[indicearray].cantidad;
}



function addElement(elemento){
    console.log(elemento);
}