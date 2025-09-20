// 1. faça um loop que mostre todas as frutas.
let frutas =['maça', 'banana', 'uva', 'caqui','melancia', 'melão','maracuja', 'mamao'];
frutas.push('mamão papaia','manga')

/*for (let n= 0; n< frutas.length; n++){
    console.log(frutas[n])
}
    */

for (let i in frutas){
    console.log(frutas[i]);
}

// 2. conte de 1 até 100 atraves de um while.

let numero = 0 ; 
while (numero <= 100){
    console.log(numero);
    numero++;
}