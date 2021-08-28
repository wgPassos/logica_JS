// Problema

// Pedir para usuário digitar dois números 
// mostrar uma mensagem informando se foi aprovado ou 
// não.
// A nota de corte é 5

let nome = prompt(`Digite seu nome:`);
let nota1 = parseFloat(prompt(`Digite sua primeira nota:`));
let nota2 = parseFloat(prompt(`Digite sua segunda nota:`));

let media = (nota1 + nota2) / 2;

if (media >= 5) {
    alert(`Parabéns ${nome}!!! Você foi aprovado com média ${media}`);
}
else {
    alert(`Que pena ${nome}! Você foi reprovado com média ${media}`);
}