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
    }
};

let relatorio = "";

for(let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue;
    } else {
        relatorio += `
        ${info}: ${cliente[info]}
        `;
    }
}

// console.log(typeof cliente.depositar);
console.log(relatorio);