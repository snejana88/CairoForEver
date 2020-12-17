const numeroCliente = 34648106624 
let pedidoFinal = "Holi"


function btnEnviarPedido(){
    window.location.href= `https://api.whatsapp.com/send?phone=+${numeroCliente}&text=${pedidoFinal}`
}