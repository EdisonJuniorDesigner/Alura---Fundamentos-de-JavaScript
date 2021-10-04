const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediasDosAlunos = [10, 7, 9, 6];

// includes -> boolean (true/false)
// indexOf -> 3

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + ', a sua média é ' + listaDeNotasEAlunos[1][indice];
    } else {
        return "Aluno não esta cadastrado";
    };
};

console.log(exibeNomeNota("Nemo"));