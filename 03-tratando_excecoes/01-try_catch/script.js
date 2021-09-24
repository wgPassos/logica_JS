


var n2 = parseFloat(prompt(`Enter a number:`));

escreve (n2)

function iniciarCalculo (simbolo) {

    var n1 = document.querySelector("#output").textContent;
    var n1 = parseFloat(n1);

    var n2 = parseFloat(prompt("Digite outro numero"));

    try {
        var msg = calcular(simbolo, n1, n2);
    } catch (e) {
        alert(e);
        return;
    }

    escreve (msg);
}

function escreve (mensagem) {

    var output = document.querySelector("#output");
    output.innerHTML = mensagem;
}

function calcular (simbolo, n1, n2) {

    if (simbolo !== "+" && simbolo !== "-" && simbolo !== "*" && simbolo !== "/") {
        alert("Digite um simbolo válido");
        return 0;
    }

    if ( isNaN(n1) || isNaN(n2) ) {
        alert("Chama passando somente números");
        return 0;
    }
    
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