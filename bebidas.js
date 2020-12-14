const itemsbebidas = document.querySelector(".bebidas")

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
        templatebebidas.querySelector(".infoDetalle h4").textContent = Bebidas.nombre
        templatebebidas.querySelector(".infoDetalle p").textContent = Bebidas.precio
        templatebebidas.querySelector('img').src = Bebidas.imagen
        
        

        const cloneBebidas = templatebebidas.cloneNode(true)
        fragmentbebidas.appendChild(cloneBebidas)
    })
    itemsbebidas.appendChild(fragmentbebidas)
}
