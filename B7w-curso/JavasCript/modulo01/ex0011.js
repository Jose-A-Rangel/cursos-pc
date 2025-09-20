// condicional ternario.


let isMember = true;

let shipping = isMember ? 2 : 10;
// (isMember) a condicional (?) deu certo 2 (:) deu errado 10;
console.log(isMember ?'vc é membro' : "vc nao é membro");
console.log("frete: " + shipping);

let age = 45; //pode autera 

let isAdult = ((age >= 18 && age < 60) ? 'sim' : 'Não');

console.log(isAdult);