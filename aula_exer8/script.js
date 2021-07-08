// Pedir para o usuário digitar dois números
// E mostrar uma mensagem informando se foi aprovado ou não
// A nota de corte é 5
// Contudo, se qualquer uma das notas for zero, reporva 
// automaticamente.

let note1 = parseFloat(prompt(`Enter the first note:`));
let note2 = parseFloat(prompt(`Enter the second note:`));
let media = (note1 + note2) / 2;

if (note1 == 0 || note2 == 0) {
    alert(`Reprovado! Você tirou uma nota nota ZERO`);
}
else {
    if(media >= 4) {
        alert(`Parabéns! Você passou`);
    }
    else {
        alert(`Reprovado!! A média foi menor que 4`);
    }
}
