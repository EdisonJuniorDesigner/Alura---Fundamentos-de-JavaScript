const notas = [10, 6, 8];
notas.push(7);
console.log(notas);

// let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

// minha versão do código nessa aula, utilizando for para percorrer a lista
// e somar as notas.
let somaNotas = 0;

for(i = 0; i < notas.length; i++){
    somaNotas += notas[i];
}

let media = somaNotas / notas.length;
console.log(media);