let categorias = [
    {
       imagenCategoria: "./Images/breakfast.png",
       nombreCategoria: "Breakfast",
    },
    {
       imagenCategoria: "./Images/fastfood.png",
       nombreCategoria: "Fast Food",
    },
    {
       imagenCategoria: "./Images/dinner.png", 
       nombreCategoria: "Dinner",
    },
    {
       imagenCategoria: "./Images/postres.png",
       nombreCategoria: "Postres",
    },
    {
       imagenCategoria: "./Images/bebidas.png",
       nombreCategoria: "Bebidas",
    }
]

let stringCategorias = " "

function pintarCategorias(){
    for(let i = 0; i < categorias.length; i++){
        stringCategorias += `<div class="contenedorCategorias" onclick="showMe(this)" >
        <img src="${categorias[i].imagenCategoria}" >
        <p >${categorias[i].nombreCategoria}</p>
    </div>`
    
    }
}

pintarCategorias()
document.querySelector(".categorias").innerHTML = stringCategorias

















