// estrutura condicionas..

// É uma estrutura que checa uma condicoes, e toma um determinado caminho dependendo dessa condicao. (vai ver se é verdade ou falso, ai com a responta ela vai reagir.)


//vendendo bebidade

// vai ser usado uma condicao.

// if [quer dizer si]
/*

var idade = 19

if (idade > 18) // essa checarem pecisa esta entre parente () ou vai dar erro.
//(portugues...[si idade for mair que 18])
console.log("pode")
// quando a checarem for realizado o que estiver a baixo do console.log vai sobre a reação, como a var anterior mente era 17, o (pode) nao apareceu, e o (nao pode) foi o unico que apareceu, pq de certa forma ele nao esta sendo ligado a condiçao. simplismente ele esta fora, entao vai aparecer de qual forma.



// else [quer dizer si não]

console.log('Não pode')

*/
/*
var idade = 25;

if (idade >= 18)
    console.log(" pode")
else
console.log("não pode")
*/

/*
o que o pc esta lendo

varial var o numero colcoa (idade)

se(if ) o numero for maior ou igual que 18((idade > 18)), vai acontecer o que estiver a baixo(console.log(" pode")).
se nao(else), vai acontecer o que estiver aqui em baixo(console.log("não pode")).
*/


//bloco de comando {}, usado para td que tiver dentro dele vai ser usado, ou menor dizendo, vai entra na reação.
/*
var idade = 25;

if (idade >= 18){
    console.log(" pode");
    console.log("Qual o seu pedido");
    alert('pode pedir')
    var pedido =  prompt('escreva o seu peido')
    alert('seu pedi ' + pedido)
}
else {
    console.log("não pode");
    console.log("volte futuramente");
}

*/

// com o bloco de comando{} td o que esta dentro vai mostra.


/*
var idade = 47;

if (idade >= 35){
    console.log("pode");
    console.log("Qual o seu pedido?");
}
else if (idade >=18){
    console.log("pode")
    console.log("Mostre a identidade");
    // quando temos mais que um else é colocado, else junto com if.
    // o ultimo fica so com else.
}
else {
    console.log("não pode");
    console.log("Volte futuramente");
}
*/
/*

var idade = 15;

if (idade >= 18 && idade <= 70) {
    console.log("pode");
    console.log("Qual o seu pedido?");
}
else {
    console.log("não pode");
    console.log("Volte futuramente!!");
}
*/
//&& (e) as duas tem que esta falidas, se nao vai dar falso.

// || (ou) ja esse seindo um valido ta bom. 


var idade = 15;

if (idade < 18 || idade > 70) {
    console.log("pode");
    console.log("Qual o seu pedido?");
}
else {
    console.log("não pode");
    console.log("Volte futuramente!!");
}
