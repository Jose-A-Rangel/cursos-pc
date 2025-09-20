/*
Crie uma função que valide usuario e senha.
Usuario correto: pedro
Senha correto:123
*/
//Uso da função:

function validar(usuario, senha){
    if (usuario ==='pedro' && senha ==='123'){
        return true;
    } else {
        return false;
    }
}

let usuario ='pedro';
let senha = '123';
let validade = validar(usuario, senha);
if (validacao){
    console.log('Acesso concedido');
} else{
    console.log('Acesso NEGADO!');
}