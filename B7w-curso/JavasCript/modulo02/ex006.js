//variaves dentro e fora de funçoes.
/*
function add(){
    let count = 0;
    count++;
}
add();
add();

console.log(count);
*/
// nesse caso não vai ter como usar forma da funçao.
/*
let count = 0;

function add(){
    
    count++;
}
add();
add();

console.log(count);

*/
// quando é criado uma variavel fora da função ela pode chegar a funcionar, 

// essa variavel vai pode ser usado dentro de qualque funçôes, como ela foi criado fora da funçao.



let count = 1;// variavel global

function add(){
   let count = 0;// vaviavel de escopo local. ou privada
    count+= 10;
}
add();
add();
add();
add();
add();

console.log(count);

// nesse caso ela vai dar prioridade para o que vai esta dentro da função, pro conta disso que vai dar zero.

// nesse caro quando tem duas variaves (uma dentro (variavel escopo ou privada) e a outra fora(variavel global)), a função vai dar prioridade para o que esta dentro. por conta disso so vai ser usado o let count = 0 e vai mostra no console.log(count) o valor zero.