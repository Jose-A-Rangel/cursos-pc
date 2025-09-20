var aluno ={
    matricula:1,
    nome:"jose",
    telefone:63387461,
    cidade:"uma cidade ai"

}

var aluno1 ={
    matricula:2,
    nome:"jow",
    telefone:543687461,
    cidade:"cidade nova"
}
var aluno2 ={
    matricula:3,
    nome:"jow",
    telefone:543687461,
    cidade:"cidade nova"
}
// pegar objetos
var alunos=[aluno,aluno1,aluno2]
console.log(alunos)


var {matricula, nome, cidade} = aluno
console.log(matricula)
console.log(nome)
console.log(cidade)





// fazer auteracao com objetos.



let alunoA = {...aluno}

alunoA.telefone= 873891
alunoA.cidade = "guianases"

alunoA.matricula = 3
 console.log(alunoA)
 console.log(aluno)

 



