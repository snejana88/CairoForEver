const items = document.getElementById("items-platos")
const templatePlato = document.getElementById("carta-plato").content
const fragment = document.createDocumentFragment()
let carrito = {}



document.addEventListener('DOMContentLoaded', () =>{
    fetchData()
})

const fetchData = async() =>{
    try {
        const res = await fetch('platos.json')
        const data = await res.json()
        mostrarPlatos(data)
        
    } catch(error){
        console.log(error)
    }
}

const mostrarPlatos = data => {
    data.forEach(plato =>{
        templatePlato.querySelector(".infoDetalle h4").textContent = plato.nombre
        templatePlato.querySelector(".infoDetalle p").textContent = plato.precio
        templatePlato.querySelector('img').src = plato.imagen
        
    
        const clone = templatePlato.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
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