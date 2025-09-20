/*
else (ele vai priorizar a primeira  que estiver certa. se as outras tbm tiver, ele nao vai ver. ele da somente prioridade da primeira que deu certo. entao vai ser por ordem.)

é a condicional dupla ou tripa, acho que pode ter ate mais.
*/ 

let idade = 18;

if (idade < 18){
    console.log("voce é uma criança.");
} else if (idade >= 18 && idade <60){
    console.log("voce é um adulto.");
} else if (idade >=60) {
    console.log("voce é um idoso.")
}

