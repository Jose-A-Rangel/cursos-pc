

function novoAluno(nome, idade){
    return{nome, idade}
}


let alunos= [
    novoAluno("mario", 23),
     novoAluno("José", 45),
      novoAluno("Marcia", 29),
       novoAluno("joao", 35)
]

//console.log(alunos)

for(let aluno of alunos){
    if(aluno.idade < 30){
        console.log(aluno.nome)
    }
}