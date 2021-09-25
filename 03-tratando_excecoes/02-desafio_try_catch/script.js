
function mostrarAreaAlert() {
    var largura = parseFloat(prompt("Digite um numero:"));
    var altura = parseFloat(prompt("Digite outro numero:"));

    try {
        alert(`A área total é: ${calcularArea(largura, altura)}`);
    } catch(e) {
        alert(e);
    }
    
}

function mostrarAreaOutput() {
    var largura = parseFloat(prompt("Digite um numero:"));
    var altura = parseFloat(prompt("Digite outro numero:"));

    try {
        document.querySelector("#output").innerHTML = `A área total é: ${calcularArea(largura, altura)}`;
    } catch(e) {
        alert(e);
    }
    
}

function calcularArea (l, a) {
    if (l === undefined || a === undefined) {
        throw new Error("calcularArea soh com numeros")
    }
    if (isNaN(l) || isNaN(a)) {
        throw new Error("Apenas numeros")
    }
    return l * a
}