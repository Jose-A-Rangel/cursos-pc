let ingrediente =['agua','farinha','ovo','corante','sal'];

console.log(`total de indrediente: ${ingrediente.length}`)

// length (vai mostra a quantidade de item que vai ter na sua rei)

// como adicionar mais um item na lista, quando vc ja sabe a quantidade de item que tem

ingrediente[5]= 'cebola'
console.log(ingrediente)

//a melhor forma de colocar vai ver usando o push

ingrediente.push('cafe');
console.log(ingrediente)

// dessa forma fica mais facil por que ele so vai acresenta, sem precisar saber quantas coisa vai ter dentro da sua rei

// para remover

ingrediente.pop(); // vai remover o ultimo dos ingredientes.
ingrediente.shift(); // vai remover o primeiro ingrediente da lista.

console.log(ingrediente) // aqui vc nao ver a agua e nem o cafe