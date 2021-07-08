// Exercíccio 4

// Pedir para usuário digitar um número
let  n1 = parseInt(prompt("Digite um número:"));

// Pedir para usuário digitar outro número
let n2 = parseInt(prompt("Digite outro número"));

let modulo = n1 % n2;
let elevado = n1 ** n2
// Mostrar um alert com 
// O resto da divisão de (n1) por (n2) é: (resultado);
alert(`O resto da divisão de ${n1} por ${n2} é: ${modulo}`);
// O número (n1) elevado a (n2) é: (resultado);
alert(`O número ${n1} elevado a ${n2} é: ${elevado}`);