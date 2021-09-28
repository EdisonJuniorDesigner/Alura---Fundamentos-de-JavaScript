// declaração de função

function minhaFuncao(param) {
    // bloco de código
}

// minhaFuncao("param");

// expressão de função

// const soma = function(n1, n2) {return n1 + n2};
// console.log(soma(1, 1));

// diferença principal: HOISTING
// funções e var são "listadas" no topo do arquivo.

console.log(apresentar());

function apresentar(){
    return "olá";
}

console.log(soma(1, 1));
const soma = function(n1, n2) {return n1 + n2};