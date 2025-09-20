var pessoa ={
    name: "jose silva",
    idade: 32,
}

var contato ={
    telefone: 8765432,
    email: "Jose@gmail.com"
}

var copia = {...pessoa, cidade: "Rio de janeiro", ...contato }
copia.idade = 88;

console.log(pessoa);
console.log(copia)