// pode ter metodos, que seria funcoes.
 
function calcmedia(){
    return (this.notas[0] + this.notas[1]) /2;
}


 var aluno = {
    nome: "Igor",
    notas:[9, 8],         

     media: calcmedia         

 }

var aluno1 ={
    nome:"joao",
    notas:[5,8],

    media:calcmedia

}


    console.log(aluno.nome)
    console.log(aluno.media())

    /*
    exeplicando: o aluno é da variavel(objeto) com isso td que ele quiser pegar
    dentro do objeto ele tem que usar a chave, como mostra acima(aluno.nome) com isso ele consegue mostra o nome.
    e pr mostra a nota é usando a função que ela vai fazer a conta, assim fica td ligado.
    */





    console.log(aluno1.nome)
    console.log(aluno1.media())

    // como dito acima, é usando td que esta dentro do objeto, porem precisa das chaves. 


 // quando temos uma função dento de um objeto, essa função vai ser chamada de metodo.

 // this -> quer dizer isso. entao ele vai mudar dependendo do contesto, ele é sempre usado em contesto de objetos.