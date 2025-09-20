var nomes = ["Igor","José","Marias"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [7.4, 8.6, 9.3];


// precisa de uma função para calcular a media 

function media(n1,n2){
    return(n1 + n2)/ 2    
}   

function passou(media){
    if(media>7){
        return "Aprovado";
    }else{
        return "Reprovado";
    }
}



for(var index in nomes){

    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var m = media(nota1, nota2);

    

    console.log(nomes[index] + " - " + nota1 + " - " + nota2 + " - " + m + " - " + passou(m))
}


