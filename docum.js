
const buttonSuma = document.getElementById("summar");
const buttonRest = document.getElementById("restar");
const textContador =document.getElementById("cuenta");
let contador = 0


buttonSuma.addEventListener("click", ()=>{
    contador=contador+1;
textContador.textContent= contador;

})

buttonRest.addEventListener("click", ()=>{
   contador--;
   textContador.textContent=contador;

   
})

