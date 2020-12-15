
function showMe(elemento){
    //console.log(elemento);
    let nombreCategoria = elemento.querySelector("p").textContent
    console.log(nombreCategoria);
    
    let stringFilter = " "
  
    function pintarFilter(){
    
    for(let i=0; i<menu.length; i++){
      if(nombreCategoria === `${menu[i].categoria}`){
        stringFilter +=`<div class="infoPlatos ${menu[i].categoria}">
        <img src="${menu[i].imagen}"> 
        <div class="infoDetalle ">
        <p class="${menu[i].precio}"></p>
        <h4>${menu[i].nombre}</h4>
        <p>"${menu[i].detalles}"</p>
            <div class="counter" data-numero= "${[i]}">
                <button class="counterLeft" onclick="restarElemento(this)"
                >-</button>
                <p id="cuenta">0</p>
                <button class="counterRight" onclick="sumarElemento(this)" 
                >+</button>
            </div>
        </div>
    </div> `
  } 
  } 
  }
  pintarFilter()
  document.querySelector(".platos").innerHTML = stringFilter
  
  
  }
  
  /*
  let scrollPlatos = document.querySelectorAll(".infoPlatos")
  
  ScrollReveal().reveal(scrollPlatos, {
    delay: 300,
    duration: 1000,
    origin: "top",
    distance: "50px",
    reset: true
  })
  
  ScrollReveal().reveal(".platos", {
    delay: 300,
    duration: 1000,
    origin: "top",
    distance: "50px",
  });
  
  */