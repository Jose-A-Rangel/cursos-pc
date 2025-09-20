function criarAluno(nome, n1, n2){

    return{
        nome:nome,
        nota1:n1,
        nota2: n2,
        media: function(){
            return(this.nota1 + this.nota2)/2;
        }
    }



}

var turma =[
    criarAluno("igor",9, 6),
    criarAluno("joao",7,4),
    criarAluno("Marcela",8,7.9)
    
]

var aluno = turma[0];

console.log(aluno);
console.log(aluno.media())