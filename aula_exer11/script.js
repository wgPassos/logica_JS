// Pedir para usuário digitar um número
// E fazer em seguida a tabuada desse número 
// até 1000

// let numero = parseInt(prompt("Digite um número:"))
// let indice = 1;

// // Repita até que o indice seja 1000
// while (indice <= 1000) {
//     document.write(numero + "X" + indice + "=" + (numero * indice) + "<br>");

//     indice = indice + 1;
// }
// document.write(`Saiu do loop`);

// TESTANDO com escolhas de início e ffim da tabuada

// let tabuada = parseInt(prompt(`Digite uo número da tabuada que você quer:`));
// let comecoTabuada = parseInt(prompt(`Comece em qual multiplicando?`));
// let fimTabuada = parseInt(prompt(`Em qual multiplicando terminar?`));

// while (comecoTabuada <= fimTabuada) {
//     document.write(tabuada + " X " + comecoTabuada + " = " + (tabuada * comecoTabuada) + "<br>");;
//     comecoTabuada = comecoTabuada + 1;
// }

// document.write("Saiu do loop");

// TESTANDO COM for
let tabuada = parseInt(prompt("Digite a tanuada:"));
let comeco = parseInt(prompt('A tabuada começa em número?'));
let final = parseInt(prompt("Atabuada termina em qual número?"));

for (comeco; comeco <= final; +1) {
    document.write(tabuada + "x" + comeco + " = " + (tabuada * comeco) + "<br>");
    comeco = comeco + 1;
}