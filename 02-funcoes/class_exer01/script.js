// Pergintar o número para usário
// Converter o número 
// Enquanto índice <= 1000
    // Concatena na variável
// Mostra a msg no output
var output = document.querySelector(".output");
var mensagem = "";

function mostrarTabuada () {
    var n = parseFloat(prompt(`Digite um número:`));
    limparTabuada();
    var i = 1;
    while (i <= 100) {
        mensagem += `${n} * ${i} = ${n * i}<br> `;
        i++;
    }
    output.innerHTML = mensagem;
}

function limparTabuada () {
    mensagem = "";
    output.innerHTML = mensagem;
}