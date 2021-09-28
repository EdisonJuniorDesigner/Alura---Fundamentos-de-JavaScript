const notas = [10, 6, 8, 5, 10];
notas.pop();
console.log(notas);

// método utilizado da aula
// let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

// utilizando meu método novamente
let somaNotas = 0;

for(i = 0; i < notas.length; i++){
    somaNotas += notas[i];
}

let media = somaNotas / notas.length;
console.log(`A média é ${media}`);