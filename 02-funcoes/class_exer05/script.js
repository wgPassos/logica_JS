var output = document.querySelector(".output");


var nPrompt = parseFloat(prompt(`Enter a number:`));
output.innerHTML = nPrompt;

var result = nPrompt;
var nPrompt2 = null;


function enterNumber () {
    nPrompt2 = parseFloat(prompt(`Enter a number:`));
}

function printResult () {
    output.innerHTML = result;
}

function calcular (x) {
    enterNumber(); 
    
    switch(x) {
        case "+":
            result += nPrompt2;
            break;
        case "-":
            result -= nPrompt2;
            break;
        case "*":
            result *= nPrompt2;
            break;
        case "/":
            result /= nPrompt2;
            break;
    }

    printResult();
}


function clearResult () {
    output.innerHTML = "";
}