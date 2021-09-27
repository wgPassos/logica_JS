
var dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

var hoje = new Date();

var diaDaSemana = hoje.getDay();

alert(`Olá! Hoje é ${dias[diaDaSemana]}`);


// Objeto new Date() retorna o dia da semana. 

// Exemplo: caso seja "segunda" está no indice [1] do "array dias".

// Então quando pegamos a função "getday()" armazenada na var diasDaSemana e passamos como como indice do var "dias", a função mostrará o dia da semana em número que apontará seu valor, caso seja o dia uma segunda-feira,  a função getDay() mostrará 1, então dentro do array o o número 1 aponta para a "segunda" dentro do array