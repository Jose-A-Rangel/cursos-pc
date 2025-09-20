// for (reve para repetir alguma coisa, u, certo numeros de vezes)


var numeros = 5 // numero de vezes que vc quer que repita(nesse caso é 5)

for( var vez =0; vez < numeros; vez++){
    console.log("executando o for")
}

/* dentro do for 
var vez =0 -> aqui é criado uma var(variavel) para saber quantas vezes ele ta se repitindo. essa vez ta comesando com o 0 (mais pode ser colocar qualquer outro numero)

vez < numeros -> se a vez for menor que numero (numero aqui é = 5) ele vai ezecuta o que estiver dentro do bloco dele, que seria  (  {}   ). 

vez++ -> isso aqui é o que vai fazer a coisa girar.

e todso vao ser separado por ; 


quando tiver correndo o programa vai ficar no  (executando o for) o numero de vezes que foi repitido.


quando todo para ser ser verdadeiro, o que ta dentro do for, ele vai sair. ai vai para 
a ezecuzao do console.log('Acabou')



*/

console.log('Acabou')


// outra forma para vc conseguir ver, seria fazendo assim.


var numero = 5 // numero de vezes que vc quer que repita(nesse caso é 5)

for( var vaz =0; vaz < numero; vaz++){
    console.log("executando o for, pela " + vaz + " Vez")
}

/*
aqui vc vai conseguindo ver as etapas, da auteração do vaz

*/
console.log('Acabou')


/*
esse vaz aqui nao pe tao normal ser usado, normalmente é mais usado o i ou k no lugar do var
*/


// explo

var nu = 6;

for (var i =0 ; i < nu; i++){
    console.log("execute o for, pela " + (i + 10) + " vez")

}
console.log('acabou')



//     OUTRO tipo de laso     
//                whille()


var num = 0;

while (num < 10) {
    console.log("Numero " + num);
    num++;

    // se nao tiver o num++ isso aqui vai ser infinito, pq sempre vai ser menor que o 10
}
/*
vai funcionar assim...
whille vai precisar de uma descrição que no caso é (num < 10) e o que tiver dentro do {} é que vai ser repitido, no final socolocar o num++, ele vai mostra para o codigo o tempo de para.
*/

/*
Usando whille nao precisa saber quando comesa e quando vai acabar.
*/

console.log("Acabou")


/* ver a aula 12min*/

