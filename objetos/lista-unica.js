const clientes = [{
        nome: "André",
        cpf: "123456789",
        dependentes: [{
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
    },
    {
        nome: "Juliana",
        cpf: "789456123",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
        }],
    }
]

const listaDependentes = [];

//Sintaxe de Espalhamento (Spread syntax) => "..."

// método adaptado por mim com for, caso tenha vários clientes neste objeto
for (i = 0; i < clientes.length; i++) {
    listaDependentes.push(...clientes[i].dependentes);
}

// método feito no curso
// const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.log(listaDependentes);

// mostrar o console em formato de tabela
console.table(listaDependentes);