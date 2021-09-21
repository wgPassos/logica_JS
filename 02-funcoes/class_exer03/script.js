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

function soma () {
    enterNumber(); 
    result += nPrompt2;
    printResult();
}

function diminui () {
    enterNumber(); 
    result -= nPrompt2;
    printResult();
}

function multiplica () {
    enterNumber(); 
    result *= nPrompt2;
    printResult();
}

function divide () {
    enterNumber(); 
    result /= nPrompt2;
    printResult();
}

function clearResult () {
    output.innerHTML = "";
}