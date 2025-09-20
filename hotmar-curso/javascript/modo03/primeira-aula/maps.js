function novoAluno(nome,idade){
    return{nome,idade}
}

let alunos=[
    novoAluno("mario",23),
    novoAluno("jose",45),
    novoAluno("Marcia",29),
    novoAluno("joão",35),
]

function temMenosde30(aluno){
    return aluno.idade < 30;
}

function nomeIdade(aluno){
    return aluno.nome + " tem " + aluno.idade + " anos";
}

console.log(alunos.map(nomeIdade));