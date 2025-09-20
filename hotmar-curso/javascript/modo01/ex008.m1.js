//arrays
// é uma estrutura de dados que pode amarzenar varios dados em secuencia. 

//           1                 (o mais antigo)
var alunos = new Array("Igor", "José", "Marcos", "Mariana");

console.log(alunos[0])


var pessoas = ["Igor", "José", "Marcos", "Mariana"]
console.log(alunos.length) // vai mostra a quantidade que tem dentro da varialvel (length)


// a forma mais facil de saber tds os alunos.

var aluno = ["Igor", "José", "Marcos", "Mariana"]

/*for( var  i = 0; i < aluno.length; i++)
console.log(aluno[i])

*/

// quando se junta for com a força do arrays, tem outra forma de fazer isso.

for (var i in aluno){
    console.log(aluno)
}

// o que é in ->  a cada vez que ele passa por {} ele vai passar index de alunos e vai colcar no i, vai comesar com 0, 1... ate o ultimos que estiver.


//tem uma variação disso aqui.

for (var i of aluno){
    console.log(i)
}

// of -> ele vai pegar o elemento (que seria igor, jose, marcos, mariana)

// tbm

for (var aluno of aluno){
    console.log(aluno)
}

// assim fica mais sentido deixar o aluno como ele vai pegar o elemento.

// for com in vai pegar  o index

// for com of vai pegar o elemento(ele vai vares o arrey inteiro, vai pegar a quele elemeno, dentro da variavel. )