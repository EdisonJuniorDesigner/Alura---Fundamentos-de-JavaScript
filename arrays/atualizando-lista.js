const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

// listaDeChamada.splice(1, 2, 'Rodrigo');

// para só adicionar e não remover com o splice é só utilizar o zero
// agorase eu passar 1 por exemplo ele excluiria a "Ana".
listaDeChamada.splice(2,0,'Rodrigo');

console.log(`Lista de chamada: ${listaDeChamada}`);