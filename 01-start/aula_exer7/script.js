// Exercício 6

// fazer jogador 1 digitar um número
// fazer jogador 2 digitar outro número
// Se forem iguais,  mostra mendagem "empate"

// Sortear um número entre 0 e 1

// se o numero sorteado for 0, ganha
// quem escolher o número menor 

//  se o numero sorteado for 1,  ganha 
// quem escolher o numero maior


// let jog1 = parseInt(prompt(`Enter a number:`))
// let jog2 = parseInt(prompt(`Enter another number:`));
// let sorteio = parseInt(Math.random() * 2);

// if (jog1 === jog2) {
//     alert(`EMPATE! Número jogado foi: ${jog1}`);
// }
// else {
//     if (sorteio == 0) {
//         if (jog1 < jog2) {
//             alert(`SORTEIO: ${sorteio}\nJOgador 1 ganhou,  com número menor: ${jog1}`);
//         } else {
//             alert(`SORTEIO: ${sorteio}\nO jogador 2 ganhou com número menor: ${jog2}`);
//         }
//     }else {
//         if (jog1 > jog2) {
//             alert(`SORTEIO: ${sorteio}\nO jogador 1 ganhou,  com número maior: ${jog1}`);
//         }
//         else {
//             alert(`SORTEIO: ${sorteio}\nO jogador 2 ganhou, com número maior: ${jog2}`);
//         }
//     }
// }



// OU colocando o sorteio no comando de descisão
// Dentro do else

let jog1 = parseInt(prompt(`Enter a number:`))
let jog2 = parseInt(prompt(`Enter another number:`));

if (jog1 === jog2) {
    alert(`EMPATE! Número jogado foi: ${jog1}`);
}
else {
    let sorteio = parseInt(Math.random() * 2);
    if (sorteio == 0) {
        if (jog1 < jog2) {
            alert(`SORTEIO: ${sorteio}\nJOgador 1 ganhou,  com número menor: ${jog1}`);
        } else {
            alert(`SORTEIO: ${sorteio}\nO jogador 2 ganhou com número menor: ${jog2}`);
        }
    }else {
        if (jog1 > jog2) {
            alert(`SORTEIO: ${sorteio}\nO jogador 1 ganhou,  com número maior: ${jog1}`);
        }
        else {
            alert(`SORTEIO: ${sorteio}\nO jogador 2 ganhou, com número maior: ${jog2}`);
        }
    }
}