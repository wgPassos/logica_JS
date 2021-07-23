// SWITCH
// Compara valor e tipo

// let numero = prompt(`Enter a numeber`);

// switch(numero) {
//     case 1:
//         alert(`type number`);
//     break;
//     case "1":
//         alert(`Type string`);
// // A escolha(Switch) vai cair no segundo case,
// // o Switch compara valor e tipo,
// // Pois,  no prompt captura-se "String"
// }

let nome = prompt(`Type your name:`);
let compNome = nome.length;

// Switch não se compara com operadores dentro
// SEMPRE compara com valores fechados (e os tipos)
switch (compNome) {
    case (compNome > 5):
        alert(`Nome é comprido`);
    case (compNome <= 5):
        alert(`Nome curto`);
    default:
        alert(`Escreva um nome`);
}