const nome = "Ed";
const idade = 2021-1998;
const cidadeDeNascimento = "Rio de Janeiro";

// const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade do " + cidadeDeNascimento;

const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade do ${cidadeDeNascimento}`;

console.log(apresentacao);

const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)