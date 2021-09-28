// Funções antes
function apresentar(nome){
    return `meu nome é ${nome}`;
}

// Arrow-Function (ES6)

// depois do "=" se a função tiver parâmetro nós passamos ela
// que no caso é o "nome" depois da flecha (arrow) passamos o
// corpo da função que no caso é "meu nome é ${nome}";
// se tiver mais conteúdos seria só abrir chaves e colocar as
// regras de negócio normalmente, inlcuindo o return.

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (n1, n2) => n1 + n2;

// Arrow Function com + de 1 linha de instrução
const somaNumerosPequenos = (n1, n2) => {
    if(n1 || n2 > 10){
        return "somente números de 1 a 9";
    } else {
        return n1 + n2;
    }
}

// Hoisting: arrow function se comporta como expressão,
// então devemos chamar ela depois que for declarada.