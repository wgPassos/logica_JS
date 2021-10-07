
// var produtos = [
//     {
//         "nome": "caneta",
//         "preco": 2.5
//     },
//     {
//         nome: "lapis",
//         preco: 2
//     }
//     ];
//     console.log(produtos);
    
//     let output = document.querySelector("#output");
    
//     var msg = "";
//     for ( i = 0; i < produtos.length; i++) {
    
//         msg += `<h2>Produto: ${produtos[i].nome}</h2>`;
//         msg += `<p>Preço: ${produtos[i].preco}</p>`
//     }
    
//     output.innerHTML += msg;
    
let output = document.querySelector(".output");

let Clientes = [
    Cliente1 = 
    {
        "nome": "Willian",
        "email": "willian@gmail.com",
    },
    Cliente2 = 
    {
        "nome": "Gabriel",
        "email": "gabriel@gmail.com",
    },
    Cliente3 = 
    {
        "nome": "passos",
        "email": "passos@gmail.com",
    },
]



msg = "";

for (i = 0; i < Clientes.length; i++ ) {

    msg += `<h2>Cliente: ${Clientes[i].nome}</h2>`
    msg += `<p>Email: ${Clientes[i].email}</p>`
}

output.innerHTML +=  msg;


let output2 = document.getElementById("output2");

let fornecedor1 = {
    nome: "Caroline",
    email: "carol@gmail.com",
}
let fornecedor2 = {};
fornecedor2.nome = "Miguel";
fornecedor2.email = "miguel@gmail.com";

let fornecedores = [fornecedor1, fornecedor2];

console.log(fornecedores);

let msg2 = "";

for (i = 0; i < fornecedores.length; i ++) {
    msg2 += `<h2>Fornecedor: ${fornecedores[i].nome}</h2> E-mail: ${fornecedores[i].email}<br>`
}

output2.innerHTML += msg2;