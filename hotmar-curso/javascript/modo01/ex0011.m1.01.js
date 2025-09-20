// Nome do aluno - nota 1 - nota 2 - media - aprovação.

// var nome = ["igor", "José", "jura", "Nubia"];//arrey

// var notaA =[7.0, 8.5, 9.0];
// var notaB =[5.6, 8.9, 7.8];

// function media(n1, n2){ // função
//     return (n1 + n2)/2 
// }
// function passou(media) {
//     if(media>7){
//         return"Aprovado";

//     }else{
//         return"Reprovado";
//     }
// }

// for (var index in nome){
//     var nota1 = notaA[index];
//     var nota2 = notaB[index];

//     var m = media(nota1, nota2);

//     console.log(nome[index] + " - " + nota1 + " - " + nota2 + " - " + m + " - " + passou(m) )
// }

/*

function saudaucao(){
    return "Ola Mundo!"; // usando pr retornar o resultado.
}

var s = saudaucao();

console.log(s);

function saudaucao(){
    return "Ola Mundo, José";
}
var s = saudaucao; // como aqui o saudauçao esta sem (), o s fica como uma função tambem se usar o ().

console.log(s());



function media(n1, n2){
    var nota1 = n1;
    var nota2 = n2;

    var media = (nota1 + nota2)/2;

    return media;
}

var resultado = media(6, 7);
 var m = media;

 var resultado2 = m(2, 3);

 console.log(resultado);
 console.log(resultado2);

 // que é a mesma coisa que 




 var med = function (b1, b2){
    return (b1 + b2)/2;
 }

 var d = med(2, 4);
 console.log(d);


 // função de setas =>

    var dia = (d1 , d2) =>{
        return (d1 + d2)/2
}
 var f = dia(6,8)
 console.log(f)

*/

/*
function media(n1, n2, n3){
    var nota1 = n1;
    var nota2 = n2;
    var nota3 = n3;

    var media = (nota1 + nota2 + nota3)/2
    console.log(media);
}
media(8, 9, 10)
media(8, 10, 200)

*/
/*
function media (m1, m2, m3){
    var primeiro = m1;
    var segundo = m2;
    var terceiro = m3;
    var media =(m1 + m2+ m3)/2;
    console.log(media);
}
media(5,4,8)

*/
/*
var idade = 70

if (idade >= 70 ){
    console.log("vc é um idoso, vai ter disconto");
    alert("pessoa mais venha")
} else if (idade >= 35 ){
    console.log("pessoa adulta")
    alert(" ja esta trabalhando")
} else if (idade > 25){
    console.log("estudando e trabalhando")
    alert("sei la")
} else{
    console.log(" Só trabalha")
}

 */
// operação pernaria 

/*

var idade = 25;

var pode = idade >= 18?  console.log("verdade") : console.log("MENTIRA");
*/
/*
var nota = 10.0;
var nota0 = -10.0;

var media0 = (nota + nota0)/2;

var conceito = ""

if (media0 >= 8){
    conceito = "Otimo";
}
else if (media0 >= 6.5){
    conceito = "Bom";
} else {
    conceito = "Regular";
}
console.log(media0);
console.log(conceito);

// maneira nova (switch)

switch (conceito){
    case"Otimo": 
    console.log("parabens");
    break;
    case"Bom":
    console.log("ta bom");
    break;
    case"Regular":
    console.log("É bom estudar")
    break;
    default:
        console.log("Hover algum erro");
    break;    
        

}

*/

// repetição.
/*
var numero = 5

for (var vez = 0; vez < numero; vez++){
    console.log("exercute o for")
}
    */

var numero = 8;
for (var i = 0; i < numero; i++){
    console.log("executado o for")
}




 

