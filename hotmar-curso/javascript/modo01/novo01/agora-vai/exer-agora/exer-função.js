function media(n1,n2){
    var nota1 = n1
    var nota2 = n2
    var media = (nota1 + nota2)/2;
    //console.log(media);
    return media; // vai retornar a media(a função)
}

var resultado1 = media(6,9);
var resultado2 = media(5,9);

console.log(resultado1 + " E " + resultado2)


function saudaçao(){
    return "Ola Muando!";
}

var s = saudaçao() // vai entra na função e johar em s, com isso o s fica com o resultado da função.

console.log(s) // como o s esta com o resultado, é so descrever s. com console.log




//repedição. 

var alunos =["igor","Jose","Marcos","mariana","Joana","leo","joao"]

for(var i in alunos){
    console.log(alunos[i])
}

/*
td vez que ele for passar dentro do {} ele vai passar no var alunos e pegar um index, e vai continuar assim ate pega tds os valores.
*/

var alunos =["igor","Jose","Marcos","mariana","Joana","leo","joao"]

for(var i of alunos){
    console.log(i)
}

/*
ja o of vai pegar o elemento da quela index, assim ficando com o nome (ou o que seja la dentro.) 
*/
 // assim podendo trocar o i por alunos. ficando assim.

 var alunos =["igor","Jose","Marcos","mariana","Joana","leo","joao"]

for(var alunos of alunos){
    console.log(alunos)
}


