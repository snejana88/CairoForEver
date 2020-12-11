const itemsPlatos = document.getElementById("items-platos")
const itemsBreakFast = document.getElementById("items-breakfast")
const templatePlatos = document.getElementById("carta-plato").content
const templateBreakFast = document.getElementById("temp-breakfast").content
const fragmentPlatos = document.createDocumentFragment()
const fragmentBreakFast = document.createDocumentFragment()
let carrito = {}



document.addEventListener('DOMContentLoaded', () =>{
    fetchDataPlatos()
    fetchDataBreakFast()
})

const fetchDataPlatos = async() =>{
    try {
        const resPlatos = await fetch('platos.json')
        const dataPlatos = await resPlatos.json()
        mostrarPlatos(dataPlatos)
    } catch(error){
        console.log(error)
    }
}

const fetchDataBreakFast = async() =>{
    try {
        const resBreak = await fetch('breakfast.json')
        const dataBreak = await resBreak.json()
        mostrarBreakFast(dataBreak)
    } catch(error){
        console.log(error)
    }
}
const mostrarPlatos = dataPlatos => {
    data.forEach(plato =>{
        templatePlatos.querySelector(".infoDetalle h4").textContent = plato.nombre
        templatePlatos.querySelector(".infoDetalle p").textContent = plato.precio
        templatePlatos.querySelector('img').src = plato.imagen
        
        

        const clone = templatePlatos.cloneNode(true)
        fragmentPlatos.appendChild(clone)
    })
    itemsPlatos.appendChild(fragmentPlatos)
}

const mostrarBreakFast = dataBreak => {
    data.forEach(BreakFast =>{
        templateBreakFast.querySelector(".infoDetalle h4").textContent = BreakFast.nombre
        templateBreakFast.querySelector(".infoDetalle p").textContent = BreakFast.precio
        templateBreakFast.querySelector('img').src = BreakFast.imagen
        
        

        const cloneBreakFast = templateBreakFast.cloneNode(true)
        fragmentBreakFast.appendChild(cloneBreakFast)
    })
    itemsBreakFast.appendChild(fragmentBreakFast)
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