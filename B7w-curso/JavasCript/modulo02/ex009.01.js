// lista de item

let ingrediente = ['agua','farinha','ovo','corante','sal'];
// mostraos item

console.log(ingrediente)

// para mostra a quaridade de item que tem um rei. vau usar o length

console.log(`total de ingrediente: ${ingrediente.length}`)

// agora que vc sabe a quantidade que tem de item pode acrecentra. uma da forma vc precisa sabe a quatidade e a outra nao, como ja sabemos a quantidade vamo usa a que precisa saber do valor.

// temos 4 item , vamos colocar o 5... lembrando que comesa a conta do 0 e por conta disso que so te, 4 item.

ingrediente[5] ='cebola'
console.log(ingrediente);
console.log(`total de ingrediente: ${ingrediente.length}`)

// outra forma de colocar. essa nao precisa de saber a quantidade de itens, vai usar o push.

ingrediente.push('cafe')
console.log(ingrediente);//mostra 
console.log(`total de ingrediente: ${ingrediente.length}`) // sabe a quantidade


// agora vamos aprender a remover itens. 

ingrediente.pop()// vai remover o ultimo item
console.log(ingrediente);//mostra 
console.log(`total de ingrediente: ${ingrediente.length}`) // sabe a quantidade

ingrediente.shift()// vai remover o primeiro item
console.log(ingrediente);//mostra 
console.log(`total de ingrediente: ${ingrediente.length}`) // sabe a quantidade

/*
ingrediente.pop(2)
console.log(ingrediente);//mostra 
console.log(`total de ingrediente: ${ingrediente.length}`) // sabe a quantidade

ingrediente.shift();
console.log(ingrediente);//mostra 
console.log(`total de ingrediente: ${ingrediente.length}`) // sabe a quantidade

*/

// nao vai molar colocando numero no () 





