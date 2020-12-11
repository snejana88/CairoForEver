const itemsFastFood = document.getElementsByClassName("fastfood")
const templateFastFood = document.getElementById("temp-fastfood").content
const fragmentFastFood = document.createDocumentFragment()
let carrito = {}



document.addEventListener('DOMContentLoaded', () =>{
    fetchDataFastFood()
})

const fetchDataFastFood = async() =>{
    try {
        const resFastFood = await fetch('FastFood.json')
        let data = await resFastFood.json()
        mostrarFastFood(data)
        console.log(data);
    } catch(error){
        console.log(error)
    }
}

const mostrarFastFood = data => {
    data.forEach(FastFood =>{
        templateFastFood.querySelector(".infoDetalle h4").textContent = FastFood.nombre
        templateFastFood.querySelector(".infoDetalle p").textContent = FastFood.precio
        templateFastFood.querySelector('img').src = FastFood.imagen
        
        

        const clone = templateFastFood.cloneNode(true)
        fragmentFastFood.appendChild(clone)
    })
    itemsFastFood.appendChild(fragmentFastFood)
}
