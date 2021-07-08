// Exercício 6

// fazer jogador 1 digitar um número
// fazer jogador 2 digitar outro número
// Se forem iguais,  mostra mendagem "empate"

// Sortear um número entre 0 e 1

// se o numero sorteado for 0, ganha
// quem escolher o número menor 

//  se o numero sorteado for 1,  ganha 
// quem escolher o numero maior

var jog1 = parseInt(prompt(`digite um número:`));
var jog2 = parseInt(prompt(`Digite outro número:`))
var resultSorteio = parseInt(math.random() * 2);
// let empat = jog1 === jog2
if (jog1 === jog2) {
    alert(`Empate com resultado ${jog1}`);
}
else {
    if (resultSorteio = 1) {
        if (jog1 > jog2) {
            alert(`O jog1 venceu com número `);
        } else {
            alert(`Ojog2 venceu com `);
        }
    }
    else {
        if(resultSorteio = 0) {
            if (jog1 < jog2) {
                alert(`O jog1 venceu com número `);
            } else {
                    alert(`O jog2 venceu número `);
            } 
        }
    }
}