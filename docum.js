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

