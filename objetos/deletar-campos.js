const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
        nome: "Saruman",
        classe: "mago"
    },
    status: "desaparecido"
}

delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem)
console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined