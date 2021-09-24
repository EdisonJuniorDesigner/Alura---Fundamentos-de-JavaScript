class Conta {
    constructor(numero, agencia, saldo){
        this.numero = numero;
        this.agencia = agencia;
        this.saldo = saldo;
    }

    depositar(quantia){
        this.saldo += quantia;
        console.log(`O valor depositado foi de R$ ${quantia} - Total R$ ${this.saldo}`)
    }

    saque(quantia){
        if(quantia <= this.saldo){
            this.saldo -= quantia;
            console.log(`O valor do saque foi de R$ ${quantia} - Total R$ ${this.saldo}`)
        }
    }
    
}

const c1 = new Conta(111, 222, 50.25);
c1.depositar(55);
c1.saque(25);
