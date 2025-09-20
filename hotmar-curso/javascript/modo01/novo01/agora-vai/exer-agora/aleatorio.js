/*var idade = 6;

var maior20 = idade >= 20;
var menor30 = idade <= 30;

var entre = maior20 && menor30;

var ent = maior20 || menor30;

console.log("Maior que vinte", maior20)
console.log("Menor que trinta ", menor30)

console.log("entgre 20 e 30 ", entre);

console.log(ent)

*/

/*
var nome = prompt("Poderia me dizer o seu nome?");

var numero = Number.parseFloat(prompt(" poderi me dizer um numero"));

var numer = Number.parseFloat(prompt("Poderia me dizer outro numero "));

var soma = numero + numer

alert("Ola Sr "+ nome + " a soma do valor "+ numero + " com "+ numer + " vai ser "+ soma)

*/

/*
var idade = 81;

if ( idade>= 18)
    console.log("pode")
else
    console.log("Não pode")

    */
/*
    var idade = 36

    if (idade <18){
        console.log('Nao pode toma bebida alcolica')
        console.log('pode ser agua ou refri')
    }else if(idade>=18 && idade<=30) {
        console.log('pode toma serveja, porem tem que mostra o RG.')
    }
    else{
        console.log('Pode tomar cerveja avontade.')
    }

    */

    //operador ternario

/*
    var idade = 19

    idade >= 18? console.log("pode") : console.log("nao pode")

    */
/*
    var notas1 = 2;
    var notas2 = 2;

    var meida = (notas1 + notas2)/2 ;

  var conceito = ""

  if(meida >=8){
    conceito = "ótimo";

  }
  else if (meida >= 6.5){

    conceito = "bom";
  }
  else{
    conceito = "Regular";
  }


  console.log(meida)
  console.log(conceito)



switch(conceito){

    case"ótimo":
    console.log("Parabesn vc é um otimo aluno " + meida)
    break;
    case"bom":
    console.log("vc esta indo muito bem " + meida)
    break;
    case"Regular":
    console.log("estude mais um pouco " + meida)
    break;
    default:
        console.log("houve algun erro")
    break;
    
}
    */

/*

var numero = 5;

for (var vez = 0; vez < numero; vez++){
    console.log("executando o for, pela "+ vez + " vez")
}
console.log("acabou")
*/
/*
var alunos = ["igor", "jose", "Marcos","maria","kinha"];
console.log(alunos.length)

for (var i = 0; i <alunos.length; i++){
    console.log(alunos[i])
}
*/
/*
function media(n1,n2,n3){
    var notas1 = n1;
    var notas2 = n2;
    var notas3 = n3;

    var media =(n1 + n2 + n3)/2

    return media
}

var resultado1 = media(1,3,4);
var resultado2 = media(4,5,6)

console.log(resultado1)
console.log(resultado2)
*/
/*
var media = function(n1,n2){
    return (n1 + n2)/2;
}
var m = media(5,8);

console.log(m)



*/

/*

  var nomes = ["igor", "José", "Maria"];
  var notaA = [7.0, 6.5, 9.5];
  var notaB = [8.0, 7.0, 8.5];

  function media(n1,n2){
    return (n1 + n2)/2
  }

  function passou(media){
    if(media>7){
        return "Aprovado";
    }
    else{
        return"Reprovado";
    }
  }

  








  for (var index in nomes){
    var nota1 = notaA[index];
    var nota2 = notaB[index];

    var m = media(nota1, nota2);


    console.log(nomes[index] + " - " + nota1 + " - " +nota2 + " - " + m + " - " + passou(m));
  }


*/

// objeto

/*

*/
/*
var aluno = {
    nome: ["jose","kinha", "nubia", "meu amor"],
    idade:[30, 23, 45, 32, 13]
}
console.log(aluno)

aluno.matricula = 1234

console.log(aluno)

aluno["sobrenome"] = "Rangel"

console.log(aluno)

var novaProp = "prietro"

aluno[novaProp] = "Range"

console.log(aluno)
*/


/*

var aluno = {
    nome: "Jose",
    notas:[7,9],


    media: function (n1,n2){
        return(n1 + n2)/2;
    }

}


console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]))

*/



/*
function cauculo(n1, n2){
    return(n1 * 2 + n2)/3;
}

var aluno ={
    nome:"Jose",
    notas: [7,8],

    media: cauculo
}

var aluno1 ={
    nome:"Jow",
    notas: [9,8],

    media: cauculo
}

console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0],aluno.notas[1]))

console.log(aluno1.nome)
console.log(aluno1.media(aluno1.notas[0],aluno1.notas[1]))


*/

/*
function calcmedia(){
    return(this.notas[0]+this.notas[1])/2;
}

var aluno ={
    nome:"igor",
    notas:[7,8],

    media: calcmedia
}

var aluno1 ={
    nome:"Jose",
    notas:[7,4],

    media: calcmedia
}

console.log(aluno.nome)
console.log(aluno.media());


console.log(aluno1.nome)
console.log(aluno1.media());

*/


/*
function criarAluno(nome, n1, n2){
    return{
        nome:nome,
        nota1:n1,
        nota2:n2,
        meida:function(){
            return(this.nota1 + this.nota2)/2;
        }
    }
}


var turma = [
    criarAluno("Jose",9,8),
    criarAluno("Kinha",3,6),
    criarAluno("Jow",5,3),
    criarAluno("Joae",5,7),
    criarAluno("ze",3,1),
]

var aluno = turma[2];

turma.forEach(function(elemento){
    console.log(elemento)
})
*/





































































































































