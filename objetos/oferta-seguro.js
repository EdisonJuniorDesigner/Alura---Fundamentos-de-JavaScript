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

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    /*
    * verifica e inclui determinado dado.
    * passamos no includes o array que queremos pegar.
    * retorna true ou false.
    * na condição abaixo estamos verificando se o obj no caso
    * tem um "dependentes" se caso for "true/verdadeiro" ele
    * dispara o console.log com a oferta para o "André".
    */
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

// keys pega as chaves no caso "nome"
// values os valores no caso "André"
// entries converte tudo em arrays
console.log(Object.values(cliente));
console.log(Object.entries(cliente));
oferecerSeguro(cliente);