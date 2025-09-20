/*arrey*/

var aulos = new Array("igor","Jose","Marcos", "maria"); /*a menos usada.*/
// array é uma estrutura de dados que pode amarzenar varios dados.

console.log(aulos[3])
// o zero é a primeira pocisao do arrey


var aulo = ["igor","Jose","Marcos", "maria","parceira","elaine"];

console.log(aulo.length) //length -> mostra tds que tem na arry.

for(var i =0; i< aulo.length; i++){
    console.log(aulo[i])
}
// com o for (repedição) é colocado na equação, ja ajuda muito, com o i-> variavel, i menor que alinos(so vai ate uma certa quantidade de alunos) e o i++ é o que faz a somo de td.

for(var i in aulo){
    console.log(aulo[i])// vai pegar o index (in)
}
for(var i of aulo){
    console.log(i)
}

// vai pegar o elemento primeiro! (of)






