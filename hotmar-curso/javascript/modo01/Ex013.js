//objeto
/* modo 01
var aluno = { nome: "igor", notas: [8, 8], 

// pode ter metodos, que é a mesma cooisa que uma função.


media: function (n1 , n2){
    return (n1 + n2)/2;
}
}

console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]))

var aluno1 = {
    nome:"José",
    notas:[6,8],

    media: function (n1, n2){
        return (n1 + n2)/2;
    }
}

console.log(aluno1.nome)
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]))






// quando tem uma funçaõ dentro um objetos, essa forção vai ser chamado de metudo.

*/  

// modo 02
/*
function calcMedia (n1 , n2){
    return (n1 + n2)/2;
}


var aluno = { nome: "igor", notas: [8, 8], 

    media: calcMedia
}

    // pode ter metodos, que é a mesma cooisa que uma função.
    
    
    
    
    console.log(aluno.nome)
    console.log(aluno.media(aluno.notas[0], aluno.notas[1]))
    
    var aluno1 = {
        nome:"José",
        notas:[6,8],

        media: calcMedia
    }
    
    
    
    console.log(aluno1.nome)
    console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]))


    // this -> quer dizer isso. sempre vai ser usado em conseito de objetos.

    **/

    /// modo 03

    function calcMedia(){
        return (this.notas[0] + this.notas[1])/2;
    }
    var aluno = {
        nome: "igor",
        notas:[9,8],

        media: calcMedia
    }

    var aluno1 = { 
        nome: "Joao",
        notas: [5,8],

        media: calcMedia
    }

    console.log(aluno.nome)
    console.log(aluno.media());

    console.log(aluno1.nome)
    console.log(aluno1.media())

