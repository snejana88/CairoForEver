

const itemsBreakFast = document.getElementById("items-breakfast")

let carrito = {}
const templateBreakFast = document.getElementById("temp-breakfast").content
const fragmentBreakFast = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () =>{
    fetchDataBreak()
})

const fetchDataBreak = async() =>{
    try {
        const resBreak = await fetch('breakfast.json')
        let data = await resBreak.json()
        mostrarBreakFast(data)
        console.log(data);
    } catch(error){
        console.log(error)
    }
}


const mostrarBreakFast = data => {
    data.forEach(BreakFast =>{
        templateBreakFast.querySelector(".infoDetalle h4").textContent = BreakFast.nombre
        templateBreakFast.querySelector(".infoDetalle p").textContent = BreakFast.precio
        templateBreakFast.querySelector('img').src = BreakFast.imagen
        
        

        const cloneBreakFast = templateBreakFast.cloneNode(true)
        fragmentBreakFast.appendChild(cloneBreakFast)
    })
    itemsBreakFast.appendChild(fragmentBreakFast)
}
