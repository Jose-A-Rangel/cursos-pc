/*
Crie uma função que valide usuario e senha.
Usuario correto: pedro
Senha correto:123
*/
//Uso da função:

function validar(usuario, senha){
    if(usuario === 'pedro' && senha ==='123'){
        return true;
    }else {
        return false;
    }
}

let usuario = 'pedro01';//pedro
let senha = '1234';//123
let validacao = validar (usuario, senha);
if (validacao){
    console.log('Acesso concedido');
} else{
    console.log('Acesso NEGADO!')
}