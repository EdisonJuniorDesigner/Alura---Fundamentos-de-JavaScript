const cliente = {
    nome: "André",
    idade: 36,
    cpf: "123456789",
    email: "andre@gmail.com",
    fones: ["5591234569", "5595465212"],
    dependentes : [
        {
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }
    ],
    saldo: 100,
    depositar:function(valor){
        this.saldo += valor;
    },
    sacar:function(valor){
        if(valor <= this.saldo){
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor} efetuado com sucesso.`);
        } else {
            console.error("Saldo insuficiente");
        }
    }
};

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);
cliente.sacar(70);
console.log(cliente.saldo);