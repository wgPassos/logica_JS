

var produtos = [
{
    "nome": "caneta",
    "preco": 2.5
},
{
    nome: "lapis",
    preco: 2
}
];
console.log(produtos);

let output = document.querySelector("#output");

var msg = "";
for ( i = 0; i < produtos.length; i++) {

    msg += `<h2>Produto: ${produtos[i].nome}</h2>`;
    msg += `<p>Preço: ${produtos[i].preco}</p>`
}

output.innerHTML += msg;




