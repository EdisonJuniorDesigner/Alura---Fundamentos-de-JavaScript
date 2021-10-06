//Converter JavaScript em JSON
const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
});
console.log(jsonLivro);

//Converter JSON em JavaScript
const objLivro = JSON.parse(jsonLivro)
console.log(objLivro)