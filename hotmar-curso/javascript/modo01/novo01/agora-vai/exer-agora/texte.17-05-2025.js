
function criarAluno(nome,n1,n2){
    return{
        nome: nome,
        nota1: n1,
        nota2: n2,
        media:function(){
            return(this.nota1+ this.nota2)/2
        }
    }
}



var turma = [
    criarAluno("jose",9,9),
    criarAluno("kinha",9,9),
    criarAluno("alice",9,9),
    criarAluno("Daniel",9,9)
]
//arrey

var aluno = turma[1];

console.log(aluno)
console.log(aluno.media())