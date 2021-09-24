


var n2 = parseFloat(prompt(`Enter a number:`));

escreve (n2)

function iniciarCalculo (simbolo) {

    var n1 = document.querySelector("#output").textContent;
    var n1 = parseFloat(n1);

    var n2 = parseFloat(prompt("Digite outro numero"));

    var msg = calcular(simbolo, n1, n2);

    escreve (msg);
}

function escreve (mensagem) {

    var output = document.querySelector("#output");
    output.innerHTML = mensagem;
}

function calcular (simbolo, n1, n2) {
    
    var numeroCalculado = null;
    
    switch(simbolo) {
        case "+":
            numeroCalculado = n1 + n2;
            break;
        case "-":
            numeroCalculado = n1 - n2;
            break;
        case "*":
            numeroCalculado = n1 * n2;
            break;
        case "/":
            numeroCalculado = n1 / n2;
            break;
    }
    return numeroCalculado;
}


function clearResult () {

    output.innerHTML = "";
}