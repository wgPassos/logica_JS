// OBJETOS

// Conjunto de dados agrupados entre {}

var produtos = {
    caneta: {
        nome: "Caneta azul",
        preco: 1.25,
        
    },
    lápis: {
        nome: "Lápis Verde",
        preco: 1.50
    },
    borracha: {
        nome: "Borracha Clean",
        preco: 2.50
    },
    estoque: 10
}

let produtosNaTela = 
"<br>Caneta: " + produtos.caneta.preco + "<br>lápis: " + produtos.lápis.preco +
"<br>borracha: " + produtos.borracha.preco;

document.querySelector(".output").innerHTML += produtosNaTela;

console.log(produtos);

// produtos.comprar = function() {

//     console.log("Comprou caneta");
//     this.estoque--;
//     console.log(this.estoque);
// }


// Com parametros
produtos.comprar = function(qtd) {
    if (!qtd) {
        qtd = 1;
    }
    console.log("Comprou caneta");
    this.estoque = this.estoque - qtd;
    console.log(this.estoque);
}

console.log(produtos);