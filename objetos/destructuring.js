const numerosPares = [2,4,6]
const numerosImpares = [1,3,5]

// spread operator para desestruturar os arrays e não fazer um array de arrays
const numeros = [...numerosPares, ...numerosImpares] // [2,4,6,1,3,5]

const [num1, num2, ...outrosNumeros] = [1,2,3,4,5] // 1 2 [3,4,5]

// Destructuring com valor default que no caso é o "Ed"
// usado bastante para formulários caso não temos certeza se o dado
// será digitado
const [nome1 = "Ed"] = [] // "Ed"

const pessoa = {
    nome: "Ed",
    idade: 23
}

const pessoaComTelefone = { // nome: 'Ed', idade: 23, telefone: 2321132133
    ...pessoa, telefone: 2321132133
}

const { idade } = pessoa

// console.log(idade)

function imprimeDados({nome, idade}){
    // const {nome, idade} = dados;
    console.log(nome, idade);
}

imprimeDados(pessoa)