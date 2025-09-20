let usuarios =["Adriano", "marcia","José"];

function inserirUsuario(nome){

    let promise = new Promise(function(resolve, reject){
        
        setTimeout(()=>{
        usuarios.push(nome);
         
        let error = false;

        if(!error){
            resolve();
        }else{
            reject({msg:"erro de qualquer coisa"})
        }


            
    },1000);
})

return promise;


function listarUsuarios(){
    console.log(usuarios);
}

inserirUsuario("igor").then(listarUsuarios).catch((error) => {
    console.log(error.msg)
});