/*

let cores =['preto', 'branco', 'azul','vermelho'];
cores.push('verde') //acresentando cores

/*
for ( let n = 0; n < cores.length; n++){
    console.log(cores[n])

    //cores.length ele vai passa todas as cores que tem no seu let.
}
    */

// outra forma de fazer tbm

/*for (let i in cores){
    console.log(cores[i]);
}

*/

/*

for (let cor of cores){
    console.log(cor);
}
*/

let cores =[
    {nome:'preto', qt: 10},
    {nome: 'azul', qt: 5},
    {nome: 'vermelho', qt:15}
];


for (let cor of cores){
    console.log(`Nome: ${cor.nome} - ${cor.qt}`);
}
