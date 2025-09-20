function novoAluno(nome, idade){
    return{nome, idade}
}


let alunos= [
    novoAluno("mario", 23),
     novoAluno("José", 45),
      novoAluno("Marcia", 29),
       novoAluno("joao", 35)
]



function temMenosde30(aluno){
    return aluno.idade <30
}

let alunosComMenosde30 = alunos.filter(temMenosde30)
console.log(alunosComMenosde30)

function temMaior30(aluno){
    return aluno.idade >30
}

let alunosComMaior30 = alunos.filter(temMaior30)
console.log(alunosComMaior30)


