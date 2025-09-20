//Callback é uma função que é passada como argumento para outra função, para ser executada depois de algum processo.

let usuarios =["Adriano", "marcia","José"];

function inserirUsuario(nome, Callback){
    setTimeout(()=>{
        usuarios.push(nome);
        Callback();
    },1000);
}


function listarUsuario(){
    console.log(usuarios);
}

inserirUsuario("igor");
listarUsuario()