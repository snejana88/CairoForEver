const itemsPlatos = document.getElementById("items-platos")
const templatePlatos = document.getElementById("carta-plato").content
const fragmentPlatos = document.createDocumentFragment()
let carrito = {}



document.addEventListener('DOMContentLoaded', () =>{
    fetchDataPlatos()
})

const fetchDataPlatos = async() =>{
    try {
        const resPlatos = await fetch('platos.json')
        let data = await resPlatos.json()
        mostrarPlatos(data)
        console.log(data);
    } catch(error){
        console.log(error)
    }
}

const mostrarPlatos = data => {
    data.forEach(plato =>{
        templatePlatos.querySelector(".infoDetalle h4").textContent = plato.nombre
        templatePlatos.querySelector(".infoDetalle p").textContent = plato.precio
        templatePlatos.querySelector('img').src = plato.imagen
        
        

        const clone = templatePlatos.cloneNode(true)
        fragmentPlatos.appendChild(clone)
    })
    itemsPlatos.appendChild(fragmentPlatos)
}



























let contador = 0

function showElement(elemento) {
    let parent = elemento.parentElement;
    let textContador = parent.querySelector("p");
    let cuenta = parseInt(textContador.innerHTML);
    cuenta++
    textContador.textContent = cuenta
 
}

function restElement(elemento) {
    let parent = elemento.parentElement;
    let textContador = parent.querySelector("p");
    let cuenta = parseInt(textContador.innerHTML);
    cuenta--
    textContador.textContent = cuenta

}

