/*let pessoa ={
    nome:'Jose',
    sobrenome:'Rangel',
    idade: 90
}

console.log(pessoa.nome + ' ' + pessoa.sobrenome);

*/

// fazendo com uma função.

let pessoa = {
    nome:'jose',
    sobrenome: 'Rangel',
    idade:50,
    //função
    nomeCompleto: function(){
        return this.nome + ' ' + this.sobrenome; // pode ser esse (1)

        // ou tbm pode fazer assim

        return `${this.nome} ${this.sobrenome}`;(2)
        // this que dizer esto.
        // o this tbm vai ajudar, quando vc coloca ele, ele ja entrga os nome.
    }
}

console.log(pessoa.nomeCompleto());
