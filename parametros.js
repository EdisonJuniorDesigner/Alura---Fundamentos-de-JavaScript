// parâmetros de função

function soma(x, y){
    return x + y;
}

console.log(soma(10, 15));
console.log(soma(20, 245));
console.log(soma(-500, 60));

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha é ${idade}`;
}

// console.log(nomeIdade("Edison", 23));

function multiplica(n1 = 1, n2 = 1){
    return n1 * n2;
}

console.log(multiplica(soma(4, 5)));

function comParametro(param) {
    console.log(param)
}
comParametro()