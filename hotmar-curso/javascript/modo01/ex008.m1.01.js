// alert('Bom dia, como vc ta?')

// prompt('escreva aqui o seu nome.')

// var nome = prompt('escreva o seu nome')

// alert('O seu nome é ' + nome)


// var idade = 20;

// if(idade <= 10){
//     console.log('vc é criança')
//     alert('vc ainda é criança')
// } else if ( idade >= 11){
//     console.log('vc é adolecente')
//     alert('vc é um adolecente')
// } else if (idade >= 18){
//     console.log('vc agora é um adulto adolecente.')
//     alert('vc é um adolegente adulto.')
// } else if(idade > 70 ){
//     console.log('vc agora é idoso')
//     alert('vc é idoso.')
//}


// operação ternaria 

// var idade = 25;

// idade >= 18 ? console.log('pode'): console.log('nao pode')

// tbm pode ser feito assim, uma maneira mais simples.

// var idade = 18;

// var pode = idade >= 18? true : false;

// console.log(pode)

// entao a operação ternaria ela vai ajuda a fazer um deste na parte da verificação. 


// var nota1 = 8.0;
// var nota2 = 6.0;

// var media = (nota1 + nota2)/2;

// if (media >=7){
//     console.log('Voce passou com media ' + media);
// } else {
//     console.log('sua nota ' + media + ' nao foi o suficiente para passar')
// }

// var nota = 10.0;
// var nota0 = 10.0;

// var media0 = (nota + nota0)/2;

// var conceito = ""

// if (media0 >= 8){
//     conceito = "otimo";
// }
// else if (media0 >=6.5){
//     conceito = "Bom";
// }
// else {
//     conceito = "Regular";
// }
// console.log(media0);
// console.log(conceito);

// //mabeira nova (switch)

// switch(conceito){
//     case"otimo": // ele é usado como fose um id
//     console.log('Parabens, vc é um otimo aluno')
//     break;
//     case"Bom":
//     console.log("vc esta quase pefeito")
//     break;
//     case"Regular":
//     console.log("estude mais um pouco")
//     break;
//     default: // caso não tiver nem uma das opcoes ele vai ser adicionado,(as opção sao sempre os case)
//     console.log("hover algum erro")
//     break;
// }


// var numero = 5 // vai ser o numero de vezes que vc vai repitir

// for (var  vez =0; vez < numero; vez++){
//     console.log("exercute o for")
// }


// var numero = 8;

// for(var i = 0; i < numero; i++ ){
//     console.log("executado o for, pela " + i + " vez")
// }

// console.log("acabou")


// tbm da pr fazer uma maneira mais rapida.

// var num = 0;
// while(num < 10){
//     console.log("Numero " + num);
//     num++;
// }
// console.log("Acabou")


//aula de hoje.


//arry -> é um conjunto de variavez secuencias 

//length-> é o tamanho do arry

var alunos = ["Igor", "josé", "Marcos", "Mariana", "Joana", "leo", "Joao"]

// for(var i = 0; i < alunos.length; i++){
//     console.log(alunos[i])
// }

// outra forma 

for (var i in alunos){
    console.log(i)
}// in (o que eu entendi, ele vai jogar td que esta no alunos pr o i)

// outra variação 

// usando of.

// ele vai pegar o elemento da quele indice.
for (var i of alunos){
    console.log(alunos)
}


