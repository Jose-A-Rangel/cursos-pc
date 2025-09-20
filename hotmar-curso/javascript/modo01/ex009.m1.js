// função.

/*
a função da um apilido para um bloco de comando, toda vez que for chamando esse apilido, o computador vai executar o bloco de notas que esta dentro da função.

function media() => essa é a função.
*/

// function media(n1,n2,n3){
//     var nota1 = n1;
//     var nota2 = n2;
//     var nota3 = n3
//     var media = (nota1 + nota2 + nota3)/2
//     console.log(media);
//  }

//  media(8,4,0)
//  media(7,9,5)
 

 /*
 td o que esta dentro do {} é a forma de declarar a função.


 quando a funlação estiver funcionando, nao vai mais ficar precisando de escrever direto o mesmo bloco de notas para cara coisa que vc precisa.

 */

//  function media(m1,m2,m3){
//     var primeiro = m1;
//     var segundo = m2;
//     var terceiro =m3;
//     var media = ((m1 + m2)*m3)/2;
//     console.log(media);
//  }
// media(5,6,8)

// // agora fazer todas os exerciocios. 

// // alert("bom dia ")

// // var ola = prompt("escreva alguma coisa aqui.")


// // alert(ola)

// // alert("loja riccel")

// // var compra = prompt("O que vc dezeja compra? ")
// /*
// var  idade = 71;

// if ( idade >= 70){
//     console.log("vc é um idoso, vai ter um descontro de 20%");
//     alert(" vc tem disconto de 20% ");    
// } else if(idade >= 35){
//     console.log("vc ja é um adulto top, nao tem desconto.");
//     alert("vc não tem disconto com nada.");
// } else if (idade >= 20 ){
//     console.log("vc é um adulto adolecente");
//     alert("agora vc ja pode se ferrar.");
// } else if (idade >= 18){
//     console.log("ja pode tira sua carteira de motorista.");
//     alert("ja pode dirigir carro.");
// }else if(idade >= 15 ){
//     console.log(" adolecente.");
//     alert("adolecente");
// }else{
//     console.log("criança");
//     alert("criança");
// }

// */

// /* ola conseguir fazer um certo!!*/


// //  operação ternaria.

// // var idade = 15 

// // var pode = idade >= 18? true : false

// // console.log(pode)


// var nota = 10.0;
// var nota0 = 10.0;

// var media0 = (nota + nota0)/2;

// var conceito = ""

// if (media0 >=8){
//     conceito = "otimo";    
// }
// else if (media0 >=6,5){
//     conceito = "Bom";
// }
// else {
//     conceito = "Regular";
// }
// console.log(media0);
// console.log(conceito);

// // maneira nova (switch)

// switch(conceito){
//     case"otimo": // ele é usado como fose um id
//     console.log("Parabens, vc é um otimo aluno");
//     break;
//     case"Bom":
//     console.log("vc esta quase pefeito")
//     break;
//     case"Regular":
//     console.log("estude mais um pouco")
//     break;
//     default: //caso não tiver nem uma das opcoes ele vai ser adicionado,(as opção são sempre os case)
//     console.log("hover algum erro")
//     break;

// }

// var numero = 5 // vai ser o numero de vezes que vc vai repitir.

// for (var vez = 0; vez <numero; vez++){
//     console.log("exercute o for")
// }

// var numer = 8;
// for(var i = 0; i < numer; i++){
//     console.log("executado o for, pela " + i + "vez")
// }
// console.log("acabou")

// // tbm da para fazer uma maneira mais rapida.

// var num = 0;
// while(num < 10){
//     console.log("Numero " + num);
//     num++;
// }

//aula de hoje

//arry -> é um conjunto de variavez secuencias 

// length-> é o tamanho do arry

var alunos = ["igor", "José", "Marcos", "Mariana", "Joana", "Leo", "Joao"]

// for (var i = 0; i < alunos.length; i++){
//     console.log(alunos[i])
// }

for (var i in alunos){
    console.log(i)
}


// in (o que eu enttendi. ele vai jogar td que esta no alunos pr o i)

// outra variação 
//usando of.
// ele vai pegar o elemento da quele indice.

for (var i of alunos){
    console.log(alunos)
}





