// 1. No array abaixo, qual o numero que pega a ferrari.
let carros = ['BMW','Ferrari','mercado'];
let x = 1;
console.log(carros[1])

// 2 troque a ferrari por audi
carros[1]= 'Audi';// com isso vai fazer a auteração
console.log('2. lista com Audi:');

console.log(carros)

// 3.adicine o volvo a lsita
// para adiconar vamos usar o push que nao precisa saber a quantidade de item.

carros.push('Volvo');
console.log('3. lista com volvo:');
console.log(carros)

// 4. exiba quantos itens tem no array

console.log('4. itens no array:');
console.log(carros.length)// length vai mostra dos os item que tem na lista.


