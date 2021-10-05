const cliente = {
    nome: "André",
    idade: 36,
    cpf: "123456789",
    email: "andre@gmail.com",
    fones: ["5591234569", "5595465212"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
};

// Acessando e adicionando elementos do array "dependentes"
cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
});

// console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014");

console.log(filhaMaisNova);
console.log(filhaMaisNova[0].nome);