var aluno ={
    matricula: 1234,
    nome: "Marcos",
    telefone:987654432,
    cidade:"barra do pirai"
}
var aluno1 ={
    matricula: 5678,
    nome: "Jose",
    telefone:65528754,
    cidade:"moocar-sr chame"
}

var aluno2 ={
    matricula: 91023,
    nome: "Jow",
    telefone:52458754,
    cidade:"caarr-sr chame"
}


/*
var {matricula, nome, telefone} = aluno;
console.log(matricula)
console.log(nome)
console.log(telefone)

*/
// vc conseguie pega so mente uma parte de td a var alunos. 

// objeto
/*const {matricula, nome, ...outros} = aluno

console.log(outros)
*/

// array
// quando esta usando a array a pocição é muito inportante. se nao estiver certo, pode calsar erros. 
var alunos = [aluno, aluno1, aluno2]
var [Marcos, ...outros] = alunos
console.log(Marcos)
console.log(outros)