// aula 01

//window.alert("ola mundo!!") // aqui é so um alerta

// number
/*
var a = 5;
var b = 8;
var c = a + b;

console.log(c)

// strinf virando number.

var q = "3";
var w = "5";
var e = q + w;
console.log(e)// vindo que aqui nao da, entao vai ter que fazer alguma coisa para inverter esse paperl. colocando parseImt e parseFloat , vai fazer a transformação de uma strinf pr um number.

// parseImt (para numeiros, inteiros)

// parseFloat (para numeros, quebrados)

var r = parseInt(q) + parseInt(w); // é colocado a parseInt() pq o valor é inteiro
console.log(r);

// Aula 02
// && conjução.
// o que seria conjução, seria uma verificação, e so vai passar quando os 2 passarem.
*/
/*
var idade = 6;
// true (verdade) false (falso)
var maior = idade >= a;
var menor = idade <= b;

var a = 20;
var b = 10

var entre = maior && menor;

console.log("A idade  dele é  ", idade);
console.log("Maior que vinte ", maior);
console.log("menor que trita ", menor);
console.log("Entre " +  a + " e " + b +" entre");

*/
// criando um explo de conjunção.

/*
// para dirigir.

var idade = 9;

var novo   = idade >= q;
var adulto = idade <= w;
var passou = idade >= e;

var q = 10;
var w = 25;
var e = 85;

var entre =  adulto && passou;

console.log("menor de idade!", novo);
console.log("ja pode dirigir seu veiculo ", adulto);
console.log("É maior que " + e + " anos, nao pode mais dirigir. ");
console.log("se esta entre " + q + " e " + e +" anos, pode dirigir" );

// a logica nao deu certo aqui kkk

*/

// || (alt + 124 -> |) disjução  

/*
var idade = 100 ;

var a = 50;
var b = 40;

var menor = idade <= a;
var maior =  idade >= b;



var gratuidade = menor || maior;

console.log("idade ", idade );
console.log("o valor de "+ b + " é menor que "+ idade , maior);
console.log("O valor de  "+ a +" é maior que "+ idade , menor);

*/

// ex003 
/*

var numero = parseInt(prompt("Digite um numero"))

var dobro = numero + numero;

alert ("o dobro de "+ numero + " é " + dobro)
*/

// usou o parseint para trasforma o strig em number.


// ex004
/*
var idade = 1;

if (idade >= 70){
    alert("Como vc tem 70 anos ou mais, tem desconto de 20%");
    var item = prompt("escreva o itemque vc quer");
    console.log("fazer a compra");
    alert("vc quer o item " + item);
    console.log("item comprado");
    alert("parabens, o seu " + item + " foi comprado com socesso!")
} else if (idade >= 18){
    alert("Pro favor, qual sera o seu pedido.");
    console.log("fazendo a compra");
    var compra = prompt("escrva o item que vc quer");
    alert("o item que vc quer é " + compra );
    console.log("compra feita");
    alert("muito obrigado por compra com nosco");
}else if (idade < 17){
    alert("vc nao pode compra");
    console.log("pessoa nao pode fazer compras");
    alert("ficaremos aguardado quando vc estiver idade, pr compra, ate mais e muito obrigado.")
}else{
    console.log("nada")
}
    */
/*
alert("ola, gostaria de fazer uma compra com a gente?");
var nome = prompt("poderia escrver o seu nome");

var idade = 17;

if(idade >= 70){
    alert("Vc pode compra qual quer coisa com desconto de 20%, venha "+ nome + " fazer uma compra");
}else if (idade >= 18 || idade <= 69){
    alert("Ola, " + nome + " vc pode fazer o seu pedido");
    console.log("ja pode fazer a compra");
}else if (idade <= 17 ){
    alert("Bom " + nome + "vc não tem idade para poder compra nada na loja.")
}

*/

// ex05 operação ternaria é representado por ?
/*

var idade = 20;

idade >= 18 ? console.log("pode") : console.log("nao pode")
*/

// ex006 
/*
var nota1 = 5.0;
var nota2 = 6.0;

var media = (nota1 + nota2)/2;

if (media >= 7){
    console.log("voce passou com media " + media);
}else {
    console.log("Sua nota " + media + " nao foi o sulficiente para passar.")
}
*/

// 2 (nota para passar)

/*
var nota1 = 9.0;
var nota2 = 9.0;

var media2 = (nota1 + nota2)/2;

var conceito = ""

if (media2 >= 8 ){
    conceito = "Ótimo";
}
else if (media2 >= 6.5){
    conceito = "Bom";
}else {
    conceito = "Regular";
}

console.log(media2);
console.log(conceito);

// maneira nova (Switch)

// vai ser ligada na função //2

switch(conceito){
    case "Ótimo":
    console.log("Parabens, vc é um otimo aluno")
    break; // é preciso, ou pode pegar os demais.
    case"Bom":
    console.log("vc esta quase perfeito")
    break;
    case"Regular":
    console.log("Estude mais um pouco")
    break;
    default:
        console.log("hover algum erro")
        break;
}

*/
/*
var numero = 5 

for (var vez = 0; vez < numero; vez++){
    console.log("executando o for")
}
console.log("acabou")
*/
/*
var numero = 5 

for(var vaz = 0; vaz < numero; vaz++){
    console.log("executado o for, pela " + vaz + " vez")
}

console.log("acabou")

var nu = 6;

*/
/*

var nu= 6;

for (var i = 0; i< nu; i++){
    console.log("execute o for, pela " + (i + 10) + " vez" )
}
console.log("acabou")
*/

//ex008

// arry -> é um conjuto de variavel seuencias

// length -> é o tamanho do arry 
/*
var alunos = ["igor", "jose", "marcos", "mariana", "joana", "leo", "joao"]
/*
for (var i in alunos){
    console.log(alunos)
}
    */
/*
for (var i of alunos){
    console.log(alunos)
}

*/
/*

var alunos = new Array("igor", "José", "Marcos", "Mariana");
console.log(alunos[0])

var pessoas = ["igor", "José", "Marcos", "Mariana"]
console.log(alunos.length)
*/
/*

function saudaucao(){
    return"Ola Mundo";
}
var s = saudaucao();
console.log(s);
*/
/*
function medida (n1, n2){
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2)/2;

    return media;

}

var resultado = medida(6,7);

var m = medida;

var resultado2 = m(2,3);

console.log(resultado);
console.log(resultado2);

*/

/*

var med = function (b1, b2){
    return (b1 + b2)/2;
}
var d = med(5,15);

console.log(d);

// funçao de setas =>
    var dia =(d1, d2) =>{
        return(d1 + d2)/2;
    }

    var f = dia(6,8)

    console.log(f);

*/
var nome = ["igor", "José", "jura", "Nubia"]; // arrey
var notaA=[7.0, 8.5, 9.0];
var notaB=[5.6, 8.9, 7.8];

function media(n1,n2){
    return (n1 + n2)/2
}

function passou(media){
    if(media >7){
        return"Aprovado";
    }else{
        return"Reprovado";
    }
}


for (var index in nome){
    var nota1 = notaA[index];
    var nota2 = notaB[index];

    var m = media(nota1, nota2);
    console.log(nome[index] + " - " + nota1 + " - " + nota2 + " - " + m + " - " + passou(m))
}





































































