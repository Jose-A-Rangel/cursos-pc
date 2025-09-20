// 1
var nota1 = 5.0;
var nota2 = 6.0;

var media = (nota1 + nota2)/2;

if (media >= 7){
    console.log("voce passou com media " + media);
}
else {
    console.log("Sua nota " + media + " nao foi o suficiente para passar")
} 


// 2 (nota para passar)

var nota3 = 8.0;
var nota4 = 9.0;

var media2 = (nota3 + nota4)/2;

var conceito = ""

if (media2 >= 8) {
    conceito = "Ótimo";
}
else if (media2 >=6.5) {
    conceito = "Bom";
}else {
    conceito = "Regular";
}
console.log(media2);
console.log(conceito);

// manera nova (switch)

// vai ser ligada na função // 2

switch(conceito){
    case"Ótimo":
    console.log("Parabens, vc é um otimo aluno")
    break; // é preciso, ou pode pegar os demais.
    case"Bom":
    console.log("vc esta quase perfeito")
    break;
    case"Regular":
    console.log("Estude mais um pouco")
    break;
default://  caso nao tiver nem uma das opiçoes ele vai ser adicionado, (as opocao sao sempre os case).
    console.log("hove algum erro")
    break;

}

// case sao as condiçoes.(o que estiver dentro do case é a reacao que vai ser tomada. tem o case otimo, case bom e case regular. quando nao tem case, vai ser o defaul!!)

// default caso ele nao for nem um desces.




