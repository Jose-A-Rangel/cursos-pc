// objetos -> vai cria uma determinada chave pr se dar com ele.
// sempre vai ter uma chave e um valor.

var aluno = {
    nome:"Joao",
    nota1: [7.5, 5.9]
}

console.log(aluno.nota1[0]); // pode ser dessa forma 

console.log(aluno["nome"])// ou dessa forma.

console.log(aluno["nota1"][1])// pode ser tanto do jeito primeiro, quanto no segundo.


// forma de acreventa dento do objeto.

//forma um

aluno.matricula = 12345;// achei mais rapido de colocar

// forma 2

aluno["sobrenome"] = "Oliveira";

console.log(aluno)