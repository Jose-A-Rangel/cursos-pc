function novoAluno(nome, idade){
    return{nome, idade}
}
let alunos = [
    novoAluno("Maria",23),
    novoAluno("josé",45),
    novoAluno("marcia",29),
    novoAluno("joao",35)

]
function idadeDaTurma(total, aluno){
    return total + aluno.idade;
}

console.log(alunos.reduce(idadeDaTurma,0));

//o reduce, vai reduzi td a entrada de uma arrey numa unica entrada. essa entrada pode ser uma somatoria, uma media tbm.