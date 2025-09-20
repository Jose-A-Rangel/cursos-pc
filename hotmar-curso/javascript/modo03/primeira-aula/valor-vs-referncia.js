//arry

/*
let turmA = ["igor","José","Paula"];

let turmaB = turmA.slice();

turmaB.push("joao")
*/
// uma forma de adicionar so mento no B, e deixando o A lado.


/*
let turmA = ["igor","José","Paula"];

let turmaB = [...turmA];

turmaB.push("joao")

*/
// outra forma de adicionar no B e nao modificar nada do A.

//Obigeto.
/*
let alunoA = {nome:"igor",idade: 15};

let alunoB = Object.assign({},alunoA);

alunoB.idade = 25;
*/
/*
let alunoA = {nome:"igor",idade: 15};

let alunoB = Object.assign({},alunoA);

alunoB.idade = 25;
*/

let alunoA = {nome:"igor",idade: 15};

let alunoB = {...alunoA}

alunoB.idade = 25;






























