const itemsbebidas = document.getElementById("items-bebidas")

let carrito = {}
const templatebebidas = document.getElementById("temp-bebidas").content
const fragmentbebidas = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () =>{
    fetchDatabebidas()
})

const fetchDatabebidas= async() =>{
    try {
        const resbebidas = await fetch('bebidas.json')
        let data = await resbebidas.json()
        mostrarBebidas(data)
        console.log(data);
    } catch(error){
        console.log(error)
    }
}


const mostrarBebidas = data => {
    data.forEach(Bebidas=>{
        templateBreakFast.querySelector(".infoDetalle h4").textContent = BreakFast.nombre
        templateBreakFast.querySelector(".infoDetalle p").textContent = BreakFast.precio
        templateBreakFast.querySelector('img').src = BreakFast.imagen
        
        

        const cloneBebidas = templatebebidas.cloneNode(true)
        fragmentbebidas.appendChild(clonebebidas)
    })
    itemsbebidas.appendChild(fragmentbebidas)
}
