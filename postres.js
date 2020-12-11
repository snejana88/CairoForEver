const itemsPostres = document.querySelector(".postres")
console.log(itemsPostres);
const templatePostres = document.getElementById("temp-postres").content
const fragmentPostres = document.createDocumentFragment()
let carrito = {} 



document.addEventListener('DOMContentLoaded', () =>{
    fetchDataPostres()
})

const fetchDataPostres = async() =>{
    try {
        const resPostres = await fetch('postres.json')
        let data = await resPostres.json()
        mostrarPostres(data)
        console.log(data);
    } catch(error){
        console.log(error)
    }
}

const mostrarPostres = data => {
    data.forEach(postre =>{
        templatePostres.querySelector(".infoDetalle h4").textContent = postre.nombre
        templatePostres.querySelector(".infoDetalle .price").textContent = postre.precio
        templatePostres.querySelector(".infoDetalle .details").textContent = postre.detalles
        templatePostres.querySelector('img').src = postre.imagen
        
        

        const clone = templatePostres.cloneNode(true)
        fragmentPostres.appendChild(clone)
    })
    itemsPostres.appendChild(fragmentPostres)
}



























let contador = 0

function showElement(elemento) {
    let parent = elemento.parentElement;
    let grandParent= parent.parentElement;
    let textContador = parent.querySelector("p");
    let cuenta = parseInt(textContador.innerHTML);
    cuenta++
    textContador.textContent = cuenta
    setCarrito(grandParent)
}

function restElement(elemento) {
    let parent = elemento.parentElement;
    let grandParent= parent.parentElement;
    let textContador = parent.querySelector("p");
    let cuenta = parseInt(textContador.innerHTML);
    cuenta--
    textContador.textContent = cuenta
    setCarrito(grandParent)
}

const setCarrito = objeto => {
    console.log(objeto)
}