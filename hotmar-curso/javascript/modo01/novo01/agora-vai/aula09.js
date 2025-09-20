var nomes = ["Igor","José","Maria"];//arrey
var notasA = [7.0, 6.5, 9.5]; //arrey
var notasB = [8,0, 7.0, 8.5];//arrey

//função
function media(n1,n2){
     return(n1 + n2)/2 //vai retornar
}


function passou(media){
    var resultado = "reprovado"
/*
    if (media >7){
        resultado = "Aprovado"
    }
    return resultado;

    */

    if (media >7){
        return "aprovado";
    }else{
        return"reprovado";
    }
}

//repedição


for(var index in nomes){
    var nota1 = notasA[index];
    var nota2 = notasB[index];

    var m = media(nota1, nota2);

    console.log(nota1+ " - " + nota2 + " - " + notasB[index] + " - " + m + " - " + passou(m)

); // vai imprimidir os nomes
}