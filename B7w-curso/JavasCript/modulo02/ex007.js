//funcoes dentro de funcoes:
/*
function square(x){
    return x*x;
}
console.log(square(2))
// usou apenas a funcao de cima.

// outra função que vai somar 2 numeros diferentes.

function addSquares(a,b)  {
let sqrA = square(a);
let sqrB = square(b);
return sqrA + sqrB;
}

console.log(addSquares(2,3));
// usou as 2 funcoes, uma dentro da outra 

*/
// criar uma de forma mais organizada.
/*
function addSquares(a,b)  {

    function square(x){
        return x*x;
    }

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
    }
    
    console.log(addSquares(2,3));

    */

// Quando temos que cria duas funcoes dentro da outra é melhor usar arrow function

function addSquares(a,b){
    const square = (x) => {
        return x* x;
    }
    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2,3));
