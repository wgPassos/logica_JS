// Para este exercício mostre na tela todos os anos a
// a partir de 1004 até o ano 2017, pulando de quatro 
// em quatro anos.
// Example: 
// 1004   1008   1012    e assim por diante

// Isso é como mostrar os anos bissextos
// as regras para definir se um ano é bissexto 
console.log("Ola mundo");


let  ano = 1004;

// while (ano <= 2021) {
//     if (!(ano % 100 === 0) || (ano % 400 ===0)) {
//     document.write(`${ano} <br>`);
//     } else {
//         document.write(`${ano} não é bissexto <br>`);
//     }
//     ano += 4;
// }

for (ano = 1004; ano <= 2021; ano += 4) {
    if (!(ano % 100 === 0) || (ano % 400 === 0)) {
        document.write(`${ano} <br>`);
    } else {
        document.write(`${ano} não é bissexto <br>`);
    }
}
document.write(`Saiu do loop`);