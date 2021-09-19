// Pergintar o número para usário
// Converter o número 
// Enquanto índice <= 1000
    // Concatena na variável
// Mostra a msg no output
var input = document.querySelector("#input")
var output = document.querySelector(".output");
var mensagem = "";

function mostrarTabuada () {
    if (input.value === "") {
        alert(`Digite algum número no campo`)
        limparTabuada();
    } else {

        var n = parseFloat(input.value);
        limparTabuada();
        var i = 1;
        while (i <= 100) {
            mensagem += `${n} * ${i} = ${n * i}<br> `;
            if (i % 10 == 0) {
                mensagem += `<hr>`
            }i++;
        }

        // Se quisessemos fazer com FOR
        // for (; i <= 100; i++) {
        //     mensagem += `${n} * ${i} = ${n * i}<br> `;
        //     if (i % 10 == 0) {
        //         mensagem += `<hr>`
        //     };
        // }

        output.innerHTML = mensagem;
    }
}

function limparTabuada () {
    mensagem = "";
    output.innerHTML = mensagem;
    input.value = "";
}

input.addEventListener("keypress", mostrarTabuadaEnter);

function mostrarTabuadaEnter () {
    if (event.which === 13) {
        mostrarTabuada();
    }
}