//objetos

// para criar um objetos é nessesario usar chaves {},

// sempre vai ter uma chave e um valor.

var aluno ={nome: "Igor", nota1:7.5} // cahve é o nome, valor seria igor.

console.log(aluno)// vai aparecer tds
console.log(aluno.nome) // vai aparecer somente o que ta dentro do ""
console.log(aluno["nome"])//tbm da para fazer assim
console.log(aluno.nota1) //vai aparecer somente o que ta dentro do ""


var alun = { nom: "jose", notas2:[7.5, 5.0]} // uma arrey

console.log(alun["notas2"][1]) // usando um arrey 
console.log(alun["notas2"][0])


// tbm da para incirir coisas no objstos depois de ser criado, do lado de fora, exemplos.

aluno.matricula = 12345; // aqui a chave é maricula e o valor é 12345.

console.log(aluno)// vai mostra td que tem dentro 
console.log(aluno.matricula) // vai motra o que tem dentro da chave.


aluno["sobrenome"]="oliveira"; //assim tbm da para passar, o ["sobrenome"] tbm vira uma chave e o "oliveira" vira o valor.

console.log(aluno)
 // outra forma de passar.

 var novaproc = "novo" // virou uma chave

 aluno[novaproc] = "Rangel" // setornou um valor.

 console.log(aluno)


 /*
 entao um objeto vai parecer uma arry, vc podendo colcoar muitas coisas nele, porem com uma diferencia que em qualquer lugar do codigo, vc pode acresenta mais coisas, sem ter que volta la pr o inicio da formula.
 */