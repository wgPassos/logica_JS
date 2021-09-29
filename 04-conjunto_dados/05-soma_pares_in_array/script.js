// let arr = [25, 30, 45, 28, 0, 12, 78, 64];

// var soma = 0;
// let pares = 0;

// for (a of arr) {
//     if (a % 2 == 0) {
//         pares += a;
//         console.log(pares);
//     } 
//     document.querySelector(".output").innerHTML = pares;
    
    
// }alert(pares);


// De outra forma, com função passando parâmetro.

let numeros = [25, 30, 45, 28, 0, 12, 78, 64];


let somaPares = somaDosPares(numeros);

document.querySelector(".output").innerHTML += " " + somaPares;

alert(somaPares);

function somaDosPares (arr) {
    var soma = 0;
    for (a of arr) {
        if ( !isNaN(a) && (a % 2 === 0)) {
            soma += a;
        }
    }
    return soma;
}