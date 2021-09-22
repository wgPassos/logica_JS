var largura = parseFloat(prompt("Digite um numero:"))
var altura = parseFloat(prompt("Digite outro numero:"))



function mostrarAreaAlert() {
    var area = calcularArea(largura, altura);

    alert(`A área total é: ${calcularArea(largura, altura)}`)
}
function mostrarAreaOutput() {
    var area = calcularArea(largura, altura);
    let output = document.querySelector("#output");
    output.innerHTML = calcularArea(largura, altura);
}

function calcularArea (l, a) {
    return l * a
}