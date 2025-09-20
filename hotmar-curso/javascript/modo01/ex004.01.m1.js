//alert("ola mundo")

//prompt("Escreva aqui")
/*
alert('Bom dia!!')

var escreva = prompt("Escreva alguma frase aqui!")

alert('O que vc escrevel ->'  + escreva)
*/

/*var numero = prompt("escreva um número")

alert('O numero que vc quer ' + numero)

*/

/*


var numero = parseInt(prompt('Escreva um número aqui!'));

dobro = numero + numero

alert('O número que vc escoleu ' + numero + ' o Dobro disso é ' + dobro)

*/

/*
var idade = 17;

if (idade > 18){
    console.log('pode compra')
} else {
    console.log('nao pode compra')
}
    */

/*
var idade = 25;

if (idade >= 18) {
    alert('Voce tem a idade, para compra.')
    var pedido =  prompt('Faça o seu pedido aqui.')
    console.log('pode compra')
    alert(' Seu pedido é ' + pedido )
    alert('muito obrigado, sua compra foi efetuada.')
    console.log('item comprado')
} else {
    console.log('não pode compra.')
    alert('vc nao tem idade usuficiente, volte quando for da idade.')

}

*/
var idade = 100;

if (idade >= 70){
    alert('Como vc tem 70 anos ou mais, tem desconto de 20%');
    var item = prompt('Escreva o item que vc quer');
    console.log('fazendo a compra');
    alert('vc quer o item ' + item);
    console.log('item comprado');
    alert('parabens, o seu ' + item + ' foi comprado com soceso!')
}else if (idade >= 18 ){
    alert('Por favor, qual sera o seu pedido.');
    console.log('fazendo a compra');
    var compra = prompt('Escreva o item que vc quer.');
    alert('O item que vc quer é ' + compra);
    console.log('compra feita');
    alert('Muito obrigado por compra com nosco.');
} else if (idade < 17){
    alert('vc nao pode compra');
    console.log('pessoa nao pode fazer compras');
    alert('ficaremos aguardado quando vc estiver idade, pr compra, ate mais e muito obrigado.');
}else {
    console.log('nada.')
}

