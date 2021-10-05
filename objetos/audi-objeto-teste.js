const carro = {
    marca: "Audi",
    modelo: "A8",
    ano: 2021,
    cor: "preto",
    potencia: 220
};

carro.precos = {
    precoDeFabrica: 80000,
    precoFipe: 70000,
    parcelas: 36
};

const porcentagem = 0.3;
const descontoDeEntrada = porcentagem * carro.precos.precoDeFabrica;
const bonus = 5000;

const exibirValorParcelado = ((entrada) => {
    if(entrada >= descontoDeEntrada){
        const valorParceladoComDesconto = ((carro.precos.precoDeFabrica - entrada) - bonus) / carro.precos.parcelas;
        return console.log(`Valor das Parcelas com entrada de ${porcentagem * 100}% do carro: ${valorParceladoComDesconto}`);
    }
    else if (entrada < descontoDeEntrada){
        const valorParcelado = (carro.precos.precoDeFabrica - entrada) / carro.precos.parcelas;
        return console.log(`Valor das parcelas sem Desconto com entrada: ${valorParcelado}`);
    }
    else{
        const valorParceladoComAcresc = ((carro.precos.precoDeFabrica * 0.5) + carro.precos.precoDeFabrica) / carro.precos.parcelas;
        return console.log(`Valor das parcelas sem entrada com acréscimo: ${valorParceladoComAcresc}`);
    }
});

console.log(carro);
exibirValorParcelado(25000);
exibirValorParcelado(10000);
exibirValorParcelado();