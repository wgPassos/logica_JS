// Exercício 6

// fazer jogador 1 digitar um número
// fazer jogador 2 digitar outro número
// Se forem iguais,  mostra mendagem "empate"

// Sortear um número entre 0 e 1

// se o numero sorteado for 0, ganha
// quem escolher o número menor 

//  se o numero sorteado for 1,  ganha 
// quem escolher o numero maior

let jog1 = parseFloat(prompt(`Type a note:`));
let jog2 = parseFloat(prompt(`Type another note:`));


if (jog1 === jog2) {
    alert(`Empate`);
} else {
    let sorteio = parseInt(Math.random() * 2);
    alert(sorteio);
    // Parte onde foi simplificado do exercise 7
    if (sorteio === 0 && jog1 < jog2 || sorteio === 1 && jog1 > jog2) {
        alert(`Jog1 venceu com jogo: ${jog1}`);
    } else {
        alert(`Jog2 venvceu com jogo: ${jog2}`);
    }
}