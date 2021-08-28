// Exercise 3

// Pedir para usuário digitar um número
// Converter número,
var numero1 = parseInt(prompt("Digite um número:"));
// Pedir para usuário digita outro
// Converter número
var numero2 = parseInt(prompt("Digite outro número:"));
// Mostra a subtração com texto "a subtração é:.."
// Mostra a soma com texto "a soma é:.."
// Mostra a divisão com texto "a divisão é:.."
// Mostra a multiplicação com texto "a multiplicação é:.."

var sum = numero1 + numero2;
var subtration = numero1 - numero2;
var multiplication = numero1 * numero2;
var division = numero1 / numero2;

alert(`A soma de ${numero1} + ${numero2} é igual a ${sum}\n
A subtração de ${numero1} - ${numero2} é igual a ${subtration}\n
A multiplicação de ${numero1} * ${numero2} é igual a ${multiplication}\n
A divisão de ${numero1} / ${numero2} é igual a a ${division}`);
