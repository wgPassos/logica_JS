
function mostrarAreaAlert() {
    var largura = parseFloat(prompt("Digite um numero:"));
    var altura = parseFloat(prompt("Digite outro numero:"));

    alert(`A área total é: ${calcularArea(largura, altura)}`);
}

function mostrarAreaOutput() {
    var largura = parseFloat(prompt("Digite um numero:"));
    var altura = parseFloat(prompt("Digite outro numero:"));

    document.querySelector("#output").innerHTML = `A área total é: ${calcularArea(largura, altura)}`;
}

function calcularArea (l, a) {
    return l * a
}