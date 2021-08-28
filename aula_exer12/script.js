// Para esta tarefa reescreva o código da aula 
// anterior, mas inserindo uma linha divisória sempre 
// que mudar a dezena.
// Ou seja, entre 10 e o 11, entre 20 e 21 e assim por diante.

const tabuada = parseInt(prompt(`Enter the multiplication table you want:`));


for (i = 0; i <= 1000; i++) {
    document.write(`${tabuada} X ${i} = ${tabuada * i} <br>`);
    if (i % 10 === 0) {
        document.write(`<hr>`);
    }
}
document.write(`Saiu do loop`);
