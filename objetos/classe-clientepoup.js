class Cliente {
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo(){
        console.log(this.saldo);
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
    }
}

class ClienteContaCorrente extends Cliente {
    constructor(nome, email, cpf, saldo, saldoContaCorrente){
        super(nome, email, cpf, saldo);
        this.saldoContaCorrente = saldoContaCorrente;
    }

    depositarContaCorrente(valor){
        this.saldoContaCorrente += valor;
    }
}

const andre = new ClientePoupanca("Andre", "andre@email.com", "123456789", 100, 200);
const edison = new ClienteContaCorrente("Edison", "edison@email.com", "123456789", 300, 1000);

console.log(andre);
console.log(edison);