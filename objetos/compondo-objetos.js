const cliente = {
    nome: "André",
    idade: 36,
    cpf: "123456789",
    email: "andre@gmail.com",
    fones: ["5591234569", "5595465212"]
};

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
};

console.log(cliente);

cliente.dependentes.nome = "Sara Silva";

console.log(cliente);