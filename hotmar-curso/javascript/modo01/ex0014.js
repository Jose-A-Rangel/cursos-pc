/*

var aluno = { nome: "igor", nota01: [7.5, 5.0]

}

console.log(aluno.nota01[0]);


// incerendo no objeto

aluno.matricula = 12345;

console.log(aluno);

// no console vc vai conseguir ver.

console.log(aluno.matricula);
*/

// aula 02


/*
quando o objeto tem uma função é chamado de metodo.
*/

/*
var aluno = {
    nome:"igor", notas:[5, 5],

    media: function (n1, n2){
        return (n1 + n2) /2;
    }
}

console.log(aluno)
console.log(aluno.nome)
console.log(aluno.media(5,8))

*/

/*
function calcMedia() {
    return (this.notas[0] + this.notas[1])/2;
}
var aluno = {
    nome:"igor",
    notas:[9,8],

    media: calcMedia 
}

var aluno1 = {
    nome: "Jose",
    notas: [5,8],

    media: calcMedia
}

console.log(aluno.nome)
console.log(aluno.media());

console.log(aluno1.nome)
console.log(aluno1.media());

*/

// aula 03 objetos

// primeira maneira!!
/*

var calcMedia = function (){
    return (this.notas1 + this.nota2)/2;
}

// é criado a função do lado de fora para nao ter que repitir em tds os lugares. 

var turma = [
    {nome: "Igor",
     notas1: 9,
     nota2: 7,
     media: calcMedia // aqui ele vai puchar o função
    }, // a rey se separa os elemento por vigula.
    {
     nome: "José",
     notas1: 5,
     nota2: 8,
     media: calcMedia 
    }
]

var aluno = turma[1]; // porra de uma letra kkk
console.log(aluno);
console.log(aluno.media());

// o igor é o aluno zero e o jose é o aluno 1

*/

// segunda maneira com menos coisa e pequena chanse de errar.

/*

function criarAluno(nome, n1, n2){
    return{
        nome:nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2)/2;
        }
    }
}
// aqui vai ter menos chanse de errar, na hora de pasasr o nome e notas do aluno.
var turma =[
    criarAluno("igor", 9, 6),
    criarAluno("josé", 4, 4),
    criarAluno("Marcela", 4, 7),
]

var aluno = turma[2];
/*

console.log(aluno);
console.log(aluno.media()),

*/
/*

for (var aluno of turma){
    console.log(aluno.nome + " - " + aluno.media());
}

*/
// objeto resumo

// [] -> arey , {} -> objeto




function obj(n, s){

    this.nome = n;
    this.sobrenome = s;

}

var a = new obj("Igor", "Oliveira")

console.log(a.sobrenome)


