let produtos = ["Caneta", "Lápis", "Tesoura", "Borracha", "Caderno", "Livro"];

var msg = "";
var output = document.querySelector("#output");

// Caso eu precise adicionar mais produtos ao array, o código funcionará corretamente, Por conta do "produtos.LENGTH" dentro do loop for

produtos.push("Mochila", "Cartolina");


for (var i = 0; i < produtos.length; i++) {
    msg += `Produto ${i + 1}: ${produtos[i]}<hr>`;
}

output.innerHTML = msg;
