const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

const mediasDosAlunos = [10, 7, 9, 6];

                            //0         //1
let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

// No primeiro colchete '[]' passamos qual lista queremos acessar, no segundo passamos qual elemento queremos pegar
// que no exemplo foi a lista 'alunos[0]' e o elemento 'João[0]'
console.log(`${listaDeNotasEAlunos[0][0]}, a sua média é ${listaDeNotasEAlunos[1][0]}`);