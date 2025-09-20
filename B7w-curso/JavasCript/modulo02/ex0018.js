let frutas = ['maça', 'uva', 'laranja', 'banana'];
/*
console.log(frutas);// vai mostra
console.log(frutas.length);// mostra a quantidade de items que tem na sua rei

frutas.push('kiwi') // para adicionar outras item

console.log(frutas);
console.log(frutas.length);// mostra a quantidade de items que tem na sua rei


// para remover item

frutas.pop();// deleta o ultimo
console.log(frutas)
console.log(frutas.length)


frutas.shift() //deleta o primeiro
console.log(frutas)// mostra o item
console.log(frutas.length) // mostra a quantidade de  itens.

// separado

frutas.join('-> '); // '' o que for dentro do '' vai fazer a separação. normalmente é solcoado, vigula e espaço. porem tem que ser saldo em algum lugar, ai vai o console.log.
console.log(frutas.join('-> '))

*/

// pra trocar 

/*
console.log(frutas); // normal

frutas[0] = 'Pera'  // fazer a troca
console.log(frutas);// viu aqui trocou o primeiro pela a pera.

*/

console.log(frutas); // normal

frutas[1] = 'Pera'  // fazer a troca
console.log(frutas);// viu aqui trocou o primeiro pela a pera. 
// cada numero que for colocado no [] a pera vai entra no logar.


// outra forma de fazer a troca, porem esse aqui vc vai troca o ultimo, sem aumenos saber a quantidade que tem de itens.


let animais = ['gatos', 'cachorro','periquito','galinha','baleias']

animais[animais.length - 1]= 'tubrão'
console.log(animais)

// ou tbm pode fazerde outra forma.

animais.pop();
animais.push('leopardo')

console.log(animais)






