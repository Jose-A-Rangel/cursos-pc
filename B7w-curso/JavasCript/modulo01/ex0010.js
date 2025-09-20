//substitua o @ pela condicional correta para que 
// o resultado seja TRUE

let x = 10;
let y = 5;
console.log(x > y);

// substitua o @ pela condicional correta para que 
// o resultado seja FAlSE

let w = "10";
let z = 10;
console.log(w === z);

//substitua o @ pela condional correta para que 
// o resultado seja true
let a = 10;
let b = 5;
console.log(x != y); /* !=  -> é diferente */

//cria uma condional para verificar se o preço da 
// carne esta barato ou caro. PS ate 45 esta barato.

/*eu que fiz*/
let preco = 40.3;

let precocerto = preco <= 45 || preco > 45;

if (precocerto) {
    console.log("Carne esta barata");
} else{
    console.log("Carne esta cara")
}
/* o prefessor que fez, e ta mais simples. */

let preeco = 40.3;

if (preeco <= 45){
    console.log("A carne esta barata")
} else {
    console.log("A carne esta cara")
}
